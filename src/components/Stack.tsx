import { CSSProperties, ReactNode } from "react";

const stack: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

export const Stack = ({ children }: { children: ReactNode }) => {
  return <div style={stack}>{children}</div>;
};
