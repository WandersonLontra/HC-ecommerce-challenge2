import React, { useState } from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import { CartContext } from "../Providers/CartContext";

function Navbar() {
    const [toggleNav, setToggleNav] = useState(false);
    const {cart} = React.useContext(CartContext);

    
    const handleToggleNav = () => setToggleNav(!toggleNav);

    const handleRemoveNav = (e) => {
        e.preventDefault();
        setToggleNav(false);
    }

    let bagShop = {};
    
    if(cart.length > 0){
        bagShop.items = <span className="items_cart">{cart.length}</span>;
        bagShop.bag = <i className='bx bx-shopping-bag bx-tada' ></i>;
    } else {
        bagShop.bag = <i className='bx bx-shopping-bag' ></i>;
    }

    return (
        <nav className="nav bd-grid" id="navbar">
            <div className='nav__toggle' onClick={handleToggleNav} id="nav-toggle">
                <i className='bx bxs-grid'></i>
            </div>
            
            <div className="nav__logo" onClick={scroll.scrollToTop}>LOGO</div>

            <div className={toggleNav ? 'nav__menu show':'nav__menu'} id="nav-menu">

                <ul className="nav__list">
                    <li className="nav__item">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={300}
                            className="nav__item"
                            onClick={handleRemoveNav}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav__item"
                    onClick={handleRemoveNav}>
                        <Link
                            activeClass="active"
                            to="featured"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={300}
                            className="nav__item"
                            onClick={handleRemoveNav}
                        >
                            Featured
                        </Link>
                    </li>
                    <li className="nav__item"
                    onClick={handleRemoveNav}>
                        <Link
                            activeClass="active"
                            to="women"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={300}
                            className="nav__item"
                            onClick={handleRemoveNav}
                        >
                            Women
                        </Link>
                    </li>
                    <li className="nav__item"
                    onClick={handleRemoveNav}>
                        <Link
                            activeClass="active"
                            to="new"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={300}
                            className="nav__item"
                            onClick={handleRemoveNav}
                        >
                            New
                        </Link>
                    </li>
                    <li className="nav__item"
                    onClick={handleRemoveNav}>
                        <Link
                            activeClass="active"
                            to="/"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={300}
                            className="nav__item"
                            onClick={handleRemoveNav}
                        >
                            Shop
                        </Link>
                    </li>
                </ul>

            </div> {/*nav__menu*/}

            <div className="nav__shop" title={`${cart.length} items no carrinho.`}>
                {bagShop.items}
                {bagShop.bag}
            </div>

        </nav>
    );
}

export default Navbar;