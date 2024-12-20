"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function ContactUsForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { firstname: "", lastname: "", email: "", message: "" },
  });
  const { toast } = useToast();

  const inputClassname =
    "rounded-full bg-primary-200 border-none outline-none p-6 text-black ring-none";

  const onSubmit = (data) => {
    console.log({ data });
    toast({
      title: "You submitted the following values:",
      description: <pre> {JSON.stringify(data, null, 2)}</pre>,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-8 rounded-3xl bg-primary-100 p-8 lg:p-12">
        <div className="grid grid-cols-2 gap-8">
          {/* firstname */}
          <div className="col-span-2 lg:col-span-1">
            <Input
              type="text"
              placeholder="Enter first name*"
              {...register("firstname", { required: "required*" })}
              className={inputClassname}
            />
            {errors.firstname && (
              <span className="text-red-500">{errors.firstname.message}</span>
            )}
          </div>

          {/* lastname */}
          <div className="col-span-2 lg:col-span-1">
            <Input
              type="text"
              placeholder="Enter last name"
              {...register("lastname")}
              className={inputClassname}
            />
          </div>

          {/* email */}
          <div className="col-span-2">
            <Input
              type="email"
              placeholder="Enter your email*"
              {...register("email", { required: "required*" })}
              className={inputClassname}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* message */}
          <div className="col-span-2">
            <Textarea
              placeholder="Enter message*"
              {...register("message", { required: "required*" })}
              className={cn(inputClassname, "h-[150px] rounded-3xl")}
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>
        </div>

        <div className="text-center">
          <Button className="w-full rounded-full bg-secondary py-7 md:w-64">
            Send message
          </Button>
        </div>
      </div>
    </form>
  );
}
