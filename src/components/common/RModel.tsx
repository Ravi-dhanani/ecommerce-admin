import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
interface IRModelProps {
  children: any;
  title: string;
  modelTitle: string;
  buttonTitle: string;
}
export default function RModel(props: IRModelProps) {
  const { children, title, modelTitle, buttonTitle } = props;
  const [Open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Typography variant="h3">{title}</Typography>
        </div>
        <div>
          <Button variant="outlined" onClick={() => setOpen(true)}>
            {buttonTitle}
          </Button>
        </div>
      </div>
      <Dialog open={Open} size={"lg"} handler={setOpen}>
        <DialogHeader className="w-full p-3 border-b border-gray-300">
          <div className="w-full flex justify-between items-center">
            <div>
              <Typography variant="h4">{modelTitle}</Typography>
            </div>
            <div className="flex items-center bg-black rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </DialogHeader>
        <DialogBody>{children}</DialogBody>
      </Dialog>
    </div>
  );
}