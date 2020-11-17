import React from 'react';
export default class Footer extends React.Component {

    render() {
        return (
            <footer className='bg-primary'>
                <div className='copyright'>
                    <p className='copyright__text'>© 2020 Travelize</p>
                </div>
                <div className='footer-links'>
                    <button className='btn btn-link btn-light'>Privacy Policy</button>
                    <button className='btn btn-link btn-light'>Terms and conditions</button>
                </div>
            </footer>
        );
    }
}