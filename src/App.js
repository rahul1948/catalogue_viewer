import React,{Component} from "react"
import Carousel from "infinite-react-carousel"
import classes from "./App.module.css"
import Reacttimeout from "react-timeout"


class App extends Component {
  state={
    autoplay:false,
  }
  toggle=()=>{
    this.setState({autoplay:false})
  }
  onclick=()=>{
    
    
     this.setState({autoplay:!this.state.autoplay})
    
    
  }
  componentDidUpdate(){
    this.props.setTimeout(()=>{this.setState({autoplay:false})
    console.log(this.state.autoplay)}, 9000) 
    
  }
  
  
 render()
  
  {  
  return (<div>
    <Carousel {...this.state}>
    <div className={classes.App}><input className={classes.input} type="text" value="1"></input></div>
    <div className={classes.App}><input className={classes.input} type="text" value="2"></input></div>
    <div className={classes.App}><input className={classes.input} type="text" value="3"></input></div>
    </Carousel>
    <div className={classes.checkbox}><input className={classes.box} type="checkbox" onClick={this.onclick} ></input><h3>Slide</h3></div>
  </div>)
}

}

export default Reacttimeout(App);
