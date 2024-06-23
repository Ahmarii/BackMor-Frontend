import Image from "next/image";

export default function Map(){
    return(
        <>
            <main className="relative">
                <Image 
                    src="/images/mapTemp.png"
                    width={1440}
                    height={990}
                    alt="map"
                    className="w-full h-full"
                />

            </main>
        </>
    );
}