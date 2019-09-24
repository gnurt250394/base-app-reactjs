import React, { Component } from 'react';
import images from 'containers/assets/images';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar:"https://vnn-imgs-f.vgcloud.vn/2019/06/11/16/co-gai-chup-anh-khoa-than-o-ho-sen-tung-dong-phim-cung-tram-anh-4.jpg"
        };
    }

    render() {
        return (
            <div className="menu">
                <ul>
                    <input />
                    <button >
                        <img width="19px" src={images.ic_search} />
                    </button>
                    <li><a href="/dangnhap" >Trang chủ</a></li>
                    <li>
                        <a href="#" className="container-avatar">
                            <img
                                className="avatar"
                                width="20px"
                                src={this.state.avatar}
                            />
                            Diễn đàn</a>

                    </li>
                    <li><a href="#">Tin tức</a></li>
                    <li><a href="#">Hỏi đáp</a></li>
                    <li><a href="#">Liên hệ</a></li>
                    <li><a href="#">Liên hệ</a></li>
                    <li><a href="#">Liên hệ</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;
