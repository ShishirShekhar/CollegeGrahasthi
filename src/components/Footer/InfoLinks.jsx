import React from 'react';
import { Link } from 'react-router-dom';

const InfoLinks = ({ title, items }) => {
  return (
    <div className="px-10">
      <h1 className="font-semibold pb-10">{title}</h1>
      <ol className="text-gray-200 text-sm font-semibold">
        {items.map((item) => (
          <li key={item.value} className="py-2">
            <Link to={item.link}>{item.value}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default InfoLinks;
