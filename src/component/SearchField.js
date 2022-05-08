import React from "react";

const SearchField = ({ submitHandler }) => {
  return (
    <div className="input-group mb-3 justify-content-center g-2">
      <input
        type="text"
        className="form-control justify-content-center"
        placeholder="Rocket Name"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        onChange={(e) => submitHandler(e)}
      />
    </div>
  );
};

export default SearchField;
