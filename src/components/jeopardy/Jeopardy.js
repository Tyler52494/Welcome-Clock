import React, { Component } from 'react';
//import our service
import JeopardyService from "../service/JeopardyService"
import Display from "../display/Display"
import Display2 from "../display/Display2"
import Display3 from "../display/Display3"

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      data2: {},
      data3: {},
      score: 0,
      formData: {
        answer: "",
      }
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0],
        data2: result.data[1],
        data3: result.data[2],
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData }
    formData[event.target.name] = event.target.value

    this.setState({ formData })
  }

  handleSubmit = (event) => {
    event.preventDefault()



    const number = Number(this.state.data.value)
    if (this.state.formData.answer === this.state.data.answer) {
      this.setState((state) => ({
        score: state.score + number,
        formData: { answer: "" }
      }))

    } else {
      this.setState((state) => ({
        score: state.score - number,
        formData: { answer: "" }

      }))

    }
    this.getNewQuestion();


  }

  





  render() {

    let category="loading"
    let category2="loading"
    let category3="loading"


    let cat1 = <button>loading</button>;
    let cat2 = <button>loading</button>;
    let cat3 = <button>loading</button>;

    if (this.state.data.category) {
      category = this.state.data.category.title
      category2 = this.state.data2.category.title
      category3 = this.state.data3.category.title

      cat1 = <button>{category}</button>
      cat2 = <button>{category2}</button>
      cat3 = <button>{category3}</button>

    }

    return (


      <div>
        <strong>User's Score:</strong> {this.state.score} < br />
        <Display
          question={this.state.data.question}
          value={this.state.data.value}
          category={category}
          Answer={this.state.formData.answer}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />

        <Display2
          question={this.state.data2.question}
          value={this.state.data2.value}
          category={category2}
          Answer={this.state.formData.answer}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        <Display3
          question={this.state.data3.question}
          value={this.state.data3.value}
          category={category3}
          Answer={this.state.formData.answer}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />

          
        




      </div>



    );





  }
}
export default Jeopardy;