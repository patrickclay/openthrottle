export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  laps?: number;
}

export const team: TeamMember[] = [
  {
    id: "mike-gorman",
    name: "Mike Gorman",
    role: "Team Captain",
    bio: "Founder and captain of Open Throttle Racing. Manages team operations and ensures every driver has a race-ready car and an unforgettable experience.",
    image: "/images/placeholder-team-1.jpg",
    laps: 85,
  },
  {
    id: "oleg-gorshkov",
    name: "Oleg Gorshkov",
    role: "Lead Driver",
    bio: "The most experienced wheel on the team with over 1,300 lifetime laps. Oleg brings consistency and speed to every endurance stint.",
    image: "/images/placeholder-team-2.jpg",
    laps: 1388,
  },
  {
    id: "abby-lockwood",
    name: "Abby Lockwood",
    role: "Driver",
    bio: "A rising talent in endurance racing with a smooth driving style and a knack for clean, fast stints under pressure.",
    image: "/images/placeholder-team-3.jpg",
    laps: 116,
  },
  {
    id: "christopher-frederick",
    name: "Christopher Frederick",
    role: "Crew",
    bio: "The backbone of pit operations. Christopher keeps the cars running and the pit stops efficient.",
    image: "/images/placeholder-team-4.jpg",
  },
];
