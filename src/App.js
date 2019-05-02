import React, { Component } from 'react';
import { ExpansionPanel, ExpansionPanelSummary, 
  ExpansionPanelDetails, Typography, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';  
import './App.css';

const btns = ['g','r','y','b'];
let interval;

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
      compTurn:0,
      score:[
        {'name':'Kev','score':15},
        {'name':'Bil','score':10},
        {'name':'Sal','score':3},
        {'name':'Mik','score':2},
        {'name':'Haw','score':1}
      ]
    };
    this.startGame = this.startGame.bind(this);
    //this.endGame = this.endGame.bind(this);
  }

  handleClick(e) 
  {
    if(this.state.start && !this.state.compTurn)
    {
      let need = this.state.pattern.length;//click/actions needed to level up

      if(e===this.state.pattern[this.state.click])//if matches the pattern
      {
        console.log('pass');
        if(this.state.click===need-1)//advance to the next level
        {
          console.log('new level');
          this.setState({
            click:0,
            points:this.state.points+1,
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

  buildPattern()//or I could build the entire pattern from the GET-ko
  {
    let boxes = {1:'g',2:'r',3:'y',4:'b'};
    let pat = this.state.pattern;
    let rand = Math.floor(Math.random() * 4) + 1;//get a random #
    pat += boxes[rand];
    this.setState({
      pattern:pat,
    });
    //this.animate(pat);
    interval = setInterval(this.animate(pat),8000);

  }

  animate(btns)//
  {
    console.log(btns);
    //for(let btn in btns)
    //{
      this.clearColor();
      let x = document.getElementById(btns[0]);
      let color = window.getComputedStyle(x).getPropertyValue('background-color');
      x.style.backgroundColor='black';
      window.setTimeout(()=>
      {
        x.style.backgroundColor = color;
      },500); 
    //}
    //clearInterval(interval);
  }

  clearColor()
  {
    let colors = ['limegreen','red','yellow','blue'] 
    let children = document.getElementById('container').children;
    for(let i=0; i<3; i++)
    {
      //console.log(children[x])
      children[i].style.backgroundColor = colors[i];
    }
  }

  endGame()
  {
    console.log('lose');
    let temp=[];
    let found = 0;
    for(let i=0;i<4;i++)
    {
      if(this.state.points>=this.state.score[i].score && !found)
      {
        found = 1;
        let name = window.prompt('New High Score!');
        if(name.length===0)
        {
          name = 'P1';
        }
        else
        {
          name = name.slice(0,3)
        }
        temp.push({'name':name,'score':this.state.points},this.state.score[i]);
        //continue;
      }
      else
      {
        temp.push(this.state.score[i]);
      }
    }
    this.setState({
      points:0,
      click:0,
      start:0,
      pattern:'',
      score:temp,
    });
    
    /* 
    this.state.score.map(c=>
    {
      if(this.state.points>=c.score && !found)
      {
        found = 1;
        let name = window.prompt('New High Score!');
        if(name.length===0)
        {
          name = 'P1';
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
     */
  }
  
  render() {
    return (
      <div>
        <h2 className='txt'>Match the colors & test your memory!</h2>
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
                    this.handleClick(c);
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