import Image from "next/image";
import React from "react";

const TechCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="glass-tech-card rounded-lg px-3 py-1 flex flex-row gap-2 whitespace-nowrap justify-center items-center">
      {icon && (
        <Image src={icon} alt={name} width={20} height={20} unoptimized />
      )}
      <p className="font-semibold">{name}</p>
    </div>
  );
};

export default TechCard;
