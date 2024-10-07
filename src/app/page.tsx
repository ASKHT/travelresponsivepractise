import Midbar from "@/components/midcomponent/Midbar";
import Navbar from "@/components/Navbar/Navbar";
import Thirdcomponent from "@/components/Third/Thirdcomponent";
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Midbar />
      <Thirdcomponent />
    </div>
  );
};

export default page;
