export default function Hero() {
  return (
    <main className="w-full h-full flex justify-between flex-row mt-10 items-center gap-36">
      <section className="pt-20 h-[500px] flex-1 flex flex-col justify-center items-center bg-gradient-to-r from-violet-600 to-green-400 pl-10 pr-10 rounded-3xl hover:scale-103 gap-25 transition-transform duration-300 ml-10 hover:shadow-2xl shadow-xl">
        {/* this is gonna be the straight section where everything will lie*/}
        <div className="w-full h-40 flex flex-col justify-around items-center gap-10">
          <div className="h-auto w-full text-lg text-purple-200 font-semibold">
            <label htmlFor="">
              Top Text
              <input
                className="rounded-md font-semibold p-2 mt-1 w-full h-12 border-gray-400 block border-2 bg-purple-300 text-black
                shadow-md"
                type="text"
                name="top-text"
                id="top-text"
              />
            </label>
          </div>
          <div className="h-auto w-full text-purple-200 font-semibold text-lg">
            <label htmlFor="">
              Bottom Text
              <input
                className="rounded-md font-semibold p-2 mt-1 w-full h-12 border-gray-400 block border-2 bg-purple-300 text-black shadow-md"
                type="text"
                name="bottom-text"
                id="bottom-text"
              />
            </label>
          </div>
        </div>
        <div className="w-full font-semibold h-30">
          <button className="h-15 w-full bg-gradient-to-r from-violet-700 to-green-500 rounded-2xl text-xl text-purple-200 shadow-md hover:shadow-3xl hover:scale-102 active:scale-95 transform transition-transform duration-300">
            Get the damn meme!!
          </button>
        </div>
      </section>

      <section className="flex-1 h-[500px] flex items-center justify-center bg-gradient-to-r from-violet-600 to-green-400 p-10 rounded-3xl hover:scale-103 transition-transform duration-300 hover:shadow-2xl shadow-xl mr-10">
        <div className="w-full h-full flex flex-col  justify-center p-6 rounded-2xl">
          <span className="pb-3 text-purple-200 text-lg font-semibold">
            Your Generated Meme:
          </span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9k2kuUxms3gQHFAHMBLUTjMSSGC-Zh2Ww&s"
            alt="generated-meme"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </section>
    </main>
  );
}
