"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const UploadDropzone = () => {
  return <></>;
};

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-blue-600 hover:bg-blue-500 transition-colors w-fit self-end">
            Create
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle className="hidden"></DialogTitle>
          <UploadDropzone />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UploadButton;
