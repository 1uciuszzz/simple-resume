import React from "react";

import config from "../../config.json";
import Typography from "./Typography";
import { OutlineLink } from "./Button";
import { getImageUrl } from "../utils";

const { profile } = config;

const Profile = () => {
  return (
    <div id="profile" className="h-[calc(100vh-64px)] bg-[#76B5A2]">
      <div className="hero h-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={getImageUrl(profile.banner)}
            className="w-6/12 rounded-lg "
          />
          <div className="flex flex-col gap-4 w-6/12">
            <Typography
              content={profile.greetingText}
              variant="h4"
              className="text-5xl font-bold"
            />
            <Typography
              content={profile.firstName}
              variant="h1"
              className="py-6"
            />
            <Typography
              content={profile.lastName}
              variant="h1"
              className="py-6"
            />
            <Typography content={profile.simplyIntroduction} className="py-6" />
            <OutlineLink
              href={"#about"}
              label={profile.startBtnText}
              className="btn btn-primary py-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
