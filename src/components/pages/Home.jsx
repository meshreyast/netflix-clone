import React from 'react'
import requests from '../../Requests'
import Footer from '../Footer'
import Main from '../Main'
import Row from '../Row'

const Home = () => {
    return (
        <>
            <Main />
            <Row rowId='1' title='Trending' fetchURL={requests.requestTrending} />
            <Row rowId='2' title='Popular' fetchURL={requests.requestPopular} />
            <Row rowId='3' title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row rowId='4' title='Up Coming' fetchURL={requests.requestUpcoming} />
            <Row rowId='5' title='Comedy' fetchURL={requests.requestComedy} />
            <Footer />
        </>
    )
}

export default Home