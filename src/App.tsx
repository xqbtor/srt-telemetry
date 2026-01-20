import KmlGenerator from "./components/kml-generator";
import Header from "./components/layout/header";
import Main from "./components/layout/main";
import { useSrtDataStore } from "./zustand/geodata-zustand";

export function App() {
  const { srtData } = useSrtDataStore();
  return (
    <div className="bg-background h-svh p-4 overflow-hidden mx-auto max-w-480 flex flex-col gap-4">
      <Header />
      <Main>
        <div className="border bg-card p-4 h-full flex flex-col gap-4">
          {srtData.length < 1 ? (
            <p>No data imported yet.</p>
          ) : (
            <>
              <h2>Extracted Data</h2>
              <pre className="whitespace-pre-wrap h-full overflow-y-auto">
                {JSON.stringify(srtData, null, 2)}
              </pre>
              <KmlGenerator />
            </>
          )}
        </div>
      </Main>
    </div>
  );
}

export default App;
