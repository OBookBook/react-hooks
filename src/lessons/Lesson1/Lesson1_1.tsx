import { useState } from "react";

const Lesson1_1 = () => {
  const [age, setAge] = useState<number>(0);
  console.log("rendaring");
  const handleClick = () => {
    setAge((age) => age + 1);
    setAge((age) => age + 1);
    setAge((age) => age + 1); // ここで再レンダリングされる
  };

  return (
    <div>
      <input type="text" />
      <button
        className="border p-2 rounded-md bg-red-100"
        onClick={handleClick}
      >
        Add Age
      </button>
      <p>You are {age}</p>
    </div>
  );
};

export default Lesson1_1;
