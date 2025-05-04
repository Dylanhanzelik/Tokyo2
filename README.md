# Tokyo Trip Planner

A web application that helps users plan their trip to Tokyo by providing a curated list of top activities with prices.

## Features

- Browse top activities in Tokyo with descriptions and prices
- Add activities to your trip planner
- Calculate the total cost of your planned activities
- Remove activities from your planner
- Clear your entire planner
- Persistent storage (your selections are saved in your browser)
- Filter activities by category, price range, and search terms
- View selected activities on an interactive map
- Create day-by-day itineraries for your trip
- Create user accounts to save and manage multiple trip plans

## Activities Included

The planner includes various popular activities in Tokyo across different categories:

1. Tokyo Skytree (¥2,100)
2. Meiji Shrine (¥500)
3. Tsukiji Fish Market (¥3,500)
4. Senso-ji Temple (Free)
5. Tokyo Disneyland (¥8,200)
6. Shibuya Crossing (Free)
7. TeamLab Borderless Digital Art Museum (¥3,200)
8. Tokyo Tower (¥1,200)
9. Harajuku Shopping (¥5,000 estimated)
10. Sumo Wrestling Tournament (¥8,800)
11. Ueno Park (¥600)
12. Akihabara Electric Town (¥2,000 estimated)

### Soapland Options (All Foreigner-Friendly)
- Yoshiwara Soapland (¥15,000)
- Kawasaki Soapland (¥12,000)
- Gotanda Soapland (¥20,000)

### Shinjuku Soaplands (All Foreigner-Friendly)
- Kabukicho Soapland (¥18,000)
- Sapphire Soapland (¥25,000) - Luxury facilities and premium service
- Crystal Palace (¥30,000) - High-end with elegant atmosphere
- Blue Heaven (¥20,000) - Mid-range with excellent value
- Golden Touch (¥15,000) - Budget-friendly with quality service
- Platinum Paradise (¥35,000) - Luxury soapland with VIP rooms
- Ruby Massage (¥22,000) - Mid-range soapland with skilled masseuses
- Emerald Spa (¥28,000) - Upscale soapland with private rooms

### Love Hotels in Shinjuku
- Hotel Atlantis (¥8,000) - Luxury love hotel with themed rooms
- Hotel Adore (¥5,000) - Mid-range love hotel in Kabukicho area
- Love Castle (¥12,000) - Themed love hotel with variety of room options
- Hotel Amore (¥3,500) - Budget-friendly love hotel

### Shinjuku Pink Salons (All Foreigner-Friendly)
- Lip Service (¥8,000) - Popular pink salon with English-speaking staff
- Paradise Kiss (¥12,000) - Upscale pink salon with private booths
- Cherry Blossom (¥10,000) - Mid-range pink salon with relaxed atmosphere
- Tokyo Lips (¥6,000) - Budget-friendly pink salon with good service
- Velvet Touch (¥15,000) - High-end pink salon with luxurious interior
- Pink Diamond (¥14,000) - Upscale pink salon with private booths
- Silk Road (¥11,000) - Elegant pink salon with relaxing atmosphere
- Golden Lips (¥9,000) - Popular pink salon with reasonable prices

### Foreigner Friends Clubs
- Gaijin Paradise (¥10,000) - Popular club catering to foreigners with English-speaking staff
- International Lounge (¥15,000) - Upscale club for meeting local Japanese people
- Tokyo Friends (¥8,000) - Casual club designed for cultural exchange
- Global Connection (¥20,000) - High-end club offering premium drinks
- Sakura Social Club (¥12,000) - Friendly establishment with no language barrier

## How to Use

1. Open `index.html` in your web browser
2. Browse the list of activities
3. Click "Add to Planner" for activities you want to include in your trip
4. View your selected activities and total cost in the "Your Trip Planner" section
5. Remove activities or clear your planner as needed

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API

## Setup

No special setup is required. Simply clone the repository and open `index.html` in a web browser.

```bash
git clone </Users/dylanhanzelik/Documents/Codes/Tokyo>
cd tokyo-trip-planner
open index.html in your browser
```

## Hosting Options

There are several ways to host your Tokyo Trip Planner website online. Here are the most popular options:

### 1. GitHub Pages (Free)

GitHub Pages is a free hosting service provided by GitHub that allows you to host static websites directly from a GitHub repository.

1. Create a GitHub account if you don't have one already
2. Create a new repository on GitHub
3. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Dylanhanzelik/Tokyo.git
   git push -u origin main
   ```
4. Go to your repository settings on GitHub
5. Scroll down to the "GitHub Pages" section
6. Select the branch you want to deploy (usually `main`)
7. Click "Save"
8. Your website will be available at `https://yourusername.github.io/tokyo-trip-planner/`

