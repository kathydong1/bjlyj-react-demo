import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import {Link} from 'react-router-dom'
import img1 from './images/banner_01.jpg'
import img2 from './images/banner_02.jpg'
import img3 from './images/banner_03.jpg'
import img4 from './images/banner_10.png'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './style.less'

class Category extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.myRef = React.createRef();
	  this.state = {
	  	index:0
	  }
	}
  componentDidMount() {
    new Swiper(this.myRef.current, {
      centeredSlides: true,
      loop:true,
			autoplay:{
      	delay:2000,
        waitForTransition:false
			},
      controller:true,
      coverflowEffect: {
        rotate: 30,
        stretch: 10,
        depth: 60,
        modifier: 2,
        slideShadows : true
      },
    });
  }
	render(){


		return (
				<div id="home-category">
          <div className="swiper-container" ref={this.myRef}>
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<img src={img1} alt=''/>
								<div className="check-btn"><span>查看详情</span><b></b></div>
							</div>
              <div className="swiper-slide"><img src={img2} alt=''/></div>
              <div className="swiper-slide"><img src={img3} alt=''/></div>
							<div className="swiper-slide"><img src={img4} alt=''/></div>
						</div>
					</div>

					<div className="index-container">
						<ul>
							<li className={this.state.index === 0 ? "selected" : ''} data-index="0" onClick={this.SwipeCategory.bind(this)}></li>
							<li className={this.state.index === 1 ? "selected" : ''} data-index="1" onClick={this.SwipeCategory.bind(this)}></li>
							<li className={this.state.index === 2 ? "selected" : ''} data-index="2" onClick={this.SwipeCategory.bind(this)}></li>
						</ul>
					</div>
					<div className='prev-btn'></div>
          <div className='next-btn'></div>
				</div>
			)
	}

	SwipeCategory(e){
		e.preventDefault();
		e.stopPropagation();
	}
}

export default Category
