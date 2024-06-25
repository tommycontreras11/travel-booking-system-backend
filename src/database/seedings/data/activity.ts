import { ActivityEntity } from "database/entities/entity/activity.entity";

const activities = [
    {
        name: "The Plaza",
        location: "New York, USA",
        price: 799.99,
        description: "A luxurious hotel with stunning city views.",
        available_slots: 10
    },
    {
        name: "Ritz-Carlton",
        location: "San Francisco, USA",
        price: 899.99,
        description: "An elegant hotel with top-notch amenities.",
        available_slots: 5
    },
    {
        name: "Four Seasons",
        location: "Miami, USA",
        price: 699.99,
        description: "A beautiful beachfront hotel offering comfort and style.",
        available_slots: 8
    },
    {
        name: "The Langham",
        location: "Chicago, USA",
        price: 649.99,
        description: "A high-end hotel located in the heart of the city.",
        available_slots: 15
    },
    {
        name: "The Peninsula",
        location: "Seattle, USA",
        price: 749.99,
        description: "A sophisticated hotel with breathtaking views.",
        available_slots: 12
    },
    {
        name: "Waldorf Astoria",
        location: "Las Vegas, USA",
        price: 999.99,
        description: "A premier hotel offering an unforgettable experience.",
        available_slots: 20
    },
    {
        name: "Mandarin Oriental",
        location: "Washington D.C., USA",
        price: 879.99,
        description: "An exquisite hotel with luxurious accommodations.",
        available_slots: 7
    },
    {
        name: "Grand Floridian",
        location: "Orlando, USA",
        price: 599.99,
        description: "A magical hotel with close proximity to theme parks.",
        available_slots: 25
    },
    {
        name: "The Rittenhouse",
        location: "Philadelphia, USA",
        price: 659.99,
        description: "A historic hotel with modern amenities.",
        available_slots: 9
    },
    {
        name: "The Driskill",
        location: "Austin, USA",
        price: 539.99,
        description: "A charming hotel located in downtown Austin.",
        available_slots: 18
    }
];

export const activityData: Partial<ActivityEntity>[] = activities.map((activity) => ({
    name: activity.name,
    location: activity.location,
    price: activity.price,
    description: activity.description,
    available_slots: activity.available_slots
}));
