import { FlightEntity } from "database/entities/entity/flight.entity";

const flights = [
  {
      flightNumber: "AA100",
      from: "New York",
      to: "Los Angeles",
      departureDateTime: new Date("2024-07-01"),
      arrivalDateTime: new Date("2024-07-01"),
      price: 299.99,
      available_slots: 25
  },
  {
      flightNumber: "UA200",
      from: "San Francisco",
      to: "Chicago",
      departureDateTime: new Date("2024-07-02"),
      arrivalDateTime: new Date("2024-07-0"),
      price: 349.99,
      available_slots: 30
  },
  {
      flightNumber: "DL300",
      from: "Miami",
      to: "Houston",
      departureDateTime: new Date("2024-07-03"),
      arrivalDateTime: new Date("2024-07-03"),
      price: 199.99,
      available_slots: 40
  },
  {
      flightNumber: "SW400",
      from: "Boston",
      to: "Dallas",
      departureDateTime: new Date("2024-07-04"),
      arrivalDateTime: new Date("2024-07-04"),
      price: 259.99,
      available_slots: 20
  },
  {
      flightNumber: "AA500",
      from: "Seattle",
      to: "Denver",
      departureDateTime: new Date("2024-07-05"),
      arrivalDateTime: new Date("2024-07-05"),
      price: 179.99,
      available_slots: 15
  },
  {
      flightNumber: "UA600",
      from: "Atlanta",
      to: "Las Vegas",
      departureDateTime: new Date("2024-07-06"),
      arrivalDateTime: new Date("2024-07-06"),
      price: 319.99,
      available_slots: 10
  },
  {
      flightNumber: "DL700",
      from: "Washington D.C.",
      to: "San Diego",
      departureDateTime: new Date("2024-07-07"),
      arrivalDateTime: new Date("2024-07-07"),
      price: 289.99,
      available_slots: 5
  },
  {
      flightNumber: "SW800",
      from: "Orlando",
      to: "Phoenix",
      departureDateTime: new Date("2024-07-08"),
      arrivalDateTime: new Date("2024-07-08"),
      price: 239.99,
      available_slots: 8
  },
  {
      flightNumber: "AA900",
      from: "Philadelphia",
      to: "San Antonio",
      departureDateTime: new Date("2024-07-09"),
      arrivalDateTime: new Date("2024-07-09"),
      price: 279.99,
      available_slots: 12
  },
  {
      flightNumber: "UA1000",
      from: "Charlotte",
      to: "Austin",
      departureDateTime: new Date("2024-07-10"),
      arrivalDateTime: new Date("2024-07-10"),
      price: 269.99,
      available_slots: 18
  }
];

export const flightData: Partial<FlightEntity>[] = flights.map((flight) => (flight));
