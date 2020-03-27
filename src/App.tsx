import React, {MouseEvent, FormEvent, ChangeEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos/Todos';
import AddForm from './components/AddForm/AddForm';

interface State {
  chores: {id: number; chore: string; done: boolean;}[];
  choreText: string;
  idGenerator: number;
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
        id: 4,
        chore: 'Recoger cuarto',
        done: false,
      },
      {
        id: 6,
        chore: 'Lavar carro',
        done: false,
      }],
      choreText: "",
      idGenerator: 1,
    }
  }

  toggleTodoHandler = (event: MouseEvent<HTMLInputElement>, id: number):void => {
    let chores = [...this.state.chores];
    chores.forEach(chore => {
      if(chore.id == id) chore.done = !chore.done;
    });
    this.setState({chores});
  }

  deleteTodoHandler = (event: MouseEvent<HTMLButtonElement>, id: number) => {
    let chores = [...this.state.chores];
    chores = chores.filter(chore => chore.id !== id);
    this.setState({ chores });
  }
  
  onChangeHandler = (event: ChangeEvent<HTMLInputElement>):void => {
    console.log(event.target.value);
    this.setState({
      choreText: event.target.value,
    })
  }

  submitChoreHandler = (event: FormEvent<HTMLFormElement>):void => {
    event.preventDefault(); 

    let chores = [...this.state.chores];  
    let id = this.getUniqueId(chores); 
    let choreText = this.state.choreText;
    let newChore = {
      // figure out how to generate unique ids, check array and add after length fue lo q yo hice
      id, 
      done: false,
      chore: choreText,
    }
    chores = [...this.state.chores, newChore];   

    this.setState({ 
      chores , 
      choreText: '', 
      idGenerator: id });
  }

  getUniqueId = (chores: {id: number; chore: string; done: boolean;}[]): number => {
    //generateUniqueId
    //hacer listas de id's que ya hay
    //ver si el state idGenerator está incluído
    //si sí, devolver ese id,
    //si no, incrementarlo una vez y volver a heck    
    let { idGenerator } = this.state;
    let choresIds: number[] = [];
    chores.forEach((chore, i) => {
      if (chore.id) choresIds.push(chore.id);
    });
    while(choresIds.includes(idGenerator)) idGenerator++
    return idGenerator
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
            Learn React
        </header>
        <AddForm 
          submitChoreHandler={this.submitChoreHandler} 
          onChangeHandler={this.onChangeHandler} 
          value={this.state.choreText} />
        <Todos 
          chores={this.state.chores} 
          toggleTodoHandler={this.toggleTodoHandler}
          deleteTodoHandler={this.deleteTodoHandler} />
      </div>
    );
  }
}

export default App;