import React, {MouseEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos/Todos';

interface State {
  chores: {id: number; chore: string; done: boolean;}[];
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
      }]
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

  render(){
    return (
      <div className="App">
        <header className="App-header">
            Learn React
        </header>
        <Todos chores={this.state.chores} toggleTodoHandler={this.toggleTodoHandler} />
      </div>
    );
  }
}

export default App;
