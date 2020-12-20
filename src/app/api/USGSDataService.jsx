const baseApiUrl = 'https://x7tt9f86r8.execute-api.us-east-2.amazonaws.com/dev'

export function GetUSGSDailyAverageData(siteId) {
    fetch(`${baseApiUrl}/getDailyAverageData?siteId=${siteId}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            return data
        })
}
