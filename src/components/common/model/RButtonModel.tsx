import { Button, DialogFooter } from "@material-tailwind/react";
import React from "react";

export default function RButtonModel(props: { children?: any }) {
  return <DialogFooter className="p-0">{props.children}</DialogFooter>;
}
