// @flow
import React from 'react';
import type { Node } from 'react';


type Props = {
  className: string,
  children: Node,
  inheritedStyles?: string,
  type?: string,
  primary?: boolean,
  secondary?: boolean,
  elementRef?: any => void,
  loader?: boolean,
  loaderPositionCenter?: boolean,
  disabled?: boolean,
  ariaLabel?: string,
  tabIndex?: string,
};

const ButtonFlow = ({
  className,
  children,
  inheritedStyles,
  type,
  primary,
  secondary,
  elementRef,
  loader,
  loaderPositionCenter,
  disabled,
  ariaLabel,
  tabIndex,
  ...others
}: Props): Node => (
  <button
    className={className}
    type={type}
    {...others}
    ref={elementRef}
    disabled={disabled || loader}
    aria-label={ariaLabel || null}
    tabIndex={tabIndex || null}
  >
    {children}
  </button>
);

ButtonFlow.defaultProps = {
  inheritedStyles: '',
  type: 'button',
  primary: false,
  secondary: false,
  elementRef: undefined,
  loader: false,
  disabled: false,
  loaderPositionCenter: false,
  ariaLabel: '',
  tabIndex: '',
};


export default ButtonFlow;
