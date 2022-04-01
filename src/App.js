import logo from './logo.svg';
import './App.css';
import Tasks from "./Tasks";
import TodoInput from "./TodoInput";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://todoapphasura.herokuapp.com/v1/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Todo App</p>
        </header>
        <br />
        <TodoInput />
        <Tasks />
      </div>
    </ApolloProvider>
  );
}

export default App;
