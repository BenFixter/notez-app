import React, { useContext } from "react";
import { NotesContext } from "./NotesContext";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const { setNewNoteVisible, setNewNoteData, searchNotes } =
    useContext(NotesContext);

  return (
    <div className="flex w-full justify-between items-center pb-[2.5%]">
      <button
        className="text-xl rounded-3xl w-[209px] h-[40px] bg-white font-bold hover:bg-black hover:text-primary-500 outline-none"
        onClick={() => {
          setNewNoteData("");
          setNewNoteVisible(true);
        }}
      >
        New Note
      </button>

      <h1 className="text-5xl font-bold ">notez</h1>

      <form className="w-[209px]">
        <div className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            className="w-full h-[40px] pl-10 pr-4 rounded-3xl outline-none"
            placeholder="Search"
            type="text"
            onChange={(e) => searchNotes(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default Nav;
