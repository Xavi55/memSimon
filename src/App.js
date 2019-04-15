import React, { Component } from 'react';
import { ExpansionPanel, ExpansionPanelSummary, 
  ExpansionPanelDetails, Typography, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';  
import './App.css';

const btns = ['g','r','y','b'];

const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  });

class App extends Component {
  constructor() {
    super();
    this.state = {
      start:0,
      points:0,
      pattern:'',
      click:0,
      score:[
        {'name':'Kev','score':20},
        {'name':'Bil','score':15},
        {'name':'Sal','score':10},
        {'name':'Mik','score':5},
        {'name':'Haw','score':1}
      ]
    };
    this.startGame = this.startGame.bind(this);
    //this.endGame = this.endGame.bind(this);
  }

  handleClick(e) 
  {
    if(this.state.start)
    {
      let need = this.state.pattern.length;

      if(e===this.state.pattern[this.state.click])
      {
        console.log('pass');
        if(this.state.click===need-1)
        {
          console.log('new level');
          this.setState({
            click:0,
            points:this.state.points+1
          });
          this.buildPattern();
        }
        else  
        {
          this.setState({click:this.state.click+1});
        }
      }
      else
      {
        this.endGame();
      }
    }
    else
    {
      console.log('Press Start!');
    }
  }

  startGame()
  {
    document.getElementById('container').style.animation = 'none';
    this.setState({start:1});
    this.buildPattern();
  }

  buildPattern()
  {
    let boxes = {1:'g',2:'r',3:'y',4:'b'};
    let pat = this.state.pattern;
    let rand = Math.floor(Math.random() * 4) + 1;

    pat += boxes[rand];

    this.setState({
      pattern:pat
    });
    console.log(pat);//reveal pattern
    this.animate(pat);
  }
  endGame()
  {
    console.log('lose');
    let temp=[];
    let found = 0;
    this.state.score.map(c=>
    {
      if(this.state.points>=c.score && !found)
      {
        found = 1;
        let name = window.prompt('New High Score!');
        if(!name)
        {
          name = 'Pl1';
        }
        else
        {
          name = name.slice(0,3)
        }
        temp.push({'name':name,'score':this.state.points});
      }
      else
      {
        temp.push(c);
      }
    });
    this.setState({
      points:0,
      click:0,
      start:0,
      pattern:'',
      score:temp,
    });
  }
  animate(btns)
  {

    /* changeColor=(x)=>
    {

    } */

    /* for(var btn in btns)
    {
      let x = document.getElementById(btns[btn]);
      let color = window.getComputedStyle(x).getPropertyValue('background-color');
      x.style.backgroundColor = 'black';
       window.setTimeout(
        ()=>
        {
          x.style.backgroundColor = color;
        },500);
    } */
  }
  render() {
    return (
      <div>
        <h2 className='txt'>Test your memory by matching the colors!</h2>
        {
          this.state.start
          ?
          <div>&nbsp;&nbsp;&nbsp;&nbsp;Points:&nbsp;{this.state.points}</div>
          :
          <div id='start'>
            <Button variant='contained' color='primary' 
              onClick={this.startGame}
            >
            Press to Start!</Button>
          </div>
        }
        <br/><br/><br/>
        <div id='container'>
          {
            btns.map((c)=>
              <div className='content' id={c} key={c}
                onClick={()=>
                  {
                    this.handleClick(c)
                  }}
              ></div>
              )
          }
        </div>
        <div id='bottom'>
        <ExpansionPanel id='scores'>
          <ExpansionPanelSummary>
            High Scores
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {/* <List>
            <ListItem><span>Rank</span><span>Name</span><span>Score</span></ListItem>
            {
              this.state.score.map((x,indx)=>
              <ListItem key={indx+1}>{indx+1}&nbsp;&nbsp;&nbsp;{x.name}&nbsp;&nbsp;&nbsp;{x.score} </ListItem>  
              )
            }
            </List> */}
            <table id='scores'>
            <thead>
              <tr><th>Rank</th><th>Name</th><th>Score</th></tr>
            </thead>
            <tbody>
            {
              this.state.score.map((x,indx)=>
                <tr key={indx+1}>
                  <td>{indx+1}</td><td>{x.name}</td><td>{x.score}</td> 
                </tr>
              )
            }
            </tbody>
            </table>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(App);