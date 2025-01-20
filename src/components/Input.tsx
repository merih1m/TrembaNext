import React, { ChangeEvent } from "react";

interface InputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: string;
  label: string;
  placeholder?: string;
  autoComplete?: string;
}

export default function Input({
  value,
  onChange,
  disabled,
  type = "text",
  label,
  placeholder,
  autoComplete,
}: InputProps) {
  return (
    <div className="relative w-full lg:w-[30rem]">
      <input
        value={value}
        onChange={onChange}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="outline-none text-black px-4 py-3 border-2 border-neutral-300 w-full rounded-md peer focus:border-neutral-900 disabled:bg-neutral-200"
      />
      <label className="capitalize absolute top-1 left-2 scale-100 opacity-0 transition-all duration-200 ease-in-out peer-placeholder-shown:opacity-0 peer-placeholder-shown:translate-y-6 peer-focus:opacity-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:bg-black peer-focus:px-2 bg-transparent">
        {label}
      </label>
    </div>
  );
}
