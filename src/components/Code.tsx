import { CSSProperties, useState } from "react";
import { Expand } from "./Expand";

// const backgroundColor = `rgba(${`${255 / 2},`.toString().repeat(3)}.5)`;

const button: CSSProperties = {
  appearance: "none",
  backgroundColor: "transparent",
  borderStyle: "none",
  borderWidth: 0,
  display: "block",
  padding: 0,
};

const code: CSSProperties = {
  backgroundColor: "DarkSlateGray",
  boxSizing: "border-box",
  color: "Cornsilk",
  fontSize: 16,
  lineHeight: 1.5,
  marginBottom: 0,
  marginTop: 0,
  overflowX: "auto",
  paddingBottom: 32,
  paddingLeft: 40,
  paddingRight: 40,
  paddingTop: 32,
};

const container: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  marginBottom: 0,
  marginLeft: 8,
  marginRight: 8,
  marginTop: 0,
};

const controls: CSSProperties = {
  display: "flex",
  gap: 8,
};

const icon: CSSProperties = { display: "block", height: 20, width: 20 };

export const Code = ({ children }: { children: string }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div style={container}>
      <div style={controls}>
        <button
          onClick={() => setExpand(!expand)}
          style={button}
          title="toggle code"
        >
          <svg aria-hidden="true" style={icon} title="Code" viewBox="0 0 24 24">
            <path
              d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"
              fill="currentColor"
            />
          </svg>
        </button>
        {/* <button style={button}>
          <svg aria-hidden="true" style={icon} title="Cop" viewBox="0 0 24 24">
            <path
              d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
              fill="currentColor"
            />
          </svg>
        </button> */}
      </div>
      <Expand expand={expand}>
        <pre style={code}>
          <code>{children.replaceAll("`", '"').trim()}</code>
        </pre>
      </Expand>
    </div>
  );
};
