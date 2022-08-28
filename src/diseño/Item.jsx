import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

export default function Item({ product }) {
  const { título, precio, imagen, marca } = product;
  return (
    <Card style={{ width: "15rem", margin: 25 }}>
      <Card.Img variant="top" src={imagen}  style={{ width: "14rem", height: "13rem", margin: 8}}/>
      <Card.Body>
        <Card.Title>{título}</Card.Title>
        <Card.Text>
          Precio: {precio}
          <br />
          Marca: {marca}
        </Card.Text>
        <ItemCount inicial={1} max={10} />
      </Card.Body>
    </Card>
  );
}
