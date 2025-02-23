import React from "react";

export default function page({ params }) {
  const id = params._id;
  return (
    <div>
      <h1> this is services details </h1>
      <p>Id : {id} </p>
    </div>
  );
}
