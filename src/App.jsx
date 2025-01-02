import { useState } from "react";
import FormAddFriend from "./components/form/FormAddFriend";
import FormSplitBill from "./components/form/FormSplitBill";
import FriendList from "./components/FriendList";
import initialFriends from "./data/sample.json";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [defaultFriend, setFriend] = useState(initialFriends);

  const handleShowAddFriend = () => {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  };

  const handleNewFriend = (friend) => {
    setFriend([...defaultFriend, friend]);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <FriendList friends={defaultFriend} />
        {showAddFriend && <FormAddFriend onHandleNewFriend={handleNewFriend} />}
      </div>
      <button className="button btn-add-friend" onClick={handleShowAddFriend}>
        {showAddFriend ? "Close" : "Add Friend"}
      </button>
      <FormSplitBill />
    </div>
  );
}

export default App;
