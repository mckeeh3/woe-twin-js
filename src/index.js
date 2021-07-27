/* This code was initialised by Akka Serverless tooling.
 * As long as this file exists it will not be re-generated.
 * You are free to make changes to this file.
 */

import { AkkaServerless } from "@lightbend/akkaserverless-javascript-sdk";
import generatedComponents from "../lib/generated/index.js";

const server = new AkkaServerless();

// This generatedComponentArray array contains all generated Actions, Views or Entities,
// and is kept up-to-date with any changes in your protobuf definitions.
// If you prefer, you may remove this line and manually register these components.
generatedComponents.forEach((component) => {
  server.addComponent(component);
});

server.start();