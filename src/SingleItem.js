import React from "react";
import { connect } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'

const SingleItem = (props) => {

    const myParam = useParams()

    console.log('these are the params',myParam)

    return (
        <div>
            <div>You're in the single item page!</div>
            <div>This is item ID: {myParam.id} </div>
        </div>
    )
}

const mapState = (state) => {
    return state
}

export default connect( mapState )( SingleItem )