import React, { useEffect, useState } from "react";
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
      const res = await (await api.get("/notes")).data;
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
    await api.delete(`/notes/${noteData._id}`);
  };

  if (error) return "Something went wrong" + error;
  if (loading) return 'Loading...'

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={setEditing({})}>+ New Note</button>
      {editing && (
        <NoteEditor note={editing} onSubmit={handleSave} onCancel={() => setEditing(null)} />
      )}

      <div>
        {data.map((note) => (
          <NoteCard note={note} onEdit={handleSave} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default Notes;
