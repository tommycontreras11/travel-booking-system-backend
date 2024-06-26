import { FlightEntity } from "database/entities/entity/flight.entity";

const flights = [
  {
    flightNumber: "AA100",
    from: "New York",
    to: "Los Angeles",
    departureDateTime: new Date(Date.UTC(2024, 6, 1)), // Meses son 0-indexados
    arrivalDateTime: new Date(Date.UTC(2024, 6, 1)),
    price: 299.99,
    availableSlot: 25,
  },
  {
    flightNumber: "UA200",
    from: "San Francisco",
    to: "Chicago",
    departureDateTime: new Date(Date.UTC(2024, 6, 2)),
    arrivalDateTime: new Date(Date.UTC(2024, 6, 2)),
    price: 349.99,
    availableSlot: 30,
  },
  {
    flightNumber: "DL300",
    from: "Miami",
    to: "Houston",
    departureDateTime: new Date(Date.UTC(2024, 6, 3)),
    arrivalDateTime: new Date(Date.UTC(2024, 6, 3)),
    price: 199.99,
    availableSlot: 40,
  },
  {
    flightNumber: "SW400",
    from: "Boston",
    to: "Dallas",
    departureDateTime: new Date(Date.UTC(2024, 6, 4)),
    arrivalDateTime: new Date(Date.UTC(2024, 6, 4)),
    price: 259.99,
    availableSlot: 20,
  },
  {
    flightNumber: "AA500",
    from: "Seattle",
    to: "Denver",
    departureDateTime: new Date(Date.UTC(2024, 6, 5)),
    arrivalDateTime: new Date(Date.UTC(2024, 6, 5)),
    price: 179.99,
    availableSlot: 15,
  },
  {
    flightNumber: "UA600",
    from: "Atlanta",
    to: "Las Vegas",
    departureDateTime: new Date(Date.UTC(2024, 6, 6)),
    arrivalDateTime: new Date(Date.UTC(2024, 6, 6)),
    price: 319.99,
    availableSlot: 10,
  },
  {
    flightNumber: "DL700",
    from: "Washington D.C.",
    to: "San Diego",
    departureDateTime: new Date(Date.UTC(2024, 6, 7)),
    arrivalDateTime: new Date(Date.UTC(2024, 6, 7)),
    price: 289.99,
    availableSlot: 5,
  },
  {
    flightNumber: "SW800",
    from: "Orlando",
    to: "Phoenix",
    departureDateTime: new Date(Date.UTC(2024, 6, 8)),
    arrivalDateTime: new Date(Date.UTC(2024, 6, 8)),
    price: 239.99,
    availableSlot: 8,
  },
  {
    flightNumber: "AA900",
    from: "Philadelphia",
    to: "San Antonio",
    departureDateTime: new Date(Date.UTC(2024, 6, 9)),
    arrivalDateTime: new Date(Date.UTC(2024, 6, 9)),
    price: 279.99,
    availableSlot: 12,
  },
  {
    flightNumber: "UA1000",
    from: "Charlotte",
    to: "Austin",
    departureDateTime: new Date(Date.UTC(2024, 6, 10)),
    arrivalDateTime: new Date(Date.UTC(2024, 6, 10)),
    price: 269.99,
    availableSlot: 18,
  },
];

export const flightData: Partial<FlightEntity>[] = flights.map(
  (flight) => flight
);
