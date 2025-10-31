export default function Hero() {
  return (
    <main className="w-100% h-100% flex justify-center">
      <section className="pt-20 h-full w-270 flex flex-col gap-10">
        {/* this is gonna be the straight section where everything will lie*/}
        <div className="w-full h-40 flex flex-row gap-10 justify-between">
          <div className="h-auto text-lg text-purple-200">
            <label htmlFor="">
              Top Text
              <input
                className="rounded-md p-2 mt-1 w-106 h-14 border-gray-400 block border-2 bg-purple-300 text-black
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
                className="rounded-md p-2 mt-1 w-106 h-14 border-gray-400 block border-2 bg-purple-300 text-black shadow-md"
                type="text"
                name="bottom-text"
                id="bottom-text"
              />
            </label>
          </div>
        </div>
        <div className="w-full h-30">
          <button className="h-15 w-full bg-gradient-to-r from-violet-600 to-green-400 rounded-2xl text-xl text-purple-200 shadow-md hover:shadow-2xl">
            Get the damn meme!!
          </button>
        </div>
        <div className="bg-violet-600 w-full h-80 rounded-xl">
          <img src="" alt="generated-meme" />
        </div>
      </section>
    </main>
  );
}
