import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://fierce-lowlands-27228.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data)
            })
    }, [])
    return (
        <div className="my-5 py-5" id="packages" >
            <h6>OUR PACKAGES</h6>
            <h1>Make A Tour With Us Now!</h1>
            <i className="text-dark fs-1 fas fa-plane my-5 py-2"></i>
            <Container>
                <Row className="g-5">
                    {
                        packages.length === 0 ?
                            <Spinner className="mx-auto" animation="grow" />
                            :
                            packages.map(singlePackage => <Package
                                key={singlePackage._id}
                                package={singlePackage}
                            >
                            </Package>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Packages;