import React from "react";

const Theme = React.createContext();
export const provider = Theme.Provider;
export const consumer = Theme.Consumer;
export default Theme;