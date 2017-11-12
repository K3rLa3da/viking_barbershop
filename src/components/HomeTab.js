import React from 'react';

import photo1 from '../../public/image/photo/3.jpg'
import photo2 from '../../public/image/photo/2.jpg'

const HomeTab = () => {
    return (
        <div className="page-container">
            <div className="home-page-box">
                <div className="home-text-box">
                    <div className="title">O Viking Barbershop & Tattoo Studio</div>
                    <div className="tagline"> Klasyczne fryzjerstwo i stare rzemiosło.</div>
                    <div className="text-content">
                        Viking Barbershop & Tatto Studio to oldschoolowe miejsce
                        stworzone przez facetów dla facetów, uwielbiamy męskie rozmowy okraszone piwem i rumem.
                        Dbamy aby każdy czuł się u nas wyjątkowo, a wyszedł zadowolony z dobrze skrojonymi włosami i
                        brodą.
                        Nie lubimy komplikować rzeczy, a naszym priorytetem są klasyczne fryzury i w takich czujemy się
                        najlepiej – moda przemija
                        klasyka zawsze będzie z nami.
                    </div>
                </div>
                <div className="home-image-box"><img src={`/build/${photo1}`}/></div>
            </div>
            <div className="home-page-box">
                <div className="home-image-box"><img src={`/build/${photo2}`}/></div>
                <div className="home-text-box">
                    <div className="title">O Viking Barbershop & Tattoo Studio</div>
                    <div className="tagline"> Klasyczne fryzjerstwo i stare rzemiosło.</div>
                    <div className="text-content">
                        Viking Barbershop & Tatto Studio to oldschoolowe miejsce
                        stworzone przez facetów dla facetów, uwielbiamy męskie rozmowy okraszone piwem i rumem.
                        Dbamy aby każdy czuł się u nas wyjątkowo, a wyszedł zadowolony z dobrze skrojonymi włosami i
                        brodą.
                        Nie lubimy komplikować rzeczy, a naszym priorytetem są klasyczne fryzury i w takich czujemy się
                        najlepiej – moda przemija
                        klasyka zawsze będzie z nami.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTab;