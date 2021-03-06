import React from 'react';
import Nav from './Nav';
import Form from './Form';
import Inbox from './Inbox';
import MdBanner from './MdBanner';
import CRM from './CRM';
import ItBrand from './ItBrand';
import Tools from './Tools';
import BtmBanner from './BtmBanner';
import Footer from './Footer';

const App = () => {
    return (
        <React.Fragment>
            <Nav />
            <Form />
            <Inbox />
            <MdBanner />
            <CRM />
            <ItBrand />
            <Tools />
            <BtmBanner />
            <Footer />
        </React.Fragment>
    );
};

export default App;