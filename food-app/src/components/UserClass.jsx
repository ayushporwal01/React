import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {name, location} = this.props;
    return (
      <div className="userCard">
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact: @ayushporwal01</h3>
      </div>
    );
  }
}
