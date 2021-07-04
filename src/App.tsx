import "./App.css";
import Button from "./components/Button";
import Code from "./components/Code";
import Avatar from "./components/Avatar";

function App() {
  return (
    <div className="App">
      <div className="show-button">
        <Button>Default Button</Button>
        <Button appearance="primary">Primary button</Button>
        <Button appearance="subtle">Subtle button</Button>
        <Button appearance="link">Subtle button</Button>
        <Button appearance="subtle-link">Subtle link button</Button>
        <Button appearance="warning">Warning button</Button>
        <Button appearance="danger">Danger button</Button>
        <Button appearance="danger" isDisabled>
          Disable button
        </Button>
        <Button appearance="danger" isSelected>
          Selected button
        </Button>
        <Button appearance="primary" spacing="compact">
          Compact
        </Button>
        <Button appearance="primary" spacing="none">
          None
        </Button>
        <Button shouldFitContainer appearance="primary">
          Full width button
        </Button>
      </div>
      <div className="show-code">
        <p>
          To start creating a changeset, run <Code>bolt changeset</Code>. Then
          you will be prompted to select packages for release.
        </p>
      </div>
      <div>
        <div className="show-avatar">
          <Avatar />
          <Avatar size="xsmall" />
          <Avatar size="small" />
          <Avatar size="medium" />
          <Avatar size="large" />
          <Avatar size="xlarge" />
          <Avatar size="xxlarge" />
          <Avatar src={process.env.PUBLIC_URL + "/images/profile.jpg"} />
          <Avatar
            src={process.env.PUBLIC_URL + "/images/profile.jpg"}
            appearance="square"
          />
          <Avatar
            src={process.env.PUBLIC_URL + "/images/profile.jpg"}
            name="Asif Sorowar"
          />
          <Avatar
            src={process.env.PUBLIC_URL + "/images/profile.jpg"}
            size="xlarge"
            appearance="square"
            onClick={() => console.log("clicked")}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
