// Tokyo activities data with categories and prices
// Reference point for distance calculations
const shinjukuWarmHouse = {
    name: "Shinjuku Warm House",
    address: "2-5-8 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
    coordinates: { lat: 35.6954, lng: 139.7037 }
};

// User data
let currentUser = null;
let users = {};
let savedPlans = {};

const activities = [
    {
        category: "Landmarks",
        items: [
            {
                id: 1,
                title: "Tokyo Skytree",
                description: "Visit the tallest tower in Japan for breathtaking views of Tokyo.",
                price: 2100,
                image: "https://source.unsplash.com/random/300x200/?tokyoskytree",
                address: "1-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japan",
                website: "https://www.tokyo-skytree.jp/en/",
                distanceFromWarmHouse: "10.5 km"
            },
            {
                id: 8,
                title: "Tokyo Tower",
                description: "Visit this iconic communications and observation tower inspired by the Eiffel Tower.",
                price: 1200,
                image: "https://source.unsplash.com/random/300x200/?tokyotower",
                address: "4-2-8 Shibakoen, Minato City, Tokyo 105-0011, Japan",
                website: "https://www.tokyotower.co.jp/en/",
                distanceFromWarmHouse: "6.2 km"
            },
            {
                id: 6,
                title: "Shibuya Crossing",
                description: "Experience the world's busiest pedestrian crossing.",
                price: 0,
                image: "https://source.unsplash.com/random/300x200/?shibuya",
                address: "2-2-1 Dogenzaka, Shibuya City, Tokyo 150-0043, Japan",
                website: "https://www.japan-guide.com/e/e3029.html",
                distanceFromWarmHouse: "3.8 km"
            },
            {
                id: 42,
                title: "Tokyo Imperial Palace",
                description: "The primary residence of the Emperor of Japan with beautiful gardens and historic architecture.",
                price: 0,
                image: "https://source.unsplash.com/random/300x200/?imperialpalace",
                address: "1-1 Chiyoda, Chiyoda City, Tokyo 100-8111, Japan",
                website: "https://www.kunaicho.go.jp/e-about/shisetsu/kokyo.html",
                distanceFromWarmHouse: "5.1 km"
            },
            {
                id: 43,
                title: "Rainbow Bridge",
                description: "Iconic suspension bridge spanning Tokyo Bay with beautiful illumination at night.",
                price: 0,
                image: "https://source.unsplash.com/random/300x200/?rainbowbridge",
                address: "Minato City, Tokyo, Japan",
                distanceFromWarmHouse: "8.3 km"
            },
            {
                id: 44,
                title: "Tokyo Metropolitan Government Building",
                description: "Twin towers with free observation decks offering panoramic views of Tokyo and Mt. Fuji on clear days.",
                price: 0,
                image: "https://source.unsplash.com/random/300x200/?tokyogovernment",
                address: "2-8-1 Nishishinjuku, Shinjuku City, Tokyo 163-8001, Japan",
                distanceFromWarmHouse: "1.2 km"
            }
        ]
    },
    {
        category: "Cultural Sites",
        items: [
            {
                id: 2,
                title: "Meiji Shrine",
                description: "A peaceful Shinto shrine dedicated to Emperor Meiji and Empress Shoken.",
                price: 500,
                image: "https://source.unsplash.com/random/300x200/?meijishrine",
                address: "1-1 Yoyogikamizonocho, Shibuya City, Tokyo 151-8557, Japan",
                website: "https://www.meijijingu.or.jp/en/"
            },
            {
                id: 4,
                title: "Senso-ji Temple",
                description: "Tokyo's oldest temple, featuring a massive paper lantern and shopping street.",
                price: 0,
                image: "https://source.unsplash.com/random/300x200/?sensoji",
                address: "2-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan",
                website: "https://www.senso-ji.jp/english/"
            },
            {
                id: 10,
                title: "Sumo Wrestling Tournament",
                description: "Watch Japan's national sport at Ryogoku Kokugikan arena.",
                price: 8800,
                image: "https://source.unsplash.com/random/300x200/?sumo",
                address: "1-3-28 Yokoami, Sumida City, Tokyo 130-0015, Japan"
            },
            {
                id: 45,
                title: "Edo-Tokyo Museum",
                description: "Learn about Tokyo's history from the Edo period to the present through interactive exhibits.",
                price: 600,
                image: "https://source.unsplash.com/random/300x200/?edotokyo",
                address: "1-4-1 Yokoami, Sumida City, Tokyo 130-0015, Japan"
            },
            {
                id: 46,
                title: "Nezu Museum",
                description: "Museum housing a collection of pre-modern Japanese and East Asian art with a beautiful garden.",
                price: 1100,
                image: "https://source.unsplash.com/random/300x200/?nezumuseum",
                address: "6-5-1 Minamiaoyama, Minato City, Tokyo 107-0062, Japan"
            },
            {
                id: 47,
                title: "Yasukuni Shrine",
                description: "Controversial shrine dedicated to Japan's war dead with an adjacent war museum.",
                price: 0,
                image: "https://source.unsplash.com/random/300x200/?yasukuni",
                address: "3-1-1 Kudankita, Chiyoda City, Tokyo 102-8246, Japan"
            },
            {
                id: 48,
                title: "Ghibli Museum",
                description: "Whimsical museum dedicated to the works of the famous animation studio Studio Ghibli.",
                price: 1000,
                image: "https://source.unsplash.com/random/300x200/?ghibli",
                address: "1-1-83 Shimorenjaku, Mitaka, Tokyo 181-0013, Japan"
            }
        ]
    },
    {
        category: "Entertainment",
        items: [
            {
                id: 5,
                title: "Tokyo Disneyland",
                description: "Enjoy a magical day at this world-famous theme park.",
                price: 8200,
                image: "https://source.unsplash.com/random/300x200/?disneyland",
                address: "1-1 Maihama, Urayasu, Chiba 279-0031, Japan",
                website: "https://www.tokyodisneyresort.jp/en/tdl/"
            },
            {
                id: 7,
                title: "TeamLab Borderless Digital Art Museum",
                description: "Immerse yourself in interactive digital art installations.",
                price: 3200,
                image: "https://source.unsplash.com/random/300x200/?teamlab",
                address: "Odaiba Palette Town, 1-3-8 Aomi, Koto City, Tokyo 135-0064, Japan",
                website: "https://borderless.teamlab.art/"
            },
            {
                id: 12,
                title: "Akihabara Electric Town",
                description: "Discover this district famous for anime, manga, and electronics.",
                price: 2000,
                image: "https://source.unsplash.com/random/300x200/?akihabara",
                address: "1 Chome Sotokanda, Chiyoda City, Tokyo 101-0021, Japan"
            },
            {
                id: 49,
                title: "Tokyo DisneySea",
                description: "Unique Disney theme park with nautical and adventure themes not found elsewhere.",
                price: 8200,
                image: "https://source.unsplash.com/random/300x200/?disneysea",
                address: "1-13 Maihama, Urayasu, Chiba 279-0031, Japan"
            },
            {
                id: 50,
                title: "Robot Restaurant",
                description: "Flamboyant entertainment venue featuring robot shows, dancers, and colorful performances.",
                price: 8000,
                image: "https://source.unsplash.com/random/300x200/?robotrestaurant",
                address: "1-7-1 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan"
            },
            {
                id: 51,
                title: "Tokyo Joypolis",
                description: "Indoor amusement park with virtual reality attractions and arcade games.",
                price: 4500,
                image: "https://source.unsplash.com/random/300x200/?joypolis",
                address: "DECKS Tokyo Beach, 1-6-1 Daiba, Minato City, Tokyo 135-0091, Japan"
            },
            {
                id: 52,
                title: "Sanrio Puroland",
                description: "Indoor theme park dedicated to Hello Kitty and other Sanrio characters.",
                price: 3800,
                image: "https://source.unsplash.com/random/300x200/?hellokitty",
                address: "1-31 Ochiai, Tama, Tokyo 206-8588, Japan"
            },
            {
                id: 53,
                title: "Kabuki Theater (Kabuki-za)",
                description: "Experience traditional Japanese Kabuki performances with English headsets available.",
                price: 2500,
                image: "https://source.unsplash.com/random/300x200/?kabuki",
                address: "4-12-15 Ginza, Chuo City, Tokyo 104-0061, Japan"
            }
        ]
    },
    {
        category: "Nature & Parks",
        items: [
            {
                id: 11,
                title: "Ueno Park",
                description: "Explore this spacious public park with museums, a zoo, and temples.",
                price: 600,
                image: "https://source.unsplash.com/random/300x200/?uenopark",
                address: "Uenokoen, Taito City, Tokyo 110-0007, Japan",
                website: "https://www.japan-guide.com/e/e3019.html"
            },
            {
                id: 30,
                title: "Shinjuku Gyoen National Garden",
                description: "Beautiful garden with French, English, and Japanese landscape sections.",
                price: 500,
                image: "https://source.unsplash.com/random/300x200/?shinjukugyoen",
                address: "11 Naitomachi, Shinjuku City, Tokyo 160-0014, Japan",
                website: "https://www.env.go.jp/garden/shinjukugyoen/english/"
            },
            {
                id: 31,
                title: "Yoyogi Park",
                description: "Large park near Harajuku known for cherry blossoms and weekend activities.",
                price: 0,
                image: "https://source.unsplash.com/random/300x200/?yoyogipark",
                address: "2-1 Yoyogikamizonocho, Shibuya City, Tokyo 151-0052, Japan",
                website: "https://www.japan-guide.com/e/e3034_002.html"
            },
            {
                id: 32,
                title: "Inokashira Park",
                description: "Charming park with a pond, boat rentals, and the Ghibli Museum nearby.",
                price: 0,
                image: "https://source.unsplash.com/random/300x200/?inokashirapark",
                address: "1-18-31 Gotenyama, Musashino, Tokyo 180-0005, Japan",
                website: "https://www.japan-guide.com/e/e3029_west.html"
            }
        ]
    },
    {
        category: "Food & Markets",
        items: [
            {
                id: 3,
                title: "Tsukiji Fish Market",
                description: "Explore one of the world's largest fish markets and enjoy fresh sushi.",
                price: 3500,
                image: "https://source.unsplash.com/random/300x200/?tsukiji",
                address: "5 Chome-2-1 Tsukiji, Chuo City, Tokyo 104-0045, Japan",
                website: "https://www.japan-guide.com/e/e3021.html"
            },
            {
                id: 33,
                title: "Toyosu Fish Market",
                description: "The new home of Tokyo's famous wholesale fish market with observation decks.",
                price: 0,
                image: "https://source.unsplash.com/random/300x200/?toyosu",
                address: "6 Chome-6-1 Toyosu, Koto City, Tokyo 135-0061, Japan",
                website: "https://www.japan-guide.com/e/e3021.html"
            },
            {
                id: 34,
                title: "Ameyoko Market",
                description: "Bustling market street with food stalls, clothing, and souvenirs.",
                price: 0,
                image: "https://source.unsplash.com/random/300x200/?ameyoko",
                address: "4 Chome Ueno, Taito City, Tokyo 110-0005, Japan",
                website: "https://www.japan-guide.com/e/e3012_ameyoko.html"
            },
            {
                id: 35,
                title: "Omoide Yokocho (Memory Lane)",
                description: "Narrow alleyways filled with tiny eateries serving yakitori and other Japanese dishes.",
                price: 2500,
                image: "https://source.unsplash.com/random/300x200/?yokocho",
                address: "1 Chome-2 Nishishinjuku, Shinjuku City, Tokyo 160-0023, Japan",
                website: "https://www.japan-guide.com/e/e3025.html"
            },
            {
                id: 36,
                title: "Tsukishima Monja Street",
                description: "Famous street with dozens of restaurants specializing in monjayaki, a Tokyo specialty.",
                price: 2000,
                image: "https://source.unsplash.com/random/300x200/?monja",
                address: "1 Chome Tsukishima, Chuo City, Tokyo 104-0052, Japan",
                website: "https://www.gotokyo.org/en/spot/29/index.html"
            }
        ]
    },
    {
        category: "Shopping",
        items: [
            {
                id: 9,
                title: "Harajuku Shopping",
                description: "Shop in this trendy district known for youth fashion and culture.",
                price: 5000,
                image: "https://source.unsplash.com/random/300x200/?harajuku",
                address: "1 Chome Jingumae, Shibuya City, Tokyo 150-0001, Japan",
                website: "https://www.japan-guide.com/e/e3006.html"
            },
            {
                id: 37,
                title: "Ginza Shopping District",
                description: "Tokyo's most upscale shopping area with luxury brands and department stores.",
                price: 10000,
                image: "https://source.unsplash.com/random/300x200/?ginza",
                address: "Ginza, Chuo City, Tokyo 104-0061, Japan",
                website: "https://www.japan-guide.com/e/e3005.html"
            },
            {
                id: 38,
                title: "Shibuya 109",
                description: "Iconic fashion building with trendy Japanese clothing brands popular with young women.",
                price: 6000,
                image: "https://source.unsplash.com/random/300x200/?shibuya109",
                address: "2-29-1 Dogenzaka, Shibuya City, Tokyo 150-0043, Japan",
                website: "https://shibuya109.jp/en/"
            },
            {
                id: 39,
                title: "Nakamise Shopping Street",
                description: "Traditional shopping street leading to Senso-ji Temple with souvenirs and snacks.",
                price: 3000,
                image: "https://source.unsplash.com/random/300x200/?nakamise",
                address: "1 Chome Asakusa, Taito City, Tokyo 111-0032, Japan",
                website: "https://www.japan-guide.com/e/e3004.html"
            },
            {
                id: 40,
                title: "Shinjuku Isetan",
                description: "High-end department store with the latest fashion and an excellent food hall.",
                price: 8000,
                image: "https://source.unsplash.com/random/300x200/?isetan",
                address: "3-14-1 Shinjuku, Shinjuku City, Tokyo 160-0022, Japan",
                website: "https://isetan.mistore.jp/store/shinjuku/foreign_customer/index.html"
            },
            {
                id: 41,
                title: "Akihabara Electronics",
                description: "Shop for the latest electronics, anime merchandise, and video games in this otaku paradise.",
                price: 7000,
                image: "https://source.unsplash.com/random/300x200/?akihabara",
                address: "1 Chome Sotokanda, Chiyoda City, Tokyo 101-0021, Japan",
                website: "https://www.japan-guide.com/e/e3003.html"
            }
        ]
    },
    {
        category: "Soapland",
        items: [
            {
                id: 13,
                title: "Yoshiwara Soapland",
                description: "One of Tokyo's most famous soapland districts with premium services. Foreigner-friendly.",
                price: 15000,
                image: "https://source.unsplash.com/random/300x200/?bathhouse",
                address: "4 Chome Senzoku, Taito City, Tokyo 111-0031, Japan",
                website: "https://www.tokyonightlife.com/yoshiwara-soapland",
                hours: "12:00 PM - 12:00 AM",
                distanceFromWarmHouse: "7.2 km"
            },
            {
                id: 14,
                title: "Kawasaki Soapland",
                description: "Popular soapland area just outside Tokyo with excellent facilities. Foreigner-friendly.",
                price: 12000,
                image: "https://source.unsplash.com/random/300x200/?spa",
                address: "8 Chome Ogawacho, Kawasaki Ward, Kawasaki, Kanagawa 210-0023, Japan",
                website: "https://www.tokyonightlife.com/kawasaki-soapland",
                hours: "1:00 PM - 11:00 PM",
                distanceFromWarmHouse: "15.5 km"
            },
            {
                id: 16,
                title: "Gotanda Soapland",
                description: "Upscale soapland area known for high-quality service and facilities. Foreigner-friendly.",
                price: 20000,
                image: "https://source.unsplash.com/random/300x200/?wellness",
                address: "2 Chome Higashigotanda, Shinagawa City, Tokyo 141-0022, Japan",
                website: "https://www.tokyonightlife.com/gotanda-soapland",
                hours: "2:00 PM - 1:00 AM",
                distanceFromWarmHouse: "6.8 km"
            },
            {
                id: 71,
                title: "Sakura Soapland",
                description: "Luxurious soapland close to Shinjuku Warm House with traditional Japanese aesthetics. Foreigner-friendly.",
                price: 22000,
                image: "https://source.unsplash.com/random/300x200/?sakura",
                address: "1-7-6 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/sakura-soapland",
                hours: "12:00 PM - 2:00 AM",
                distanceFromWarmHouse: "0.3 km"
            },
            {
                id: 72,
                title: "Oasis Soapland",
                description: "Mid-range soapland within walking distance from Shinjuku Warm House. Clean facilities and friendly staff. Foreigner-friendly.",
                price: 18000,
                image: "https://source.unsplash.com/random/300x200/?oasis",
                address: "2-8-5 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "1:00 PM - 12:00 AM",
                distanceFromWarmHouse: "0.5 km"
            },
            {
                id: 98,
                title: "Uguisudani Soapland",
                description: "Historic soapland district with a variety of establishments at different price points. Foreigner-friendly options available.",
                price: 16000,
                image: "https://source.unsplash.com/random/300x200/?japanese",
                address: "3-1-5 Higashiueno, Taito City, Tokyo 110-0015, Japan",
                website: "https://www.tokyonightlife.com/uguisudani-soapland",
                hours: "1:00 PM - 1:00 AM",
                distanceFromWarmHouse: "6.5 km"
            },
            {
                id: 99,
                title: "Ikebukuro Soapland",
                description: "Modern soapland area in Ikebukuro with high-end facilities and professional staff. Foreigner-friendly.",
                price: 19000,
                image: "https://source.unsplash.com/random/300x200/?modern",
                address: "2-45-7 Ikebukuro, Toshima City, Tokyo 171-0014, Japan",
                website: "https://www.tokyonightlife.com/ikebukuro-soapland",
                hours: "12:00 PM - 12:00 AM",
                distanceFromWarmHouse: "4.2 km"
            },
            {
                id: 100,
                title: "Roppongi Soapland",
                description: "Upscale soapland in the international district of Roppongi. Very foreigner-friendly with English-speaking staff.",
                price: 25000,
                image: "https://source.unsplash.com/random/300x200/?luxury",
                address: "3-11-10 Roppongi, Minato City, Tokyo 106-0032, Japan",
                website: "https://www.tokyonightlife.com/roppongi-soapland",
                hours: "2:00 PM - 3:00 AM",
                distanceFromWarmHouse: "5.8 km"
            },
            {
                id: 101,
                title: "Cherry Blossom Soapland",
                description: "Elegant soapland with Japanese-themed rooms and high-quality service. Very close to Shinjuku Warm House. Foreigner-friendly.",
                price: 21000,
                image: "https://source.unsplash.com/random/300x200/?cherryblossom",
                address: "2-4-15 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "1:00 PM - 2:00 AM",
                distanceFromWarmHouse: "0.2 km"
            }
        ]
    },
    {
        category: "Shinjuku Soaplands",
        items: [
            {
                id: 15,
                title: "Kabukicho Soapland",
                description: "Located in Shinjuku's entertainment district with various options. Foreigner-friendly.",
                price: 18000,
                image: "https://source.unsplash.com/random/300x200/?massage",
                address: "1 Chome Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/kabukicho-soapland",
                hours: "12:00 PM - 1:00 AM",
                distanceFromWarmHouse: "0.4 km",
                verified: true
            },
            {
                id: 17,
                title: "Sapphire Soapland",
                description: "One of the best soaplands in Shinjuku with luxury facilities and premium service. Foreigner-friendly.",
                price: 25000,
                image: "https://source.unsplash.com/random/300x200/?luxury",
                address: "2 Chome-12 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/sapphire-soapland",
                hours: "2:00 PM - 3:00 AM",
                distanceFromWarmHouse: "0.7 km",
                verified: true
            },
            {
                id: 18,
                title: "Crystal Palace",
                description: "High-end soapland in Shinjuku known for its elegant atmosphere and skilled staff. Foreigner-friendly.",
                price: 30000,
                image: "https://source.unsplash.com/random/300x200/?crystal",
                address: "1 Chome-6 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/crystal-palace",
                hours: "1:00 PM - 2:00 AM",
                distanceFromWarmHouse: "0.3 km",
                verified: true
            },
            {
                id: 19,
                title: "Blue Heaven",
                description: "Popular mid-range soapland in Shinjuku with excellent value for money. Foreigner-friendly.",
                price: 20000,
                image: "https://source.unsplash.com/random/300x200/?blue",
                address: "1 Chome-9 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/blue-heaven",
                hours: "12:00 PM - 12:00 AM",
                distanceFromWarmHouse: "0.5 km",
                verified: true
            },
            {
                id: 20,
                title: "Golden Touch",
                description: "Budget-friendly soapland in Shinjuku that still offers quality service. Foreigner-friendly.",
                price: 15000,
                image: "https://source.unsplash.com/random/300x200/?gold",
                address: "2 Chome-3 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/golden-touch",
                hours: "11:00 AM - 11:00 PM",
                distanceFromWarmHouse: "0.2 km",
                verified: true
            },
            {
                id: 54,
                title: "Platinum Paradise",
                description: "Luxury soapland in Shinjuku with VIP rooms and premium services. Foreigner-friendly.",
                price: 35000,
                image: "https://source.unsplash.com/random/300x200/?platinum",
                address: "1 Chome-7 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/platinum-paradise",
                hours: "3:00 PM - 3:00 AM",
                distanceFromWarmHouse: "0.4 km",
                verified: true
            },
            {
                id: 55,
                title: "Ruby Massage",
                description: "Mid-range soapland with skilled masseuses and clean facilities. Foreigner-friendly.",
                price: 22000,
                image: "https://source.unsplash.com/random/300x200/?ruby",
                address: "2 Chome-10 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/ruby-massage",
                hours: "1:00 PM - 1:00 AM",
                distanceFromWarmHouse: "0.6 km",
                verified: true
            },
            {
                id: 56,
                title: "Emerald Spa",
                description: "Upscale soapland with private rooms and luxury amenities. Foreigner-friendly.",
                price: 28000,
                image: "https://source.unsplash.com/random/300x200/?emerald",
                address: "1 Chome-14 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "2:00 PM - 2:00 AM",
                distanceFromWarmHouse: "0.8 km",
                verified: true
            },
            {
                id: 73,
                title: "Diamond Soapland",
                description: "Premium soapland very close to Shinjuku Warm House with exceptional service and luxurious facilities. Foreigner-friendly.",
                price: 32000,
                image: "https://source.unsplash.com/random/300x200/?diamond",
                address: "2-6-10 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/diamond-soapland",
                hours: "2:00 PM - 4:00 AM",
                distanceFromWarmHouse: "0.1 km",
                verified: true
            },
            {
                id: 74,
                title: "Jade Garden",
                description: "Elegant soapland with Asian-inspired decor and premium service, within walking distance from Shinjuku Warm House. Foreigner-friendly.",
                price: 27000,
                image: "https://source.unsplash.com/random/300x200/?jade",
                address: "2-4-12 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "1:00 PM - 3:00 AM",
                distanceFromWarmHouse: "0.2 km",
                verified: true
            },
            {
                id: 101,
                title: "Tokyo Paradise",
                description: "Newly opened luxury soapland with English-speaking staff and premium amenities. Extremely foreigner-friendly with English menus and service.",
                price: 29000,
                image: "https://source.unsplash.com/random/300x200/?paradise",
                address: "2-3-9 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyoparadise.com",
                hours: "12:00 PM - 2:00 AM",
                distanceFromWarmHouse: "0.15 km",
                verified: true
            },
            {
                id: 102,
                title: "Sakura Spa",
                description: "Traditional Japanese-style soapland with modern amenities. Staff trained to accommodate foreign guests with English support.",
                price: 24000,
                image: "https://source.unsplash.com/random/300x200/?sakura",
                address: "2-5-12 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.sakuraspa-tokyo.com",
                hours: "1:00 PM - 3:00 AM",
                distanceFromWarmHouse: "0.25 km",
                verified: true
            },
            {
                id: 103,
                title: "Blue Ocean",
                description: "Modern soapland with ocean-themed rooms and international staff. Perfect for first-time foreign visitors with multilingual support.",
                price: 26000,
                image: "https://source.unsplash.com/random/300x200/?ocean",
                address: "2-4-7 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.blueocean-tokyo.com",
                hours: "2:00 PM - 4:00 AM",
                distanceFromWarmHouse: "0.3 km",
                verified: true
            },
            {
                id: 104,
                title: "Golden Lotus",
                description: "Upscale soapland with private VIP rooms and premium service. English-speaking staff and foreigner-friendly policies.",
                price: 31000,
                image: "https://source.unsplash.com/random/300x200/?lotus",
                address: "2-6-5 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.goldenlotus-tokyo.com",
                hours: "3:00 PM - 5:00 AM",
                distanceFromWarmHouse: "0.2 km",
                verified: true
            },
            {
                id: 105,
                title: "Silver Moon",
                description: "Mid-range soapland with excellent value. Specializes in catering to foreign guests with English menus and international payment options.",
                price: 19000,
                image: "https://source.unsplash.com/random/300x200/?moon",
                address: "2-3-15 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.silvermoon-tokyo.com",
                hours: "1:00 PM - 2:00 AM",
                distanceFromWarmHouse: "0.25 km",
                verified: true
            },
            {
                id: 201,
                title: "Sakura Splash",
                description: "Modern soapland with Japanese-themed rooms and English-speaking staff. Very close to Shinjuku Warm House. Foreigner-friendly.",
                price: 23000,
                image: "https://source.unsplash.com/random/300x200/?sakura",
                address: "2-5-12 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/sakura-splash",
                hours: "12:00 PM - 2:00 AM",
                distanceFromWarmHouse: "0.15 km",
                verified: true
            },
            {
                id: 202,
                title: "Tokyo Paradise Deluxe",
                description: "Luxury soapland with multilingual staff and special services for foreign visitors. Foreigner-friendly.",
                price: 29000,
                image: "https://source.unsplash.com/random/300x200/?paradise",
                address: "2-4-9 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/tokyo-paradise",
                hours: "2:00 PM - 4:00 AM",
                distanceFromWarmHouse: "0.2 km",
                verified: true
            },
            {
                id: 203,
                title: "Oasis Spa",
                description: "Upscale soapland with English menus and foreign-friendly services. Located very near to Warm House. Foreigner-friendly.",
                price: 26000,
                image: "https://source.unsplash.com/random/300x200/?oasis",
                address: "2-6-7 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/oasis-spa",
                hours: "1:00 PM - 3:00 AM",
                distanceFromWarmHouse: "0.1 km",
                verified: true
            },
            {
                id: 204,
                title: "Golden Lotus Premium",
                description: "Premium soapland with international staff and special packages for tourists. Foreigner-friendly.",
                price: 31000,
                image: "https://source.unsplash.com/random/300x200/?lotus",
                address: "2-7-3 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/golden-lotus",
                hours: "3:00 PM - 5:00 AM",
                distanceFromWarmHouse: "0.25 km",
                verified: true
            },
            {
                id: 205,
                title: "Azure Dreams",
                description: "Modern soapland with English-speaking staff and comfortable facilities. Very close to Warm House. Foreigner-friendly.",
                price: 24000,
                image: "https://source.unsplash.com/random/300x200/?azure",
                address: "2-5-15 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "2:00 PM - 2:00 AM",
                distanceFromWarmHouse: "0.18 km",
                verified: true
            },
            {
                id: 206,
                title: "Velvet Touch",
                description: "Elegant soapland with international atmosphere and staff who can speak multiple languages. Foreigner-friendly.",
                price: 28000,
                image: "https://source.unsplash.com/random/300x200/?velvet",
                address: "2-9-4 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/velvet-touch",
                hours: "1:00 PM - 3:00 AM",
                distanceFromWarmHouse: "0.4 km",
                verified: true
            },
            {
                id: 207,
                title: "Royal Massage",
                description: "High-end soapland with VIP rooms and special services for international guests. Foreigner-friendly.",
                price: 33000,
                image: "https://source.unsplash.com/random/300x200/?royal",
                address: "2-6-18 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/royal-massage",
                hours: "2:00 PM - 4:00 AM",
                distanceFromWarmHouse: "0.22 km",
                verified: true
            }
        ]
    },
    {
        category: "Love Hotels in Shinjuku",
        items: [
            {
                id: 21,
                title: "Hotel Atlantis",
                description: "Luxury love hotel in Shinjuku with themed rooms and premium amenities. Hourly and overnight rates available.",
                price: 8000,
                image: "https://source.unsplash.com/random/300x200/?hotel",
                address: "2 Chome-13 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "24 hours",
                distanceFromWarmHouse: "0.8 km"
            },
            {
                id: 22,
                title: "Hotel Adore",
                description: "Mid-range love hotel in Kabukicho area with stylish rooms and private entrance. Popular for its reasonable prices.",
                price: 5000,
                image: "https://source.unsplash.com/random/300x200/?hotelroom",
                address: "1 Chome-15 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "24 hours",
                distanceFromWarmHouse: "0.9 km"
            },
            {
                id: 23,
                title: "Love Castle",
                description: "Themed love hotel with a wide variety of room options from basic to extravagant fantasy rooms. Located near Shinjuku Station.",
                price: 12000,
                image: "https://source.unsplash.com/random/300x200/?castle",
                address: "3 Chome-1 Shinjuku, Shinjuku City, Tokyo 160-0022, Japan",
                hours: "24 hours",
                distanceFromWarmHouse: "1.2 km"
            },
            {
                id: 24,
                title: "Hotel Amore",
                description: "Budget-friendly love hotel offering clean, comfortable rooms with all necessary amenities. Popular with locals and tourists.",
                price: 3500,
                image: "https://source.unsplash.com/random/300x200/?bedroom",
                address: "2 Chome-8 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "24 hours",
                distanceFromWarmHouse: "0.5 km"
            },
            {
                id: 75,
                title: "Hotel Blossom",
                description: "Upscale love hotel very close to Shinjuku Warm House with luxurious rooms and high-end amenities. Private entrance and exit.",
                price: 10000,
                image: "https://source.unsplash.com/random/300x200/?blossom",
                address: "2-5-10 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "24 hours",
                distanceFromWarmHouse: "0.1 km"
            },
            {
                id: 76,
                title: "Moonlight Hotel",
                description: "Romantic love hotel within walking distance from Shinjuku Warm House. Features jacuzzi tubs and mood lighting in every room.",
                price: 7500,
                image: "https://source.unsplash.com/random/300x200/?moonlight",
                address: "2-7-6 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "24 hours",
                distanceFromWarmHouse: "0.3 km"
            },
            {
                id: 77,
                title: "Fantasy Inn",
                description: "Themed love hotel with a variety of fantasy rooms, from space adventures to fairy tales. Close to Shinjuku Warm House.",
                price: 9000,
                image: "https://source.unsplash.com/random/300x200/?fantasy",
                address: "1-8-12 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "24 hours",
                distanceFromWarmHouse: "0.4 km"
            }
        ]
    },
    {
        category: "Shinjuku Pink Salons",
        items: [
            {
                id: 25,
                title: "Lip Service",
                description: "Popular pink salon in Kabukicho with English-speaking staff. Foreigner-friendly.",
                price: 8000,
                image: "https://source.unsplash.com/random/300x200/?lounge",
                address: "1 Chome-18 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                distanceFromWarmHouse: "1.0 km"
            },
            {
                id: 26,
                title: "Paradise Kiss",
                description: "Upscale pink salon with private booths and premium service. Foreigner-friendly.",
                price: 12000,
                image: "https://source.unsplash.com/random/300x200/?paradise",
                address: "2 Chome-5 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                distanceFromWarmHouse: "0.3 km"
            },
            {
                id: 27,
                title: "Cherry Blossom",
                description: "Mid-range pink salon with a relaxed atmosphere and friendly staff. Foreigner-friendly.",
                price: 10000,
                image: "https://source.unsplash.com/random/300x200/?cherry",
                address: "1 Chome-11 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                distanceFromWarmHouse: "0.7 km"
            },
            {
                id: 28,
                title: "Tokyo Lips",
                description: "Budget-friendly pink salon with good service and clean facilities. Foreigner-friendly.",
                price: 6000,
                image: "https://source.unsplash.com/random/300x200/?tokyo",
                address: "2 Chome-7 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                distanceFromWarmHouse: "0.4 km"
            },
            {
                id: 29,
                title: "Velvet Touch",
                description: "High-end pink salon known for its luxurious interior and skilled staff. Foreigner-friendly.",
                price: 15000,
                image: "https://source.unsplash.com/random/300x200/?velvet",
                address: "1 Chome-4 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                distanceFromWarmHouse: "0.5 km"
            },
            {
                id: 57,
                title: "Pink Diamond",
                description: "Upscale pink salon with private booths and premium service. Foreigner-friendly.",
                price: 14000,
                image: "https://source.unsplash.com/random/300x200/?diamond",
                address: "2 Chome-9 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                distanceFromWarmHouse: "0.6 km"
            },
            {
                id: 58,
                title: "Silk Road",
                description: "Elegant pink salon with a relaxing atmosphere and skilled staff. Foreigner-friendly.",
                price: 11000,
                image: "https://source.unsplash.com/random/300x200/?silk",
                address: "1 Chome-13 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                distanceFromWarmHouse: "0.8 km"
            },
            {
                id: 59,
                title: "Golden Lips",
                description: "Popular pink salon with reasonable prices and quality service. Foreigner-friendly.",
                price: 9000,
                image: "https://source.unsplash.com/random/300x200/?golden",
                address: "2 Chome-6 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                distanceFromWarmHouse: "0.4 km"
            },
            {
                id: 102,
                title: "Ruby Lips",
                description: "Newly opened pink salon with modern decor and excellent service. Very close to Shinjuku Warm House. Foreigner-friendly.",
                price: 10000,
                image: "https://source.unsplash.com/random/300x200/?ruby",
                address: "2-5-11 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "2:00 PM - 1:00 AM",
                distanceFromWarmHouse: "0.1 km"
            },
            {
                id: 103,
                title: "Sapphire Salon",
                description: "Upscale pink salon with a blue-themed interior and premium service. Within walking distance from Shinjuku Warm House. Foreigner-friendly.",
                price: 13000,
                image: "https://source.unsplash.com/random/300x200/?sapphire",
                address: "2-4-8 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "1:00 PM - 12:00 AM",
                distanceFromWarmHouse: "0.2 km"
            },
            {
                id: 104,
                title: "Emerald Kiss",
                description: "Mid-range pink salon with a relaxing atmosphere and skilled staff. Very close to Shinjuku Warm House. Foreigner-friendly.",
                price: 9500,
                image: "https://source.unsplash.com/random/300x200/?emerald",
                address: "2-6-9 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "12:00 PM - 11:00 PM",
                distanceFromWarmHouse: "0.3 km"
            },
            {
                id: 105,
                title: "Platinum Lips",
                description: "High-end pink salon with VIP rooms and premium service. Close to Shinjuku Warm House. Foreigner-friendly with English-speaking staff.",
                price: 16000,
                image: "https://source.unsplash.com/random/300x200/?platinum",
                address: "1-9-7 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "3:00 PM - 2:00 AM",
                distanceFromWarmHouse: "0.5 km"
            }
        ]
    },
    {
        category: "Foreigner Friends Clubs",
        items: [
            {
                id: 60,
                title: "Gaijin Paradise",
                description: "Popular club specifically catering to foreigners with English-speaking staff and international atmosphere.",
                price: 10000,
                image: "https://source.unsplash.com/random/300x200/?club",
                address: "1 Chome-16 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/gaijin-paradise",
                hours: "8:00 PM - 5:00 AM",
                distanceFromWarmHouse: "0.9 km"
            },
            {
                id: 61,
                title: "International Lounge",
                description: "Upscale club where foreigners can meet local Japanese people in a friendly environment. English menus available.",
                price: 15000,
                image: "https://source.unsplash.com/random/300x200/?lounge",
                address: "2 Chome-11 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/international-lounge",
                hours: "7:00 PM - 4:00 AM",
                distanceFromWarmHouse: "0.7 km"
            },
            {
                id: 62,
                title: "Tokyo Friends",
                description: "Casual club designed for cultural exchange between foreigners and locals. Popular with expats and tourists.",
                price: 8000,
                image: "https://source.unsplash.com/random/300x200/?friends",
                address: "1 Chome-8 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/tokyo-friends",
                hours: "6:00 PM - 3:00 AM",
                distanceFromWarmHouse: "0.5 km"
            },
            {
                id: 63,
                title: "Global Connection",
                description: "High-end club offering premium drinks and opportunity to meet Japanese locals. English-speaking hosts available.",
                price: 20000,
                image: "https://source.unsplash.com/random/300x200/?global",
                address: "3 Chome-2 Shinjuku, Shinjuku City, Tokyo 160-0022, Japan",
                website: "https://www.tokyonightlife.com/global-connection",
                hours: "9:00 PM - 6:00 AM",
                distanceFromWarmHouse: "1.3 km"
            },
            {
                id: 64,
                title: "Sakura Social Club",
                description: "Friendly establishment where foreigners can enjoy Japanese hospitality in a relaxed setting. No language barrier.",
                price: 12000,
                image: "https://source.unsplash.com/random/300x200/?sakura",
                address: "1 Chome-12 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/sakura-social-club",
                hours: "7:00 PM - 4:00 AM",
                distanceFromWarmHouse: "0.8 km"
            },
            {
                id: 78,
                title: "Harmony Club",
                description: "New club near Shinjuku Warm House designed for cultural exchange between foreigners and locals. Live music on weekends.",
                price: 9000,
                image: "https://source.unsplash.com/random/300x200/?harmony",
                address: "2-6-5 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/harmony-club",
                hours: "7:00 PM - 5:00 AM",
                distanceFromWarmHouse: "0.2 km"
            },
            {
                id: 79,
                title: "Fusion Lounge",
                description: "Modern club with international DJs and a diverse crowd. Very close to Shinjuku Warm House with English-speaking staff.",
                price: 11000,
                image: "https://source.unsplash.com/random/300x200/?fusion",
                address: "2-4-9 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "8:00 PM - 6:00 AM",
                distanceFromWarmHouse: "0.3 km"
            }
        ]
    },
    {
        category: "Maid Cafes",
        items: [
            {
                id: 90,
                title: "Maidreamin",
                description: "Popular maid cafe chain with cute performances and themed food. Very foreigner-friendly with English menus.",
                price: 3500,
                image: "https://source.unsplash.com/random/300x200/?maid",
                address: "1-16-2 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://maidreamin.com/en/",
                hours: "11:00 AM - 10:00 PM",
                distanceFromWarmHouse: "0.8 km"
            },
            {
                id: 91,
                title: "Honey Honey Cafe",
                description: "Cozy maid cafe with friendly staff and delicious desserts. English-speaking maids available. Foreigner-friendly.",
                price: 3000,
                image: "https://source.unsplash.com/random/300x200/?honey",
                address: "2-7-7 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "12:00 PM - 9:00 PM",
                distanceFromWarmHouse: "0.4 km"
            },
            {
                id: 92,
                title: "Akiba Maid Cafe",
                description: "Authentic maid cafe experience in Akihabara with cute performances and photo opportunities. Foreigner-friendly.",
                price: 4000,
                image: "https://source.unsplash.com/random/300x200/?akihabara",
                address: "1-11-4 Sotokanda, Chiyoda City, Tokyo 101-0021, Japan",
                website: "https://www.akibamaids.com",
                hours: "11:30 AM - 10:30 PM",
                distanceFromWarmHouse: "5.2 km"
            },
            {
                id: 93,
                title: "Maid Cafe @home",
                description: "One of the oldest and most famous maid cafes in Akihabara. Regular events and performances. Foreigner-friendly.",
                price: 3800,
                image: "https://source.unsplash.com/random/300x200/?cafe",
                address: "1-11-4 Sotokanda, Chiyoda City, Tokyo 101-0021, Japan",
                website: "https://www.cafe-athome.com/en/",
                hours: "11:00 AM - 10:00 PM",
                distanceFromWarmHouse: "5.2 km"
            },
            {
                id: 94,
                title: "Kawaii Monster Cafe",
                description: "Colorful and eccentric themed cafe with unique performances and Instagram-worthy food. Foreigner-friendly.",
                price: 5000,
                image: "https://source.unsplash.com/random/300x200/?colorful",
                address: "4-31-10 Jingumae, Shibuya City, Tokyo 150-0001, Japan",
                website: "https://kawaiimonster.jp/en/",
                hours: "11:30 AM - 10:30 PM",
                distanceFromWarmHouse: "3.5 km"
            },
            {
                id: 95,
                title: "Shinjuku Maid Cafe",
                description: "Convenient maid cafe located near Shinjuku Warm House with friendly staff and good food. Foreigner-friendly.",
                price: 3200,
                image: "https://source.unsplash.com/random/300x200/?shinjuku",
                address: "2-5-9 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "12:00 PM - 11:00 PM",
                distanceFromWarmHouse: "0.1 km"
            },
            {
                id: 96,
                title: "Pastel Maid Cafe",
                description: "Cute maid cafe with pastel decor and sweet treats. Special events on weekends. Foreigner-friendly.",
                price: 3500,
                image: "https://source.unsplash.com/random/300x200/?pastel",
                address: "2-6-7 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "1:00 PM - 10:00 PM",
                distanceFromWarmHouse: "0.3 km"
            },
            {
                id: 97,
                title: "Melody Maid Cafe",
                description: "Music-themed maid cafe where maids sing and play instruments. Close to Shinjuku Warm House. Foreigner-friendly.",
                price: 4000,
                image: "https://source.unsplash.com/random/300x200/?music",
                address: "2-4-11 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "2:00 PM - 11:00 PM",
                distanceFromWarmHouse: "0.2 km"
            }
        ]
    },
    {
        category: "Strip Clubs & Gentlemen Clubs",
        items: [
            {
                id: 65,
                title: "Seventh Heaven",
                description: "Upscale gentlemen's club with premium entertainment and VIP services. Foreigner-friendly with English-speaking staff.",
                price: 15000,
                image: "https://source.unsplash.com/random/300x200/?nightclub",
                address: "1 Chome-19 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/seventh-heaven",
                hours: "8:00 PM - 5:00 AM",
                distanceFromWarmHouse: "1.0 km"
            },
            {
                id: 66,
                title: "Club Velvet",
                description: "Popular strip club featuring international dancers and private dance rooms. Known for its elegant atmosphere.",
                price: 20000,
                image: "https://source.unsplash.com/random/300x200/?stage",
                address: "2 Chome-14 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/club-velvet",
                hours: "9:00 PM - 6:00 AM",
                distanceFromWarmHouse: "0.8 km"
            },
            {
                id: 67,
                title: "Platinum Lounge",
                description: "High-end gentlemen's club with luxury amenities and top-tier entertainment. Reservation recommended for foreigners.",
                price: 25000,
                image: "https://source.unsplash.com/random/300x200/?lounge",
                address: "1 Chome-20 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/platinum-lounge",
                hours: "7:00 PM - 5:00 AM",
                distanceFromWarmHouse: "1.1 km"
            },
            {
                id: 68,
                title: "Aphrodite",
                description: "Mid-range strip club with a good selection of dancers and reasonable drink prices. Popular with tourists.",
                price: 12000,
                image: "https://source.unsplash.com/random/300x200/?nightlife",
                address: "2 Chome-15 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/aphrodite",
                hours: "8:00 PM - 4:00 AM",
                distanceFromWarmHouse: "0.9 km"
            },
            {
                id: 69,
                title: "Club Diamond",
                description: "Upscale gentlemen's club with private booths and premium bottle service. Known for its professional dancers.",
                price: 18000,
                image: "https://source.unsplash.com/random/300x200/?diamond",
                address: "1 Chome-21 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/club-diamond",
                hours: "9:00 PM - 6:00 AM",
                distanceFromWarmHouse: "1.2 km"
            },
            {
                id: 70,
                title: "Roppongi Nights",
                description: "Famous strip club in Roppongi district with international staff and clientele. Offers table dances and VIP rooms.",
                price: 22000,
                image: "https://source.unsplash.com/random/300x200/?roppongi",
                address: "3 Chome-1 Roppongi, Minato City, Tokyo 106-0032, Japan",
                website: "https://www.tokyonightlife.com/roppongi-nights",
                hours: "10:00 PM - 7:00 AM",
                distanceFromWarmHouse: "5.8 km"
            },
            {
                id: 80,
                title: "Scarlet Club",
                description: "Upscale gentlemen's club near Shinjuku Warm House with international dancers and luxurious VIP rooms.",
                price: 23000,
                image: "https://source.unsplash.com/random/300x200/?scarlet",
                address: "2-6-8 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.tokyonightlife.com/scarlet-club",
                hours: "8:00 PM - 6:00 AM",
                distanceFromWarmHouse: "0.3 km"
            },
            {
                id: 81,
                title: "Midnight Rose",
                description: "Elegant strip club with a sophisticated atmosphere, just a short walk from Shinjuku Warm House.",
                price: 19000,
                image: "https://source.unsplash.com/random/300x200/?midnight",
                address: "2-5-15 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "9:00 PM - 5:00 AM",
                distanceFromWarmHouse: "0.2 km"
            }
        ]
    },
    {
        category: "Bars & Izakayas",
        items: [
            {
                id: 82,
                title: "Golden Gai Bar",
                description: "Authentic tiny bar in the famous Golden Gai district with a local atmosphere and unique drinks.",
                price: 3000,
                image: "https://source.unsplash.com/random/300x200/?bar",
                address: "1-1-6 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "7:00 PM - 4:00 AM",
                distanceFromWarmHouse: "0.7 km"
            },
            {
                id: 83,
                title: "Whisky Library",
                description: "Upscale bar specializing in Japanese and international whiskies with knowledgeable bartenders.",
                price: 5000,
                image: "https://source.unsplash.com/random/300x200/?whisky",
                address: "3-5-8 Shinjuku, Shinjuku City, Tokyo 160-0022, Japan",
                website: "https://www.whiskylibrary.jp",
                hours: "6:00 PM - 2:00 AM",
                distanceFromWarmHouse: "1.5 km"
            },
            {
                id: 84,
                title: "Izakaya Yorimichi",
                description: "Traditional Japanese pub with excellent food and a wide selection of sake and shochu.",
                price: 4000,
                image: "https://source.unsplash.com/random/300x200/?izakaya",
                address: "2-6-2 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "5:00 PM - 12:00 AM",
                distanceFromWarmHouse: "0.2 km"
            },
            {
                id: 85,
                title: "Robot Bar",
                description: "Unique themed bar with robot performances and colorful lights. Popular with tourists.",
                price: 8000,
                image: "https://source.unsplash.com/random/300x200/?robot",
                address: "1-7-1 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                website: "https://www.shinjuku-robot.com",
                hours: "7:00 PM - 11:00 PM",
                distanceFromWarmHouse: "0.4 km"
            },
            {
                id: 86,
                title: "Craft Beer Tokyo",
                description: "Modern bar specializing in Japanese craft beers with over 20 taps and knowledgeable staff.",
                price: 3500,
                image: "https://source.unsplash.com/random/300x200/?craftbeer",
                address: "3-1-5 Shinjuku, Shinjuku City, Tokyo 160-0022, Japan",
                website: "https://www.craftbeertokyo.com",
                hours: "4:00 PM - 1:00 AM",
                distanceFromWarmHouse: "1.3 km"
            },
            {
                id: 87,
                title: "Omoide Yokocho Bar",
                description: "Small, atmospheric bar in the famous Memory Lane alley with local drinks and snacks.",
                price: 2500,
                image: "https://source.unsplash.com/random/300x200/?alley",
                address: "1-2-11 Nishishinjuku, Shinjuku City, Tokyo 160-0023, Japan",
                hours: "6:00 PM - 2:00 AM",
                distanceFromWarmHouse: "0.9 km"
            },
            {
                id: 88,
                title: "Sake Bar Daikoku",
                description: "Specialized sake bar with over 100 varieties from all over Japan. Knowledgeable staff can guide your tasting.",
                price: 4500,
                image: "https://source.unsplash.com/random/300x200/?sake",
                address: "2-4-7 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "5:00 PM - 3:00 AM",
                distanceFromWarmHouse: "0.3 km"
            },
            {
                id: 89,
                title: "Shinjuku Cocktail Lounge",
                description: "Elegant cocktail bar with expert mixologists creating both classic and innovative drinks.",
                price: 6000,
                image: "https://source.unsplash.com/random/300x200/?cocktail",
                address: "2-5-12 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan",
                hours: "7:00 PM - 4:00 AM",
                distanceFromWarmHouse: "0.1 km"
            }
        ]
    }
];

