import React from "react";

import { FaCopyright } from "react-icons/fa";
import Typography from "./Typography";
import config from "../../config.json";

const { footer } = config;

const Footer = () => {
  return (
    <div className="bg-[#FEA287] h-32">
      <div className="flex justify-center items-center h-full">
        <FaCopyright size={16} className="mr-1" />
        <Typography
          content={`Copyright 2022 ${footer.author} - All Rights Reserved`}
        />
      </div>
    </div>
  );
};

export default Footer;
