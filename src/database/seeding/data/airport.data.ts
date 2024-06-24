import { AirportEntity } from "database/entities/entity/airport.entity"

const airports = [
    {
        country: "Afganistán",
        airports: [
            {
                name: "Kabul International Airport"
            },
            {
                name: "Herat Airport"
            }
        ]
    },
    {
        country: "Albania",
        airports: [
            {
                name: "Tirana International Airport Nënë Tereza"
            }
        ]
    },
    {
        country: "Alemania",
        airports: [
            {
                name: "Frankfurt Airport"
            },
            {
                name: "Munich Airport"
            }
        ]
    },
    {
        country: "Andorra",
        airports: [
            {
                name: "No commercial airports"
            }
        ]
    },
    {
        country: "Angola",
        airports: [
            {
                name: "Quatro de Fevereiro Airport"
            }
        ]
    },
    {
        country: "Anguila",
        airports: [
            {
                name: "Clayton J. Lloyd International Airport"
            }
        ]
    },
    {
        country: "Antártida",
        airports: [
            {
                name: "Teniente Rodolfo Marsh Martin Airport"
            }
        ]
    },
    {
        country: "Antigua y Barbuda",
        airports: [
            {
                name: "V.C. Bird International Airport"
            }
        ]
    },
    {
        country: "Arabia Saudí",
        airports: [
            {
                name: "King Khalid International Airport"
            },
            {
                name: "King Abdulaziz International Airport"
            }
        ]
    },
    {
        country: "Argelia",
        airports: [
            {
                name: "Houari Boumediene Airport"
            }
        ]
    },
    {
        country: "Argentina",
        airports: [
            {
                name: "Ministro Pistarini International Airport"
            },
            {
                name: "Jorge Newbery Airpark"
            }
        ]
    },
    {
        country: "Armenia",
        airports: [
            {
                name: "Zvartnots International Airport"
            }
        ]
    },
    {
        country: "Aruba",
        airports: [
            {
                name: "Queen Beatrix International Airport"
            }
        ]
    },
    {
        country: "Australia",
        airports: [
            {
                name: "Sydney Kingsford Smith International Airport"
            },
            {
                name: "Melbourne Airport"
            }
        ]
    },
    {
        country: "Austria",
        airports: [
            {
                name: "Vienna International Airport"
            }
        ]
    },
    {
        country: "Azerbaiyán",
        airports: [
            {
                name: "Heydar Aliyev International Airport"
            }
        ]
    },
    {
        country: "Bahamas",
        airports: [
            {
                name: "Lynden Pindling International Airport"
            }
        ]
    },
    {
        country: "Bangladés",
        airports: [
            {
                name: "Shahjalal International Airport"
            }
        ]
    },
    {
        country: "Barbados",
        airports: [
            {
                name: "Grantley Adams International Airport"
            }
        ]
    },
    {
        country: "Baréin",
        airports: [
            {
                name: "Bahrain International Airport"
            }
        ]
    },
    {
        country: "Bélgica",
        airports: [
            {
                name: "Brussels Airport"
            }
        ]
    },
    {
        country: "Belice",
        airports: [
            {
                name: "Philip S. W. Goldson International Airport"
            }
        ]
    },
    {
        country: "Benín",
        airports: [
            {
                name: "Cotonou Cadjehoun Airport"
            }
        ]
    },
    {
        country: "Bermudas",
        airports: [
            {
                name: "L.F. Wade International Airport"
            }
        ]
    },
    {
        country: "Bielorrusia",
        airports: [
            {
                name: "Minsk National Airport"
            }
        ]
    },
    {
        country: "Bolivia",
        airports: [
            {
                name: "Viru Viru International Airport"
            }
        ]
    },
    {
        country: "Bosnia y Herzegovina",
        airports: [
            {
                name: "Sarajevo International Airport"
            }
        ]
    },
    {
        country: "Botsuana",
        airports: [
            {
                name: "Sir Seretse Khama International Airport"
            }
        ]
    },
    {
        country: "Brasil",
        airports: [
            {
                name: "São Paulo–Guarulhos International Airport"
            },
            {
                name: "Rio de Janeiro–Galeão International Airport"
            }
        ]
    },
    {
        country: "Brunéi",
        airports: [
            {
                name: "Brunei International Airport"
            }
        ]
    },
    {
        country: "Bulgaria",
        airports: [
            {
                name: "Sofia Airport"
            }
        ]
    },
    {
        country: "Burkina Faso",
        airports: [
            {
                name: "Ouagadougou Airport"
            }
        ]
    },
    {
        country: "Burundi",
        airports: [
            {
                name: "Bujumbura International Airport"
            }
        ]
    },
    {
        country: "Bután",
        airports: [
            {
                name: "Paro Airport"
            }
        ]
    },
    {
        country: "Cabo Verde",
        airports: [
            {
                name: "Amílcar Cabral International Airport"
            }
        ]
    },
    {
        country: "Camboya",
        airports: [
            {
                name: "Phnom Penh International Airport"
            },
            {
                name: "Siem Reap International Airport"
            }
        ]
    },
    {
        country: "Camerún",
        airports: [
            {
                name: "Douala International Airport"
            }
        ]
    },
    {
        country: "Canadá",
        airports: [
            {
                name: "Toronto Pearson International Airport"
            },
            {
                name: "Vancouver International Airport"
            }
        ]
    },
    {
        country: "Caribe neerlandés",
        airports: [
            {
                name: "Flamingo International Airport"
            }
        ]
    },
    {
        country: "Catar",
        airports: [
            {
                name: "Hamad International Airport"
            }
        ]
    },
    {
        country: "Chad",
        airports: [
            {
                name: "N'Djamena International Airport"
            }
        ]
    },
    {
        country: "Chequia",
        airports: [
            {
                name: "Václav Havel Airport Prague"
            }
        ]
    },
    {
        country: "Chile",
        airports: [
            {
                name: "Comodoro Arturo Merino Benítez International Airport"
            }
        ]
    },
    {
        country: "China",
        airports: [
            {
                name: "Beijing Capital International Airport"
            },
            {
                name: "Shanghai Pudong International Airport"
            }
        ]
    },
    {
        country: "Chipre",
        airports: [
            {
                name: "Larnaca International Airport"
            }
        ]
    },
    {
        country: "Ciudad del Vaticano",
        airports: [
            {
                name: "No airports"
            }
        ]
    },
    {
        country: "Colombia",
        airports: [
            {
                name: "El Dorado International Airport"
            },
            {
                name: "José María Córdova International Airport"
            }
        ]
    },
    {
        country: "Comoras",
        airports: [
            {
                name: "Prince Said Ibrahim International Airport"
            }
        ]
    },
    {
        country: "Congo",
        airports: [
            {
                name: "Maya-Maya Airport"
            }
        ]
    },
    {
        country: "Corea del Norte",
        airports: [
            {
                name: "Pyongyang Sunan International Airport"
            }
        ]
    },
    {
        country: "Corea del Sur",
        airports: [
            {
                name: "Incheon International Airport"
            }
        ]
    },
    {
        country: "Costa de Marfil",
        airports: [
            {
                name: "Félix-Houphouët-Boigny International Airport"
            }
        ]
    },
    {
        country: "Costa Rica",
        airports: [
            {
                name: "Juan Santamaría International Airport"
            }
        ]
    },
    {
        country: "Croacia",
        airports: [
            {
                name: "Zagreb Airport"
            }
        ]
    },
    {
        country: "Cuba",
        airports: [
            {
                name: "José Martí International Airport"
            }
        ]
    },
    {
        country: "Curaçao",
        airports: [
            {
                name: "Curaçao International Airport"
            }
        ]
    },
    {
        country: "Dinamarca",
        airports: [
            {
                name: "Copenhagen Airport"
            }
        ]
    },
    {
        country: "Dominica",
        airports: [
            {
                name: "Douglas-Charles Airport"
            }
        ]
    },
    {
        country: "Ecuador",
        airports: [
            {
                name: "Mariscal Sucre International Airport"
            }
        ]
    },
    {
        country: "Egipto",
        airports: [
            {
                name: "Cairo International Airport"
            }
        ]
    },
    {
        country: "El Salvador",
        airports: [
            {
                name: "Monseñor Óscar Arnulfo Romero International Airport"
            }
        ]
    },
    {
        country: "Emiratos Árabes Unidos",
        airports: [
            {
                name: "Dubai International Airport"
            },
            {
                name: "Abu Dhabi International Airport"
            }
        ]
    },
    {
        country: "Eritrea",
        airports: [
            {
                name: "Asmara International Airport"
            }
        ]
    },
    {
        country: "Eslovaquia",
        airports: [
            {
                name: "M. R. Štefánik Airport"
            }
        ]
    },
    {
        country: "Eslovenia",
        airports: [
            {
                name: "Ljubljana Jože Pučnik Airport"
            }
        ]
    },
    {
        country: "España",
        airports: [
            {
                name: "Adolfo Suárez Madrid-Barajas Airport"
            },
            {
                name: "Barcelona-El Prat Airport"
            }
        ]
    },
    {
        country: "Estados Unidos",
        airports: [
            {
                name: "Hartsfield-Jackson Atlanta International Airport"
            },
            {
                name: "Los Angeles International Airport"
            }
        ]
    },
    {
        country: "Estonia",
        airports: [
            {
                name: "Lennart Meri Tallinn Airport"
            }
        ]
    },
    {
        country: "Etiopía",
        airports: [
            {
                name: "Addis Ababa Bole International Airport"
            }
        ]
    },
    {
        country: "Filipinas",
        airports: [
            {
                name: "Ninoy Aquino International Airport"
            }
        ]
    },
    {
        country: "Finlandia",
        airports: [
            {
                name: "Helsinki-Vantaa Airport"
            }
        ]
    },
    {
        country: "Fiyi",
        airports: [
            {
                name: "Nadi International Airport"
            }
        ]
    },
    {
        country: "Francia",
        airports: [
            {
                name: "Charles de Gaulle Airport"
            },
            {
                name: "Orly Airport"
            }
        ]
    },
    {
        country: "Gabón",
        airports: [
            {
                name: "Libreville International Airport"
            }
        ]
    },
    {
        country: "Gambia",
        airports: [
            {
                name: "Banjul International Airport"
            }
        ]
    },
    {
        country: "Georgia",
        airports: [
            {
                name: "Tbilisi International Airport"
            }
        ]
    },
    {
        country: "Ghana",
        airports: [
            {
                name: "Kotoka International Airport"
            }
        ]
    },
    {
        country: "Gibraltar",
        airports: [
            {
                name: "Gibraltar International Airport"
            }
        ]
    },
    {
        country: "Granada",
        airports: [
            {
                name: "Maurice Bishop International Airport"
            }
        ]
    },
    {
        country: "Grecia",
        airports: [
            {
                name: "Athens International Airport"
            }
        ]
    },
    {
        country: "Groenlandia",
        airports: [
            {
                name: "Nuuk Airport"
            }
        ]
    },
    {
        country: "Guadalupe",
        airports: [
            {
                name: "Pointe-à-Pitre International Airport"
            }
        ]
    },
    {
        country: "Guam",
        airports: [
            {
                name: "Antonio B. Won Pat International Airport"
            }
        ]
    },
    {
        country: "Guatemala",
        airports: [
            {
                name: "La Aurora International Airport"
            }
        ]
    },
    {
        country: "Guayana Francesa",
        airports: [
            {
                name: "Cayenne – Félix Eboué Airport"
            }
        ]
    },
    {
        country: "Guernsey",
        airports: [
            {
                name: "Guernsey Airport"
            }
        ]
    },
    {
        country: "Guinea",
        airports: [
            {
                name: "Conakry International Airport"
            }
        ]
    },
    {
        country: "Guinea-Bisáu",
        airports: [
            {
                name: "Osvaldo Vieira International Airport"
            }
        ]
    },
    {
        country: "Guinea Ecuatorial",
        airports: [
            {
                name: "Malabo International Airport"
            }
        ]
    },
    {
        country: "Guyana",
        airports: [
            {
                name: "Cheddi Jagan International Airport"
            }
        ]
    },
    {
        country: "Haití",
        airports: [
            {
                name: "Toussaint Louverture International Airport"
            }
        ]
    },
    {
        country: "Honduras",
        airports: [
            {
                name: "Toncontín International Airport"
            }
        ]
    },
    {
        country: "Hong kong",
        airports: [
            {
                name: "Hong Kong International Airport"
            }
        ]
    },
    {
        country: "Hungría",
        airports: [
            {
                name: "Budapest Ferenc Liszt International Airport"
            }
        ]
    },
    {
        country: "India",
        airports: [
            {
                name: "Indira Gandhi International Airport"
            },
            {
                name: "Chhatrapati Shivaji Maharaj International Airport"
            }
        ]
    },
    {
        country: "Indonesia",
        airports: [
            {
                name: "Soekarno-Hatta International Airport"
            }
        ]
    },
    {
        country: "Irán",
        airports: [
            {
                name: "Imam Khomeini International Airport"
            }
        ]
    },
    {
        country: "Irak",
        airports: [
            {
                name: "Baghdad International Airport"
            }
        ]
    },
    {
        country: "Irlanda",
        airports: [
            {
                name: "Dublin Airport"
            }
        ]
    },
    {
        country: "Isla de Man",
        airports: [
            {
                name: "Isle of Man Airport"
            }
        ]
    },
    {
        country: "Islandia",
        airports: [
            {
                name: "Keflavík International Airport"
            }
        ]
    },
    {
        country: "Islas Caimán",
        airports: [
            {
                name: "Owen Roberts International Airport"
            }
        ]
    },
    {
        country: "Islas Cook",
        airports: [
            {
                name: "Rarotonga International Airport"
            }
        ]
    },
    {
        country: "Islas Feroe",
        airports: [
            {
                name: "Vágar Airport"
            }
        ]
    },
    {
        country: "Islas Malvinas",
        airports: [
            {
                name: "Mount Pleasant Airport"
            }
        ]
    },
    {
        country: "Islas Marianas del Norte",
        airports: [
            {
                name: "Saipan International Airport"
            }
        ]
    },
    {
        country: "Islas Pitcairn",
        airports: [
            {
                name: "No airports"
            }
        ]
    },
    {
        country: "Islas Salomón",
        airports: [
            {
                name: "Honiara International Airport"
            }
        ]
    },
    {
        country: "Islas Turcas y Caicos",
        airports: [
            {
                name: "Providenciales International Airport"
            }
        ]
    },
    {
        country: "Islas Vírgenes Británicas",
        airports: [
            {
                name: "Terrance B. Lettsome International Airport"
            }
        ]
    },
    {
        country: "Islas Vírgenes de los Estados Unidos",
        airports: [
            {
                name: "Cyril E. King Airport"
            }
        ]
    },
    {
        country: "Israel",
        airports: [
            {
                name: "Ben Gurion Airport"
            }
        ]
    },
    {
        country: "Italia",
        airports: [
            {
                name: "Leonardo da Vinci–Fiumicino Airport"
            },
            {
                name: "Milan Malpensa Airport"
            }
        ]
    },
    {
        country: "Jamaica",
        airports: [
            {
                name: "Sangster International Airport"
            }
        ]
    },
    {
        country: "Japón",
        airports: [
            {
                name: "Narita International Airport"
            },
            {
                name: "Haneda Airport"
            }
        ]
    },
    {
        country: "Jersey",
        airports: [
            {
                name: "Jersey Airport"
            }
        ]
    },
    {
        country: "Jordania",
        airports: [
            {
                name: "Queen Alia International Airport"
            }
        ]
    },
    {
        country: "Kazajistán",
        airports: [
            {
                name: "Nursultan Nazarbayev International Airport"
            }
        ]
    },
    {
        country: "Kenia",
        airports: [
            {
                name: "Jomo Kenyatta International Airport"
            }
        ]
    },
    {
        country: "Kirguistán",
        airports: [
            {
                name: "Manas International Airport"
            }
        ]
    },
    {
        country: "Kiribati",
        airports: [
            {
                name: "Bonriki International Airport"
            }
        ]
    },
    {
        country: "Kosovo",
        airports: [
            {
                name: "Pristina International Airport"
            }
        ]
    },
    {
        country: "Kuwait",
        airports: [
            {
                name: "Kuwait International Airport"
            }
        ]
    },
    {
        country: "Laos",
        airports: [
            {
                name: "Wattay International Airport"
            }
        ]
    },
    {
        country: "Lesoto",
        airports: [
            {
                name: "Moshoeshoe I International Airport"
            }
        ]
    },
    {
        country: "Letonia",
        airports: [
            {
                name: "Riga International Airport"
            }
        ]
    },
    {
        country: "Líbano",
        airports: [
            {
                name: "Beirut-Rafic Hariri International Airport"
            }
        ]
    },
    {
        country: "Liberia",
        airports: [
            {
                name: "Roberts International Airport"
            }
        ]
    },
    {
        country: "Libia",
        airports: [
            {
                name: "Tripoli International Airport"
            }
        ]
    },
    {
        country: "Liechtenstein",
        airports: [
            {
                name: "No airports"
            }
        ]
    },
    {
        country: "Lituania",
        airports: [
            {
                name: "Vilnius Airport"
            }
        ]
    },
    {
        country: "Luxemburgo",
        airports: [
            {
                name: "Luxembourg Airport"
            }
        ]
    },
    {
        country: "Macao",
        airports: [
            {
                name: "Macau International Airport"
            }
        ]
    },
    {
        country: "Macedonia del Norte",
        airports: [
            {
                name: "Skopje International Airport"
            }
        ]
    },
    {
        country: "Madagascar",
        airports: [
            {
                name: "Ivato International Airport"
            }
        ]
    },
    {
        country: "Malasia",
        airports: [
            {
                name: "Kuala Lumpur International Airport"
            }
        ]
    },
    {
        country: "Malaui",
        airports: [
            {
                name: "Lilongwe International Airport"
            }
        ]
    },
    {
        country: "Maldivas",
        airports: [
            {
                name: "Velana International Airport"
            }
        ]
    },
    {
        country: "Malí",
        airports: [
            {
                name: "Modibo Keita International Airport"
            }
        ]
    },
    {
        country: "Malta",
        airports: [
            {
                name: "Malta International Airport"
            }
        ]
    },
    {
        country: "Marruecos",
        airports: [
            {
                name: "Mohammed V International Airport"
            }
        ]
    },
    {
        country: "Martinica",
        airports: [
            {
                name: "Martinique Aimé Césaire International Airport"
            }
        ]
    },
    {
        country: "Mauricio",
        airports: [
            {
                name: "Sir Seewoosagur Ramgoolam International Airport"
            }
        ]
    },
    {
        country: "Mauritania",
        airports: [
            {
                name: "Nouakchott–Oumtounsy International Airport"
            }
        ]
    },
    {
        country: "Mayotte",
        airports: [
            {
                name: "Dzaoudzi–Pamandzi International Airport"
            }
        ]
    },
    {
        country: "México",
        airports: [
            {
                name: "Mexico City International Airport"
            },
            {
                name: "Cancún International Airport"
            }
        ]
    },
    {
        country: "Micronesia",
        airports: [
            {
                name: "Pohnpei International Airport"
            }
        ]
    },
    {
        country: "Moldavia",
        airports: [
            {
                name: "Chișinău International Airport"
            }
        ]
    },
    {
        country: "Mónaco",
        airports: [
            {
                name: "No airports"
            }
        ]
    },
    {
        country: "Mongolia",
        airports: [
            {
                name: "Chinggis Khaan International Airport"
            }
        ]
    },
    {
        country: "Montenegro",
        airports: [
            {
                name: "Podgorica Airport"
            }
        ]
    },
    {
        country: "Montserrat",
        airports: [
            {
                name: "John A. Osborne Airport"
            }
        ]
    },
    {
        country: "Mozambique",
        airports: [
            {
                name: "Maputo International Airport"
            }
        ]
    },
    {
        country: "Myanmar (Birmania)",
        airports: [
            {
                name: "Yangon International Airport"
            }
        ]
    },
    {
        country: "Namibia",
        airports: [
            {
                name: "Hosea Kutako International Airport"
            }
        ]
    },
    {
        country: "Nauru",
        airports: [
            {
                name: "Nauru International Airport"
            }
        ]
    },
    {
        country: "Nepal",
        airports: [
            {
                name: "Tribhuvan International Airport"
            }
        ]
    },
    {
        country: "Nicaragua",
        airports: [
            {
                name: "Augusto C. Sandino International Airport"
            }
        ]
    },
    {
        country: "Níger",
        airports: [
            {
                name: "Diori Hamani International Airport"
            }
        ]
    },
    {
        country: "Nigeria",
        airports: [
            {
                name: "Murtala Muhammed International Airport"
            }
        ]
    },
    {
        country: "Niue",
        airports: [
            {
                name: "Niue International Airport"
            }
        ]
    },
    {
        country: "Noruega",
        airports: [
            {
                name: "Oslo Airport"
            }
        ]
    },
    {
        country: "Nueva Caledonia",
        airports: [
            {
                name: "La Tontouta International Airport"
            }
        ]
    },
    {
        country: "Nueva Zelanda",
        airports: [
            {
                name: "Auckland Airport"
            }
        ]
    },
    {
        country: "Omán",
        airports: [
            {
                name: "Muscat International Airport"
            }
        ]
    },
    {
        country: "Países Bajos",
        airports: [
            {
                name: "Amsterdam Airport Schiphol"
            }
        ]
    },
    {
        country: "Pakistán",
        airports: [
            {
                name: "Jinnah International Airport"
            }
        ]
    },
    {
        country: "Palaos",
        airports: [
            {
                name: "Roman Tmetuchl International Airport"
            }
        ]
    },
    {
        country: "Palestina",
        airports: [
            {
                name: "No airports"
            }
        ]
    },
    {
        country: "Panamá",
        airports: [
            {
                name: "Tocumen International Airport"
            }
        ]
    },
    {
        country: "Papúa Nueva Guinea",
        airports: [
            {
                name: "Jacksons International Airport"
            }
        ]
    },
    {
        country: "Paraguay",
        airports: [
            {
                name: "Silvio Pettirossi International Airport"
            }
        ]
    },
    {
        country: "Perú",
        airports: [
            {
                name: "Jorge Chávez International Airport"
            }
        ]
    },
    {
        country: "Polinesia Francesa",
        airports: [
            {
                name: "Faa'a International Airport"
            }
        ]
    },
    {
        country: "Polonia",
        airports: [
            {
                name: "Warsaw Chopin Airport"
            }
        ]
    },
    {
        country: "Portugal",
        airports: [
            {
                name: "Lisbon Portela Airport"
            }
        ]
    },
    {
        country: "Puerto Rico",
        airports: [
            {
                name: "Luis Muñoz Marín International Airport"
            }
        ]
    },
    {
        country: "Qatar",
        airports: [
            {
                name: "Hamad International Airport"
            }
        ]
    },
    {
        country: "Reino Unido",
        airports: [
            {
                name: "Heathrow Airport"
            }
        ]
    },
    {
        country: "República Centroafricana",
        airports: [
            {
                name: "Bangui M'Poko International Airport"
            }
        ]
    },
    {
        country: "República Checa",
        airports: [
            {
                name: "Václav Havel Airport Prague"
            }
        ]
    },
    {
        country: "República Democrática del Congo",
        airports: [
            {
                name: "N'djili Airport"
            }
        ]
    },
    {
        country: "República Dominicana",
        airports: [
            {
                name: "Punta Cana International Airport"
            }
        ]
    },
    {
        country: "Ruanda",
        airports: [
            {
                name: "Kigali International Airport"
            }
        ]
    },
    {
        country: "Rumania",
        airports: [
            {
                name: "Henri Coandă International Airport"
            }
        ]
    },
    {
        country: "Rusia",
        airports: [
            {
                name: "Sheremetyevo International Airport"
            }
        ]
    },
    {
        country: "Samoa",
        airports: [
            {
                name: "Faleolo International Airport"
            }
        ]
    },
    {
        country: "San Cristóbal y Nieves",
        airports: [
            {
                name: "Robert L. Bradshaw International Airport"
            }
        ]
    },
    {
        country: "San Marino",
        airports: [
            {
                name: "No airports"
            }
        ]
    },
    {
        country: "San Vicente y las Granadinas",
        airports: [
            {
                name: "Argyle International Airport"
            }
        ]
    },
    {
        country: "Santa Lucía",
        airports: [
            {
                name: "Hewanorra International Airport"
            }
        ]
    },
    {
        country: "Santo Tomé y Príncipe",
        airports: [
            {
                name: "São Tomé International Airport"
            }
        ]
    },
    {
        country: "Senegal",
        airports: [
            {
                name: "Blaise Diagne International Airport"
            }
        ]
    },
    {
        country: "Serbia",
        airports: [
            {
                name: "Belgrade Nikola Tesla Airport"
            }
        ]
    },
    {
        country: "Seychelles",
        airports: [
            {
                name: "Seychelles International Airport"
            }
        ]
    },
    {
        country: "Sierra Leona",
        airports: [
            {
                name: "Lungi International Airport"
            }
        ]
    },
    {
        country: "Singapur",
        airports: [
            {
                name: "Singapore Changi Airport"
            }
        ]
    },
    {
        country: "Sint Maarten",
        airports: [
            {
                name: "Princess Juliana International Airport"
            }
        ]
    },
    {
        country: "Siria",
        airports: [
            {
                name: "Damascus International Airport"
            }
        ]
    },
    {
        country: "Somalia",
        airports: [
            {
                name: "Aden Adde International Airport"
            }
        ]
    },
    {
        country: "Sri Lanka",
        airports: [
            {
                name: "Bandaranaike International Airport"
            }
        ]
    },
    {
        country: "Suazilandia",
        airports: [
            {
                name: "King Mswati III International Airport"
            }
        ]
    },
    {
        country: "Sudáfrica",
        airports: [
            {
                name: "O. R. Tambo International Airport"
            }
        ]
    },
    {
        country: "Sudán",
        airports: [
            {
                name: "Khartoum International Airport"
            }
        ]
    },
    {
        country: "Sudán del Sur",
        airports: [
            {
                name: "Juba International Airport"
            }
        ]
    },
    {
        country: "Suecia",
        airports: [
            {
                name: "Stockholm Arlanda Airport"
            }
        ]
    },
    {
        country: "Suiza",
        airports: [
            {
                name: "Zurich Airport"
            }
        ]
    },
    {
        country: "Surinam",
        airports: [
            {
                name: "Johan Adolf Pengel International Airport"
            }
        ]
    },
    {
        country: "Tailandia",
        airports: [
            {
                name: "Suvarnabhumi Airport"
            }
        ]
    },
    {
        country: "Tanzania",
        airports: [
            {
                name: "Julius Nyerere International Airport"
            }
        ]
    },
    {
        country: "Tayikistán",
        airports: [
            {
                name: "Dushanbe International Airport"
            }
        ]
    },
    {
        country: "Timor-Leste",
        airports: [
            {
                name: "Presidente Nicolau Lobato International Airport"
            }
        ]
    },
    {
        country: "Togo",
        airports: [
            {
                name: "Lomé–Tokoin International Airport"
            }
        ]
    },
    {
        country: "Tokelau",
        airports: [
            {
                name: "No airports"
            }
        ]
    },
    {
        country: "Tonga",
        airports: [
            {
                name: "Fuaʻamotu International Airport"
            }
        ]
    },
    {
        country: "Trinidad y Tobago",
        airports: [
            {
                name: "Piarco International Airport"
            }
        ]
    },
    {
        country: "Túnez",
        airports: [
            {
                name: "Tunis–Carthage International Airport"
            }
        ]
    },
    {
        country: "Turkmenistán",
        airports: [
            {
                name: "Ashgabat International Airport"
            }
        ]
    },
    {
        country: "Turquía",
        airports: [
            {
                name: "Istanbul Airport"
            }
        ]
    },
    {
        country: "Tuvalu",
        airports: [
            {
                "name": "Aeropuerto Internacional de Funafuti"
            }
        ]
    },
    {
        country: "Ucrania",
        airports: [
            {
                "name": "Aeropuerto Internacional Boryspil (KBP)"
            }
        ]
    },
    {
        country: "Uganda",
        airports: [
            {
                "name": "Aeropuerto Internacional de Entebbe (EBB)"
            }
        ]
    },
    {
        country: "Uruguay",
        airports: [
            {
                "name": "Aeropuerto Internacional de Carrasco (MVD)"
            }
        ]
    },
    {
        country: "Uzbekistán",
        airports: [
            {
                "name": "Aeropuerto Internacional de Tashkent (TAS)"
            }
        ]
    },
    {
        country: "Vanuatu",
        airports: [
            {
                "name": "Aeropuerto Internacional Bauerfield (VLI)"
            }
        ]
    },
    {
        country: "Venezuela",
        airports: [
            {
                "name": "Aeropuerto Internacional Simón Bolívar (CCS)"
            }
        ]
    },
    {
        country: "Vietnam",
        airports: [
            {
                "name": "Aeropuerto Internacional Tan Son Nhat (SGN)"
            }
        ]
    },
    {
        country: "Wallis y Futuna",
        airports: [
            {
                "name": "Aeropuerto de Hihifo (WLS)"
            }
        ]
    },
    {
        country: "Yemen",
        airports: [
            {
                "name": "Aeropuerto Internacional de Sana'a (SAH)"
            }
        ]
    },
    {
        country: "Yibuti",
        airports: [
            {
                "name": "Aeropuerto Internacional de Yibuti-Ambouli (JIB)"
            }
        ]
    },
    {
        country: "Zambia",
        airports: [
            {
                "name": "Aeropuerto Internacional de Kenneth Kaunda (LUN)"
            }
        ]
    },
    {
        country: "Zimbabue",
        airports: [
            {
                "name": "Aeropuerto Internacional de Harare (HRE)"
            }
        ]
    }
    
]

export const airportData = airports.map(airport => ({
    country: airport.country,
    airports: airport.airports
}))