
import Main from "./Main";

export default function Container() {
  return (
    <div className="relative">
      <div className="flex justify-center items-center bg-gradient-to-r from-purple-800 to-blue-700 h-32 lg:h-44">
        <h2 className="text-3xl font-semibold text-slate-100 lg:text-6xl">
          WORD <span className="font-thin">ANALYTICS</span>
        </h2>
      </div>
      <Main/>
    </div>
  );
}
