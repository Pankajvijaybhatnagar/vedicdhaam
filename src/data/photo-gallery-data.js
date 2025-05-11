// ✅ Dynamic Image Import using Vite's import.meta.glob
const imagePaths = import.meta.glob("/src/assets/pics/*.{jpg,jpeg,png,mp4}", { eager: true });

// ✅ Function to get image by filename
function getImage(filename) {
  const path = `/src/assets/pics/${filename}`;
  if (imagePaths[path]) {
    return imagePaths[path];
  } else {
    console.error(`Image not found: ${filename}`);
    return null;
  }
}

// ✅ Button Text for Category
export const btnTextPhoto = [
  { text: "VIP Photos", category: "vip-photos" },
  { text: "All Photos", category: "all-photos" },
];

// ✅ VIP Photos Data (Only Available Photos)
export const vipPhotosData = [
  getImage("1.jpg") ? { img: getImage("1.jpg"), title: "VIP Photo 1", rows: 3, cols: 2 } : null,
  getImage("2.mp4") ? { img: getImage("2.mp4"), title: "VIP Video", rows: 4, cols: 2 } : null, // Video
  getImage("3.jpg") ? { img: getImage("3.jpg"), title: "VIP Photo 3", rows: 3, cols: 2 } : null,
  getImage("4.jpg") ? { img: getImage("4.jpg"), title: "VIP Photo 4", rows: 3, cols: 2 } : null,
  getImage("5.jpg") ? { img: getImage("5.jpg"), title: "VIP Photo 5", rows: 3, cols: 2 } : null,
  getImage("6.jpg") ? { img: getImage("6.jpg"), title: "VIP Photo 6", rows: 3, cols: 2 } : null,
  getImage("7.jpg") ? { img: getImage("7.jpg"), title: "VIP Photo 7", rows: 3, cols: 2 } : null,
  getImage("8.jpg") ? { img: getImage("8.jpg"), title: "VIP Photo 8", rows: 3, cols: 2 } : null,
  getImage("9.jpg") ? { img: getImage("9.jpg"), title: "VIP Photo 9", rows: 3, cols: 2 } : null,
  getImage("10.jpg") ? { img: getImage("10.jpg"), title: "VIP Photo 10", rows: 3, cols: 2 } : null,
  getImage("11.jpg") ? { img: getImage("11.jpg"), title: "VIP Photo 11", rows: 3, cols: 2 } : null,
  getImage("12.jpg") ? { img: getImage("12.jpg"), title: "VIP Photo 12", rows: 3, cols: 2 } : null,
  getImage("13.jpg") ? { img: getImage("13.jpg"), title: "VIP Photo 13", rows: 3, cols: 2 } : null,
  getImage("14.jpg") ? { img: getImage("14.jpg"), title: "VIP Photo 14", rows: 3, cols: 2 } : null,
  getImage("15.jpg") ? { img: getImage("15.jpg"), title: "VIP Photo 15", rows: 3, cols: 2 } : null,
  getImage("16.jpg") ? { img: getImage("16.jpg"), title: "VIP Photo 16", rows: 3, cols: 2 } : null,
  getImage("17.jpg") ? { img: getImage("17.jpg"), title: "VIP Photo 17", rows: 3, cols: 2 } : null,
  getImage("18.jpg") ? { img: getImage("18.jpg"), title: "VIP Photo 18", rows: 3, cols: 2 } : null,
  getImage("19.jpg") ? { img: getImage("19.jpg"), title: "VIP Photo 19", rows: 3, cols: 2 } : null,
  getImage("20.jpg") ? { img: getImage("20.jpg"), title: "VIP Photo 20", rows: 3, cols: 2 } : null,
].filter(Boolean);

// ✅ Complete Photo Gallery Data (All Photos and Videos)
export const photoGalleryData = Object.keys(imagePaths).map((path) => ({
  img: imagePaths[path],
  title: path.split("/").pop(), // Extract filename as title
  rows: 3,
  cols: 2,
}));
