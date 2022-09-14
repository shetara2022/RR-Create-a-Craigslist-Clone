import React from 'react'
import { Posting } from './posting'

export const Gallery = function (props) {
    return (
        <div>
            <h2>Gallery</h2>
            {props.postings.map((p, i) => {
                return <Posting posting={p} key={i} />
            })}
        </div>
    )
}
