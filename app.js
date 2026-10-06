/**
 * SPIDER-MAN UNIVERSE - CINEMATIC WEB PORTAL
 * Interactive Engine, Multiverse Database & Audio FX
 */

// ==========================================================================
// 1. MOVIE DATASET
// ==========================================================================
const SPIDEY_MOVIES = [
  {
    id: "spiderman-2002",
    title: "Spider-Man",
    year: "2002",
    era: "raimi",
    eraLabel: "Raimi Trilogy",
    director: "Sam Raimi",
    cast: "Tobey Maguire, Willem Dafoe, Kirsten Dunst, James Franco",
    rating: "7.4/10 IMDb",
    poster: "https://image.tmdb.org/t/p/original/ynyDOCwNuYqqR6p1d6Nbk7ehpfv.jpg",
    trailer: "https://www.youtube.com/embed/t06RUxPbp_c?autoplay=1",
    gallery: [
      "https://wallpapercave.com/wp/wp6988387.jpg",
      "https://wallpaperaccess.com/full/496545.jpg",
      "https://staticg.sportskeeda.com/editor/2022/12/092b7-16724339146406-1920.jpg"
    ],
    synopsis: "Peter Parker, a shy high school student, gains arachnid superpowers after being bitten by a genetically altered spider. Following the tragic murder of his Uncle Ben, Peter embraces his destiny to protect New York City as Spider-Man while battling the psychotic Green Goblin.",
    keyPoints: [
      "Uncle Ben teaches Peter the immortal lesson: 'With great power comes great responsibility.'",
      "First cinematic clash with Norman Osborn (Green Goblin) and Oscorp's dangerous glider tech.",
      "Groundbreaking visual effects that redefined the superhero movie genre for modern cinema."
    ],
    ott: {
      platform: "Disney+ Hotstar",
      availability: "Available to Stream",
      audio: "English, Hindi, Tamil, Telugu",
      watchUrl: "https://www.hotstar.com/in/movies/spider-man/1971001901/watch"
    }
  },
  {
    id: "spiderman-2-2004",
    title: "Spider-Man 2",
    year: "2004",
    era: "raimi",
    eraLabel: "Raimi Trilogy",
    director: "Sam Raimi",
    cast: "Tobey Maguire, Alfred Molina, Kirsten Dunst, James Franco",
    rating: "7.5/10 IMDb",
    poster: "https://image.tmdb.org/t/p/original/hzCRWTV40w4U9S381NpoTWrfOZQ.jpg",
    trailer: "https://www.youtube.com/embed/1s9Yln0YwCw?autoplay=1",
    gallery: [
      "https://images6.alphacoders.com/129/1293547.jpg",
      "https://images8.alphacoders.com/117/thumb-1920-1176537.jpg",
      "https://images6.alphacoders.com/334/334221.jpg"
    ],
    synopsis: "Peter Parker struggles to juggle college life, love for Mary Jane, and the heavy toll of being Spider-Man. When a fusion reactor experiment goes catastrophically wrong, Dr. Otto Octavius is mutated into the tentacled Doctor Octopus, threatening all of New York.",
    keyPoints: [
      "Iconic, pulse-pounding runaway New York Subway Train battle against Doctor Octopus.",
      "Explores Peter losing his powers due to emotional turmoil and the struggle between duty and happiness.",
      "Regarded universally by fans and critics as one of the greatest comic book movies ever created."
    ],
    ott: {
      platform: "Disney+ Hotstar",
      availability: "Available to Stream",
      audio: "English, Hindi, Tamil, Telugu",
      watchUrl: "https://www.hotstar.com/in/movies/spider-man-2/1971011179/watch"
    }
  },
  {
    id: "spiderman-3-2007",
    title: "Spider-Man 3",
    year: "2007",
    era: "raimi",
    eraLabel: "Raimi Trilogy",
    director: "Sam Raimi",
    cast: "Tobey Maguire, Topher Grace, Thomas Haden Church, James Franco",
    rating: "6.3/10 IMDb",
    poster: "https://tse1.mm.bing.net/th/id/OIP.qg9sueWb4eXUWU0RAyoIOQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer: "https://www.youtube.com/embed/e5wUilOeOmg?autoplay=1",
    gallery: [
      "https://images.alphacoders.com/112/thumb-1920-1122066.jpg",
      "https://images.hdqwalls.com/download/spiderman-3-poster-ke-1920x1080.jpg",
      "https://wallpapercave.com/wp/wp2642590.jpg"
    ],
    synopsis: "Peter Parker faces his darkest internal trial when an extraterrestrial symbiote bonds with his suit, amplifying his aggression and vanity. Meanwhile, Flint Marko turns into Sandman, Harry Osborn becomes the New Goblin, and Eddie Brock bonds with the symbiote to form Venom.",
    keyPoints: [
      "Peter battles the corrupting influence of the Black Symbiote suit.",
      "High-stakes battle featuring Sandman, New Goblin, and Venom.",
      "Culmination of the Sam Raimi original Spider-Man trilogy and Peter's friendship with Harry Osborn."
    ],
    ott: {
      platform: "Disney+ Hotstar",
      availability: "Available to Stream",
      audio: "English, Hindi, Tamil, Telugu",
      watchUrl: "https://www.hotstar.com/in/movies/spider-man-3/1971011177/watch?search_query=spider"
    }
  },
  {
    id: "amazing-spiderman-2012",
    title: "The Amazing Spider-Man",
    year: "2012",
    era: "amazing",
    eraLabel: "The Amazing Saga",
    director: "Marc Webb",
    cast: "Andrew Garfield, Emma Stone, Rhys Ifans, Martin Sheen",
    rating: "6.9/10 IMDb",
    poster: "https://tse3.mm.bing.net/th/id/OIP.wnl-P7gJzG3ayBtumyqltAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer: "https://www.youtube.com/embed/upwf8RsyNqQ?autoplay=1",
    gallery: [
      "https://wallpapers.com/images/hd/andrew-garfield-background-ih6ae81rq450n419.jpg",
      "https://wallpaperaccess.com/full/1279505.jpg",
      "https://th.bing.com/th/id/R.5d61f92a90d7b039bafeae31957ca040?rik=cKlsL6WSDd0gWg&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f11%2fSpider-Man-Pictures.jpg&ehk=K52%2fYSg4CQeSk3zsY%2f7RKL8r3Fz6Cwg7K4oj1zNXM2s%3d&risl=&pid=ImgRaw&r=0"
    ],
    synopsis: "Peter Parker investigates the mystery of his parents' sudden disappearance, leading him to Oscorp and his father's former colleague Dr. Curt Connors. After a spider bite grants him abilities, Peter invents mechanical web-shooters and battles Dr. Connors' monstrous alter ego, the Lizard.",
    keyPoints: [
      "Focus on mechanical web-shooters, skateboarding agility, and Peter's genius-level intellect.",
      "Electrifying romantic chemistry between Peter Parker and Gwen Stacy.",
      "Oscorp cross-species genetics storyline and Dr. Curt Connors (The Lizard)."
    ],
    ott: {
      platform: "MX Player / Prime Video",
      availability: "Available to Stream",
      audio: "English, Hindi, Tamil, Telugu",
      watchUrl: "https://www.mxplayer.in/movie/watch-the-amazing-spiderman-movie-online-19a6dbd95f01fe6e8518aface4fe9fb1?watch=true"
    }
  },
  {
    id: "amazing-spiderman-2-2014",
    title: "The Amazing Spider-Man 2",
    year: "2014",
    era: "amazing",
    eraLabel: "The Amazing Saga",
    director: "Marc Webb",
    cast: "Andrew Garfield, Emma Stone, Jamie Foxx, Dane DeHaan",
    rating: "6.6/10 IMDb",
    poster: "https://posterspy.com/wp-content/uploads/2022/06/THE-AMAZING-SPIDERMAN.jpg",
    trailer: "https://www.youtube.com/embed/nbp3Ra3Yp74?autoplay=1",
    gallery: [
      "https://wallpaper-house.com/data/out/12/wallpaper2you_560690.jpg",
      "https://i.pinimg.com/originals/d7/2a/fb/d72afb71bfc9f49403838e31bc86c1b2.png",
      "https://www.fortressofsolitude.co.za/wp-content/uploads/2024/09/Why-Andrew-Garfield-Is-The-Most-Amazing-Spider-Man-Of-All-Time.jpg"
    ],
    synopsis: "Peter Parker revels in being Spider-Man but agonizes over keeping Gwen Stacy safe. When Max Dillon absorbs massive electrical current to become Electro and Harry Osborn takes the experimental venom to become the Green Goblin, Peter faces a devastating battle at the clock tower.",
    keyPoints: [
      "Visually stunning web-swinging physics and Hans Zimmer's iconic electro-synth score.",
      "Emotional climax at the Manhattan clock tower that alters Peter's life forever.",
      "Introduction of the Special Projects division at Oscorp teasing the Sinister Six."
    ],
    ott: {
      platform: "MX Player / Prime Video",
      availability: "Available to Stream",
      audio: "English, Hindi, Tamil, Telugu",
      watchUrl: "https://www.mxplayer.in/movie/watch-the-amazing-spiderman-2-movie-online-bc85356f6c1eecd3673d1d58d592c819?watch=true"
    }
  },
  {
    id: "homecoming-2017",
    title: "Spider-Man: Homecoming",
    year: "2017",
    era: "mcu",
    eraLabel: "Marvel Cinematic Universe",
    director: "Jon Watts",
    cast: "Tom Holland, Michael Keaton, Robert Downey Jr., Zendaya",
    rating: "7.4/10 IMDb",
    poster: "https://i.pinimg.com/originals/76/3e/f0/763ef00456c535a5478a7e1eb3acaea4.jpg",
    trailer: "https://www.youtube.com/embed/DiTECkLZ8HM?autoplay=1",
    gallery: [
      "https://wallpaperaccess.com/full/243559.jpg",
      "https://images4.alphacoders.com/110/thumb-1920-1106453.jpg",
      "https://images.hdqwalls.com/download/spiderman-homecoming-movie-poster-c1-1920x1080.jpg"
    ],
    synopsis: "Fresh off his experience with the Avengers, young Peter Parker returns home to Queens under the watchful eye of his mentor Tony Stark. Eager to prove he's more than just a friendly neighborhood Spider-Man, Peter confronts Adrian Toomes (The Vulture), an illegal alien-tech arms dealer.",
    keyPoints: [
      "Integration into the MCU, featuring Tony Stark's high-tech Stark Suit and Karen AI.",
      "Peter learns the profound lesson: 'If you're nothing without this suit, then you shouldn't have it.'",
      "Spectacular ferry rescue sequence and high school homecoming dance tension."
    ],
    ott: {
      platform: "Prime Video",
      availability: "Available to Stream",
      audio: "English, Hindi, Tamil, Telugu",
      watchUrl: "https://www.primevideo.com/detail/Spider-Man-Homecoming/0Q37VQS7FS9TY96F1SGZSPXEFP"
    }
  },
  {
    id: "into-spider-verse-2018",
    title: "Spider-Man: Into the Spider-Verse",
    year: "2018",
    era: "spiderverse",
    eraLabel: "Spider-Verse",
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    cast: "Shameik Moore, Jake Johnson, Hailee Steinfeld, Mahershala Ali",
    rating: "8.4/10 IMDb",
    poster: "https://tse2.mm.bing.net/th/id/OIP.84EiSwZtDhZVUwFkddqYlAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer: "https://www.youtube.com/embed/ii3n7hYQOl4?autoplay=1",
    gallery: [
      "https://streamcoimg-a.akamaihd.net/000/496/6469/4966469-Banner-L2-7f95cfcd48f76b8db10716cb02884562.jpg",
      "https://wallpaperaccess.com/full/1313510.jpg",
      "https://images.expothemes.com/spider-man-into-the-spider-verse/images/spider-man-into-the-spider-verse-windows-theme-23-hd.jpg"
    ],
    synopsis: "Brooklyn teen Miles Morales is bitten by a radioactive spider and witnesses the death of Peter Parker. When Kingpin's multiverse super-collider tears reality open, five alternate Spider-Heroes—including disheveled Peter B. Parker and Spider-Gwen—unite to teach Miles how to take a leap of faith.",
    keyPoints: [
      "Academy Award Winner for Best Animated Feature Film.",
      "Revolutionary comic-book pop art visual style at 12 and 24 frames per second.",
      "Iconic 'What's Up Danger' leap of faith building drop sequence."
    ],
    ott: {
      platform: "MX Player / Prime Video",
      availability: "Available to Stream",
      audio: "English, Hindi, Tamil, Telugu",
      watchUrl: "https://www.mxplayer.in/movie/watch-spiderman-into-the-spiderverse-movie-online-dfa987f8eb42b75b31e2c09fcedd3045?watch=true"
    }
  },
  {
    id: "far-from-home-2019",
    title: "Spider-Man: Far From Home",
    year: "2019",
    era: "mcu",
    eraLabel: "Marvel Cinematic Universe",
    director: "Jon Watts",
    cast: "Tom Holland, Jake Gyllenhaal, Zendaya, Samuel L. Jackson",
    rating: "7.4/10 IMDb",
    poster: "https://tse1.mm.bing.net/th/id/OIP.i1aIGenvmekZMMrQKu1zywHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer: "https://www.youtube.com/embed/DYYtuKyMtY8?autoplay=1",
    gallery: [
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10af0b39-a57e-4f10-aeb1-fd388299ed5b/dd30sej-ba00f8a2-fdcf-48ad-8681-e507010cba43.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEwYWYwYjM5LWE1N2UtNGYxMC1hZWIxLWZkMzg4Mjk5ZWQ1YlwvZGQzMHNlai1iYTAwZjhhMi1mZGNmLTQ4YWQtODY4MS1lNTA3MDEwY2JhNDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pWIARDMHQJbaWljid6OPz2QhIqDTW5DPZW3cXG-iUEA",
      "https://images.wallpapersden.com/image/download/spider-man-far-from-home-12k_a2poamuUmZqaraWkpJRmbmdlrWZlbWU.jpg",
      "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1561390079441-37Y9MQYF4GDT1IYY4QIL/spider-mans-spidey-sense-is-called-peter-tingle-in-amusing-new-promo-clip-for-spider-man-far-from-home-social.jpg"
    ],
    synopsis: "Following the events of Avengers: Endgame, Peter Parker goes on a school vacation across Europe. Nick Fury enlists him to investigate mysterious Elemental monsters alongside Quentin Beck (Mysterio), a master of holographic illusions who harbors sinister ambitions.",
    keyPoints: [
      "Peter grapples with the global legacy of Tony Stark and the E.D.I.T.H. glasses.",
      "Mind-bending Mysterio illusion sequence pushing Spider-Man's Spidey-Sense to its limit.",
      "Shocking post-credits cliffhanger with J. Jonah Jameson revealing Peter's secret identity to the world."
    ],
    ott: {
      platform: "Prime Video",
      availability: "Available to Stream",
      audio: "English, Hindi, Tamil, Telugu",
      watchUrl: "https://www.primevideo.com/detail/Spider-Man-Far-From-Home/0TIW7GTDER1QJ5TEIRLPCSLOHM"
    }
  },
  {
    id: "no-way-home-2021",
    title: "Spider-Man: No Way Home",
    year: "2021",
    era: "mcu",
    eraLabel: "Marvel Cinematic Universe",
    director: "Jon Watts",
    cast: "Tom Holland, Tobey Maguire, Andrew Garfield, Zendaya, Benedict Cumberbatch, Willem Dafoe",
    rating: "8.2/10 IMDb",
    poster: "https://wallpapers.com/images/hd/spider-man-no-way-home-digital-poster-qhrjykox1oo1f30n.jpg",
    trailer: "https://www.youtube.com/embed/JfVOs4VSpmA?autoplay=1",
    gallery: [
      "https://images7.alphacoders.com/132/thumb-1920-1322340.jpg",
      "https://wallpapers.com/images/hd/spider-man-no-way-home-3840-x-2160-picture-1aaxsn2hfqo4yg5l.jpg",
      "https://images.hdqwalls.com/download/spiderman-no-way-home-movie-poster-tc-1920x1080.jpg"
    ],
    synopsis: "With Spider-Man's identity exposed, Peter seeks help from Doctor Strange to make the world forget. But when the spell goes haywire, multiverse rifts pull legendary villains—Green Goblin, Doc Ock, Sandman, Electro, and Lizard—along with Tobey Maguire and Andrew Garfield's Spider-Men into the MCU.",
    keyPoints: [
      "Historic cinematic reunion of Tobey Maguire, Andrew Garfield, and Tom Holland.",
      "Deeply emotional redemption arcs for Peter 3 saving MJ and Peter 2 forgiving Norman.",
      "Ultimate sacrifice: Peter chooses total anonymity to seal the multiverse and protect everyone."
    ],
    ott: {
      platform: "Prime Video",
      availability: "Available to Stream",
      audio: "English, Hindi, Tamil, Telugu",
      watchUrl: "https://www.primevideo.com/detail/Spider-Man-No-Way-Home/0HIJOHLOVMNYQQ864DKJGJ1JPI"
    }
  },
  {
    id: "across-spider-verse-2023",
    title: "Spider-Man: Across the Spider-Verse",
    year: "2023",
    era: "spiderverse",
    eraLabel: "Spider-Verse",
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    cast: "Shameik Moore, Hailee Steinfeld, Oscar Isaac, Daniel Kaluuya",
    rating: "8.6/10 IMDb",
    poster: "https://tse4.mm.bing.net/th/id/OIP.V0ustTI4Xr26oBuCCEV7GAHaK8?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer: "https://www.youtube.com/embed/cqGjhVJWtEg?autoplay=1",
    gallery: [
      "https://images.wallpapersden.com/image/download/fortnite-spider-verse_bmVrZ2eUmZqaraWkpJRmbmdlrWZlbWU.jpg",
      "https://images.hdqwalls.com/download/spider-man-across-the-spider-verse-4k-zg-1920x1080.jpg",
      "https://preview.redd.it/spider-man-across-the-spider-verse-1920x1080-v0-ki4gcq26iw4b1.jpg?auto=webp&s=29bfc789c434169b8ae49272e1a3d6eab3eb1a59"
    ],
    synopsis: "Miles Morales catapults across the Multiverse, where he encounters a society of Spider-Heroes led by Miguel O'Hara (Spider-Man 2099) charged with protecting existence. When heroes clash over how to handle a threat to canon events, Miles stands alone to redefine what it means to be a hero.",
    keyPoints: [
      "Stunning distinct art styles for Earth-65 (Gwen), Nueva York 2099, Mumbattan (Pavitr), and Earth-42.",
      "Miles Morales declares: 'Everyone keeps telling me how my story is supposed to go. Nah. Imma do my own thing.'",
      "Features hundreds of multiverse Spider-People, Spider-Punk (Hobie Brown), and The Spot."
    ],
    ott: {
      platform: "Prime Video",
      availability: "Available to Stream",
      audio: "English, Hindi, Tamil, Telugu",
      watchUrl: "https://www.primevideo.com/region/eu/detail/Spider-Man-Across-The-Spider-Verse/0L4QVOMW7FOANL3BIIWM2K39M7"
    }
  },
  {
    id: "brand-new-day-2026",
    title: "Spider-Man: Brand New Day",
    year: "2026",
    era: "upcoming",
    eraLabel: "Upcoming (MCU)",
    director: "Destin Daniel Cretton",
    cast: "Tom Holland, Jon Bernthal, Mark Ruffalo, Zendaya (Rumored)",
    rating: "Anticipated 2026",
    poster: "https://tse1.mm.bing.net/th/id/OIP.-hv9IVgJGomvObGAEHtUJgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer: "https://www.youtube.com/embed/QOdF1zK4ZkY?autoplay=1",
    gallery: [
      "https://wallpapers.com/images/hd/spider-man-vector-art-4k-7gw8j1lhg6kng2n3.jpg",
      "https://c4.wallpaperflare.com/wallpaper/946/310/331/spiderman-half-mask-ps4-wallpaper-preview.jpg",
      "https://wallpapers-clan.com/wp-content/uploads/2023/07/spiderman-deep-dark-background.jpg"
    ],
    synopsis: "Following the memory-wipe in No Way Home, Peter Parker navigates a gritty, grounded life in NYC with no Stark tech and no superhero allies. Drawing from comic arcs, Peter takes on ruthless street-level corruption while crossing paths with The Punisher and Bruce Banner.",
    keyPoints: [
      "Grounded, back-to-basics street-level web-slinging with a hand-sewn classic comic suit.",
      "Explores Peter building his life from scratch in a world where no one remembers Peter Parker.",
      "Rumored appearances of Jon Bernthal's Punisher, Mark Ruffalo's Hulk, and criminal syndicates."
    ],
    ott: {
      platform: "Theaters & Sony / Disney+ (2026)",
      availability: "In Production / Coming Soon",
      audio: "Theatrical Release 2026",
      watchUrl: "https://www.youtube.com/embed/QOdF1zK4ZkY"
    }
  }
];

