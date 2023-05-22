import { Component } from "react";
import FeedbackOptions from "./feedBack";
import Statistics from "./Statistics";
import Section from "./section";
import Notification from "./Notification";

export default class App extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    update = type =>{
        this.setState(prevState => ({
            [type]: prevState[type] + 1,
        }));
    };

    countTotalFeedback = () => {
        let { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const {good} = this.state;
        return total ? Math.ceil((good/total)*100) : 0;
    }
    render(){

        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentge = this.countPositiveFeedbackPercentage();

        return(
        <Section title="Please leave feedback">
                    <FeedbackOptions 
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.update}
                    />
        {total === 0 ? (
            <Notification message="No feedback given" />
        ):(    
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentge={positivePercentge}
            />)
        }
        </Section>
        );
    };
}