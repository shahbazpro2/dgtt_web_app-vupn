import React, { useState } from "react";
import { Input } from "antd";
import { TextAreaProps } from "antd/lib/input";

interface FloatInputProps extends TextAreaProps {
    label: string,
}

const FloatTextArea = (props: FloatInputProps) => {
    const [focus, setFocus] = useState(false);
    let { label, value, placeholder, required, ...rest } = props;

    if (!placeholder) placeholder = label;

    //   const isOccupied = focus || (value && value.length !== 0);
    const isOccupied = focus || (value);

    const labelClass = isOccupied ? "label as-label" : "label as-placeholder";

    const requiredMark = required ? <span className="text-danger">*</span> : null;

    return (
        <div
            className="custom-input"
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
        >
            <Input.TextArea {...rest} />
            <label className={labelClass}>
                {isOccupied ? label : placeholder} {requiredMark}
            </label>
        </div>
    );
};

export default FloatTextArea;
