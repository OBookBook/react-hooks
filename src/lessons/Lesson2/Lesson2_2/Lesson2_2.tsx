import { useEffect, useState } from "react";
import { fetchBio } from "./fetchBio";

const Lesson2_2 = () => {
  const [person, setPerson] = useState<string>("naobe");

  useEffect(() => {
    const startFetching = async () => {
      const resoponse = await fetchBio(person);
      console.log(resoponse);
    };
    startFetching();
  }, []);

  return (
    <div>
      <select onChange={(e) => setPerson(e.target.value)} value={person}>
        <option value="ShinCode">ShinCode</option>
        <option value="TestUser">TestUser</option>
        <option value="SampleUser">SampleUser</option>
      </select>

      <hr />

      <p className="text-black">{"Loading..."}</p>
    </div>
  );
};

export default Lesson2_2;
