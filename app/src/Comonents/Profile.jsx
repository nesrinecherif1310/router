import React ,{Component} from 'react'

 export default class Profile extends Component{
     //Dynamic(najem nzid nfasakh nbadel) and mutable (yetbadel)
   state={
     name:"Nessrine",
     age:"23",
     intervall:null,
     timer:0,
   }
   //Life Cycle (Houni kil el component yatl3a maneha iwali show)
   componentDidMount()
   { 
       this.setState({
           intervall:setInterval(()=>{
               this.setState({timer:this.state.timer+1})
           },1000)
         } )
   }
   //Houni ki imoutt ifassakh el waket yarjou a zero
  componentWillUnmount(){
      clearInterval(this.state.intervall)
  }
  render(){
   
  return(
 <>
   <h1>{this.state.name}</h1>
   <h2>{this.state.age}</h2>
   {this.state.timer}
 </>
  )
    
}
}