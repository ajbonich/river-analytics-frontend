import React, { useContext } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setLayoutSettings } from 'app/redux/actions/LayoutActions'
import { withStyles, ThemeProvider } from '@material-ui/core/styles'
import Scrollbar from 'react-perfect-scrollbar'
import { classList } from 'utils'
import Layout1Topbar from './Layout1Topbar'
import Footer from '../SharedCompoents/Footer'
import SimpleForm from 'app/views/material-kit/forms/SimpleForm'
import { Card } from '@material-ui/core'
import { MatxSuspense } from 'matx'
import { renderRoutes } from 'react-router-config'
import AppContext from 'app/appContext'

const styles = (theme) => {
    return {
        layout: {
            backgroundColor: theme.palette.background.default,
        },
    }
}

const Layout1 = (props) => {
    const { routes } = useContext(AppContext)
    const { settings, classes, theme } = props
    const { layout1Settings } = settings
    const topbarTheme = settings.themes[layout1Settings.topbar.theme]
    const layoutClasses = {
        [classes.layout]: true,
        [`${settings.activeLayout} sidenav-${layout1Settings.leftSidebar.mode} theme-${theme.palette.type} flex`]: true,
        'topbar-fixed': layout1Settings.topbar.fixed,
    }

    return (
        <div className={classList(layoutClasses)}>
            <div className="content-wrap position-relative">
                {layout1Settings.topbar.show && layout1Settings.topbar.fixed && (
                    <ThemeProvider theme={topbarTheme}>
                        <Layout1Topbar fixed={true} className="elevation-z8" />
                    </ThemeProvider>
                )}

                <Scrollbar className="scrollable-content">
                    <div className="content">
                        <MatxSuspense>{renderRoutes(routes)}</MatxSuspense>
                    </div>
                    <div className="my-auto" />
                    {settings.footer.show && !settings.footer.fixed && (
                        <Footer />
                    )}
                </Scrollbar>
            </div>
        </div>
    )
}

Layout1.propTypes = {
    settings: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    setLayoutSettings: PropTypes.func.isRequired,
    settings: state.layout.settings,
})

export default withStyles(styles, { withTheme: true })(
    connect(mapStateToProps, { setLayoutSettings })(Layout1)
)
