import { Attributes, createElement, FunctionComponent, FunctionComponentElement, ReactNode } from "react";
import ReactDOMServer from "react-dom/server";


export const jsxToHtml = <P extends {}>(
  type: FunctionComponent<P>,
  props?: Attributes & P | null,
  ...children: ReactNode[]) => {
  return ReactDOMServer.renderToStaticMarkup(createElement(type, props, ...children));
};

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
