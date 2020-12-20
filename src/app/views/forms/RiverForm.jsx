import React, { Component } from 'react'
import SimpleRiverForm from '../material-kit/forms/SimpleRiverForm'
import { SimpleCard } from 'matx'
import { Grid } from '@material-ui/core'
import RechartLineGraph from 'app/components/RechartLineGraph'

class RiverForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dailyAverageData: [],
        }
        this.baseApiUrl =
            'https://x7tt9f86r8.execute-api.us-east-2.amazonaws.com/dev'
        this.getDailyAverageData('06719505')
    }

    getDailyAverageData = (siteId) => {
        fetch(`${this.baseApiUrl}/getDailyAverageData?siteId=${siteId}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    dailyAverageData: data,
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
                    <Grid item xs={3}>
                        <SimpleCard title="Average Flow">
                            <SimpleRiverForm
                                handleDailyAverageSubmit={
                                    this.getDailyAverageData
                                }
                            />
                        </SimpleCard>
                    </Grid>
                    <Grid item xs={9} style={{ textAlign: 'center' }}>
                        <SimpleCard title="Average Flow">
                            <RechartLineGraph
                                data={this.state.dailyAverageData}
                            />
                        </SimpleCard>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default RiverForm
