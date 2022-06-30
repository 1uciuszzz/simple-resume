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
    <div className="card bg-base-100 shadow-xl rounded-lg">
      <div className="card-body items-center">
        <Icon type={item.type} />
        <Typography variant="h2" content={item.type} className="card-title" />
        <Typography variant="h6" content={item.content} />
        <div className="card-actions">
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
    <div id="contact" className={`bg-[${contact.bgColor}]`}>
      <div className="flex flex-col gap-4 md:gap-16 p-4 md:p-16 md:grid md:grid-cols-2">
        {contact.list.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Contact;
