"use client";

import { useRouter } from "next/navigation";
import {
  SelectArrow,
  SetupButton,
  SetupShell,
  fieldClassName,
  selectClassName,
} from "../../../../../components/auth/setup-shell";

export default function PayoutPage() {
  const router = useRouter();

  return (
    <SetupShell activeStep={3} title="Payout Details">
      <form
        className="mx-auto max-w-3xl space-y-3 sm:space-y-5 lg:space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/overview");
        }}
      >
        <label className="block text-[.65rem] sm:text-xs lg:text-sm">
          Account Holder Name
          <input className={fieldClassName} placeholder="John" required />
        </label>
        <label className="block text-[.65rem] sm:text-xs lg:text-sm">
          Account Number
          <input
            className={fieldClassName}
            inputMode="numeric"
            placeholder="123456789"
            required
          />
        </label>
        <label className="block text-[.65rem] sm:text-xs lg:text-sm">
          Confirm Account Number
          <input
            className={fieldClassName}
            inputMode="numeric"
            placeholder="123456789"
            required
          />
        </label>
        <label className="block text-[.65rem] sm:text-xs lg:text-sm">
          Bank Name
          <span className="relative block">
            <select
              className={selectClassName}
              defaultValue="United Bank of Lag"
              required
            >
              <option>United Bank of Lag</option>
              <option>Access Bank</option>
              <option>First Bank</option>
            </select>
            <SelectArrow />
          </span>
        </label>
        <SetupButton>Save &amp; Continue</SetupButton>
      </form>
    </SetupShell>
  );
}
