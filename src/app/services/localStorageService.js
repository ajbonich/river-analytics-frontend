class localStorageService {
    setItem(key, value) {
        value = JSON.stringify(value)
        window.localStorage.setItem(key, value)
        return true
    }

    getItem(key) {
        const value = window.localStorage.getItem(key)
        try {
            return JSON.parse(value)
        } catch (e) {
            return null
        }
    }
}

export default new localStorageService()
