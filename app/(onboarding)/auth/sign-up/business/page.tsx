"use client";

import { useRouter } from "next/navigation";
import {
  SelectArrow,
  SetupButton,
  SetupShell,
  UploadProfilePicture,
  fieldClassName,
  selectClassName,
} from "../../../../../components/auth/setup-shell";

export default function BusinessSetupPage() {
  const router = useRouter();

  return (
    <SetupShell activeStep={2} title="Business profile setup">
      <form
        className="mx-auto max-w-3xl"
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/auth/sign-up/operations");
        }}
      >
        <UploadProfilePicture business />
        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
          <label className="block text-[.65rem] sm:text-xs lg:text-sm">
            Business Name
            <input
              className={fieldClassName}
              placeholder="Enter Business Name"
              required
            />
          </label>
          <label className="block text-[.65rem] sm:text-xs lg:text-sm">
            About
            <textarea
              className={`${fieldClassName} h-16 resize-none py-2 sm:h-24 lg:h-32`}
              placeholder="Brief description of your business"
            />
          </label>
          <div className="grid gap-2 lg:grid-cols-2 lg:gap-6">
            <label className="text-[.65rem] sm:text-xs lg:text-sm">
              Office Phone Number 1
              <input
                className={fieldClassName}
                type="tel"
                placeholder="+23413456789"
                required
              />
            </label>
            <label className="text-[.65rem] sm:text-xs lg:text-sm">
              Office Phone Number 2
              <input
                className={fieldClassName}
                type="tel"
                placeholder="+23423456789"
              />
            </label>
          </div>
          <label className="block text-[.65rem] sm:text-xs lg:text-sm">
            Business Address
            <textarea
              className={`${fieldClassName} h-16 resize-none py-2 sm:h-24 lg:h-32`}
              placeholder="Enter Salon address"
              required
            />
          </label>
        </div>
        <div className="flex justify-center gap-2">
          <button
            type="button"
            onClick={() => router.push("/auth/sign-up/operations")}
            className="mt-6 h-9 rounded-md bg-[#3297f3] px-5 text-[.65rem] text-[#06172a] sm:mt-8 sm:h-11 sm:text-xs lg:mt-10 lg:h-14 lg:px-8 lg:text-sm"
          >
            Skip
          </button>
          <SetupButton>Create Business Profile</SetupButton>
        </div>
      </form>
    </SetupShell>
  );
}
