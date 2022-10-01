import Contact from "./models/contact";
import "./App.css";
import ContactView from "./components/contact";

const contact = new Contact(
  "Luis Angel",
  "Gonzalez",
  "vivi_luis15@hotmail.com",
  false
);
function App() {
  return (
    <div className="App">
      <ContactView contact={contact} />
    </div>
  );
}

export default App;
