function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h1>Split Bill with X</h1>

      {/* Total Bill */}
      <label htmlFor="totalBill" className="label-total-bill">
        💵Total Bill:{" "}
      </label>
      <input
        type="text"
        id="totalBill"
        name="totalBill"
        className="input-total-bill"
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
      />

      {/* Friend's Bill */}
      <label htmlFor="friendBill" className="label-friend-bill">
        🙋🏻Friend&apos;s Bill:{" "}
      </label>
      <input
        type="text"
        id="friendBill"
        name="friendBill"
        disabled
        className="input-friend-bill"
      />

      {/* Covered By */}
      <label htmlFor="coveredBy" className="label-covered-by">
        🤑 Covered By{" "}
      </label>
      <select name="coveredBy" id="coveredBy" className="input-covered-by">
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <button className="button">Add Bill</button>
    </form>
  );
}

export default FormSplitBill;
