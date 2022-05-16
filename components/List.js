import React from "react";
import { useRecoilValue } from "recoil";
import { dataEntry } from "../store";

export default function List({ children }) {
  const { entry } = useRecoilValue(dataEntry);
  return (
    <div>
      <div key={entry.id} className="border-2 border-black p-4 rounded-md mt-2">
        <h1 className="font-bold text-2xl">{entry.song.title_song}</h1>
        <p>{entry.song.singer}</p>
      </div>
    </div>
  );
}
