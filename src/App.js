import React, {Component} from 'react';
import './App.css';
import Book  from './components/book';

class App extends Component {

state = {
  books : [
    { BookName : "1984", writer : "George Orwell" },
    { BookName : "The Da Vinci Code", writer : "Dan Brown"},
    { BookName : "The Alchemist", writer : "Paulo Coelho"}
  ],
  otherProps : "I am some other prop"
}

changeBookState = newBookName =>{
  this.setState({
    books : [
      { BookName : newBookName, writer : "George Orwell" },
      { BookName : "The Vinci Code", writer : "Dan Brown"},
      { BookName : "Metmorphosis", writer : "Franz Kafka"}
    ]
  });

}

changeWithInputState = e =>{
  this.setState({
    books : [
      { BookName : e.target.value, writer : "George Orwell" },
      { BookName : "The Da Vinci Code", writer : "Dan Brown"},
      { BookName : "Metmorphosis", writer : "Franz Kafka"}
    ]
  });
}

  render() {
    return (
          <div className="App">
            <h1>Book List</h1>
            <button onClick={() => this.changeBookState("Nineteen Eighty-Four")}>Change State</button>
            <input type="text" onChange={this.changeWithInputState}></input>

            <Book BookName = {this.state.books[0].BookName} Writer = {this.state.books[0].writer} inputName = {this.changeWithInputState}/>
            <Book BookName = {this.state.books[1].BookName} Writer = {this.state.books[1].writer}/>
            <Book BookName = {this.state.books[2].BookName} Writer = {this.state.books[2].writer} change = {this.changeBookState.bind(this,"Nineteen 84")}/>

          </div>
        );
  }
}


export default App;
