import { CalendarBlankIcon } from "@phosphor-icons/react";
import { cx } from "class-variance-authority";
import React from "react";
import DatePicker, { type DatePickerProps } from "react-datepicker";
// import { Container } from './styles';

type InputDateProps = DatePickerProps & {};

const InputDate: React.FC<InputDateProps> = ({ className, ...rest }) => {
  return (
    <div
      className={cx(
        "flex items-center justify-between px-3 text-gray-100 h-12 border border-gray-500 rounded-lg focus:border-yellow-dark active:border-yellow-dark hover:border-yellow-dark",
        className,
      )}
    >
      <DatePicker
        {...rest}
        className="w-full border-none focus:outline-none"
        icon={<CalendarBlankIcon size={20} className="text-yellow" />}
      />
      <CalendarBlankIcon size={20} className="text-yellow" />
    </div>
  );
};

export default InputDate;
