import PropTypes from "prop-types";
import { useContext } from "react";
import miContext from "../context/store";
import Contact from "../models/contact";
import Connect from "./connect";

import "../styles/index.style.scss";

function ContactView({ contact }) {
  const state = useContext(miContext);

  return (
    <div className="contact-container">
      <h1>{contact.name}</h1>
      <h1>{contact.lastName}</h1>
      <h1>{contact.email}</h1>
      <h1>{contact.isConnect ? "true" : "false"}</h1>
      {console.log("Que da esto")}
      {console.log(state)}
      <Connect isConnect={contact.isConnect} />
      <button
        type="button"
        onClick={() => {
          state.setUpdate({ tokens: "Hola compita" });
        }}
      >
        Update Contact
      </button>
    </div>
  );
}

ContactView.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
};

export default ContactView;
