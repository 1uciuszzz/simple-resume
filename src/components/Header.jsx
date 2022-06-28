import React from "react";

import config from "../../config.json";
import { LinkButton, OutlineLink } from "./Button";
import Typography from "./Typography";

const { header } = config;

const Brand = () => {
  return <Typography content={header.brandText.label} variant={"h3"} />;
};

const Menu = () => {
  return (
    <div className="flex gap-4">
      {header.navbar.map((item, index) => {
        if (index === header.navbar.length - 1) {
          return (
            <OutlineLink
              href={`#${item.anchor}`}
              label={item.label}
              key={item.id}
            />
          );
        } else {
          return (
            <LinkButton
              href={`#${item.anchor}`}
              label={item.label}
              key={item.id}
            />
          );
        }
      })}
    </div>
  );
};

const Header = () => {
  return (
    <div className="sticky top-0 h-16 bg-[#D3DBAF] flex items-center z-50">
      <div className="flex justify-between items-center w-full px-4">
        <Brand />
        <Menu />
      </div>
    </div>
  );
};

export default Header;
