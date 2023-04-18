import React from 'react'
import PropTypes from 'prop-types'

import { withStyles, ThemeProvider } from '@material-ui/core/styles'
import { classList } from 'utils'
import Layout1Topbar from './Layout1Topbar'
import feedbackButtonCss from 'styles/feedbackButton.css'

import { themeColors } from './MatxTheme/themeColors'
import { createMuiTheme } from '@material-ui/core/styles'
import { forEach, merge } from 'lodash'
import themeOptions from './MatxTheme/themeOptions'
import Content from 'app/components/Content'

import Feedback from 'feeder-react-feedback' // import Feedback component
import 'feeder-react-feedback/dist/feeder-react-feedback.css' // import stylesheet

const styles = (theme) => {
    return {
        layout: {
            backgroundColor: '#e6f0f6',
        },
    }
}

function createMatxThemes() {
    const themes = {}

    forEach(themeColors, (value, key) => {
        themes[key] = createMuiTheme(merge({}, themeOptions, value))
    })
    return themes
}
const themes = createMatxThemes()
const Layout1Settings = {
    leftSidebar: {
        show: true,
        mode: 'close', // full, close, compact, mobile,
        theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
        // bgOpacity: .96, // 0 ~ 1
        bgImgURL: '/assets/images/sidebar/sidebar-bg-dark.jpg',
    },
    topbar: {
        show: true,
        fixed: true,
        theme: 'purpleDark1', // View all valid theme colors inside MatxTheme/themeColors.js
    },
}

const MatxLayoutSettings = {
    activeLayout: 'layout1', // layout1, layout2
    activeTheme: 'purple1', // View all valid theme colors inside MatxTheme/themeColors.js
    perfectScrollbar: true,

    themes: themes,

    secondarySidebar: {
        show: true,
        open: true,
        theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
    },
    // Footer options
    footer: {
        show: true,
        fixed: false,
        theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
    },
}
const Layout1 = (props) => {
    const { classes, theme } = props
    const topbarTheme = themes[Layout1Settings.topbar.theme]
    const layoutClasses = {
        [classes.layout]: true,
        [`layout1 sidenav-${Layout1Settings.leftSidebar.mode} theme-${theme.palette.type} flex`]: true,
        'topbar-fixed': Layout1Settings.topbar.fixed,
    }

    return (
        <div className={classList(layoutClasses)}>
            <div className="content-wrap position-relative">
                <ThemeProvider theme={topbarTheme}>
                    <Layout1Topbar fixed={true} className="elevation-z8" />
                </ThemeProvider>

                <Content theme={props.theme} settings={MatxLayoutSettings} />
                <Feedback
                    projectId="603e7dc265d39b0004cbe71f"
                    hoverBorderColor="#349ecf"
                    primaryColor="#348fc2"
                    projectName="TheRiverFlowcast. Please add your email if you would like a response! :)"
                    classname={feedbackButtonCss}
                />
            </div>
        </div>
    )
}

Layout1.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Layout1)
