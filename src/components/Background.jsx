import React from 'react';
export default class Background extends React.Component {

    render() {
        return (
            <section className='section-bg'>
                <img className='section-bg__img' src={this.props.img} alt="hero background" />
            </section>
        );
    }
}