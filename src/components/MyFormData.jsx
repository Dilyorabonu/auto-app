import React, { useState } from "react";
import { brands, colors } from "../constants";

function MyFormData() {
  function handleSubmit(e) {
    e.preventDefault();
    const result = new FormData(e.target);
    console.log(result.get("todoText"));
  }
  return (
    <>
      <div className="base-container py-10 flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-96">
          <h2 className="font-semibold text-2xl mb-5">
            Yangi mashina qo'shish
          </h2>
          <div className="flex flex-col gap-5">
            <input
              name="name"
              type="text"
              placeholder="Topshiriq nomini kiriting"
              className="input input-bordered input-primary w-full"
            />
            <select
              defaultValue="Mashina brandini tanlang*"
              name="brand"
              className="select select-primary select-bordered w-full"
            >
              <option disabled>Mashina brandini tanlang*</option>
              {brands.map((brand) => {
                return (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                );
              })}
            </select>
            <select
              defaultValue="Mashina rangini tanlang*"
              name="color"
              className="select select-primary select-bordered w-full"
            >
              <option disabled>Mashina rangini tanlang*</option>
              {colors.map((color) => {
                return (
                  <option key={color} value={color}>
                    {color}
                  </option>
                );
              })}
            </select>
            <button type="submit" className="btn btn-primary">
              Tasdiqlash
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MyFormData;
