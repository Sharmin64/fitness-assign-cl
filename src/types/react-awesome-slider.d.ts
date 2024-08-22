/* eslint-disable @typescript-eslint/ban-types */
// types/react-awesome-slider.d.ts
declare module "react-awesome-slider" {
  import * as React from "react";

  interface AwesomeSliderProps {
    bullets?: boolean;
    buttonContentLeft?: React.ReactNode;
    buttonContentRight?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    customContent?: React.ReactNode;
    disabled?: boolean;
    fillParent?: boolean;
    infinite?: boolean;
    media?: Array[];
    name?: string;
    onFirstMount?: Function;
    onResetSlider?: Function;
    onTransitionEnd?: Function;
    onTransitionRequest?: Function;
    organicArrows?: boolean;
    rootElement?: React.ReactNode;
    selected?: boolean;
    startup?: boolean;
    style?: React.CSSProperties;
    transitionDelay?: number;
    transitionDuration?: number;
    transitionTimingFunction?: string;
    visibility?: boolean;
  }

  const AwesomeSlider: React.FC<AwesomeSliderProps>;
  export default AwesomeSlider;
}

declare module "react-awesome-slider/src/styled/cube-animation.scss";
