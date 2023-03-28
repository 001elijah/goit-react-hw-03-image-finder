import './App.css';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  state = {
    query: ''
  };

  handleSearchbarSubmit = SearchbarQuery => {
    this.setState({ query: SearchbarQuery});
  };

  render() {
    return (
      <>
        <ToastContainer />
        <Searchbar searchbarToAppQuery={this.handleSearchbarSubmit}/>
        <ImageGallery query={this.state.query}/>
      </>
    );
  };
};


export default App;

// create class with state and component tree
