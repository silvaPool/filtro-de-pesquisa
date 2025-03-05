import { useState } from "react";

const Input = ({ onChangeCallback }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    onChangeCallback && onChangeCallback(inputValue);
  };

  return (
    <label class="label">
      <span class="icon">
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.5 15.5L19 19M11 16A5 5 0 1 1 16 11 5 5 0 0 1 11 16Z"
          />
        </svg>
      </span>
      <input
        type="text"
        value={value}
        class="input"
        id="input"
        onChange={handleChange}
        placeholder="Pesquisar"
        autocomplete="off"
      />
    </label>
  );
};

export default Input;
