import {
  Button,
  DialogFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import RModel from "../common/RModel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export default function LandingPage() {
  const objForm = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <RModel
        buttonTitle="Landing Page"
        modelTitle="Landing Page"
        title="Home Page"
      >
        <form onSubmit={objForm.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5 mb-10">
            <div>
              <Input
                color="blue"
                label="Name"
                {...objForm.register("firstName")}
                error={
                  objForm.formState.errors.firstName?.message ? true : false
                }
              />
            </div>
            <div>
              <Input color="blue" label="Name" {...objForm.register("age")} />
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="text" color="red" className="mr-1">
              <span>Cancel</span>
            </Button>
            <Button type="submit" variant="gradient" color="green">
              <span>Confirm</span>
            </Button>
          </div>
        </form>
      </RModel>
    </div>
  );
}
