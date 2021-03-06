import React, { useState } from "react";
import ChampagneToggle from "./ChampagneToggle";

export default {
  title: "Components/ChampagneToggle",
  component: ChampagneToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <ChampagneToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <ChampagneToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <ChampagneToggle
          checked={isChecked}
          defaultColor="textDisabled"
          checkedColor="textDisabled"
          onChange={toggle}
          scale="md"
          startIcon={(isActive = false) => (
            <IconComponent
              iconName="Sun"
              color={isActive ? "warning" : "backgroundAlt"}
            />
          )}
          endIcon={(isActive = false) => (
            <IconComponent
              iconName="Moon"
              color={isActive ? "secondary" : "backgroundAlt"}
            />
          )}
        />
      </div>
      <div>
        <ChampagneToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
