import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import SimpleRiverForm from './SimpleRiverForm'
import { SimpleCard } from 'matx'
import { Grid } from '@material-ui/core'
import RechartLineChart from 'app/components/Charts/RechartLineChart'
import RechartComposedChart from 'app/components/Charts/RechartComposedChart'
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
            averageDataLoading: false,
            chanceDataLoading: false,
            dailyAverages: null,
            dailyRunnablePercentages: null,
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

    componentDidUpdate(prevProps) {
        if (prevProps.siteId !== this.props.siteId) {
            this.setState({ averageDataLoading: true })
            this.getDailyData()
        }
    }

    handleFormSubmit(minFlow, maxFlow) {
        this.getDailyRunnablePercentage(minFlow, maxFlow)
    }

    getDailyRunnablePercentage(minFlow, maxFlow) {
        this.setState({ chanceDataLoading: true })
        fetch(
            `${this.baseApi}getRunnablePercentage?siteId=${this.props.siteId}&minFlow=${minFlow}&maxFlow=${maxFlow}`
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    dailyRunnablePercentages: data,
                    chanceDataLoading: false,
                })
            })
    }

    getDailyData() {
        fetch(`${this.baseApi}getDailyAverageData?siteId=${this.props.siteId}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    averageDataLoading: false,
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
                                {this.state.averageDataLoading ? (
                                    <CircularProgress />
                                ) : (
                                    <RechartComposedChart
                                        data={this.state.dailyAverages}
                                        xAxis={LineXAxis}
                                        yAxis={LineYAxis}
                                    />
                                )}
                                <h4>Chance Flow is in the Given Range</h4>
                                {this.state.chanceDataLoading ? (
                                    <CircularProgress />
                                ) : (
                                    <RechartLineChart
                                        data={
                                            this.state.dailyRunnablePercentages
                                        }
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
                                )}
                            </SimpleCard>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default RiverForm
