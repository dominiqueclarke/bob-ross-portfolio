import React from "react";
import classNames from "classnames";

import "./BodyCopy.css";

export default function BodyCopy({
    children,
    className,
    element: Element,
    size,
}) {
    const baseClass = "body-copy";

    return (
        <Element
            className={classNames(
                baseClass,
                `${baseClass}--${size}`,
                className
            )}
        >
            {children}
        </Element>
    );
}

BodyCopy.defaultProps = {
    size: "m",
    element: "span",
};
