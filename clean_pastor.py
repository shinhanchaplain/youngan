import cv2
import numpy as np
from PIL import Image, ImageFilter

# 1. 이미지 로드
img = cv2.imread('public/images/pastor_orig.png')
h, w, c = img.shape

# 2. 텍스트 영역 마스크 생성
# 텍스트는 y >= 345 영역에 있음
mask = np.zeros((h, w), dtype=np.uint8)

# y >= 345 영역에서 흰색 글자와 검은 테두리 검출
roi = img[345:, :]
# 흰색 계열 (텍스트 내부)
gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
# 텍스트는 밝은 흰색/초록색 + 진한 테두리
# ROI 내에서 책상 배경은 어두운 갈색/검정(HSV나 BGR로 구분)
# 마스크를 좀 더 정밀하게 생성
text_mask_roi = np.zeros((roi.shape[0], roi.shape[1]), dtype=np.uint8)

# 텍스트 영역: x: 10 ~ 290, y: 350 ~ 440
# 성경책 부분(x > 180, y > 380)을 피하면서 텍스트만 타겟팅
for y in range(roi.shape[0]):
    for x in range(roi.shape[1]):
        actual_y = y + 345
        # 성경책 본체는 제외 (성경책은 x > 150이고 색상이 베이지/흰색)
        b, g, r = roi[y, x]
        # 글자 픽셀: 초록색/흰색 글씨 또는 짙은 테두리
        # "샬롬!" 은 초록색 글씨, 본문은 흰색 글씨 + 검은 테두리
        if x < 155:
            # 왼쪽 책상 위 글자 영역
            # 책상 배경은 진한 고동색/가죽색 (b < 60, g < 60, r < 90)
            if (r > 120 and g > 120 and b > 120) or (g > 150 and r < 100) or (r < 30 and g < 30 and b < 30):
                text_mask_roi[y, x] = 255
        elif x >= 155 and x < 280:
            # 성경책 위나 경계에 걸친 글자 영역
            if y < 70: # 성경책 위쪽이나 윗부분 텍스트
                if (r > 180 and g > 180 and b > 180) or (r < 40 and g < 40 and b < 40):
                    text_mask_roi[y, x] = 255

# 팽창(dilate)하여 마스크를 텍스트 테두리까지 넉넉하게 덮음
kernel = np.ones((5, 5), np.uint8)
text_mask_roi = cv2.dilate(text_mask_roi, kernel, iterations=2)

# 마스크 합치기
mask[345:, :] = text_mask_roi

# Inpaint 수행 (Navier-Stokes 및 Telea 결합)
inpainted = cv2.inpaint(img, mask, inpaintRadius=7, flags=cv2.INPAINT_TELEA)

# 3. 추가 정돈: 책상 부분 자연스럽게 블러 및 텍스처 보정
# 책상의 자연스러운 톤으로 패치
patch_h = 447 - 350
# x: 10~150, y: 350~440 영역을 책상 톤으로 부드럽게
cv2.imwrite('public/images/pastor_inpainted.png', inpainted)
print("Inpainted saved.")
