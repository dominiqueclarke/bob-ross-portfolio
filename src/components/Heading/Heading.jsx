import React from "react";
import "./Heading.css";

export default function Heading({ children, element: Element, size }) {
    return <Element className={`heading heading--${size}`}>{children}</Element>;
}

Heading.defaultProps = {
    size: "s",
};