// ==========================================================================
// 2. MULTIVERSE ROSTER DATASET (Heroes & Villains)
// ==========================================================================
const ROSTER_DATA = {
  heroes: [
    {
      name: "Peter Parker",
      alias: "Friendly Neighborhood Spider-Man (Tobey)",
      universe: "Earth-96283",
      avatar: "https://image.tmdb.org/t/p/original/ynyDOCwNuYqqR6p1d6Nbk7ehpfv.jpg",
      bio: "The original cinematic wall-crawler who learned that with great power comes great responsibility. Possesses organic webbing and unmatched endurance.",
      stats: { power: 90, agility: 88, intelligence: 85 }
    },
    {
      name: "Peter Parker",
      alias: "The Amazing Spider-Man (Andrew)",
      universe: "Earth-120703",
      avatar: "https://tse3.mm.bing.net/th/id/OIP.wnl-P7gJzG3ayBtumyqltAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
      bio: "Brilliant scientific intellect who engineered high-pressure mechanical web-shooters. Renowned for high-speed acrobatic agility and witty banter.",
      stats: { power: 86, agility: 96, intelligence: 92 }
    },
    {
      name: "Peter Parker",
      alias: "Spider-Man (Tom Holland - MCU)",
      universe: "Earth-616",
      avatar: "https://i.pinimg.com/originals/76/3e/f0/763ef00456c535a5478a7e1eb3acaea4.jpg",
      bio: "Young Avenger mentored by Iron Man. Survived multiversal conflicts and chose complete anonymity to protect those he loves.",
      stats: { power: 88, agility: 92, intelligence: 90 }
    },
    {
      name: "Miles Morales",
      alias: "Spider-Man (Brooklyn)",
      universe: "Earth-1610",
      avatar: "https://tse2.mm.bing.net/th/id/OIP.84EiSwZtDhZVUwFkddqYlAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
      bio: "Master of unique bio-electric Venom Strike and camouflage invisibility. Defied the Spider Society's predetermined canon destiny.",
      stats: { power: 94, agility: 90, intelligence: 88 }
    },
    {
      name: "Gwen Stacy",
      alias: "Spider-Gwen / Ghost-Spider",
      universe: "Earth-65",
      avatar: "https://tse4.mm.bing.net/th/id/OIP.V0ustTI4Xr26oBuCCEV7GAHaK8?rs=1&pid=ImgDetMain&o=7&rm=3",
      bio: "Drummer and superhuman heroine with fluid, balletic combat reflexes and dimensional travel wristband.",
      stats: { power: 84, agility: 95, intelligence: 87 }
    },
    {
      name: "Miguel O'Hara",
      alias: "Spider-Man 2099",
      universe: "Earth-928",
      avatar: "https://preview.redd.it/spider-man-across-the-spider-verse-1920x1080-v0-ki4gcq26iw4b1.jpg?auto=webp&s=29bfc789c434169b8ae49272e1a3d6eab3eb1a59",
      bio: "Leader of the Spider Society. Genetically fused spider-DNA gives him paralyzing fangs, talons, and light-energy web lines.",
      stats: { power: 96, agility: 89, intelligence: 95 }
    }
  ],
  villains: [
    {
      name: "Norman Osborn",
      alias: "Green Goblin",
      universe: "Earth-96283",
      avatar: "https://images.hdqwalls.com/download/spiderman-no-way-home-movie-poster-tc-1920x1080.jpg",
      bio: "Psychopathic corporate titan powered by Oscorp goblin formula, pumpkin bombs, and razor-sharp glider.",
      stats: { power: 91, agility: 85, intelligence: 94 }
    },
    {
      name: "Dr. Otto Octavius",
      alias: "Doctor Octopus",
      universe: "Earth-96283",
      avatar: "https://images8.alphacoders.com/117/thumb-1920-1176537.jpg",
      bio: "Nuclear physicist fused with four indestructible AI-driven titanium-steel mechanical tentacles.",
      stats: { power: 93, agility: 80, intelligence: 98 }
    },
    {
      name: "Eddie Brock",
      alias: "Venom",
      universe: "Symbiote Multiverse",
      avatar: "https://wallpapercave.com/wp/wp2642590.jpg",
      bio: "Alien symbiote with superhuman brute strength, tendrils, teeth, and immunity to Spider-Sense.",
      stats: { power: 97, agility: 86, intelligence: 78 }
    },
    {
      name: "Quentin Beck",
      alias: "Mysterio",
      universe: "Earth-616",
      avatar: "https://images.wallpapersden.com/image/download/spider-man-far-from-home-12k_a2poamuUmZqaraWkpJRmbmdlrWZlbWU.jpg",
      bio: "Illusionist genius who weaponized Stark holographic drones to deceive nations and frame Spider-Man.",
      stats: { power: 75, agility: 72, intelligence: 96 }
    },
    {
      name: "Max Dillon",
      alias: "Electro",
      universe: "Earth-120703",
      avatar: "https://posterspy.com/wp-content/uploads/2022/06/THE-AMAZING-SPIDERMAN.jpg",
      bio: "Pure living electrical energy capable of manipulating high-voltage grid systems and lightning.",
      stats: { power: 95, agility: 91, intelligence: 82 }
    }
  ]
};

