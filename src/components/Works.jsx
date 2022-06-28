import React from "react";

import Typography from "./Typography";
import config from "../../config.json";
import { LinkButton } from "./Button";
import { getImageUrl } from "../utils";

const { works } = config;

const Card = ({ work }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="w-90 p-1 mx-auto ">
        <img
          src={getImageUrl(work.banner)}
          alt={`${work.banner} doesn't exist`}
          className="rounded-3xl"
        />
      </figure>
      <div className="card-body">
        <Typography className="card-title" content={work.title} variant="h3" />
        <Typography content={work.introduction} />
        <div className="card-actions justify-end">
          <LinkButton blank href={work.url} label={work.btnLabel} />
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ works }) => {
  return (
    <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
      {works.map((work) => {
        return (
          <div className="carousel-item" key={work.id}>
            <Card work={work} />
          </div>
        );
      })}
    </div>
  );
};

const Works = () => {
  return (
    <div id="works" className="bg-[#FFE0CC] h-screen">
      <div className="flex flex-col justify-evenly h-full px-8">
        <Typography content={"My Works"} variant="h4" />
        <Carousel works={works.list} />
      </div>
    </div>
  );
};

export default Works;
