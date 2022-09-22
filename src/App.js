import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
// import Logo from './components/Logo/Logo';
import Profile from './components/Profile/Profile';



class App extends Component {
  constructor() {
    super();

    this.state = {
      route: 'signin',
      isSignedIn: false
    }
  }


  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    }else if(route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({ route: route });
  }

  render() {
    const {isSignedIn, route} = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home'
          ? <div>
            {/* <Logo /> */}
            <Profile/>
          </div>
          : (
            route === 'signin'
              ? <Signin onRouteChange={this.onRouteChange} />
              : <Signup onRouteChange={this.onRouteChange} />
          )
        }

      </div>

    )
  }
}

export default App
