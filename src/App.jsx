import { useState } from "react";
import FormAddFriend from "./components/form/FormAddFriend";
import FormSplitBill from "./components/form/FormSplitBill";
import FriendList from "./components/FriendList";
import initialFriends from "./data/sample.json";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriend = () => {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <FriendList friends={initialFriends} />
        {showAddFriend && <FormAddFriend />}
        <button className="button btn-add-friend" onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
