import SrtImport from "../srt-import";

const Header = () => {
  return (
    <header className="border w-full shadow p-4 bg-card text-card-foreground flex justify-between items-center">
      <h1>SRT-TELEMETRY</h1>
      <SrtImport />
    </header>
  );
};

export default Header;
