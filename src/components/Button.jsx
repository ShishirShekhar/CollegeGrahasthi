import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, value }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg">
      <Link
        to={to}
        className="block bg-primary hover:bg-secondary text-white text-center py-3 px-4 font-semibold transition-colors duration-300"
      >
        {value}
      </Link>
    </div>
  );
};

export default Button;
