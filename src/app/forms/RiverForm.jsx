import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { SimpleCard } from 'matx'
import { Grid } from '@material-ui/core'
import ForecastChart from 'app/components/Charts/ForecastChart'
import HistoricAverageChart from 'app/components/Charts/HistoricAverageChart'
import { XAxis, Label } from 'recharts'
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
            chanceDataLoading: true,
            dailyRunnablePercentages: null,
            chanceTitle: 'Flow Chance',
            forecastDataLoading: true,
            forecastData: null,
        }
        this.baseApi = this.setBaseAPI()
        this.getDailyRunnablePercentage = this.getDailyRunnablePercentage.bind(
            this
        )
        this.getDailyForecast = this.getDailyForecast.bind(this)
        this.getDailyData()
        this.getDailyRunnablePercentage(300, 1000)
        this.getDailyForecast()
    }

    setBaseAPI() {
        if (process.env.REACT_APP_LOCAL_ENVIRONMENT) {
            return 'http://localhost:8888/'
        }
        return process.env.REACT_APP_PYTHON_API
    }

    componentDidUpdate(prevProps) {
        if (prevProps.siteId !== this.props.siteId) {
            this.setState({
                averageDataLoading: true,
                forecastDataLoading: true,
            })
            this.getDailyData()
            this.getDailyForecast()
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
            `${this.baseApi}/runnable-percentage?siteId=${this.props.siteId}&minFlow=${minFlow}&maxFlow=${maxFlow}`
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
        fetch(`${this.baseApi}/daily-average-data?siteId=${this.props.siteId}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    averageDataLoading: false,
                    dailyAverages: data,
                })
            })
    }

    getDailyForecast() {
        this.setState({
            forecastDataLoading: true,
        })
        fetch(`${this.baseApi}prophet_forecast?site_id=${this.props.siteId}`)
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
                        xs={12}
                        style={{ textAlign: 'center', align: 'justify' }}
                    >
                        <SimpleCard style={{ minHeight: 1000 }}>
                            <h4>
                                Historic Average Flow for:{' '}
                                {this.props.siteDescription}
                            </h4>
                            {this.state.averageDataLoading ? (
                                <CircularProgress />
                            ) : (
                                <HistoricAverageChart
                                    data={this.state.dailyAverages}
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
                        style={{
                            textAlign: 'center',
                            align: 'justify',
                        }}
                    >
                        <SimpleCard style={{ minHeight: 320 }}>
                            <h4>Forecast for: {this.props.siteDescription}</h4>
                            {this.state.forecastDataLoading ? (
                                <CircularProgress />
                            ) : (
                                <ForecastChart
                                    data={this.state.forecastData}
                                    xAxis={LineXAxis}
                                    yAxisLabelValue={
                                        'Cubic Feet Per Second (CFS)'
                                    }
                                />
                            )}
                        </SimpleCard>
                    </Grid>
                    {/* <Grid
                        item
                        xs={12}
                        style={{ textAlign: 'center', align: 'justify' }}
                    >
                        <SimpleCard style={{ minHeight: 320 }}>
                            {this.state.chanceDataLoading ? (
                                <CircularProgress />
                            ) : (
                                <div>
                                    <PercentChanceChart
                                        data={
                                            this.state.dailyRunnablePercentages
                                        }
                                        dataKey="percent"
                                        xAxis={LineXAxis}
                                        yAxisLabelValue={'Percent Chance'}
                                        title={this.state.chanceTitle}
                                    />
                                    <DesiredFlowCard
                                        buttonTitle={'Get Percentages'}
                                        handleFormSubmit={
                                            this.getDailyRunnablePercentage
                                        }
                                    />
                                </div>
                            )}
                        </SimpleCard>
                    </Grid> */}
                </Grid>
            </div>
        )
    }
}

export default RiverForm
