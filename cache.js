cache = {}


const addToCache = (src) => {
    if (!cache.hasOwnProperty(src)) {
        cache[src] = 1;
    }
}