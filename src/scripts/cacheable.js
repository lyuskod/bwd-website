const CACHE_NAME = 'offline-cache'

window.addEventListener('logout', () => {
    clearCache()
})

export const getCache = () => {
    const cache = localStorage.getItem(CACHE_NAME) || '{}'
    return JSON.parse(cache)
}

export const clearCache = () => {
    localStorage.removeItem(CACHE_NAME)
}

export const cacheable = async (fn, key, defaultValue) => {
    let result
    try {
        if (!getCache()[key]) {
            result = await fn()
            const cache = getCache()
            cache[key] = result
            localStorage.setItem(CACHE_NAME, JSON.stringify(cache))
            return result
        }
        result = getCache()[key]
    } catch {
        const cache = getCache()
        const cached = cache[key]
        result = cached === undefined ? defaultValue : cached
    }

    return result
}
