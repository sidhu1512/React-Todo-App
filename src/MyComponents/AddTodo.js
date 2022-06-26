import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc, category, date);
            setTitle("");
            setDesc("");
            setCategory("");
            setDate("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit} className="row g-1">
                <div className="mb-3 col-md-4 pe-2">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3 col-md-4 ps-1 pe-1">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control" id="category" />
                </div>
                <div className="mb-3 col-md-4 ps-1">
                    <label htmlFor="date" className="form-label">Complete By</label>
                    <input type="text" value={date} onChange={(e) => setDate(e.target.value)} className="form-control" id="date" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-primary col-md-1">Add</button>
            </form>
        </div>

    )
}
