import React from "react";

export default function HeroSkeleton() {
  return (
    <section class="flex animate-pulse items-center justify-center pt-10">
      <div class="container min-h-screen w-full space-y-16">
        <div>
          <h1 class="mx-auto h-8 w-1/2 rounded bg-gray-200"></h1>
        </div>
        <div>
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 md:col-span-6 lg:col-span-4">
              <div class="h-48 w-full rounded-md bg-gray-200"></div>
            </div>

            <div class="order-first col-span-full grid h-auto min-h-44 grid-cols-12 gap-6 md:col-span-12 lg:order-none lg:col-span-4">
              <div class="col-span-12 flex w-full items-center justify-center rounded-3xl bg-primary-500 md:col-span-4 lg:col-span-12">
                <div class="h-10 w-3/4 rounded-md bg-gray-200"></div>
              </div>

              <div class="col-span-12 w-full rounded-3xl bg-primary-500 md:col-span-8 lg:col-span-12">
                <div class="h-10 w-3/4 rounded-md bg-gray-200"></div>
              </div>
            </div>

            <div class="col-span-12 md:col-span-6 lg:col-span-4">
              <div class="h-48 w-full rounded-md bg-gray-200"></div>
            </div>
          </div>
        </div>

        <div class="h-8 w-full rounded bg-gray-200"></div>
      </div>
    </section>
  );
}
