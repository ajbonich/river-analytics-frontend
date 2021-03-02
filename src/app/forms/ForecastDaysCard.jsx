import React from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Button, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

class SimpleRiverForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            days: 30,
        }
    }

    handleInputChange = (event) => {
        event.persist()
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { days } = this.state
        return (
            <div>
                <ValidatorForm
                    debounceTime={2000}
                    onError={(errors) => console.log(errors)}
                    onSubmit={() =>
                        this.props.handleFormSubmit(this.state.days)
                    }
                    ref="form"
                >
                    <Grid
                        container
                        alignItems="flex-end"
                        justify="center"
                        spacing={2}
                    >
                        <Grid item xs={3}>
                            <TextValidator
                                className="mb-4 w-full"
                                label="Days"
                                onChange={this.handleInputChange}
                                type="text"
                                name="days"
                                value={days}
                                validators={[
                                    'required',
                                    'isNumber: true',
                                    'minNumber: 1',
                                    'maxNumber: 400',
                                    'isPositive: true,',
                                ]}
                                errorMessages={[
                                    'This field is required',
                                    'Entry must be a whole number',
                                    'Number must be between 1 and 365',
                                    'Number must be between 1 and 365',
                                    'Number must be between 1 and 365',
                                ]}
                            />
                        </Grid>
                        <Grid item xs={4} style={{ paddingBottom: 30 }}>
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                            >
                                <span className="pl-2 capitalize">
                                    {this.props.buttonTitle}
                                </span>
                            </Button>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </div>
        )
    }
}

SimpleRiverForm.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
}

export default SimpleRiverForm
