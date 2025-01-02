import Friend from "./Friend";
import PropTypes from "prop-types";

/**
 * FriendList component renders a list of friends.
 * @component
 * @param {Object} props - Component properties.
 * @param {Array} props.friends - Array of friend objects to display.
 * @param {Function} props.onSelectedFriend - Callback function to handle the selection of a friend.
 * @param {Object} props.selectedFriend - The currently selected friend object.
 */
function FriendList({ friends, onSelectedFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id} // Unique key for each friend item
          id={friend.id} // Friend's ID
          name={friend.name} // Friend's name
          image={friend.image} // Friend's image URL
          balance={friend.balance} // Friend's balance
          onSelectedFriend={onSelectedFriend} // Callback for selecting a friend
          selectedFriend={selectedFriend} // Currently selected friend
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired, // Array of friends is required
  onSelectedFriend: PropTypes.func, // Function to handle friend selection
  selectedFriend: PropTypes.object, // Object representing the selected friend
};

export default FriendList;
