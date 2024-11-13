"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { Cloud, Loader2, File } from "lucide-react";

import { UploadDropzone } from "../../lib/uploadthing";

const UploadingDropzone = () => {
  return (
    <UploadDropzone
      endpoint="imageUploader"
      className="w-full h-96 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center "
      onClientUploadComplete={(res) => {
        // Do something with the response
        toast.success("File uploaded successfully 🎉", {
          description: "Redirecting to your flashcards...",
        });
      }}
      onUploadError={() => {
        toast.error("Failed to upload the file 😰", {
          description: "Please try again later.",
        });
      }}
      onUploadBegin={() => {
        // Do something once upload begins
        toast.info("Uploading file...", {
          description: "Please wait while we upload the file.",
        });
      }}
      onDrop={(acceptedFiles) => {
        // Do something with the accepted files
        console.log("Accepted files: ", acceptedFiles);
      }}
    />
  );
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
          <UploadingDropzone />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UploadButton;
