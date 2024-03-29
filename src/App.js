import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import Contact from './components/Contact';
import Rainbow from './hoc/Rainbow';
import Single from './components/Single';
import UpdatePost from './components/UpdatePost';

  

class App extends Component {
  render() {
    return (
      <BrowserRouter>  
        <div className="App">
            <Header bgcolorname={this.props.bgColorName} />
              <div className="container">
                <Route exact path='/' component={Posts} />
                <Route path='/about' component={About} />
                <Route path='/home' component={Home} />
                <Route path='/addpost' component={AddPost} />
                <Route path='/update/:id' component={UpdatePost} />
                <Route path='/contact' component={Contact} />
                <Route path='/post/:id' component={Single} />
              </div>
            <Footer bgcolorname={this.props.bgColorName} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Rainbow(App);
