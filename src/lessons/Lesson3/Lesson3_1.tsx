import { useRef, useState } from "react";

const Lesson3_1 = () => {
  const [input, setInput] = useState("");

  const ref = useRef(0);
  console.log(ref.current);

  function handleClick() {
    ref.current = ref.current + 1;
    alert(ref.current);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>Click me!</button>
      <p>{input}</p>
    </div>
  );
};

export default Lesson3_1;
