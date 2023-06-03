import Button from "./Button";
import Calender from "./Calender";

const RoomReservation = ({ roomDetails }) => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden w-full">
      <div className="flex flex-row items-center p-4 gap-1">
        <div className="text-2xl font-semibold">$ {roomDetails.price}</div>
        <div className="font-light text-neutral-600 ">Night</div>
      </div>
      <hr />
      <div className="flex justify-center">
      <Calender />
      </div>
      <div className="p-4">
        <Button label={"RESERVE"} />
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ 300</div>
      </div>
    </div>
  );
};

export default RoomReservation;
