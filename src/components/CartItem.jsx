import { useContext } from "react";
import { ShopContext } from "../context";

function CartItem(props) {
  const { mainId, displayName, price, quantity } = props;

  const { removeFromCart, incQuantuty, decQuantuty } = useContext(ShopContext);

  return (
    <li href="#!" className="collection-item ">
      {displayName}{" "}
      <i
        className="material-icons cart-quantity"
        onClick={() => decQuantuty(mainId)}
      >
        remove
      </i>
      x {quantity}
      <i
        className="material-icons cart-quantity"
        onClick={() => incQuantuty(mainId)}
      >
        add
      </i>{" "}
      = {price.regularPrice * quantity} руб.
      <span
        href="#!"
        className="secondary-content"
        onClick={() => removeFromCart(mainId)}
      >
        <i className="material-icons cart-delete">close</i>
      </span>
    </li>
  );
}

export { CartItem };
