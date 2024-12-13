import { CSSProperties } from "react";

const container: CSSProperties = {
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 600,
  paddingBottom: 32,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 32,
};

const content: CSSProperties = {
  backgroundColor: `rgba(${255 / 2}, ${255 / 2}, ${255 / 2}, .5)`,
  boxSizing: "border-box",
  padding: 16,
};

const heading: CSSProperties = {
  fontSize: "inherit",
  lineHeight: 1,
  marginBottom: 0,
  marginTop: 0,
};

const row: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
};

const stack: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 16,
};

export function App() {
  return (
    <div style={container}>
      <div style={stack}>
        <h1 style={heading}>Responsive layouts without media queries</h1>
        <p>
          <a href="https://github.com/garthmcrae/responsibility/blob/main/src/app.tsx">
            View code on Github
          </a>
        </p>
        <h2 style={heading}>Grid auto fill min size</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gridGap: 8,
          }}
        >
          {["Column 1", "Column 2", "Column 3"].map((object) => (
            <div
              style={{
                boxSizing: "border-box",
                padding: 8,
              }}
            >
              <div style={content}>{object}</div>
            </div>
          ))}
        </div>
        <h2 style={heading}>Flex wrap minimum width grow and shrink</h2>
        <div style={{ ...row, justifyContent: "center" }}>
          {["Column 1", "Column 2", "Column 3"].map((object) => (
            <div
              style={{
                boxSizing: "border-box",
                flexBasis: `${(1 / 3) * 100}%`,
                flexGrow: 1,
                flexShrink: 1,
                minWidth: "min(100%, 200px)",
                padding: 8,
              }}
            >
              <div style={content}>{object}</div>
            </div>
          ))}
        </div>
        <h2 style={heading}>Flex wrap minimum width</h2>
        <div style={{ ...row, justifyContent: "center" }}>
          {["Column 1", "Column 2", "Column 3"].map((object) => (
            <div
              style={{
                boxSizing: "border-box",
                flexBasis: `${(1 / 3) * 100}%`,
                flexGrow: 0,
                flexShrink: 0,
                minWidth: "min(100%, 200px)",
                padding: 8,
              }}
            >
              <div style={content}>{object}</div>
            </div>
          ))}
        </div>
        <h2 style={heading}>Flex wrap minimum width fraction of container</h2>
        <div style={row}>
          <div
            style={{
              boxSizing: "border-box",
              flexBasis: `${(1 / 2) * 100}%`,
              flexGrow: 1,
              flexShrink: 1,
              minWidth: "min(100%, 300px)",
              padding: 8,
            }}
          >
            <div style={content}>Column 1</div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              flexBasis: `${(1 / 2) * 100}%`,
              flexGrow: 1,
              flexShrink: 1,
              minWidth: "min(100%, 300px)",
              padding: 8,
            }}
          >
            <div style={content}>Column 2</div>
          </div>
        </div>
        <h2 style={heading}>
          Flex wrap minimum width less than fraction of container
        </h2>
        <div style={row}>
          <div
            style={{
              boxSizing: "border-box",
              flexBasis: `${(1 / 2) * 100}%`,
              flexGrow: 1,
              flexShrink: 1,
              minWidth: "min(100%, 200px)",
              padding: 8,
            }}
          >
            <div style={content}>Column 1</div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              flexBasis: `${(1 / 2) * 100}%`,
              flexGrow: 1,
              flexShrink: 1,
              minWidth: "min(100%, 200px)",
              padding: 8,
            }}
          >
            <div style={content}>Column 2</div>
          </div>
        </div>
        <h2 style={heading}>Flex wrap fixed width column</h2>
        <div style={row}>
          <div
            style={{
              boxSizing: "border-box",
              flexBasis: 200,
              flexGrow: 0,
              flexShrink: 0,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 8,
            }}
          >
            <div style={content}>Column 1</div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              flexBasis: "auto",
              flexGrow: 1,
              flexShrink: 1,
              minWidth: "min(100%, 200px)",
              padding: 8,
            }}
          >
            <div style={content}>Column 2</div>
          </div>
        </div>
        <h2 style={heading}>Flex wrap reverse fixed width column</h2>
        <div style={{ display: "flex", flexWrap: "wrap-reverse" }}>
          <div
            style={{
              boxSizing: "border-box",
              flexBasis: "auto",
              flexGrow: 1,
              flexShrink: 1,
              minWidth: "min(100%, 200px)",
              padding: 8,
            }}
          >
            <div style={content}>Column 2</div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              flexBasis: 200,
              flexGrow: 0,
              flexShrink: 0,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 8,
            }}
          >
            <div style={content}>Column 1</div>
          </div>
        </div>
        <h2 style={heading}>Flex wrap fixed proportian with wrap at min</h2>
        <div style={row}>
          <div
            style={{
              boxSizing: "border-box",
              flexBasis: `${(1 / 3) * 100}%`,
              flexGrow: 1,
              flexShrink: 1,
              padding: 8,
            }}
          >
            <div style={content}>Column 2</div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              flexBasis: `${(2 / 3) * 100}%`,
              flexGrow: 1,
              flexShrink: 1,
              minWidth: "min(100%, 300px)",
              padding: 8,
            }}
          >
            <div style={content}>Column 1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
