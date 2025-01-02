import FormAddFriend from "./components/FormAddFriend";
import FriendList from "./components/FriendList";
import initialFriends from "./data/sample.json";

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <FriendList friends={initialFriends} />
        <FormAddFriend />
      </div>
    </div>
  );
}

export default App;
