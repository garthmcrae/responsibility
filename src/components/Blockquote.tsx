import { CSSProperties, ReactNode } from "react";

const blockquote: CSSProperties = {
  fontSize: "inherit",
  fontWeight: 900,
  lineHeight: 1.5,
  marginBottom: 0,
  marginLeft: 40,
  marginRight: 40,
  marginTop: 0,
};

export const Blockquote = ({ children }: { children: ReactNode }) => {
  return <blockquote style={blockquote}>{children}</blockquote>;
};
