"use client";

// for debugging "border-red-400 border-2"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login(){
    const router = useRouter();

    return(
        <div>
            <main className="flex flex-col justify-center items-center">
                <Link href="/" onClick={()=>router.refresh()}>
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="216" height="208" viewBox="0 0 216 208" fill="none">
                        <g filter="url(#filter0_b_15_212)">
                            <rect x="0.719604" y="33.1451" width="214.561" height="141.71" rx="9" fill="black"/>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M108.166 167.204C143.073 167.204 171.37 138.907 171.37 104C171.37 69.0934 143.073 40.7961 108.166 40.7961C73.2597 40.7961 44.9624 69.0934 44.9624 104C44.9624 138.907 73.2597 167.204 108.166 167.204ZM108 152.9C135.099 152.9 157.066 130.932 157.066 103.834C157.066 76.7351 135.099 54.7674 108 54.7674C80.9015 54.7674 58.9338 76.7351 58.9338 103.834C58.9338 130.932 80.9015 152.9 108 152.9Z" fill="white"/>
                        <g filter="url(#filter1_f_15_212)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M108.166 167.204C143.073 167.204 171.37 138.907 171.37 104C171.37 69.0934 143.073 40.7961 108.166 40.7961C73.2597 40.7961 44.9624 69.0934 44.9624 104C44.9624 138.907 73.2597 167.204 108.166 167.204ZM108 152.9C135.099 152.9 157.066 130.932 157.066 103.834C157.066 76.7351 135.099 54.7674 108 54.7674C80.9015 54.7674 58.9338 76.7351 58.9338 103.834C58.9338 130.932 80.9015 152.9 108 152.9Z" fill="white"/>
                        </g>
                        <path d="M101.308 82.032V128.616H94.6484V88.6915H86.657V82.032H101.308Z" fill="white"/>
                        <path d="M124.633 82.032V128.616H117.973V88.6915H109.982V82.032H124.633Z" fill="white"/>
                        <defs>
                            <filter id="filter0_b_15_212" x="-18.8804" y="13.545" width="253.761" height="180.91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="9.8"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_15_212"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_15_212" result="shape"/>
                            </filter>
                            <filter id="filter1_f_15_212" x="4.96237" y="0.796051" width="206.408" height="206.408" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_15_212"/>
                            </filter>
                        </defs>
                    </svg>
                </Link>
                
                <h1>Welcome to BackMor 11</h1>

                <form className="w-1/3 py-2 flex flex-col justify-center items-center">
                    <input type="email" placeholder="Email" name="email" className="w-full h-10 pl-2 border-solid border-2 rounded-md"/><br />
                    <input type="password" placeholder="Password" name="password" className="w-full h-10 pl-2 border-solid border-2 rounded-md" /><br />
                    <input type="submit" value="Login" className="w-full h-10 bg-black text-white border-solid border-2 rounded-md" />
                </form>

                <h1>or</h1>
                <h1><a href="" className="text-blue-400 font-semibold">Reset Password</a></h1>
                <h1>No account? <a href="" className="text-blue-400 font-semibold">Create one</a></h1>

            </main>
            
        </div>
    );
};