import React, { Component } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Button, Icon, Grid } from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'

class SimpleRiverForm extends Component {
    state = {
        stationId: '',
        startDate: new Date(),
        endDate: new Date(),
    }

    componentDidMount() {}

    componentWillUnmount() {}

    handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
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

    render() {
        const { stationId, startDate, endDate } = this.state
        return (
            <div>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={(errors) => null}
                >
                    <Grid container spacing={3}>
                        <Grid item lg={2} md={2} sm={4} xs={12}>
                            <TextValidator
                                className="mb-4 w-full"
                                label="USGS Station ID"
                                onChange={this.handleChange}
                                type="text"
                                name="stationId"
                                value={stationId}
                                validators={[
                                    'required',
                                    'minStringLength: 8',
                                    'maxStringLength: 8',
                                ]}
                                errorMessages={['this field is required']}
                            />
                        </Grid>

                        <Grid item lg={2} md={2} sm={4} xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    className="mb-4 w-full"
                                    margin="none"
                                    id="mui-pickers-startDate"
                                    label="Start Date"
                                    inputVariant="standard"
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

                        <Grid item lg={2} md={2} sm={4} xs={12}>
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
                            {/* <RadioGroup
                                className="mb-4"
                                value={gender}
                                name="gender"
                                onChange={this.handleChange}
                                row
                            >
                                <FormControlLabel
                                    value="Male"
                                    control={<Radio color="primary" />}
                                    label="Male"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="Female"
                                    control={<Radio color="secondary" />}
                                    label="Female"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="Others"
                                    control={<Radio color="secondary" />}
                                    label="Others"
                                    labelPlacement="end"
                                />
                            </RadioGroup> */}
                        </Grid>
                    </Grid>
                    <Button color="primary" variant="contained" type="submit">
                        <span className="pl-2 capitalize">Submit</span>
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default SimpleRiverForm
