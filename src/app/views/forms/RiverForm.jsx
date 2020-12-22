import React, { Component } from 'react'
import SimpleRiverForm from '../material-kit/forms/SimpleRiverForm'
import { SimpleCard } from 'matx'
import { Grid } from '@material-ui/core'
import RechartLineGraph from 'app/components/RechartLineGraph'

class RiverForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dailyAverages: [],
            dailyRunnablePercentages: [],
        }
        this.baseApi =
            'https://x7tt9f86r8.execute-api.us-east-2.amazonaws.com/dev'
        this.baseLocalApi = 'localhost:8888'
        this.getDailyData('06719505', 300, 1000)
    }

    getDailyRunnablePercentages = (siteId, minFlow, maxFlow) => {
        fetch(
            `${this.baseApi}/getRunnablePercentages?siteId=${siteId}&minFlow=${minFlow}&maxFlow=${maxFlow}`
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    dailyRunnablePercentages: data,
                })
            })
    }

    getDailyData = (siteId, minFlow, maxFlow) => {
        fetch(
            `https://x7tt9f86r8.execute-api.us-east-2.amazonaws.com/dev/getRunnablePercentages?siteId=${siteId}&minFlow=${minFlow}&maxFlow=${maxFlow}`
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    dailyRunnablePercentages: data,
                })
            })
        fetch(
            `https://x7tt9f86r8.execute-api.us-east-2.amazonaws.com/dev/getDailyAverageData?siteId=${siteId}`
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    dailyAverages: data,
                })
            })
    }

    getMonthDay(date) {
        return `${date.getMonth() + 1}-${date.getDate()}`
    }

    render() {
        return (
            <div className="m-sm-30">
                <Grid
                    container
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={3}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <SimpleCard title="USGS Station Details">
                                <SimpleRiverForm
                                    handleSubmit={this.getDailyData}
                                />
                            </SimpleCard>
                        </Grid>
                        <Grid item xs={10} style={{ textAlign: 'center' }}>
                            <SimpleCard title="Historic Average Flow">
                                <RechartLineGraph
                                    dailyAverages={this.state.dailyAverages}
                                    runnablePercentages={
                                        this.state.dailyRunnablePercentages
                                    }
                                />
                            </SimpleCard>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default RiverForm
