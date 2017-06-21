var answer = [];
var state = process.argv[2];
console.log(state);
const clients = [
  {
    "id": 1,
    "rep_name": "Xymenes Dewer",
    "company": "Beahan, Swift and Hoppe",
    "no_employees": 742,
    "phone": "1-(863)994-6147",
    "city": "Lakeland",
    "state": "Florida",
    "created_at": "11/4/2003"
  },
  {
    "id": 2,
    "rep_name": "Hubert Havik",
    "company": "Wisoky LLC",
    "no_employees": 976,
    "phone": "1-(915)461-7714",
    "city": "El Paso",
    "state": "Texas",
    "created_at": "5/12/1993"
  },
  {
    "id": 3,
    "rep_name": "Ronnie Benasik",
    "company": "Abbott-Bins",
    "no_employees": 192,
    "phone": "1-(617)668-9817",
    "city": "Boston",
    "state": "Massachusetts",
    "created_at": "6/26/2001"
  },
  {
    "id": 4,
    "rep_name": "Forrest Valdes",
    "company": "Beier, Hane and Purdy",
    "no_employees": 1827,
    "phone": "1-(770)812-6918",
    "city": "Norcross",
    "state": "Georgia",
    "created_at": "4/3/2015"
  },
  {
    "id": 5,
    "rep_name": "Renado Beynon",
    "company": "Bruen Inc",
    "no_employees": 1883,
    "phone": "1-(843)969-2349",
    "city": "Charleston",
    "state": "South Carolina",
    "created_at": "10/26/1996"
  },
  {
    "id": 6,
    "rep_name": "Forester Schulter",
    "company": "Koelpin-Shields",
    "no_employees": 430,
    "phone": "1-(334)795-5655",
    "city": "Montgomery",
    "state": "Alabama",
    "created_at": "8/7/1996"
  },
  {
    "id": 7,
    "rep_name": "Adena Rymmer",
    "company": "Schuster-Hilpert",
    "no_employees": 1830,
    "phone": "1-(406)901-0634",
    "city": "Bozeman",
    "state": "Montana",
    "created_at": "10/13/1994"
  },
  {
    "id": 8,
    "rep_name": "Galina Essex",
    "company": "Haley, Fahey and Gutmann",
    "no_employees": 1068,
    "phone": "1-(914)708-5214",
    "city": "Bronx",
    "state": "New York",
    "created_at": "3/27/1993"
  },
  {
    "id": 9,
    "rep_name": "Rurik Pakeman",
    "company": "Hirthe-Lindgren",
    "no_employees": 1586,
    "phone": "1-(406)948-5221",
    "city": "Billings",
    "state": "Montana",
    "created_at": "2/22/1997"
  },
  {
    "id": 10,
    "rep_name": "Egbert Niess",
    "company": "Wolf and Sons",
    "no_employees": 62,
    "phone": "1-(317)927-5563",
    "city": "Indianapolis",
    "state": "Indiana",
    "created_at": "1/31/2010"
  },
  {
    "id": 11,
    "rep_name": "Tully Ceresa",
    "company": "Herzog, Thompson and Pouros",
    "no_employees": 145,
    "phone": "1-(312)568-5139",
    "city": "Chicago",
    "state": "Illinois",
    "created_at": "8/28/1998"
  },
  {
    "id": 12,
    "rep_name": "Barbabra Goudge",
    "company": "Weimann-Beatty",
    "no_employees": 1155,
    "phone": "1-(405)654-7387",
    "city": "Oklahoma City",
    "state": "Oklahoma",
    "created_at": "1/11/2017"
  },
  {
    "id": 13,
    "rep_name": "Sharron Tosh",
    "company": "Abernathy-Schuster",
    "no_employees": 1800,
    "phone": "1-(562)758-3202",
    "city": "Long Beach",
    "state": "California",
    "created_at": "4/12/1996"
  },
  {
    "id": 14,
    "rep_name": "Alverta Lanfer",
    "company": "Runolfsson and Sons",
    "no_employees": 78,
    "phone": "1-(757)994-0443",
    "city": "Norfolk",
    "state": "Virginia",
    "created_at": "11/21/2000"
  },
  {
    "id": 15,
    "rep_name": "Huntlee Skelton",
    "company": "Koss and Sons",
    "no_employees": 1201,
    "phone": "1-(313)116-6075",
    "city": "Detroit",
    "state": "Michigan",
    "created_at": "6/25/1999"
  },
  {
    "id": 16,
    "rep_name": "Tomasine Blade",
    "company": "Stokes LLC",
    "no_employees": 1940,
    "phone": "1-(216)434-1807",
    "city": "Cleveland",
    "state": "Ohio",
    "created_at": "10/12/2016"
  },
  {
    "id": 17,
    "rep_name": "Ahmad Bourthouloume",
    "company": "Bartoletti-Tremblay",
    "no_employees": 1787,
    "phone": "1-(352)965-0317",
    "city": "Gainesville",
    "state": "Florida",
    "created_at": "3/29/2005"
  },
  {
    "id": 18,
    "rep_name": "Julie Adin",
    "company": "Hammes, Stehr and Von",
    "no_employees": 1582,
    "phone": "1-(704)434-2421",
    "city": "Charlotte",
    "state": "North Carolina",
    "created_at": "7/25/2007"
  },
  {
    "id": 19,
    "rep_name": "Fay Embra",
    "company": "Smitham, Botsford and Runolfsson",
    "no_employees": 1582,
    "phone": "1-(716)281-9383",
    "city": "Buffalo",
    "state": "New York",
    "created_at": "12/27/2006"
  },
  {
    "id": 20,
    "rep_name": "Malchy Jahner",
    "company": "Crona Inc",
    "no_employees": 1285,
    "phone": "1-(937)629-9114",
    "city": "Hamilton",
    "state": "Ohio",
    "created_at": "6/6/1998"
  },
  {
    "id": 21,
    "rep_name": "Rainer Gymblett",
    "company": "Brekke-McKenzie",
    "no_employees": 727,
    "phone": "1-(682)458-7671",
    "city": "Fort Worth",
    "state": "Texas",
    "created_at": "6/19/2000"
  },
  {
    "id": 22,
    "rep_name": "Maisey O'Kennavain",
    "company": "Williamson, Beatty and Sauer",
    "no_employees": 1583,
    "phone": "1-(203)170-0803",
    "city": "New Haven",
    "state": "Connecticut",
    "created_at": "10/14/2002"
  },
  {
    "id": 23,
    "rep_name": "Ellery Linzey",
    "company": "Eichmann Inc",
    "no_employees": 1357,
    "phone": "1-(202)210-6292",
    "city": "Washington",
    "state": "District of Columbia",
    "created_at": "11/21/2013"
  },
  {
    "id": 24,
    "rep_name": "Etan Chastang",
    "company": "Herman Inc",
    "no_employees": 1733,
    "phone": "1-(318)661-8674",
    "city": "Boston",
    "state": "Massachusetts",
    "created_at": "4/3/2004"
  },
  {
    "id": 25,
    "rep_name": "Axe McMillan",
    "company": "Davis, Reilly and Rolfson",
    "no_employees": 828,
    "phone": "1-(410)177-4909",
    "city": "Annapolis",
    "state": "Maryland",
    "created_at": "10/3/1991"
  },
  {
    "id": 26,
    "rep_name": "Nikolaos Laise",
    "company": "Skiles Group",
    "no_employees": 311,
    "phone": "1-(817)496-2796",
    "city": "Fort Worth",
    "state": "Texas",
    "created_at": "6/17/1992"
  },
  {
    "id": 27,
    "rep_name": "Gordy Iglesias",
    "company": "Crooks-Rodriguez",
    "no_employees": 11,
    "phone": "1-(713)267-3572",
    "city": "Houston",
    "state": "Texas",
    "created_at": "8/22/2005"
  },
  {
    "id": 28,
    "rep_name": "Ringo Gerbi",
    "company": "Pfeffer, Kris and Walter",
    "no_employees": 642,
    "phone": "1-(970)782-7355",
    "city": "Grand Junction",
    "state": "Colorado",
    "created_at": "1/26/1991"
  },
  {
    "id": 29,
    "rep_name": "Brigida Menichelli",
    "company": "Sipes-Turner",
    "no_employees": 194,
    "phone": "1-(405)136-2526",
    "city": "Oklahoma City",
    "state": "Oklahoma",
    "created_at": "7/19/1999"
  },
  {
    "id": 30,
    "rep_name": "Freeland Wagstaff",
    "company": "Smith LLC",
    "no_employees": 1772,
    "phone": "1-(816)701-5450",
    "city": "Kansas City",
    "state": "Missouri",
    "created_at": "4/9/1992"
  },
  {
    "id": 31,
    "rep_name": "Kermy Ingarfield",
    "company": "Dickinson, Koch and Gusikowski",
    "no_employees": 56,
    "phone": "1-(205)661-2023",
    "city": "Birmingham",
    "state": "Alabama",
    "created_at": "4/2/2007"
  },
  {
    "id": 32,
    "rep_name": "Jaymee Harrild",
    "company": "Bernhard, Kiehn and Tromp",
    "no_employees": 941,
    "phone": "1-(202)915-4153",
    "city": "Washington",
    "state": "District of Columbia",
    "created_at": "1/27/2007"
  },
  {
    "id": 33,
    "rep_name": "Harli Fearn",
    "company": "Beatty LLC",
    "no_employees": 636,
    "phone": "1-(303)132-1355",
    "city": "Boulder",
    "state": "Colorado",
    "created_at": "12/30/1996"
  },
  {
    "id": 34,
    "rep_name": "Hadlee Kennet",
    "company": "Crooks LLC",
    "no_employees": 1467,
    "phone": "1-(307)645-5507",
    "city": "Cheyenne",
    "state": "Wyoming",
    "created_at": "7/15/1996"
  },
  {
    "id": 35,
    "rep_name": "Doralia Beaver",
    "company": "Considine-Hammes",
    "no_employees": 858,
    "phone": "1-(304)709-1801",
    "city": "Huntington",
    "state": "West Virginia",
    "created_at": "7/13/2010"
  },
  {
    "id": 36,
    "rep_name": "Hall Rothchild",
    "company": "Johns-Collins",
    "no_employees": 1026,
    "phone": "1-(352)599-7930",
    "city": "Gainesville",
    "state": "Florida",
    "created_at": "5/3/2004"
  },
  {
    "id": 37,
    "rep_name": "Larisa Tremblot",
    "company": "Schroeder Inc",
    "no_employees": 1117,
    "phone": "1-(404)778-8749",
    "city": "Atlanta",
    "state": "Georgia",
    "created_at": "1/20/2013"
  },
  {
    "id": 38,
    "rep_name": "Rosemary Pidgen",
    "company": "Goodwin, Reynolds and Fadel",
    "no_employees": 219,
    "phone": "1-(571)437-3806",
    "city": "Arlington",
    "state": "Virginia",
    "created_at": "6/29/1992"
  },
  {
    "id": 39,
    "rep_name": "Willyt Yeliashev",
    "company": "Zieme, Larkin and Trantow",
    "no_employees": 627,
    "phone": "1-(352)837-4273",
    "city": "Spring Hill",
    "state": "Florida",
    "created_at": "3/10/2013"
  },
  {
    "id": 40,
    "rep_name": "Brooks Debow",
    "company": "Price-Gusikowski",
    "no_employees": 1696,
    "phone": "1-(941)989-2297",
    "city": "Seminole",
    "state": "Florida",
    "created_at": "2/9/2007"
  },
  {
    "id": 41,
    "rep_name": "Cecilio Pluthero",
    "company": "Price, Mosciski and O'Keefe",
    "no_employees": 1075,
    "phone": "1-(415)187-4566",
    "city": "San Francisco",
    "state": "California",
    "created_at": "5/12/2004"
  },
  {
    "id": 42,
    "rep_name": "Fifine Antonopoulos",
    "company": "Raynor Inc",
    "no_employees": 864,
    "phone": "1-(904)271-9357",
    "city": "Jacksonville",
    "state": "Florida",
    "created_at": "1/4/2008"
  },
  {
    "id": 43,
    "rep_name": "Netti Brimson",
    "company": "Konopelski LLC",
    "no_employees": 1682,
    "phone": "1-(719)371-9171",
    "city": "Colorado Springs",
    "state": "Colorado",
    "created_at": "11/7/2009"
  },
  {
    "id": 44,
    "rep_name": "Hieronymus Cordelette",
    "company": "Lockman LLC",
    "no_employees": 1260,
    "phone": "1-(212)888-9034",
    "city": "Brooklyn",
    "state": "New York",
    "created_at": "12/3/1991"
  },
  {
    "id": 45,
    "rep_name": "Milena Beach",
    "company": "Kilback, Jacobs and Wiegand",
    "no_employees": 1101,
    "phone": "1-(626)485-2436",
    "city": "Pasadena",
    "state": "California",
    "created_at": "6/20/1995"
  },
  {
    "id": 46,
    "rep_name": "Cordelia Dobrowski",
    "company": "O'Kon-King",
    "no_employees": 1960,
    "phone": "1-(812)283-1416",
    "city": "Bloomington",
    "state": "Indiana",
    "created_at": "3/11/1992"
  },
  {
    "id": 47,
    "rep_name": "Caty Marrett",
    "company": "Mertz Inc",
    "no_employees": 1188,
    "phone": "1-(305)691-9742",
    "city": "Miami",
    "state": "Florida",
    "created_at": "6/6/1999"
  },
  {
    "id": 48,
    "rep_name": "Austin Gonoude",
    "company": "Cummerata, Larson and Pfannerstill",
    "no_employees": 1821,
    "phone": "1-(714)139-3256",
    "city": "Irvine",
    "state": "California",
    "created_at": "6/22/1994"
  },
  {
    "id": 49,
    "rep_name": "Britte Shapera",
    "company": "Corkery, Ernser and VonRueden",
    "no_employees": 1249,
    "phone": "1-(305)933-3983",
    "city": "Miami",
    "state": "Florida",
    "created_at": "7/14/2005"
  },
  {
    "id": 50,
    "rep_name": "Clarette Calfe",
    "company": "Raynor-Wilkinson",
    "no_employees": 161,
    "phone": "1-(904)288-0360",
    "city": "Jacksonville",
    "state": "Florida",
    "created_at": "7/20/1990"
  },
  {
    "id": 51,
    "rep_name": "Even Earland",
    "company": "Kirlin and Sons",
    "no_employees": 1311,
    "phone": "1-(704)411-7388",
    "city": "Charlotte",
    "state": "North Carolina",
    "created_at": "7/1/2016"
  },
  {
    "id": 52,
    "rep_name": "Orelle Dies",
    "company": "Auer and Sons",
    "no_employees": 1127,
    "phone": "1-(717)550-2435",
    "city": "Harrisburg",
    "state": "Pennsylvania",
    "created_at": "12/18/2010"
  },
  {
    "id": 53,
    "rep_name": "Carrol Umbers",
    "company": "Willms and Sons",
    "no_employees": 496,
    "phone": "1-(813)343-4338",
    "city": "Tampa",
    "state": "Florida",
    "created_at": "3/25/2006"
  },
  {
    "id": 54,
    "rep_name": "Whitman Ropkins",
    "company": "Ullrich Group",
    "no_employees": 1649,
    "phone": "1-(740)542-2870",
    "city": "Columbus",
    "state": "Ohio",
    "created_at": "11/20/1992"
  },
  {
    "id": 55,
    "rep_name": "Nikolos Loan",
    "company": "Lowe LLC",
    "no_employees": 1621,
    "phone": "1-(304)975-4020",
    "city": "Huntington",
    "state": "West Virginia",
    "created_at": "1/31/1995"
  },
  {
    "id": 56,
    "rep_name": "Adolf Licas",
    "company": "Rogahn-Strosin",
    "no_employees": 1815,
    "phone": "1-(402)622-7340",
    "city": "Omaha",
    "state": "Nebraska",
    "created_at": "11/21/1993"
  },
  {
    "id": 57,
    "rep_name": "Averyl Etheredge",
    "company": "Rippin-Prohaska",
    "no_employees": 539,
    "phone": "1-(714)594-3508",
    "city": "San Jose",
    "state": "California",
    "created_at": "1/28/2002"
  },
  {
    "id": 58,
    "rep_name": "Manya Edmons",
    "company": "Larkin Group",
    "no_employees": 1201,
    "phone": "1-(718)402-4361",
    "city": "Jamaica",
    "state": "New York",
    "created_at": "2/11/1994"
  },
  {
    "id": 59,
    "rep_name": "Justen Carragher",
    "company": "Bradtke LLC",
    "no_employees": 1705,
    "phone": "1-(812)974-3861",
    "city": "Bloomington",
    "state": "Indiana",
    "created_at": "8/25/1995"
  },
  {
    "id": 60,
    "rep_name": "Rahal Skokoe",
    "company": "Collier and Sons",
    "no_employees": 36,
    "phone": "1-(612)397-5414",
    "city": "Minneapolis",
    "state": "Minnesota",
    "created_at": "4/4/2006"
  },
  {
    "id": 61,
    "rep_name": "Cammie Rediers",
    "company": "Zboncak-Bashirian",
    "no_employees": 284,
    "phone": "1-(919)490-0704",
    "city": "Raleigh",
    "state": "North Carolina",
    "created_at": "11/4/2001"
  },
  {
    "id": 62,
    "rep_name": "Hillary Bourgour",
    "company": "Tillman-Anderson",
    "no_employees": 345,
    "phone": "1-(239)747-7794",
    "city": "Naples",
    "state": "Florida",
    "created_at": "12/17/1990"
  },
  {
    "id": 63,
    "rep_name": "Clayton Blumer",
    "company": "Jaskolski, Reilly and Grant",
    "no_employees": 774,
    "phone": "1-(309)392-5604",
    "city": "Bloomington",
    "state": "Illinois",
    "created_at": "12/21/1998"
  },
  {
    "id": 64,
    "rep_name": "George Bassford",
    "company": "Roberts Inc",
    "no_employees": 1819,
    "phone": "1-(727)194-7422",
    "city": "Clearwater",
    "state": "Florida",
    "created_at": "10/2/2015"
  },
  {
    "id": 65,
    "rep_name": "Tine Rosenthal",
    "company": "Hammes, Streich and Moore",
    "no_employees": 752,
    "phone": "1-(915)563-7691",
    "city": "El Paso",
    "state": "Texas",
    "created_at": "3/18/2010"
  },
  {
    "id": 66,
    "rep_name": "Onofredo Spurrett",
    "company": "Pfannerstill LLC",
    "no_employees": 100,
    "phone": "1-(989)522-3056",
    "city": "Saginaw",
    "state": "Michigan",
    "created_at": "12/1/2002"
  },
  {
    "id": 67,
    "rep_name": "Thekla Djokovic",
    "company": "Gulgowski-Ritchie",
    "no_employees": 650,
    "phone": "1-(915)297-8889",
    "city": "El Paso",
    "state": "Texas",
    "created_at": "7/2/1992"
  },
  {
    "id": 68,
    "rep_name": "Margalit Silverlock",
    "company": "Macejkovic Inc",
    "no_employees": 968,
    "phone": "1-(484)221-6921",
    "city": "Reading",
    "state": "Pennsylvania",
    "created_at": "10/28/2008"
  },
  {
    "id": 69,
    "rep_name": "Upton MacDiarmond",
    "company": "Simonis, Anderson and Mitchell",
    "no_employees": 1213,
    "phone": "1-(253)582-1782",
    "city": "Tacoma",
    "state": "Washington",
    "created_at": "5/25/1995"
  },
  {
    "id": 70,
    "rep_name": "Tim Biernacki",
    "company": "Simonis, Cormier and Raynor",
    "no_employees": 1733,
    "phone": "1-(713)825-7205",
    "city": "Houston",
    "state": "Texas",
    "created_at": "2/17/1996"
  },
  {
    "id": 71,
    "rep_name": "Gil Gatland",
    "company": "Wuckert-Schneider",
    "no_employees": 481,
    "phone": "1-(716)123-4394",
    "city": "Buffalo",
    "state": "New York",
    "created_at": "5/10/2013"
  },
  {
    "id": 72,
    "rep_name": "Annecorinne Kirkbright",
    "company": "Hessel, McLaughlin and Hammes",
    "no_employees": 1675,
    "phone": "1-(859)440-3847",
    "city": "Lexington",
    "state": "Kentucky",
    "created_at": "1/5/1991"
  },
  {
    "id": 73,
    "rep_name": "Wynnie Rodell",
    "company": "Quigley, Halvorson and Ankunding",
    "no_employees": 1920,
    "phone": "1-(765)595-8179",
    "city": "Lafayette",
    "state": "Indiana",
    "created_at": "10/16/2009"
  },
  {
    "id": 74,
    "rep_name": "Micheal Nicolls",
    "company": "Aufderhar, Bednar and Medhurst",
    "no_employees": 1434,
    "phone": "1-(205)368-2470",
    "city": "Birmingham",
    "state": "Alabama",
    "created_at": "12/4/1993"
  },
  {
    "id": 75,
    "rep_name": "Adamo Maria",
    "company": "O'Kon, Olson and Corwin",
    "no_employees": 452,
    "phone": "1-(719)359-3308",
    "city": "Pueblo",
    "state": "Colorado",
    "created_at": "2/11/2014"
  },
  {
    "id": 76,
    "rep_name": "Mariska Crossley",
    "company": "Walsh, Harvey and Pagac",
    "no_employees": 1860,
    "phone": "1-(713)204-3911",
    "city": "Pasadena",
    "state": "Texas",
    "created_at": "6/10/2002"
  },
  {
    "id": 77,
    "rep_name": "Gabrielle Melville",
    "company": "Ratke and Sons",
    "no_employees": 450,
    "phone": "1-(973)418-5911",
    "city": "Paterson",
    "state": "New Jersey",
    "created_at": "3/18/2008"
  },
  {
    "id": 78,
    "rep_name": "Lazar Seabridge",
    "company": "Fadel, Emmerich and Hintz",
    "no_employees": 837,
    "phone": "1-(412)239-0896",
    "city": "Mc Keesport",
    "state": "Pennsylvania",
    "created_at": "8/20/2014"
  },
  {
    "id": 79,
    "rep_name": "Sumner Hyman",
    "company": "Leannon-Wilkinson",
    "no_employees": 1713,
    "phone": "1-(801)755-6470",
    "city": "Salt Lake City",
    "state": "Utah",
    "created_at": "8/2/1990"
  },
  {
    "id": 80,
    "rep_name": "Carmelia Olpin",
    "company": "Balistreri, Gorczany and Hettinger",
    "no_employees": 800,
    "phone": "1-(619)325-1130",
    "city": "San Diego",
    "state": "California",
    "created_at": "2/10/1999"
  },
  {
    "id": 81,
    "rep_name": "Inness Di Matteo",
    "company": "Cormier-Spencer",
    "no_employees": 1374,
    "phone": "1-(954)514-5505",
    "city": "Pompano Beach",
    "state": "Florida",
    "created_at": "4/30/1997"
  },
  {
    "id": 82,
    "rep_name": "Alyss Darrigoe",
    "company": "Schmidt Inc",
    "no_employees": 1213,
    "phone": "1-(484)372-1280",
    "city": "Reading",
    "state": "Pennsylvania",
    "created_at": "4/15/1993"
  },
  {
    "id": 83,
    "rep_name": "Ferdinanda Jamot",
    "company": "Thompson-Roob",
    "no_employees": 1933,
    "phone": "1-(805)818-5262",
    "city": "Oxnard",
    "state": "California",
    "created_at": "2/28/1991"
  },
  {
    "id": 84,
    "rep_name": "Sayers Blundon",
    "company": "Flatley, Beer and Boyle",
    "no_employees": 94,
    "phone": "1-(970)698-2206",
    "city": "Greeley",
    "state": "Colorado",
    "created_at": "1/25/1997"
  },
  {
    "id": 85,
    "rep_name": "Archy Mazzia",
    "company": "Feeney, Wintheiser and Cummings",
    "no_employees": 780,
    "phone": "1-(651)464-4602",
    "city": "Saint Paul",
    "state": "Minnesota",
    "created_at": "10/27/1992"
  },
  {
    "id": 86,
    "rep_name": "Arty Tytler",
    "company": "Jerde-Roob",
    "no_employees": 506,
    "phone": "1-(212)632-8106",
    "city": "New York City",
    "state": "New York",
    "created_at": "2/24/2009"
  },
  {
    "id": 87,
    "rep_name": "Brucie Rushman",
    "company": "Jacobs Group",
    "no_employees": 1032,
    "phone": "1-(501)735-8865",
    "city": "Little Rock",
    "state": "Arkansas",
    "created_at": "9/12/2010"
  },
  {
    "id": 88,
    "rep_name": "Isa Laherty",
    "company": "McGlynn Group",
    "no_employees": 1803,
    "phone": "1-(585)318-8774",
    "city": "Rochester",
    "state": "New York",
    "created_at": "9/14/2004"
  },
  {
    "id": 89,
    "rep_name": "Georgiana Haws",
    "company": "Volkman-Koelpin",
    "no_employees": 1563,
    "phone": "1-(702)983-3508",
    "city": "Las Vegas",
    "state": "Nevada",
    "created_at": "3/15/2005"
  },
  {
    "id": 90,
    "rep_name": "Erie Sims",
    "company": "Sanford-Willms",
    "no_employees": 711,
    "phone": "1-(818)884-6637",
    "city": "Torrance",
    "state": "California",
    "created_at": "1/15/2013"
  },
  {
    "id": 91,
    "rep_name": "Bentley Werrett",
    "company": "DuBuque, Roob and Berge",
    "no_employees": 784,
    "phone": "1-(774)805-8082",
    "city": "Worcester",
    "state": "Massachusetts",
    "created_at": "1/1/2017"
  },
  {
    "id": 92,
    "rep_name": "Jeromy Upston",
    "company": "Maggio, Monahan and Feest",
    "no_employees": 980,
    "phone": "1-(781)100-7092",
    "city": "Boston",
    "state": "Massachusetts",
    "created_at": "5/3/2005"
  },
  {
    "id": 93,
    "rep_name": "Garrick Lucey",
    "company": "Rau and Sons",
    "no_employees": 1906,
    "phone": "1-(212)961-7673",
    "city": "New York City",
    "state": "New York",
    "created_at": "9/16/2014"
  },
  {
    "id": 94,
    "rep_name": "Brok Brogiotti",
    "company": "Smith and Sons",
    "no_employees": 1681,
    "phone": "1-(615)146-1209",
    "city": "Nashville",
    "state": "Tennessee",
    "created_at": "8/13/1995"
  },
  {
    "id": 95,
    "rep_name": "Larina Neasam",
    "company": "Heaney LLC",
    "no_employees": 1610,
    "phone": "1-(612)876-8095",
    "city": "Minneapolis",
    "state": "Minnesota",
    "created_at": "10/18/1991"
  },
  {
    "id": 96,
    "rep_name": "Meggy Russel",
    "company": "Wolff-Sawayn",
    "no_employees": 1297,
    "phone": "1-(937)306-4777",
    "city": "Hamilton",
    "state": "Ohio",
    "created_at": "5/31/2016"
  },
  {
    "id": 97,
    "rep_name": "Vitia Skeech",
    "company": "Harvey-Jakubowski",
    "no_employees": 1713,
    "phone": "1-(313)291-6804",
    "city": "Detroit",
    "state": "Michigan",
    "created_at": "12/27/1992"
  },
  {
    "id": 98,
    "rep_name": "Urbanus Dengate",
    "company": "Barton, Lubowitz and Thiel",
    "no_employees": 827,
    "phone": "1-(410)203-9314",
    "city": "Baltimore",
    "state": "Maryland",
    "created_at": "2/23/2016"
  },
  {
    "id": 99,
    "rep_name": "Irving Fellenor",
    "company": "Daniel and Sons",
    "no_employees": 1839,
    "phone": "1-(303)691-4242",
    "city": "Englewood",
    "state": "Colorado",
    "created_at": "6/5/2016"
  },
  {
    "id": 100,
    "rep_name": "Andria Kain",
    "company": "O'Connell, Langworth and Wisoky",
    "no_employees": 701,
    "phone": "1-(617)810-0842",
    "city": "Boston",
    "state": "Massachusetts",
    "created_at": "6/8/1999"
  }
]

for (var i = 0; i < clients.length; i++) {
  if(state === clients[i].state) {
    answer.push({"id": clients[i].id, "rep_name": clients[i].rep_name, "company": clients[i].company, "city":clients[i].city, "state":clients[i].state});
  }
}

console.log(answer);
