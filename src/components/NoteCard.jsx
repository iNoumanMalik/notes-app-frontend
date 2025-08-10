import React from 'react'

function NoteCard({note,onEdit,onDelete}) {
  return (
    <div>
      <p>{note.title}</p>
      <p>{note.content}</p>
      <small>Last Updated: {new Date(note.updatedAt).toLocaleString()}</small>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default NoteCard
