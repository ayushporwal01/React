export default function ConditionalComponent() {
  const display = false;
  return display ? <Welcome/> : <Code/>;
}
