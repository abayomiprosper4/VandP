"use client";

import { useRouter } from "next/navigation";
import {
  SelectArrow,
  SetupButton,
  SetupShell,
  fieldClassName,
  selectClassName,
} from "../../../../../components/auth/setup-shell";

export default function OperationsPage() {
  const router = useRouter();
  const dayField = (label: string) => (
    <label className="text-[.65rem] sm:text-xs lg:text-sm">
      {label}
      <span className="relative block">
        <select
          className={selectClassName}
          defaultValue={label === "Day" ? "Monday - Saturday" : "Sunday"}
        >
          <option>{label === "Day" ? "Monday - Saturday" : "Sunday"}</option>
          <option>Monday - Friday</option>
          <option>Saturday - Sunday</option>
        </select>
        <SelectArrow />
      </span>
    </label>
  );

  return (
    <SetupShell activeStep={3} title="Business service and operation setup">
      <form
        className="mx-auto max-w-3xl space-y-3 sm:space-y-5 lg:space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/auth/sign-up/payout");
        }}
      >
        <section>
          <h2 className="mb-2 text-xs font-medium sm:text-sm lg:text-base">
            Operations
          </h2>
          <label className="block text-[.65rem] sm:text-xs lg:text-sm">
            Gender Specific
            <span className="relative block">
              <select className={selectClassName} defaultValue="Male salon">
                <option>Male salon</option>
                <option>Female salon</option>
                <option>Unisex salon</option>
              </select>
              <SelectArrow />
            </span>
          </label>
          <label className="mt-2 block text-[.65rem] sm:text-xs lg:mt-4 lg:text-sm">
            Saloon Services
            <input className={fieldClassName} placeholder="Haircut" />
          </label>
          <div className="mt-2 grid grid-cols-2 gap-2 lg:mt-4 lg:gap-6">
            <label className="text-[.65rem] sm:text-xs lg:text-sm">
              Number of Seats
              <input
                className={fieldClassName}
                type="number"
                defaultValue="5"
              />
            </label>
            <label className="text-[.65rem] sm:text-xs lg:text-sm">
              Number of Workers
              <input
                className={fieldClassName}
                type="number"
                defaultValue="8"
              />
            </label>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-medium sm:text-sm lg:text-base">
              Business Days and Time
            </h2>
            <span className="text-[.6rem] text-white/80 sm:text-xs">
              Regular Days　+
            </span>
          </div>
          <div className="mt-2 lg:mt-4">{dayField("Day")}</div>
          <div className="mt-2 grid grid-cols-2 gap-2 lg:mt-3 lg:gap-6">
            <input
              className={fieldClassName}
              type="time"
              defaultValue="08:00"
              aria-label="Opening time"
            />
            <input
              className={fieldClassName}
              type="time"
              defaultValue="21:00"
              aria-label="Closing time"
            />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-medium sm:text-sm lg:text-base">
              Weekend/Extra Days
            </h2>
            <span className="text-[.6rem] text-white/80 sm:text-xs">+ </span>
          </div>
          <div className="mt-2 lg:mt-4">{dayField("Weekend")}</div>
          <div className="mt-2 grid grid-cols-2 gap-2 lg:mt-3 lg:gap-6">
            <input
              className={fieldClassName}
              type="time"
              defaultValue="08:00"
              aria-label="Weekend opening time"
            />
            <input
              className={fieldClassName}
              type="time"
              defaultValue="21:00"
              aria-label="Weekend closing time"
            />
          </div>
        </section>
        <SetupButton>Save &amp; Continue</SetupButton>
      </form>
    </SetupShell>
  );
}
