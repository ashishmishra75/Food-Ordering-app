import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>count:{count}</h1>
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLE DIRECLTY
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: Kanpur</h3>
        <h4>Contact: 1234567890</h4>
      </div>
    );
  }
}
export default UserClass;