// JPY to USD conversion rate
const JPY_TO_USD_RATE = 0.0068; // 1 JPY = 0.0068 USD (example rate, adjust as needed)

// DOM elements
const activitiesList = document.getElementById('activities-list');
const adultEntertainmentList = document.getElementById('adult-entertainment-list');
const selectedActivitiesList = document.getElementById('selected-activities-list');
const totalActivitiesElement = document.getElementById('total-activities');
const totalCostElement = document.getElementById('total-cost');
const totalCostUsdElement = document.getElementById('total-cost-usd');
const clearPlannerButton = document.getElementById('clear-planner');

// Selected activities array with day assignments
let selectedActivities = [];
let days = []; // Array to store days for itinerary
let currentPlanName = "My Tokyo Trip"; // Default plan name
let map = null; // Google Maps instance
let markers = []; // Map markers
let weatherData = null; // Weather forecast data
let directionsService = null; // Google Maps Directions Service
let directionsRenderer = null; // Google Maps Directions Renderer

// Global variable to store the activity being reviewed
let currentReviewActivity = null;

// Budget tracking variables
let totalBudget = 0;
let expenses = [];
let expenseCategories = ['activities', 'accommodation', 'transportation', 'food', 'shopping', 'other'];

// Initialize the application
function init() {
    // Load users and saved plans from localStorage
    loadUsers();

    // Fetch weather data
    fetchWeatherData();

    // Initialize review modal
    initReviewModal();

    // Initialize share modal
    initShareModal();

    // Initialize budget tracker
    initBudgetTracker();

    // Initialize ChatGPT functionality
    initChatGPT();

    // Set up filter options
    setupFilters();

    // Display activities and adult entertainment
    displayActivities();
    displayAdultEntertainment();
    displayTop10Lists();

    // Set up event listeners for planner
    clearPlannerButton.addEventListener('click', clearPlanner);
    document.getElementById('save-plan').addEventListener('click', savePlan);
    document.getElementById('plan-name').value = currentPlanName;
    document.getElementById('plan-name').addEventListener('change', function() {
        currentPlanName = this.value;
    });

    // Set up tabs
    setupTabs();

    // Set up itinerary
    setupItinerary();

    // Set up user account functionality
    setupUserAccount();

    // Load saved planner from localStorage if available
    loadSavedPlanner();

    // Initialize map (will be called when the map tab is clicked)
}

