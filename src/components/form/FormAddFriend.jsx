import { useState } from "react";
import PropTypes from "prop-types";

function FormAddFriend({ onHandleNewFriend }) {
  const [newFriend, setNewFriend] = useState("");
  const [newImage, setNewImage] = useState("https://i.pravatar.cc/48");

  const handleSubmitNewFriend = (event) => {
    event.preventDefault();

    if (!newFriend || !newImage) return;

    // generate random id
    const id = crypto.randomUUID();

    // send this object
    const newId = {
      id: Number(id),
      name: newFriend,
      image: `${newImage}?=${id}`,
      balance: 0,
    };

    // send the data
    onHandleNewFriend(newId);

    // empty the state after sending data
    setNewFriend("");
    setNewImage("");
  };

  return (
    // Form for handle the submit
    <form className="form-add-friend" onSubmit={handleSubmitNewFriend}>
      {/* name */}
      <label htmlFor="name" className="label-name">
        🤵🏻Name:{" "}
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="input-name"
        value={newFriend}
        onChange={(event) => setNewFriend(event.target.value)}
      />

      {/* image */}
      <label htmlFor="image" className="label-image">
        📸Image:{" "}
      </label>
      <input
        type="text"
        name="image"
        id="image"
        className="input-image"
        value={newImage}
        onChange={(event) => setNewImage(event.target.value)}
      />

      <button className="button">Add</button>
    </form>
  );
}

FormAddFriend.propTypes = {
  onHandleNewFriend: PropTypes.func.isRequired,
};

export default FormAddFriend;
