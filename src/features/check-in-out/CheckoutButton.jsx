import PropTypes from "prop-types";

import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      $variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

// PropTypes Validation
CheckoutButton.propTypes = {
  bookingId: PropTypes.number.isRequired,
};

export default CheckoutButton;
