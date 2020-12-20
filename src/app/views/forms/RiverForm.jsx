import React, { Component } from 'react'
import SimpleRiverForm from '../material-kit/forms/SimpleRiverForm'
import { SimpleCard } from 'matx'
import { Grid } from '@material-ui/core'
import RechartLineGraph from 'app/components/RechartLineGraph'

class RiverForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dailyAverageData: [
                { index: '1/1', value: 45.5 },
                { index: '1/2', value: 15.5 },
                { index: '1/3', value: 35.5 },
                { index: '1/4', value: 45.5 },
                { index: '1/6', value: 95.5 },
                { index: '1/8', value: 25.5 },
            ],
        }
        this.baseApiUrl =
            'https://x7tt9f86r8.execute-api.us-east-2.amazonaws.com/dev'
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
                        <SimpleCard title="Graph">
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
