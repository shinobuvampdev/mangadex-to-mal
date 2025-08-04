import React from "react";
import { Button } from "@headlessui/react";

export default function CButton({
  functionCall,
  buttonText,
}: {
  functionCall: React.MouseEventHandler<HTMLButtonElement>;
  buttonText: string;
}) {
  return (
    <Button
      onClick={functionCall}
      className="rounded w-fit bg-sky-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500"
    >
      {buttonText}
    </Button>
  );
}
