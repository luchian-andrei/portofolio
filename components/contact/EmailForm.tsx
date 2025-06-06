"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Slide, toast } from "react-toastify";

import useScreenSize from "@/hooks/useScreenSize";

const EmailForm = () => {
  const device = useScreenSize();

  const form = useRef<HTMLFormElement>(null);

  const succesToast = () =>
    toast(
      "✉️ Your email was sent to me and I will reach out to you asap. Thank you !",
      {
        position: device === "mobile" ? "top-center" : "bottom-right",
        theme: "dark",
        closeOnClick: true,
        hideProgressBar: true,
        transition: Slide,
        autoClose: false,
        draggable: true,
        style: {
          width: device === "mobile" ? "350px" : "400px",
          height: "100px",
          textAlign: "center",
          padding: "10px",
          fontSize: "18px",
          background: "#0a0a0a",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "10px",
          marginBottom: "20px",
          marginTop: device === "mobile" ? "30px" : "0px",
          marginRight: device === "mobile" ? "0px" : "20px",
        },
      }
    );

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7y5s60s", "template_2f7mjg8", form.current!, {
        publicKey: "NIqHkoP712jgtwnhb",
      })
      .then(
        () => {
          succesToast();
        },
        (error) => console.log("FAILED ...", error.text)
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="lg:w-3/4 w-full gap-4 flex flex-col justify-start items-center p-6 bg-[#ffffff0d] rounded-xl mb-32"
    >
      <input
        type="email"
        placeholder="Your email address"
        className="w-full border-[1px] border-[#ffffff0d] p-4 rounded-lg focus:outline-[#ffffff0d] focus:outline-4 focus:border-[#ffffff0d] bg-[#02020225] font-semibold placeholder:font-normal placeholder:text-base text-lg"
        name="email"
        required
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full border-[1px] border-[#ffffff0d] px-4 py-2 rounded-lg focus:outline-[#ffffff0d] focus:outline-4 focus:border-[#ffffff0d] bg-[#02020225] font-semibold placeholder:font-normal"
        name="subject"
      />
      <textarea
        placeholder="Your message"
        className="w-full border-[1px] border-[#ffffff0d] p-4 rounded-lg focus:outline-[#ffffff0d] focus:outline-4 focus:border-[#ffffff0d] bg-[#02020225] mb-10"
        name="message"
        rows={4}
        required
      />
      <button
        type="submit"
        className="glass-card px-4 py-2 font-semibold cursor-pointer hover:-translate-y-1 transition-all duration-300"
      >
        Send message
      </button>
    </form>
  );
};

export default EmailForm;
