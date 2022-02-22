import {Brand, Cta, Navbar} from './component' 
import {Footer, Header, Features, Blog, Possibility, WhatGPT3} from './containers'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
