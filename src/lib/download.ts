export const download = (
  content: string,
  filename = "telemetry.kml",
  type = "application/vnd.google-earth.kml+xml",
) => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

// Usage: downloadKml(generateKml());
