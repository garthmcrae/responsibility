import { CSSProperties, ReactNode } from "react";

const heading: CSSProperties = {
  fontFamily: '"Instrument Serif", serif',
  fontSize: `clamp(32px, ${(32 / 400) * 100}vw, 40px)`,
  fontStyle: "normal",
  fontWeight: 400,
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
  style,
}: {
  children: ReactNode;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  id?: string;
  style?: CSSProperties;
}) => {
  const Element = element;
  return (
    <Element id={id} style={{ ...heading, ...style }}>
      {children}
    </Element>
  );
};
