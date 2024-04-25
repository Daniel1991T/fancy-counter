import React from "react";

type ButtonProps = {
  onClick: () => void;
  style?: string;
  children: React.ReactNode;
  disabled?: boolean;
};

export default function Button({
  onClick,
  style,
  children,
  disabled,
}: ButtonProps) {
  const handelClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick();
    e.currentTarget.blur();
  };
  return (
    <button disabled={disabled} className={style} onClick={handelClick}>
      {children}
    </button>
  );
}
