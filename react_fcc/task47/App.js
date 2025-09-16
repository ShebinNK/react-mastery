class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>Hello World</div>;
  }
}

const htmlString = ReactDOMServer.renderToString(<App />);
