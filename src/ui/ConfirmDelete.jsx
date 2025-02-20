import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          $variation="secondary"
          disabled={disabled}
          onClick={onCloseModal || (() => {})}
        >
          Cancel
        </Button>
        <Button $variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

// Add PropTypes validation
ConfirmDelete.propTypes = {
  resourceName: PropTypes.string.isRequired, // Validates that resourceName is a required string
  onConfirm: PropTypes.func.isRequired, // Validates that onConfirm is a required function
  onCloseModal: PropTypes.func, // Changed to optional
  disabled: PropTypes.bool, // Validates that disabled is a boolean (optional)
};

ConfirmDelete.defaultProps = {
  disabled: false, // Default value for disabled prop
};

export default ConfirmDelete;
