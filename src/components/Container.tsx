import { CSSProperties, ReactNode } from "react";

const container: CSSProperties = {
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 600,
  paddingBottom: 32,
  paddingLeft: 8,
  paddingRight: 8,
  paddingTop: 32,
};

export const Container = ({ children }: { children: ReactNode }) => {
  return <div style={container}>{children}</div>;
};
