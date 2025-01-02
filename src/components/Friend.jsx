import PropsTypes from "prop-types";

function Friend({ id, name, balance, image }) {
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
          Kamu berhutang {formatCurrency.format(Math.abs(balance))} ke {name}
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} berhutang {formatCurrency.format(Math.abs(balance))} ke kamu
        </p>
      )}
      {balance === 0 && <p>Kamu dan {name} tidak ada hutang</p>}
      <button className="button">Pilih</button>
    </li>
  );
}

Friend.propTypes = {
  id: PropsTypes.number,
  name: PropsTypes.string,
  balance: PropsTypes.number,
  image: PropsTypes.string,
};

export default Friend;
