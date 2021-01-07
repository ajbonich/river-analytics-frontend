import React, { Component } from 'react'
import SimpleRiverForm from '../material-kit/forms/SimpleRiverForm'
import { SimpleCard } from 'matx'
import { Grid } from '@material-ui/core'
import RechartLineChart from 'app/components/RechartLineChart'
import RechartAreaChart from 'app/components/RechartComposedChart'
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
        this.baseApi = this.setBaseAPI()
        this.getDailyRunnablePercentage = this.getDailyRunnablePercentage.bind(
            this
        )
    }

    setBaseAPI() {
        if (process.env.REACT_APP_LOCAL_ENVIRONMENT) {
            return 'http://localhost:8888/'
        }
        return process.env.REACT_APP_PYTHON_API
    }

    getAllData(minFlow, maxFlow) {
        // this.getDailyData(this.props.siteId)
        this.getDailyRunnablePercentage(minFlow, maxFlow)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.siteId !== this.props.siteId) {
            this.getDailyData()
        }
    }

    handleFormSubmit(minFlow, maxFlow) {
        this.getDailyRunnablePercentage(minFlow, maxFlow)
    }

    getDailyRunnablePercentage(minFlow, maxFlow) {
        fetch(
            `${this.baseApi}getRunnablePercentage?siteId=${this.props.siteId}&minFlow=${minFlow}&maxFlow=${maxFlow}`
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    dailyRunnablePercentages: data,
                })
            })
    }

    getDailyData() {
        fetch(`${this.baseApi}getDailyAverageData?siteId=${this.props.siteId}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    dailyAverages: data,
                })
            })
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
                            <SimpleCard title="Desired Flow">
                                <SimpleRiverForm
                                    handleFormSubmit={
                                        this.getDailyRunnablePercentage
                                    }
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
                                />
                                {/* <p className="py-2" /> */}
                                <h4>Chance Flow is in the Given Range</h4>
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
