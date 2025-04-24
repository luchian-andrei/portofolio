import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactSection = () => {
  return (
    <div className="flex flex-col justify-center items-start">
      <p className="flex flex-row justify-center items-center mb-4">
        <Image
          src={"/footer-icon.png"}
          alt="footer-icon"
          width={55}
          height={55}
        />
        <span className="glowing-text text-2xl font-semibold">
          Luchian Andrei
        </span>
      </p>

      <div className="mb-4">
        <span className="text-[#a3a3a3] text-lg">
          For every problem there is a solution...
        </span>
        <p className="text-[#a3a3a3] text-lg font-semibold">
          Let`s find it <span className="text-blue-200">together.</span>
        </p>
      </div>

      <p className="flex flex-row justify-center items-center w-full gap-8">
        <Link
          href={"https://www.linkedin.com/in/andrei-luchian-b73a69251/"}
          target="_blank"
        >
          <Image src={"/linkedin.svg"} alt="logo" width={25} height={25} />
        </Link>
        <Link href={"https://github.com/luchian-andrei"} target="_blank">
          <Image src={"/github.svg"} alt="logo" width={25} height={25} />
        </Link>
        <Link
          href={
            "mailto:undoo.solutions@gmail.com?subject=Let`s talk business !"
          }
        >
          <Mail width={25} height={25} />
        </Link>
      </p>
    </div>
  );
};

export default ContactSection;