// Display top 5 adult entertainment venues near Shinjuku Warm House
function displayAdultEntertainment() {
    adultEntertainmentList.innerHTML = '';

    // Categories to include
    const adultCategories = ['Soapland', 'Shinjuku Soaplands', 'Shinjuku Pink Salons', 'Strip Clubs & Gentlemen Clubs'];

    // Collect all adult entertainment venues from the specified categories
    let allVenues = [];

    activities.forEach(categoryGroup => {
        if (adultCategories.includes(categoryGroup.category)) {
            // Sort items by distance from Warm House (if available)
            const sortedItems = categoryGroup.items.filter(item => item.distanceFromWarmHouse)
                .sort((a, b) => {
                    const distA = parseFloat(a.distanceFromWarmHouse);
                    const distB = parseFloat(b.distanceFromWarmHouse);
                    return distA - distB;
                });

            // Add category information to each item
            sortedItems.forEach(item => {
                allVenues.push({
                    ...item,
                    category: categoryGroup.category
                });
            });
        }
    });

    // Sort all venues by distance and take top 5
    const topVenues = allVenues.sort((a, b) => {
        const distA = parseFloat(a.distanceFromWarmHouse);
        const distB = parseFloat(b.distanceFromWarmHouse);
        return distA - distB;
    }).slice(0, 5);

    // Create container for the venues
    const venuesContainer = document.createElement('div');
    venuesContainer.className = 'category-container';
    adultEntertainmentList.appendChild(venuesContainer);

    // Add venues to the container
    topVenues.forEach(venue => {
        const venueCard = document.createElement('div');
        venueCard.className = 'activity-card';

        venueCard.innerHTML = `
            <img src="${venue.image}" alt="${venue.title}" class="activity-image">
            <div class="activity-details">
                <h3 class="activity-title">${venue.title}</h3>
                <p class="activity-category">Category: ${venue.category}</p>
                <p class="activity-description">${venue.description}</p>
                <p class="activity-address">Address: ${venue.address}</p>
                ${venue.hours ? `<p class="activity-hours">Hours: ${venue.hours}</p>` : ''}
                <p class="activity-distance">Distance from Shinjuku Warm House: ${venue.distanceFromWarmHouse}</p>
                <p class="activity-price">Price: ¥${venue.price.toLocaleString()} ($${(venue.price * JPY_TO_USD_RATE).toFixed(2)} USD)</p>
                <div class="activity-website">
                    <p class="website-link">
                        ${venue.website ? 
                          `<a href="${venue.website}" target="_blank" class="website-link">Visit Official Website</a>` : 
                          `<a href="https://www.google.com/search?q=${encodeURIComponent(venue.title + ' Tokyo')}" target="_blank" class="website-link">Search on Google</a>`}
                    </p>
                </div>
                <button class="add-to-planner" data-id="${venue.id}">Add to Planner</button>
            </div>
        `;

        venuesContainer.appendChild(venueCard);

        // Add event listener to the button
        const addButton = venueCard.querySelector('.add-to-planner');
        addButton.addEventListener('click', () => addToPlanner(venue));
    });
}

