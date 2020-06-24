import React from 'react';
import { Route } from 'react-router-dom';

export const RouteWithTitle = ({ title, ...props }) => {
  React.useEffect(() => {
    document.title = title ? `Inicjatywy otwarte | ${title}` : 'Inicjatywy otwarte'
  }, [title])

  return(
    <>
      <Route {...props} />
    </>
  )
}
