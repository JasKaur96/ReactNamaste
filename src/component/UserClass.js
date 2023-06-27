import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("SPA");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { name, location, avatar_url } = this.props;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact Us: foody@gmail.com</h2>
      </div>
    );
  }
}
export default UserClass;
