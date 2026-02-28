export interface Product {
  id: string;
  name: string;
  category: "champcar" | "wrl-gp1" | "wrl-gp3" | "trackday" | "merch";
  price: number;
  description: string;
  image: string;
  details: string[];
}

export const products: Product[] = [
  {
    id: "champcar-seat-barber",
    name: "ChampCar Seat — Barber Motorsports Park",
    category: "champcar",
    price: 2500,
    description: "14-hour endurance race seat at Barber Motorsports Park. March 13-15, 2026.",
    image: "/images/placeholder-race-1.jpg",
    details: [
      "Race-prepared BMW or Porsche",
      "Minimum 2-hour stint",
      "In-car radio communication",
      "Data & video review",
      "Meals included",
    ],
  },
  {
    id: "champcar-seat-daytona",
    name: "ChampCar Seat — Daytona 24Hr",
    category: "champcar",
    price: 3500,
    description: "24-hour endurance race seat at Daytona International Speedway. May 1-3, 2026.",
    image: "/images/placeholder-race-2.jpg",
    details: [
      "Race-prepared BMW or Porsche",
      "Minimum 2-hour stint",
      "In-car radio communication",
      "Data & video review",
      "Meals & lodging included",
    ],
  },
  {
    id: "wrl-gp1-seat",
    name: "WRL GP1 Seat — Road Atlanta",
    category: "wrl-gp1",
    price: 2800,
    description: "GP1 class race seat at Road Atlanta. April 3-5, 2026.",
    image: "/images/placeholder-race-3.jpg",
    details: [
      "GP1-class race car",
      "8-hour endurance format",
      "In-car radio communication",
      "Data & video review",
      "Meals included",
    ],
  },
  {
    id: "wrl-gp3-seat",
    name: "WRL GP3 Seat — Sebring",
    category: "wrl-gp3",
    price: 2200,
    description: "GP3 class race seat at Sebring International Raceway. July 10-12, 2026.",
    image: "/images/placeholder-race-4.jpg",
    details: [
      "GP3-class race car",
      "8-hour endurance format",
      "In-car radio communication",
      "Data & video review",
      "Meals included",
    ],
  },
  {
    id: "trackday-rental",
    name: "Track Day Rental",
    category: "trackday",
    price: 1500,
    description: "Full-day track rental in a race-prepared BMW. Available at select events.",
    image: "/images/placeholder-trackday.jpg",
    details: [
      "Race-prepared BMW",
      "Full day of track time",
      "Coaching available",
      "Helmet loaner available",
    ],
  },
  {
    id: "merch-tshirt",
    name: "Open Throttle Racing T-Shirt",
    category: "merch",
    price: 35,
    description: "Official Open Throttle Racing team shirt.",
    image: "/images/placeholder-merch.jpg",
    details: ["100% cotton", "Unisex sizing", "Lime green logo"],
  },
];

export const categoryLabels: Record<Product["category"], string> = {
  champcar: "ChampCar Race Seats",
  "wrl-gp1": "WRL GP1 Race Seats",
  "wrl-gp3": "WRL GP3 Race Seats",
  trackday: "Test Day / Track Day Rentals",
  merch: "Merchandise",
};
