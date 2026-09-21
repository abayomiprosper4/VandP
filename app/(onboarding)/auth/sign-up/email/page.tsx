"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function EmailSignUpPage() {
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
            onClick={() => router.push("/auth/sign-up/create-account")}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white transition-colors hover:bg-[#303c51]"
            aria-label="Back to account options"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => router.push("/auth/sign-up/profile")}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white transition-colors hover:bg-[#303c51]"
            aria-label="Continue to business setup"
          >
            <span aria-hidden="true">→</span>
          </button>
        </nav>
        <header className="lg:text-center">
          <h1 className="text-[clamp(1rem,2vw,1.35rem)] font-semibold lg:text-2xl">
            Welcome to Awesomeness
          </h1>
          <p className="mt-1 text-xs text-white/75 lg:text-sm">
            Create to your account
          </p>
        </header>

        <form
          className="mt-12 w-full max-w-[520px] sm:mt-16 lg:mt-20"
          onSubmit={(event) => {
            event.preventDefault();
            router.push("/auth/sign-up/profile");
          }}
        >
          <label className="block text-xs lg:text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="mt-1 h-[44px] w-full rounded-md bg-[#36445a] px-3 text-xs text-white outline-none placeholder:text-white/25 focus:ring-2 focus:ring-[#3297f3] lg:h-14 lg:text-sm"
            id="email"
            name="email"
            type="email"
            placeholder="Enter Email"
            required
          />

          <label className="mt-4 block text-xs lg:text-sm" htmlFor="password">
            Password
          </label>
          <input
            className="mt-1 h-[44px] w-full rounded-md bg-[#36445a] px-3 text-xs text-white outline-none placeholder:text-white/25 focus:ring-2 focus:ring-[#3297f3] lg:h-14 lg:text-sm"
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            required
          />

          <label
            className="mt-9 block text-xs lg:text-sm"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="mt-1 h-[44px] w-full rounded-md bg-[#36445a] px-3 text-xs text-white outline-none placeholder:text-white/25 focus:ring-2 focus:ring-[#3297f3] lg:h-14 lg:text-sm"
            id="confirm-password"
            name="confirm-password"
            type="password"
            placeholder="Enter Password"
            required
          />

          <label className="mt-3 flex items-center justify-end gap-1 text-[.65rem] text-white/85 lg:text-xs">
            <input
              className="accent-[#3297f3]"
              type="checkbox"
              name="remember"
            />
            Remember me
          </label>

          <button
            type="submit"
            className="mx-auto mt-3 block h-[44px] w-full max-w-[280px] rounded-md bg-[#3297f3] text-xs text-[#06172a] transition-colors hover:bg-[#56a9f5] lg:mt-6 lg:h-14 lg:max-w-[340px] lg:text-sm"
          >
            Continue
          </button>
        </form>

        <p className="mt-9 text-center text-[.65rem] text-white/85 lg:mt-12 lg:text-sm">
          Or Sign up with
        </p>
        <div className="mt-3 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Continue with Google"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-[#36445a] text-lg font-bold text-[#4285f4]"
          >
            <FcGoogle aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Continue with Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-[#36445a] text-lg font-bold text-[#1877f2]"
          >
            <FaFacebookF aria-hidden="true" />
          </button>
        </div>

        <p className="mt-16 text-center text-[.65rem] text-white/85">
          Already have an account?{" "}
          <a className="text-[#3297f3] hover:underline" href="/auth/log-i..n">
            Sign in
          </a>
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
