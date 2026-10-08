import sys
from PIL import Image

def create_panorama(input_path, output_path):
    try:
        img = Image.open(input_path)
        w, h = img.size
        
        # 캔버스 가로를 3배로 생성
        new_w = w * 3
        new_img = Image.new('RGB', (new_w, h))
        
        # 정중앙에 원본 배치
        new_img.paste(img, (w, 0))
        
        # 왼쪽 채우기 (원본의 가장 왼쪽 20% 폭만 가져와서 계속 반복/거울반사)
        edge_w = int(w * 0.2)
        left_edge = img.crop((0, 0, edge_w, h))
        left_edge_flipped = left_edge.transpose(Image.FLIP_LEFT_RIGHT)
        
        # 왼쪽 공간(0 ~ w) 채우기
        current_x = w
        use_flipped = True
        while current_x > 0:
            patch = left_edge_flipped if use_flipped else left_edge
            paste_x = max(0, current_x - edge_w)
            paste_patch = patch.crop((0, 0, current_x - paste_x, h)) if current_x - paste_x < edge_w else patch
            new_img.paste(paste_patch, (paste_x, 0))
            current_x -= edge_w
            use_flipped = not use_flipped

        # 오른쪽 채우기 (원본의 가장 오른쪽 20% 폭만 가져와서 반복/거울반사)
        right_edge = img.crop((w - edge_w, 0, w, h))
        right_edge_flipped = right_edge.transpose(Image.FLIP_LEFT_RIGHT)
        
        # 오른쪽 공간(w*2 ~ w*3) 채우기
        current_x = w * 2
        use_flipped = True
        while current_x < new_w:
            patch = right_edge_flipped if use_flipped else right_edge
            paste_w = min(edge_w, new_w - current_x)
            paste_patch = patch.crop((0, 0, paste_w, h)) if paste_w < edge_w else patch
            new_img.paste(paste_patch, (current_x, 0))
            current_x += edge_w
            use_flipped = not use_flipped
            
        new_img.save(output_path, quality=95)
        print(f"Successfully created smart wide panorama: {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    create_panorama('public/original.jpg', 'public/banner1.jpg')
