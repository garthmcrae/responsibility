import { CSSProperties, ReactNode } from "react";

const heading: CSSProperties = {
  fontSize: 24,
  lineHeight: 1,
  marginBottom: 0,
  marginTop: 16,
  marginLeft: 8,
  marginRight: 8,
};

export const Heading = ({
  children,
  element = "h2",
  id,
}: {
  children: ReactNode;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  id?: string;
}) => {
  const Element = element;
  return (
    <Element id={id} style={heading}>
      {children}
    </Element>
  );
};