// ==========================================================================
// 3. AUDIO SYNTHESIZER & SOUND FX (Web Audio API)
// ==========================================================================
class SoundFXController {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = true;
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    const btn = document.getElementById('sound-toggle-btn');
    if (btn) {
      btn.innerHTML = this.soundEnabled 
        ? '<i class="fas fa-volume-up"></i> <span class="sound-btn-text">Sound: ON</span>' 
        : '<i class="fas fa-volume-mute"></i> <span class="sound-btn-text">Sound: OFF</span>';
    }
    if (this.soundEnabled) {
      this.playThwip();
    }
    return this.soundEnabled;
  }

  playThwip() {
    if (!this.soundEnabled) return;
    try {
      this.initContext();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.audioCtx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.12);
    } catch (e) {
      console.warn("Audio synthesis note:", e);
    }
  }

  playSpideySense() {
    if (!this.soundEnabled) return;
    try {
      this.initContext();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, this.audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(880, this.audioCtx.currentTime + 0.15);
      osc.frequency.linearRampToValueAtTime(550, this.audioCtx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.25, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.3);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.3);
    } catch (e) {
      console.warn("Spidey sense audio note:", e);
    }
  }
}

const soundFX = new SoundFXController();

// ==========================================================================
// 4. INTERACTIVE WEB CANVAS (Background Particles & Strands)
// ==========================================================================
function initWebCanvas() {
  const canvas = document.getElementById('web-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 30), 45);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? 'rgba(230, 36, 41, 0.4)' : 'rgba(9, 132, 227, 0.4)'
    });
  }

  let mouseX = -1000;
  let mouseY = -1000;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting web lines
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      p1.x += p1.vx;
      p1.y += p1.vy;

      if (p1.x < 0 || p1.x > width) p1.vx *= -1;
      if (p1.y < 0 || p1.y > height) p1.vy *= -1;

      // Draw particle dot
      ctx.beginPath();
      ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
      ctx.fillStyle = p1.color;
      ctx.fill();

      // Connect to mouse
      const dMouse = Math.hypot(p1.x - mouseX, p1.y - mouseY);
      if (dMouse < 140) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = `rgba(230, 36, 41, ${1 - dMouse / 140})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Connect to neighbors
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / 110) * 0.15})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(render);
  }

  render();
}

// ==========================================================================
// 5. MOVIE RENDER & FILTER ENGINE
// ==========================================================================
let currentFilter = 'all';
let currentSearchQuery = '';
let currentViewMode = 'rows'; // 'rows' or 'grid'

function getMatchScore(ratingStr) {
  if (!ratingStr) return "98% Match";
  if (ratingStr.includes("8.6")) return "99% Match";
  if (ratingStr.includes("8.4")) return "98% Match";
  if (ratingStr.includes("8.2")) return "97% Match";
  if (ratingStr.includes("7.5")) return "94% Match";
  if (ratingStr.includes("7.4")) return "93% Match";
  if (ratingStr.includes("6.9")) return "89% Match";
  if (ratingStr.includes("6.6")) return "86% Match";
  if (ratingStr.includes("6.3")) return "82% Match";
  return "99% Anticipated";
}

function createMovieCardHTML(movie) {
  const matchPercent = getMatchScore(movie.rating);
  const provider = movie.ott.platform.split('/')[0].trim();
  const ratingNum = movie.rating.split(' ')[0];

  return `
    <article class="movie-card netflix-card" onclick="openMovieModal('${movie.id}')" data-id="${movie.id}">
      <div class="movie-card-poster-wrapper">
        <img src="${movie.poster}" alt="${movie.title}" class="movie-card-poster" loading="lazy" />
        <span class="movie-badge-era">${movie.eraLabel}</span>
        <span class="netflix-badge-quality">4K UHD</span>
        <div class="movie-card-overlay-btn">
          <div class="play-trailer-circle" title="Play Official Trailer">
            <i class="fas fa-play"></i>
          </div>
          <span class="overlay-quick-label">Watch Trailer</span>
        </div>
      </div>
      <div class="movie-card-body">
        <div class="movie-meta-bar">
          <span class="netflix-match-score">${matchPercent}</span>
          <span class="netflix-age-badge">PG-13</span>
          <span class="movie-year">${movie.year}</span>
          <span class="movie-rating"><i class="fas fa-star"></i> ${ratingNum}</span>
        </div>
        <h3 class="movie-card-title" title="${movie.title}">${movie.title}</h3>
        <p class="movie-card-director"><i class="fas fa-video"></i> ${movie.director}</p>
        <p class="movie-card-excerpt">${movie.synopsis}</p>
        <div class="movie-card-footer">
          <span class="ott-provider-badge">
            <i class="fas fa-tv"></i> ${provider}
          </span>
          <button class="btn-card-details" onclick="event.stopPropagation(); openMovieModal('${movie.id}')">
            <i class="fas fa-info-circle"></i> Details
          </button>
        </div>
      </div>
    </article>
  `;
}

function scrollNetflixRow(trackId, direction) {
  const track = document.getElementById(trackId);
  if (!track) return;
  soundFX.playThwip();
  const scrollDistance = track.clientWidth * 0.75;
  track.scrollBy({
    left: direction * scrollDistance,
    behavior: 'smooth'
  });
}

function renderMovies() {
  const container = document.getElementById('movie-grid');
  if (!container) return;

  const filtered = SPIDEY_MOVIES.filter((movie) => {
    const matchCategory = currentFilter === 'all' || movie.era === currentFilter;
    const matchSearch =
      movie.title.toLowerCase().includes(currentSearchQuery) ||
      movie.cast.toLowerCase().includes(currentSearchQuery) ||
      movie.director.toLowerCase().includes(currentSearchQuery) ||
      movie.year.includes(currentSearchQuery);

    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    container.className = 'movie-grid-container';
    container.innerHTML = `
      <div class="no-results">
        <i class="fas fa-spider"></i>
        <h3>No Spider-Man Movies Found</h3>
        <p>Try searching for a different title, villain, actor, or era.</p>
      </div>
    `;
    return;
  }

  // When in Netflix Rails mode and browsing all without search query:
  if (currentViewMode === 'rows' && currentFilter === 'all' && currentSearchQuery === '') {
    const categories = [
      {
        id: 'row-raimi',
        title: 'Tobey Maguire • Raimi Trilogy (2002 — 2007)',
        icon: 'fa-crown',
        movies: SPIDEY_MOVIES.filter((m) => m.era === 'raimi')
      },
      {
        id: 'row-amazing',
        title: 'Andrew Garfield • The Amazing Saga (2012 — 2014)',
        icon: 'fa-bolt',
        movies: SPIDEY_MOVIES.filter((m) => m.era === 'amazing')
      },
      {
        id: 'row-mcu',
        title: 'Tom Holland • Marvel Cinematic Universe (2017 — 2021)',
        icon: 'fa-mask',
        movies: SPIDEY_MOVIES.filter((m) => m.era === 'mcu')
      },
      {
        id: 'row-spiderverse',
        title: 'Miles Morales & Multiverse • Spider-Verse Animated (2018 — 2023)',
        icon: 'fa-project-diagram',
        movies: SPIDEY_MOVIES.filter((m) => m.era === 'spiderverse')
      },
      {
        id: 'row-upcoming',
        title: 'Upcoming Multiverse • Marvel Phase 6 (2026)',
        icon: 'fa-hourglass-start',
        movies: SPIDEY_MOVIES.filter((m) => m.era === 'upcoming')
      }
    ];

    container.className = 'netflix-rows-wrapper';
    container.innerHTML = categories
      .map(
        (cat) => `
        <section class="netflix-row-section">
          <div class="netflix-row-header">
            <h3 class="netflix-row-title">
              <i class="fas ${cat.icon} text-spidey-accent"></i> ${cat.title}
            </h3>
            <span class="netflix-row-count">${cat.movies.length} Films</span>
          </div>
          <div class="netflix-rail-container">
            <button class="netflix-slider-arrow left" onclick="scrollNetflixRow('${cat.id}', -1)" aria-label="Scroll left">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="netflix-row-track" id="${cat.id}">
              ${cat.movies.map((m) => createMovieCardHTML(m)).join('')}
            </div>
            <button class="netflix-slider-arrow right" onclick="scrollNetflixRow('${cat.id}', 1)" aria-label="Scroll right">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </section>
      `
      )
      .join('');
  } else {
    // Aligned Netflix Grid view (when in Grid mode OR when filtering/searching)
    container.className = 'movie-grid-aligned';
    container.innerHTML = filtered.map((movie) => createMovieCardHTML(movie)).join('');
  }
}

function setupFilterEvents() {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      soundFX.playThwip();
      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter = pill.getAttribute('data-filter') || 'all';
      renderMovies();
    });
  });

  const searchInput = document.getElementById('movie-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderMovies();
    });
  }

  // Netflix layout view switcher buttons
  const btnRows = document.getElementById('btn-view-rows');
  const btnGrid = document.getElementById('btn-view-grid');

  if (btnRows && btnGrid) {
    btnRows.addEventListener('click', () => {
      soundFX.playThwip();
      currentViewMode = 'rows';
      btnRows.classList.add('active');
      btnGrid.classList.remove('active');
      renderMovies();
    });

    btnGrid.addEventListener('click', () => {
      soundFX.playThwip();
      currentViewMode = 'grid';
      btnGrid.classList.add('active');
      btnRows.classList.remove('active');
      renderMovies();
    });
  }
}

// ==========================================================================
// 6. CINEMATIC DETAIL MODAL & CAROUSEL
// ==========================================================================
let currentCarouselIndex = 0;
let currentMovieData = null;

function openMovieModal(movieId) {
  soundFX.playThwip();
  const movie = SPIDEY_MOVIES.find((m) => m.id === movieId);
  if (!movie) return;

  currentMovieData = movie;
  currentCarouselIndex = 0;

  const modal = document.getElementById('movie-detail-modal');
  const modalContent = document.getElementById('modal-dynamic-content');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-header-hero">
      <span class="modal-era-badge">${movie.eraLabel}</span>
      <h2 class="modal-title">${movie.title} (${movie.year})</h2>
      <div class="modal-meta-row">
        <span><i class="fas fa-film"></i> Directed by ${movie.director}</span>
        <span><i class="fas fa-star"></i> ${movie.rating}</span>
        <span><i class="fas fa-users"></i> Cast: ${movie.cast}</span>
      </div>
    </div>

    <div class="modal-grid-layout">
      <!-- Left Column: Trailer & Gallery -->
      <div>
        <div class="trailer-container">
          <iframe 
            class="trailer-iframe" 
            src="${movie.trailer}" 
            title="${movie.title} Official Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>

        <h4 class="gallery-section-heading">
          <i class="fas fa-images"></i> Cinematic Wallpapers & Stills
        </h4>
        <div class="modal-carousel" id="modal-carousel">
          ${movie.gallery
            .map(
              (imgUrl, idx) => `
            <img 
              src="${imgUrl}" 
              alt="${movie.title} Still ${idx + 1}" 
              class="carousel-slide-img ${idx === 0 ? 'active' : ''}" 
              data-idx="${idx}"
            />
          `
            )
            .join('')}
          <button class="carousel-nav-btn carousel-prev" onclick="prevCarouselSlide()">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="carousel-nav-btn carousel-next" onclick="nextCarouselSlide()">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <!-- Right Column: Story Synopsis & OTT Watch Box -->
      <div class="modal-side-panel">
        <div class="detail-glass-card">
          <h4 class="detail-card-title">
            <i class="fas fa-book-open"></i> Story Synopsis
          </h4>
          <p class="detail-plot-text">${movie.synopsis}</p>
          <h5 style="color: #fff; font-size: 0.95rem; margin-bottom: 0.5rem; font-weight: 700;">
            Key Plot Highlights:
          </h5>
          <ul class="key-points-list">
            ${movie.keyPoints.map((pt) => `<li>${pt}</li>`).join('')}
          </ul>
        </div>

        <div class="detail-glass-card ott-card-highlight">
          <div class="ott-platform-header">
            <h4 class="ott-platform-name">${movie.ott.platform}</h4>
            <span class="ott-badge-avail">${movie.ott.availability}</span>
          </div>
          <p class="ott-audio-info">
            <i class="fas fa-language"></i> Audio: ${movie.ott.audio}
          </p>
          <a href="${movie.ott.watchUrl}" target="_blank" rel="noopener noreferrer" class="btn-ott-watch" onclick="soundFX.playThwip()">
            <i class="fas fa-play-circle"></i> Watch Now Online
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMovieModal() {
  const modal = document.getElementById('movie-detail-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';

  // Stop trailer sound by emptying content
  const modalContent = document.getElementById('modal-dynamic-content');
  if (modalContent) {
    modalContent.innerHTML = '';
  }
}

function nextCarouselSlide() {
  if (!currentMovieData || !currentMovieData.gallery.length) return;
  soundFX.playThwip();
  currentCarouselIndex = (currentCarouselIndex + 1) % currentMovieData.gallery.length;
  updateCarouselView();
}

function prevCarouselSlide() {
  if (!currentMovieData || !currentMovieData.gallery.length) return;
  soundFX.playThwip();
  currentCarouselIndex =
    (currentCarouselIndex - 1 + currentMovieData.gallery.length) % currentMovieData.gallery.length;
  updateCarouselView();
}

function updateCarouselView() {
  const slides = document.querySelectorAll('.carousel-slide-img');
  slides.forEach((slide, idx) => {
    if (idx === currentCarouselIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

// ==========================================================================
// 7. WATCH ORDER TIMELINE (Release vs Chronological)
// ==========================================================================
const CHRONOLOGICAL_ORDER = [
  {
    year: "2002",
    title: "Spider-Man (Raimi)",
    desc: "The genesis of Peter Parker in the Raimi universe, Uncle Ben's loss, and battle with the Green Goblin."
  },
  {
    year: "2004",
    title: "Spider-Man 2",
    desc: "Peter battles Doctor Octopus and questions his hero mantle in New York City."
  },
  {
    year: "2007",
    title: "Spider-Man 3",
    desc: "Symbiote corrupts Peter; face-off against Sandman and Venom in the Raimi trilogy climax."
  },
  {
    year: "2012",
    title: "The Amazing Spider-Man",
    desc: "Andrew Garfield's Peter Parker unravels his father's secrets and fights The Lizard."
  },
  {
    year: "2014",
    title: "The Amazing Spider-Man 2",
    desc: "Peter battles Electro and Green Goblin; fateful clock tower tragedy with Gwen Stacy."
  },
  {
    year: "2016",
    title: "Captain America: Civil War (MCU Debut)",
    desc: "Tony Stark recruits 15-year-old Peter Parker for the airport clash in Germany."
  },
  {
    year: "2017",
    title: "Spider-Man: Homecoming",
    desc: "Peter establishes himself as New York's neighborhood protector against The Vulture."
  },
  {
    year: "2018",
    title: "Avengers: Infinity War & Endgame",
    desc: "Peter joins the cosmic battle on Titan against Thanos and returns in the Endgame battle."
  },
  {
    year: "2018",
    title: "Into the Spider-Verse",
    desc: "Miles Morales rises in Brooklyn and gathers alternate Spider-Heroes across realities."
  },
  {
    year: "2019",
    title: "Spider-Man: Far From Home",
    desc: "European tour, Mysterio illusion labyrinth, and global unmasking of Spider-Man."
  },
  {
    year: "2021",
    title: "Spider-Man: No Way Home",
    desc: "The ultimate Multiverse convergence uniting Tobey, Andrew, and Tom Holland."
  },
  {
    year: "2023",
    title: "Across the Spider-Verse",
    desc: "Miles Morales enters Nueva York 2099 and defies the Spider Society to save his family."
  },
  {
    year: "2026",
    title: "Spider-Man: Brand New Day",
    desc: "A gritty street-level restart for Tom Holland's Peter Parker in anonymous NYC."
  }
];

function renderTimeline(mode = 'release') {
  const container = document.getElementById('timeline-items-container');
  if (!container) return;

  const dataset =
    mode === 'chronological'
      ? CHRONOLOGICAL_ORDER
      : SPIDEY_MOVIES.map((m) => ({
          year: m.year,
          title: m.title,
          desc: m.synopsis
        }));

  container.innerHTML = dataset
    .map(
      (item) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card" onclick="soundFX.playThwip()">
        <div class="timeline-year">${item.year}</div>
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    </div>
  `
    )
    .join('');
}

