import { useEffect, useState } from "react";
import { fetchBio } from "./fetchBio";

const Lesson2_2 = () => {
  const [person, setPerson] = useState<string>("naobe");
  const [bio, setBio] = useState<string | null>(null);
  const [count, SetCount] = useState<number>(0);

  useEffect(() => {
    let ignore = false;
    const startFetching = async () => {
      const resoponse = await fetchBio(person);
      if (!ignore) setBio(resoponse);
    };
    startFetching();
    SetCount(count + 1);

    return () => {
      ignore = true;
    };
  }, [person]);
  // state count 入れたら無限ループになるから注意
  // }, [person, count]);

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
      <p>{count}</p>
    </div>
  );
};

export default Lesson2_2;
