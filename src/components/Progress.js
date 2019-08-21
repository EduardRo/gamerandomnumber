import React from 'react';
import { Typography } from '@material-ui/core';
import './Progress.css';

const Progress = ({ attempt, guessList }) => (
    <div>
        <Typography variant="h4" style={{ marginTop: '50px' }}>Guess attempt: {attempt}</Typography>
        <ul className="progressBar__history">
            {guessList}
        </ul>
    </div >
);

export default Progress;