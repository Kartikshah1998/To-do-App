import React, {Component} from 'react';
import Header from "./Header";
import Notes from "./Notes";
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={noteText:'',
                notes:[],
  }
  }
 
  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value})
  }
    
  addNote(){
    if (this.state.noteText === '') {return}
      var NotesArr = this.state.notes;
      NotesArr.push(this.state.noteText);
      this.setState({ noteText : ''});
      this.textInput.focus();                                  
                                                                      

  }
  
  handleKeyPress = (event)=> {
    if(event.key == 'Enter'){
      var NotesArr =this.state.notes;
      NotesArr.push(this.state.noteText);
      this.setState({ noteText : ''});

    }

  }

deletNote(index){
  var NotesArr = this.state.notes;
  NotesArr.splice(index,1)
  this.setState({notes : NotesArr})
}

  render(){
    var notes = this.state.notes.map((val , key)=> {
      return <Notes key={key} text={val}
      deleteMethod = {() => this.deletNote(key)}
      />

    }
    )
    return (
      <div className="container">
        <Header />
        {notes}
        <div className="btn" onClick={this.addNote.bind(this)}>+</div>
          <input type="text"
          ref={((input)=> {this.textInput = input})} hello
          className="textInput"
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
          placeholder="Texthere....."
          
         />
       
 
      </div>
    );
  }
}
export default App;
