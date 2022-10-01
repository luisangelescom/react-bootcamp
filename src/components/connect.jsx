import PropTypes from "prop-types";

function Connect({ isConnect }) {
  return isConnect ? (
    <h1>Contacto En Línea</h1>
  ) : (
    <h1>Contacto No Disponible</h1>
  );
}

Connect.propTypes = {
  isConnect: PropTypes.bool.isRequired,
};

export default Connect;
