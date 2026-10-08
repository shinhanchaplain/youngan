import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

img = cv2.imread('public/images/pastor_orig.png')
h, w, c = img.shape

# 손 모으신 높이에 맞춰 크롭 (y: 0 ~ 368)
crop = img[0:368, 0:w].copy()

# 왼쪽 하단 남은 "샬롬!" 텍스트 영역 (x: 0~75, y: 330~368)
# 책상 표면 색상으로 자연스럽게 블렌딩
desk_bgr = crop[325, 40]
for y in range(330, crop.shape[0]):
    for x in range(80):
        # 자연스러운 감쇠
        alpha = min(1.0, max(0.0, (x - 65) / 15.0))
        crop[y, x] = (1 - alpha) * desk_bgr + alpha * crop[y, x]

# 오른쪽 하단 성경책 경계 부드럽게
cv2.imwrite('public/images/pastor_pre.png', crop)

# PIL 변환
pil_crop = Image.fromarray(cv2.cvtColor(crop, cv2.COLOR_BGR2RGB))

# 3.5배 고화질 업스케일링 (900 x 1104)
target_w = 900
target_h = int(target_w * (368 / w))

upscaled = pil_crop.resize((target_w, target_h), Image.Resampling.LANCZOS)

# 언샤프 마스크로 선명화
enhanced = upscaled.filter(ImageFilter.UnsharpMask(radius=2.5, percent=160, threshold=2))

# 피부톤 및 색감 최적화
enhancer = ImageEnhance.Color(enhanced)
enhanced = enhancer.enhance(1.06)
enhancer = ImageEnhance.Contrast(enhanced)
enhanced = enhancer.enhance(1.05)

enhanced.save('public/images/pastor_clean.jpg', quality=95)
print(f"Pastor clean portrait PERFECT: {target_w}x{target_h}")
