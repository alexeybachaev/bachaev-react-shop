function CartItem(props) {
  const {
    mainId,
    displayName,
    price,
    quantity,
    removeFromCart = Function.prototype,
    incQuantuty = Function.prototype,
    decQuantuty = Function.prototype,
  } = props;
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