// Display top 10 lists
function displayTop10Lists() {
    // Initialize tabs
    const tabs = document.querySelectorAll('.top-10-tab');
    const lists = document.querySelectorAll('.top-10-list');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and lists
            tabs.forEach(t => t.classList.remove('active'));
            lists.forEach(l => l.classList.remove('active'));

            // Add active class to clicked tab and corresponding list
            tab.classList.add('active');
            const listId = tab.getAttribute('data-list');
            document.getElementById(`${listId}-list`).classList.add('active');
        });
    });

    // Display each top 10 list
    displayTop10Soaplands();
    displayTop10Clubs();
    displayTop10PinkSalons();
    displayTop10BarsInShibuya();
}

// Display top 10 soaplands
function displayTop10Soaplands() {
    const soaplandsList = document.getElementById('soaplands-list');
    soaplandsList.innerHTML = '';

    // Get soaplands from activities data
    const soaplands = [];
    activities.forEach(categoryGroup => {
        if (categoryGroup.category === 'Soapland' || categoryGroup.category === 'Shinjuku Soaplands') {
            categoryGroup.items.forEach(item => {
                soaplands.push({
                    ...item,
                    category: categoryGroup.category
                });
            });
        }
    });

    // Sort by price (highest first) and take top 10
    const top10Soaplands = soaplands.sort((a, b) => b.price - a.price).slice(0, 10);

    // Display the list
    top10Soaplands.forEach((soapland, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'top-10-item';
        listItem.innerHTML = `
            <div class="top-10-rank">${index + 1}</div>
            <div class="top-10-details">
                <div class="top-10-title">${soapland.title}</div>
                <div class="top-10-description">${soapland.description}</div>
                <div class="top-10-price">¥${soapland.price.toLocaleString()}</div>
            </div>
            <button class="top-10-add-btn" data-id="${soapland.id}">Add to Planner</button>
        `;
        soaplandsList.appendChild(listItem);

        // Add event listener to the button
        const addButton = listItem.querySelector('.top-10-add-btn');
        addButton.addEventListener('click', () => addToPlanner(soapland));
    });
}

// Display top 10 clubs
function displayTop10Clubs() {
    const clubsList = document.getElementById('clubs-list');
    clubsList.innerHTML = '';

    // Get clubs from activities data
    const clubs = [];
    activities.forEach(categoryGroup => {
        if (categoryGroup.category === 'Strip Clubs & Gentlemen Clubs' || categoryGroup.category === 'Foreigner Friends Clubs') {
            categoryGroup.items.forEach(item => {
                clubs.push({
                    ...item,
                    category: categoryGroup.category
                });
            });
        }
    });

    // Sort by popularity (using price as a proxy) and take top 10
    const top10Clubs = clubs.sort((a, b) => b.price - a.price).slice(0, 10);

    // Display the list
    top10Clubs.forEach((club, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'top-10-item';
        listItem.innerHTML = `
            <div class="top-10-rank">${index + 1}</div>
            <div class="top-10-details">
                <div class="top-10-title">${club.title}</div>
                <div class="top-10-description">${club.description}</div>
                <div class="top-10-price">¥${club.price.toLocaleString()}</div>
            </div>
            <button class="top-10-add-btn" data-id="${club.id}">Add to Planner</button>
        `;
        clubsList.appendChild(listItem);

        // Add event listener to the button
        const addButton = listItem.querySelector('.top-10-add-btn');
        addButton.addEventListener('click', () => addToPlanner(club));
    });
}

