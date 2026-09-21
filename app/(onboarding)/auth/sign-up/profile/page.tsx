"use client";

import { useRouter } from "next/navigation";
import {
  SetupButton,
  SetupShell,
  UploadProfilePicture,
  fieldClassName,
  selectClassName,
  SelectArrow,
} from "../../../../../components/auth/setup-shell";

export default function ProfileSetupPage() {
  const router = useRouter();

  return (
    <SetupShell activeStep={1} title="Profile setup">
      <form
        className="mx-auto max-w-3xl"
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/auth/sign-up/business");
        }}
      >
        <UploadProfilePicture />
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-4">
          <label className="text-[.65rem] sm:text-xs lg:text-sm">
            First Name
            <input className={fieldClassName} placeholder="John" required />
          </label>
          <label className="text-[.65rem] sm:text-xs lg:text-sm">
            Last Name
            <input className={fieldClassName} placeholder="Doe" required />
          </label>
          <label className="text-[.65rem] sm:text-xs lg:text-sm">
            Nick Name
            <input className={fieldClassName} placeholder="Xup man" />
          </label>
          <label className="text-[.65rem] sm:text-xs lg:text-sm">
            Email
            <input
              className={fieldClassName}
              type="email"
              placeholder="Enter Email"
              required
            />
          </label>
          <label className="text-[.65rem] sm:text-xs lg:text-sm">
            Gender
            <span className="relative block">
              <select className={selectClassName} defaultValue="Male">
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
              <SelectArrow />
            </span>
          </label>
          <label className="text-[.65rem] sm:text-xs lg:text-sm">
            Date of Birth
            <input className={fieldClassName} type="date" required />
          </label>
          <label className="text-[.65rem] sm:text-xs lg:col-span-2 lg:text-sm">
            Personal Phone Number
            <input
              className={fieldClassName}
              type="tel"
              placeholder="Confirm password"
              required
            />
          </label>
        </div>
        <SetupButton>Create Profile</SetupButton>
      </form>
    </SetupShell>
  );
}
