const baseProdApi = 'https://x7tt9f86r8.execute-api.us-east-2.amazonaws.com/dev'
const baseLocalApi = 'localhost:8888'
export function GetUSGSDailyAverageData(siteId) {
    fetch(`${baseLocalApi}/badgetDailyAverageData?siteId=${siteId}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            return data
        })
}
