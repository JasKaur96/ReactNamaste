import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const errorInfo = useRouteError();
  console.log(errorInfo);
  return (
    <div>
      <h2>Oops!!</h2>
      <h2>Something went wrong!</h2>
      <h1>
        {errorInfo.status}: {errorInfo.statusText}
      </h1>
    </div>
  );
}
