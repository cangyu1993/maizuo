import React, {Component} from 'react';
import '../style/Navbar.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className='navbar-left'>
                        <div className='bar'>
                            <i className='iconfont icon-list'></i>
                        </div>
                            <h1>卖座电影</h1>
                    </div>
                    <div className='navbar-right'>
                        <div className='city'>北京</div>
                        <div className='user'><i className='iconfont icon-user'></i></div>
                    </div>
                </header>
            </div>
        )
    }
}