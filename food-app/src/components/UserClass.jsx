import React from "react";
import { useContext } from "react";
import userContext from "../utils/userContext";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="userCard">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increase Count
        </button>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact: @ayushporwal01</h3>
        <div>
          LoggedIn User:
          <userContext.Consumer>
            {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </userContext.Consumer>
        </div>
      </div>
    );
  }
}
