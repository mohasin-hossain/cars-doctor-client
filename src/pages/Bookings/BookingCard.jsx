const BookingCard = ({ booking, handleDelete, handleConfirmBooking }) => {
  const { _id, img, date, service, price, status } = booking;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <img className="w-24 h-18" src={img} alt="Avatar" />
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>{price}$</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-green-500">Confirmed</span>
        ) : (
          <button
            onClick={() => handleConfirmBooking(_id)}
            className="btn btn-primary btn-xs"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingCard;
