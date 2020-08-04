import React, { Component } from 'react';
import axios from 'axios';

class SelectTrack extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidUpdate(prevProps) {
        
        if(this.props.track!== prevProps.track){
           
               
                axios.post("/bsubtrack", {track : this.props.track}).then( response => {
                    this.setState({ 
                        data: response.data.arr
                    })
                }
                );
            
        }
    }
    
    render() {
        
        return (
            
            <div className="container">
               <select class="browser-default custom-select" onChange={this.props.selectSubtrackChange}>
                <option value=""  selected="selected">select  Sub Track  </option>
 
               {
                   this.state.data.map((team, i) => {
                       return (
                           <option value={team}> {team}</option>
                       )
                   })
               }
               </select>
            </div>

        
        )
    }
}
export default  SelectTrack;