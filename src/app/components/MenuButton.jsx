"use client";
// import React from 'react'
import "../style/MenuButton.css";

export default function MenuButton({ isOpen }) {
  return (
    <div>
      <input type="checkbox" id="checkbox" checked={isOpen} readOnly />
      <label htmlFor="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
      </label>
    </div>
  );
}
