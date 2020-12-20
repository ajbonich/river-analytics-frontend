import React from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Button, Grid } from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import PropTypes from 'prop-types'

class SimpleRiverForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            siteId: '06719505',
            startDate: new Date('January 1, 2021'),
            endDate: new Date('December 31, 2021'),
        }
    }

    handleChange = (event) => {
        event.persist()
        this.setState({ [event.target.name]: event.target.value })
    }

    handleStartDateChange = (startDate) => {
        this.setState({ startDate })
    }

    handleEndDateChange = (endDate) => {
        this.setState({ endDate })
    }

    handleSubmit() {
        this.props.handleDailyAverageSubmit(
            this.state.siteId,
            this.state.startDate,
            this.state.endDate
        )
    }

    render() {
        const { siteId, startDate, endDate } = this.state
        return (
            <div>
                <ValidatorForm
                    debounceTime={2000}
                    onError={(errors) => console.log(errors)}
                    onSubmit={() => this.handleSubmit()}
                    ref="form"
                >
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                        spacing={3}
                    >
                        <Grid item xs>
                            <TextValidator
                                className="mb-4 w-full"
                                label="Must be a valid USGS station Id"
                                onChange={this.handleChange}
                                type="text"
                                name="siteId"
                                value={siteId}
                                validators={[
                                    'required',
                                    'minStringLength: 8',
                                    'maxStringLength: 8',
                                    'isNumber: true',
                                    'isPositive: true,',
                                ]}
                                errorMessages={['this field is required']}
                            />
                        </Grid>
                        {/* <Grid item xs>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    className="mb-4 w-full"
                                    margin="none"
                                    id="mui-pickers-startDate"
                                    label="Start Date"
                                    inputVariant="standard"
                                    initialFocusedDate={new Date(2020, 1, 1)}
                                    type="text"
                                    autoOk={true}
                                    value={startDate}
                                    onChange={this.handleStartDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>

                        <Grid item xs>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="none"
                                    id="mui-pickers-endDate"
                                    label="End Date"
                                    inputVariant="standard"
                                    type="text"
                                    autoOk={true}
                                    value={endDate}
                                    onChange={this.handleEndDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid> */}
                    </Grid>
                    <div className="py-3" />
                    <Button color="primary" variant="contained" type="submit">
                        <span className="pl-2 capitalize">Submit</span>
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

SimpleRiverForm.propTypes = {
    handleDailyAverageSubmit: PropTypes.func.isRequired,
}

export default SimpleRiverForm
