import { CSSProperties, ReactNode } from "react";

const blockquote: CSSProperties = {
  fontSize: "inherit",
  fontStyle: "italic",
  fontWeight: 400,
  lineHeight: 1.5,
  marginBottom: 32,
  marginLeft: 40,
  marginRight: 40,
  marginTop: 32,
  opacity: 0.8,
};

export const Blockquote = ({ children }: { children: ReactNode }) => {
  return <blockquote style={blockquote}>{children}</blockquote>;
};
