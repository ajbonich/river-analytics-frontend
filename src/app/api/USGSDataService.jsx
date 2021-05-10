export function GetUSGSDailyAverageData(baseApi, siteId) {
    fetch(`${baseApi}/getDailyAverageData?siteId=${siteId}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            return data
        })
}
