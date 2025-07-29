// context/ApartmentContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { IApartment } from "@/types/apartment.types";

type ApartmentContextType = {
  apartments: Apartment[];
  setApartments: (a: Apartment[]) => void;
};

const ApartmentContext = createContext<ApartmentContextType | undefined>(
  undefined
);

export const useApartments = () => {
  const context = useContext(ApartmentContext);
  if (!context) {
    throw new Error("useApartments must be used within ApartmentProvider");
  }
  return context;
};

export const ApartmentProvider = ({
  children,
  initialApartments = [],
}: {
  children: ReactNode;
  initialApartments?: Apartment[];
}) => {
  const [apartments, setApartments] = useState<Apartment[]>(initialApartments);

  return (
    <ApartmentContext.Provider value={{ apartments, setApartments }}>
      {children}
    </ApartmentContext.Provider>
  );
};
