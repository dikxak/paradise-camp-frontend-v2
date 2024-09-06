import { useNavigate } from "react-router-dom";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import Button from "../ui/Button/Button";

type ErrorPageProps = {
  imgSrc: string;
  title: string;
  message: string;
  alt: string;
  imgWidthClassName?: string;
};

const ErrorPage = ({
  imgSrc,
  message,
  title,
  imgWidthClassName = "",
  alt,
}: ErrorPageProps) => {
  const navigate = useNavigate();

  const handleNavigationToHome = () => navigate("/");

  return (
    <div className="mx-auto flex h-screen max-w-6xl flex-col items-center justify-center xs:mx-6">
      <img
        src={imgSrc}
        alt={alt}
        className={clsx("mb-10 max-w-80 xs:max-w-xs", imgWidthClassName)}
      />

      <h1 className="mb-4 text-3xl font-semibold text-gray-700 xs:text-2xl">
        {title}
      </h1>

      <p className="mb-6 max-w-lg text-center text-lg text-gray-600 xs:text-sm">
        {message}
      </p>

      <Button onClick={handleNavigationToHome} size="md" variant="primary">
        <FontAwesomeIcon icon={faHome} className="text-xl" />
        Go back to home
      </Button>
    </div>
  );
};

export default ErrorPage;
