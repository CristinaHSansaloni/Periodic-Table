import React from "react";
import data from "../PeriodicTableJSON.json";
import "../styles/PeriodicTable.css";

const colorMap = {
    "noble gas": "#96BDC4",
    "alkaline earth metal": "#EFF2E6",
    "diatomic nonmetal": "#EAABBC",
    "alkali metal": "#B5AfBC",
    "transition metal": "#CBAACB",
    "post-transition metal": "#B6CFB6",
    "lanthanide": "#FDD4C1",
    "metalloid": "#C29BA3",
};

const PeriodicTable = () => {
    return (
        <div className="periodic-table">
            {data.elements.map((element) => (
                <div 
                    className="element"
                    key={element.name}
                    style={{
                        gridColumn: element.xpos,
                        gridRow: element.ypos,
                        backgroundColor: colorMap[element.category],
                    }}
                >
                    <strong>{element.symbol}</strong>
                    <small className="number">{element.number}</small>
                    <small className="name">{element.name}</small>
                </div>
            ))}
        </div>
    );
};

export default PeriodicTable;