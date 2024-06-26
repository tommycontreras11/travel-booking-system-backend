import { ActivityEntity } from "database/entities/entity/activity.entity";

const activities = [
    {
        name: "The Plaza",
        location: "New York, USA",
        price: 799.99,
        description: "A luxurious hotel with stunning city views.",
        availableSlot: 10
    },
    {
        name: "Ritz-Carlton",
        location: "San Francisco, USA",
        price: 899.99,
        description: "An elegant hotel with top-notch amenities.",
        availableSlot: 5
    },
    {
        name: "Four Seasons",
        location: "Miami, USA",
        price: 699.99,
        description: "A beautiful beachfront hotel offering comfort and style.",
        availableSlot: 8
    },
    {
        name: "The Langham",
        location: "Chicago, USA",
        price: 649.99,
        description: "A high-end hotel located in the heart of the city.",
        availableSlot: 15
    },
    {
        name: "The Peninsula",
        location: "Seattle, USA",
        price: 749.99,
        description: "A sophisticated hotel with breathtaking views.",
        availableSlot: 12
    },
    {
        name: "Waldorf Astoria",
        location: "Las Vegas, USA",
        price: 999.99,
        description: "A premier hotel offering an unforgettable experience.",
        availableSlot: 20
    },
    {
        name: "Mandarin Oriental",
        location: "Washington D.C., USA",
        price: 879.99,
        description: "An exquisite hotel with luxurious accommodations.",
        availableSlot: 7
    },
    {
        name: "Grand Floridian",
        location: "Orlando, USA",
        price: 599.99,
        description: "A magical hotel with close proximity to theme parks.",
        availableSlot: 25
    },
    {
        name: "The Rittenhouse",
        location: "Philadelphia, USA",
        price: 659.99,
        description: "A historic hotel with modern amenities.",
        availableSlot: 9
    },
    {
        name: "The Driskill",
        location: "Austin, USA",
        price: 539.99,
        description: "A charming hotel located in downtown Austin.",
        availableSlot: 18
    }
];

export const activityData: Partial<ActivityEntity>[] = activities.map((activity) => ({
    name: activity.name,
    location: activity.location,
    price: activity.price,
    description: activity.description,
    availableSlot: activity.availableSlot
}));
