import React from "react";

type labelProps = {
  currValue?: string;
  functionCall?: React.ChangeEventHandler<HTMLInputElement>;
  labelText?: string;
};

export default function CLabel({
  currValue,
  functionCall,
  labelText,
}: labelProps) {
  return (
    <label>
      {labelText}
      <input
        type="text"
        value={currValue}
        onChange={functionCall}
        className="bg-white mx-2 rounded-2xl cursor p-2 w-2xl"
      />
    </label>
  );
}
