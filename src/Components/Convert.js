import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("Convert useEffect");
  }, [language, text]);
  return <div></div>;
};

export default Convert;
