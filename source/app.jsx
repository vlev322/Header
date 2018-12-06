import React, {Component, Fragment} from 'react';

import styles from './styles/main.sass';

import Header from './header/header';

class App extends Component {
  render() {
    return (
				<Header
					nickname='User'
					age='22'
					name='Tom Toizer'
					position='Content Manager'
					location='Vilnius'
					/>
    );
  }
}

export default App;
