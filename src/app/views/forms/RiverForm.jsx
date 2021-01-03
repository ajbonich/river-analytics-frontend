import React, { Component } from 'react'
import SimpleRiverForm from '../material-kit/forms/SimpleRiverForm'
import { SimpleCard } from 'matx'
import { Grid } from '@material-ui/core'
import RechartLineChart from 'app/components/RechartLineChart'
import RechartAreaChart from 'app/components/RechartAreaChart'
import { XAxis, YAxis, Label, Tooltip } from 'recharts'
const LineXAxis = (
    <XAxis dataKey="index" height={40}>
        <Label value="Day of the Year" position="insideBottom" offset={3} />
    </XAxis>
)

const LineYAxis = (
    <YAxis>
        <Label
            value="Cubic Feet Per Second (CFS)"
            angle={-90}
            position="insideBottomLeft"
            offset={10}
        />
    </YAxis>
)

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
        this.getAllData = this.getAllData.bind(this)
    }

    componentDidMount() {
        this.getAllData('06719505', 300, 1000)
    }

    setBaseAPI() {
        if (process.env.REACT_APP_LOCAL_ENVIRONMENT) {
            return 'http://localhost:8888/'
        }

        return process.env.REACT_APP_PYTHON_API
    }

    getAllData(siteId, minFlow, maxFlow) {
        this.getDailyData(siteId)
        this.getDailyRunnablePercentages(siteId, minFlow, maxFlow)
    }

    getDailyRunnablePercentages(siteId, minFlow, maxFlow) {
        fetch(
            `${this.baseApi}getRunnablePercentages?useTestData=True&siteId=${siteId}&minFlow=${minFlow}&maxFlow=${maxFlow}`
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    dailyRunnablePercentages: data,
                })
            })
    }

    getDailyData(siteId) {
        fetch(
            `${this.baseApi}getDailyAverageData?useTestData=True&siteId=${siteId}`
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
                                    handleFormSubmit={this.getAllData}
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
                                <RechartAreaChart
                                    data={this.state.dailyAverages}
                                    xAxis={LineXAxis}
                                    yAxis={LineYAxis}
                                    tooltip={
                                        <Tooltip
                                            label=""
                                            formatter={(value, value2) => {
                                                return [
                                                    `${value2} bad ${value} cfs`,
                                                    '',
                                                ]
                                            }}
                                            separator=""
                                        />
                                    }
                                />
                                {/* <p className="py-2" /> */}
                                <h4>Percentage of Years in the Range</h4>
                                <RechartLineChart
                                    data={this.state.dailyRunnablePercentages}
                                    xAxis={LineXAxis}
                                    yAxis={LineYAxis}
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
