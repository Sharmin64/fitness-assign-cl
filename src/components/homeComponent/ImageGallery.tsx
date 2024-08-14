import { Gallery } from "react-grid-gallery";
import { images as IMAGES } from "../../images/images";
import "./ImageGallery.css";

const ImageGallery = () => {
  const images = IMAGES.map((image) => ({
    ...image,
    customOverlay: (
      <div className="custom-overlay__caption container">
        <div>{image.caption}</div>
      </div>
    ),
  }));

  return (
    <>
      <h1 className="text-6xl font-serif font-bold uppercase text-center my-6">
        Our Satisfied Users
      </h1>
      <div>
        <Gallery images={images} enableImageSelection={false} />
      </div>
    </>
  );
};

export default ImageGallery;

/**
 * body {
  margin: 0;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.custom-overlay__caption {
  background-color: rgba(0, 0, 0, 0.8);
  max-height: 240px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  color: white;
  padding: 2px;
  font-size: 90%;
}

.custom-overlay__tag {
  word-wrap: break-word;
  display: inline-block;
  background-color: white;
  height: auto;
  font-size: 75%;
  font-weight: 600;
  line-height: 1;
  padding: .2em .6em .3em;
  border-radius: .25em;
  color: black;
  vertical-align: baseline;
  margin: 2px;
}
 */
