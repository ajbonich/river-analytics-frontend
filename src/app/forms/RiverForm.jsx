import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import DesiredFlowCard from './DesiredFlowCard'
import ForecastDaysCard from './ForecastDaysCard'
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
            dailyAverages: null,
            chanceDataLoading: false,
            dailyRunnablePercentages: null,
            forecastDataLoading: false,
            forecastData: null,
        }
        this.baseApi = this.setBaseAPI()
        this.getDailyRunnablePercentage = this.getDailyRunnablePercentage.bind(
            this
        )
        this.getDailyForecast = this.getDailyForecast.bind(this)
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

    getDailyForecast(forecastLength, forecastType = 'holtwinters') {
        this.setState({ forecastDataLoading: true })
        fetch(
            `${this.baseApi}forecast/${forecastType}/${this.props.siteId}/?days=${forecastLength}`
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    forecastDataLoading: false,
                    forecastData: data,
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
                        <Grid
                            item
                            xs={12}
                            style={{ textAlign: 'center', align: 'justify' }}
                        >
                            <SimpleCard style={{ minHeight: 320 }}>
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
                            </SimpleCard>
                        </Grid>
                        <Grid
                            item
                            xs={2}
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            <SimpleCard
                                title="Desired Flow"
                                style={{ minHeight: 320 }}
                            >
                                <DesiredFlowCard
                                    buttonTitle={'Get Percentages'}
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
                            <SimpleCard style={{ minHeight: 320 }}>
                                <h4>Chance Flow is in the Given Range</h4>
                                {this.state.chanceDataLoading ? (
                                    <CircularProgress />
                                ) : (
                                    <RechartLineChart
                                        data={
                                            this.state.dailyRunnablePercentages
                                        }
                                        dataKey="percent"
                                        xAxis={LineXAxis}
                                        yAxis={LineYAxis}
                                        tooltip={
                                            <Tooltip
                                                label=""
                                                formatter={(value) => {
                                                    return [
                                                        `${Math.round(
                                                            value
                                                        )} %`,
                                                        '',
                                                    ]
                                                }}
                                                separator=""
                                            />
                                        }
                                    />
                                )}
                            </SimpleCard>
                        </Grid>
                        <Grid
                            item
                            xs={2}
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            <SimpleCard title="Forecast Length">
                                <ForecastDaysCard
                                    buttonTitle={'Get Forecast'}
                                    handleFormSubmit={this.getDailyForecast}
                                />
                            </SimpleCard>
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            style={{
                                textAlign: 'center',
                                align: 'justify',
                            }}
                        >
                            <SimpleCard>
                                <h4>Forecast for the next 100 days</h4>
                                {this.state.forecastDataLoading ? (
                                    <CircularProgress />
                                ) : (
                                    <RechartLineChart
                                        data={this.state.forecastData}
                                        dataKey="forecast"
                                        xAxis={LineXAxis}
                                        yAxis={LineYAxis}
                                        tooltip={
                                            <Tooltip
                                                label=""
                                                formatter={(value) => {
                                                    return [
                                                        `${Math.round(
                                                            value
                                                        )} cfs`,
                                                        '',
                                                    ]
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
