function Hello(props) {
  const {name, message} = props;
  return (
  <div>
    <h1>
      {props.message} {props.name}
    </h1>
  </div>
  );
}

export default Hello;
