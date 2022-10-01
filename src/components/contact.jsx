import PropTypes from "prop-types";
import Contact from "../models/contact";
import Connect from "./connect";

function ContactView({ contact }) {
  return (
    <>
      <h1>{contact.name}</h1>
      <h1>{contact.lastName}</h1>
      <h1>{contact.email}</h1>
      <h1>{contact.isConnect ? "true" : "false"}</h1>
      <Connect isConnect={contact.isConnect} />
    </>
  );
}

ContactView.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
};

export default ContactView;
