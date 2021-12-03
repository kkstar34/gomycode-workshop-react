import Answer from './Answer';


const Quiz = ({questions, addPropsAnswer}) => {


    const addAnswer = (id, answer) => {

        addPropsAnswer(id, answer);

    }

    return(
        <div className="w-100 h-100 bg-white">
        <div className="container" style={{ marginTop: "3.5rem" }}>
          <div className="row">
           
              {/* <div className="alert alert-success alert-dismissible fade show" role="alert" style="margin-top:30px; top:20px ; right:0; left:0px width:50% ; position:absolute">
                    <strong> </strong> 
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div> */}

              <span className="question-detail__head">Question</span>
              {questions.map((question, i) => 
              <div className="col-md-12 col-lg-9" key={i}>
                <div className="question-detail__title">
                <a
                  href="#"
                  className="d-flex flex-column align-items-center no-underline "
                >
                  <i className="la la-heart-o"></i>
                  <span>10</span>
                </a>
                <div>
                  <h1>{question.title}</h1>
                  <div>
                    <a href="#" className="question__tags">
                    {question.category}
                    </a>
                  </div>
                </div>
              </div>

              <div className="question-detail__content">
                <p>{question.content}</p>
              </div>

              <hr />
              <div className="mb-4 answers-count ">
                <span className="text-dark-blue font-weight-bold">
                  1 reponse(s)
                </span>
                <span className="d-flex align-items-center">
                  <img src="img/avatar.png" alt="" width="20" height="20" />
                  <span className="text-black ml-2">Kouyate Karim</span>
                </span>
              </div>

              {/* @if($comment->id == $question->best_comment_id)  {{'good-answer'}} @endif */}
             

             {question.answers.map((answer, i) => 


                <Answer answer={answer} questionId={question.id} addPropsAnswer={addAnswer} />

             )}
            </div>
              )}
              

             

            <div className="col-md-12 col-lg-3">Right</div>
          </div>
        </div>
      </div>
      
    )
}


export default Quiz;