import React from 'react';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';
import { generateRandomNumber } from './util';
import Form from './components/Form';
import Progress from './components/Progress';

class App extends React.Component {
  state = {
    generateRandomNumber: generateRandomNumber,
    guess: 999,
    allGuess: [],
    attempt: 0,
  }
  updateAppState = (guess) => {

    console.log(guess);
    //console.log(prevState.guess);
    const absDiff = Math.abs(guess - this.state.generateRandomNumber);

    this.setState(prevState => ({
      guess: 1111,
      allGuess: [...prevState.allGuess, { guess }],
      attempt: prevState.attempt + 1
    }))
    console.log(absDiff);
  }
  render() {
    const { allGuess, attempt } = this.state;
    const guessList = this.state.allGuess.map((item, index) => (
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ));

    return (

      < Grid container style={{ height: '100vh' }
      } justify="center" alignitem="center" >
        <Grid item xs={6} >
          <Paper style={{ margin: '150px' }} elevation={6} ></Paper>
          <Typography align="center" variant="h2" gutterBottom>Hot or Cold</Typography>
          <Divider style={{ margin: '1px, 0' }} />

          <Form returnGuessToApp={guess => this.updateAppState(guess)} style={{ padding: '5px' }} elevation={6} />
          <Progress attempt={attempt} guessList={guessList} />

        </Grid>

      </Grid>
    );
  };
}

export default App;
