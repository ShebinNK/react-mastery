const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>;
};

class ToDo extends React.Component {
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["walk dog", "workout", "read"]} />
        <h2>Tomorrow</h2>
        <List tasks={["study", "shop", "cook"]} />
      </div>
    );
  }
}