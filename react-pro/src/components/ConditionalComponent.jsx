export default function ConditionalComponent() {
  const display = true;
  if (display) return <Welcome />;
  else return <Code />;
}
