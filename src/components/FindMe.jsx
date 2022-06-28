import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LinkButton } from "./Button";
import Typography from "./Typography";
import config from "../../config.json";

const { findMe } = config;

const FindMe = () => {
  return (
    <div className="bg-[#76B5A2] h-72">
      <div className="flex items-center h-full">
        <div className="w-6/12 pl-16">
          <Typography content={findMe.title} variant="h1" />
          <Typography content={findMe.description} />
        </div>
        <div className="flex w-6/12 justify-end pr-16">
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
