
import React,{Component} from 'react';
import { connect } from "react-redux";
import './style.less';
import anime from 'animejs';



class Product extends Component{
  constructor (prop){
    super(prop);
    this.myref=React.createRef();
    this.myref2=React.createRef();
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({type:'SET_INDEX',index:2});

    // const svgPath = this.myref.current;
    // const svgText = anime({
    //   targets: svgPath,
    //   loop: true,
    //   direction: 'alternate',
    //   strokeDashoffset: [anime.setDashoffset, 0],
    //   easing: 'easeInOutSine',
    //   duration: 700,
    //   delay: (el, i) => { return i * 500 }
    // });
    var myAnimation = anime({
      targets: [this.myref.current, this.myref2.current],
      translateX: '13rem',
      rotate: 180,
      borderRadius: 8,
      duration: 2000,
      loop: true
    });

  }


  render(){
    return (
      <div>
        <div ref={this.myref} className="box"></div>
        <div ref={this.myref2} className="box2"></div>
        {/*<h3>*/}
          {/*<svg version="1.1" className="subtitle">*/}
            {/*<path ref={this.myref} d="M18.5,33.91S0,36.67,6.67,24.17c8-8.34,22.15-15.46,31.31-13.62,8.34,1-.95,9.34-8.81,24.5C23.34,46.29,15.08,55.23,18.5,57c1.67.86,12-8.3,21.33-20C49.55,24.8,58.23,9.57,61.17,9.5,67.83,9.33,49.88,35.43,40.83,52c-4.14,7.59-10.66,14.17-6.66,15.5C38,68.77,49.17,64,83,15.67c1.59-2.27,7-10.49,8.6-13" fill="none" stroke="#FFFFFF" strokeWidth="15"/>*/}
          {/*</svg>*/}
        {/*</h3>*/}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    data:state.setIndex
  }
};
export default connect(mapStateToProps)(Product);
