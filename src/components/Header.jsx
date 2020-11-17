import React from 'react';
import Hamburger from './Hamburger';
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true
        }
    }

    toggleBurger = () => {
        const collapsed = this.state.collapsed;
        this.setState({ collapsed: !collapsed })
    }

    render() {
        return (
            <header className='bg-light'>
                <div className='title-container'>
                    <h1 className='title-container__title'>
                        Travelize
                    </h1>
                    <p className='title-container__description'>
                        <em>My traveling experiences</em>
                    </p>
                </div>
                <nav className='nav-menu'>
                    <Hamburger collapsed={this.state.collapsed} toggleBurger={this.toggleBurger}/>
                    <ul className={`${this.state.collapsed ? 'hidden' : ''}`}>
                        <li className='nav-menu__item'><button className='btn btn-link'>Home</button></li>
                        <li className='nav-menu__item'><button className='btn btn-link'>Blog</button></li>
                        <li className='nav-menu__item'><button className='btn btn-link btn-primary'>About</button></li>
                    </ul>
                </nav>
            </header>
        );
    }
}