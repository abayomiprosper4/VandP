import { ImagePlus } from "lucide-react";

type SetupShellProps = {
  activeStep: 1 | 2 | 3;
  title: string;
  children: React.ReactNode;
};

export function SetupShell({ activeStep, title, children }: SetupShellProps) {
  return (
    <main className="min-h-svh bg-[#070c14] px-3 py-5 text-white sm:px-8 sm:py-8 lg:px-12 lg:py-12">
      <div className="mx-auto w-full max-w-4xl">
        <div
          className="flex gap-2"
          aria-label={`Setup step ${activeStep} of 3`}
        >
          {[1, 2, 3].map((step) => (
            <span
              key={step}
              className={`h-1 flex-1 rounded-full ${step === activeStep ? "bg-[#e2ac00]" : "bg-white"}`}
            />
          ))}
        </div>

        <h1 className="mt-6 text-sm font-medium sm:text-base lg:mt-8 lg:text-xl">
          {title}
        </h1>
        {children}
      </div>
    </main>
  );
}

export function UploadProfilePicture({
  business = false,
}: {
  business?: boolean;
}) {
  return (
    <div className="mb-6 mt-6 flex flex-col items-center sm:mb-8 sm:mt-8 lg:mb-10 lg:mt-10">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white sm:h-20 sm:w-20 lg:h-24 lg:w-24">
        <ImagePlus
          className="h-8 w-8 stroke-[1.5] sm:h-10 sm:w-10 lg:h-12 lg:w-12"
          aria-hidden="true"
        />
      </div>
      <p className="mt-3 text-xs sm:text-sm lg:text-base">
        Upload {business ? "Business Logo" : "Profile Picture"}
      </p>
    </div>
  );
}

export const fieldClassName =
  "mt-1 h-8 w-full rounded-md bg-[#36445a] px-2 text-[.65rem] text-white outline-none placeholder:text-white/25 focus:ring-2 focus:ring-[#3297f3] sm:h-10 sm:px-3 sm:text-xs lg:h-12 lg:text-sm";

export const selectClassName = `${fieldClassName} appearance-none`;

export function SetupButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="mx-auto mt-6 block h-9 w-full max-w-[220px] rounded-md bg-[#3297f3] text-[.65rem] font-medium text-[#06172a] transition-colors hover:bg-[#56a9f5] sm:mt-8 sm:h-11 sm:text-xs lg:mt-10 lg:h-14 lg:max-w-[280px] lg:text-sm"
    >
      {children}
    </button>
  );
}

export function SelectArrow() {
  return (
    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/70">
      ⌄
    </span>
  );
}
