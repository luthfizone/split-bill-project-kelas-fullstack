import PropTypes from "prop-types";
import { useState } from "react";

/**
 * FormSplitBill component allows users to split a bill with a selected friend.
 * @component
 * @param {Object} props - Component properties.
 * @param {Object} props.selectedFriend - The friend with whom the bill is being split.
 * @param {Function} props.onSplitBill - Callback function to handle the split bill logic.
 */
function FormSplitBill({ selectedFriend, onSplitBill }) {
  // State to store the total bill amount
  const [amount, setAmount] = useState("");
  // State to store the user's share of the bill
  const [myBill, setMyBill] = useState("");
  // Calculate the friend's share of the bill
  const friendBill = amount !== "" && amount - myBill;
  // State to determine who is paying the bill
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  /**
   * Handles the form submission to split the bill.
   * @param {Event} event - The form submission event.
   */
  const handleSubmitSplitBill = (event) => {
    event.preventDefault();

    // Ensure both amount and myBill are provided
    if (!amount || !myBill) {
      return;
    }

    // Calculate the split value based on who is paying
    const splitValue =
      whoIsPaying === "user" ? parseFloat(myBill) : parseFloat(amount - myBill);

    // Call the onSplitBill callback with the appropriate value
    onSplitBill(whoIsPaying === "user" ? splitValue : -splitValue);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmitSplitBill}>
      <h1>Split Bill with {selectedFriend.name}</h1>

      {/* Total Bill Input */}
      <label htmlFor="totalBill" className="label-total-bill">
        💵Total Bill:{" "}
      </label>
      <input
        type="text"
        id="totalBill"
        name="totalBill"
        className="input-total-bill"
        value={amount}
        onChange={(event) => setAmount(parseFloat(event.target.value))}
      />

      {/* Your Bill Input */}
      <label htmlFor="yourBill" className="label-your-bill">
        🙋🏻Your Bill:{" "}
      </label>
      <input
        type="text"
        id="yourBill"
        name="yourBill"
        className="input-your-bill"
        value={myBill}
        onChange={(event) => setMyBill(parseFloat(event.target.value))}
      />

      {/* Friend's Bill Display */}
      <label htmlFor="friendBill" className="label-friend-bill">
        🙋🏻{selectedFriend.name} Bill:{" "}
      </label>
      <input
        type="text"
        id="friendBill"
        name="friendBill"
        disabled
        value={friendBill}
        className="input-friend-bill"
      />

      {/* Covered By Selector */}
      <label htmlFor="coveredBy" className="label-covered-by">
        🤑 Covered By{" "}
      </label>
      <select
        name="coveredBy"
        id="coveredBy"
        className="input-covered-by"
        value={whoIsPaying}
        onChange={(event) => setWhoIsPaying(event.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      {/* Submit Button */}
      <button className="button">Add Bill</button>
    </form>
  );
}

FormSplitBill.propTypes = {
  selectedFriend: PropTypes.object.isRequired,
  onSplitBill: PropTypes.func.isRequired,
};

export default FormSplitBill;
