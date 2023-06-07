import React, { useContext } from "react";
import { NotesContext } from "./NotesContext";
import NoteCard from "./NoteCard";
import { INote } from "../@types/note";

const NoteList = () => {
  const { searchResults } = useContext(NotesContext);

  return (
    <div className="flex flex-wrap">
      {searchResults.map((note: INote) => (
        <NoteCard note={note} key={note.id} />
      ))}
    </div>
  );
};
export default NoteList;
