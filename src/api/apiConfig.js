const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f017fd31f53fc47617a83d89912b7ba7',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;