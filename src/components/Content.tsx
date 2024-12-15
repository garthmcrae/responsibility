import { CSSProperties, ReactNode } from "react";

const backgroundColor = `rgba(${`${255 / 2},`.toString().repeat(3)}.25)`;

const content: CSSProperties = {
  backgroundColor,
  boxSizing: "border-box",
  color: "var(--color)",
  fontSize: "inherit",
  fontWeight: 700,
  lineHeight: 1.5,
  paddingBottom: 40,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 40,
  textAlign: "center",
};

export const Content = ({ children }: { children: ReactNode }) => {
  return <div style={content}>{children}</div>;
};
