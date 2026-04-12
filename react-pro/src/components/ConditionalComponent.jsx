export default function ConditionalComponent() {
  let message;
  const display = true;

  if (display) {
    message = <h1>This is message 1</h1>;
  } else {
    message = <h1>This is message 2</h1>;
  }

  return message;
}
