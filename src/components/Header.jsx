export default function Header() {
  return (
    <nav className="w-screen h-32 flex flex-row  justify-center items-center pl-10 gap-8">
      <span>
        <img className="h-16 w-auto" src="/troll-face.png" alt="TrollFace" />
      </span>
      <span className="text-purple-200 text-5xl font-bold">useMeme</span>
    </nav>
  );
}
