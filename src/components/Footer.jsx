import React from "react";

import { FaCopyright } from "react-icons/fa";
import Typography from "./Typography";
import config from "../../config.json";

const { footer } = config;

const Footer = () => {
  return (
    <div className={`bg-[${footer.bgColor}] h-16`}>
      <div className="grid place-content-center h-full md:flex md:items-center md:gap-1">
        <div className="flex justify-center items-center gap-1">
          <FaCopyright size={16} />
          <Typography content={`Copyright 2022 ${footer.author}`} />
        </div>
        <div className="flex justify-center">
          <Typography content={`All Rights Reserved`} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
