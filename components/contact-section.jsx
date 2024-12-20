import React from "react";
import Heading from "./heading";
import { H5, Muted } from "./ui/typography";
import ContactUsForm from "./forms/contact";

export default function ContactSection() {
  return (
    <section className="bg-white">
      <div className="container grid grid-cols-6 gap-8 py-24">
        <div className="col-span-6 space-y-10 md:col-span-3">
          <div className="space-y-4">
            <Heading text={"Get In Touch With Us"} />
            <Muted>
              We’d love to hear from you! Whether you have questions, need
              assistance, or want to share your feedback, feel free to get in
              touch.
            </Muted>
            <Muted>
              Fill out the form below, email us, or give us a call. Our team is
              here to help and will respond promptly!
            </Muted>
          </div>

          <div className="grid grid-cols-2 gap-4 gap-y-6">
            <div className="space-y-1">
              <H5 className={"text-secondary"}>Chat to us</H5>
              <Muted className="text-xs sm:text-sm">
                Our friendly team is here to help
              </Muted>
              <p className="text-xs font-medium text-secondary sm:text-sm">
                team@gmail.com
              </p>
            </div>
            <div className="space-y-1">
              <H5 className={"text-secondary"}>Call us</H5>
              <Muted className="text-xs sm:text-sm">toll-free call</Muted>
              <p className="text-xs font-medium text-secondary sm:text-sm">
                1800 999 999
              </p>
            </div>
            <div className="space-y-1">
              <H5 className={"text-secondary"}>Visit us</H5>
              <Muted className="text-xs sm:text-sm">
                Come say hello at our office
              </Muted>
              <p className="text-xs font-medium text-secondary sm:text-sm">
                Lorem ipsum, dolor sit amet, 121009
              </p>
            </div>
            <div className="space-y-1">
              <H5 className={"text-secondary"}>Hours</H5>
              <Muted className="text-xs sm:text-sm">
                Manday-Friday 9am-5pm
              </Muted>
              <p className="text-xs font-medium text-secondary sm:text-sm">
                team@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-6 md:col-span-3">
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
}
