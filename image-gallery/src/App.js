import "./App.css";
import React from "react";
import uuid from "react-uuid";

function App() {
  const products = [
    { name: "xbox", price: "400€", image: "https://picsum.photos/300/200" },
    {
      name: "PlayStation",
      price: "550€",
      image: "https://picsum.photos/300/200",
    },
    { name: "Nintendo", price: "200€", image: "https://picsum.photos/300/200" },
  ];

  const imageContanerStyle = {
    height: "230px",
    width: "200px",
    border: "1px solid darkgray",
    borderRadius: "8px",
  };

  return (
    <div className="App">
      {products.map((product) => (
        <React.Fragment key={uuid()}>
          <div className="imageContainer" style={imageContanerStyle}>
            <div className="image-div">
              <img src={product.image}></img>
            </div>
            <div className="image-detail">
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