// Display top 10 pink salons
function displayTop10PinkSalons() {
    const pinkSalonsList = document.getElementById('pink-salons-list');
    pinkSalonsList.innerHTML = '';

    // Get pink salons from activities data
    const pinkSalons = [];
    activities.forEach(categoryGroup => {
        if (categoryGroup.category === 'Shinjuku Pink Salons') {
            categoryGroup.items.forEach(item => {
                pinkSalons.push({
                    ...item,
                    category: categoryGroup.category
                });
            });
        }
    });

    // Sort by price (highest first) and take top 10
    const top10PinkSalons = pinkSalons.sort((a, b) => b.price - a.price).slice(0, 10);

    // Display the list
    top10PinkSalons.forEach((pinkSalon, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'top-10-item';
        listItem.innerHTML = `
            <div class="top-10-rank">${index + 1}</div>
            <div class="top-10-details">
                <div class="top-10-title">${pinkSalon.title}</div>
                <div class="top-10-description">${pinkSalon.description}</div>
                <div class="top-10-price">¥${pinkSalon.price.toLocaleString()}</div>
            </div>
            <button class="top-10-add-btn" data-id="${pinkSalon.id}">Add to Planner</button>
        `;
        pinkSalonsList.appendChild(listItem);

        // Add event listener to the button
        const addButton = listItem.querySelector('.top-10-add-btn');
        addButton.addEventListener('click', () => addToPlanner(pinkSalon));
    });
}

// Display top 10 bars in Shibuya
function displayTop10BarsInShibuya() {
    const barsList = document.getElementById('bars-list');
    barsList.innerHTML = '';

    // Create a list of bars in Shibuya (since we don't have this data in the activities)
    const barsInShibuya = [
        {
            id: 1001,
            title: "Nonbei Yokocho",
            description: "A narrow alley filled with tiny bars, offering an authentic Tokyo drinking experience.",
            price: 3000,
            category: "Bars"
        },
        {
            id: 1002,
            title: "Womb",
            description: "One of Tokyo's most famous nightclubs, featuring world-class DJs and a massive mirror ball.",
            price: 4000,
            category: "Bars"
        },
        {
            id: 1003,
            title: "Bar Albatross",
            description: "A quirky, multi-level bar with vintage decor and reasonably priced drinks.",
            price: 2500,
            category: "Bars"
        },
        {
            id: 1004,
            title: "JBS (Jazz, Blues, Soul)",
            description: "A tiny bar with thousands of vinyl records and excellent whiskey.",
            price: 3000,
            category: "Bars"
        },
        {
            id: 1005,
            title: "Grandfather's",
            description: "A stylish cocktail bar with skilled bartenders and a sophisticated atmosphere.",
            price: 3500,
            category: "Bars"
        },
        {
            id: 1006,
            title: "The SG Club",
            description: "Award-winning bar with creative cocktails inspired by the cultural exchange between Japan and America.",
            price: 4000,
            category: "Bars"
        },
        {
            id: 1007,
            title: "Coins Bar",
            description: "Popular bar where all drinks cost 300 yen, attracting a young crowd.",
            price: 1500,
            category: "Bars"
        },
        {
            id: 1008,
            title: "Oath",
            description: "Underground club with a raw, industrial feel and great electronic music.",
            price: 3000,
            category: "Bars"
        },
        {
            id: 1009,
            title: "Legato",
            description: "Rooftop bar with stunning views of Shibuya crossing and craft cocktails.",
            price: 4500,
            category: "Bars"
        },
        {
            id: 1010,
            title: "Tight",
            description: "Tiny standing-only bar specializing in natural wines and small plates.",
            price: 3000,
            category: "Bars"
        }
    ];

    // Display the list
    barsInShibuya.forEach((bar, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'top-10-item';
        listItem.innerHTML = `
            <div class="top-10-rank">${index + 1}</div>
            <div class="top-10-details">
                <div class="top-10-title">${bar.title}</div>
                <div class="top-10-description">${bar.description}</div>
                <div class="top-10-price">¥${bar.price.toLocaleString()} (average)</div>
            </div>
            <button class="top-10-add-btn" data-id="${bar.id}">Add to Planner</button>
        `;
        barsList.appendChild(listItem);

        // Add event listener to the button
        const addButton = listItem.querySelector('.top-10-add-btn');
        addButton.addEventListener('click', () => {
            // Create a temporary activity object for the bar
            const barActivity = {
                id: bar.id,
                title: bar.title,
                description: bar.description,
                price: bar.price,
                category: "Bars in Shibuya",
                image: "https://source.unsplash.com/random/300x200/?bar"
            };
            addToPlanner(barActivity);
        });
    });
}

// Display all activities grouped by category
function displayActivities() {
    activitiesList.innerHTML = '';

    activities.forEach(categoryGroup => {
        // Create category header
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        categoryHeader.innerHTML = `<h3>${categoryGroup.category}</h3>`;
        activitiesList.appendChild(categoryHeader);

        // Create container for this category's activities
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'category-container';
        activitiesList.appendChild(categoryContainer);

        // Add activities for this category
        categoryGroup.items.forEach(activity => {
            const activityCard = document.createElement('div');
            activityCard.className = 'activity-card';


            // Initialize reviews array if it doesn't exist
            if (!activity.reviews) {
                activity.reviews = [];
            }

            // Calculate average rating
            let avgRating = 0;
            if (activity.reviews.length > 0) {
                avgRating = activity.reviews.reduce((sum, review) => sum + review.rating, 0) / activity.reviews.length;
            }

            activityCard.innerHTML = `
                <img src="${activity.image}" alt="${activity.title}" class="activity-image">
                <div class="activity-details">
                    <h3 class="activity-title">${activity.title}</h3>
                    <p class="activity-description">${activity.description}</p>
                    <p class="activity-address">Address: ${activity.address}</p>
                    ${activity.hours ? `<p class="activity-hours">Hours: ${activity.hours}</p>` : ''}
                    ${activity.distanceFromWarmHouse ? `<p class="activity-distance">Distance from Shinjuku Warm House: ${activity.distanceFromWarmHouse}</p>` : ''}
                    <p class="activity-price">Price: ¥${activity.price.toLocaleString()} ($${(activity.price * JPY_TO_USD_RATE).toFixed(2)} USD)</p>
                    <p class="activity-rating">
                        ${avgRating > 0 ? 
                          `Rating: ${avgRating.toFixed(1)} ★ (${activity.reviews.length} ${activity.reviews.length === 1 ? 'review' : 'reviews'})` : 
                          'No reviews yet'}
                    </p>
                    <div class="activity-website">
                        <p class="website-link">
                            ${activity.website ? 
                              `<a href="${activity.website}" target="_blank" class="website-link">Visit Official Website</a>` : 
                              `<a href="https://www.google.com/search?q=${encodeURIComponent(activity.title + ' Tokyo')}" target="_blank" class="website-link">Search on Google</a>`}
                        </p>
                    </div>
                    <button class="add-to-planner" data-id="${activity.id}">Add to Planner</button>
                    <button class="add-review-btn" data-id="${activity.id}">Add Review</button>

                    <div class="activity-reviews">
                        <h4>Reviews (${activity.reviews.length})</h4>
                        ${activity.reviews.length > 0 ? 
                          `<div class="reviews-list">
                            ${activity.reviews.map(review => `
                              <div class="review">
                                <div class="review-header">
                                  <span class="reviewer-name">${review.name}</span>
                                  <span class="review-date">${review.date}</span>
                                  <span class="review-stars">${'★'.repeat(review.rating)}</span>
                                </div>
                                <p class="review-text">${review.text}</p>
                              </div>
                            `).join('')}
                          </div>` : 
                          '<p>No reviews yet. Be the first to review!</p>'}
                    </div>
                </div>
            `;

            categoryContainer.appendChild(activityCard);

            // Add event listener to the add to planner button
            const addButton = activityCard.querySelector('.add-to-planner');
            addButton.addEventListener('click', () => addToPlanner(activity));

            // Add event listener to the add review button
            const addReviewButton = activityCard.querySelector('.add-review-btn');
            addReviewButton.addEventListener('click', () => showAddReviewForm(activity));
        });
    });
}

// Helper function to find an activity by ID
function findActivityById(id) {
    for (const category of activities) {
        const found = category.items.find(item => item.id === id);
        if (found) {
            return found;
        }
    }
    return null;
}

// Add activity to planner
function addToPlanner(activity) {
    // Check if activity is already in planner
    if (selectedActivities.some(item => item.id === activity.id)) {
        alert('This activity is already in your planner!');
        return;
    }

    // Add day property to activity (null by default)
    activity.day = null;

    // Add to selected activities array
    selectedActivities.push(activity);

    // Update the UI
    updatePlannerUI();

    // Save to localStorage
    savePlanner();

    // If days exist, ask if user wants to assign to a day
    if (days.length > 0) {
        const assignToDay = confirm(`Do you want to assign "${activity.title}" to a specific day?`);
        if (assignToDay) {
            showDayAssignmentDialog(activity);
        }
    }
}

// Show dialog to assign activity to a day
function showDayAssignmentDialog(activity) {
    // Create options for each day
    let options = '';
    days.forEach(day => {
        options += `<option value="${day.id}">${day.name}</option>`;
    });

    // Create a simple dialog
    const dayId = prompt(`Select a day for "${activity.title}":\n\n${days.map((day, index) => `${index + 1}. ${day.name}`).join('\n')}`);

    if (dayId === null) return; // User cancelled

    const selectedDayId = parseInt(dayId);

    // Check if day exists
    const dayExists = days.some(day => day.id === selectedDayId);

    if (dayExists) {
        // Assign activity to day
        activity.day = selectedDayId;

        // Update UI
        updatePlannerUI();
        updateDaySummary(selectedDayId);

        // Save to localStorage
        savePlanner();
    } else {
        alert('Invalid day selection.');
    }
}

// Remove activity from planner
function removeFromPlanner(activityId) {
    const activity = selectedActivities.find(a => a.id === activityId);
    const dayId = activity ? activity.day : null;

    selectedActivities = selectedActivities.filter(activity => activity.id !== activityId);

    // Update the UI
    updatePlannerUI();

    // Update day summary if activity was assigned to a day
    if (dayId) {
        updateDaySummary(dayId);
    }

    // Save to localStorage
    savePlanner();
}

