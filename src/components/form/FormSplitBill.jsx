function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h1>Split Bill with X</h1>

      <label htmlFor="totalTagihan" className="label-total-tagihan">
        💵Total Tagihan:{" "}
      </label>
      <input
        type="text"
        id="totalTagihan"
        name="totalTagihan"
        className="input-total-tagihan"
      />

      <label htmlFor="tagihanKamu" className="label-tagihan-kamu">
        🙋🏻Tagihan Kamu:{" "}
      </label>
      <input
        type="text"
        id="tagihanKamu"
        name="tagihanKamu"
        className="input-tagihan-kamu"
      />

      <label htmlFor="tagihanTeman" className="label-tagihan-teman">
        🙋🏻Tagihan Teman:{" "}
      </label>
      <input
        type="text"
        id="tagihanTeman"
        name="tagihanTeman"
        disabled
        className="input-tagihan-teman"
      />

      <label htmlFor="ditalangin" className="label-ditalangin">
        🤑 Ditalangin sama:{" "}
      </label>
      <select name="ditalangin" id="ditalangin" className="input-ditalangin">
        <option value="user">Kamu</option>
        <option value="friend">X</option>
      </select>

      <button className="button btn-bill">Add Bill</button>
    </form>
  );
}

export default FormSplitBill;
