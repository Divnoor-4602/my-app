"use client";
/* eslint-disable */

import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { UploadDropzone } from "../../lib/uploadthing";
import { toast } from "sonner";

import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import {
  extractKeywordsFromPrompt,
  generateVideo,
} from "@/lib/actions/ai.action";
import { createPost } from "@/lib/actions/post.action";
import { usePathname } from "next/navigation";

const UploadingDropzone = ({
  onUploadedImage,
  image,
}: {
  onUploadedImage: (image: any) => void;
  image?: any;
}) => {
  return (
    <>
      {image ? (
        <>
          <Image
            src={image.url}
            alt={image.name}
            width={400}
            height={400}
            className="mx-auto object-contain rounded-lg"
          />
        </>
      ) : (
        <>
          <UploadDropzone
            endpoint="imageUploader"
            className="w-full h-96 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center "
            onClientUploadComplete={(res) => {
              toast.success("File uploaded successfully 🎉", {
                description: "Give us a moment!",
              });

              const [fileResponse] = res;

              const { serverData: data } = fileResponse;

              const { createdFile: file } = data;

              console.log("File created: ", file);

              onUploadedImage(file);

              // todo: get a text prompt from the user and use it in conjunction with the image to create keywords for finetuning runway ml model
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
            onUploadBegin={() => {
              // Do something once upload begins
              toast.info("Uploading file...", {
                description: "Please wait while we upload the file.",
              });
            }}
            onChange={(acceptedFiles) => {
              // Do something with the accepted files
              console.log("Accepted files: ", acceptedFiles);
            }}
          />
        </>
      )}
    </>
  );
  // show image here if one is uploaded
};

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [uploadedImage, setUploadedImage] = useState<any>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const pathname = usePathname();

  const handleSubmit = async () => {
    console.log(prompt, uploadedImage);

    if (!uploadedImage || !prompt) {
      toast.error("Please upload an image and enter a prompt!");
      return;
    }

    setSubmitting(true);

    const text = await extractKeywordsFromPrompt(prompt);

    toast.info("Creating post...", {
      description: "Give us a moment!",
    });

    const videoObject = await generateVideo(text, uploadedImage.url);

    // now create a video object in the database
    await createPost({
      user: uploadedImage.user,
      prompt: prompt,
      thumbnail: uploadedImage.url,
      key: videoObject.output ? videoObject.output[0] : "",
      file: uploadedImage._id,
      pathname,
    });
    setSubmitting(false);

    setPrompt("");
    setUploadedImage(null);
    setIsOpen(false);
  };

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
          <UploadingDropzone
            onUploadedImage={setUploadedImage}
            image={uploadedImage}
          />
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="prompt">Enter your prompt here</Label>
            <Textarea
              id="prompt"
              placeholder="Describe the experience here"
              className="w-full"
              value={prompt}
              rows={10}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <Button
            className=" bg-blue-600 hover:bg-blue-500 transition-colors w-full"
            onClick={handleSubmit}
          >
            {submitting ? "Creating" : "Create"}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UploadButton;