// Update planner UI
function updatePlannerUI() {
    selectedActivitiesList.innerHTML = '';

    if (selectedActivities.length === 0) {
        selectedActivitiesList.innerHTML = '<li>No activities selected yet.</li>';
        totalActivitiesElement.textContent = '0';
        totalCostElement.textContent = '0';
        totalCostUsdElement.textContent = '0';
        return;
    }

    let totalCost = 0;

    selectedActivities.forEach(activity => {
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            <div>
                <span>${activity.title} - ¥${activity.price.toLocaleString()} ($${(activity.price * JPY_TO_USD_RATE).toFixed(2)} USD)</span>
                <p class="selected-activity-address">Address: ${activity.address}</p>
                ${activity.day ? `<p class="selected-activity-day">Planned for: Day ${activity.day}</p>` : ''}
            </div>
            <div class="activity-actions">
                ${activity.day ? 
                    `<button class="remove-from-day" data-id="${activity.id}">Remove from Day</button>` : 
                    days.length > 0 ? `<button class="assign-to-day" data-id="${activity.id}">Assign to Day</button>` : ''}
                <button class="remove-activity" data-id="${activity.id}">Remove</button>
            </div>
        `;

        selectedActivitiesList.appendChild(listItem);

        // Add event listener to remove button
        const removeButton = listItem.querySelector('.remove-activity');
        removeButton.addEventListener('click', () => removeFromPlanner(activity.id));

        // Add event listener to assign to day button
        const assignButton = listItem.querySelector('.assign-to-day');
        if (assignButton) {
            assignButton.addEventListener('click', () => showDayAssignmentDialog(activity));
        }

        // Add event listener to remove from day button
        const removeFromDayButton = listItem.querySelector('.remove-from-day');
        if (removeFromDayButton) {
            removeFromDayButton.addEventListener('click', () => {
                const dayId = activity.day;
                activity.day = null;
                updatePlannerUI();
                updateDaySummary(dayId);
                savePlanner();
            });
        }

        // Add to total cost
        totalCost += activity.price;
    });

    // Update summary
    totalActivitiesElement.textContent = selectedActivities.length;
    totalCostElement.textContent = totalCost.toLocaleString();
    totalCostUsdElement.textContent = (totalCost * JPY_TO_USD_RATE).toFixed(2);

    // Update map markers if map is initialized
    if (map) {
        updateMapMarkers();
    }
}

// Clear planner
function clearPlanner() {
    if (selectedActivities.length === 0) return;

    if (confirm('Are you sure you want to clear your planner?')) {
        selectedActivities = [];
        updatePlannerUI();
        savePlanner();
    }
}

// Save planner to localStorage
function savePlanner() {
    const plannerData = {
        activities: selectedActivities,
        days: days,
        planName: currentPlanName
    };
    localStorage.setItem('tokyoTripPlanner', JSON.stringify(plannerData));
}

// Load saved planner from localStorage
function loadSavedPlanner() {
    const savedPlanner = localStorage.getItem('tokyoTripPlanner');

    if (savedPlanner) {
        try {
            const plannerData = JSON.parse(savedPlanner);

            // Handle old format (just an array of activities)
            if (Array.isArray(plannerData)) {
                const savedActivities = plannerData;

                // Ensure we have the most up-to-date activity data
                selectedActivities = savedActivities.map(savedActivity => {
                    // If we're loading activities saved with the old structure,
                    // find the updated activity data using the ID
                    if (!savedActivity.hasOwnProperty('category')) {
                        const currentActivity = findActivityById(savedActivity.id);
                        return currentActivity ? {...currentActivity, day: null} : savedActivity; // Fallback to saved data if not found
                    }
                    return {...savedActivity, day: null};
                });

                // Initialize empty days array
                days = [];
            } 
            // Handle new format (object with activities and days)
            else {
                // Load activities
                if (plannerData.activities) {
                    selectedActivities = plannerData.activities.map(savedActivity => {
                        const currentActivity = findActivityById(savedActivity.id);
                        return currentActivity ? 
                            {...currentActivity, day: savedActivity.day} : 
                            savedActivity;
                    });
                }

                // Load days
                if (plannerData.days) {
                    days = plannerData.days;
                }

                // Load plan name
                if (plannerData.planName) {
                    currentPlanName = plannerData.planName;
                    document.getElementById('plan-name').value = currentPlanName;
                }

                // Rebuild days UI
                const daySelector = document.getElementById('day-selector');
                const itineraryContainer = document.getElementById('itinerary-container');

                // Clear existing days
                while (daySelector.options.length > 1) {
                    daySelector.remove(1);
                }
                itineraryContainer.innerHTML = '';

                // Add days from saved data
                days.forEach(day => {
                    const option = document.createElement('option');
                    option.value = day.id;
                    option.textContent = day.name;
                    daySelector.appendChild(option);

                    // Create day card
                    const dayCard = document.createElement('div');
                    dayCard.className = 'day-card';
                    dayCard.setAttribute('data-day-id', day.id);

                    dayCard.innerHTML = `
                        <div class="day-header">
                            <h3>${day.name}</h3>
                            <button class="remove-day" data-day-id="${day.id}">Remove Day</button>
                        </div>
                        <ul class="day-activities">
                            <li>No activities planned for this day.</li>
                        </ul>
                        <div class="day-summary">
                            <p>Total Activities: <span class="day-total-activities">0</span></p>
                            <p>Total Cost: ¥<span class="day-total-cost">0</span> ($<span class="day-total-cost-usd">0</span> USD)</p>
                        </div>
                    `;

                    itineraryContainer.appendChild(dayCard);

                    // Add event listener to remove day button
                    const removeBtn = dayCard.querySelector('.remove-day');
                    removeBtn.addEventListener('click', function() {
                        const dayId = parseInt(this.getAttribute('data-day-id'));
                        removeDay(dayId);
                    });

                    updateDaySummary(day.id);
                });
            }

            updatePlannerUI();
        } catch (error) {
            console.error('Error loading saved planner:', error);
            // If there's an error, start with empty planner
            selectedActivities = [];
            days = [];
        }
    }
}

// Setup filter functionality
function setupFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const distanceFilter = document.getElementById('distance-filter');
    const credibilityFilter = document.getElementById('credibility-filter');
    const searchFilter = document.getElementById('search-filter');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const resetFiltersBtn = document.getElementById('reset-filters');

    // Populate category filter with unique categories
    const categories = activities.map(cat => cat.category);
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    // Apply filters when button is clicked
    applyFiltersBtn.addEventListener('click', function() {
        const selectedCategory = categoryFilter.value;
        const selectedPrice = priceFilter.value;
        const selectedDistance = distanceFilter.value;
        const selectedCredibility = credibilityFilter.value;
        const searchTerm = searchFilter.value.toLowerCase();

        // Filter activities based on selected criteria
        activities.forEach(categoryGroup => {
            // Find the category header by iterating through all headers and checking text content
            let categoryHeader = null;
            document.querySelectorAll('.category-header h3').forEach(header => {
                if (header.textContent === categoryGroup.category) {
                    categoryHeader = header.closest('.category-header');
                }
            });

            if (!categoryHeader) return;

            const categoryContainer = categoryHeader.nextElementSibling;

            // Check if category matches filter
            const categoryMatch = selectedCategory === 'all' || selectedCategory === categoryGroup.category;

            if (!categoryMatch) {
                categoryHeader.style.display = 'none';
                categoryContainer.style.display = 'none';
                return;
            }

            // Show category header if it matches
            categoryHeader.style.display = 'block';
            categoryContainer.style.display = 'grid';

            // Filter items within the category
            const activityCards = categoryContainer.querySelectorAll('.activity-card');
            activityCards.forEach(card => {
                const title = card.querySelector('.activity-title').textContent.toLowerCase();
                const description = card.querySelector('.activity-description').textContent.toLowerCase();
                const priceText = card.querySelector('.activity-price').textContent;
                const price = parseInt(priceText.match(/¥([0-9,]+)/)[1].replace(',', ''));

                // Check if item matches search term
                const searchMatch = searchTerm === '' || 
                                   title.includes(searchTerm) || 
                                   description.includes(searchTerm);

                // Check if item matches price filter
                let priceMatch = true;
                if (selectedPrice === 'free') {
                    priceMatch = price === 0;
                } else if (selectedPrice === 'cheap') {
                    priceMatch = price > 0 && price <= 3000;
                } else if (selectedPrice === 'moderate') {
                    priceMatch = price > 3000 && price <= 8000;
                } else if (selectedPrice === 'expensive') {
                    priceMatch = price > 8000;
                }

                // Check if item matches distance filter
                let distanceMatch = true;
                const distanceElement = card.querySelector('.activity-distance');
                if (distanceElement && selectedDistance !== 'all') {
                    const distanceText = distanceElement.textContent;
                    const distanceRegexMatch = distanceText.match(/([0-9.]+) km/);
                    if (distanceRegexMatch) {
                        const distance = parseFloat(distanceRegexMatch[1]);
                        if (selectedDistance === 'very-close') {
                            distanceMatch = distance <= 0.3;
                        } else if (selectedDistance === 'close') {
                            distanceMatch = distance > 0.3 && distance <= 0.8;
                        } else if (selectedDistance === 'moderate') {
                            distanceMatch = distance > 0.8 && distance <= 2;
                        } else if (selectedDistance === 'far') {
                            distanceMatch = distance > 2;
                        }
                    }
                }

                // Check if item matches credibility filter
                let credibilityMatch = true;
                if (selectedCredibility === 'verified') {
                    // Get the activity ID from the data-id attribute of the "Add to Planner" button
                    const addButton = card.querySelector('.add-to-planner');
                    if (addButton) {
                        const activityId = parseInt(addButton.getAttribute('data-id'));

                        // Find the activity in the data
                        let activity = null;
                        for (const catGroup of activities) {
                            const found = catGroup.items.find(item => item.id === activityId);
                            if (found) {
                                activity = found;
                                break;
                            }
                        }

                        // Check if the activity is verified
                        credibilityMatch = activity && activity.verified === true;
                    } else {
                        credibilityMatch = false;
                    }
                }

                // Show or hide the card based on filters
                card.style.display = searchMatch && priceMatch && distanceMatch && credibilityMatch ? 'block' : 'none';
            });

            // Hide category if all items are hidden
            const visibleCards = Array.from(activityCards).filter(card => card.style.display !== 'none');
            if (visibleCards.length === 0) {
                categoryHeader.style.display = 'none';
                categoryContainer.style.display = 'none';
            }
        });
    });

    // Reset filters when button is clicked
    resetFiltersBtn.addEventListener('click', function() {
        categoryFilter.value = 'all';
        priceFilter.value = 'all';
        distanceFilter.value = 'all';
        credibilityFilter.value = 'all';
        searchFilter.value = '';

        // Show all activities
        document.querySelectorAll('.category-header, .category-container').forEach(el => {
            el.style.display = '';
        });

        document.querySelectorAll('.activity-card').forEach(card => {
            card.style.display = '';
        });
    });
}

// Setup tab functionality
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');

            // Initialize map if map tab is clicked
            if (tabId === 'map') {
                initMap();
            }
        });
    });

    // Same for modal tabs
    const modalTabs = document.querySelectorAll('.modal-tab');
    const modalContents = document.querySelectorAll('.modal-tab-content');

    modalTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            modalTabs.forEach(t => t.classList.remove('active'));
            modalContents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// Setup itinerary functionality
function setupItinerary() {
    const addDayBtn = document.getElementById('add-day');
    const daySelector = document.getElementById('day-selector');
    const itineraryContainer = document.getElementById('itinerary-container');

    // Add a day to the itinerary
    addDayBtn.addEventListener('click', function() {
        const dayNumber = days.length + 1;
        const day = {
            id: dayNumber,
            name: `Day ${dayNumber}`,
            activities: []
        };

        days.push(day);

        // Add day to selector
        const option = document.createElement('option');
        option.value = day.id;
        option.textContent = day.name;
        daySelector.appendChild(option);

        // Create day card in itinerary
        createDayCard(day);

        // Update day selector
        daySelector.value = day.id;
    });

    // Change displayed day when selector changes
    daySelector.addEventListener('change', function() {
        const selectedDay = this.value;

        if (selectedDay === 'all') {
            // Show all days
            document.querySelectorAll('.day-card').forEach(card => {
                card.style.display = 'block';
            });
        } else {
            // Show only selected day
            document.querySelectorAll('.day-card').forEach(card => {
                card.style.display = card.getAttribute('data-day-id') === selectedDay ? 'block' : 'none';
            });
        }
    });

    // Create a day card in the itinerary
    function createDayCard(day) {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        dayCard.setAttribute('data-day-id', day.id);

        dayCard.innerHTML = `
            <div class="day-header">
                <h3>${day.name}</h3>
                <button class="remove-day" data-day-id="${day.id}">Remove Day</button>
            </div>
            <ul class="day-activities">
                ${day.activities.length === 0 ? '<li>No activities planned for this day.</li>' : ''}
            </ul>
            <div class="day-summary">
                <p>Total Activities: <span class="day-total-activities">0</span></p>
                <p>Total Cost: ¥<span class="day-total-cost">0</span> ($<span class="day-total-cost-usd">0</span> USD)</p>
            </div>
        `;

        itineraryContainer.appendChild(dayCard);

        // Add event listener to remove day button
        const removeBtn = dayCard.querySelector('.remove-day');
        removeBtn.addEventListener('click', function() {
            const dayId = parseInt(this.getAttribute('data-day-id'));
            removeDay(dayId);
        });

        updateDaySummary(day.id);
    }

    // Remove a day from the itinerary
    function removeDay(dayId) {
        // Remove day from days array
        days = days.filter(day => day.id !== dayId);

        // Remove day from selector
        const option = daySelector.querySelector(`option[value="${dayId}"]`);
        if (option) {
            daySelector.removeChild(option);
        }

        // Remove day card from itinerary
        const dayCard = itineraryContainer.querySelector(`.day-card[data-day-id="${dayId}"]`);
        if (dayCard) {
            itineraryContainer.removeChild(dayCard);
        }

        // Reset day selector to "All Days"
        daySelector.value = 'all';

        // Update activities that were assigned to this day
        selectedActivities.forEach(activity => {
            if (activity.day === dayId) {
                activity.day = null;
            }
        });

        // Update planner UI
        updatePlannerUI();
    }
}

// Update day summary (total activities and cost)
function updateDaySummary(dayId) {
    const dayCard = document.querySelector(`.day-card[data-day-id="${dayId}"]`);
    if (!dayCard) return;

    const dayActivities = selectedActivities.filter(activity => activity.day === dayId);
    const totalActivities = dayActivities.length;
    let totalCost = 0;

    dayActivities.forEach(activity => {
        totalCost += activity.price;
    });

    dayCard.querySelector('.day-total-activities').textContent = totalActivities;
    dayCard.querySelector('.day-total-cost').textContent = totalCost.toLocaleString();
    dayCard.querySelector('.day-total-cost-usd').textContent = (totalCost * JPY_TO_USD_RATE).toFixed(2);

    // Update activities list
    const activitiesList = dayCard.querySelector('.day-activities');
    activitiesList.innerHTML = '';

    if (dayActivities.length === 0) {
        activitiesList.innerHTML = '<li>No activities planned for this day.</li>';
        return;
    }

    dayActivities.forEach(activity => {
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            <div>
                <span>${activity.title} - ¥${activity.price.toLocaleString()} ($${(activity.price * JPY_TO_USD_RATE).toFixed(2)} USD)</span>
                <p class="selected-activity-address">Address: ${activity.address}</p>
            </div>
            <button class="remove-from-day" data-id="${activity.id}">Remove</button>
        `;

        activitiesList.appendChild(listItem);

        // Add event listener to remove button
        const removeBtn = listItem.querySelector('.remove-from-day');
        removeBtn.addEventListener('click', function() {
            const activityId = parseInt(this.getAttribute('data-id'));
            const activity = selectedActivities.find(a => a.id === activityId);
            if (activity) {
                activity.day = null;
                updatePlannerUI();
                updateDaySummary(dayId);
            }
        });
    });
}

// Initialize Google Map
function initMap() {
    if (map) return; // Map already initialized

    const mapContainer = document.getElementById('map-container');

    // Create map centered on Tokyo
    map = new google.maps.Map(mapContainer, {
        center: { lat: 35.6762, lng: 139.6503 },
        zoom: 12
    });

    // Initialize Directions Service and Renderer
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        panel: document.getElementById('directions-panel')
    });

    // Add markers for selected activities
    updateMapMarkers();

    // Add event listener for show routes button
    const showRoutesBtn = document.getElementById('show-routes-btn');
    if (showRoutesBtn) {
        showRoutesBtn.addEventListener('click', showTransportationRoutes);
    }
}

