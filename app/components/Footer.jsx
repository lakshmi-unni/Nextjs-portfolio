import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="!w-52 h-auto mx-auto " />

        <div className="w-max flex items-start gap-2 mx-auto">
          <a href="mailto:lakshmiunniofficial@gmail.com" className="flex items-center gap-2">
            <Image
              color="#fff"
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt="Gmail"
              className="link"
              width={24}
              height={24}
            />
            lakshmiunniofficial@gmail.com
          </a>
        </div>

        <div className="text-center flex flex-wrap items-center justify-center sm:justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
          <p>© 2025 Lakshmi Unni. All rights reserved</p>
          <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li>
              <a href="https://www.linkedin.com/in/lakshmi-unni/">
                <Image
                  src={isDarkMode ? assets.linkedin : assets.linkedin_dark}
                  alt="LinkedIn"
                  className="link"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              {" "}
              <a href="https://github.com/lakshmi-unni">
                <Image
                  src={isDarkMode ? assets.github_dark : assets.github}
                  alt="GitHub"
                  className="link"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href="mailto:lakshmiunniofficial@gmail.com">
                <Image
                  color="#fff"
                  src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
                  alt="Gmail"
                  className="link"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
