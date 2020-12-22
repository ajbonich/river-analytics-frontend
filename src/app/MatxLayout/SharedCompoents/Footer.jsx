import React from 'react'
import { withStyles, ThemeProvider } from '@material-ui/core/styles'
import { Button, Toolbar, AppBar } from '@material-ui/core'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Footer = ({ theme, settings }) => {
    const footerTheme = settings.themes[settings.footer.theme] || theme
    return (
        <ThemeProvider theme={footerTheme}>
            <AppBar color="primary" position="static">
                <Toolbar className="footer flex items-center">
                    <div className="flex items-center container w-full">
                        <a
                            href="https://maps.waterdata.usgs.gov/mapper/index.html"
                            className="mr-2"
                            target="_blank"
                        >
                            <Button variant="contained">USGS Site Map</Button>
                        </a>
                        <a
                            href="https://www.americanwhitewater.org/content/River/view/river-index"
                            target="_blank"
                        >
                            <Button variant="contained" color="secondary">
                                Find river sections at American Whitewater
                            </Button>
                        </a>
                        <span className="m-auto"></span>
                        <p className="m-0">Design by Andrew Bonich</p>
                    </div>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

Footer.propTypes = {
    settings: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    settings: state.layout.settings,
})

export default withStyles(
    {},
    { withTheme: true }
)(connect(mapStateToProps, {})(Footer))
