import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import "./style.less"


class HomeList extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			   <div className="list-box">
					 <h3 className="list-title">
						 <span className="title">最新动态</span>
						 <b className="subtitle">/ ENJOY</b>
					 </h3>
           <ul className='list-item'>
             <li>
							 <span className="item-content">新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</span>
							 <b className="item-date">06-28</b>
						 </li>
             <li>
               <span className="item-content">新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</span>
               <b className="item-date">06-28</b>
             </li>
             <li>
               <span className="item-content">新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</span>
               <b className="item-date">06-28</b>
             </li>
             <li>
               <span className="item-content">新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</span>
               <b className="item-date">06-28</b>
             </li>
             <li>
               <span className="item-content">新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</span>
               <b className="item-date">06-28</b>
             </li>
           </ul>
				 </div>

			)
	}
}

export default HomeList
