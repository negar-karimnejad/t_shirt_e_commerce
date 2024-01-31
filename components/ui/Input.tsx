import React from "react";

type InputProps = {
  type: string;
  id: string;
  name: string;
};

function Input({ type, id, name }: InputProps) {
  return (
    <input
      className="border rounded-md p-2 outline-none"
      type={type}
      id={id}
      name={name}
    />
  );
}

export default Input;
