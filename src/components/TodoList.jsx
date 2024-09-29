import React, { useState } from "react";

function TodoList() {
  function handleSubmit(e) {
    e.preventDefault();
    const result = new FormData(e.target);
    console.log(result.get("todoText"));
    
  }
  return (
    <>
      <div className="base-container flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-96">
          <div className="flex gap-5">
            <input
              name="todoText"
              type="text"
              placeholder="Topshiriq nomini kiriting"
              className="input input-bordered input-primary w-full"
            />
            <button type="submit" className="btn btn-primary">
              Tasdiqlash
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TodoList;
