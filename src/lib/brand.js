export const BRAND = {
    name : "The Sweet Spot",
    tagline : "Baked with love",

    whatsapp : "258845023340",
    phoneDisplay : "+258 84 502 3340",

    instagram : "thesweetspot_by_mayra",
    instagramUrl : "https://instagram.com/thesweetspot_by_mayra",

    area : "Cape Town, Central, South Africa",
    hours : "Monday - Saturday",
};

export const CAKE_BASES = [
    "Vanilla Bean",
    "Chocolate Fudge",
    "Red Velvet",
    "Marble Cake",
];

export const FILLINGS = [
    "Cream cheese frosting",
    "Peppermint crisp",
    "Classic caramel",
    "Lotus biscoff",
    "Milk truffle",
    "Chocolate truffle",
    "Chocolate ganache",
    "Strawberry compote",
    "Salted Caramel",
]

export const OCCASIONS = [
    "Birthdays",
    "Weddings",
    "Baby Showers",
    "Anniversaries",
    "Bridal Showers",
    "Corporate Events",
    "Just Because",
]

export function whatsappLink(message){
    return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}
