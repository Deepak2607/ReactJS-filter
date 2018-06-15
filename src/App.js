import React, { Component } from 'react';
import './App.css';
//import Images from './Components/images';

class App extends Component {
    
    constructor(){
          super();
          this.state={
              category:"Select",
              updatedLanguages:[],
              languages:[
                  {id:"1",link:"HTML",categories:"Web"},
                  {id:"1",link:"CSS",categories:"Web"},
                  {id:"1",link:"Bootstrap",categories:"Web"},
                  {id:"1",link:"Javascript",categories:"Web"},
                  {id:"1",link:"PHP",categories:"Web"},
                  {id:"1",link:"SQL",categories:"Web"},
                  {id:"1",link:"ReactJS",categories:"Web"},
                  {id:"1",link:"React Native",categories:"Web"},
                  {id:"1",link:"NodeJS",categories:"Web"},       
                  
                  {id:"2",link:"Java",categories:"Android"},
                  {id:"2",link:"XML",categories:"Android"},
                  {id:"2",link:"Kotlin",categories:"Android"},
                  {id:"2",link:"Corona/LUA",categories:"Android"}, 
                  {id:"2",link:"PhoneGap",categories:"Android"},
                  {id:"2",link:"Android APIs",categories:"Android"},
                  {id:"2",link:"Restfull web services",categories:"Android"},
                  
                  {id:"3",link:"C",categories:"Programming"},
                  {id:"3",link:"C++",categories:"Programming"},
                  {id:"3",link:"Java",categories:"Programming"},
                  {id:"3",link:"C#",categories:"Programming"},
                  {id:"3",link:"Python",categories:"Programming"},
                  {id:"3",link:"Ruby",categories:"Programming"},
                  {id:"3",link:"PHP",categories:"Programming"},
                  {id:"3",link:"Perl",categories:"Programming"},
                  
//                  {id:"4",link:"Perl",categories:"Machine learning"},         
              ]
          }
        
        this.handleChange=(event)=>{
            this.setState({
                category:event.target.value,
                updatedLanguages:[]
                
            }) 
        }
       
        this.filterLanguages=()=>{
            
            const filteredLanguages= this.state.languages.filter(language =>{
            if(this.state.category==="All")
               return (language.categories)        
            else
               return (language.categories === this.state.category);              
            });

            this.setState({
          updatedLanguages: [].concat(filteredLanguages),
//                category:"Select"
           });    
        }     
}
    
  render() {
      
    return (
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-4"></div>
       
        <div className="col-md-4">
           <div className="App">
             <div className="align-center">
              <h1 className="Header">ReactJS Filter</h1>
               <div className="display">
                  <select className="form-control" value={this.state.category} onChange={this.handleChange}>
                    <option value="Select">Select</option>
                    <option value="All">All</option>
                    <option value="Web">Web</option>
                    <option value="Android">Android</option>
                    <option value="Programming">Programming</option>     
                  </select>   
                    <button style={{marginLeft:"10px"}} type="button" className="btn btn-primary" onClick={this.filterLanguages}>Filter</button>
               </div>
            </div>
                  <br/>
                  {this.state.updatedLanguages.map(language =>
                       <li style={{marginLeft:"70px"}}>{language.link}</li>
                    )}
        </div>
      </div>

        <div className="col-md-4"></div>
        </div>
        </div>
    );
  }
}

export default App;
