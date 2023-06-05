import React from "react";

const StatCard = (props) => {
  return (
    <div className="w-full sm:w-64 h-auto sm:h-72 bg-white rounded-xl flex flex-col justify-center items-center text-center">
      <p className={`font-bold text-2xl ${props.color}`}>{props.value}</p>
      <p className="px-4 py-4 leading-5 text-gray-600">{props.desc}</p>
    </div>
  );
};

export default StatCard;
