export interface ScheduleEvent {
  id: string;
  date: string;
  endDate?: string;
  venue: string;
  location: string;
  series: string;
  duration: string;
  description: string;
}

export const schedule: ScheduleEvent[] = [
  {
    id: "barber-mar",
    date: "2026-03-13",
    endDate: "2026-03-15",
    venue: "Barber Motorsports Park",
    location: "Birmingham, AL",
    series: "ChampCar",
    duration: "14-Hour Endurance",
    description: "Season opener at Barber Motorsports Park",
  },
  {
    id: "road-atlanta-apr",
    date: "2026-04-03",
    endDate: "2026-04-05",
    venue: "Road Atlanta",
    location: "Braselton, GA",
    series: "WRL",
    duration: "8-Hour Endurance",
    description: "WRL race at Road Atlanta",
  },
  {
    id: "daytona-may",
    date: "2026-05-01",
    endDate: "2026-05-03",
    venue: "Daytona International Speedway",
    location: "Daytona Beach, FL",
    series: "ChampCar",
    duration: "24-Hour Endurance",
    description: "The big one — 24 hours at Daytona",
  },
  {
    id: "watkins-glen-jun",
    date: "2026-06-12",
    endDate: "2026-06-14",
    venue: "Watkins Glen International",
    location: "Watkins Glen, NY",
    series: "ChampCar",
    duration: "14-Hour Endurance",
    description: "Endurance race at the legendary Glen",
  },
  {
    id: "sebring-jul",
    date: "2026-07-10",
    endDate: "2026-07-12",
    venue: "Sebring International Raceway",
    location: "Sebring, FL",
    series: "WRL",
    duration: "8-Hour Endurance",
    description: "Summer race at Sebring",
  },
  {
    id: "vir-aug",
    date: "2026-08-07",
    endDate: "2026-08-09",
    venue: "Virginia International Raceway",
    location: "Alton, VA",
    series: "WRL",
    duration: "8-Hour Endurance",
    description: "WRL at VIR Full Course",
  },
  {
    id: "mid-ohio-sep",
    date: "2026-09-11",
    endDate: "2026-09-13",
    venue: "Mid-Ohio Sports Car Course",
    location: "Lexington, OH",
    series: "ChampCar",
    duration: "14-Hour Endurance",
    description: "Fall race at Mid-Ohio",
  },
  {
    id: "cota-oct",
    date: "2026-10-16",
    endDate: "2026-10-18",
    venue: "Circuit of the Americas",
    location: "Austin, TX",
    series: "ChampCar",
    duration: "24-Hour Endurance",
    description: "Season finale — 24 hours at COTA",
  },
  {
    id: "road-atlanta-nov",
    date: "2026-11-06",
    endDate: "2026-11-08",
    venue: "Road Atlanta",
    location: "Braselton, GA",
    series: "HSR",
    duration: "Track Day",
    description: "HSR event at Road Atlanta",
  },
  {
    id: "daytona-dec",
    date: "2026-12-04",
    endDate: "2026-12-06",
    venue: "Daytona International Speedway",
    location: "Daytona Beach, FL",
    series: "HSR",
    duration: "Track Day",
    description: "Year-end track day at Daytona",
  },
];
