import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showTrailerAct } from '../../redux/actions/movie.action';
import './Trailer.scss'

export default function Trailer() {
    const { trailer } = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();

    return (
        <div className="modal fade" id="trailer" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => {
            setTimeout(() => {
                dispatch(showTrailerAct(''));
            }, 500);
        }}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-body">
                        <iframe title="trailer" className="framevideo" width="100%" height="100%" src={trailer} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen autoPlay />
                    </div>
                </div>
            </div>
        </div>
    )
}
