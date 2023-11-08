<<<<<<< HEAD
"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#fefefe] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://cdn.shopify.com/s/files/1/0120/0692/products/mockup-cf3fd80f_5000x.jpg?v=1601318189"
        width={300}
        height={300}
        alt="logo"
      />
      <button onClick={() => signIn("google")} className="text-darkgray font-bold text-3xl animate-pulse ">
        Sign in to use chadGPT
      </button>
      <br/>
      <p className="text-darkgrey font bold text 1xl justify-center">Only for Chads</p>
    </div>
  );
}

export default Login;
=======
"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#fefefe] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://cdn.shopify.com/s/files/1/0120/0692/products/mockup-cf3fd80f_5000x.jpg?v=1601318189"
        width={300}
        height={300}
        alt="logo"
      />
      <button onClick={() => signIn("google")} className="text-darkgray font-bold text-3xl animate-pulse ">
        Sign in to use ChadGPT
      </button>
      <br/>
      <p className="text-darkgrey font bold text 1xl justify-center">Only for Chads</p>
    </div>
  );
}

export default Login;
>>>>>>> 421c2282719b9b0f77f834eba5707ad5c046a92e
