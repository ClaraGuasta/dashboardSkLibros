import React from "react";

function Card({ title, total,icon }) {
  console.log();
  return (
    <React.Fragment>
      <div className="card">
        <h3 className="card-titulo"> {title} </h3>
        <div className="card-numeicono">
          <p>{total}</p>
           <i className={`fas ${icon} fa-2x text-gray-300`}></i>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Card;
