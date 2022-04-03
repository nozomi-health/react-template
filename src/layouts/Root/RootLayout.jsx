/* eslint-disable react/prop-types */
import React from 'react';
import { renderRoutes } from 'react-router-config';

const RootLayout = ({ route }) => {
  return <div className="min-h-screen h-full flex relative">{renderRoutes(route.routes)}</div>;
};
export default RootLayout;
