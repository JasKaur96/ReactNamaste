import React, { Component } from "react";
import { User } from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super();
    this.state = {
      userInfo: {
        name: "DummyName",
        location: "DefaultLocation",
        avatar_url: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/JasKaur96");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <>
        <div>About</div>
        <div>This is a Food Ordering App.</div>
        <UserClass name={name} location={location} avatar_url={avatar_url} />
      </>
    );
  }
}

export default About;
