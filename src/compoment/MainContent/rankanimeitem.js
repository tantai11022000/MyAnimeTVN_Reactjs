import React, { Component } from 'react';

class Rankanimeitem extends Component {
    render() {
        return (
            <div>
                <li className="rank-anime-item">
                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                        <a href>
                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                <span className="rank-anime">{this.props.rank}</span>
                            </div>
                            <img src={this.props.img} alt="" className="img-thumbnail rank--anime-img" />
                        </a>
                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                            <span className="rank-name-anime">{this.props.name}</span>
                        </div>
                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                            <span className="rank-name-anime">{this.props.sotap}</span>
                        </div>
                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                            <span className="rank-name-anime">{this.props.view}</span>
                        </div>
                    </div>
                </li>

            </div>
        );
    }
}

export default Rankanimeitem;