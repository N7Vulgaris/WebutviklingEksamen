import { useState } from "react";
import GameQuizList from "../components/quiz/GameQuizList";
import "../components/quiz/QuizStyle.css";

const FunPage = () => {

    const [showQuiz, setShowQuiz] = useState<boolean>(false);

    const startQuiz = () => {
        setShowQuiz(true);
    }

    return(
        <section>
            {showQuiz ? (
                <GameQuizList />
            ) : (
                <div>
                <button className="start-quiz-btn" onClick={startQuiz}>Start Quiz!</button>
            </div>
            )}
        </section>
    )
}

export default FunPage;