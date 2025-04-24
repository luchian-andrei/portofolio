import { useEffect, useState } from "react";

interface screenSize {
  width: number;
  height: number;
}

const useScreenSize = () => {
  const [screeSize, setScreenSize] = useState<screenSize>({
    width: 0,
    height: 0,
  });

  const [device, setDevice] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const width = screeSize.width;

    if (width < 767) {
      setDevice("mobile");
    } else if (width > 767 && width < 1023) {
      setDevice("tablet");
    } else if (width > 1024) {
      setDevice("desktop");
    }
  }, [screeSize]);

  return device;
};

export default useScreenSize;
