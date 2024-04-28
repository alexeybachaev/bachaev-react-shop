import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config.js";
import { Preloader } from "./Preloader.jsx";
import { GoodsList } from "./GoodsList.jsx";
import { Cart } from "./Cart.jsx";
import { CartList } from "./CartList.jsx";
import { Alert } from "./Alert.jsx";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  const addToCart = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
    setAlertName(item.displayName);
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => data.shop && setGoods(data.shop));
    setLoading(false);
  }, []);

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  };

  const removeFromCart = (itemId) => {
    const newOrder = order.filter((elem) => elem.mainId !== itemId);
    setOrder(newOrder);
  };

  const incQuantuty = (itemId) => {
    const newOrder = order.map((elem) => {
      if (elem.mainId === itemId) {
        const newQuantity = elem.quantity + 1;
        return { ...elem, quantity: newQuantity };
      } else {
        return elem;
      }
    });
    setOrder(newOrder);
  };

  const decQuantuty = (itemId) => {
    const newOrder = order.map((elem) => {
      if (elem.mainId === itemId) {
        const newQuantity = elem.quantity - 1;
        return { ...elem, quantity: newQuantity >= 0 ? newQuantity : 0 };
      } else {
        return elem;
      }
    });
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName("");
  };

  return (
    <main className="container content">
      <Cart quantity={order.length} handleCartShow={handleCartShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
      {isCartShow && (
        <CartList
          order={order}
          handleCartShow={handleCartShow}
          removeFromCart={removeFromCart}
          incQuantuty={incQuantuty}
          decQuantuty={decQuantuty}
        />
      )}
      {alertName && <Alert displayName={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export { Shop };
