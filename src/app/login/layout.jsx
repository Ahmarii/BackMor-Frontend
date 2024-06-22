import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
    title: "Login",
};

export default function LoginLayout({ children }) {
    return (
        <html lang="en">
            <head>
            </head>
            <body className={inter.className+ " text-black bg-white bg-none min-h-screen"}>
                {children}
            </body>
        </html>
    );
}