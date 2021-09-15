import {Component} from 'react';
import {NavItems} from './NavItems';
import {useHistory} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';


import '../Styles/Header.css'
 
class Header extends Component{
    constructor(){
        super();
        this.state={
           clickedNavMenu : false,
           current : "/"
        }
    }
    componentDidMount(){
        const qs = queryString.parse(this.props.location.pathname);
        let array=Object.keys(qs);
        this.setState({
            current:array[0]
        })
        debugger
    }
    

    handleClick=()=>{
        this.setState({
            clickedNavMenu : !this.state.clickedNavMenu
        })
    }
    render(){
        const {current} = this.state;
        return(
            <div className="mx-5 NavBar">
                <img src={require('../images/logoWriting.PNG').default} className="logoWriting" alt="logo"/>
                <div className="NavIcon" onClick={this.handleClick}>
                    <i className={this.state.clickedNavMenu ? 'bi bi-x' : 'bi bi-list'}></i>
                </div>
                <ul className={this.state.clickedNavMenu ? 'nav-menu active' : 'nav-menu'}>
                    {
                        NavItems.map((item,index)=>{
                            return(
                            <li key={index} style={{'position':'relative'}}
                            onClick={()=>{
                                const url = `${item.url}`;
                                this.props.history.push(url);
                                this.setState({
                                    current:item.url
                                })
                                this.handleClick()
                            }}
                            >
                                <a className={"navLinks"} 
                                >{item.name}</a>
                                <span className={"underLine" + (current === item.url ? " show":"")} ></span>
                            </li>
                            );
                        })
                        
                    }
                    
                </ul>
                {/*<div className="search">SEARCH <i class="bi bi-search"></i></div>
                <div className="signInButton">SIGN IN</div> */}

            </div>
        );
    }
}
export default withRouter(Header);