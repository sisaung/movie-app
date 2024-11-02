import { ReactNode } from "react";

type FooterSocialMediaProps = {
  url: string;
  icon: ReactNode;
};

const FooterSocialMedia = ({ url, icon }: FooterSocialMediaProps) => {
  return (
    <li className="inline-flex justify-center items-center size-10 bg-gray-800 rounded-full duration-300 hover:shadow-md  hover:shadow-pink-500 hover:text-gray-800">
      <a href={url} target="_blank">
        {icon}
      </a>
    </li>
  );
};

export default FooterSocialMedia;
