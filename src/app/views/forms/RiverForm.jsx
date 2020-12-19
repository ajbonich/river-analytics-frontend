import React, { Component } from 'react'
import SimpleRiverForm from '../material-kit/forms/SimpleRiverForm'
import { SimpleCard } from 'matx'
import { Grid } from '@material-ui/core'

class RiverForm extends Component {
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
                            <SimpleRiverForm />
                        </SimpleCard>
                    </Grid>
                    <Grid item xs={9} style={{ textAlign: 'center' }}>
                        <SimpleCard title="Graph">Graphs and stuff</SimpleCard>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default RiverForm
