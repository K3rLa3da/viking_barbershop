import React from 'react';
import cennik from '../constants/price'

const PriceTab = (props) => {
    return (
        <div className="page-container">
            {cennik.map(service => <ServiceTable key={service.id}
                                                 title={service.id}
                                                 priceList={service.priceList}/>)}
        </div>
    );
};

const ServiceTable = (props) => {
    return (
        <div className="price-table">
            <div className="table-title">{props.title}</div>
            <table>
                <tbody>
                {
                    props.priceList.map(priceTag =>
                        <Row key={priceTag.title}
                             priceTag={priceTag}/>
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

const Row = (props) => {
    return (
        <tr>
            <td>
                <div className="price-title">{props.priceTag.title}</div>
                <div className="price-description">{props.priceTag.description}</div>
            </td>
            <td>
                <div className="price-time">{props.priceTag.time}</div>
            </td>
            <td>
                <div className="price-cost">{props.priceTag.price}</div>
            </td>
        </tr>
    );
};


export default PriceTab;