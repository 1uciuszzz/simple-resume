import React from "react";

import config from "../../config.json";
import { getImageUrl } from "../utils";
const { skills } = config;

const Skills = () => {
  return (
    <div className={`bg-[${skills.bgColor}]`}>
      <div className="grid grid-cols-3 md:grid-cols-5 auto-rows-auto p-4 place-items-center">
        {skills.list.map((item) => {
          return (
            <img
              src={getImageUrl(item.imgName)}
              alt={item.name}
              key={item.id}
              height="120"
              width="120"
              className="p-4"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
