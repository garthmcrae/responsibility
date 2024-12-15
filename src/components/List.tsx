import { CSSProperties, ReactNode } from "react";

const list: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 16,
  listStyleType: "decimal",
  marginBlockStart: 0,
  marginBlockEnd: 0,
  paddingInlineStart: 40,
};

export const List = ({ children }: { children: ReactNode }) => {
  return <ol style={list}>{children}</ol>;
};
