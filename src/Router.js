import { Component } from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Events from './Components/Events/Events'
import ContactUs from './Components/ContactUS/ContactUs';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/aboutus" component={AboutUs}/>
                <Route path="/events" component={Events}/>
                <Route path="/contact" component={ContactUs}/>
            </BrowserRouter>
        );
    }
}

export default Router;