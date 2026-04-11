function Hello(props) {
  const {name, message} = props;
  return (
  <div>
    <h1>
      {message} {name}
    </h1>
  </div>
  );
}

export default Hello;
