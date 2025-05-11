// Function to handle image click and open dialog
export const handleImgClick = (src, title, setDialogOpen) => {
  if (setDialogOpen) {
    setDialogOpen({
      img: src,
      state: true,
      title: title || "",
    });
  }
};

// Function to generate srcset for images (Responsive)
export function srcset(image, size, rows = 1, cols = 1) {
  if (!image) return null;
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

// Function to handle button click for navigating and scrolling
export function btnClickHandler(navigate, isDesktopScreen, category) {
  if (!navigate) return;
  
  navigate(`/photos/${category}`);

  if (!isDesktopScreen) {
    window.scrollTo({
      top: 200,
      behavior: "smooth", // Smooth scrolling animation
    });
  }
}
