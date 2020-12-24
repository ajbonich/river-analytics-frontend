import React, { Component } from 'react'
import SimpleRiverForm from '../material-kit/forms/SimpleRiverForm'
import { SimpleCard } from 'matx'
import { Grid } from '@material-ui/core'
import RechartLineGraph from 'app/components/RechartLineGraph'
import { Tooltip } from 'recharts'

class RiverForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dailyAverages: [],
            dailyRunnablePercentages: [],
        }

        this.baseApi = this.setBaseAPI()
        this.getDailyData('06719505', 300, 1000)
    }

    setBaseAPI() {
        switch (process.env.NODE_ENV) {
            case 'production':
                return 'https://timdw1ya3f.execute-api.us-east-2.amazonaws.com/production/'
            case 'development':
                return 'https://x7tt9f86r8.execute-api.us-east-2.amazonaws.com/dev'
            case 'test':
                return 'localhost:8888/'
        }
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
                    spacing={1}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <SimpleCard title="USGS Station Details">
                                <SimpleRiverForm
                                    handleSubmit={this.getDailyData}
                                />
                            </SimpleCard>
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            style={{ textAlign: 'center', align: 'justify' }}
                        >
                            <SimpleCard>
                                <h4>Historic Average Flow</h4>
                                <RechartLineGraph
                                    xLabel={'Day of the Year'}
                                    yLabel={'Cubic Feet Per Second (CFS)'}
                                    data={this.state.dailyAverages}
                                    runnablePercentages={
                                        this.state.dailyRunnablePercentages
                                    }
                                    tooltip={
                                        <Tooltip
                                            label=""
                                            formatter={(value) => {
                                                return [`${value} cfs`, '']
                                            }}
                                            separator=""
                                        />
                                    }
                                />
                                {/* <p className="py-2" /> */}
                                <h4>Percentage of Years in the Range</h4>
                                <RechartLineGraph
                                    xLabel={'Day of the Year'}
                                    yLabel={'Percent %'}
                                    data={this.state.dailyRunnablePercentages}
                                    tooltip={
                                        <Tooltip
                                            label=""
                                            formatter={(value) => {
                                                return [`${value} %`, '']
                                            }}
                                            separator=""
                                        />
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
