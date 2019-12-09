import React, { useState } from "react";

interface OwnProps {
  onSubmit: (val: string) => void;
}

export function TreeInput({ onSubmit }: OwnProps) {
  const [text, setText] = useState("");

  return (
    <input
      style={styles.input}
      value={text}
      onChange={handleTextChange}
      onKeyDown={handleSubmit}
      placeholder={"Give me a child"}
    />
  );

  function handleSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode === 13) {
      setText("");
      onSubmit(text);
    }
  }

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
}

const styles: { [key: string]: React.CSSProperties } = {
  input: {
    margin: "0 5px",
    borderRadius: 4
  }
};
