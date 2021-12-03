import './Form.css';
import {useState } from 'react';

const Form = ({setQuestions})=> {

    const [title, setTitle] = useState("");
    const [content, setContent]  = useState("");
    const [tag, setTag] = useState("");


    const addQuestion = () => {
        let question;
        let id = new Date().getTime();

        question = {
            id : id,
            title : title,
            content : content,
            category : tag,
            answers : [
                {
                    content : "",
                    bestAnswer : false,
                    
                }
            ],
        }

        setQuestions(question);




    }

    
    return (
        <div className="container mt-4 pb-4">
        <div className="col-md-12 col-lg-8 mx-auto">
            <div className="bg-white shadow-md p-4 row">
                <div className="col-12">
                    <h1 className="question__title mb-0">Poser une question</h1>
                    <span style={{color:"#5b6987"}}>
                        Vous rencontrez des problèmes? Notre communauté de développeurs est là pour vous aider!
                    </span>
                </div>
                <form  className="col-12 row" onSubmit={(e) => {e.preventDefault() }}>
               

                    <div className="col-12 form-group mt-4">
                        <label htmlFor="title" className="questions__form-label">Titre de la question</label>
                        <input type="text" className="form-control " id="title" name="title" onChange={(e) => setTitle(e.target.value)}/>
                       
            
                    </div>

                    <div className="col-12 form-group">
                        <label htmlFor="content" className="questions__form-label" >Contenu de la question</label>
                        <textarea name="content" id="content" cols="30" rows="10" className="form-control " onChange={(e) => setContent(e.target.value)} ></textarea>
                       
                    </div>

                    <div className="col-12 form-group">
                        <label htmlFor="content" className="questions__form-label">Technologies / Categories</label>
                        <select name="" id="" className="form-control"  onChange={(e) => setTag(e.target.value)}>
                            <option value="">Selectionner ...</option>
                            <option value="nodejs">Nodejs</option>
                            <option value="mongodb">Mongo</option>
                        </select>
                       
                    </div>

                    <div className="col-12 form-group">
                        <button type="submit" className="btn btn-primary d-block shadow-md w-100 btn-lg" onClick={addQuestion }>
                            Poser ma question <i className="la la-arrow-right"></i>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
    )
}

export default Form;