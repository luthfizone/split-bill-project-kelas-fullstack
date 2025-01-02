import { useState } from "react";
import PropTypes from "prop-types";

/**
 * FormAddFriend component allows users to add a new friend to the list.
 * @component
 * @param {Object} props - Component properties.
 * @param {Function} props.onHandleNewFriend - Callback function to handle adding a new friend.
 */
function FormAddFriend({ onHandleNewFriend }) {
  // State to store the new friend's name
  const [newFriend, setNewFriend] = useState("");
  // State to store the new friend's image URL
  const [newImage, setNewImage] = useState("https://i.pravatar.cc/48");

  /**
   * Handles the form submission to add a new friend.
   * @param {Event} event - The form submission event.
   */
  const handleSubmitNewFriend = (event) => {
    event.preventDefault();

    // Ensure both newFriend and newImage are provided
    if (!newFriend || !newImage) return;

    // Generate a random unique ID for the new friend
    const id = crypto.randomUUID();

    // Create a new friend object with the generated ID
    const newId = {
      id: Number(id), // Convert the ID to a number
      name: newFriend, // Set the friend's name
      image: `${newImage}?=${id}`, // Append the ID to the image URL for uniqueness
      balance: 0, // Initialize balance to zero
    };

    // Call the onHandleNewFriend callback with the new friend object
    onHandleNewFriend(newId);

    // Reset the state after sending data
    setNewFriend("");
    setNewImage("");
  };

  return (
    // Form for handling the submission of a new friend
    <form className="form-add-friend" onSubmit={handleSubmitNewFriend}>
      {/* Input for friend's name */}
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

      {/* Input for friend's image URL */}
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

      {/* Submit button to add the friend */}
      <button className="button">Add</button>
    </form>
  );
}

FormAddFriend.propTypes = {
  onHandleNewFriend: PropTypes.func.isRequired, // Function to handle adding a new friend is required
};

export default FormAddFriend;
