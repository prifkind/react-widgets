import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const renderedOptions = options.map((e) => {
    if (e.value === selected.value) {
      return null;
    }

    return (
      <div key={e.value} className="item" onClick={() => onSelectedChange(e)}>
        {e.label}
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <div className="label">Select a person:</div>
          <div
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
