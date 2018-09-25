import React, { Component } from 'react';
import './App.css';
import Menu from './Components/menu';
import Container from './Components/container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu className='menu' />
        <Container>
          <p>
            Duis dolor cupidatat incididunt ut laborum duis non id dolor velit
            officia magna ad officia. Sunt esse enim id aliquip laboris ea. Sint
            ad do excepteur quis ipsum aliqua quis culpa pariatur laboris quis
            consectetur. Aliquip nulla adipisicing incididunt ad commodo
            cupidatat qui. Anim laborum ut fugiat sunt non pariatur qui nulla
            nisi reprehenderit Lorem adipisicing. Consectetur ut aliqua eiusmod
            culpa consectetur aliqua commodo exercitation est incididunt sit
            fugiat duis voluptate. Labore eiusmod duis minim sint sunt sint
            commodo sit do occaecat anim dolor mollit.
          </p>
        </Container>
      </div>
    );
  }
}

export default App;
