import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function CartWidget({ items }) {
  return (
    <>
      <AddShoppingCartIcon />
      {items}
    </>
  );
}
export default CartWidget;
