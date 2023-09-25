import { useState } from "react";
import Container from "../layout/Container";
import SectionTitle from "../base/SectionTitle";
import Button from "../base/Button";
import ImageDetail from "./ImageDetail";

const ImageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
  >
    <path
      d="M2.34375 6.5625C2.21943 6.5625 2.1002 6.51312 2.01229 6.42521C1.92439 6.3373 1.875 6.21807 1.875 6.09375V2.34469C1.875 2.22037 1.92439 2.10114 2.01229 2.01323C2.1002 1.92532 2.21943 1.87594 2.34375 1.87594H6.09375C6.21807 1.87594 6.3373 1.92532 6.42521 2.01323C6.51311 2.10114 6.5625 2.22037 6.5625 2.34469V6.09375C6.5625 6.21807 6.51311 6.3373 6.42521 6.42521C6.3373 6.51312 6.21807 6.5625 6.09375 6.5625H2.34375ZM8.90625 6.5625C8.78193 6.5625 8.6627 6.51312 8.57479 6.42521C8.48689 6.3373 8.4375 6.21807 8.4375 6.09375V2.34469C8.4375 2.22037 8.48689 2.10114 8.57479 2.01323C8.6627 1.92532 8.78193 1.87594 8.90625 1.87594H12.6553C12.7796 1.87594 12.8989 1.92532 12.9868 2.01323C13.0747 2.10114 13.1241 2.22037 13.1241 2.34469V6.09375C13.1241 6.21807 13.0747 6.3373 12.9868 6.42521C12.8989 6.51312 12.7796 6.5625 12.6553 6.5625H8.90625ZM2.34375 13.125C2.21943 13.125 2.1002 13.0756 2.01229 12.9877C1.92439 12.8998 1.875 12.7806 1.875 12.6563V8.90625C1.875 8.78193 1.92439 8.6627 2.01229 8.57479C2.1002 8.48689 2.21943 8.4375 2.34375 8.4375H6.09375C6.21807 8.4375 6.3373 8.48689 6.42521 8.57479C6.51311 8.6627 6.5625 8.78193 6.5625 8.90625V12.6563C6.5625 12.7806 6.51311 12.8998 6.42521 12.9877C6.3373 13.0756 6.21807 13.125 6.09375 13.125H2.34375ZM8.90625 13.125C8.78193 13.125 8.6627 13.0756 8.57479 12.9877C8.48689 12.8998 8.4375 12.7806 8.4375 12.6563V8.90625C8.4375 8.78193 8.48689 8.6627 8.57479 8.57479C8.6627 8.48689 8.78193 8.4375 8.90625 8.4375H12.6553C12.7796 8.4375 12.8989 8.48689 12.9868 8.57479C13.0747 8.6627 13.1241 8.78193 13.1241 8.90625V12.6563C13.1241 12.7806 13.0747 12.8998 12.9868 12.9877C12.8989 13.0756 12.7796 13.125 12.6553 13.125H8.90625Z"
      fill="#0C0D0E"
      fillOpacity="0.75"
    />
  </svg>
);

function ImageSection({
  title,
  detail,
  images,
  videos,
  hideImages,
  description,
  yearDetail
}) {
  const [modal, setModal] = useState(false);
  return (
    <div className="md:mb-16 mb-12">
      <Container className="flex md:flex-row md:gap-0 flex-col gap-4">
        <div className="md:w-1/3">
          <SectionTitle el="h2" className="text-2xl mb-2">
            {title}
          </SectionTitle>
          <div className="mb-3">{detail}</div>
          {yearDetail && <p className="my-4 pr-2">{yearDetail}</p>}
          <Button
            onClick={() => setModal(true)}
            className={"rounded-lg flex gap-2 text-sm items-center"}
            type="bordered"
            marginType="small"
          >
            <ImageIcon />
            {hideImages ? 'Ver videos' : 'Ver fotos'}
          </Button>
        </div>
        {images?.length > 2 && (
          <div className="md:w-2/3 flex gap-4">
            <div className="w-2/3">
              <img src={images[0]} alt="" className="rounded-2xl" />
            </div>
            <div className="w-1/3 flex flex-col gap-4">
              <img src={images[1]} alt="" className="rounded-2xl" />
              <img src={images[2]} alt="" className="rounded-2xl" />
            </div>
          </div>
        )}
      </Container>
      <ImageDetail
        open={modal}
        onClose={() => setModal(false)}
        content={{ title, detail, images, videos, hideImages, description }}
      />
    </div>
  );
}

export default ImageSection;
