import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

TodoFrom.propTypes = {
  onSubmit: PropTypes.func,
};

TodoFrom.default = {
  onSubmit: null,
};

function TodoFrom(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleValueChange(e) {
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (!onSubmit) return;

    const formValue = {
      title: value,
      status: "new",
    };
    onSubmit(formValue);

    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-text"
        type="text"
        value={value}
        onChange={handleValueChange}
      ></input>
      <button className="submit-btn" type="submit">
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
}

export default TodoFrom;
