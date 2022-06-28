import React from "react";

const Typography = ({ variant = "p", content }) => {
  switch (variant) {
    case "h1":
      return <h1 className="text-5xl font-bold">{content}</h1>;
    case "h2":
      return <h2 className="text-4xl font-bold">{content}</h2>;
    case "h3":
      return <h3 className="text-3xl font-bold">{content}</h3>;
    case "h4":
      return <h4 className="text-2xl font-bold">{content}</h4>;
    case "h5":
      return <h5 className="text-xl font-bold">{content}</h5>;
    case "h6":
      return <h6 className="text-lg font-bold">{content}</h6>;
    case "p":
      return <p className="text-base">{content}</p>;
  }
};

export default Typography;
