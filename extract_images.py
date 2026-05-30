from PIL import Image
import os

os.makedirs("src/assets/gallery", exist_ok=True)

# Page 1 - Profile photo (top-right area)
p1 = Image.open("src/assets/pdf-images/page_1.png")
# Profile photo is roughly top-right: x=1100-1650, y=150-750
profile = p1.crop((1100, 150, 1650, 750))
profile.save("src/assets/profile.png")
print("Saved profile.png")

# Page 3 - KSU Activities collage
p3 = Image.open("src/assets/pdf-images/page_3.png")
# Top-left speech photo
ksu1 = p3.crop((30, 100, 900, 650))
ksu1.save("src/assets/gallery/ksu_activities.png")
print("Saved ksu_activities.png")

# News clipping area
ksu2 = p3.crop((30, 650, 1100, 1200))
ksu2.save("src/assets/gallery/ksu_news.png")
print("Saved ksu_news.png")

# Bottom KSU collage
ksu3 = p3.crop((30, 1200, 1750, 2200))
ksu3.save("src/assets/gallery/ksu_protests.png")
print("Saved ksu_protests.png")

# Page 4 - more activities
p4 = Image.open("src/assets/pdf-images/page_4.png")
p4_crop = p4.crop((30, 50, 1750, 1300))
p4_crop.save("src/assets/gallery/ksu_state_coordinator.png")
print("Saved ksu_state_coordinator.png")

# Page 5 - Global NRK Meet
p5 = Image.open("src/assets/pdf-images/page_5.png")
p5_crop = p5.crop((30, 50, 1750, 2400))
p5_crop.save("src/assets/gallery/global_nrk_meet.png")
print("Saved global_nrk_meet.png")

# Page 6 - OICC Activities
p6 = Image.open("src/assets/pdf-images/page_6.png")
p6_crop = p6.crop((30, 50, 1750, 2450))
p6_crop.save("src/assets/gallery/oicc_activities.png")
print("Saved oicc_activities.png")

# Page 7 - UK Meeting / High Commissioner
p7 = Image.open("src/assets/pdf-images/page_7.png")
p7_crop = p7.crop((30, 50, 1750, 2450))
p7_crop.save("src/assets/gallery/uk_diplomatic.png")
print("Saved uk_diplomatic.png")

# Page 8 - London student activities
p8 = Image.open("src/assets/pdf-images/page_8.png")
p8_crop = p8.crop((30, 50, 1750, 2400))
p8_crop.save("src/assets/gallery/london_activities.png")
print("Saved london_activities.png")

# Page 9 - Embassy meeting
p9 = Image.open("src/assets/pdf-images/page_9.png")
p9_crop = p9.crop((30, 50, 1750, 2400))
p9_crop.save("src/assets/gallery/embassy_riyadh.png")
print("Saved embassy_riyadh.png")

# Page 10 - Yuvatharam / Election
p10 = Image.open("src/assets/pdf-images/page_10.png")
p10_crop = p10.crop((30, 50, 1750, 2400))
p10_crop.save("src/assets/gallery/yuvatharam_election.png")
print("Saved yuvatharam_election.png")

# Page 11 - Yuvatharam TV show
p11 = Image.open("src/assets/pdf-images/page_11.png")
p11_full = p11.crop((0, 50, 1785, 2000))
p11_full.save("src/assets/gallery/yuvatharam_tv.png")
print("Saved yuvatharam_tv.png")

# Page 12/13 - Articles
p12 = Image.open("src/assets/pdf-images/page_12.png")
p12_crop = p12.crop((30, 50, 1750, 2400))
p12_crop.save("src/assets/gallery/articles.png")
print("Saved articles.png")

print("\nAll images cropped and saved!")
