import clsx from "clsx";

type InputProps = {
  type: string;
  id: string;
  name: string;
  disabled?: boolean;
};

function Input({ type, id, name, disabled }: InputProps) {
  return (
    <input
      className={clsx(
        `block w-full border-0 rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6`,
        disabled && "opacity-50 cursor-default"
      )}
      type={type}
      id={id}
      name={name}
      disabled={disabled}
      required
    />
  );
}

export default Input;