function setupTimelineSwitch() {
  const btns = document.querySelectorAll('.timeline-btn');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      soundFX.playThwip();
      btns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-mode') || 'release';
      renderTimeline(mode);
    });
  });
}

// ==========================================================================
// 8. MULTIVERSE ROSTER (Heroes vs Villains)
// ==========================================================================
function renderRoster(type = 'heroes') {
  const grid = document.getElementById('roster-grid');
  if (!grid) return;

  const data = ROSTER_DATA[type] || ROSTER_DATA.heroes;

  grid.innerHTML = data
    .map(
      (char) => `
    <div class="roster-card" onclick="soundFX.playThwip()">
      <div class="roster-avatar-wrapper">
        <img src="${char.avatar}" alt="${char.name}" class="roster-avatar" />
      </div>
      <h4 class="roster-name">${char.name}</h4>
      <div class="roster-alias">${char.alias}</div>
      <p class="roster-bio">${char.bio}</p>
      <div class="roster-stats-bars">
        <div class="stat-row">
          <span>Combat Power</span>
          <div class="stat-bar-bg"><div class="stat-bar-fill" style="width: ${char.stats.power}%"></div></div>
        </div>
        <div class="stat-row">
          <span>Agility / Speed</span>
          <div class="stat-bar-bg"><div class="stat-bar-fill" style="width: ${char.stats.agility}%"></div></div>
        </div>
        <div class="stat-row">
          <span>Intellect</span>
          <div class="stat-bar-bg"><div class="stat-bar-fill" style="width: ${char.stats.intelligence}%"></div></div>
        </div>
      </div>
    </div>
  `
    )
    .join('');
}

