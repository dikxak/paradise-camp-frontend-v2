const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <p className="mb-5 flex w-full items-center justify-center text-center text-lg xs:text-base">
      Copyright © {currentYear} ParadiseCamp. All Rights Reserved.
    </p>
  );
};

export default Footer;
