import React from 'react'
import Carousel from '../../components/Home/Carousel/Carousel'
import Cinema from '../../components/Home/Cinema/Cinema'
import MovieList from '../../components/Home/MovieList/MovieList'

export default function Home(props) {
    return (
        <main>
            <Carousel />
            <MovieList />
            <Cinema />
        </main>
    )
}
