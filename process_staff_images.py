import os
import urllib.request
from PIL import Image, ImageEnhance, ImageFilter, ImageOps
import numpy as np

os.makedirs('public/images/pastors', exist_ok=True)
os.makedirs('public/images/elders', exist_ok=True)
os.makedirs('public/images/school', exist_ok=True)

BASE_URL = "http://www.youngan.or.kr/data/tbl_member/"

pastor_files = [
    ("kim_js", "PU_1783173643_m5.jpg"),
    ("lee_sm", "PU_1452299574_m5.jpg"),
    ("jung_jh", "PU_1618641681_m5.jpg"),
    ("kim_gj", "PU_1701219636_m5.jpg"),
    ("byun_iw", "PU_1760062452_m5.jpg"),
    ("choi_dc", "PU_1405992022_m5.jpg"),
    ("han_jh", "PU_1413944099_m5.jpg"),
    ("lee_hs", "PU_1412644821_m5.jpg"),
    ("lee_dh", "PU_1507790904_m5.jpg"),
    ("han_as", "PU_1507783151_m5.jpg"),
    ("lee_sj", "PU_1462079259_m5.jpg"),
    ("kim_js2", "PU_1432721290_m5.jpg"),
]

elder_files = [
    ("son_hc", "PU_1352951256_m5.jpg"),
    ("cho_kh", "PU_1352951275_m5.jpg"),
    ("jang_hs", "PU_1352950883_m5.jpg"),
    ("lim_yg", "PU_1352951294_m5.jpg"),
    ("ko_gj", "PU_1352951310_m5.jpg"),
    ("jang_so", "PU_1352951368_m5.jpg"),
    ("kim_ys", "PU_1352951386_m5.jpg"),
    ("ra_bh", "PU_1352951759_m5.jpg"),
    ("cho_ks", "PU_1352951774_m5.jpg"),
    ("lim_bg", "PU_1352951902_m5.jpg"),
    ("park_cs", "PU_1352951965_m5.jpg"),
    ("cho_bb", "PU_1352951984_m5.jpg"),
]

school_files = [
    ("min_kh", "PU_1595684703_m5.jpg"),
    ("hwang_yj", "PU_1739093881_m5.jpg"),
    ("yang_ek", "PU_1670979390_m5.jpg"),
    ("kim_hk", "PU_1386379726_m5.jpg"),
    ("lee_ko", "PU_1335849865_m5.jpg"),
    ("lee_ms", "PU_1369443084_m5.jpg"),
    ("shin_yh", "PU_1543977407_m5.jpg"),
    ("shin_hg", "PU_1335579755_m5.jpg"),
    ("kim_oh", "PU_1543979980_m5.jpg"),
    ("lee_jm", "PU_1335597385_m5.jpg"),
    ("jung_sj", "PU_1507609876_m5.jpg"),
    ("cho_ji", "PU_1536134053_m5.png"),
]

def download_and_process(file_list, target_dir, bg_tint):
    """
    다운로드 및 배경 통일감 & 고화질 업스케일 처리
    bg_tint: (r, g, b) 배경 기본 톤
    """
    for name, orig_file in file_list:
        url = BASE_URL + orig_file
        local_orig = os.path.join(target_dir, f"orig_{name}.jpg")
        local_out = os.path.join(target_dir, f"{name}.jpg")
        
        try:
            # 다운로드
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as response, open(local_orig, 'wb') as out_file:
                out_file.write(response.read())
            
            # PIL 로드
            img = Image.open(local_orig).convert('RGB')
            w, h = img.size
            
            # 목표 크기 (정사각형 400x400으로 통일감 구축)
            target_size = 400
            
            # 중앙 중심 크롭 및 리사이즈
            min_dim = min(w, h)
            left = (w - min_dim) // 2
            top = max(0, int(h * 0.05)) # 얼굴 위치 감안 살짝 상단
            right = left + min_dim
            bottom = min(h, top + min_dim)
            
            cropped = img.crop((left, top, right, bottom))
            upscaled = cropped.resize((target_size, target_size), Image.Resampling.LANCZOS)
            
            # 인물 언샤프 마스크 (선명도 대폭 향상)
            sharp = upscaled.filter(ImageFilter.UnsharpMask(radius=2.5, percent=170, threshold=2))
            
            # 가장자리 비네팅 마스크 생성 (배경 색상 균일화)
            # 타원형 마스크로 얼굴 중앙은 100% 보존하고, 주변 배경을 세련된 스튜디오 틴트(bg_tint)로 부드럽게 감싸기
            mask = Image.new('L', (target_size, target_size), 0)
            center_x, center_y = target_size // 2, target_size // 2
            radius_x, radius_y = int(target_size * 0.44), int(target_size * 0.46)
            
            y_coords, x_coords = np.ogrid[:target_size, :target_size]
            dist = ((x_coords - center_x) / radius_x) ** 2 + ((y_coords - center_y) / radius_y) ** 2
            # dist <= 1 이면 0(인물 유지), dist > 1 이면 부드럽게 틴트 적용
            vignette_alpha = np.clip((dist - 0.75) / 0.55, 0, 0.75) * 255
            vignette_mask = Image.fromarray(vignette_alpha.astype(np.uint8), mode='L')
            
            # 스튜디오 배경 단색 생성
            tint_layer = Image.new('RGB', (target_size, target_size), bg_tint)
            
            # 블렌딩
            final_img = Image.composite(tint_layer, sharp, vignette_mask)
            
            # 색감 및 대비 최적화
            enhancer = ImageEnhance.Contrast(final_img)
            final_img = enhancer.enhance(1.05)
            enhancer = ImageEnhance.Color(final_img)
            final_img = enhancer.enhance(1.04)
            
            final_img.save(local_out, quality=92)
            print(f"Processed: {name}.jpg -> {target_size}x{target_size}")
            
        except Exception as e:
            print(f"Error processing {name} ({orig_file}): {e}")

print("=== 1. 목회자 사진 처리 (소프트 스튜디오 블루/그레이 톤) ===")
download_and_process(pastor_files, 'public/images/pastors', bg_tint=(235, 242, 250))

print("\n=== 2. 장로 사진 처리 (단정한 클래식 스튜디오 톤) ===")
download_and_process(elder_files, 'public/images/elders', bg_tint=(240, 242, 245))

print("\n=== 3. 교회학교 사진 처리 (화사하고 따뜻한 톤) ===")
download_and_process(school_files, 'public/images/school', bg_tint=(245, 247, 250))

print("\n모든 사진 처리 완료!")
