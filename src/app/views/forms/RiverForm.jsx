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
        console.log(process.env.REACT_APP_PYTHON_API)
        console.log(process.env.REACT_APP_ENVIRONMENT)
        this.baseApi = this.setBaseAPI()
    }

    componentDidMount() {
        this.getAllData('06719505', 300, 1000)
    }

    setBaseAPI() {
        if (process.env.REACT_APP_LOCAL_ENVIRONMENT) {
            return 'https://localhost:8888/'
        }

        return process.env.REACT_APP_PYTHON_API
    }

    getAllData(siteId, minFlow, maxFlow) {
        this.getDailyRunnablePercentages(siteId, minFlow, maxFlow)
        this.getDailyData(siteId)
    }

    getDailyRunnablePercentages = (siteId, minFlow, maxFlow) => {
        fetch(
            `${this.baseApi}getRunnablePercentages?siteId=${siteId}&minFlow=${minFlow}&maxFlow=${maxFlow}`
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    dailyRunnablePercentages: data,
                })
            })
    }

    getDailyData = (siteId) => {
        fetch(`${this.baseApi}getDailyAverageData?siteId=${siteId}`)
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
                                    handleSubmit={this.getAllData}
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
