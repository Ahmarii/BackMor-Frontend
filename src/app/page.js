import Image from "next/image";
import Nav from "./components/Nav";
import MapComponent from "./components/MapComponent";
import DebugTools from "./components/DebugTools";
export default function Home() {
  return (
    
    <div className="h-full">
      <Nav></Nav>
      <div className="h-full flex">
        <DebugTools/>
        <MapComponent />
      </div>
    </div>
  );
}
