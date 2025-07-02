import React, { useEffect, useRef } from "react";

export function DeviceEvent(props) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current && props.onSize) {
      const { width, height } = ref.current.getBoundingClientRect();
      props.onSize({ width, height });
    }
  });

  return (
    <li ref={ref} className={`event ${props.slim ? "event_slim" : ""}`}>
      <button className="event__button">
        <span
          className={`event__icon event__icon_${props.icon}`}
          role="img"
          aria-label={props.iconLabel}
        ></span>
        <h4 className="event__title">{props.title}</h4>
        {props.subtitle && (
          <span className="event__subtitle">{props.subtitle}</span>
        )}
      </button>
    </li>
  );
}
