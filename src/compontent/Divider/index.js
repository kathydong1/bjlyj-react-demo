import React,{Component} from 'react'
import './style.less'



class Divider extends Component{

	render(){
		return (
		    <div className="divider-box">
          <b className="divider-line float-left"></b>
          <div className="divider-title">
            <span>最新搭配</span>
          </div>
          <b className="divider-line float-right"></b>

        </div>
			)
	}

}


export default Divider;
