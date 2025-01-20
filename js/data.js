const movies = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        genre: ["Action", "Sci-Fi", "Thriller"],
        rating: 8.8,
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        description: "A thief who enters the dreams of others to steal their secrets.",
        poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH",
        background: "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
    },
    {
        id: 2,
        title: "Interstellar",
        year: 2014,
        genre: ["Adventure", "Drama", "Sci-Fi"],
        rating: 8.6,
        director: "Christopher Nolan",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        description: "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        background: "https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        genre: ["Action", "Crime", "Drama"],
        rating: 9.0,
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        description: "Batman battles the Joker, who seeks to create chaos in Gotham City.",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        background: "https://image.tmdb.org/t/p/w1280/hN2wjA4PBHSu1ZXzAtncRbbpaxR.jpg",
        trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
    },
    {
        id: 4,
        title: "The Matrix",
        year: 1999,
        genre: ["Action", "Sci-Fi"],
        rating: 8.7,
        director: "Lana Wachowski, Lilly Wachowski",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        description: "A hacker discovers the truth about reality and his role in the war against its controllers.",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        background: "https://image.tmdb.org/t/p/w1280/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
        trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
    },
    {
        id: 5,
        title: "Avatar",
        year: 2009,
        genre: ["Action", "Adventure", "Fantasy"],
        rating: 7.9,
        director: "James Cameron",
        cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        description: "A paraplegic Marine is dispatched to the moon Pandora on a unique mission.",
        poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
        background: "https://image.tmdb.org/t/p/w1280/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
        trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY"
    },
    {
        id: 6,
        title: "Titanic",
        year: 1997,
        genre: ["Drama", "Romance"],
        rating: 7.8,
        director: "James Cameron",
        cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist.",
        poster: "https://m.media-amazon.com/images/I/7199jtmPkrL._AC_SY879_.jpg",
        background: "https://image.tmdb.org/t/p/w1280/5OeY4U2rzePxWq2rkqMajUx2gz7.jpg",
        trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ"
    },
    {
        id: 7,
        title: "Joker",
        year: 2019,
        genre: ["Crime", "Drama", "Thriller"],
        rating: 8.4,
        director: "Todd Phillips",
        cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
        description: "A mentally troubled stand-up comedian embarks on a downward spiral to insanity.",
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        background: "https://image.tmdb.org/t/p/w1280/hO7KbdvGOtDdeg0W4Y5nKEHeDDh.jpg",
        trailer: "https://www.youtube.com/watch?v=t433PEQGErc"
    },
    {
        id: 8,
        title: "Forrest Gump",
        year: 1994,
        genre: ["Drama", "Romance"],
        rating: 8.8,
        director: "Robert Zemeckis",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        description: "The story of a simple man who finds himself in pivotal moments in history.",
        poster: "https://image.tmdb.org/t/p/w500/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg",
        background: "https://image.tmdb.org/t/p/w1280/2fHWMnXdOJXdbZxKjXA6eDNuSxS.jpg",
        trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg"
    },
    {
        id: 9,
        title: "Inception",
        year: 2010,
        genre: ["Action", "Sci-Fi", "Thriller"],
        rating: 8.8,
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        description: "A thief who enters the dreams of others to steal their secrets.",
        poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH",
        background: "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
    },
    {
        id: 10,
        title: "Interstellar",
        year: 2014,
        genre: ["Adventure", "Drama", "Sci-Fi"],
        rating: 8.6,
        director: "Christopher Nolan",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        description: "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        background: "https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
    },
    {
        id: 11,
        title: "The Dark Knight",
        year: 2008,
        genre: ["Action", "Crime", "Drama"],
        rating: 9.0,
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        description: "Batman battles the Joker, who seeks to create chaos in Gotham City.",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        background: "https://image.tmdb.org/t/p/w1280/hN2wjA4PBHSu1ZXzAtncRbbpaxR.jpg",
        trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
    },
    {
        id: 12,
        title: "The Matrix",
        year: 1999,
        genre: ["Action", "Sci-Fi"],
        rating: 8.7,
        director: "Lana Wachowski, Lilly Wachowski",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        description: "A hacker discovers the truth about reality and his role in the war against its controllers.",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        background: "https://image.tmdb.org/t/p/w1280/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
        trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
    },
    {
        id: 13,
        title: "Avatar",
        year: 2009,
        genre: ["Action", "Adventure", "Fantasy"],
        rating: 7.9,
        director: "James Cameron",
        cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        description: "A paraplegic Marine is dispatched to the moon Pandora on a unique mission.",
        poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
        background: "https://image.tmdb.org/t/p/w1280/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
        trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY"
    },
    {
        id: 14,
        title: "Titanic",
        year: 1997,
        genre: ["Drama", "Romance"],
        rating: 7.8,
        director: "James Cameron",
        cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist.",
        poster: "https://m.media-amazon.com/images/I/7199jtmPkrL._AC_SY879_.jpg",
        background: "https://image.tmdb.org/t/p/w1280/5OeY4U2rzePxWq2rkqMajUx2gz7.jpg",
        trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ"
    },
    {
        id: 15,
        title: "Joker",
        year: 2019,
        genre: ["Crime", "Drama", "Thriller"],
        rating: 8.4,
        director: "Todd Phillips",
        cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
        description: "A mentally troubled stand-up comedian embarks on a downward spiral to insanity.",
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        background: "https://image.tmdb.org/t/p/w1280/hO7KbdvGOtDdeg0W4Y5nKEHeDDh.jpg",
        trailer: "https://www.youtube.com/watch?v=t433PEQGErc"
    },
]