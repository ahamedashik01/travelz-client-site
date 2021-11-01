import React from 'react';
import Banner from '../../Banner/Banner';
import MemberShip from '../../MemberShip/MemberShip';
import Packages from '../../Packages/Packages';
import Quality from '../../Quality/Quality';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Quality></Quality>
            <Packages></Packages>
            <MemberShip></MemberShip>
        </div>
    );
};

export default Home;