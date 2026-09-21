export type BusinessProfile = {
  name: string;
  description: string;
  contact: string;
  address: string;
};

export type OperatingHours = {
  day: string;
  opensAt: string;
  closesAt: string;
  isOpen: boolean;
};
