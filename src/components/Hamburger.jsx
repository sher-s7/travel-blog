import React from 'react';
export default class Hamburger extends React.Component {

    render() {
        return (
            <button className={`btn hamburger${this.props.collapsed ? ' collapsed' : ''}`} onClick={this.props.toggleBurger}>
                <div className='hamburger__line'></div>
                <div className='hamburger__line'></div>
                <div className='hamburger__line'></div>
            </button>
        );
    }
}