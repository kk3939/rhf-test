import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
  example: string;
  exampleRequired: string;
};

export const Container: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#e6e6fa",
          padding: "70px 100px 70px 100px",
          borderRadius: "20px",
        }}
      >
        <h3 style={{ marginBottom: "20px", marginTop: "0" }}>sample form</h3>
        <input
          defaultValue="test"
          {...register("example")}
          style={{ margin: "10px 0px 10px 0px" }}
        />
        <input
          {...register("exampleRequired", { required: true })}
          style={{ margin: "10px 0px 10px 0px" }}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" style={{ margin: "10px 0px 10px 0px" }} />
      </form>
    </div>
  );
};
