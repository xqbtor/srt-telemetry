import { useSrtDataStore } from "@/zustand/geodata-zustand";
import { XMLBuilder } from "fast-xml-parser";
import { Button } from "./ui/button";
import { download } from "@/lib/download";

const KmlGenerator = () => {
  const { srtData, filename } = useSrtDataStore();

  const generateKml = () => {
    const kmlObj = {
      kml: {
        "@_xmlns": "http://www.opengis.net/kml/2.2",
        Placemark: {
          name: `SRT Telemetry Data`,
          LineString: {
            coordinates: srtData
              .map(
                (data) =>
                  `${data.longitude},${data.latitude},${data.abs_alt ?? 0}`,
              )
              .join(" "),
          },
        },
      },
    };

    const builder = new XMLBuilder({
      attributeNamePrefix: "@_",
      ignoreAttributes: false,
      format: true,
      indentBy: "  ",
      suppressBooleanAttributes: false,
    });

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n${builder.build(kmlObj)}`;

    download(xmlContent, `${filename}.kml`);
  };

  return (
    <Button disabled={srtData.length < 1} onClick={generateKml}>
      KML
    </Button>
  );
};

export default KmlGenerator;
