import React from "react";

export default {
  title: "button",
};

export const Accessible = () => <button>Accessible button</button>;

export const Inaccessible = () => (
  <button style={{ backgroundColor: "red", color: "darkRed" }}>
    Inaccessible button
  </button>
);

Inaccessible.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/LERtPfjAehwLMJrm0tU6zz0b/Portfolio-2.0?node-id=0%3A1",
  },
};
