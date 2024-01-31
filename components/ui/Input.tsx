import React from "react";

type InputProps = {
  type: string;
  id: string;
  name: string;
  disabled?:boolean
};

function Input({ type, id, name,disabled }: InputProps) {
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
