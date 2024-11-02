import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import FooterSocialMedia from "./FooterSocialMedia";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-900 py-10 flex flex-col gap-2">
        <h1 className="text-gray-300 text-center text-xl">
          Enormous Movie Store
        </h1>
        <div className="text-gray-500 text-center text-sm space-x-2 mb-5 ">
          <span> © {new Date().getFullYear()} Developed By</span>
          <a
            href="https://github.com/sisaung"
            target="_blank"
            className="text-pink-500 underline underline-offset-4"
          >
            Sis Aung
          </a>
          <span>All rights reserved</span>.
        </div>

        <ul className="flex justify-center items-center gap-5">
          <FooterSocialMedia
            url="https://www.facebook.com/profile.php?id=100011737176670&mibextid=LQQJ4d"
            icon={<FaFacebookF className="size-5 text-white " />}
          />
          <FooterSocialMedia
            url="https://www.linkedin.com/in/sis-aung-25a8b21a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app  "
            icon={<FaLinkedin className="size-5 text-white " />}
          />
          <FooterSocialMedia
            url="https://github.com/sisaung"
            icon={<FaGithub className="size-5 text-white " />}
          />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
