import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeList extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
          <div className='product-desc'>
						<h3 className='product-desc-title'>
							<p className='title-en'>Just do it</p>
							<p>乐享</p>
							<p>品质</p>
						</h3>
						<h4 className='product-desc-type'>白色 / 阔腿裤</h4>
						<p className='product-desc-txt'>大衣（overcoat）是一种常见的外套，衣䙓长度至腰部及以下 大衣一般为长袖，前方可打开并可以钮扣、拉链、魔鬼毡或腰带束起具保暖或美观</p>
            <div className='product-desc-price'>价格：<span>$299</span></div>
          </div>
			)
	}
}

export default HomeList
