import Friend from "./Friend";
import PropsTypes from "prop-types";

function FriendList({ friends, onSelectedFriend }) {
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
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropsTypes.array.isRequired,
  onSelectedFriend: PropsTypes.func,
};

export default FriendList;
