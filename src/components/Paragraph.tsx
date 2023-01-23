import React from "react";

interface paragraphProps {
  children: React.ReactNode;
}
function Paragraph({ children }: paragraphProps) {
  return <div>{children}</div>;
}

export default Paragraph;
