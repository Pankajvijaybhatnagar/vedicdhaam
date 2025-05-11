import {
  Dialog,
  DialogContent,
  DialogTitle,
  ImageList,
  ImageListItem,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  btnTextPhoto,
  photoGalleryData,
  vipPhotosData,
} from "../../data/photo-gallery-data";
import ServicesButton from "../../components/all-services/services-button";
import { btnClickHandler, handleImgClick, srcset } from "./helper";
import "./photoGallery.scss";

const PhotoGallery = () => {
  const [allData, setData] = useState([]);
  const [dialogOpen, setDialogOpen] = useState({
    state: false,
    img: null,
    title: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const isDesktopScreen = useMediaQuery("(min-width: 1000px)");

  // ✅ Load Data based on Category (VIP or All Photos)
  useEffect(() => {
    if (id === "vip-photos") {
      setData(vipPhotosData);
    } else {
      setData(photoGalleryData);
    }
  }, [id]);

  return (
    <main className="Photo-Gallery">
      <h1 className="heading">
        Photo <span>Gallery</span>
      </h1>

      {/* ✅ Category Buttons */}
      <div className="btn-container">
        {btnTextPhoto.map((btn) => (
          <ServicesButton
            category={btn.category}
            text={btn.text}
            key={btn.text}
            handleClick={() =>
              btnClickHandler(navigate, isDesktopScreen, btn.category)
            }
          />
        ))}
      </div>

      {/* ✅ Image List */}
      <ImageList
        sx={{
          maxWidth: "100%",
          padding: "0.5rem",
        }}
        variant="quilted"
        cols={isDesktopScreen ? 4 : 2}
        rowHeight={180}
      >
        {allData?.length > 0 ? (
          allData.map((item, index) => (
            <ImageListItem
              key={index}
              cols={item.cols || 1}
              rows={item.rows || 1}
              onClick={() => handleImgClick(item.img, item.title, setDialogOpen)}
              className="clickable-image"
            >
              <img
                {...srcset(item.img, 180, item.rows, item.cols)}
                alt={item.title || "Image"}
                loading="lazy"
                style={{ cursor: "pointer", borderRadius: "8px" }}
              />
            </ImageListItem>
          ))
        ) : (
          <div className="no-images">No images available in this category.</div>
        )}
      </ImageList>

      {/* ✅ Image Preview Dialog */}
      <Dialog
        open={dialogOpen.state}
        onClose={() => setDialogOpen({ img: null, state: false, title: "" })}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{dialogOpen.title}</DialogTitle>
        <DialogContent>
          {dialogOpen.img ? (
            <img
              loading="lazy"
              src={dialogOpen.img}
              alt={dialogOpen.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          ) : (
            <p>No Image Selected</p>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default PhotoGallery;
