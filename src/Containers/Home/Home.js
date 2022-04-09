import React from 'react';
import Profile from './Profile';
import Footer  from './Footer/Footer';
function Home(props) {
    return (
        <div className='home-container'>
            <Profile />
            <Footer />
        </div>
    );
}

export default Home;