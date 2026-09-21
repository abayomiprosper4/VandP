"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
  {
    id: "salon-owner",
    title: "Salon Owner",
    description: "I own or run a salon",
    icon: "💇‍♀️",
  },
  {
    id: "stylist",
    title: "Barber/Hair Stylist",
    description: "I sell my hair making services",
    icon: "💇‍♀️",
  },
  { id: "customer", title: "Customer", description: "Coming soon", icon: "💇‍♀️" },
];

export default function CategoryPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("salon-owner");

  return (
    <main className="relative flex min-h-svh justify-start bg-[#070c14] text-white lg:flex-row">
      <section className="flex w-full flex-col px-5 py-8 sm:px-8 sm:py-12 lg:w-1/2 lg:justify-center lg:px-[clamp(32px,8vw,120px)] lg:py-16">
        <nav
          className="absolute left-5 top-8 hidden items-center sm:left-8 sm:top-12 lg:flex"
          aria-label="Signup navigation"
        >
          <button
            type="button"
            onClick={() => router.push("/splash")}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white transition-colors hover:bg-[#303c51]"
            aria-label="Back to welcome"
          >
            <span aria-hidden="true">←</span>
          </button>
        </nav>
        <header className="text-center">
          <p className="text-[clamp(.85rem,1.5vw,1rem)] sm:text-2xl font-semibold tracking-[.01em] text-white">
            Create Account
          </p>
          <p className="mt-1 text-xs text-white/75 italic sm:text-sm">
            Welcome to glamour personified!
          </p>
        </header>

        <div className="mt-10 sm:mt-14">
          <h1 className="text-center text-base font-semibold sm:text-lg">
            Select Category
          </h1>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
            {categories.map((category) => {
              const isSelected = selectedCategory === category.id;
              const isDisabled = category.id === "customer";

              return (
                <button
                  key={category.id}
                  type="button"
                  disabled={isDisabled}
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex min-h-[64px] items-center gap-3 rounded-lg px-4 py-1 text-left transition-colors sm:min-h-[72px] ${isSelected ? "bg-[#3c4b63]" : "bg-[#303c51]"} ${isDisabled ? "cursor-not-allowed opacity-90" : "hover:bg-[#465670]"}`}
                >
                  <span className="text-xl" aria-hidden="true">
                    {category.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">
                      {category.title}
                    </span>
                    <span className="block truncate text-[.68rem] text-white/40">
                      {category.description}
                    </span>
                  </span>
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[.65rem] ${isSelected ? "border-[#477dff] bg-[#477dff]" : "border-[#477dff] text-transparent"}`}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={() => router.push("/auth/sign-up/create-account")}
          className="mx-auto mt-10 h-12 w-full max-w-[420px] rounded-md bg-[#3297f3] text-sm font-medium text-[#06172a] transition-colors hover:bg-[#56a9f5] sm:mt-12"
        >
          Next
        </button>
        <p className="mt-8 text-center text-xs text-white/80">
          Already have an account?{" "}
          <a className="text-[#3297f3] hover:underline" href="/auth/log-in">
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
          sizes="40vw"
          priority
        />
      </aside>
    </main>
  );
}
