import React, { memo } from 'react'
import { motion } from "framer-motion"
import './Loading.scss'
import { useDispatch, useSelector } from 'react-redux'
import { showLoadingAct } from '../../redux/actions/loading.action';

function Loading() {
    const { isLoading } = useSelector(state => state.loadingReducer);
    const dispatch = useDispatch();

    const onComplete = () => {
        dispatch(showLoadingAct(false));
    }

    return (
        <div>
            {
                isLoading ?
                    <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, delay: 0.75 }}
                        onAnimationComplete={onComplete}
                        id="loading">
                        <div className="loading__holder">
                            <motion.img
                                animate={{
                                    rotate: [2, 10, -10, 10, -10, 10, -10],
                                    scale: [0.85, 1],
                                    opacity: [1, 0]
                                }}
                                transition={{
                                    duration: 1.5,
                                }}
                                src="./img/common/loading-logo.png" style={{ width: 150 }}
                            />
                        </div>
                    </motion.div> : ''
            }
        </div>
    )
}

export default memo(Loading);