// Update map markers based on selected activities
function updateMapMarkers() {
    if (!map) return;

    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    // Add marker for Shinjuku Warm House (reference point)
    const warmHouseMarker = new google.maps.Marker({
        position: shinjukuWarmHouse.coordinates,
        map: map,
        title: shinjukuWarmHouse.name,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    markers.push(warmHouseMarker);

    // Add info window for Warm House
    const warmHouseInfo = new google.maps.InfoWindow({
        content: `<div><strong>${shinjukuWarmHouse.name}</strong><br>${shinjukuWarmHouse.address}</div>`
    });

    warmHouseMarker.addListener('click', function() {
        warmHouseInfo.open(map, warmHouseMarker);
    });

    // Add markers for selected activities
    selectedActivities.forEach(activity => {
        // Skip activities without coordinates
        if (!activity.coordinates) {
            // Try to geocode the address
            geocodeAddress(activity);
            return;
        }

        const marker = new google.maps.Marker({
            position: activity.coordinates,
            map: map,
            title: activity.title,
            icon: activity.day ? `http://maps.google.com/mapfiles/ms/icons/green-dot.png` : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
        });

        markers.push(marker);

        // Add info window
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div>
                    <strong>${activity.title}</strong><br>
                    ${activity.description}<br>
                    Price: ¥${activity.price.toLocaleString()}<br>
                    ${activity.day ? `<strong>Planned for Day ${activity.day}</strong>` : ''}
                </div>
            `
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    });

    // Fit map to markers if there are any
    if (markers.length > 1) {
        const bounds = new google.maps.LatLngBounds();
        markers.forEach(marker => bounds.extend(marker.getPosition()));
        map.fitBounds(bounds);
    }
}

// Show transportation routes between activities
function showTransportationRoutes() {
    if (!map || !directionsService || !directionsRenderer || selectedActivities.length < 2) {
        alert('Please add at least two activities to your planner to show routes.');
        return;
    }

    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    // Get selected transport mode
    const transportMode = document.getElementById('transport-mode').value;

    // Sort activities by day if they have day assignments
    const sortedActivities = [...selectedActivities].sort((a, b) => {
        // If both have day assignments, sort by day
        if (a.day && b.day) {
            return a.day - b.day;
        }
        // If only one has a day assignment, put it first
        if (a.day) return -1;
        if (b.day) return 1;
        // If neither has a day assignment, keep original order
        return 0;
    });

    // Filter activities with coordinates
    const activitiesWithCoords = sortedActivities.filter(activity => activity.coordinates);

    if (activitiesWithCoords.length < 2) {
        alert('Not enough activities with location data. Please add more activities.');
        updateMapMarkers(); // Restore markers
        return;
    }

    // Create waypoints for activities between first and last
    const waypoints = activitiesWithCoords.slice(1, activitiesWithCoords.length - 1).map(activity => ({
        location: activity.coordinates,
        stopover: true
    }));

    // Create request for directions
    const request = {
        origin: activitiesWithCoords[0].coordinates,
        destination: activitiesWithCoords[activitiesWithCoords.length - 1].coordinates,
        waypoints: waypoints,
        travelMode: google.maps.TravelMode[transportMode],
        optimizeWaypoints: true
    };

    // Get directions
    directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
            // Display directions
            directionsRenderer.setDirections(result);

            // Create summary of the route
            let totalDistance = 0;
            let totalDuration = 0;

            result.routes[0].legs.forEach(leg => {
                totalDistance += leg.distance.value;
                totalDuration += leg.duration.value;
            });

            // Convert to km and minutes
            totalDistance = (totalDistance / 1000).toFixed(1);
            totalDuration = Math.round(totalDuration / 60);

            // Add summary to directions panel
            const directionsPanel = document.getElementById('directions-panel');
            const summary = document.createElement('div');
            summary.className = 'directions-summary';
            summary.innerHTML = `
                <h3>Route Summary</h3>
                <p>Total Distance: ${totalDistance} km</p>
                <p>Total Duration: ${totalDuration} minutes</p>
                <p>Transport Mode: ${transportMode.charAt(0) + transportMode.slice(1).toLowerCase()}</p>
            `;
            directionsPanel.insertBefore(summary, directionsPanel.firstChild);
        } else {
            alert('Could not calculate directions: ' + status);
            updateMapMarkers(); // Restore markers
        }
    });
}

// Geocode address to get coordinates
function geocodeAddress(activity) {
    // This is a placeholder - in a real app, you would use the Google Maps Geocoding API
    // For now, we'll assign random coordinates near Tokyo
    const lat = 35.6762 + (Math.random() - 0.5) * 0.1;
    const lng = 139.6503 + (Math.random() - 0.5) * 0.1;

    activity.coordinates = { lat, lng };

    // Add marker for this activity
    const marker = new google.maps.Marker({
        position: activity.coordinates,
        map: map,
        title: activity.title,
        icon: activity.day ? `http://maps.google.com/mapfiles/ms/icons/green-dot.png` : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    });

    markers.push(marker);

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div>
                <strong>${activity.title}</strong><br>
                ${activity.description}<br>
                Price: ¥${activity.price.toLocaleString()}<br>
                ${activity.day ? `<strong>Planned for Day ${activity.day}</strong>` : ''}
            </div>
        `
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}

// Setup user account functionality
function setupUserAccount() {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const savedPlansBtn = document.getElementById('saved-plans-btn');
    const userStatus = document.getElementById('user-status');
    const userProfile = document.getElementById('user-profile');
    const usernameDisplay = document.getElementById('username-display');
    const authModal = document.getElementById('auth-modal');
    const plansModal = document.getElementById('plans-modal');
    const closeBtns = document.querySelectorAll('.close');

    // Show login modal
    loginBtn.addEventListener('click', function() {
        authModal.style.display = 'block';
        document.querySelector('.modal-tab[data-tab="login"]').click();
    });

    // Show register modal
    registerBtn.addEventListener('click', function() {
        authModal.style.display = 'block';
        document.querySelector('.modal-tab[data-tab="register"]').click();
    });

    // Close modals when X is clicked
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            authModal.style.display = 'none';
            plansModal.style.display = 'none';
        });
    });

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === authModal) {
            authModal.style.display = 'none';
        }
        if (event.target === plansModal) {
            plansModal.style.display = 'none';
        }
    });

    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (login(username, password)) {
            authModal.style.display = 'none';
            alert('Login successful!');
        } else {
            alert('Invalid username or password.');
        }
    });

    // Handle register form submission
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (register(username, password)) {
            authModal.style.display = 'none';
            alert('Registration successful! You are now logged in.');
        } else {
            alert('Username already exists.');
        }
    });

    // Handle logout
    logoutBtn.addEventListener('click', function() {
        logout();
    });

    // Show saved plans
    savedPlansBtn.addEventListener('click', function() {
        displaySavedPlans();
        plansModal.style.display = 'block';
    });

    // Login function
    function login(username, password) {
        if (!users[username] || users[username].password !== password) {
            return false;
        }

        currentUser = username;
        updateUserUI();
        loadUserPlans();
        return true;
    }

    // Register function
    function register(username, password) {
        if (users[username]) {
            return false;
        }

        users[username] = {
            password: password,
            plans: {}
        };

        saveUsers();
        currentUser = username;
        updateUserUI();
        return true;
    }

    // Logout function
    function logout() {
        currentUser = null;
        updateUserUI();

        // Clear current planner and load default
        clearPlanner();
        loadSavedPlanner();
    }

    // Update UI based on login status
    function updateUserUI() {
        if (currentUser) {
            userStatus.style.display = 'none';
            userProfile.style.display = 'flex';
            usernameDisplay.textContent = currentUser;
        } else {
            userStatus.style.display = 'flex';
            userProfile.style.display = 'none';
        }
    }

    // Display saved plans in the modal
    function displaySavedPlans() {
        const plansList = document.getElementById('saved-plans-list');
        plansList.innerHTML = '';

        if (!currentUser || !users[currentUser].plans || Object.keys(users[currentUser].plans).length === 0) {
            plansList.innerHTML = '<p>No saved plans found.</p>';
            return;
        }

        for (const planName in users[currentUser].plans) {
            const plan = users[currentUser].plans[planName];
            const planItem = document.createElement('div');
            planItem.className = 'saved-plan-item';

            planItem.innerHTML = `
                <h4>${planName}</h4>
                <p>Activities: ${plan.activities.length}</p>
                <p>Total Cost: ¥${plan.totalCost.toLocaleString()} ($${(plan.totalCost * JPY_TO_USD_RATE).toFixed(2)} USD)</p>
                <div class="saved-plan-actions">
                    <button class="load-plan" data-plan="${planName}">Load Plan</button>
                    <button class="delete-plan" data-plan="${planName}">Delete</button>
                </div>
            `;

            plansList.appendChild(planItem);

            // Add event listeners to buttons
            planItem.querySelector('.load-plan').addEventListener('click', function() {
                const planName = this.getAttribute('data-plan');
                loadPlan(planName);
                plansModal.style.display = 'none';
            });

            planItem.querySelector('.delete-plan').addEventListener('click', function() {
                const planName = this.getAttribute('data-plan');
                if (confirm(`Are you sure you want to delete the plan "${planName}"?`)) {
                    deletePlan(planName);
                    displaySavedPlans();
                }
            });
        }
    }
}

// Load users from localStorage
function loadUsers() {
    const savedUsers = localStorage.getItem('tokyoTripUsers');
    if (savedUsers) {
        users = JSON.parse(savedUsers);
    }

    const savedPlansData = localStorage.getItem('tokyoTripSavedPlans');
    if (savedPlansData) {
        savedPlans = JSON.parse(savedPlansData);
    }
}

// Save users to localStorage
function saveUsers() {
    localStorage.setItem('tokyoTripUsers', JSON.stringify(users));
}

// Save current plan
function savePlan() {
    if (!currentUser) {
        alert('Please log in to save your plan.');
        document.getElementById('login-btn').click();
        return;
    }

    const planName = document.getElementById('plan-name').value || 'My Tokyo Trip';

    // Calculate total cost
    let totalCost = 0;
    selectedActivities.forEach(activity => {
        totalCost += activity.price;
    });

    // Save plan to user's plans
    users[currentUser].plans[planName] = {
        activities: selectedActivities,
        days: days,
        totalCost: totalCost
    };

    saveUsers();
    alert(`Plan "${planName}" saved successfully!`);
}

// Load a saved plan
function loadPlan(planName) {
    if (!currentUser || !users[currentUser].plans[planName]) {
        alert('Plan not found.');
        return;
    }

    const plan = users[currentUser].plans[planName];

    // Clear current plan
    clearPlanner();

    // Load activities and days
    selectedActivities = plan.activities;
    days = plan.days;

    // Update UI
    document.getElementById('plan-name').value = planName;
    currentPlanName = planName;

    // Rebuild days UI
    const daySelector = document.getElementById('day-selector');
    const itineraryContainer = document.getElementById('itinerary-container');

    // Clear existing days
    while (daySelector.options.length > 1) {
        daySelector.remove(1);
    }
    itineraryContainer.innerHTML = '';

    // Add days from plan
    days.forEach(day => {
        const option = document.createElement('option');
        option.value = day.id;
        option.textContent = day.name;
        daySelector.appendChild(option);

        // Create day card
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        dayCard.setAttribute('data-day-id', day.id);

        dayCard.innerHTML = `
            <div class="day-header">
                <h3>${day.name}</h3>
                <button class="remove-day" data-day-id="${day.id}">Remove Day</button>
            </div>
            <ul class="day-activities">
                ${day.activities.length === 0 ? '<li>No activities planned for this day.</li>' : ''}
            </ul>
            <div class="day-summary">
                <p>Total Activities: <span class="day-total-activities">0</span></p>
                <p>Total Cost: ¥<span class="day-total-cost">0</span> ($<span class="day-total-cost-usd">0</span> USD)</p>
            </div>
        `;

        itineraryContainer.appendChild(dayCard);

        // Add event listener to remove day button
        const removeBtn = dayCard.querySelector('.remove-day');
        removeBtn.addEventListener('click', function() {
            const dayId = parseInt(this.getAttribute('data-day-id'));
            removeDay(dayId);
        });

        updateDaySummary(day.id);
    });

    updatePlannerUI();

    // Update map if it's initialized
    if (map) {
        updateMapMarkers();
    }
}

// Delete a saved plan
function deletePlan(planName) {
    if (!currentUser || !users[currentUser].plans[planName]) {
        alert('Plan not found.');
        return;
    }

    delete users[currentUser].plans[planName];
    saveUsers();
    alert(`Plan "${planName}" deleted successfully!`);
}

// Load user's plans
function loadUserPlans() {
    if (!currentUser) return;

    // If user has no plans, create an empty plans object
    if (!users[currentUser].plans) {
        users[currentUser].plans = {};
    }
}

// Fetch weather data from OpenWeatherMap API
function fetchWeatherData() {
    const weatherContainer = document.getElementById('weather-container');

    // Tokyo coordinates
    const lat = 35.6762;
    const lon = 139.6503;

    // OpenWeatherMap API key (replace with your actual API key in production)
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

    // API URL for 5-day forecast
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    // For demo purposes, we'll use mock data instead of making an actual API call
    // In a production environment, you would use fetch() to call the API

    // Mock weather data (5-day forecast)
    const mockWeatherData = {
        list: [
            {
                dt: Date.now() / 1000,
                main: { temp: 22, humidity: 65 },
                weather: [{ description: 'Sunny', icon: '01d' }],
                dt_txt: new Date().toISOString().split('T')[0]
            },
            {
                dt: Date.now() / 1000 + 86400,
                main: { temp: 24, humidity: 60 },
                weather: [{ description: 'Partly cloudy', icon: '02d' }],
                dt_txt: new Date(Date.now() + 86400000).toISOString().split('T')[0]
            },
            {
                dt: Date.now() / 1000 + 172800,
                main: { temp: 23, humidity: 70 },
                weather: [{ description: 'Light rain', icon: '10d' }],
                dt_txt: new Date(Date.now() + 172800000).toISOString().split('T')[0]
            },
            {
                dt: Date.now() / 1000 + 259200,
                main: { temp: 21, humidity: 75 },
                weather: [{ description: 'Cloudy', icon: '03d' }],
                dt_txt: new Date(Date.now() + 259200000).toISOString().split('T')[0]
            },
            {
                dt: Date.now() / 1000 + 345600,
                main: { temp: 20, humidity: 80 },
                weather: [{ description: 'Rain', icon: '09d' }],
                dt_txt: new Date(Date.now() + 345600000).toISOString().split('T')[0]
            }
        ]
    };

    // In a real application, you would use:
    /*
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not available');
            }
            return response.json();
        })
        .then(data => {
            weatherData = data;
            displayWeatherData();
        })
        .catch(error => {
            weatherContainer.innerHTML = `<div class="weather-error">Error fetching weather data: ${error.message}</div>`;
        });
    */

    // For demo, use mock data
    setTimeout(() => {
        weatherData = mockWeatherData;
        displayWeatherData();
    }, 1000); // Simulate network delay
}

// Display weather data in the UI
function displayWeatherData() {
    const weatherContainer = document.getElementById('weather-container');

    if (!weatherData || !weatherData.list || weatherData.list.length === 0) {
        weatherContainer.innerHTML = '<div class="weather-error">Weather data not available</div>';
        return;
    }

    // Clear loading message
    weatherContainer.innerHTML = '';

    // Get unique dates (one forecast per day)
    const uniqueDates = [];
    const dailyForecasts = [];

    weatherData.list.forEach(forecast => {
        const date = forecast.dt_txt.split(' ')[0];
        if (!uniqueDates.includes(date)) {
            uniqueDates.push(date);
            dailyForecasts.push(forecast);
        }
    });

    // Create weather day cards
    dailyForecasts.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = dayNames[date.getDay()];
        const formattedDate = `${dayName}, ${date.getDate()}/${date.getMonth() + 1}`;

        const weatherDay = document.createElement('div');
        weatherDay.className = 'weather-day';

        weatherDay.innerHTML = `
            <div class="weather-date">${formattedDate}</div>
            <img class="weather-icon" src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="${forecast.weather[0].description}">
            <div class="weather-temp">${Math.round(forecast.main.temp)}°C</div>
            <div class="weather-description">${forecast.weather[0].description}</div>
        `;

        weatherContainer.appendChild(weatherDay);
    });
}

// Initialize review modal
function initReviewModal() {
    const reviewModal = document.getElementById('review-modal');
    const reviewForm = document.getElementById('review-form');
    const closeButtons = reviewModal.querySelectorAll('.close, .review-cancel-btn');

    // Close modal when clicking close button or cancel button
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            reviewModal.style.display = 'none';
        });
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === reviewModal) {
            reviewModal.style.display = 'none';
        }
    });

    // Handle form submission
    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();
        saveReview();
    });
}

// Show add review form
function showAddReviewForm(activity) {
    const reviewModal = document.getElementById('review-modal');
    const activityNameElement = document.getElementById('review-activity-name');
    const reviewForm = document.getElementById('review-form');

    // Store the activity being reviewed
    currentReviewActivity = activity;

    // Set activity name in the modal
    activityNameElement.innerHTML = `<p>You are reviewing: <strong>${activity.title}</strong></p>`;

    // Reset form
    reviewForm.reset();

    // Show modal
    reviewModal.style.display = 'block';
}

// Save review
function saveReview() {
    if (!currentReviewActivity) return;

    const rating = parseInt(document.querySelector('input[name="rating"]:checked').value);
    const name = document.getElementById('reviewer-name').value.trim();
    const text = document.getElementById('review-text').value.trim();

    // Create review object
    const review = {
        rating: rating,
        name: name,
        text: text,
        date: new Date().toLocaleDateString()
    };

    // Initialize reviews array if it doesn't exist
    if (!currentReviewActivity.reviews) {
        currentReviewActivity.reviews = [];
    }

    // Add review to activity
    currentReviewActivity.reviews.push(review);

    // Save to localStorage (if needed)
    // In a real app, you would save this to a database
    localStorage.setItem('activityReviews', JSON.stringify(
        activities.map(category => ({
            category: category.category,
            items: category.items.map(item => ({
                id: item.id,
                reviews: item.reviews || []
            }))
        }))
    ));

    // Close modal
    document.getElementById('review-modal').style.display = 'none';

    // Refresh activities display to show the new review
    displayActivities();

    // Show confirmation
    alert('Thank you for your review!');
}

// Initialize share modal
function initShareModal() {
    const shareModal = document.getElementById('share-modal');
    const shareButton = document.getElementById('share-plan');
    const closeButtons = shareModal.querySelectorAll('.close');
    const copyLinkButton = document.getElementById('copy-link-btn');
    const socialButtons = shareModal.querySelectorAll('.social-btn');
    const downloadQrButton = document.getElementById('download-qr-btn');

    // Show modal when clicking share button
    shareButton.addEventListener('click', () => {
        // Generate shareable link
        const shareableLink = generateShareableLink();
        document.getElementById('share-link').value = shareableLink;

        // Generate QR code (placeholder)
        generateQRCode(shareableLink);

        // Show modal
        shareModal.style.display = 'block';
    });

    // Close modal when clicking close button
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            shareModal.style.display = 'none';
        });
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === shareModal) {
            shareModal.style.display = 'none';
        }
    });

    // Copy link to clipboard
    copyLinkButton.addEventListener('click', () => {
        const linkInput = document.getElementById('share-link');
        linkInput.select();
        document.execCommand('copy');
        alert('Link copied to clipboard!');
    });

    // Handle social media sharing
    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            const shareableLink = document.getElementById('share-link').value;
            const planName = document.getElementById('plan-name').value || 'My Tokyo Trip';
            const shareText = `Check out my Tokyo trip plan: ${planName}`;

            let shareUrl = '';

            if (button.classList.contains('facebook')) {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareableLink)}&quote=${encodeURIComponent(shareText)}`;
            } else if (button.classList.contains('twitter')) {
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareableLink)}`;
            } else if (button.classList.contains('whatsapp')) {
                shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareableLink)}`;
            } else if (button.classList.contains('email')) {
                shareUrl = `mailto:?subject=${encodeURIComponent('My Tokyo Trip Plan')}&body=${encodeURIComponent(shareText + '\n\n' + shareableLink)}`;
            }

            if (shareUrl) {
                window.open(shareUrl, '_blank');
            }
        });
    });

    // Download QR code
    downloadQrButton.addEventListener('click', () => {
        // In a real app, this would generate and download a QR code image
        alert('QR code download functionality would be implemented in a production environment.');
    });
}

