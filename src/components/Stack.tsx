import { CSSProperties, ReactNode } from "react";

const stack: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 16,
};

export const Stack = ({ children }: { children: ReactNode }) => {
  return <div style={stack}>{children}</div>;
};
