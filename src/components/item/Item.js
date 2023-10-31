import React from "react";

function Item({ imgSrc, price, name, qtd, onAddItem }) {
  return (
    <div className="box" onClick={onAddItem}>
      {qtd > 0 && (
        <div className="new">
          <h6>{qtd} </h6>
        </div>
      )}
      <div className="img-box">
        <img src={imgSrc} alt="" />
      </div>
      <div className="detail-box">
        <h6 className="price">R$ {Number(price).toFixed(2)}</h6>
        <h6>{name}</h6>
      </div>
    </div>
  );
}

export default Item;
