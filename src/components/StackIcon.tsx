import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface iconProps {
  iconName: IconProp;
  name: string;
}

function StackIcon({ iconName, name }: iconProps) {
  return (
    <div className="stack">
      <FontAwesomeIcon icon={iconName} className="stack-icon" />
      <h3>{name}</h3>
    </div>
  );
}

export default StackIcon;
