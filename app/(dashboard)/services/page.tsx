"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Grid2X2,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  UsersRound,
} from "lucide-react";

const services = [
  {
    name: "Pedic Cure",
    category: "Nail Care",
    duration: "30 mins",
    price: "$30",
    bookings: "30 booked",
    active: true,
  },
  {
    name: "Veggie Bath",
    category: "Body Care",
    duration: "45 mins",
    price: "$45",
    bookings: "22 booked",
    active: true,
  },
  {
    name: "Dread Dye",
    category: "Hair Coloring",
    duration: "1 hr 30 mins",
    price: "$80",
    bookings: "15 booked",
    active: false,
  },
  {
    name: "Face Make Up",
    category: "Makeup",
    duration: "1 hr",
    price: "$55",
    bookings: "9 types",
    active: false,
  },
  {
    name: "Groomy Day",
    category: "Hair Styling",
    duration: "1 hr",
    price: "$60",
    bookings: "130 Services",
    active: true,
  },
  {
    name: "Steam Shower",
    category: "Body Care",
    duration: "45 mins",
    price: "$40",
    bookings: "5 booked",
    active: true,
  },
  {
    name: "Haircut",
    category: "Hair Styling",
    duration: "30 mins",
    price: "$25",
    bookings: "44 types",
    active: false,
  },
  {
    name: "Aloe Wash",
    category: "Hair Care",
    duration: "30 mins",
    price: "$35",
    bookings: "25 booked",
    active: true,
  },
  {
    name: "Mint Drying",
    category: "Hair Styling",
    duration: "1 hr 30 mins",
    price: "$50",
    bookings: "22 booked",
    active: false,
  },
  {
    name: "Skincare",
    category: "Skin Care",
    duration: "1 hr",
    price: "$70",
    bookings: "13 types",
    active: false,
  },
  {
    name: "Feet Lift",
    category: "Nail Care",
    duration: "30 mins",
    price: "$30",
    bookings: "30 booked",
    active: false,
  },
  {
    name: "Herbal Cure",
    category: "Body Care",
    duration: "30 mins",
    price: "$40",
    bookings: "20 booked",
    active: true,
  },
];

