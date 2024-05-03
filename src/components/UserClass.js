import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
            console.log(this.state);
          }}
        >
          Increase
        </button>
        <h2>{this.state.count2}</h2>
        <h1>Name:{name}</h1>
        <h2>Location: Hyderabad</h2>
      </div>
    );
  }
}

export default UserClass;
