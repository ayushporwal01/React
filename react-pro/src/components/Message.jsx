export default function Message() {
  return (
    function handleClick() {
        console.log("Button Clicked!")
    }
    <div>
      <button onClick={handleClick}>Click here to get message</button>
    </div>
  );
}
