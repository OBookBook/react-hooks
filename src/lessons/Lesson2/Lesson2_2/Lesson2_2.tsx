import { useEffect, useState } from "react";
import { fetchBio } from "./fetchBio";

const Lesson2_2 = () => {
  const [person, setPerson] = useState<string>("naobe");
  const [bio, setBio] = useState<string | null>(null);

  useEffect(() => {
    const startFetching = async () => {
      const resoponse = await fetchBio(person);
      setBio(resoponse);
    };
    startFetching();
  }, [person]);

  return (
    <div>
      <select onChange={(e) => setPerson(e.target.value)} value={person}>
        <option value="ShinCode">ShinCode</option>
        <option value="TestUser">TestUser</option>
        <option value="SampleUser">SampleUser</option>
      </select>

      <hr />
      {/* ??（Nullish Coalescing Operator）: これは「null または undefined だった場合 */}
      <p className="text-black">{bio ?? "Loading..."}</p>
    </div>
  );
};

export default Lesson2_2;