function setupRosterTabs() {
  const tabs = document.querySelectorAll('.roster-tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      soundFX.playThwip();
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const type = tab.getAttribute('data-type') || 'heroes';
      renderRoster(type);
    });
  });
}

// ==========================================================================
// 9. SPIDEY SENSE EASTER EGG & WEB CLICK EFFECT
// ==========================================================================
function triggerSpideySenseAlert() {
  soundFX.playSpideySense();
  const toast = document.getElementById('spidey-sense-toast');
  if (!toast) return;

  const quotes = [
    "🕷️ My Spidey-Sense is tingling! Danger or excitement ahead!",
    "⚡ 'With great power comes great responsibility.' - Uncle Ben",
    "🕸️ 'Anyone can wear the mask. You could wear the mask.' - Miles Morales",
    "🏙️ 'I believe there's a hero in all of us.' - Aunt May",
    "🌟 'No matter how many times I get knocked down, I always get back up.'"
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const toastText = toast.querySelector('.toast-text');
  if (toastText) {
    toastText.innerText = randomQuote;
  }

  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 4500);
}

function setupWebClickEffects() {
  document.addEventListener('click', (e) => {
    // Exclude if clicked inside modal iframe or input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'IFRAME') return;

    const particle = document.createElement('div');
    particle.className = 'web-shot-particle';
    particle.style.left = `${e.clientX - 25}px`;
    particle.style.top = `${e.clientY - 25}px`;
    particle.innerHTML = `
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L50 100M0 50L100 50M15 15L85 85M15 85L85 15" stroke="rgba(230, 36, 41, 0.7)" stroke-width="2" />
        <circle cx="50" cy="50" r="20" stroke="rgba(255, 255, 255, 0.6)" stroke-width="1.5" />
        <circle cx="50" cy="50" r="38" stroke="rgba(9, 132, 227, 0.6)" stroke-width="1" />
      </svg>
    `;
    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 600);
  });
}

