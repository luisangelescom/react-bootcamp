import { useEffect, useState, useRef } from "react";

function ClockFunctional() {
  const timerID = useRef();

  const [data, setData] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  });

  const tick = () => {
    setData((prevState) => {
      const edad = prevState.edad + 1;
      return { ...prevState, edad, fecha: new Date() };
    });
  };

  useEffect(() => {
    timerID.current = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID.current);
    };
  }, []);

  return (
    <div className="clock-container">
      <div>
        <h2>
          Hora Actual:
          {data.fecha.toLocaleTimeString()}
        </h2>
        <h3>
          {data.nombre} {data.apellidos}
        </h3>
        <h1>Edad: {data.edad}</h1>
      </div>
    </div>
  );
}

export default ClockFunctional;
