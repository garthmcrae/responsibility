import { Blockquote } from "./components/Blockquote";
import { Code } from "./components/Code";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Paragraph } from "./components/Paragraph";
import { Stack } from "./components/Stack";
import { Content } from "./components/Content";
import { List } from "./components/List";

export const App = () => {
  return (
    <main>
      <Container>
        <Stack>
          <Heading
            element="h1"
            style={{ fontSize: `clamp(48px, ${(48 / 400) * 100}vw, 64px)` }}
          >
            Responsibility
          </Heading>
          <Paragraph>[ ri-spon-suh-bil-i-tee ]</Paragraph>
          <List>
            <li>
              The state or fact of having a duty to deal with something or of
              having control over someone.
            </li>
            <li>Responsive layouts without media queries.</li>
            <li>
              A robust, adaptable, and efficient pattern that adjusts based on a
              defined minimum content size.
            </li>
            <li>
              Reduce the complexity of your code and improve overall
              performance.
            </li>
          </List>
          <Blockquote>
            "It happened again. I thought it was behind me, but the dreams came
            back. I was up all night. I can't eat. I can't sleep. It haunts me."
          </Blockquote>
          <Heading>Auto fill column grid layout</Heading>
          <Paragraph>
            "repeat(auto-fill, minmax(184px, 1fr))" - Creates as many columns of
            at least 184px wide as will fit the container's width, and each
            column takes up equal space.
          </Paragraph>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(184px, 1fr))",
              gap: 16,
              paddingLeft: 8,
              paddingRight: 8,
            }}
          >
            <Content>1</Content>
            <Content>2</Content>
            <Content>3</Content>
          </div>
          <Code>{`
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(184px, 1fr))",
    gap: 16,
    paddingLeft: 8,
    paddingRight: 8,
  }}
>
  <Content>1</Content>
  <Content>2</Content>
  <Content>3</Content>
</div>
        `}</Code>
          <Heading>Flex grow grid layout</Heading>
          <Paragraph>
            Sets the initial size of the flex item to one-third of the
            container's width. "min(100%, 200px)" - Ensures that the minimum
            width of each flex item is either 100% of the container's width or
            200px, whichever is smaller.
          </Paragraph>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
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
              <Content>1</Content>
            </div>
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
              <Content>2</Content>
            </div>
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
              <Content>3</Content>
            </div>
          </div>
          <Code>{`
<div style={{ display: "flex", flexWrap: "wrap" }}>
  <div
    style={{
      boxSizing: "border-box",
      flexBasis: \`${(1 / 3) * 100}%\`,
      flexGrow: 1,
      flexShrink: 1,
      minWidth: "min(100%, 200px)",
      padding: 8,
    }}
  >
    <Content>1</Content>
  </div>
  <div
    style={{
      boxSizing: "border-box",
      flexBasis: \`${(1 / 3) * 100}%\`,
      flexGrow: 1,
      flexShrink: 1,
      minWidth: "min(100%, 200px)",
      padding: 8,
    }}
  >
    <Content>2</Content>
  </div>
  <div
    style={{
      boxSizing: "border-box",
      flexBasis: \`${(1 / 3) * 100}%\`,
      flexGrow: 1,
      flexShrink: 1,
      minWidth: "min(100%, 200px)",
      padding: 8,
    }}
  >
    <Content>3</Content>
  </div>
</div>
        `}</Code>
          <Heading>Flex center grid layout</Heading>
          <Paragraph>
            A flexbox container that centers and wraps its child items, ensuring
            each item has a fixed minimum width of 200px, with no growth or
            shrinkage relative to their siblings.
          </Paragraph>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                boxSizing: "border-box",
                flexBasis: `${(1 / 3) * 100}%`,
                flexGrow: 0,
                flexShrink: 0,
                minWidth: 200,
                padding: 8,
              }}
            >
              <Content>1</Content>
            </div>
            <div
              style={{
                boxSizing: "border-box",
                flexBasis: `${(1 / 3) * 100}%`,
                flexGrow: 0,
                flexShrink: 0,
                minWidth: 200,
                padding: 8,
              }}
            >
              <Content>2</Content>
            </div>
            <div
              style={{
                boxSizing: "border-box",
                flexBasis: `${(1 / 3) * 100}%`,
                flexGrow: 0,
                flexShrink: 0,
                minWidth: 200,
                padding: 8,
              }}
            >
              <Content>3</Content>
            </div>
          </div>
          <Code>{`
<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  }}
>
  <div
    style={{
      boxSizing: "border-box",
      flexBasis: \`${(1 / 3) * 100}%\`,
      flexGrow: 0,
      flexShrink: 0,
      minWidth: 200,
      padding: 8,
    }}
  >
    <Content>1</Content>
  </div>
  <div
    style={{
      boxSizing: "border-box",
      flexBasis: \`${(1 / 3) * 100}%\`,
      flexGrow: 0,
      flexShrink: 0,
      minWidth: 200,
      padding: 8,
    }}
  >
    <Content>2</Content>
  </div>
  <div
    style={{
      boxSizing: "border-box",
      flexBasis: \`${(1 / 3) * 100}%\`,
      flexGrow: 0,
      flexShrink: 0,
      minWidth: 200,
      padding: 8,
    }}
  >
    <Content>3</Content>
  </div>
</div>
        `}</Code>
          <Heading>Two-column flex grid layout</Heading>
          <Paragraph>
            A flexbox container that wraps its child items, each with a minimum
            width of half of the container's width. This ensures that the child
            items are responsive and adjust their sizes when the container width
            is less than 100%.
          </Paragraph>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
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
              <Content>1</Content>
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
              <Content>2</Content>
            </div>
          </div>
          <Code>{`
<div style={{ display: "flex", flexWrap: "wrap" }}>
  <div
    style={{
      boxSizing: "border-box",
      flexBasis: \`${(1 / 2) * 100}%\`,
      flexGrow: 1,
      flexShrink: 1,
      minWidth: "min(100%, 300px)",
      padding: 8,
    }}
  >
    <Content>1</Content>
  </div>
  <div
    style={{
      boxSizing: "border-box",
      flexBasis: \`${(1 / 2) * 100}%\`,
      flexGrow: 1,
      flexShrink: 1,
      minWidth: "min(100%, 300px)",
      padding: 8,
    }}
  >
    <Content>2</Content>
  </div>
</div>
        `}</Code>
          <Heading>Soft two-column flex grid layout</Heading>
          <Paragraph>
            A flexbox container that wraps its child items, each with a minimum
            width of two-thirds of the container's width. This ensures that the
            child items are responsive and adjust their sizes when the container
            width is less than 66.6666666667%.
          </Paragraph>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
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
              <Content>1</Content>
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
              <Content>2</Content>
            </div>
          </div>
          <Code>
            {`
<div style={{ display: "flex", flexWrap: "wrap" }}>
  <div
    style={{
      boxSizing: "border-box",
      flexBasis: \`${(1 / 2) * 100}%\`,
      flexGrow: 1,
      flexShrink: 1,
      minWidth: "min(100%, 200px)",
      padding: 8,
    }}
  >
    <Content>1</Content>
  </div>
  <div
    style={{
      boxSizing: "border-box",
      flexBasis: \`${(1 / 2) * 100}%\`,
      flexGrow: 1,
      flexShrink: 1,
      minWidth: "min(100%, 200px)",
      padding: 8,
    }}
  >
    <Content>2</Content>
  </div>
</div>
        `}
          </Code>
          <Heading>Fixed width item flex grid layout</Heading>
          <Paragraph>
            This layout wraps its child items, with the first item centered and
            fixed at 200px width, while the second item is flexible, growing and
            shrinking with a minimum width of 200px.
          </Paragraph>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
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
              <Content>1</Content>
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
              <Content>2</Content>
            </div>
          </div>
          <Code>{`
<div style={{ display: "flex", flexWrap: "wrap" }}>
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
    <Content>1</Content>
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
    <Content>2</Content>
  </div>
</div>
          `}</Code>
          <Heading>Fixed width item flex reverse grid layout</Heading>
          <Paragraph>
            Can be used in conjunction with the above layout to allow for
            alternating fixed items left and right by utilising "wrap-reverse"
            to achieve the media component pattern.
          </Paragraph>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap-reverse",
            }}
          >
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
              <Content>1</Content>
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
              <Content>2</Content>
            </div>
          </div>
          <Code>{`
<div
  style={{
    display: "flex",
    flexWrap: "wrap-reverse",
  }}
>
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
    <Content>1</Content>
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
    <Content>2</Content>
  </div>
</div>
          `}</Code>
          <Heading>Soft proportional flex grid layout</Heading>
          <Paragraph>
            Proportional layout until one of the items reaches a specified min
            width.
          </Paragraph>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              style={{
                boxSizing: "border-box",
                flexBasis: `${(1 / 3) * 100}%`,
                flexGrow: 1,
                flexShrink: 1,
                padding: 8,
              }}
            >
              <Content>1</Content>
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
              <Content>2</Content>
            </div>
          </div>
          <Code>{`
<div style={{ display: "flex", flexWrap: "wrap" }}>
  <div
    style={{
      boxSizing: "border-box",
      flexBasis: \`${(1 / 3) * 100}%\`,
      flexGrow: 1,
      flexShrink: 1,
      padding: 8,
    }}
  >
    <Content>1</Content>
  </div>
  <div
    style={{
      boxSizing: "border-box",
      flexBasis: \`${(2 / 3) * 100}%\`,
      flexGrow: 1,
      flexShrink: 1,
      minWidth: "min(100%, 300px)",
      padding: 8,
    }}
  >
    <Content>2</Content>
  </div>
</div>
          `}</Code>
        </Stack>
      </Container>
    </main>
  );
};
