import Midbar from "@/components/midcomponent/Midbar";
import Navbar from "@/components/Navbar/Navbar";
import Thirdcomponent from "@/components/Third/Thirdcomponent";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Midbar />
      <Thirdcomponent />
    </div>
  );
};

export default page;
