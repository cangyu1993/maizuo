import React , {Component} from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory({
    forceRefresh:true
})

export default class Navbar extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li onClick={()=>history.push('/')}><span>首页</span><i className=""></i></li>
                    <li onClick={()=>history.push('/film')}><span>影片</span><i className=""></i></li>
                    <li><span>影院</span><i className=""></i></li>
                    <li><span>商城</span><i className=""></i></li>
                    <li><span>我的</span><i className=""></i></li>
                    <li><span>卖座卡</span><i className=""></i></li>
                </ul>
            </div>
        )
    }
}