import React from "react";

class ContadorClase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  incrementar = () => {
      this.setState({ contador: this.state.contador + 1 });
    }

  decrementar = () => {
    if (this.state.contador > 0) {
        this.setState({ contador: this.state.contador - 1 })
    }
  }

  componentDidMount() {
    console.log("El componente se montó");
  }

  componentDidUpdate() {
    console.log("El componente se actualizó");
  }

  componentWillUnmount() {
    console.log("El componente se desmontó");
  }

  render() {
    return (
      <div>
        <h1>Contador de clase: {this.state.contador}</h1>
        <button onClick={this.incrementar}>+</button>
        <button onClick={this.decrementar}>-</button>
      </div>
    );
  }
}

export default ContadorClase;