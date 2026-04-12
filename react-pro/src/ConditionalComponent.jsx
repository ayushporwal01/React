import Welcome from "./components/Welcome";
import Code from "./components/Code";

export default function ConditionalComponent() {
  const display = true;
  if (display) return <Welcome />;
  else return <Code />;
}
