import PropsTypes from "prop-types";

function Friend({ id, name, balance, image, onSelectedFriend }) {
  const formatCurrency = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <li key={id}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          You owe {formatCurrency.format(Math.abs(balance))} to {name}
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you {formatCurrency.format(Math.abs(balance))}
        </p>
      )}
      {balance === 0 && <p>You have&apos;nt outstanding balance with {name}</p>}
      <button
        className="button"
        onClick={() => onSelectedFriend({ id, name, balance, image })}
      >
        Select
      </button>
    </li>
  );
}

Friend.propTypes = {
  id: PropsTypes.number,
  name: PropsTypes.string,
  balance: PropsTypes.number,
  image: PropsTypes.string,
  onSelectedFriend: PropsTypes.func,
};

export default Friend;
