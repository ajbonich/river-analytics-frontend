import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import DesiredFlowCard from './DesiredFlowCard'
import ForecastDaysCard from './ForecastDaysCard'
import { SimpleCard } from 'matx'
import { Grid } from '@material-ui/core'
import RechartLineChart from 'app/components/Charts/RechartLineChart'
import RechartComposedChart from 'app/components/Charts/RechartComposedChart'
import { XAxis, Label, Tooltip } from 'recharts'
const LineXAxis = (
    <XAxis dataKey="index" height={40}>
        <Label value="Day of the Year" position="insideBottom" offset={3} />
    </XAxis>
)

class RiverForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            averageDataLoading: true,
            dailyAverages: null,
            dailyAverageTitle: 'Historic Average Flow',
            chanceDataLoading: false,
            dailyRunnablePercentages: null,
            chanceTitle: 'Flow Chance',
            forecastDataLoading: false,
            forecastData: null,
            forecastTitle: 'Forecast',
        }
        this.baseApi = this.setBaseAPI()
        this.getDailyRunnablePercentage = this.getDailyRunnablePercentage.bind(
            this
        )
        this.getDailyForecast = this.getDailyForecast.bind(this)
        this.getDailyData()
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
        this.setState({
            chanceDataLoading: true,
            chanceTitle: `Chance Flow is between ${minFlow} and ${maxFlow} cfs`,
        })
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
        this.setState({
            forecastDataLoading: true,
            forecastTitle: `Forecast for the Next ${forecastLength} Days`,
        })
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
                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={6}
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
                        xs={6}
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
                        xs={12}
                        style={{ textAlign: 'center', align: 'justify' }}
                    >
                        <SimpleCard style={{ minHeight: 1000 }}>
                            {this.state.averageDataLoading ? (
                                <CircularProgress />
                            ) : (
                                <RechartComposedChart
                                    data={this.state.dailyAverages}
                                    title={
                                        this.props.siteDescription
                                            ? `Historic Average Flow for: ${this.props.siteDescription}`
                                            : 'Historic Average Flow'
                                    }
                                    xAxis={LineXAxis}
                                    yAxisLabelValue={
                                        'Cubic Feet Per Second (CFS)'
                                    }
                                />
                            )}
                        </SimpleCard>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ textAlign: 'center', align: 'justify' }}
                    >
                        <SimpleCard style={{ minHeight: 320 }}>
                            {this.state.chanceDataLoading ? (
                                <CircularProgress />
                            ) : (
                                <RechartLineChart
                                    data={this.state.dailyRunnablePercentages}
                                    dataKey="percent"
                                    xAxis={LineXAxis}
                                    yAxisLabelValue={'Percent Chance'}
                                    title={this.state.chanceTitle}
                                    tooltip={
                                        <Tooltip
                                            label=""
                                            formatter={(value) => {
                                                return [
                                                    `${Math.round(value)} %`,
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
                        xs={12}
                        style={{
                            textAlign: 'center',
                            align: 'justify',
                        }}
                    >
                        <SimpleCard>
                            {this.state.forecastDataLoading ? (
                                <CircularProgress />
                            ) : (
                                <RechartLineChart
                                    data={this.state.forecastData}
                                    dataKey="forecast"
                                    xAxis={LineXAxis}
                                    yAxisLabelValue={
                                        'Cubic Feet Per Second (CFS)'
                                    }
                                    title={this.state.forecastTitle}
                                    tooltip={
                                        <Tooltip
                                            label=""
                                            formatter={(value) => {
                                                return [
                                                    `${Math.round(value)} cfs`,
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
            </div>
        )
    }
}

export default RiverForm
