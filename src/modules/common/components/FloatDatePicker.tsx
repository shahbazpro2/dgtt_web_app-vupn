import React, { useState } from "react";
import { DatePickerProps, InputProps } from "antd";
import DatePicker from "./DatePicker";

interface FloatDatePickerProps extends InputProps {
    label: string,
}

const FloatDatePicker = (props: FloatDatePickerProps & DatePickerProps) => {
    const [focus, setFocus] = useState(false);
    let { label, value, placeholder, required, ...rest } = props;

    if (!placeholder) placeholder = label;

    //   const isOccupied = focus || (value && value.length !== 0);
    const isOccupied = focus || (value);

    const labelClass = isOccupied && label ? "label as-label" : "label as-placeholder";

    const requiredMark = required ? <span className="text-danger">*</span> : null;

    return (
        <div
            className="custom-input"
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
        >
            <DatePicker {...rest as any} placeholder="" />
            <label className={labelClass}>
                {isOccupied ? label : placeholder} {requiredMark}
            </label>
        </div>
    );
};

export default FloatDatePicker;
