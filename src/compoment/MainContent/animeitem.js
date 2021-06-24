import React, { Component } from 'react';

class Animeitem extends Component {
    render() {
        return (
            <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                <img className="img-item-carousel img-thumbnail" src={this.props.img} alt="" />
                <p className="time-item">{this.props.sotap}</p>
                <div className="name-anime-item text-center">{this.props.name}</div>
                <div className="amount-view">
                    <i className="far fa-eye" />
                    {this.props.view}
                </div>
                <div className="time-run">{this.props.timestart}</div>
            </div>
        );
    }
}

export default Animeitem;