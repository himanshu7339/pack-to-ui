import * as React from "react";
import { ReactNode } from "react";
type PropsType = {
  children: ReactNode;
};

const Button = ({ children }: PropsType) => {
  return (
    <button
      style={{
        padding: "10px 15px",
        fontWeight: "bold",
        textAlign: "center",
        display: "inline-block",
        cursor: "pointer",
        border: "2px solid #3498db",
        borderRadius: "5px",
        background: "#3498b",
        color: "#fff",
        transition:
          "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
      }}
    >
      {children}
    </button>
  );
};

export {Button}