import { Link } from "gatsby"
import * as React from "react"
// import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"

const About = () => {
    return (
        <Layout location='about' title='About Me'>
            <Link to='/'>Homepage</Link>
            <h1>About Me</h1>
            <Bio />
            <p>
                About me will added here.
            </p>
        </Layout>
    )
}

export default About