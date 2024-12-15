import { CSSProperties, ReactNode } from "react";

const content: CSSProperties = {
  backgroundColor: "var(--color)",
  boxSizing: "border-box",
  color: "var(--background-color)",
  fontSize: "inherit",
  fontWeight: 900,
  lineHeight: 1.5,
  paddingBottom: 24,
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 24,
  textAlign: "center",
};

export const Content = ({ children }: { children: ReactNode }) => {
  return <div style={content}>{children}</div>;
};
