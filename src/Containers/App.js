import './App.css';
import { Component } from 'react';
import Top from '../Components/Top';
import MainPageArticle from '../Components/MainPageArticle';
import Footer from '../Components/Footer';



class App extends Component {
  render() {
    return (
      <div className="MainArt">
        <Top />
        <MainPageArticle />
        <Footer />
      </div>
    );
  }
}

export default App;
