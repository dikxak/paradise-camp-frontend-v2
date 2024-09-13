import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type UploadedImageProps = {
  imgSrc: string;
  img: File | null;
  onImageDelete: () => void;
};

const UploadedImage = ({ imgSrc, img, onImageDelete }: UploadedImageProps) => {
  if (!imgSrc || !img) return null;

  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-base font-semibold">Location Image</h4>
      <div className="relative w-52 p-2 shadow-md">
        <a href={imgSrc} target="_blank" rel="noreferrer">
          <img src={imgSrc} alt={img?.name} className="w-full" />
        </a>
        <FontAwesomeIcon
          icon={faCircleMinus}
          role="button"
          className="absolute right-[-0.5rem] top-[-0.25rem] cursor-pointer text-red-600"
          onClick={onImageDelete}
          title="Remove location image"
        />
      </div>
    </div>
  );
};

export default UploadedImage;
