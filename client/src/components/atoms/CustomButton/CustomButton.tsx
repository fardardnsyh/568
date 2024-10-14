import React from "react";

interface CustomButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  disabled = false,
  children,
  className,
}) => {
  return (
    <button
      className={`${className} text-2xl font-semibold py-[16px] px-[40px] rounded-[36px]`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
