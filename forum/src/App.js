
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Quiz from './components/Quiz';

function App() {

  const initialState = [
    {
      id : 1 ,
      title : 'Question 1',
      content : 'Content 1', 
      category : 'React js',
      answers : [
        {
          content : "Reponse 1",
          bestAnswer : true,
        },
        {
          content : "Reponse 2",
          bestAnswer : false,
        }
      ]
    },

    {
      id : 2,
      title : 'Question 2',
      content : 'Content 2', 
      category : 'Node js',
      answers : [
        {
          content : "Reponse 1",
        },
        {
          content : "Reponse 2",
        }
      ]
    }
  ]
  const [questions, setQuestions] = useState([])


  const addQuestion = (question) => {
    let newState = [...questions];
    newState.push(question);
    setQuestions(newState);
  }


 const addAnswer = (id,answer) => {


    let newState = [...questions];

    let index ;

    index = newState.findIndex(question => question.id == id);

    console.log(index);
    newState[index].answers.push(answer);

    setQuestions(newState);
 }

  return (
  <div>
    <Form setQuestions={addQuestion}/>
    <Quiz questions={questions} addPropsAnswer={addAnswer}/>


  </div>
  );
}

export default App;
