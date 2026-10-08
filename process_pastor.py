import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

# 1. 원본 로드
img = cv2.imread('public/images/pastor_orig.png')
h, w, c = img.shape

# 목사님 인물 상반신과 자연스러운 책상 구도 설정
# 원본 크기: 300 x 447
# 글씨가 있던 y >= 360 부분:
# 책상 표면을 자연스러운 짙은 가죽/목재 질감으로 매끄럽게 그라데이션 블렌딩
clean = img.copy()

# y: 355부터 아래는 성경책의 윗부분(x > 180, y < 380)과 책상
# 글자가 쓰여있던 영역(x: 10~290, y: 350~447)
# 책상 가죽 색상 샘플링 (y=340 주변의 어두운 갈색 톤)
desk_color = img[340, 50].astype(np.float32) # 어두운 책상 색

for y in range(355, h):
    # 아래로 갈수록 어두워지는 자연스러운 비네팅/책상 그림자
    factor = 1.0 - ((y - 355) / (h - 355)) * 0.4
    color = desk_color * factor
    
    for x in range(w):
        # 성경책(오른쪽 하단)은 보존
        # 성경책 영역: x > 165 and y > 375
        if x > 175 and y > 380:
            # 성경책 종이/가죽 커버 부분
            continue
        elif x > 155 and y > 365:
            # 성경책과의 경계 부드럽게
            alpha = (x - 155) / 20.0
            clean[y, x] = (1 - alpha) * color + alpha * clean[y, x]
        else:
            clean[y, x] = color

# 경계선 블러링으로 초자연스러운 음영 만들기
mask_blur = np.zeros((h, w), dtype=np.uint8)
mask_blur[350:, :180] = 255
clean_blur = cv2.GaussianBlur(clean, (15, 15), 0)
clean[mask_blur == 255] = clean_blur[mask_blur == 255]

# PIL로 변환 후 3배 초고화질 업스케일링 & 선명화
pil_img = Image.fromarray(cv2.cvtColor(clean, cv2.COLOR_BGR2RGB))

# 3배 확대 (900 x 1341)
target_w = 900
target_h = int(h * (target_w / w))
upscaled = pil_img.resize((target_w, target_h), Image.Resampling.LANCZOS)

# 인물 윤곽선 및 디테일 강화 (Unsharp Mask)
enhanced = upscaled.filter(ImageFilter.UnsharpMask(radius=2, percent=140, threshold=3))

# 대비 및 색감 보정 (인물 톤 화사하게)
enhancer = ImageEnhance.Color(enhanced)
enhanced = enhancer.enhance(1.08)
enhancer = ImageEnhance.Contrast(enhanced)
enhanced = enhancer.enhance(1.05)

enhanced.save('public/images/pastor_hd.jpg', quality=95)
print(f"Pastor HD image saved: {target_w}x{target_h}")
