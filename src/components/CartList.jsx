import { CartItem } from "./CartItem.jsx";

function CartList(props) {
  const {
    order = [],
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
    incQuantuty = Function.prototype,
    decQuantuty = Function.prototype,
  } = props;
  const totalPice = order.reduce((sum, elem) => {
    return sum + elem.price.regularPrice * elem.quantity;
  }, 0);
  return (
    <ul className="collection cart-list ">
      <li href="#!" className="collection-item active blue darken-4">
        Корзина
      </li>
      {order.length ? (
        order.map((item) => (
          <CartItem
            key={item.mainId}
            {...item}
            removeFromCart={removeFromCart}
            incQuantuty={incQuantuty}
            decQuantuty={decQuantuty}
          />
        ))
      ) : (
        <li href="#!" className="collection-item ">
          Корзина пуста
        </li>
      )}
      <li href="#!" className="collection-item active blue darken-4">
        Общая стоимость: {totalPice} руб.
      </li>
      <li href="#!" className="collection-item">
        <button className=" btn blue darken-2 btn-small">Оформить</button>
      </li>
      <i className="material-icons cart-close" onClick={handleCartShow}>
        close
      </i>
    </ul>
  );
}

export { CartList };
