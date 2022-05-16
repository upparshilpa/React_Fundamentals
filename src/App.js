import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Hello from './components/Hello'
import Message from './components/Message'; 
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Forms from './components/Forms';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import HooksCounter from './components/HooksCounter';
import Table from './components/Table';
import ParentComp  from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counters from './components/Counters';
import  ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext'

 
class App extends Component {
  render() {
  return (
     <div className="App">
       <UserProvider value = "Vishwas">
       <ComponentC />
       </UserProvider>
      {/*} <Counters render={(count,incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />)}/>
       <Counters render={(count,incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount} />)}/>*/}
       {/*<User render= { (isLoggedIn) => isLoggedIn ? 'Vishwas': 'Guest'}/>*/}
       {/*<ClickCounterTwo />
       <HoverCounterTwo />*/}
      {/*} <ErrorBoundary>
       <Hero heroName="BatMan" />
       </ErrorBoundary>
       <ErrorBoundary>
       <Hero heroName="SuperMan" />
       </ErrorBoundary>
       <ErrorBoundary>
       <Hero heroName="Joker" />
  </ErrorBoundary> */}
       
       {/*<PortalDemo />*/}
      {/*} <FRParentInput />*/}
      {/*} <FocusInput />*/}
     {/*}  <RefsDemo /> */}
    {/*} <ParentComp /> */}
    {/*} <Table />*/}
     {/*<FragmentDemo />*/}
    {/*<HooksCounter /> */}











     
    {/* <LifecycleA /> */}
      {/*<Forms />*/}
      {/*<h1 className='error'> Error</h1> */}
     {/* <h1 className={styles.success}>Success</h1>*/}
     {/*} <Inline />*/}
      {/*<Stylesheets primary={true} />*/}
      { /*<NameList /> */}
-       {/*} <UserGreeting />*/}
      { /* <ParentComponent /> */}
      { /*<EventBind /> */}
      { /*<FunctionClick /> */ }
       { /*<ClassClick /> */ }
      { /*<Counter /> */ }
      { /*<Message /> */}
      { /*<Greet name="Bruce" MovieName="Batman"> */}
      { /* <p>this is children prop</p> */}
      { /* </Greet>  */}
      { /* <Greet name="Clark" MovieName="Superman"> */}
      { /*   <button>Action</button> */}
       { /*  </Greet>  */}
      { /* <Greet name="Diana" MovieName="LightsOut"/> */}  
     { /* <Welcome name="Bruce" MovieName="Batman"/> */} 
     { /* <Welcome name="Clark" MovieName="Superman"/>  */}
     { /* <Welcome name="Diana" MovieName="LightsOut"/>   */}
    { /* <Hello /> */ }
    </div>
  );
}
}

export default App;
