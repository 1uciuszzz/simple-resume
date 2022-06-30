import React from "react";

import Typography from "./Typography";
import config from "../../config.json";
import { getImageUrl } from "../utils";

const { about } = config;

const About = () => {
  return (
    <div id="about" className={`bg-[${about.bgColor}]`}>
      <div className="hero text-primary-content">
        <div className="hero-content flex-col md:py-16">
          <img
            src={getImageUrl(about.photo)}
            className="rounded-lg shadow-lg md:w-10/12"
          />
          <div className="flex flex-col gap-4 md:w-10/12">
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
            <div className="flex flex-wrap gap-1">
              {about.skillList.map((skill, index) => {
                return (
                  <span className="badge font-mono" key={index}>
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
