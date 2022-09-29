import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div className='text'>
                <h3 className='text-line'>Some essential question and answer</h3>
            </div>
            <div className='container'>
                {/* react relitive question  */}
                <div className='question'>
                    <h4>1. How does React work ?</h4>
                    <p>Ans :
                    ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.
                    It's important to note that ReactJS is not a JavaScript framework. That's because it's only responsible for rendering the components of an application's view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions </p>
                </div>
            

                <div className='question'>
                    <h4>2. what is difference between props and state in react?</h4>
                    <p>Ans : <b> State:</b> The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only. <br /> <b>props :</b> Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.</p>
                </div>

                <div className='question'>
                    <h4>3. What else can be done with useEffect without loading data in react?</h4>
                    <p>Ans : Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you're used to calling these operations “side effects” (or just “effects”), you've likely performed them in your components before.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;