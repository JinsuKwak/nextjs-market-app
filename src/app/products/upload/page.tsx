"use client";
import Input from "@/components/Input";
import React from "react";
import { useState } from "react";
import { Field, FieldValues, useForm } from "react-hook-form";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { SubmitHandler } from "react-hook-form";
import Heading from "@/components/Heading";
import ImageUpload from "@/components/ImageUpload";
import { categories } from "@/components/categories/Categories";
import Categoryinput from "@/components/categories/Categoryinput";

const ProductUploadPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      latitude: 33.3333,
      longitude: 126.5324,
      imageSrc: "",
      price: 1,
    },
  });

  const imageSrc = watch("imageSrc");
  const category = watch("category");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {};
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value);
  };

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <Heading title="Product Upload" subtitle="upload your product" />
          <ImageUpload onChange={(value) => setCustomValue("imageSrc", value)} value={imageSrc} />
          <Input id="title" label="Title" disabled={isLoading} register={register} errors={errors} required />
          <hr />
          <Input
            id="description"
            label="Description"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id="price"
            label="Price"
            formatPrice
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />

          <div className="grid gird-cols-1 md:grid-cols-2 gap-3 max-h-[5-vh] overflow-y-auto">
            {categories.map((item) => (
              <div key={item.label} className="col-span-1">
                <Categoryinput
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === item.path}
                  label={item.label}
                  icon={item.icon}
                  path={item.path}
                />
              </div>
            ))}
          </div>
          <hr />
          {/* {map} */}
          <Button label="Add Product" />
        </form>
      </div>
    </Container>
  );
};

export default ProductUploadPage;
