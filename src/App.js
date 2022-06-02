import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div>
    //   <Feature></Feature>
    //   <Feature></Feature>
    //   <Feature></Feature>
    // </div>
    <div>
      <YoutubeItem image="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"></YoutubeItem>
    </div>
  );
} 

function Feature(){
  return (
    <div className="feature">
      <img src="" alt="" className="feature-image"></img>
      <h3 className="feature-title"></h3>
      <p className="feature-desc">
      ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. 
      It is an open-source, component-based front end library responsible only for the view layer of the application.
      It was created by Jordan Walke, who was a software engineer at Facebook. It was initially developed and maintained by Facebook and was later used in its products like WhatsApp & Instagram. Facebook developed ReactJS in 2011 in its newsfeed section, but it was released to the public in the month of May 2013.
      </p>
    </div>
    
  );
}

export default App;

// function YoutubeItem
function YoutubeItem(props){
  console.log(props);
  return( 
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image}></img>
      </div>
    </div>
  )
}
