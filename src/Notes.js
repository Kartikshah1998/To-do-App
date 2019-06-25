import React, {Component} from 'react';

class Notes extends Component{
    render(){
        return(
            <div className="note" onClick={this.props.deleteMethod  } placeholder="remove">
                {this.props.text} 
                
                <i class="fas fa-trash"></i>
                
            </div>
        );
    }
}
export default Notes;


