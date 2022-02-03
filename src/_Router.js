import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Main from './Main'
import Counter from './Counter'
import SingleItem from './SingleItem'

const _Router = () => {
    return(
        <div>
            <Routes>
                <Route path='/' element={ <Main /> } />
                <Route path='/counter' element={ <Counter /> } />
                <Route path='/item/:id' element={ <SingleItem /> } render={(props) => <SingleItem {...props} />} />
            </Routes>
        </div>
    )
}

export default _Router