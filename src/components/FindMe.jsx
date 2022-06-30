import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LinkButton } from "./Button";
import Typography from "./Typography";
import config from "../../config.json";

const { findMe } = config;

const FindMe = () => {
  return (
    <div className={`bg-[${findMe.bgColor}]`}>
      <div className="flex flex-col p-4 gap-4 md:gap-0 md:grid md:grid-cols-2 md:place-items-center md:p-16">
        <div className="">
          <Typography content={findMe.title} variant="h2" />
          <Typography content={findMe.description} variant="h6" />
        </div>
        <div className="grid grid-cols-3">
          {findMe.socialMedia.map((item) => {
            switch (item.platform) {
              case "github":
                return (
                  <LinkButton
                    blank
                    key={item.id}
                    href={item.url}
                    label={<FaGithub size={48} />}
                  />
                );
              case "linkedin":
                return (
                  <LinkButton
                    blank
                    key={item.id}
                    href={item.url}
                    label={<FaLinkedin size={48} />}
                  />
                );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default FindMe;
