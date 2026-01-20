export type GeoData = {
  time?: string;
  latitude?: number;
  longitude?: number;
  rel_alt?: number;
  abs_alt?: number;
  ct?: number;
};

export type SrtData = GeoData & {
  startTime: string;
  endTime: string;
};
