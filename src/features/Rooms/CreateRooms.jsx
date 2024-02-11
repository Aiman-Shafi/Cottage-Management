import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { createRoom } from "../../api/apiRooms";

export default function CreateRooms() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: createRoom,
    onSuccess: () => {
      toast.success("Room successfully Created");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
      reset();
    },
    onError: (error, variables, context) => {
      toast.error(error.message);
      console.log(error, variables, context);
    },
    mutationKey: ["createRoom"],
  });

  function onSubmit(data) {
    // console.log(data);
    mutate({ ...data });
    console.log(data);
  }

  //   function onError(errors) {
  //     console.log(errors);
  //   }

  return (
    <>
      <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        {/* Room name  */}
        <div className="md:flex md:items-center mb-6">
          {/* Room Name */}
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Room Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-slate-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              id="inline-full-name"
              type="text"
              defaultValue="001"
              {...register("name", {
                required: "This field is required",
              })}
            />
          </div>
        </div>
        {/* Max Capacity */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Max Capacity
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-slate-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              id="capacity"
              type="number"
              defaultValue="0"
              {...register("maxCapacity", {
                required: "This field is required",
                min: {
                  value: 1,
                  message: "Capacity should be at least 1",
                },
              })}
            />
          </div>
        </div>
        {/* Price */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Price
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-slate-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              id="price"
              type="number"
              defaultValue="0"
              {...register("regularPrice", {
                required: "This field is required",
                min: {
                  value: 1,
                  message: "Capacity should be at least 1",
                },
              })}
            />
          </div>
        </div>
        {/* Discount */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Discount
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-slate-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              id="discount"
              type="number"
              defaultValue="0"
              {...register("discount", {})}
            />
          </div>
        </div>
        {/* Descritipn */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Descritipn
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className="bg-slate-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              id="description"
              type="text"
              {...register("description", {})}
            />
          </div>
        </div>
        {/* Image */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Image
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-slate-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              id="img"
              type="file"
              accept="image/*"
              {...register("image", {})}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button type="reset">Cancel</button>
            <button
              className="shadow bg-primary hover:bg-primary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Add New Cabin
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
