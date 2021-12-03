import { useState } from 'react';

const Answer = ({answer, questionId, addPropsAnswer}) => {




    const [content, setContent] = useState("");
    const addAnswer = (id) => {

        
        let answer;

        answer = {
            content: content,
            bestAnswer: false,
        }
        addPropsAnswer(id, answer)
    }

    return (
        <>
        <div className={answer.bestAnswer? "comment good-answer" : "comment"} >
             {answer.content ? <>  <a href="#" className="comment__likes-count no-underline">
                <i className="la la-heart-o"></i>
                <span>7</span>
              </a>
              <div className="comment__content">
                <div className="comment__author">
                  <div className="comment__author-info">
                    <img src="img/avatar.png" alt="" width="25" height="25" />
                    <span className="comment__author-name">
                      Kouyate Karim
                    </span>
                  </div>
                  <div className="comment__ago">
                    <i className="la la-clock-o"></i>
                    15h35min
                  </div>
                </div>
                <div className="comment__text">
                  <p>{answer.content}</p>
                </div>

               

                <button className="btn btn-success text-white text-right shadow-sm">
                  Best Answer
                </button>
              </div></> : ""}
            </div>
            
        
            

           
            <div className="mt-3">
              <textarea
                name="content"
                id=""
                cols="30"
                rows="3"
                className="form-control"
                placeholder="Ajouter un commentaire..."

                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-primary text-white text-right shadow-sm" onClick={() => addAnswer(questionId)}>
                  Commenter
                </button>
                {/* @error('message') <span className="text-danger error">{{ $message }}</span>@enderror */}
              </div>
            </div>

            </>
    )
}

export default Answer;