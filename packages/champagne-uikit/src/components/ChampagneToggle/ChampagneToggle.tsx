import React from "react";
import { ChampagneStack, ChampagneInput, ChampagneLabel } from "./StyledChampagneToggle";
import { ChampagneToggleProps, scales } from "./types";

const ChampagneToggle: React.FC<ChampagneToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <ChampagneStack scale={scale}>
    <ChampagneInput id={props.id || "champagne-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <ChampagneLabel scale={scale} checked={checked} htmlFor={props.id || "champagne-toggle"}>
      <div className="pancakes">
        <div className="pancake" />
        <div className="pancake" />
        <div className="pancake" />
        <div className="butter" />
      </div>
    </ChampagneLabel>
  </ChampagneStack>
);

export default ChampagneToggle;
