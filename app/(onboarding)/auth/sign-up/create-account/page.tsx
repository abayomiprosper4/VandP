"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaApple, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const socialOptions = [
  { icon: FaWhatsapp, iconClass: "text-[#25d366]" },
  { icon: FcGoogle, iconClass: "" },
  { icon: FaApple, iconClass: "text-white" },
];

export default function CreateAccountPage() {
  const router = useRouter();

  return (
    <main className="relative flex min-h-svh justify-start bg-[#070c14] text-white lg:flex-row">
      <section className="flex w-full flex-col px-4 py-9 sm:px-8 sm:py-12 lg:w-1/2 lg:items-center lg:justify-center lg:px-[clamp(32px,8vw,120px)] lg:py-16">
        <nav
          className="absolute left-4 right-4 top-9 hidden items-center justify-between sm:left-8 sm:right-8 sm:top-12 lg:flex"
          aria-label="Signup navigation"
        >
          <button
            type="button"
            onClick={() => router.push("/auth/sign-up/category")}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white transition-colors hover:bg-[#303c51]"
            aria-label="Back to category selection"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => router.push("/auth/sign-up/email")}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white transition-colors hover:bg-[#303c51]"
            aria-label="Continue to email signup"
          >
            <span aria-hidden="true">→</span>
          </button>
        </nav>
        <header className="lg:text-center">
          <h1 className="text-[clamp(1rem,2vw,1.35rem)] font-semibold lg:text-2xl">
            Create Account
          </h1>
          <p className="mt-1 text-xs text-white/75 lg:text-sm">
            Welcome to glamour personified!
          </p>
        </header>

        <div className="mt-12 max-w-[520px] sm:mt-16 lg:mt-20 lg:text-center">
          <h2 className="text-[clamp(1.15rem,3vw,1.5rem)] font-semibold leading-[1.12] lg:text-3xl">
            Plan, Manage and Experience
            <br />
            your business go towards
            <br />
            <span className="text-[#3297f3] italic">growth</span>
          </h2>
          <p className="mt-5 max-w-[380px] text-xs leading-[1.35] text-white/30 lg:mx-auto lg:text-sm">
            Create a profile, follow other accounts, make your own account
          </p>
        </div>

        <div className="mt-8 grid w-full gap-3 sm:mt-10 sm:max-w-[520px] lg:mt-12 lg:flex lg:max-w-none lg:justify-between lg:gap-2">
          {socialOptions.map((option) => (
            <button
              type="button"
              className="flex h-[40px] items-center justify-center gap-2 rounded-lg bg-[#36445a] px-1 text-xs transition-colors hover:bg-[#455671] lg:h-24 lg:w-24 lg:flex-col lg:gap-1 lg:rounded-full lg:px-2 lg:text-center lg:text-xs"
            >
              <span
                className={`flex h-8 w-8 items-center justify-center text-3xl lg:h-16 lg:w-16 lg:text-5xl ${option.iconClass}`}
                aria-hidden="true"
              >
                <option.icon />
              </span>
            </button>
          ))}
          <button
            type="button"
            onClick={() => router.push("/auth/sign-up/email")}
            className="flex h-[44px] items-center justify-center gap-3 rounded-lg bg-[#3297f3] px-4 text-xs text-[#06172a] transition-colors hover:bg-[#56a9f5] lg:h-24 lg:w-24 lg:flex-col lg:gap-2 lg:rounded-full lg:px-3 lg:text-center lg:text-xs"
          >
            <span className="text-2xl lg:text-5xl" aria-hidden="true">
              <FaMailBulk />
            </span>
          </button>
        </div>

        <p className="mt-5 text-center text-[.65rem] text-white/85 sm:max-w-[520px] lg:mt-7 lg:text-sm">
          Already have an account?{" "}
          <a className="text-[#3297f3] hover:underline" href="/auth/log-in">
            Sign in
          </a>
        </p>
        <p className="mt-12 max-w-[520px] text-[.65rem] leading-[1.35] text-white/35 sm:mt-16 lg:mt-20 lg:text-center lg:text-xs">
          By continuing, you agree to our Terms of Service and acknowledge that
          you have read our Privacy Policy to learn how we collect, use and
          share your data.
        </p>
      </section>
      <aside
        className="relative hidden min-h-svh bg-white lg:sticky lg:top-0 lg:block lg:h-svh lg:w-1/2 lg:self-start"
        aria-label="Salon illustration"
      >
        <Image
          src="/images/salon-ill.png"
          alt="Salon illustration"
          fill
          className="object-contain p-12 lg:p-20"
          sizes="50vw"
          priority
        />
      </aside>
    </main>
  );
}
