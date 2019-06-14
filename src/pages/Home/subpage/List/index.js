import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import "./style.less"

import ProductDesc from './subpage/product-desc/index'
import ProductImg from './subpage/product-img/index'
import Divider from '../../../../compontent/Divider/index'
import Item from './subpage/Item/index'
import img1 from './images/banner_01.png';
import img2 from './images/banner_02.png';
import img3 from './images/banner_03.png';
import img4 from './images/banner_04.png';
import img5 from './images/banner_05.png';
import img6 from './images/banner_06.png';
import img7 from './images/banner_08.png';


class HomeList extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div className='list-container'>
					<div className='first-product-show'>
						<ProductDesc></ProductDesc>
						<ProductImg img={img1}></ProductImg>
						<div className='lastest-new'>
							<Item></Item>
						</div>
					</div>
          <Divider />
          <div className='two-product-show'>
            <ProductDesc></ProductDesc>
            <ProductImg img={img2}></ProductImg>
          </div>
          <div className='three-product-show'>
            <ProductImg img={img3}></ProductImg>
            <ProductDesc></ProductDesc>
          </div>
          <ul className='four-product-show'>
            <ProductImg img={img4}></ProductImg>
            <ProductImg img={img5}></ProductImg>
            <ProductImg img={img6}></ProductImg>
          </ul>

          <div className='five-product-show'>
            <ProductImg img={img7}></ProductImg>
            <ProductDesc></ProductDesc>
          </div>

				</div>
			)
	}
}

export default HomeList
