function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="name" className="label-name">
        🤵🏻Name:{" "}
      </label>
      <input type="text" name="name" id="name" className="input-name" />

      <label htmlFor="image" className="label-image">
        📸Image:{" "}
      </label>
      <input type="text" name="image" id="image" className="input-image" />

      <button className="button btn-friend">Add Friend</button>
    </form>
  );
}

export default FormAddFriend;
