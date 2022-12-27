import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BookSlider from '../BookSlider/BookSlider';
import Counter from '../Counter/Counter';
import HomeBooks from '../HomeBooks/HomeBooks';
import HomeSearch from '../HomeSearch/HomeSearch';
import Navigation from '../Navigation/Navigation/Navigation';
import NavTop from '../Navigation/NavTop/NavTop';
const Home = () => {
    return (
        <div>
            <NavTop />
            <Navigation />
            <Banner />
            <HomeSearch />
            <Counter />
            <HomeBooks />
            <BookSlider />
            <Footer />
        </div>
    );
};

export default Home;