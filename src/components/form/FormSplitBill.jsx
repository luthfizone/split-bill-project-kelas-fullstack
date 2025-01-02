import PropsTypes from "prop-types";
import { useState } from "react";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount !== "" && amount - myBill;
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmitSplitBill = (event) => {
    event.preventDefault();

    if (!amount || !myBill) {
      return;
    }

    const splitValue =
      whoIsPaying === "user" ? parseFloat(myBill) : parseFloat(amount - myBill);
    onSplitBill(whoIsPaying === "user" ? splitValue : -splitValue);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmitSplitBill}>
      <h1>Split Bill with {selectedFriend.name}</h1>

      {/* Total Bill */}
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

      {/* Your Bill */}
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

      {/* Friend's Bill */}
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

      {/* Covered By */}
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

      <button className="button">Add Bill</button>
    </form>
  );
}

FormSplitBill.propTypes = {
  selectedFriend: PropsTypes.object,
  onSplitBill: PropsTypes.func,
};

export default FormSplitBill;
