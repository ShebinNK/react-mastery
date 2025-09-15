const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
      <p>Items: {props.items}</p>
    </div>
  );
};

ShoppingCart.defaultProps = {
  items: 0
};