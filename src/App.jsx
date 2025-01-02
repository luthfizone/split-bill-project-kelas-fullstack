import FormAddFriend from "./components/form/FormAddFriend";
import FormSplitBill from "./components/form/FormSplitBill";
import FriendList from "./components/FriendList";
import initialFriends from "./data/sample.json";

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <FriendList friends={initialFriends} />
        <FormAddFriend />
        <button className="button btn-add-friend">Add Friend</button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
