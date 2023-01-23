import React from "react";

interface sectionProps {
  children: React.ReactNode;
  className: string;
  id: string;
}
function Section({ children, className, id }: sectionProps) {
  return (
    <div className={className} id={id} style={{ padding: "5em 2em" }}>
      {children}
    </div>
  );
}

export default Section;
