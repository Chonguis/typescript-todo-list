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
        id: 4,
        chore: 'Recoger cuarto',
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
      //se añade más 1 para si la última que se añadió se borra y se vuelve a añadir, ya no es el mismo,
      //y tiene que seguir looping
      idGenerator: id + 1 });
  }

  getUniqueId = (chores: {id: number; chore: string; done: boolean;}[]): number => {
    //generateUniqueId
    //hacer listas de id's que ya hay
    //ver si el state idGenerator está incluído
    //si sí, devolver ese id,
    //si no, incrementarlo una vez y volver a heck    

    //el problema que estoy teniendo ahora es que el id generator está volviendo pa tras
    let choresIds: number[] = [];
    chores.forEach((chore, i) => {
      if (chore.id) choresIds.push(chore.id);
    });
    let { idGenerator } = this.state;

    console.log(idGenerator);
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