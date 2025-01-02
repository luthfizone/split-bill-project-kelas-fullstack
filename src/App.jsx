import FriendList from "./components/FriendList";
import initialFriends from "./data/sample.json";

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <FriendList friends={initialFriends} />
      </div>
    </div>
  );
}

export default App;
