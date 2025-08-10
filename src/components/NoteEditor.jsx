import React, { useState } from "react";



function NoteEditor({ note, onSubmit, onCancel }) {
    const [formData,setFormData] = useState({
        title:note.title || "",
        content: note.content || "",
        _id: note._id || undefined

    })
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(formData);

    }
  return (
    <div className="form-container" style={{maxWidth:'800px'}}>
      <form onSubmit={handleSubmit}>
        <h2 style={{background:'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', marginBottom:'1.5rem'}}>
          {formData._id ? 'Edit Note' : 'Create New Note'}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: '1.5rem' }}>
          <label style={{display:'flex',flexDirection:'column', textAlign:'start', gap:'8px'}} htmlFor="title">
            <span style={{color:'#e5e5e5', fontWeight:'500'}}>Title</span>
            <input 
              type="text" 
              name="title" 
              placeholder="Enter note title..."
              value={formData.title} 
              onChange={handleChange}
              required
            />
          </label>

          <label style={{display:'flex',flexDirection:'column', textAlign:'start', gap:'8px'}} htmlFor="content">
            <span style={{color:'#e5e5e5', fontWeight:'500'}}>Content</span>
            <textarea 
              name="content" 
              placeholder="Write your note content here..." 
              rows={12} 
              value={formData.content} 
              onChange={handleChange}
              style={{resize:'vertical', minHeight:'200px'}}
            />
          </label>
        </div>

        <div style={{marginTop:'2rem', display:'flex', gap:'1rem'}}>
          <button 
            type="submit" 
            style={{background:'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)', border:'1px solid #357abd', flex:'1'}}
          >
            {formData._id ? 'Update Note' : 'Create Note'}
          </button>
          <button 
            type="button"
            onClick={onCancel}
            style={{background:'linear-gradient(135deg, #6c757d 0%, #5a6268 100%)', border:'1px solid #5a6268', flex:'1'}}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteEditor;
