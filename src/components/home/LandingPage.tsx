import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import RModel from "../common/model/RModel";

interface ILandingForm {
  key: string;
  title: string;
  homeItem: string;
}

const schema = yup
  .object({
    key: yup.string().required(),
    title: yup.string().required(),
    homeItem: yup.string().required(),
  })
  .required();

export default function LandingPage() {
  const objForm = useForm<ILandingForm>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <RModel
        buttonTitle="Landing Page"
        modelTitle="Landing Page"
        title="Home Page"
        modelSize="xl"
      >
        <form onSubmit={objForm.handleSubmit(onSubmit)}>
          <div className="  sm:grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 md:gap-5 mb-10">
            <div>
              <Input
                color="blue"
                label="Key"
                {...objForm.register("key")}
                error={objForm.formState.errors.key?.message ? true : false}
              />
              <span className="mt-[4px] flex items-center gap-1 font-normal text-red-500">
                {objForm.formState.errors?.key?.message}
              </span>
            </div>
            <div>
              <Input
                color="blue"
                label="Title"
                {...objForm.register("title")}
                error={objForm.formState.errors.title?.message ? true : false}
              />
              <span
                color="red"
                className="mt-[4px] flex items-center gap-1 font-normal text-red-500"
              >
                {objForm.formState.errors.title?.message}
              </span>
            </div>
            <div>
              <Select
                color="blue"
                label="Item"
                error={
                  objForm.formState.errors.homeItem?.message ? true : false
                }
              >
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
              <span
                color="red"
                className="mt-[4px] flex items-center gap-1 font-normal text-red-500"
              >
                {objForm.formState.errors.homeItem?.message}
              </span>
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
