import { useState } from "react";
import { quizQuestions } from "./quizQuestions";
import "./QuizStyle.css";

const GameQuizList = () => {
    const [showResults, setShowResults] = useState<boolean>(false);
    const [quizScore, setQuizScore] = useState<number>(0);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    const answerClicked = (isCorrect: boolean) => {
        if(isCorrect){
            setQuizScore(quizScore + 1);
        }

        if(currentQuestion + 1 < quizQuestions.length){
            setCurrentQuestion(currentQuestion + 1);
        }else{
            setShowResults(true);
        }
    }

    const restartQuiz = () => {
        setQuizScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    }

    return (
        <section className="quiz-section">

            <h2>The Game Quiz!</h2>
            <h4>Test you videogame knowledge</h4>
            
            {showResults ? (
                <div className="quiz-section__results">
                    <div className="quiz-section__results__border">
                    <h2>Results:</h2>
                    <h3>{quizScore} out of {quizQuestions.length} correct</h3>
                    </div>
                    <button onClick={restartQuiz} className="quiz-section__results-restart-btn">Restart</button>
                </div>
            ) : (
                <div className="quiz-section__question-card">
                    <h3>Question {currentQuestion+1} of {quizQuestions.length}</h3>
                    <h2 className="quiz-section__question-card-question">{quizQuestions[currentQuestion].question}</h2>

                    <div>
                        {quizQuestions[currentQuestion].answers.map((answers, i) => {
                            return (
                                <p onClick={() => answerClicked(answers.isCorrect)} key={`answer-${i}`} className="quiz-section__list-item">{answers.answer}</p>
                            );
                        })}
                    </div>
                </div>
            )}

        </section>
    )

}

export default GameQuizList;