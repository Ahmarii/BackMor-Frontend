
// for debugging "border-red-400 border-2"
import Link from "next/link";
import LoginLayout from "../layout";

export default function Login(){

    return(
        <LoginLayout>
            <main className=" static flex flex-col justify-center items-center min-h-screen ">

                {/* gray triangle design */}
                <div className=" absolute z-0 w-full h-full top-0">
                    <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 1440 232" fill="none">
                            <path d="M-11.5 -51L1447.5 232V0H-11.5V-51Z" fill="#D9D9D9"/>
                    </svg>
                </div>
                
                 {/* BackMor 11 Logo Back to HomePage */}
                <Link href="/" className="z-10  w-40 lg:w-60">
                
                    <svg className="size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 208" fill="none">
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
                
                <h1>Register a Account for BackMor 11</h1>

                <form className="z-10 w-2/3 md:max-w-xl py-2 flex flex-col justify-center items-center">
                    <input type="email" placeholder="Email" name="email" className="w-full h-10 pl-2 border-solid border-2 rounded-md"/><br />
                    <input type="password" placeholder="Password" name="password" className="w-full h-10 pl-2 border-solid border-2 rounded-md" /><br />
                    <input type="submit" value="Submit" className="w-full h-10 bg-black text-white border-solid border-2 rounded-md max-w-60 cursor-pointer" />
                
                </form>

                {/* google sign button */}
                <div className="z-10 w-2/3 max-w-60 flex flex-col">

                    <button className="w-full p-2 bg-gray-200 inline-flex items-center justify-center rounded-md border-solid border-2 border-gray-600" type="button">
                        <svg className="size-6 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        Sign up with Google
                    </button>
                    <button className="mt-2 w-full p-2 bg-gray-200 inline-flex items-center justify-center rounded-md border-solid border-2 border-gray-600" type="button">
                        <svg className="size-7 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                            <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
                        </svg>
                        Sign up with Facebook
                    </button>
                </div>

                {/* <div className="mt-2 cursor-pointer">
                    <GoogleButton type="light"/> 
                </div> */}
                
                <div className="z-10 flex flex-col justify-center items-center">
                    <h1>or</h1>
                    <h1>Already Sign up? <Link href="/login" className=" text-blue-400 font-semibold cursor-pointer">Login</Link></h1>

                </div>
            </main>

        </LoginLayout>
            
    );
}