import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "",
        location: "",
        // avatar_url:""
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/MihirRajChowdhury");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <>
        <h2>Class based Profile component</h2>
        <img src={this.state.userInfo.avatar_url} alt="" />
    <h3>{this.state.userInfo.login}</h3>
    <h3>{this.state.userInfo.location}</h3>
      </>
    );
  }
}

export default Profile;
