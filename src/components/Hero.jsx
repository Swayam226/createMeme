import { useState } from "react";

export default function Hero() {
  const [memeInfo, setmemeInfo] = useState({
    toptext: "",
    bottomtext: "",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9k2kuUxms3gQHFAHMBLUTjMSSGC-Zh2Ww&s",
  });

  function handleChange(event) {
    // console.log("hello");
    const { value, name } = event.currentTarget;
    console.log(value, name);
    setmemeInfo((prevmeme) => ({
      ...prevmeme,
      [name]: value,
    }));
  }

  // using the old ass controlled components here, even tho old its still useful and Its being used here because i want to update the data of the meme text with every keystroke and not submitting the form

  // in this react is the single source of truth
  return (
    <main className="w-full h-full flex justify-between flex-row mt-10 items-center gap-20 tracking-widest">
      {/* Left section — form */}
      <section className="pt-10 h-[500px] flex-1 flex flex-col justify-center items-center backdrop-blur-sm bg-white/15 backdrop-saturate-200 px-10 rounded-3xl border border-white/30 hover:scale-103 gap-5 transition-transform duration-300 ml-10 hover:shadow-2xl shadow-xl">
        <div className="text-4xl text-center w-full pb-5">
          <span className="text-black font-bold">Best you can think of</span>
        </div>
        <div className="w-full flex flex-col justify-around items-center gap-6">
          <div className="w-full text-lg text-black-200 font-semibold">
            <label>
              Top Text
              <input
                className="rounded-md font-semibold p-2 mt-1 w-full h-12 border-gray-400 border-2 bg-purple-300 text-black shadow-md hover:border-violet-400 transition-all duration-200 tracking-widest placeholder:font-extralight"
                type="text"
                name="toptext"
                id="top-text"
                onChange={handleChange}
                value={memeInfo.toptext} // part of controlled components
                placeholder="Enter top meme text"
              />
            </label>
          </div>

          <div className="w-full text-lg text-black-200 font-semibold">
            <label>
              Bottom Text
              <input
                className="rounded-md font-semibold p-2 mt-1 w-full h-12 border-gray-400 border-2 bg-purple-300 text-black shadow-md hover:border-violet-400 transition-all duration-200 tracking-widest placeholder:font-extralight"
                type="text"
                name="bottomtext"
                id="bottom-text"
                onChange={handleChange}
                value={memeInfo.bottomtext}
                placeholder="Enter bottom meme text"
              />
            </label>
          </div>
        </div>

        <div className="w-full font-semibold mt-4">
          <button className="tracking-widest font-we h-15 w-full bg-linear-to-r from-violet-700 to-green-500 rounded-2xl text-xl text-black-200 font-extralight shadow-md hover:shadow-3xl hover:scale-102 active:scale-95 transform transition-transform duration-300">
            Get the damn meme!!
          </button>
        </div>
      </section>

      <section className="flex-1 h-[500px] flex items-center justify-center backdrop-blur-sm bg-white/15 backdrop-saturate-200 border border-white/30 p-10 rounded-3xl hover:scale-103 transition-transform duration-300 hover:shadow-2xl shadow-xl mr-10">
        <div className="relative w-full h-full rounded-2xl overflow-hidden items-center justify-center flex flex-col">
          <span className="absolute top-15 left-1/2 -translate-x-1/2 text-center font-[impact,sans-serif] text-2xl uppercase text-white tracking-[1px] meme-text-shadow">
            {memeInfo.toptext}
          </span>

          <img
            src={memeInfo.imageUrl}
            alt="generated-meme"
            className="object-cover w-[85%] h-[85%] rounded-xl"
          />

          <span className="absolute bottom-15 left-1/2 -translate-x-1/2 text-center font-[impact,sans-serif] text-2xl uppercase text-white tracking-[1px] meme-text-shadow">
            {memeInfo.bottomtext}
          </span>
        </div>
      </section>
    </main>
  );
}
