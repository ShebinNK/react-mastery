class CampSite extends React.Component {
  render() {
    return (
      <div>
        <Camper name="James" />
      </div>
    );
  }
}

const Camper = (props) => {
  return <p>{props.name}</p>;
};

Camper.defaultProps = {
  name: "CamperBot"
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};