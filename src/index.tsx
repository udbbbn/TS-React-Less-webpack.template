import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "./components/hello";

ReactDOM.render(
  <Hello name="TypeScript" enthusiasmLevel={10} />,
  document.getElementById('app')
);