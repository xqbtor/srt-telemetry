import type { GeoData } from "@/types/data";

export const extractData = (input: string): GeoData => {
  const timeMatch = input.match(/(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3})/);
  const latMatch = input.match(/latitude:\s*([+-]?\d+(?:\.\d+)?)/);
  const lonMatch = input.match(/longitude:\s*([+-]?\d+(?:\.\d+)?)/);
  const relAltMatch = input.match(/rel_alt:\s*([+-]?\d+(?:\.\d+)?)/);
  const absAltMatch = input.match(/abs_alt:\s*([+-]?\d+(?:\.\d+)?)/);
  const ctMatch = input.match(/ct:\s*(\d+)/);

  return {
    time: timeMatch?.[1],
    latitude: latMatch ? parseFloat(latMatch[1]) : undefined,
    longitude: lonMatch ? parseFloat(lonMatch[1]) : undefined,
    rel_alt: relAltMatch ? parseFloat(relAltMatch[1]) : undefined,
    abs_alt: absAltMatch ? parseFloat(absAltMatch[1]) : undefined,
    ct: ctMatch ? parseInt(ctMatch[1], 10) : undefined,
  };
}
