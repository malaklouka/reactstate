import './App.css';
import image from './pictures/me.jpg'

import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Malak Nakaa ",
        bio: "Student at ISIMM",
        pic: image,
        profession: "Software Engineer"
      },
      time: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: this.state.time+1}),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  state = {

    Person: {
      fullName: "Malak Nakaa",
      bio: "Student at ISIMM",
      pic: image,
      profession: "Software Engineer"
    },

    showprofile: false
  };

  handleShowProfile = () => this.setState({ ...this.state, showprofile: !this.state.showprofile })

  render() {
    return (
      <>
        {this.state.showprofile && (
          <div className="App">
             <img src={this.state.Person.pic} className="img" alt="" />
            <div className="fullName" style={{ color: "orange", fontSize: 20 }}>My name is {this.state.Person.fullName}</div>
            <div className="bio" style={{ color: "black", fontSize: 20 }}>{this.state.Person.bio}</div>
            <div className="profession" style={{  fontSize: 20,   textDecoration: "underline overline" }}>I'm a {this.state.Person.profession}</div>
            <h6>The last component was mounted since : {this.state.time}s</h6>
          </div>
        )}
        <button  onClick={this.handleShowProfile} className="btn" variant="danger">Show my profile </button>
      </>
    )
  }
}
export default App;