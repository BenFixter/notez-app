import React, { useContext, useState } from "react";
import { FaTrashAlt, FaExpandAlt } from "react-icons/fa";
import { NotesContext } from "./NotesContext";
import { INote } from "../@types/note";
import moment from "moment";
interface Props {
  note: INote;
}
const NoteCard = ({ note }: Props) => {
  const { setNewNoteVisible, deleteNote, setNewNoteData } =
    useContext(NotesContext);
  const [deleteMode, setDeleteMode] = useState(false);

  return deleteMode ? (
    <div
      key={note.id}
      className="flex bg-primary-500 rounded-2xl w-[209px] h-[209px] mr-[2%] mb-[2%] drop-shadow-xl text-center"
    >
      <div className="flex flex-col p-[5%] h-full w-full items-center">
        <p className="text-2xl font-bold">
          Are you sure you want to delete this note?
        </p>
        <button
          className="text-xs rounded-3xl w-[113px] h-[26px] bg-white font-bold mt-[10%] hover:bg-black hover:text-primary-500"
          onClick={() => {
            deleteNote(note.id);
            setDeleteMode(false);
          }}
        >
          Yes
        </button>
        <button
          className="text-xs rounded-3xl w-[113px] h-[26px] mt-[5%] bg-gray-200 font-bold ]"
          onClick={() => setDeleteMode(false)}
        >
          No
        </button>
      </div>
    </div>
  ) : (
    <div
      key={note.id}
      className="flex bg-white rounded-2xl w-[209px] h-[209px] mr-[2%] mb-[2%] drop-shadow-xl"
    >
      <div className="flex flex-col px-[10%] pt-[10%] pb-[5%] h-full w-full">
        <div className="flex justify-end">
          <button
            className="text-secondary-500 pr-[2%] outline-none hover:text-primary-500"
            onClick={() => {
              setNewNoteVisible(true);
              setNewNoteData(note);
            }}
          >
            <FaExpandAlt />
          </button>
          <button
            className="text-secondary-500 outline-none hover:text-primary-500"
            onClick={() => setDeleteMode(true)}
          >
            <FaTrashAlt />
          </button>
        </div>
        <div className="flex-grow truncate">
          <p className="text-2xl font-bold pb-[5%] pt-[15%] truncate">
            {note.title}
          </p>
          <p className="text-secondary-500 text-lg whitespace-pre truncate">
            {note.content}
          </p>
        </div>
        <div>
          <p className="text-secondary-500 text-xs pt-[15%]">
            {moment(note.date).format("ddd Do MMM YYYY,")}
          </p>
        </div>
      </div>
    </div>
  );
};
export default NoteCard;
