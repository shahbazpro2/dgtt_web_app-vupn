import React, { useState } from "react";
import { Input, InputProps } from "antd";

interface FloatInputProps extends InputProps {
    label: string,
    isPassword?: boolean,
}

const FloatInput = (props: FloatInputProps) => {
    const [focus, setFocus] = useState(false);
    let { label, value, placeholder, required, isPassword, ...rest } = props;

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
            {isPassword ?
                <Input.Password {...rest} /> :
                <Input {...rest} />
            }
            <label className={labelClass}>
                {isOccupied ? label : placeholder} {requiredMark}
            </label>
        </div>
    );
};

export default FloatInput;
