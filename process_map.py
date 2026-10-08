from PIL import Image, ImageEnhance, ImageFilter

# 1. 약도 이미지 로드
img = Image.open('public/images/map_orig.jpg')
orig_w, orig_h = img.size
print(f"Original map size: {orig_w}x{orig_h}")

# 2. 2.5배 업스케일 (글씨와 약도 선명화)
target_w = int(orig_w * 2.2)
target_h = int(orig_h * 2.2)

upscaled = img.resize((target_w, target_h), Image.Resampling.LANCZOS)

# 3. 지도 글씨와 도로선 또렷하게 언샤프 마스크 적용
sharp = upscaled.filter(ImageFilter.UnsharpMask(radius=2, percent=180, threshold=1))

# 4. 대비 약간 주어 글씨 가독성 향상
enhancer = ImageEnhance.Contrast(sharp)
final_map = enhancer.enhance(1.08)

final_map.save('public/images/map_hd.jpg', quality=95)
print(f"HD map saved: {target_w}x{target_h}")
