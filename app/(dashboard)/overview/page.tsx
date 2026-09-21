"use client";

import { useState } from "react";
import {
  BarChart3,
  Bell,
  CalendarDays,
  ChevronRight,
  Grid2X2,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  UsersRound,
} from "lucide-react";

const appointments = [
  {
    name: "John Uche",
    service: "Haircut",
    time: "9:00AM",
    amount: "$80",
    image: "JU",
  },
  {
    name: "Maya Johnson",
    service: "Color & style",
    time: "11:30AM",
    amount: "$120",
    image: "MJ",
  },
  {
    name: "Liam Carter",
    service: "Beard trim",
    time: "2:00PM",
    amount: "$65",
    image: "LC",
  },
];

const managementLinks = [
  {
    title: "Staff Scheduling",
    detail: "Manage team schedules and appointments",
    icon: UsersRound,
  },
  {
    title: "Service Management",
    detail: "Manage services, pricing and availability",
    icon: Grid2X2,
  },
  {
    title: "Analytics & Report",
    detail: "Business insights, performance and bookkeeping",
    icon: BarChart3,
  },
];

const navigation = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Appointments", icon: CalendarDays },
  { label: "Staff", icon: UsersRound },
  { label: "Services", icon: Grid2X2 },
];

export default function OverviewPage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <main className="dashboard-shell min-h-svh bg-[#070c14] text-white lg:flex">
      <aside
        className={`dashboard-sidebar sticky top-0 z-20 hidden h-svh shrink-0 flex-col border-r border-white/10 bg-[#0a111d] py-8 transition-[width] duration-300 lg:flex ${isSidebarCollapsed ? "w-20 px-3" : "w-64 px-5"}`}
      >
        <div
          className={`relative mb-12 flex items-center gap-3 ${isSidebarCollapsed ? "justify-center" : "px-3"}`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3297f3] text-sm font-bold text-[#06172a]">
            G
          </span>
          {!isSidebarCollapsed && (
            <span className="text-lg font-semibold tracking-tight">
              Glamour
            </span>
          )}
          <button
            type="button"
            className={`dashboard-icon-button rounded-full p-2 text-white/60 hover:bg-white/10 ${isSidebarCollapsed ? "absolute -right-4 top-0 bg-[#0a111d]" : "ml-auto"}`}
            onClick={() => setIsSidebarCollapsed((collapsed) => !collapsed)}
            aria-label={
              isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
            }
            title={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isSidebarCollapsed ? (
              <PanelLeftOpen size={16} />
            ) : (
              <PanelLeftClose size={16} />
            )}
          </button>
        </div>
        <nav className="space-y-2" aria-label="Dashboard navigation">
          {navigation.map(({ label, icon: Icon }, index) => (
            <a
              className={`dashboard-nav-item flex items-center rounded-xl py-3 text-sm ${isSidebarCollapsed ? "justify-center px-0" : "gap-3 px-3"} ${index === 0 ? "bg-[#3297f3]/15 text-[#65b2ff]" : "text-white/55 hover:bg-white/5 hover:text-white"}`}
              href="#"
              key={label}
              title={isSidebarCollapsed ? label : undefined}
            >
              <Icon size={18} />
              {!isSidebarCollapsed && label}
            </a>
          ))}
        </nav>
        <div className="mt-auto space-y-2">
          <a
            className={`dashboard-nav-item flex items-center rounded-xl py-3 text-sm text-white/55 hover:bg-white/5 hover:text-white ${isSidebarCollapsed ? "justify-center px-0" : "gap-3 px-3"}`}
            href="#"
            title={isSidebarCollapsed ? "Settings" : undefined}
          >
            <Settings size={18} />
            {!isSidebarCollapsed && "Settings"}
          </a>
          <div
            className={`mt-5 flex items-center gap-3 border-t border-white/10 pt-5 ${isSidebarCollapsed ? "justify-center px-0" : "px-3"}`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c9b5a8] text-xs font-semibold text-[#31282a]">
              BS
            </span>
            {!isSidebarCollapsed && (
              <div>
                <p className="text-xs font-medium">Beth Success</p>
                <p className="text-[.65rem] text-white/40">Salon owner</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      <section className="w-full min-w-0 flex-1 px-3 pb-24 pt-5 sm:px-6 sm:pt-8 lg:px-12 lg:pb-12 lg:pt-10">
        <header className="dashboard-enter flex items-start justify-between">
          <div>
            <p className="text-[.65rem] text-white/80 sm:text-sm">
              Good Morning
            </p>
            <h1 className="mt-0.5 text-xs text-white/55 sm:text-sm">
              Beth Success
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="dashboard-icon-button rounded-full p-2 text-white/65 hover:bg-white/10"
              aria-label="Notifications"
            >
          <Bell size={17} />
            </button>
            <button
              className="dashboard-icon-button rounded-full p-2 text-white/65 hover:bg-white/10 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={17} />
            </button>
          </div>
        </header>

        <div className="mt-5 lg:mt-10">
          <div className="min-w-0">
            <section className="dashboard-enter dashboard-overview-card relative overflow-hidden rounded-xl bg-[#5176ed] p-3.5 sm:p-5 lg:p-7">
              <div className="relative z-[1] flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold sm:text-lg">
                    Today&apos;s Overview
                  </p>
                  <p className="mt-0.5 text-[.55rem] text-white/70 sm:text-xs">
                    July 21, 2025
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">09</p>
                  <p className="text-[.55rem] text-white/70">Appointments</p>
                </div>
              </div>
              <div className="relative z-[1] mt-4 grid grid-cols-3 gap-1.5 sm:mt-6 sm:gap-3">
                {["₦320,469,500", "7", "₦320,469,500"].map((value, index) => (
                  <div
                    className="dashboard-stat rounded-md bg-white/65 px-2 py-2.5 text-[#10204f] sm:px-3 sm:py-4"
                    key={`${value}-${index}`}
                  >
                    <p className="text-[.55rem] font-bold sm:text-sm">
                      {value}
                    </p>
                    <p className="mt-2 truncate text-[.45rem] sm:text-[.6rem]">
                      {index === 1 ? "Walk in Customers" : "Today's Revenue"}
                    </p>
                  </div>
                ))}
              </div>
              <div className="dashboard-orbit absolute -right-10 -top-20 h-48 w-48 rounded-full border-[22px] border-white/10" />
            </section>

            <section
              className="dashboard-enter mt-5 sm:mt-8 lg:mt-9"
              style={{ animationDelay: "100ms" }}
            >
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-[.7rem] font-medium sm:text-lg">
                  Appointments
                </h2>
                <a
                  href="#appointments"
                  className="text-[.6rem] text-[#3297f3] hover:text-white sm:text-xs"
                >
                  See all
                </a>
              </div>
              <div className="grid gap-3 lg:grid-cols-3">
                {appointments.map((appointment, index) => (
                  <AppointmentCard
                    appointment={appointment}
                    key={appointment.name}
                    index={index}
                  />
                ))}
              </div>
            </section>
          </div>

          <aside
            className="dashboard-enter mt-8 lg:mt-10 lg:pt-1"
            style={{ animationDelay: "180ms" }}
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-[.7rem] font-medium sm:text-lg">
                Manage Your Salon
              </h2>
              <button
                className="text-white/40 hover:text-white"
                aria-label="More salon options"
              >
                <MoreHorizontal size={17} />
              </button>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1">
              {managementLinks.map(({ title, detail, icon: Icon }) => (
                <a
                  href="#"
                  className="dashboard-management flex min-h-[62px] items-center gap-3 rounded-md bg-[#f1f2f4] px-3 py-5 text-[#171c24] hover:bg-white"
                  key={title}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#dfe0e2] text-[#51555d]">
                    <Icon size={17} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <strong className="block text-[.65rem] font-medium sm:text-sm">
                      {title}
                    </strong>
                    <span className="block max-w-[190px] text-[.5rem] leading-tight text-[#575c65] sm:text-[.6rem]">
                      {detail}
                    </span>
                  </span>
                  <ChevronRight size={14} className="shrink-0 text-[#444950]" />
                </a>
              ))}
            </div>
            <section className="dashboard-progress mt-4 rounded-lg bg-[#07152b] p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <p className="text-[.65rem] font-medium text-[#3297f3] sm:text-base">
                  Your profile is 78% complete
                </p>
                <ChevronRight size={14} className="text-[#3297f3]" />
              </div>
              <p className="mt-1 max-w-[340px] text-[.5rem] leading-tight text-white/65 sm:text-[.7rem]">
                You are few steps away from having a full experience
              </p>
              <div className="mt-3 flex gap-1">
                <span className="h-1 flex-[.78] rounded-full bg-[#3297f3]" />
                <span className="h-1 flex-[.22] rounded-full bg-white/80" />
              </div>
            </section>
          </aside>
        </div>
      </section>

      <nav
        className="dashboard-bottom-nav fixed bottom-3 left-1/2 z-20 flex h-11 w-[120px] -translate-x-1/2 items-center justify-around rounded-full bg-[#6193ec] px-2 text-[#102d64] shadow-lg lg:hidden"
        aria-label="Mobile dashboard navigation"
      >
        <a href="#" aria-label="Dashboard">
          <Grid2X2 size={17} />
        </a>
        <a href="#" aria-label="Calendar">
          <CalendarDays size={17} />
        </a>
        <a href="#" aria-label="Settings">
          <Settings size={17} />
        </a>
      </nav>
    </main>
  );
}

function AppointmentCard({
  appointment,
  index,
}: {
  appointment: (typeof appointments)[number];
  index: number;
}) {
  return (
    <article
      className="dashboard-appointment dashboard-enter flex items-center gap-3 rounded-xl bg-[#111b2c] px-3 py-3 transition hover:-translate-y-1 hover:scale-[1.02]"
      style={{ animationDelay: `${index * 80 + 140}ms` }}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c4b5ab] text-[.6rem] font-semibold text-[#352c2d]">
        {appointment.image}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-[.65rem] font-medium sm:text-xs">
            {appointment.name}
          </p>
          <span className="shrink-0 text-[.55rem] text-white/70">
            {appointment.time}
          </span>
        </div>
        <p className="mt-0.5 text-[.55rem] text-white/55">
          {appointment.service}
        </p>
        <p className="mt-1 text-[.5rem] text-[#3297f3]">Confirmed</p>
      </div>
      <span className="text-[.6rem] text-white/75">{appointment.amount}</span>
    </article>
  );
}
