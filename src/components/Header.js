import React from 'react';

import helmet from '../../public/image/helmet_logo.png'
import facebook from '../../public/image/facebook_logo.png'

import '../../public/styles/components/header.less'

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div>
                    <div>BARBER SHOP</div>
                    <div>& TATTOO</div>
                </div>
                <div>
                    <div className="title-block">
                        <div>V I K I N G</div>
                        <div>ul. Sienkiewicza 52, 50-349 Wrocław</div>
                        <div className="links-block">
                            <a target="_blank"
                               href="https://booksy.net/pl-pl/4494_viking-barbershop-tattoo-studio_barberzy_13750_wroclaw">
                                Umów sie na wizytę</a>
                            <a target="_blank" href="https://web.facebook.com/VikingBartoo/">
                                <div>Facebook</div>
                                <img src={`/build/${facebook}`}/>
                            </a>
                        </div>
                    </div>
                    <img src={`/build/${helmet}`}/>
                </div>
            </div>
        </div>
    );
};

export default Header;

