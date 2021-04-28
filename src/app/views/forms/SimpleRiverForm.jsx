import React from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Button, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

class SimpleRiverForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            minFlow: 300,
            maxFlow: 1000,
        }
    }

    handleInputChange = (event) => {
        event.persist()
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { minFlow, maxFlow } = this.state
        return (
            <div>
                <h6>
                    Compute Chance Flow is in The Given Range (Based off of
                    historic flows)
                </h6>
                <ValidatorForm
                    debounceTime={2000}
                    onError={(errors) => console.log(errors)}
                    onSubmit={() =>
                        this.props.handleFormSubmit(
                            this.state.minFlow,
                            this.state.maxFlow
                        )
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
                                label="Minimum CFS"
                                onChange={this.handleInputChange}
                                type="text"
                                name="minFlow"
                                value={minFlow}
                                validators={[
                                    'required',
                                    'isNumber: true',
                                    'minNumber: 0',
                                    'maxNumber: 100000',
                                    'isPositive: true,',
                                ]}
                                errorMessages={[
                                    'This field is required',
                                    'Entry must be a whole number',
                                    'Number must be between 0 and 100000',
                                    'Number must be between 0 and 100000',
                                    'Number must be between 0 and 100000',
                                ]}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextValidator
                                className="mb-4 w-full"
                                label="Maximum CFS"
                                onChange={this.handleInputChange}
                                type="text"
                                name="maxFlow"
                                value={maxFlow}
                                validators={[
                                    'required',
                                    'isNumber: true',
                                    'minNumber: 0',
                                    'maxNumber: 100000',
                                    'isPositive: true,',
                                ]}
                                errorMessages={[
                                    'This field is required',
                                    'Entry must be a whole number',
                                    'Number must be between 0 and 100000',
                                    'Number must be between 0 and 100000',
                                    'Number must be between 0 and 100000',
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
