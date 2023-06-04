import { DateRange } from "react-date-range";

const Calender = ({ value, handleSelect }) => {
  return (
    <DateRange
      ranges={[value]}
      onChange={handleSelect}
      rangeColors={["#f43f5e"]}
      date={new Date()}
      direction="vertical"
      showDateDisplay={false}
      minDate={value.startDate}
      maxDate={value.endDate}
    />
  );
};

export default Calender;
