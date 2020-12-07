import React from "https://esm.sh/react";
import Data from "./data.ts";
import ReactMarkdown from "https://esm.sh/react-markdown";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from "https://esm.sh/react-router-dom";

let Examples = function () {
  let examples = [];
  for(var a in Data) {
    examples.push(
      <Route path={a}>
        <table>
          <tr>
            <td class="docs">
            <ReactMarkdown>{Data[a].body}</ReactMarkdown>
            </td>
            <td class="code leading">
              {Data[a].code}
            </td>
          </tr>
        </table>
      </Route>,
    );
  }
  return examples;
}();

function App() {
  return (
    <>
      <Router>
        <div class="example" id="hello-world">
          <h2><a href="/">Deno by Example</a>: Hello, World</h2>
          <Switch>
          {Examples}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
