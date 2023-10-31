import { useEffect, useState } from "react";

function ItemService() {
  const [itens, setItens] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const apiUrl = process.env.REACT_APP_PROXY || "http://localhost:3300";

  useEffect(() => {
    fetch(apiUrl + "/foods")
      .then((response) => response.json())
      .then((data) => {
        setItens(data);
        calculatePrice(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados: " + error);
      });
  }, []);

  const handleAddItem = (itemId) => {
    const newItens = itens.map((item) =>
      Number(item.id) === Number(itemId) ? { ...item, qtd: item.qtd + 1 } : item
    );
    setItens(newItens);
    calculatePrice(newItens);
  };

  const calculatePrice = (newItens) => {
    const itemsToCalculate = newItens.map((item) => ({
      id: item.id,
      qtd: item.qtd,
    }));

    fetch(apiUrl + "/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itens: itemsToCalculate }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalPrice(data.totalPrice);
      })
      .catch((error) => {
        console.error("Erro ao calcular o preço: " + error);
      });
  };

  return { itens, totalPrice, handleAddItem };
}

export default ItemService;
