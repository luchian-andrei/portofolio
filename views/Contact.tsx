import Image from "next/image";
import Link from "next/link";
import React from "react";

import EmailForm from "@/components/contact/EmailForm";

import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      className="h-fit min-h-screen w-3/4 flex flex-col items-center justify-center text-center py-10"
      id="contact"
    >
      <h2 className="text-5xl font-semibold my-20 glowing-text">Contact</h2>

      <div className="sm:w-3/4 w-full rounded-4xl flex flex-col justify-center items-center mb-20">
        <p className="flex flex-row justify-center items-center w-full gap-8 mb-10">
          <Link
            href={"https://www.linkedin.com/in/andrei-luchian-b73a69251/"}
            target="_blank"
          >
            <Image src={"/linkedin.svg"} alt="logo" width={30} height={30} />
          </Link>
          <Link href={"https://github.com/luchian-andrei"} target="_blank">
            <Image src={"/github.svg"} alt="logo" width={30} height={30} />
          </Link>
          <Link
            href={
              "mailto:undoo.solutions@gmail.com?subject=Let`s talk business !"
            }
          >
            <Mail width={30} height={30} />
          </Link>
        </p>
        <EmailForm />
      </div>

      <p className="glowing-text text-3xl font-semibold ">
        Available for both{" "}
        <span className="font-extrabold italic text-blue-200">full-time</span>{" "}
        and{" "}
        <span className="font-extrabold italic text-blue-200">part-time</span>{" "}
        roles.
      </p>
    </section>
  );
};

export default Contact;
