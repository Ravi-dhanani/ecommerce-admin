import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import RModel from "../common/model/RModel";
import RButtonModel from "../common/model/RButtonModel";

interface ICarouselForm {
  Title: string;
  ImageUrl: string;
}
const schema = yup
  .object({
    Title: yup.string().required(),
    ImageUrl: yup.string().required(),
  })
  .required();

export default function Carousel() {
  const [postImage, setPostImage] = React.useState<any>({
    myFile: "",
  });
  const objForm = useForm<ICarouselForm>({
    resolver: yupResolver(schema),
  });

  const convertToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({
      ...postImage,
      myFile: base64,
    });
    objForm.setValue("ImageUrl", JSON.stringify(base64));
  };

  const onSubmit = (data: ICarouselForm) => {
    const carouselData = { ...data, ImageUrl: postImage.myFile };
    console.log(carouselData);
  };

  return (
    <div>
      <RModel
        buttonTitle="add Carousel"
        modelTitle="Carousel"
        title="Carousel"
        modelSize="xl"
      >
        <form onSubmit={objForm.handleSubmit(onSubmit)}>
          <div className="  sm:grid xl:grid-cols-2 lg:grid-cols-1   md:grid-cols-1 sm:grid-cols-1 sm:gap-4 md:gap-5 mb-10">
            <div>
              <Input
                color="blue"
                label="Title"
                {...objForm.register("Title")}
                error={objForm.formState.errors.Title?.message ? true : false}
                width={50}
              />
              <span
                color="red"
                className="mt-[4px] flex items-center gap-1 font-normal text-red-500"
              >
                {objForm.formState.errors.Title?.message}
              </span>
            </div>
            <div
              className={`border-2 ${
                objForm.formState.errors.ImageUrl
                  ? "border-red-500"
                  : "border-blue-500"
              }  rounded-md p-10 text-center`}
            >
              <div className=" text-sm leading-6 text-gray-600 flex justify-center">
                <label className="relative cursor-pointer rounded-md bg-white font-semibold text-black focus-within:outline-none focus-within:ring-2 ">
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileUpload}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
              <span
                color="red"
                className="mt-[4px]  justify-center items-center gap-1 font-normal text-red-500"
              >
                {objForm.formState.errors.ImageUrl?.message}
              </span>
            </div>
          </div>
          <div className="">
            <RButtonModel>
              <Button type="submit" variant="gradient" color="green">
                <span>Save</span>
              </Button>
            </RButtonModel>
          </div>
        </form>
      </RModel>
    </div>
  );
}
