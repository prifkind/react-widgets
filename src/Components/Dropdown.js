import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((e) => {
    if (e.value === selected.value) {
      return null;
    }

    return (
      <div
        key={e.value}
        className="item"
        onClick={() => {
          onSelectedChange(e);
        }}
      >
        {e.label}
      </div>
    );
  });

  return (
    <div>
      <div ref={ref} className="ui form">
        <div className="field">
          <div className="label">{label}</div>
          <div
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
            onClick={() => {
              setOpen(!open);
            }}
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
