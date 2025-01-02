import Friend from "./Friend";
import PropsTypes from "prop-types";

function FriendList({ friends, onSelectedFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          id={friend.id}
          name={friend.name}
          image={friend.image}
          balance={friend.balance}
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropsTypes.array.isRequired,
  onSelectedFriend: PropsTypes.func,
  selectedFriend: PropsTypes.object,
};

export default FriendList;
