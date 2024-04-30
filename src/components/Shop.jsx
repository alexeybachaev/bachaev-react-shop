import { useEffect, useContext } from "react";
import { Preloader } from "./Preloader.jsx";
import { GoodsList } from "./GoodsList.jsx";
import { Cart } from "./Cart.jsx";
import { CartList } from "./CartList.jsx";
import { Alert } from "./Alert.jsx";
import { ShopContext } from "../context";

function Shop() {
  const { loading, order, isCartShow, displayName, setGoods } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch("https://fortniteapi.io/v2/shop?lang=en/", {
      headers: { Authorization: "39f8f5c1-72268c98-12df1c01-a3655594" },
    })
      .then((response) => response.json())
      .then((data) => setGoods(data.shop));
    //eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isCartShow && <CartList />}
      {displayName && <Alert />}
    </main>
  );
}

export { Shop };
