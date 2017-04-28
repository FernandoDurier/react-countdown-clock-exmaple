import React, {Component} from 'react';
import './App.css';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }
  }
  componentWillMount(){//used to avoid infinte loop of setState in getTimeUntil
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount(){ //used to update the Countdown within 1 sec intervals
    setInterval(()=>this.getTimeUntil(this.props.deadline),1000);
  }
  leading0(num){
    return num < 10 ? '0'+num : num;
  }
  getTimeUntil(deadline){
    const time = Date.parse(deadline)-Date.parse(new Date());
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor((time/(1000*60*60))%24);
    const days = Math.floor(time/(1000*60*60*24));
    //this.setState({days:days, hours:hours, minutes:minutes, seconds:seconds});
    this.setState({days,hours,minutes,seconds}); //simplified key value attribution could be done only because key and value have the exact same name
  }
  render(){
    return(
          <div>
            <div className="Clock-days">{this.leading0(this.state.days)} Days</div>
            <div className="Clock-hours">{this.leading0(this.state.hours)} Hours</div>
            <div className="Clock-minutes">{this.leading0(this.state.minutes)} Minutes</div>
            <div className="Clock-seconds">{this.leading0(this.state.seconds)} Seconds</div>
          </div>
        );
  }
}
export default Clock;
