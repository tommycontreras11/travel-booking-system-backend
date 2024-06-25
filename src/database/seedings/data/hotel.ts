import { HotelEntity } from "database/entities/entity/hotel.entity";

const hotels = [
    {
        name: "The Plaza",
        address: "768 5th Ave",
        city: "New York",
        country: "Estados Unidos",
        stars: 5,
        pricePerNight: 799.99,
        available_slots: 10
    },
    {
        name: "Ritz-Carlton",
        address: "600 Stockton St",
        city: "San Francisco",
        country: "Estados Unidos",
        stars: 5,
        pricePerNight: 899.99,
        available_slots: 11
    },
    {
        name: "Four Seasons",
        address: "1435 Brickell Ave",
        city: "Miami",
        country: "Estados Unidos",
        stars: 5,
        pricePerNight: 699.99,
        available_slots: 53
    },
    {
        name: "The Langham",
        address: "330 N Wabash Ave",
        city: "Chicago",
        country: "Estados Unidos",
        stars: 5,
        pricePerNight: 649.99,
        available_slots: 40
    },
    {
        name: "The Peninsula",
        address: "700 5th Ave",
        city: "Seattle",
        country: "Estados Unidos",
        stars: 5,
        pricePerNight: 749.99,
        available_slots: 40
    },
    {
        name: "Waldorf Astoria",
        address: "3752 Las Vegas Blvd S",
        city: "Las Vegas",
        country: "Estados Unidos",
        stars: 5,
        pricePerNight: 999.99,
        available_slots: 15
    },
    {
        name: "Mandarin Oriental",
        address: "1330 Maryland Ave SW",
        city: "Washington D.C.",
        country: "Estados Unidos",
        stars: 5,
        pricePerNight: 879.99,
        available_slots: 9
    },
    {
        name: "Grand Floridian",
        address: "4401 Floridian Way",
        city: "Orlando",
        country: "Estados Unidos",
        stars: 5,
        pricePerNight: 599.99,
        available_slots: 2
    },
    {
        name: "The Rittenhouse",
        address: "210 West Rittenhouse Square",
        city: "Philadelphia",
        country: "Estados Unidos",
        stars: 5,
        pricePerNight: 659.99,
        available_slots: 5
    },
    {
        name: "The Driskill",
        address: "604 Brazos St",
        city: "Austin",
        country: "Estados Unidos",
        stars: 5,
        pricePerNight: 539.99,
        available_slots: 10
    }
];

export const hotelData = hotels.map((hotel) => ({
    name: hotel.name,
    address: hotel.address,
    city: hotel.city,
    country: hotel.country,
    stars: hotel.stars,
    pricePerNight: hotel.pricePerNight,
    available_slots: hotel.available_slots
}));
