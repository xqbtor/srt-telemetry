import { useRef, useState } from "react";
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
import srtParser2 from "srt-parser-2";
import { extractData } from "@/lib/extractSrtData";

const SrtImport = () => {
  const [open, setOpen] = useState(false);
  const [filename, setFilename] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement | null>(null);

  const processSrtFile = async () => {
    const file = fileInput.current?.files?.item(0);
    if (!file) return;

    const rawData = await file.text();

    const parser = new srtParser2();
    const dataArray = parser.fromSrt(rawData);

    const geoDataArray = dataArray.map((entry) => extractData(entry.text));
    console.log(geoDataArray);

    setOpen(false);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0);
    if (file) setFilename(file.name);
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
              if (file) setFilename(file.name);
            }}
          >
            Click to select a file or drop it here.
            <Input
              id="srt-input"
              className="hidden"
              type="file"
              accept=".srt"
              onChange={handleFileSelect}
              ref={fileInput}
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
            <Button disabled={!filename} onClick={processSrtFile}>
              Process file
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SrtImport;
