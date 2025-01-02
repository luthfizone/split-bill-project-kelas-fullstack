import { useState } from "react";
import FormAddFriend from "./components/form/FormAddFriend";
import FormSplitBill from "./components/form/FormSplitBill";
import FriendList from "./components/FriendList";
import initialFriends from "./data/sample.json";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [defaultFriend, setFriend] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelectedFriend(null);
  };

  const handleNewFriend = (friend) => {
    setFriend((defaultFriend) => [...defaultFriend, friend]);
  };

  const handleSelectedFriend = (friend) => {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id === friend?.id ? null : friend
    );

    setShowAddFriend(false);
  };

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
        <FriendList
          friends={defaultFriend}
          onSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onHandleNewFriend={handleNewFriend} />}
      </div>
      <button className="button btn-add-friend" onClick={handleShowAddFriend}>
        {showAddFriend ? "Close" : "Add Friend"}
      </button>
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
