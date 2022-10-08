import React from 'react';
import './ReactQuestion.css'

const ReactQuestion = () => {
    return (
        <div>
            <div className='text'>
                <h3 className='question-title'>Some essential question and answer in Reactjs</h3>
            </div>
            <div className='container'>
                <div className='essential-question'>
                    <h4 className='fw-bold text-primary'>1. How does React work ?</h4>
                    <p className='fw-semibold '>Ans :
                        ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.
                        It's important to note that ReactJS is not a JavaScript framework. That's because it's only responsible for rendering the components of an application's view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions </p>
                </div>

                <div className='essential-question'>
                    <h4 className='fw-bold text-primary'>3. What else can be done with useEffect without loading data in react?</h4>
                    <p className='fw-semibold '>Ans :
                        <span>Running once on mount: fetch API data</span> <br />
                        <span>Running on state change: validating input field</span> <br />
                        <span>Running on state change: live filtering</span> <br />
                        <span>Running on state change: trigger animation on new array value</span> <br />
                        <span> Running on props change: update paragraph list on fetched API data update</span> <br />
                        <span>Running on props change: updating fetched API data to get BTC updated price</span>
                    </p>
                </div>

                <div className='essential-question'>
                    <h4 className='fw-bold text-primary'>2. what is difference between props and state in react?</h4>
                    <p className='fw-semibold '>Ans :<b>props :</b> Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable. <br />
                        <b> State:</b> The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>
                </div>

            </div>
        </div>
    );
};

export default ReactQuestion;
