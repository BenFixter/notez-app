import React, { createContext, useEffect, useState } from "react";
import { INote } from "../@types/note";

const NotesContext = createContext<any>({});

function NotesProvider({ children }: any) {
  const [newNoteData, setNewNoteData] = useState<INote>();
  const [newNoteVisible, setNewNoteVisible] = useState<boolean>(false);
  const [notes, setNotes] = useState<INote[]>([]);
  const [searchResults, setSearchResults] = useState<INote[]>(notes);

  const url = "https://localhost:7297";
  const headerFields = {
    "Content-type": "application/json",
  };

  useEffect(() => {
    fetch(`${url}/api/Notes`)
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    setSearchResults(notes);
  }, [notes]);

  const updateNote = () => {
    if (newNoteData?.id) {
      fetch(`${url}/api/Notes/${newNoteData.id}`, {
        method: "PUT",
        body: JSON.stringify(newNoteData),
        headers: headerFields,
      })
        .then(() => {
          let index = notes.findIndex((note) => note.id == newNoteData.id);

          notes[index] = newNoteData;
          setNotes([...notes]);
        })
        .catch((e) => console.error(e));
    } else {
      const newNote: INote = {
        content: newNoteData?.content || "",
        date: new Date().toISOString(),
        deleteMode: false,
        title: newNoteData?.title || "New Note",
      };

      fetch(`${url}/api/Notes`, {
        method: "POST",
        body: JSON.stringify(newNote),
        headers: headerFields,
      })
        .then((response) => response.json())
        .then((data) => {
          setNotes([...notes, data]);
        })
        .catch((e) => console.error(e));
    }

    setNewNoteData(undefined);
    setNewNoteVisible(false);
  };

  const deleteNote = (id: string) => {
    fetch(`${url}/api/Notes/${id}`, {
      method: "DELETE",
      headers: headerFields,
    })
      .then(() => {
        setNotes(notes.filter((note) => note.id !== id));
        setNewNoteData(undefined);
        setNewNoteVisible(false);
      })
      .catch((e) => console.error(e));
  };

  const searchNotes = (input: any) => {
    if (!input.target.value) {
      return setSearchResults(notes);
    }

    const searchResults = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(input.target.value.toLowerCase()) ||
        note.content.toLowerCase().includes(input.target.value.toLowerCase())
    );
    setSearchResults(searchResults);
  };

  const values = {
    notes,
    setNotes,
    newNoteVisible,
    setNewNoteVisible,
    newNoteData,
    setNewNoteData,
    searchResults,
    setSearchResults,
    updateNote,
    deleteNote,
    searchNotes,
  };
  return (
    <NotesContext.Provider value={values}>{children}</NotesContext.Provider>
  );
}

export { NotesProvider, NotesContext };
