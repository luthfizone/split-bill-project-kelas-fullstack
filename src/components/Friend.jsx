import PropTypes from "prop-types";

/**
 * Friend component represents an individual friend in the list.
 * @component
 * @param {Object} props - Component properties.
 * @param {number} props.id - Unique identifier for the friend.
 * @param {string} props.name - Name of the friend.
 * @param {number} props.balance - Current balance with the friend.
 * @param {string} props.image - URL of the friend's image.
 * @param {Function} props.onSelectedFriend - Callback function to handle friend selection.
 * @param {Object} props.selectedFriend - The currently selected friend object.
 */
function Friend({
  id,
  name,
  balance,
  image,
  onSelectedFriend,
  selectedFriend,
}) {
  // Formatter for currency in Indonesian Rupiah
  const formatCurrency = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  // Determine if this friend is the currently selected friend
  const isSelectedFriend = selectedFriend?.id === id;

  return (
    <li key={id}>
      {/* Friend's image */}
      <img src={image} alt={name} />
      {/* Friend's name */}
      <h3>{name}</h3>
      {/* Display balance information with appropriate styling */}
      {balance < 0 && (
        <p className="red">
          You owe {formatCurrency.format(Math.abs(balance))} to {name}
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you {formatCurrency.format(Math.abs(balance))}
        </p>
      )}
      {balance === 0 && <p>You haven&apos;t outstanding balance with {name}</p>}
      {/* Button to select or deselect the friend */}
      <button
        className="button"
        onClick={() => onSelectedFriend({ id, name, balance, image })}
      >
        {isSelectedFriend ? "close" : "select"}
      </button>
    </li>
  );
}

Friend.propTypes = {
  id: PropTypes.number.isRequired, // Friend's ID is required
  name: PropTypes.string.isRequired, // Friend's name is required
  balance: PropTypes.number.isRequired, // Friend's balance is required
  image: PropTypes.string.isRequired, // Friend's image URL is required
  onSelectedFriend: PropTypes.func.isRequired, // Function to handle friend selection is required
  selectedFriend: PropTypes.object, // Object representing the selected friend
};

export default Friend;
