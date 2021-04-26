import { h, hydrate } from "preact";
import App from "../common/App";
/** @jsx h */

hydrate(<App />, document.body, document.body.firstElementChild);
