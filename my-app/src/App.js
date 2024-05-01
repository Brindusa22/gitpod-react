import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreetings';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32" /> */}
      {/* <StatefulGreeting greeting="I'm a stateful class component" name="Mike" /> */}
      {/* <StatefulGreetingWithCallback greeting="I'm a stateful class component" name="Mike" /> */}
      {/* <StatefulGreetingWithPrevState greeting="I'm a stateful class component" name="Mike" /> */}
      <EventsFunctional />
      <EventsClass />
    </div>  
  );
}

export default App;