const tabs = ["All", "Service", "Category", "Package"];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const visibleServices = services.filter((service) => {
    const matchesSearch = `${service.name} ${service.category}`
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Category" && service.category) ||
      (activeTab === "Service" && service.name) ||
      activeTab === "Package";
    return matchesSearch && matchesTab;
  });

  return (
    <main className="min-h-svh bg-[#070c14] text-white">
      <div className="mx-auto min-h-svh w-full max-w-7xl px-3 pb-24 pt-4 sm:px-7 sm:pt-7 lg:px-10 lg:pb-10 lg:pt-10">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link
              href="/overview"
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/65 transition hover:bg-white/10 hover:text-white"
              aria-label="Back to overview"
            >
              <ArrowLeft size={17} />
            </Link>
            <div>
              <p className="text-[.55rem] text-white/45 sm:text-xs">
                Salon setup
              </p>
              <h1 className="text-sm font-semibold tracking-tight sm:text-xl">
                Service Management
              </h1>
            </div>
          </div>
          <Link
            href="/services/new"
            className="flex items-center gap-1.5 text-[.58rem] text-[#3297f3] transition hover:text-white sm:text-xs"
          >
            <Plus size={15} />
            <span>Add new</span>
          </Link>
        </header>

        <section
          className="dashboard-enter mt-5 grid grid-cols-3 gap-1.5 sm:mt-8 sm:gap-3 lg:max-w-2xl"
          aria-label="Service summary"
        >
          <SummaryCard value="12" label="Active" />
          <SummaryCard value="14" label="Total" />
          <SummaryCard value="$49" label="Avg Price" />
        </section>

        <section className="mt-6 sm:mt-10">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xs font-medium sm:text-base">Services</h2>
            <button
              type="button"
              className="text-white/40 transition hover:text-white"
              aria-label="More service options"
            >
              <MoreHorizontal size={17} />
            </button>
          </div>
          <div className="flex items-center gap-4 overflow-x-auto border-b border-white/10 pb-2 sm:gap-8">
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 text-[.55rem] transition sm:text-xs ${activeTab === tab ? "rounded-md bg-[#386cff] px-3 py-1.5 text-white" : "text-white/45 hover:text-white"}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <label className="mt-3 flex h-8 items-center gap-2 rounded-md bg-[#111b2c] px-2.5 text-white/35 sm:h-10 sm:px-3">
            <Search size={13} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search"
              className="min-w-0 flex-1 bg-transparent text-[.6rem] text-white outline-none placeholder:text-white/35 sm:text-xs"
              aria-label="Search services"
            />
          </label>
        </section>

        <section
          className="mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-3 sm:gap-3"
          aria-label="Services list"
        >
          {visibleServices.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </section>

        {visibleServices.length === 0 && (
          <div className="py-12 text-center text-xs text-white/45">
            No services found.
          </div>
        )}
      </div>

      <nav
        className="fixed bottom-4 left-1/2 z-20 flex h-[54px] w-[calc(100%-32px)] max-w-[288px] -translate-x-1/2 items-center justify-around rounded-full bg-[#6f9be6] px-3 text-[#102d64] shadow-[0_10px_24px_rgba(0,0,0,0.28)] lg:hidden"
        aria-label="Mobile dashboard navigation"
      >
        <Link
          href="/overview"
          aria-label="Dashboard"
          className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/15"
        >
          <Grid2X2 size={20} strokeWidth={1.8} />
        </Link>
        <Link
          href="#calendar"
          aria-label="Calendar"
          className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/15"
        >
          <CalendarDays size={20} strokeWidth={1.8} />
        </Link>
        <Link
          href="/staff"
          aria-label="Staff"
          className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/15"
        >
          <UsersRound size={20} strokeWidth={1.8} />
        </Link>
        <Link
          href="#analytics"
          aria-label="Analytics"
          className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/15"
        >
          <BarChart3 size={20} strokeWidth={1.8} />
        </Link>
        <Link
          href="#settings"
          aria-label="Settings"
          className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/15"
        >
          <Settings size={20} strokeWidth={1.8} />
        </Link>
      </nav>
    </main>
  );
}

function SummaryCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-md bg-[#111b2c] px-2 py-2.5 text-center sm:px-5 sm:py-3">
      <p className="text-[.65rem] font-semibold sm:text-base">{value}</p>
      <p className="mt-1 text-[.45rem] text-white/45 sm:text-[.6rem]">
        {label}
      </p>
    </div>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <article
      className="dashboard-enter group flex min-h-[78px] items-center gap-2.5 rounded-xl bg-[#111b2c] px-3 py-2.5 transition hover:-translate-y-1 hover:bg-[#172238] sm:min-h-[92px] sm:px-4"
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a2940] text-[#8fb4ff] sm:h-10 sm:w-10">
        <Clock3 size={15} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h3 className="truncate text-[.62rem] font-medium sm:text-sm">
            {service.name}
          </h3>
          <span className="shrink-0 rounded bg-white/10 px-1 py-0.5 text-[.4rem] text-white/50 sm:text-[.5rem]">
            {service.category}
          </span>
        </div>
        <p className="mt-1 text-[.48rem] text-white/45 sm:text-[.6rem]">
          {service.duration} · {service.price}
        </p>
        <p className="mt-1 text-[.45rem] text-white/35 sm:text-[.55rem]">
          {service.bookings}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {service.active && (
          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#23d58b] text-[#23d58b]">
            <Check size={10} />
          </span>
        )}
        <ChevronRight
          size={14}
          className="text-white/35 transition group-hover:translate-x-0.5 group-hover:text-white"
        />
      </div>
    </article>
  );
}
