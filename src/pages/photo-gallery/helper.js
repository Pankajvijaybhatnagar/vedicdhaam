// ✅ Function to handle image click and open dialog
export const handleImgClick = (src, title, setDialogOpen) => {
  if (typeof setDialogOpen !== "function") {
    console.error("setDialogOpen is not a function");
    return;
  }

  if (src) {
    setDialogOpen({
      img: src,
      state: true,
      title: title || "Image Preview",
    });
  } else {
    console.error("Image source is missing.");
  }
};

// ✅ Function to generate srcset for images (Responsive)
export function srcset(image, size, rows = 1, cols = 1) {
  if (!image) {
    console.error("Image source is missing for srcset.");
    return null;
  }

  const width = size * cols;
  const height = size * rows;

  return {
    src: `${image}?w=${width}&h=${height}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width}&h=${height}&fit=crop&auto=format&dpr=2 2x`,
  };
}

// ✅ Function to handle button click for navigating and scrolling
export function btnClickHandler(navigate, isDesktopScreen, category) {
  if (typeof navigate !== "function") {
    console.error("navigate is not a function");
    return;
  }

  if (!category) {
    console.error("Category is missing.");
    return;
  }

  // Navigate to the selected category
  navigate(`/photos/${category}`);

  // Smooth scroll to top for mobile view
  if (!isDesktopScreen) {
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  }
}
