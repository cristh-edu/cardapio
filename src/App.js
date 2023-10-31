import React from "react";
import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Header from "./components/header/Header";
import Item from "./components/item/Item";
import ItemService from "./services/ItemService";

function App() {
  const { itens, totalPrice, handleAddItem } = ItemService();

  return (
    <div className="sub_page">
      <Header />
      <section className="brand_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Cardápio</h2>
          </div>
          <div className="brand_container layout_padding2">
            {itens.map((item) => (
              <Item
                key={item.id}
                imgSrc={item.src}
                price={item.price}
                name={item.name}
                qtd={item.qtd}
                onAddItem={() => handleAddItem(item.id)}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="info_logo">
            <p>Preço Total</p>
            <h2>R$ {totalPrice}</h2>
          </div>
        </div>
      </section>
      <section className="container-fluid footer_section">
        <div className="container">
          <p>
            &copy; 2023 Feito por Cristhian Eduardo, Marco Túlio, Pedro Bruno e
            Samuel Duarte
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
