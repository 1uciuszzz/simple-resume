import React from "react";

import config from "../../config.json";
import Typography from "./Typography";
import { OutlineLink } from "./Button";
import { getImageUrl } from "../utils";

const { profile } = config;

const Profile = () => {
  return (
    <div
      id="profile"
      className={`bg-[${profile.bgColor}] h-[calc(100vh-3rem)]`}
    >
      <div className="hero">
        <div className="hero-content flex-col">
          <img src={getImageUrl(profile.banner)} className="w-8/12" />
          <div className="flex flex-col gap-4 w-10/12">
            <Typography content={profile.greetingText} variant="h4" />
            <Typography content={profile.firstName} variant="h2" />
            <Typography content={profile.lastName} variant="h2" />
            <Typography content={profile.simplyIntroduction} />
            <OutlineLink
              href={"#about"}
              label={profile.startBtnText}
              className="btn btn-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
