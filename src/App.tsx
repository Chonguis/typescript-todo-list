import React, {MouseEvent, FormEvent, ChangeEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos/Todos';
import AddForm from './components/AddForm/AddForm';

interface State {
  chores: {id: number; chore: string; done: boolean;}[];
  choreText: string;
}

class App extends React.Component<{}, State> {
  constructor(props: any){
    super(props);

    this.state = {
      chores: [{
        id: 1,
        chore: 'Limpiar piscina',
        done: false,
      },
      {
        id: 2,
        chore: 'Recoger cuarto',
        done: false,
      },
      {
        id: 3,
        chore: 'Lavar carro',
        done: false,
      }],
      choreText: "",
    }
  }

  toggleTodoHandler = (event: MouseEvent<HTMLElement>, id: number):void => {
    this.toggleTodo(id);
  }

  toggleTodo = (id: number): void => {
    let chores = [...this.state.chores];
    chores.forEach(chore => {
      if(chore.id == id) chore.done = !chore.done;
    });
    this.setState({chores});
  }

  onChangeHandler = (event: ChangeEvent<HTMLInputElement>):void => {
    console.log(event.target.value);
    this.setState({
      choreText: event.target.value,
    })
  }

  submitChoreHandler = (event: FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    this.submitChore();
  }

  submitChore():void {
    let choreText = this.state.choreText;
    let newChore = {
      // figure out how to generate unique ids, check array and add after length fue lo q yo hice
      id: this.state.chores.length + 1, 
      done: false,
      chore: choreText,
    }
    let chores = [...this.state.chores, newChore];    
    this.setState({ chores , choreText: ''});
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
            Learn React
        </header>
        <AddForm submitChoreHandler={this.submitChoreHandler} onChangeHandler={this.onChangeHandler} value={this.state.choreText} />
        <Todos chores={this.state.chores} toggleTodoHandler={this.toggleTodoHandler} />
      </div>
    );
  }
}

export default App;