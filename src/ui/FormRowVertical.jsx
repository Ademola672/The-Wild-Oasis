import styled from "styled-components";
import PropTypes from "prop-types";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

// Prop Types Validation
FormRowVertical.propTypes = {
  label: PropTypes.string, // Ensures label is a string
  error: PropTypes.string, // Ensures error is a string
  children: PropTypes.element.isRequired, // Ensures children is a React element
};

export default FormRowVertical;
