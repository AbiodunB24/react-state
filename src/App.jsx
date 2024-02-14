import React, { Component } from "react";


//Class-based component...
class App extends Component {
  state = {
    person: {
      fullName: "Balogun Babatunde",
      
      //Little expression of who Babatunde is.
      bio: "Babatunde is a young, vibrant, intellectual and passionate web developer who's striving to make wave in the digital world, He likes taking on new challenges and meeting people, His journey as a web developer is marked by his passion to take on new challenges, dedication and relentless curiosity.",
      imgSrc: "./images/AA0F9AB0-9294-4DA2-A058-E2858478BD66.JPG",
      profession: "Fullstack Developer",
    },
    show: false,
    intervalId: null,
    timeElapsed: 0,
  };

  //Interval...
  componentDidMount() {
    const intervalId = setInterval(this.updateTimeElapsed, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  //Time Elapsed...
  updateTimeElapsed = () => {
    this.setState((prevState) => ({
      timeElapsed: prevState.timeElapsed + 1,
    }));
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeElapsed } = this.state;

    return (
      <div style={{ background: "linear-gradient(to right, gray, skyblue)", width:"100vw", height:"100vh", flex:"row", justifyContent:"center", alignItems:"center", paddingLeft:"400px", paddingTop:"100px"}}>
        <button style={{ color: "red", flex:"row", justifyContent:"center", alignItems:"center" }} onClick={this.toggleShow}>
          Toggle Profile
        </button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <img
              style={{ height: 250, width: 250, padding: 20 }}
              src={imgSrc}
              alt="Avatar"
            />
            <p style={{ color: "black", width:"500px"}}> Bio: {bio}</p>
            <p style={{ color: "purple" }}>Profession: {profession}</p>
          </div>
        )}
        <p>Time Elapsed: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
