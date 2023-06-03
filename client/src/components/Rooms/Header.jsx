import Heading from "../Heading/Heading";

const Header = ({ roomDetails }) => {
  return (
    <>
      <Heading
        title={roomDetails.title}
        subtitle={roomDetails.location}
        center={false}
      />
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
        <img
          src={roomDetails.image}
          alt="Room Picture"
          className="object-cover w-full"
        />
      </div>
    </>
  );
};

export default Header;
