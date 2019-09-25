import React, { Component } from 'react';
const data = [
    {
        id: 1,
        name: 'abc',

    },
    {
        id: 1,
        name: 'abc',

    },
    {
        id: 1,
        name: 'abc',

    },
]
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: "https://vnn-imgs-f.vgcloud.vn/2019/06/11/16/co-gai-chup-anh-khoa-than-o-ho-sen-tung-dong-phim-cung-tram-anh-4.jpg"
        };
    }
    renderList = () => {
        return (
            <ul>
                {data.map((item, index) => {
                    return (
                        <li key={index}>{item.name}</li>
                    )
                })}

            </ul>
        )
    }
    render() {
        return (
            <nav className="navbar-header">
                <div className="menu">
                    {this.renderList()}
                </div>

            </nav>
        );
    }
}

export default Header;