// Mobile drawer navigation controller
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggleBtn || !navLinks) return;

  function toggleMenu(forceState) {
    const isOpening = typeof forceState === 'boolean' ? forceState : !navLinks.classList.contains('mobile-open');
    navLinks.classList.toggle('mobile-open', isOpening);
    toggleBtn.classList.toggle('active', isOpening);
    toggleBtn.setAttribute('aria-expanded', isOpening ? 'true' : 'false');
    toggleBtn.innerHTML = isOpening ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    if (isOpening) {
      soundFX.playThwip();
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking on any nav link
  navLinks.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('mobile-open') && !navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('mobile-open')) {
      toggleMenu(false);
    }
  });

  // Auto close on window resize when reaching tablet/desktop width
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('mobile-open')) {
      toggleMenu(false);
    }
  });
}

// ==========================================================================
// 10. GLOBAL INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initWebCanvas();
  renderMovies();
  setupFilterEvents();
  renderTimeline('release');
  setupTimelineSwitch();
  renderRoster('heroes');
  setupRosterTabs();
  setupWebClickEffects();
  setupMobileMenu();

  // Sound toggle button
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundFX.toggleSound();
    });
  }

  // Spidey sense button
  const senseBtn = document.getElementById('spidey-sense-btn');
  if (senseBtn) {
    senseBtn.addEventListener('click', triggerSpideySenseAlert);
  }

  // Navbar scroll detection
  const navbar = document.querySelector('.spider-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Modal backdrop click close
  const modal = document.getElementById('movie-detail-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeMovieModal();
      }
    });
  }

  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMovieModal();
    }
  });
});