### 2. Netlify (Free tier available)

Netlify offers a more advanced hosting platform with a generous free tier.

1. Create a Netlify account at [netlify.com](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect your GitHub, GitLab, or Bitbucket account
4. Select your repository
5. Configure build settings (for this static site, you can leave defaults)
6. Click "Deploy site"
7. Your site will be deployed with a Netlify subdomain (e.g., `tokyo-trip-planner.netlify.app`)
8. You can add a custom domain in the site settings if desired

### 3. Vercel (Free tier available)

Vercel is another excellent platform for hosting static websites.

1. Create a Vercel account at [vercel.com](https://vercel.com/)
2. Click "Import Project"
3. Import your repository from GitHub, GitLab, or Bitbucket
4. Configure project settings (defaults work for static sites)
5. Click "Deploy"
6. Your site will be deployed with a Vercel subdomain (e.g., `tokyo-trip-planner.vercel.app`)
7. You can add a custom domain in the project settings

### 4. Traditional Web Hosting

If you prefer traditional web hosting:

1. Sign up for a web hosting service (e.g., Bluehost, HostGator, SiteGround)
2. Set up your hosting account and obtain FTP credentials
3. Use an FTP client (like FileZilla) to upload your files:
   - Connect to your server using the FTP credentials
   - Upload all files from your project directory to the public_html or www folder on your server
4. Your website will be available at your domain name

### 5. Firebase Hosting (Free tier available)

Google's Firebase offers easy hosting for static websites:

1. Create a Firebase account at [firebase.google.com](https://firebase.google.com/)
2. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
3. Login to Firebase:
   ```bash
   firebase login
   ```
4. Initialize your project:
   ```bash
   firebase init
   ```
   - Select "Hosting" when prompted
   - Select your Firebase project or create a new one
   - Specify "src" as your public directory
   - Configure as a single-page app: No
5. Deploy your website:
   ```bash
   firebase deploy
   ```
6. Your site will be available at `https://your-project-id.web.app`

### Note About Google Maps API

This website uses the Google Maps API. When hosting the site publicly, you should:

1. Create your own Google Maps API key at [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the Maps JavaScript API
3. Replace the API key in the index.html file with your own key
4. Set up API key restrictions for security

## Future Enhancements

- Add weather forecast integration for better trip planning
- Implement public transportation routes between activities
- Add reviews and ratings for activities
- Create a mobile app version
- Add social sharing features to share trip plans with friends
- Implement budget tracking and expense management
- Add offline mode support for using the app without internet connection
- Implement multi-language support for international travelers
- Add augmented reality (AR) features to visualize activities at their locations
- Integrate with hotel and flight booking APIs for complete trip planning
- Add personalized recommendations based on user preferences and past trips
- Implement voice search and navigation for hands-free operation
- Add accessibility features for users with disabilities
- Integrate with wearable devices for real-time notifications during the trip
- Add virtual tour previews of popular attractions
- Implement a chat feature to connect with local guides or other travelers
- Add a currency converter for better budget planning
- Implement geofencing for proximity-based notifications about nearby attractions
- Add a trip journal feature to document memories and experiences
- Integrate with calendar apps for better trip scheduling

## How to Use on iPhone

You can use the Tokyo Trip Planner on your iPhone in two ways:

### Method 1: Using Safari Browser

1. Open Safari on your iPhone
2. Navigate to the website URL where the app is hosted (or open the local file if you've transferred it to your device)
3. For easier access in the future, add the website to your home screen:
   - Tap the Share button (square with an arrow) at the bottom of the screen
   - Scroll down and tap "Add to Home Screen"
   - Name your shortcut "Tokyo Trip Planner" and tap "Add"
4. Now you can access the app directly from your home screen like a native app

### Method 2: Responsive Web Design

The Tokyo Trip Planner is built with responsive design, which means it automatically adapts to your iPhone's screen size:

1. The navigation menu appears at the bottom of the screen for easy thumb access
2. All features are optimized for touch interaction on smaller screens
3. Maps and itineraries are fully functional on mobile devices
4. You can save your trip plans and access them later, even on different devices

### Tips for iPhone Users

- Enable location services when prompted to get accurate distance calculations and directions
- Use the "Add to Planner" button to save activities you're interested in
- Utilize the day-by-day itinerary feature to organize your trip efficiently
- Save your trip plan to your account for offline access
- Use the share feature to send your trip plan to travel companions via iMessage or email
- For the best experience, keep your iOS and Safari updated to the latest version
