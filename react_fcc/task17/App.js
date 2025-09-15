const ShoppingCart = (props) => {
  return <p>Items: {props.items}</p>;
};

ShoppingCart.defaultProps = {
  items: 0
};

class Items extends React.Component {
  render() {
    return <ShoppingCart items={10} />;
  }
}