// Generate shareable link
function generateShareableLink() {
    // In a real app, this would generate a unique URL with the plan data
    // For demo purposes, we'll create a dummy URL with the plan name and activities
    const planName = document.getElementById('plan-name').value || 'My Tokyo Trip';
    const activityIds = selectedActivities.map(activity => activity.id).join(',');

    return `https://tokyotripplanner.example.com/share?plan=${encodeURIComponent(planName)}&activities=${activityIds}`;
}

// Generate QR code
function generateQRCode(url) {
    // In a real app, this would generate a QR code image
    // For demo purposes, we'll just show the URL in the QR code container
    const qrCodeContainer = document.getElementById('qr-code');
    qrCodeContainer.innerHTML = 'QR Code for:<br>' + url.substring(0, 30) + '...';
}

// Initialize ChatGPT functionality
function initChatGPT() {
    const chatgptSubmit = document.getElementById('chatgpt-submit');
    const chatgptQuestion = document.getElementById('chatgpt-question');
    const chatgptResponse = document.getElementById('chatgpt-response');

    if (!chatgptSubmit || !chatgptQuestion || !chatgptResponse) return;

    chatgptSubmit.addEventListener('click', () => {
        const question = chatgptQuestion.value.trim();
        if (!question) {
            alert('Please enter a question.');
            return;
        }

        // Show loading state
        chatgptResponse.innerHTML = '<p>Thinking...</p>';

        // Simulate ChatGPT response (in a real app, this would call an API)
        setTimeout(() => {
            const responses = {
                'best time to visit': 'The best time to visit Tokyo is during spring (March to May) for cherry blossoms or autumn (September to November) for pleasant weather and colorful foliage.',
                'transportation': 'Tokyo has an excellent public transportation system. The JR Yamanote Line circles central Tokyo, and the subway network is extensive. Consider getting a Suica or Pasmo card for convenient travel.',
                'food': 'Tokyo is a food paradise! Must-try dishes include sushi, ramen, tempura, yakitori, and tonkatsu. For the best experience, visit Tsukiji Outer Market, Shinjuku, or Shibuya areas.',
                'hotel': 'Good areas to stay in Tokyo include Shinjuku (convenient transportation), Shibuya (shopping and nightlife), Asakusa (traditional atmosphere), and Tokyo Station area (central location).',
                'language': 'While English signage is common in Tokyo, learning basic Japanese phrases like "Arigatou" (thank you) and "Sumimasen" (excuse me/sorry) will be appreciated by locals.',
                'budget': 'A moderate budget for Tokyo is about ¥15,000-25,000 per day, including accommodations, food, transportation, and activities. Budget travelers can manage with ¥8,000-15,000 per day.',
                'safety': 'Tokyo is one of the safest major cities in the world with very low crime rates. However, always keep an eye on your belongings in crowded areas and be prepared for natural disasters like earthquakes.',
                'soapland': 'Soaplands are adult entertainment establishments in Japan. The best areas to find them are Yoshiwara, Kawasaki, and Gotanda. Most require Japanese language skills, but some are foreigner-friendly.',
                'club': 'Popular nightclubs in Tokyo include Womb and Contact in Shibuya, Ageha in Koto, and V2 and Camelot in Roppongi. Most clubs open until early morning, with peak hours from midnight to 4 AM.',
                'bar': 'For unique bar experiences in Tokyo, check out Golden Gai in Shinjuku (tiny traditional bars), Robot Restaurant in Kabukicho (entertainment show), and Bar High Five in Ginza (award-winning cocktails).'
            };

            let responseText = 'I don\'t have specific information about that, but Tokyo offers many exciting experiences! Consider checking official tourism websites for the most up-to-date information.';

            // Check if the question contains any keywords
            for (const [keyword, response] of Object.entries(responses)) {
                if (question.toLowerCase().includes(keyword)) {
                    responseText = response;
                    break;
                }
            }

            chatgptResponse.innerHTML = `<p>${responseText}</p>`;
        }, 1000);
    });

    // Allow pressing Enter to submit
    chatgptQuestion.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            chatgptSubmit.click();
        }
    });
}

// Initialize budget tracker
function initBudgetTracker() {
    // Load budget and expenses from localStorage
    loadBudgetData();

    // Set up event listeners
    const setBudgetBtn = document.getElementById('set-budget-btn');
    const addExpenseBtn = document.getElementById('add-expense-btn');

    setBudgetBtn.addEventListener('click', setBudget);
    addExpenseBtn.addEventListener('click', addExpense);

    // Update UI
    updateBudgetUI();
}

// Load budget data from localStorage
function loadBudgetData() {
    const savedBudget = localStorage.getItem('tokyoTripBudget');
    const savedExpenses = localStorage.getItem('tokyoTripExpenses');

    if (savedBudget) {
        totalBudget = parseInt(savedBudget);
    }

    if (savedExpenses) {
        expenses = JSON.parse(savedExpenses);
    }
}

// Save budget data to localStorage
function saveBudgetData() {
    localStorage.setItem('tokyoTripBudget', totalBudget);
    localStorage.setItem('tokyoTripExpenses', JSON.stringify(expenses));
}

// Set budget
function setBudget() {
    const budgetInput = document.getElementById('total-budget');
    const budgetValue = parseInt(budgetInput.value);

    if (isNaN(budgetValue) || budgetValue < 0) {
        alert('Please enter a valid budget amount.');
        return;
    }

    totalBudget = budgetValue;
    saveBudgetData();
    updateBudgetUI();

    alert(`Budget set to ¥${totalBudget.toLocaleString()}`);
}

// Add expense
function addExpense() {
    const amountInput = document.getElementById('expense-amount');
    const descriptionInput = document.getElementById('expense-description');
    const categorySelect = document.getElementById('expense-category');

    const amount = parseInt(amountInput.value);
    const description = descriptionInput.value.trim();
    const category = categorySelect.value;

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense amount.');
        return;
    }

    if (description === '') {
        alert('Please enter a description for the expense.');
        return;
    }

    const expense = {
        id: Date.now(), // Use timestamp as unique ID
        amount: amount,
        description: description,
        category: category,
        date: new Date().toLocaleDateString()
    };

    expenses.push(expense);
    saveBudgetData();
    updateBudgetUI();

    // Clear inputs
    amountInput.value = '';
    descriptionInput.value = '';

    alert(`Expense added: ¥${amount.toLocaleString()} for ${description}`);
}

// Edit expense
function editExpense(id) {
    const expense = expenses.find(exp => exp.id === id);

    if (!expense) return;

    const newAmount = prompt('Enter new amount:', expense.amount);
    if (newAmount === null) return;

    const amount = parseInt(newAmount);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense amount.');
        return;
    }

    const newDescription = prompt('Enter new description:', expense.description);
    if (newDescription === null) return;

    if (newDescription.trim() === '') {
        alert('Please enter a description for the expense.');
        return;
    }

    expense.amount = amount;
    expense.description = newDescription.trim();

    saveBudgetData();
    updateBudgetUI();
}

// Delete expense
function deleteExpense(id) {
    if (confirm('Are you sure you want to delete this expense?')) {
        expenses = expenses.filter(expense => expense.id !== id);
        saveBudgetData();
        updateBudgetUI();
    }
}

// Update budget UI
function updateBudgetUI() {
    // Update budget total
    document.getElementById('budget-total').textContent = totalBudget.toLocaleString();

    // Calculate total spent
    const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    document.getElementById('budget-spent').textContent = totalSpent.toLocaleString();

    // Calculate remaining budget
    const remaining = totalBudget - totalSpent;
    document.getElementById('budget-remaining').textContent = remaining.toLocaleString();

    // Update progress bar
    const progressBar = document.getElementById('budget-progress-fill');
    const progressPercentage = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;
    progressBar.style.width = `${Math.min(progressPercentage, 100)}%`;

    // Change color based on percentage
    if (progressPercentage > 90) {
        progressBar.style.backgroundColor = '#f44336'; // Red
    } else if (progressPercentage > 70) {
        progressBar.style.backgroundColor = '#FF9800'; // Orange
    } else {
        progressBar.style.backgroundColor = '#4CAF50'; // Green
    }

    // Update category amounts
    expenseCategories.forEach(category => {
        const categoryTotal = expenses
            .filter(expense => expense.category === category)
            .reduce((sum, expense) => sum + expense.amount, 0);

        document.getElementById(`${category}-amount`).textContent = categoryTotal.toLocaleString();
    });

    // Update expense list
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    if (expenses.length === 0) {
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML = '<td colspan="4">No expenses added yet.</td>';
        expenseList.appendChild(emptyRow);
    } else {
        expenses.forEach(expense => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${expense.description}</td>
                <td>${expense.category.charAt(0).toUpperCase() + expense.category.slice(1)}</td>
                <td>¥${expense.amount.toLocaleString()}</td>
                <td class="expense-actions">
                    <button class="edit-expense" data-id="${expense.id}">Edit</button>
                    <button class="delete-expense" data-id="${expense.id}">Delete</button>
                </td>
            `;

            expenseList.appendChild(row);

            // Add event listeners to buttons
            const editBtn = row.querySelector('.edit-expense');
            const deleteBtn = row.querySelector('.delete-expense');

            editBtn.addEventListener('click', () => editExpense(expense.id));
            deleteBtn.addEventListener('click', () => deleteExpense(expense.id));
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
