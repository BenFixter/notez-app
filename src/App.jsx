import { useContext } from "react";
import Nav from "./components/Nav";
import NewNote from "./components/NewNote";
import NoteList from "./components/NoteList";
import { NotesContext } from "./components/NotesContext";

function App() {
  const { newNoteVisible } = useContext(NotesContext);

  return (
    <div className="bg-white h-screen font-inter">
      <div className="bg-primary-500 h-[33%]">
        <div className="flex flex-col h-screen p-[2.5%] ">
          <Nav />
          <div className="flex h-screen overflow-auto no-scrollbar">
            <div className="flex flex-col basis-full ">
              {newNoteVisible ? (
                <p className="text-4xl font-bold pb-[2%]">Saved Notes</p>
              ) : <div className="pt-[2%]"/>}
              <NoteList />
            </div>
            {newNoteVisible ? (
              <div className="flex flex-col basis-full ">
                <NewNote />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
