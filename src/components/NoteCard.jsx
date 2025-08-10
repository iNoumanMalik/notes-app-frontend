import React from 'react'

function NoteCard({note,onEdit,onDelete}) {
  return (
    <div className="note-card">
      <h3 style={{margin:'0 0 1rem 0', background:'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', fontSize:'1.2em'}}>
        {note.title || 'Untitled'}
      </h3>
      <p style={{color:'#b0b0b0', lineHeight:'1.6', marginBottom:'1rem', minHeight:'60px'}}>
        {note.content || 'No content'}
      </p>
      <div style={{borderTop:'1px solid #333', paddingTop:'1rem', marginTop:'1rem'}}>
        <small style={{color:'#888', display:'block', marginBottom:'1rem'}}>
          Last Updated: {new Date(note.updatedAt).toLocaleString()}
        </small>
        <div style={{display:'flex', gap:'10px'}}>
          <button 
            onClick={() => onEdit(note)} 
            style={{background:'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)', border:'1px solid #357abd', flex:'1'}}
          >
            Edit
          </button>
          <button 
            onClick={() => onDelete(note)} 
            style={{background:'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)', border:'1px solid #c0392b', flex:'1'}}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
