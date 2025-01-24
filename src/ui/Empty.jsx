// import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation

function Empty({ resourceName }) {
  return <p>No {resourceName} could be found.</p>;
}

// Add PropTypes validation
Empty.propTypes = {
  resourceName: PropTypes.string.isRequired,
};

export default Empty;
