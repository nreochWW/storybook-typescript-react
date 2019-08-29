import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";

storiesOf("Button", module)
  .add("with background", () => (
    <Button bg="blue" textColor="white">
      Hello World
    </Button>
  ))
  .add("with background 2", () => (
    <Button bg="palegoldenrod" textColor="black">
      Hello World
    </Button>
  ));
