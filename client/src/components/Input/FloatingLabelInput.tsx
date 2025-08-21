import type { ChangeEvent } from "react";

interface FloatingLabelInputProps {
  label: string;
  type: "text" | "date" | "password";
  name: string;
  value?: string | any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  labelBaseClassName?: string;
  labelClassName?: string;
  inputBaseClassName?: string;
  inputClassName?: string;
  required?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  errors?: string[];
}

const FloatingLabelInput = ({
  label,
  type,
  name,
  value,
  onChange,
  labelBaseClassName = "absolute text-sm text-secondary duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-primary px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 start-1",
  labelClassName,
  inputBaseClassName = "block px-2.5 pb-2.5 pt-4 w-full text-sm text-secondary bg-transparent rounded-lg border-1 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-white focus:text-white peer",
  inputClassName,
  required,
  autoFocus,
  disabled,
  readOnly,
  errors,
}: FloatingLabelInputProps) => {
  const labelCombinedClasses = `${labelBaseClassName} ${labelClassName}`.trim();
  const inputCombinedClasses = `${inputBaseClassName} ${inputClassName}`.trim();

  return (
    <>
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={inputCombinedClasses}
          placeholder=" "
          autoFocus={autoFocus}
          disabled={disabled}
          readOnly={readOnly}
        />
        <label htmlFor={name} className={labelCombinedClasses}>
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      </div>
      {errors && errors.length > 0 && (
        <span className="text-red-600 text-xs">{errors[0]}</span>
      )}
    </>
  );
};

export default FloatingLabelInput;
