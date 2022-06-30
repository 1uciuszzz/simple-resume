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
    <div className="hidden md:flex">
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
    <div className={`bg-[${header.bgColor}] sticky top-0 z-50`}>
      <div className="grid place-items-center h-12 px-4 py-1 md:flex md:justify-between md:h-full">
        <Brand />
        <Menu />
      </div>
    </div>
  );
};

export default Header;
