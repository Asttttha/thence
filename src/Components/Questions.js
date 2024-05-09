import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import "../Styles/questions.css";
import ask from '../Assets/ask.png';

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='questionItem'>
      <div className='questionHeader' onClick={toggleAnswer}>
        <p className='questionText'>{question}</p>
        <div className='toggleIcon' onClick={toggleAnswer}>
          <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
        </div>
      </div>
      {isOpen && <p className='answerText'>{answer}</p>}
    </div>
  );
};

const Questions = () => {
  const faqs = [
    { question: "Do you offer freelancers?", answer: "Answer 1" },
    { question: "What’s the guarantee that I will be satisfied with the hired talent?", answer: "Answer 2" },
    { question: "Can I hire multiple talents at once?", answer: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution." },
    { question: "Why should I not go to an agency directly?", answer: "Answer 4" },
    { question: "Who can help me pick a right skillset and duration for me?", answer: "Answer 4" },
  ];

  return (
    <div className='questions'>
      <div className='ask'>
        <div className='askp'>
          <p className='what'>What's on your mind</p>
          <p className='que'>Ask Questions</p>
        </div>
        <img src={ask} className='askImg' alt='ask' />
      </div>
      <div className='answers'>
        {faqs.map((faq, index) => (
          <Question key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
