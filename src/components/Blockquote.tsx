import { CSSProperties, ReactNode } from "react";

const blockquote: CSSProperties = {
  fontSize: "inherit",
  fontWeight: 500,
  lineHeight: 1.5,
  marginBottom: 32,
  marginLeft: 40,
  marginRight: 40,
  marginTop: 32,
};

export const Blockquote = ({ children }: { children: ReactNode }) => {
  return <blockquote style={blockquote}>{children}</blockquote>;
};
