import { useNavigate } from "react-router-dom";

import { TfiArrowLeft } from "react-icons/tfi";
import { Button } from "@/components/ui/button";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex justify-evenly items-center cursor-default">
      <Button
        className="absolute top-10 left-10 "
        onClick={() => navigate(-1)}
        variant="default"
        size="lg"
      >
        <TfiArrowLeft />
        <span className="font-semibold">Go Back</span>
      </Button>
      <h1 className="text-5xl font-bold underline">Page Not Found</h1>
      <img src="images/Programmer.svg" alt="broken" className="size-[30rem]" />
    </div>
  );
}
