import React, { Component } from 'react';
import images from 'containers/assets/images';
const data = [
    {
        id: 1,
        name: 'Trang chủ',
        path:'/admin/trangchu'
    },
    {
        id: 2,
        name: 'Đăng nhập',
        path:'/dangnhap'

    },
    {
        id: 3,
        name: 'Đăng ký',
        path:'/dangky'
    },
    {
        id: 4,
        name: 'Thông tin cá nhân',
        path:'/admin/profile'
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
                        <li key={index}>
                            <a href={item.path}>{item.name}</a>
                        </li>
                    )
                })}

            </ul>
        )
    }
    render() {
        return (
                <div className="menu">
                    {this.renderList()}
                </div>
        );
    }
}

export default Header;
