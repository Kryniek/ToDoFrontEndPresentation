import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: true,
      isError: false
    }
  }

  //kiedy komponent dodawany jest do drzewka DOM
  componentWillMount() {
    //przed render
  }

  componentDidMount() {
    //po render
  }

  //kiedy komponent jest aktualizowany
  componentWillReceiveProps(nextProps) {
    //po zmianie propsów przez rodzica
  }

  shouldComponentUpdate(nextProps, nextState) {
    //wywoływane przez render
  }

  componentWillUpdate(nextProps, nextState) {
    //przed render
  }

  componentDidUpdate(prevProps, prevState) {
    //po render
  }

  //kiedy komponent jest odmontowywany
  componentWillUnmount() {
    //...
  }

  //kiedy pojawi się błąd podczas renderowania
  componentDidCatch(error, info) {
    //...
  }

  //zawsze oprócz odmontowywania komponentu
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
}