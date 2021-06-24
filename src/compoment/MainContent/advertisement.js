import React, { Component } from 'react';

class Advertisement extends Component {
    render() {
        return (
            <div>
                {/* Quảng Cáo  */}
                <div className="Advisor" style={{ backgroundColor: '#00665d' }}>
                    <h3 className="text-center">
                        Quảng cáo
                    </h3>
                    <img className="img-fluid" src={this.props.img} alt="" />
                </div>

            </div>
        );
    }
}

export default Advertisement;