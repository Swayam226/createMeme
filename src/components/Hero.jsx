export default function Hero() {
  return (
    <main className="w-full h-100% flex justify-center flex-row items-center gap-36">
      <section className="pt-20 h-full w-270 flex flex-col gap-10">
        {/* this is gonna be the straight section where everything will lie*/}
        <div className="w-full h-40 flex flex-row gap-10 justify-between pl-10">
          <div className="h-auto text-lg text-purple-200">
            <label htmlFor="">
              Top Text
              <input
                className="rounded-md p-2 mt-1 w-86 h-14 border-gray-400 block border-2 bg-purple-300 text-black
                shadow-md"
                type="text"
                name="top-text"
                id="top-text"
              />
            </label>
          </div>
          <div className="h-auto text-purple-200 text-lg">
            <label htmlFor="">
              Bottom Text
              <input
                className="rounded-md p-2 mt-1 w-86 h-14 border-gray-400 block border-2 bg-purple-300 text-black shadow-md"
                type="text"
                name="bottom-text"
                id="bottom-text"
              />
            </label>
          </div>
        </div>
        <div className="w-full h-30 pl-10">
          <button className="h-15 w-full bg-gradient-to-r from-violet-600 to-green-400 rounded-2xl text-xl text-purple-200 shadow-md hover:shadow-xl hover:scale-102 active:scale-75 transform transition-transform duration-300">
            Get the damn meme!!
          </button>
        </div>
      </section>
      <section className="pt-20 h-100 w-270 pr-10">
        <div className="w-full h-full rounded-2xl pb-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9k2kuUxms3gQHFAHMBLUTjMSSGC-Zh2Ww&s"
            alt="generated-meme"
            className="w-80% h-full"
          />
        </div>
      </section>
    </main>
  );
}
