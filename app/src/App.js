import React ,{Component} from 'react'
import Profile from "./Comonents/Profile"
 export default class App extends Component{
   state={
     show:false
   }
   handleShow=()=>{
     this.setState({show:!this.state.show})
   }
  render(){
   
  return(
 <>
  <button onClick={this.handleShow}>{this.state.show?"Unshow":"Show"}
  </button>
  {
    this.state.show?  <Profile/> : "Nothing"
  }

 </>
  )
    
}
}