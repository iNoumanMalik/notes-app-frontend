import React, { useState } from "react";



function NoteEditor({ note, onSubmit, onCancel }) {
    const [formData,setFormData] = useState({
        title:note.title || "",
        content: note.content || "",
        _id: note._id || undefined

    })
    const handleChange = (e)=>{
        setFormData({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(formData);

    }
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{display:'flex',flexDirection:'column', textAlign:'start'}} htmlFor="title">
          Title
          <input type="text" name="title" style={{height:'2rem'}} value={formData.title} onChange={handleChange}/>
        </label>

        <label style={{display:'flex',flexDirection:'column', textAlign:'start'}} htmlFor="content">
          Description
          <textarea name="content" placeholder="Content..." rows={14} value={formData.content} onChange={handleChange}/>
        </label>
      </div>

    <div style={{marginTop:'1rem'}}>
         <button type="submit">Submit</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
     
    </form>
  );
}

export default NoteEditor;
