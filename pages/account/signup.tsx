import Head from "next/head"
import Link from "next/link"
import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string,
  password: string,
  name: string,
  birthday: string,
  gender: string
};

type FooterLinks = {
  title: string,
  href: string
}

const footerLinks: FooterLinks[] = [

  {
    title: "Terms of Use",
    href: "terms"
  },
  {
    title: "Privacy Policy",
    href: "privacy"
  },
  {

    title: "Do Not Sell My Personal Information",
    href: "do-not-sell-info"
  },
  {
    title: "Your California Privacy Rights",
    href: "ca-privacy-rights"
  }
]


function signup() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
  };

  const [buttonDisabled, setButtonDisabled] = useState(true);
  return (
    <div>
      <Head>
        <title>Create your account</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <main className="flex flex-col justify-between items-center bg-[#f7f7f9]">
        <header className="w-full px-6 bg-white">
          <nav className="flex justify-between py-4 items-center">
            <h1 className="text-2xl font-bold uppercase">Hulu</h1>
            <Link href={'/account/login'}>
              <span className="cursor-pointer font-bold uppercase">Log in</span>
            </Link>
          </nav>
        </header>

        <section className="lg:w-2/4  mt-12 flex flex-col items-center">
          <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col items-center justify-between w-full">
            {/* header */}
            <div className="flex flex-col items-center space-y-4 mb-8">
              <h1 className="text-5xl font-bold capitalize">Create your account</h1>
              <h3 className="text-lg text-gray-400">Use your email and password to watch on your favorite devices.</h3>
            </div>

            {/* main */}
            <div className="bg-white p-12 space-y-6 shadow-md lg:w-3/4">
              <div className="input-container">
                <label htmlFor="email">
                  email
                </label>
                <input type="text" id="email" {...register("email", { required: true })} />
              </div>
              <div className="input-container">
                <label htmlFor="password">
                  password
                </label>
                <input type="password" id="password" {...register("password", { required: true })} />
              </div>
              <div className="input-container">
                <label htmlFor="name">
                  name
                </label>
                <input type="text" id="name" {...register("name", { required: true })} />
              </div>

              <div className="input-container">
                <label htmlFor="birthday">
                  birthday
                </label>
                <input type="date" id="birthday" {...register("birthday", { required: true })} />
              </div>
              <div className="input-container">
                <label htmlFor="name">
                  gender
                </label>
                <select className=" block" {...register("gender", { required: true })}>
                  <option selected>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="preferNotToSay">prefer not to say</option>
                </select>
              </div>
            </div>

            {/* footer */}
            <div className="flex flex-col items-center space-y-6 py-8 pb-10">
              <div className="text-sm text-gray-400">
                By clicking “CONTINUE” you agree to the <Link href={'/terms'}>Terms of Service</Link> and <Link href={'/privacy'}>Privacy Policy</Link>.
              </div>
              <button type="submit"  className={`${buttonDisabled ? "bg-[rgba(39,44,53,0.5)] text-[#b9bfc8]" : "bg-black text-white"}  py-3 w-3/4 rounded-md`}>
                Continue
              </button>
            </div>
          </form>

        </section>
        <footer className="flex items-center justify-center pb-12 space-x-8 text-[14px] text-gray-500">
          <div className="flex justify-between items-center space-x-8 cursor-pointer">
            {footerLinks.map((link, index) => (
              <Link href={link.href} key={index}>
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
          <div>
            <span>&copy;{new Date().getFullYear()} mutesacedric</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default signup