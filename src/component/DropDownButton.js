import React from "react";

const DropDownButton = ({ name }) => {
  return (
    <button
      className="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton2"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {name}
    </button>
  );
};

export default DropDownButton;
