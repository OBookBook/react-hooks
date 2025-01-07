import { RefObject, useEffect, useRef, useState } from "react";

interface ImageData {
  id: string;
  url: string;
  width: number;
  height: number;
}

const Lesson3_2 = () => {
  const [catImages, setCatImages] = useState<ImageData[]>([]);
  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=8&size=small"
        );
        const data = await response.json();
        setCatImages(data);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };
    fetchCatImages();
  }, []);

  const listRef: RefObject<HTMLUListElement> = useRef<HTMLUListElement>(null);
  const scrollToIndex = (index: number) => {
    const listNode = listRef.current;
    const imgNode = listNode?.querySelectorAll("li > img")[index];

    imgNode?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Cat1</button>
        <button onClick={() => scrollToIndex(1)}>Cat2</button>
        <button onClick={() => scrollToIndex(2)}>Cat3</button>
        <button onClick={() => scrollToIndex(3)}>Cat4</button>
        <button onClick={() => scrollToIndex(4)}>Cat5</button>
        <button onClick={() => scrollToIndex(5)}>Cat6</button>
        <button onClick={() => scrollToIndex(6)}>Cat7</button>
        <button onClick={() => scrollToIndex(7)}>Cat8</button>
      </nav>
      <div style={{ overflowX: "auto", maxWidth: "700px", margin: "auto" }}>
        <ul
          className="flex items-center justify-between"
          style={{ minWidth: `${catImages.length * 200}px` }} // 画像数に応じた幅を設定
          ref={listRef}
        >
          {catImages.length > 0 &&
            catImages.map((cat, index) => (
              <li key={cat.id} style={{ listStyle: "none" }}>
                <img
                  src={cat.url}
                  alt={`Cat ${index + 1}`}
                  width="200"
                  height="200"
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Lesson3_2;
