import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useDrag } from "react-use-gesture";

interface SponsorsProps {
  darkMode: boolean;
}

const Partners = [
  {
    sponserTitle: "Incubation Partner",
    sponserImage: "https://www.aicnalanda.com/public/img/aicnewlogo.png",
  },
  {
    sponserTitle: "Workshop Partner",
    sponserImage:
      "https://www.trickyenough.com/wp-content/uploads/2022/07/cn-logo-dark-9824-1.png",
  },
  {
    sponserTitle: "Incubation Partner",
    sponserImage: "https://www.aicnalanda.com/public/img/aicnewlogo.png",
  },
  {
    sponserTitle: "Workshop Partner",
    sponserImage:
      "https://www.trickyenough.com/wp-content/uploads/2022/07/cn-logo-dark-9824-1.png",
  },
];

const sponsors = [
  {
    sponserTitle: "Sponsor",
    sponserImage:
      "https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-logo.png",
  },
];

const Sponsors: React.FC<SponsorsProps> = ({ darkMode }) => {
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  return(
    <></>
  )
};

export default Sponsors;
