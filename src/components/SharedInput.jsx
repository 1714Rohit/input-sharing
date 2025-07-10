import React from 'react';

const SharedInput = ({
  type = 'text',
  name,
  label,
  value,
  onChange,
  checked,
  options = [],
  placeholder,
  ...rest
}) => {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-semibold">{label}</label>}

      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-2 border rounded"
          {...rest}
        />
      ) : type === 'checkbox' ? (
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            className="mr-2"
            {...rest}
          />
          {placeholder}
        </label>
      ) : type === 'radio' ? (
        options.map((option) => (
          <label key={option.value} className="inline-flex items-center mr-4">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="mr-1"
            />
            {option.label}
          </label>
        ))
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-2 border rounded"
          {...rest}
        />
      )}
    </div>
  );
};

export default SharedInput;