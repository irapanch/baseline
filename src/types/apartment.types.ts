// types/apartment.types.ts

// export interface Apartment {
//   _id: string;
//   number: number;
//   balance: number;
// }

export type Apartment = {
  _id: string; // або string, якщо потрібно
  residents: {
    name: string;
    owner: boolean;
  }[];
  balance: number;
};
