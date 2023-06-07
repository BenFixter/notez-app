import React, { useContext } from "react";
import { NotesContext } from "./NotesContext";
import moment from "moment";

const NewNote = () => {
  const { setNewNoteVisible, updateNote, newNoteData, setNewNoteData } =
    useContext(NotesContext);

  const handleContentChange = (e: any) => {
    setNewNoteData({ ...newNoteData, content: e.target.value });
  };

  const handleTitleChange = (e: any) => {
    setNewNoteData({ ...newNoteData, title: e.target.value });
  };

  return (
    <>
      <div className="flex">
        {newNoteData?.id ? (
          <p className="outline-none text-4xl font-bold pb-[2%]">
            {newNoteData.title +
              " - Created " +
              moment(newNoteData.date).format("ddd Do MMM, YYYY")}
          </p>
        ) : (
          <input
            className="bg-transparent outline-none text-4xl placeholder:text-black font-bold pb-[2%] flex-grow"
            onChange={(e) => handleTitleChange(e)}
            placeholder={"New Note"}
          ></input>
        )}
      </div>
      <div className="flex flex-col flex-grow">
        <textarea
          className="h-2/3 outline-none bg-white rounded-2xl drop-shadow-xl text-secondary-500 p-[5%] text-xl"
          placeholder={newNoteData.content ? "" : "Start typing here..."}
          onChange={(e) => handleContentChange(e)}
          value={newNoteData.content || ""}
        ></textarea>
        <div className="flex justify-end pt-[2%]">
          <button
            className="text-xl rounded-3xl w-[160px] h-[40px] m-[1%] bg-primary-500 font-bold outline-none"
            onClick={() => {
              updateNote();
            }}
          >
            Save
          </button>
          <button
            className="text-xl rounded-3xl w-[160px] h-[40px] m-[1%] bg-secondary-500 text-white font-bold outline-none"
            onClick={() => setNewNoteVisible(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default NewNote;
