import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, value }) => {
  return (
    <div className="rounded-xl border-2 hover:cursor-pointer hover:bg-primary hover:border-primary hover:text-white">
      <Link to={to} className="block text-center px-10 py-4 font-semibold">
        {value}
      </Link>
    </div>
  );
};

export default Button;
