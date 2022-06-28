import React from "react";

import Typography from "./Typography";
import config from "../../config.json";
import { getImageUrl } from "../utils";

const { about } = config;

const About = () => {
  return (
    <div id="about" className="h-screen bg-[#574C8F]">
      <div className="hero h-full text-primary-content">
        <div className="hero-content flex-col lg:flex-row">
          <img src={getImageUrl(about.photo)} className="rounded-lg w-6/12" />
          <div className="w-6/12 flex flex-col gap-4">
            <Typography
              content={about.title}
              variant="h3"
              className="text-5xl font-bold"
            />
            {about.paragraph.map((item) => {
              return (
                <Typography
                  key={item.id}
                  content={item.content}
                  className="py-6"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
