import React from "react";

import config from "../../config.json";
import { getImageUrl } from "../utils";
const { skills } = config;

const Skills = () => {
  return (
    <div className="bg-[#FEA287] h-[calc((100vh-64px)/2)]">
      <div className="flex flex-wrap content-center justify-center h-full gap-4">
        {skills.list.map((item) => {
          return (
            <img
              src={getImageUrl(item.imgName)}
              alt={item.name}
              key={item.id}
              height="120"
              width="120"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
