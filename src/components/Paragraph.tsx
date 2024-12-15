import { CSSProperties, ReactNode } from "react";

const paragraph: CSSProperties = {
  fontSize: "inherit",
  lineHeight: 1.5,
  marginBottom: 0,
  marginTop: 0,
  marginLeft: 8,
  marginRight: 8,
};

export const Paragraph = ({ children }: { children: ReactNode }) => {
  return <p style={paragraph}>{children}</p>;
};
