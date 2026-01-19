import { useState } from "react";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { IconCheck, IconFileUpload, IconInfoCircle } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const SrtImport = () => {
  const [open, setOpen] = useState(false);
  const [filename, setFilename] = useState<string | null>(null);

  const processSrtFile = (file: File) => {
    setFilename(file.name);
    console.log("Hallo", file.name);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processSrtFile(file);
    }
  };

  return (
    <>
      <Button size="icon" onClick={() => setOpen(true)}>
        <IconFileUpload />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Import File</DialogTitle>
            <DialogDescription>
              Select the .srt file you want to import.
            </DialogDescription>
          </DialogHeader>
          <Alert>
            <IconInfoCircle />
            <AlertTitle>Data protection</AlertTitle>
            <AlertDescription>
              The file will not be uploaded to any server and will be processed
              locally in your browser.
            </AlertDescription>
          </Alert>
          <label
            htmlFor="srt-input"
            className="h-64 border flex justify-center items-center flex-col gap-4 cursor-pointer"
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const file = e.dataTransfer.files?.[0];
              if (file) {
                processSrtFile(file);
              }
            }}
          >
            Click to select a file or drop it here.
            <Input
              id="srt-input"
              className="hidden"
              type="file"
              accept=".srt"
              onChange={handleFileSelect}
            />
          </label>
          {filename ? (
            <div className="flex items-center gap-2 text-primary">
              <IconCheck size={16} /> {filename} was imported
            </div>
          ) : null}

          <DialogFooter>
            <DialogClose>
              <Button variant="destructive">cancel</Button>
            </DialogClose>
            <Button>Process file</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SrtImport;
