import React from "react";

import Typography from "./Typography";
import config from "../../config.json";
import { LinkButton } from "./Button";
import { getImageUrl } from "../utils";

const { works } = config;

const Card = ({ work }) => {
  return (
    <div
      className={`card w-[calc(100vw-4rem)] md:w-[calc(100vw-16rem)] rounded-lg bg-base-100 shadow-lg`}
    >
      <figure>
        <img
          src={getImageUrl(work.banner)}
          alt={`${work.banner} doesn't exist`}
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
    <div className="carousel carousel-center p-4 gap-4 bg-secondary-content rounded-lg">
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
    <div id="works" className={`bg-[${works.bgColor}]`}>
      <div
        className={`h-[calc(100vh-3rem)] md:h-full p-4 md:px-0 md:py-16 flex flex-col gap-4 md:w-10/12 md:mx-auto`}
      >
        <Typography content={works.title} variant="h4" />
        <Carousel works={works.list} />
      </div>
    </div>
  );
};

export default Works;
