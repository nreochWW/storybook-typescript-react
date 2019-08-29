import * as React from "react";

interface Props {
  children: React.ReactNode;
  textColor: string;
  bg: string;
}

export const Button = (props: Props) => {
  const { children, bg, textColor } = props;
  return (
    <button style={{ backgroundColor: bg, color: textColor }}>
      {children}
    </button>
  );
};
