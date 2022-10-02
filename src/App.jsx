import { useState } from "react";
import MyContext from "./context/store";

import Contact from "./models/contact";
import ContactView from "./components/contact";
import ClockClass from "./components/clock/ClockClass";
import ClockFunctional from "./components/clock/ClockFunctional";

// import "./App.css";

const contact = new Contact(
  "Luis Angel",
  "Gonzalez",
  "vivi_luis15@hotmail.com",
  true
);

function App() {
  const [initialState] = useState({
    tokens: "Token chavo",
  });

  return (
    <div className="container">
      <MyContext.Provider value={initialState}>
        {/* <ContactView contact={contact} /> */}
        {/* <ClockClass /> */}
        <ClockFunctional />
      </MyContext.Provider>
    </div>
  );
}

export default App;
