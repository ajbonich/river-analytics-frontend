import React, { Component, Fragment } from 'react'
import { Grid, Card } from '@material-ui/core'
import StatCards from './shared/StatCards'
import TableCard from './shared/TableCard'
import RowCards from './shared/RowCards'
import StatCards2 from './shared/StatCards2'
import UpgradeCard from './shared/UpgradeCard'
import Campaigns from './shared/Campaigns'
import { withStyles } from '@material-ui/styles'

class Dashboard1 extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                <div className="pb-24 pt-7 px-8 bg-primary">
                    <div className="card-title capitalize text-white mb-4 text-white-secondary">
                        Last 12 months sales
                    </div>
                </div>

                <div className="analytics m-sm-30 mt--18">
                    <Grid container spacing={3}>
                        <Grid item lg={8} md={8} sm={12} xs={12}>
                            <StatCards />

                            {/* Top Selling Products */}
                            <TableCard />

                            <StatCards2 />

                            <h4 className="card-title text-muted mb-4">
                                Ongoing Projects
                            </h4>
                            <RowCards />
                        </Grid>

                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <Card className="px-6 py-4 mb-6">
                                <div className="card-title">
                                    Traffic Sources
                                </div>
                                <div className="card-subtitle">
                                    Last 30 days
                                </div>
                            </Card>
                            <UpgradeCard />
                            <Campaigns />
                        </Grid>
                    </Grid>
                </div>
            </Fragment>
        )
    }
}

export default withStyles({}, { withTheme: true })(Dashboard1)
