import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import SideNav from "./SideNav";
interface IMobileViewProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MobileView(props: IMobileViewProps) {
  const router = useRouter();
  const openDrawer = () => props.setOpen(true);
  const closeDrawer = () => props.setOpen(false);

  return (
    <React.Fragment>
      <Drawer open={props.open} onClose={closeDrawer} className="p-4 w-64">
        <div className="mb-2 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="mb-6 flex items-center justify-between">
          <SideNav />
        </div>
      </Drawer>
    </React.Fragment>
  );
}
