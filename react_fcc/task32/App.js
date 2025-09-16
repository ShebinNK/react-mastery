class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("Component is about to mount!");
  }

  render() {
    return <div />
  }
}
