const ChildComponent = () => {
  return <p>I am the child</p>;
};

class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
}