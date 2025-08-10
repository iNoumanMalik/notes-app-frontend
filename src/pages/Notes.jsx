import React, { useEffect, useState } from "react";
import NoteEditor from "../components/NoteEditor";
import NoteCard from "../components/NoteCard";
import api from "../api";

function Notes() {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      console.log(
        "Current token in localStorage:",
        localStorage.getItem("token")
      );
      console.log("API headers:", api.defaults.headers.common);
      const res = (await api.get("/notes")).data;
      setData(res);
      console.log(res);
    } catch (e) {
      setLoading(false);
      setError("Something went wrong " + e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (noteData) => {
    if (noteData._id) {
      await api.put(`/notes/${noteData._id}`, noteData);
    } else {
      await api.post("/notes", noteData);
    }

    setEditing(null);
    fetchNotes();
  };

  const handleDelete = async (noteData) => {
    try{
      await api.delete(`/notes/${noteData._id}`); 
      fetchNotes();
    }catch(e){
      console.log('Failed to delete note:',error)
      setError('Failed to delete note: ' + error.message);
      
    }
  };


  if (error) return "Something went wrong" + error;
  if (loading) return "Loading...";

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <h1>My Notes</h1>
        {!editing && (
          <button
            onClick={() => setEditing({})}
            style={{
              background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
              border: "1px solid #357abd",
            }}
          >
            + New Note
          </button>
        )}
      </div>

      {editing && (
        <div style={{ marginBottom: "2rem" }}>
          <NoteEditor
            note={editing}
            onSubmit={handleSave}
            onCancel={() => setEditing(null)}
          />
        </div>
      )}

      <div className="notes-grid">
        {data.map((note) => (
          <NoteCard
            key={note._id}
            note={note}
            onEdit={setEditing}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Notes;
