import React from "https://esm.sh/react";
import exampleData from "./data.ts";
import ReactMarkdown from "https://esm.sh/react-markdown";
import Prism from "https://esm.sh/prismjs";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from "https://esm.sh/react-router-dom";

let Examples = function () {
  let examples = [];
  for (var example in exampleData) {
    examples.push(
      <Route path={example}>
        <div className="example-grid">
          <div className="example-doc">
            <ReactMarkdown>
              {exampleData[example].body}
            </ReactMarkdown>
          </div>
          <div className="example-doc">
            <pre className="line-numbers">
              <code className="language-ts">
                {exampleData[example].code}
              </code>
            </pre>
          </div>
        </div>
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
          <Switch>
            <Route exact path="/">
              <div className="container">
                <main className="main">
                  <h2 className="title">
                    <p>
                      <a href="https://deno.land/">Deno</a> by example
                    </p>
                  </h2>
                </main>
              </div>
            </Route>
            {Examples}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
