import React from "react";

const Button = ({ label }) => {
  return <button className="btn">{label}</button>;
};

const PrimaryButton = ({ label }) => {
  return <button className="btn btn-primary">{label}</button>;
};

const SecondaryButton = ({ label }) => {
  return <button className="btn btn-secondary">{label}</button>;
};

const LinkButton = ({ label, href, blank = false }) => {
  return (
    <a
      href={href}
      target={blank ? "_blank" : undefined}
      className="btn btn-link"
    >
      {label}
    </a>
  );
};

const OutlineLink = ({ label, href }) => {
  return (
    <a href={href} className="btn btn-outline">
      {label}
    </a>
  );
};

const GhostButton = ({ label }) => {
  return <button className="btn btn-ghost">{label}</button>;
};

const OutlineButton = ({ label }) => {
  return <button className="btn btn-outline">{label}</button>;
};

export {
  Button,
  PrimaryButton,
  SecondaryButton,
  LinkButton,
  GhostButton,
  OutlineButton,
  OutlineLink,
};
