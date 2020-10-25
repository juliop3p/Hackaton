import React from "react";

import { ItemSearch } from "./styles";

function Item({ category, handleClick }) {
  return (
    <ItemSearch
      active={category.active}
      onClick={() => handleClick(category.id, category.name)}
    >
      <img src={category.img} alt={category.name} />
      <strong>{category.name}</strong>
    </ItemSearch>
  );
}

export default Item;
