import { useContext, useState } from "react";
import Button from "./Button";
import Calender from "./Calender";
import { AuthContext } from "../../providers/AuthProvider";
import BookingModal from "../Modal/BookinModal";
import { formatDistance } from "date-fns";
import { addBookings, updateStatus } from "../../API/bookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RoomReservation = ({ roomDetails }) => {
  const { user, role } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const totalPrice =
    parseFloat(
      formatDistance(
        new Date(roomDetails.to),
        new Date(roomDetails.from)
      ).split(" ")[0]
    ) * roomDetails.price;

  const [value, setValue] = useState({
    startDate: new Date(roomDetails.from),
    endDate: new Date(roomDetails.to),
    key: "selection",
  });

  const [bookinInfo, setBookingInfo] = useState({
    host: roomDetails.host.email,
    location: roomDetails.location,
    price: totalPrice,
    guest: {
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
    },
    to: value.endDate,
    from: value.startDate,
    title: roomDetails.title,
    roomId: roomDetails._id,
    image: roomDetails.image
  });

  const handleSelect = (ranges) => {
    setValue({ ...value });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden w-full">
      <div className="flex flex-row items-center p-4 gap-1">
        <div className="text-2xl font-semibold">$ {roomDetails.price}</div>
        <div className="font-light text-neutral-600 ">Night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender value={value} handleSelect={handleSelect} />
      </div>
      <div className="p-4">
        <Button
          onClick={() => setIsOpen(true)}
          disabled={roomDetails.host.email === user?.email || roomDetails.booked}
          label={"RESERVE"}
        />
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
      <BookingModal
        closeModal={closeModal}
        bookingInfo={bookinInfo}
        isOpen={isOpen}
      />
    </div>
  );
};

export default RoomReservation;
