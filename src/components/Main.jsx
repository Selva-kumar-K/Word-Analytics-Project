import { useState } from "react";
import Footer from "./Footer";
import { FACEBOOK_CHARACTERS, INSTAGRAM_CHARACTERS } from "../constraints";

export default function Main() {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarning("No Script tag is allowed!");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      newText = newText.replace("@", "");
      setWarning("No '@' symbol is allowed!");
    } else {
      setWarning("");
    }

    setText(newText);
  };

  const noOfWords = text.split(" ").filter((word) => word !== "").length;
  const noOfCharacters = text.length;
  const noOfInstagramCharacters = INSTAGRAM_CHARACTERS - noOfCharacters;
  const noOfFaceBookCharacters = FACEBOOK_CHARACTERS - noOfCharacters;
  return (
    <div className="absolute top-28 left-0 right-0 mx-auto flex flex-col w-[90%] h-[500px] overflow-hidden rounded-xl lg:top-36 lg:w-[78%] lg:h-[500px]">
      <div className="lg:flex">
        <div className="lg:w-2/3 lg:h-[400px]">
          <textarea
            value={text}
            onChange={handleChange}
            name=""
            id=""
            className="w-full h-52 resize-none focus:outline-none placeholder:text-slate-400 placeholder:text-xl p-2 lg:h-full"
            placeholder="Enter your text"
          ></textarea>
          {warning ? <p className="text-red-600 text-[11px] lg:text-[14px]">{warning}</p> : ""}
        </div>
        <div className="mt-2 p-2 grid grid-cols-2 gap-8 bg-slate-100 lg:mt-0 lg:1/3 lg:grid lg:w-[400px]">
          <Stats number={noOfWords} label="WORDS" />
          <Stats number={noOfCharacters} label="CHARACTERS" />
          <Stats number={noOfInstagramCharacters} label="INSTAGRAM" color={noOfInstagramCharacters} />
          <Stats number={noOfFaceBookCharacters} label="FACEBOOK" color={noOfFaceBookCharacters}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Stats({ label, number, color }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className={`text-xl font-semibold ${color < 0 ? "text-red-500" : ""} lg:text-3xl`}>{number}</h2>
      <p className="text-slate-600 text-[13px] lg:text-[15px]">{label}</p>
    </div>
  );
}
