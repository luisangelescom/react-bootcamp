import React, { Component } from "react";
import "../../styles/clock.scss";

class ClockClass extends Component {
  constructor(props) {
    super(props);
    // Estado privado del component
    this.state = {
      // Se genera una fecha como estado inicial del componente
      fecha: new Date(),
      edad: 0,
      nombre: "Martín",
      apellidos: "San José",
    };
  }

  // eslint-disable-next-line react/sort-comp
  tick() {
    this.setState((prevState) => {
      const edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { fecha, nombre, apellidos, edad } = this.state;
    return (
      <div className="clock-container">
        <div>
          <h2>
            Hora Actual:
            {fecha.toLocaleTimeString()}
          </h2>
          <h3>
            {nombre} {apellidos}
          </h3>
          <h1>Edad: {edad}</h1>
        </div>
      </div>
    );
  }
}
export default ClockClass;
