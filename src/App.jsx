import { useState } from "react";
import FormAddFriend from "./components/form/FormAddFriend";
import FormSplitBill from "./components/form/FormSplitBill";
import FriendList from "./components/FriendList";
import initialFriends from "./data/sample.json";

/**
 * Main application component that manages friends and bill splitting.
 * @component
 */
function App() {
  // State to toggle the visibility of the "Add Friend" form
  const [showAddFriend, setShowAddFriend] = useState(false);
  // State to store the list of friends
  const [defaultFriend, setFriend] = useState(initialFriends);
  // State to store the currently selected friend
  const [selectedFriend, setSelectedFriend] = useState(null);

  /**
   * Toggles the "Add Friend" form visibility and resets the selected friend.
   */
  const handleShowAddFriend = () => {
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelectedFriend(null);
  };

  /**
   * Adds a new friend to the list.
   * @param {Object} friend - The friend object to add.
   */
  const handleNewFriend = (friend) => {
    setFriend((defaultFriend) => [...defaultFriend, friend]);
  };

  /**
   * Sets the selected friend or deselects if the same friend is clicked again.
   * @param {Object} friend - The friend object to select.
   */
  const handleSelectedFriend = (friend) => {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id === friend?.id ? null : friend
    );
    setShowAddFriend(false);
  };

  /**
   * Updates the balance of the selected friend based on the split bill value.
   * @param {number} value - The value to adjust the friend's balance by.
   */
  const handleSplitBill = (value) => {
    setFriend(
      defaultFriend.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          return {
            ...friend,
            balance: parseFloat(friend.balance + value),
          };
        }
        return friend;
      })
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        {/* Renders the list of friends */}
        <FriendList
          friends={defaultFriend}
          onSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {/* Conditionally renders the "Add Friend" form */}
        {showAddFriend && <FormAddFriend onHandleNewFriend={handleNewFriend} />}
      </div>
      {/* Button to toggle the "Add Friend" form */}
      <button className="button btn-add-friend" onClick={handleShowAddFriend}>
        {showAddFriend ? "Close" : "Add Friend"}
      </button>
      {/* Conditionally renders the "Split Bill" form if a friend is selected */}
      {selectedFriend !== null && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
