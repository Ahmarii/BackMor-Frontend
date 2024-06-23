import Navbar from "./navbar.jsx";
import Map from "./map.jsx";
import RootLayout from "./layout.jsx";

export default function Page() {
    return (
        <RootLayout>
            <Navbar/>
            <Map />
        </RootLayout>
    );
};
