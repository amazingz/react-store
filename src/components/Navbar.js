import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from "../logo.svg";
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-secondary px-sm-5">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                    <Link to='/'>
                        <img src={logo} alt="АЙБУДМАРКЕТ" className="nav-brand"/>

                    </Link>
                <ul className="navbar-nav align-items-right">
                    <li className="nav-item ml-5"></li>
                    <StyledLink to="/" className="ml-auto" >
                            Головна
                    </StyledLink>
                    &nbsp;&nbsp;
                    <Link to="/details" className="ml-auto">
                        Details
                    </Link>
                    &nbsp;&nbsp;
                    <Link to="/contacts" className="ml-auto">
                        Контакти
                    </Link>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-4">
                        <i className="fas fa-cart-plus"/>
                        </span>
                        &nbsp; 
                    </ButtonContainer>
                    </Link>
            </nav>
        )
    }
}

const ButtonContainer = styled.button`
text-transform:capitalize;
font-size: 1.2rem;
background: transparent;
border: .05rem solid var(--lightBlue);
color: var(--mainYellow);
border-radius: 0.5rem;
padding: .2rem .5rem;
cursor: pointer;
margin: .2rem .5rem .2rem 0;
transition: all .5s ease-in-out;
&:hover{
    background:var(--mainYellow);
    color:var(--mainBlue);
}
  
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;