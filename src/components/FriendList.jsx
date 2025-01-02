import Friend from "./Friend";
import PropsTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          id={friend.id}
          name={friend.name}
          image={friend.image}
          balance={friend.balance}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropsTypes.array.isRequired,
};

export default FriendList;
