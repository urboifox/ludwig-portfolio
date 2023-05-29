import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="max-w-[1000px] mx-auto paddingY font-light text-[16px]">
      <div className="w-full flex items-center justify-between">
        <small className="font-brandonLight text-secondary">
          &copy; 2023 Ludwig Reuter
        </small>
        <Link
          to="/imprint"
          className="text-secondary font-brandonLight text-[16px] cursor-pointer"
        >
          IMPRINT
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
