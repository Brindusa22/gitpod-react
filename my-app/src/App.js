import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreetings';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32" /> */}
      {/* <StatefulGreeting greeting="I'm a stateful class component" name="Mike" /> */}
      <StatefulGreetingWithCallback greeting="I'm a stateful class component" name="Mike" />
    </div>  
  );
}

export default App;
