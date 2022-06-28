import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

import Typography from "./Typography";
import { LinkButton } from "./Button";
import config from "../../config.json";

const { contact } = config;

const Icon = ({ type }) => {
  switch (type) {
    case "email":
      return <FaEnvelope size={64} />;
    case "phone":
      return <FaPhone size={64} />;
  }
};

const Card = ({ item }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center">
        <Icon type={item.type} />
        <Typography variant="h2" content={item.type} className="card-title" />
        <Typography content={item.content} />
        <div className="card-actions justify-end">
          <LinkButton
            href={
              item.type === "email" ? `mailto://${item.content}` : undefined
            }
            label={item.description}
            className="btn btn-primary"
          />
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="bg-[#574C8F] h-96">
      <div className="flex h-full py-16 justify-evenly">
        {contact.list.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Contact;
