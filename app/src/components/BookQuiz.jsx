 import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

const BookQuiz = () => {
    const [answers, setAnswers] = useState({});
    const [userAnswers, setUserAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [submit, isSubmit] = useState(true);
    const questions = [
        {
            id: 1,
            text: "Who is the author of 'To Kill a Mockingbird'?",
            correctAnswer: 'a',
            options: [
                { id: 'a', text: 'Harper Lee' },
                { id: 'b', text: 'J.K. Rowling' },
                { id: 'c', text: 'Ernest Hemingway' },
                { id: 'd', text: 'Jane Austen' },
            ],
        },
        {
            id: 2,
            text: 'In which book does the character Holden Caulfield appear?',
            correctAnswer: 'a',
            options: [
                { id: 'a', text: 'The Catcher in the Rye' },
                { id: 'b', text: 'To Kill a Mockingbird' },
                { id: 'c', text: '1984' },
                { id: 'd', text: 'Pride and Prejudice' },
            ],
        },
        {
            id: 3,
            text: "What is the first book in J.K. Rowling's Harry Potter series?",
            correctAnswer: 'b',
            options: [
                { id: 'a', text: 'Harry Potter and the Chamber of Secrets' },
                { id: 'b', text: 'Harry Potter and the Sorcerer\'s Stone' },
                { id: 'c', text: 'Harry Potter and the Goblet of Fire' },
                { id: 'd', text: 'Harry Potter and the Order of the Phoenix' },
            ],
        },
        {
            id: 4,
            text: 'Who wrote the play "Romeo and Juliet"?',
            correctAnswer: 'b',
            options: [
                { id: 'a', text: 'Charles Dickens' },
                { id: 'b', text: 'William Shakespeare' },
                { id: 'c', text: 'Jane Austen' },
                { id: 'd', text: 'F. Scott Fitzgerald' },
            ],
        },
        {
            id: 5,
            text: 'What is the title of George Orwell\'s dystopian novel?',
            correctAnswer: 'b',
            options: [
                { id: 'a', text: 'Brave New World' },
                { id: 'b', text: '1984' },
                { id: 'c', text: 'The Great Gatsby' },
                { id: 'd', text: 'Animal Farm' },
            ],
        },
    ];

    const handleOptionChange = (questionId, optionId) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: optionId,
        }));
    };

    const submitQuiz = () => {
        setShowResult(true);
        isSubmit(false);

        // Store the user's selected answer
        setUserAnswers(answers);

        // Add logic to calculate and display results based on the answers
        console.log('User Answers:', userAnswers);
    };

    const renderResult = () => {
        return questions.map((question) => (
            <Card key={question.id} className="result">
                <Card.Body>
                    <Card.Title>{question.text}</Card.Title>
                    <Card.Text>
                        Your Answer: {userAnswers[question.id]}{' '}
                        {userAnswers[question.id] === question.correctAnswer ? '(Correct)' : '(Wrong)'}
                    </Card.Text>
                    <Card.Text>Correct Answer: {question.correctAnswer}</Card.Text>
                </Card.Body>
            </Card>
        ));
    };

    return (
        <Container className="book-quiz-container">
            {submit &&
                questions.map((question) => (
                    <Card key={question.id} className="question">
                        <Card.Body>
                            <Card.Title>{question.text}</Card.Title>
                            <Form>
                                {question.options.map((option) => (
                                    <Form.Check
                                        key={option.id}
                                        type="radio"
                                        id={`q${question.id}-${option.id}`}
                                        label={option.text}
                                        name={`q${question.id}`}
                                        value={option.id}
                                        onChange={() => handleOptionChange(question.id, option.id)}
                                    />
                                ))}
                            </Form>
                        </Card.Body>
                    </Card>
                ))}
            <br></br>

            {

                submit && <Button className="submit-button" onClick={submitQuiz}>
                    Submit
                </Button>
            }

            <br></br>
            {!submit && showResult && (
                <Container className="result-container">
                    <h2>Results</h2>
                    {renderResult()}
                </Container>
            )}
            <br></br>
            {

                !submit && <Button className="submit-button" onClick={() => { isSubmit(true) }}>
                    Do You Want to play again
                </Button>
            }
        </Container>
    );
};

export default BookQuiz;
