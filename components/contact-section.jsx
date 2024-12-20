import React from "react";
import Heading from "./heading";
import { H5, Muted } from "./ui/typography";
import ContactUsForm from "./forms/contact";

export default function ContactSection() {
  return (
    <section>
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
            <div>
              <H5>Chat to us</H5>
              <Muted className="text-sm">
                Our friendly team is here to help
              </Muted>
              <p className="text-sm font-medium">team@gmail.com</p>
            </div>
            <div>
              <H5>Call us</H5>
              <Muted className="text-sm">toll-free call</Muted>
              <p className="text-sm font-medium">1800 999 999</p>
            </div>
            <div>
              <H5>Visit us</H5>
              <Muted className="text-sm">Come say hello at our office</Muted>
              <p className="text-sm font-medium">
                Lorem ipsum, dolor sit amet, 121009
              </p>
            </div>
            <div>
              <H5>Hours</H5>
              <Muted className="text-sm">Manday-Friday 9am-5pm</Muted>
              <p className="text-sm font-medium">team@gmail.com</p>
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
