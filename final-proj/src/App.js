// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Header from './components/NavBar/NavBar'
import PopEvents from './components/Popular_Events/Popular_Events'
import HomePage from './components/Home_Page/Home_Page'
import SignInCard from './components/Sign_In/Sign_In_Card'

// function App() {

class App extends React.Component {
  render() {
    return (
      <div>
      <HomePage />
      </div>
    );
  }
}
export default App;
