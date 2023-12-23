import React, { Component } from "react";
import "./quizApp.css";
export default class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQs: 1,
      questions: [
        {
          id: 1,
          questionContent: "What is the capital of France ?",
          answerOptions: ["Tehran", "Riaz", "Paris", "Landon"],
          realAnswer: "Paris",
          isAnswer: false,
        },
        {
          id: 2,

          questionContent: "Who is the author of To Kill a Mockingbird ?",
          answerOptions: [
            "J.K. Rowling",
            "Harper Lee",
            "George Orwell",
            "Charles Dickens",
          ],
          realAnswer: "Charles Dickens",
          isAnswer: false,
        },
        {
          id: 3,

          questionContent: "What is the largest planet in the solar system ?",
          answerOptions: ["Earth", "Mars", "Jupiter", "Venus"],
          realAnswer: "Jupiter",
          isAnswer: false,
        },
        {
          id: 4,

          questionContent: "Which of the following is not a primary color ?",
          answerOptions: ["Red", "Yellow", "Green", "Blue"],
          realAnswer: "Green",
          isAnswer: false,
        },
        {
          id: 5,

          questionContent: "What is the chemical symbol for gold ?",
          answerOptions: ["Au", "Ag", "Pt", "Hg"],
          realAnswer: "Au",
          isAnswer: false,
        },
        {
          id: 6,

          questionContent: "Who painted the Mona Lisa ?",
          answerOptions: [
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Pablo Picasso",
            "Michelangelo",
          ],
          realAnswer: "Leonardo da Vinci",
          isAnswer: false,
        },
        {
          id: 7,

          questionContent: "What is the powerhouse of the cell ?",
          answerOptions: [
            "Nucleus",
            "Mitochondria",
            "Ribosome",
            "Endoplasmic reticulum",
          ],
          realAnswer: "Endoplasmic reticulum",
          isAnswer: false,
        },
        {
          id: 8,

          questionContent:
            "Which of the following is a renewable source of energy ?",
          answerOptions: ["Coal", "Solar", "Natural Gas", "Nuclear"],
          realAnswer: "Solar",
          isAnswer: false,
        },
      ],
      score: 0,
      userAnswer: "",
      isSub: false,
    };
    this.selectOpt = this.selectOpt.bind(this);
  }
  selectOpt(e) {
    this.setState({
      userAnswer: e.nativeEvent.target.value,
    });
  }
  subHandler(e) {
    e.preventDefault();
    !this.state.isSub &&
      this.state.userAnswer &&
      this.setState((prevState) => {
        if (
          prevState.userAnswer.trim() ===
          prevState.questions[prevState.currentQs - 1].realAnswer.trim()
        ) {
          prevState.questions[prevState.currentQs - 1].isAnswer = true;
          return {
            questions: prevState.questions,
            score: prevState.score + 1,
            isSub: true,
          };
        } else {
          prevState.questions[prevState.currentQs - 1].isAnswer = false;

          return { questions: prevState.questions, isSub: true };
        }
      });
  }
  nextQs(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        isSub: false,
        userAnswer: "",
        currentQs: ++prevState.currentQs,
      };
    });
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="bg-slate-900 md:w-[400px] w-full  mx-auto rounded-2xl shadow-xl">
            <div className="content md:py-10 md:px-8 px-4 py-5 text-left text-white">
              <h1 className="text-xl font-semibold font-sans leading-tight tracking-wide mb-4">
                {`Question ${this.state.currentQs}`}
                <span className="text-lg text-gray-600 ">{`/${this.state.questions.length}`}</span>
              </h1>
              <ul className="flex gap-1.5 child:grow mb-10">
                {this.state.questions.map((item, index) => (
                  <li
                    key={item.id}
                    className={`h-0.5 ${
                      index + 1 == this.state.currentQs
                        ? !this.state.isSub
                          ? "bg-white"
                          : (this.state.questions[index].isAnswer &&
                              "bg-green-600") ||
                            "bg-red-600"
                        : this.state.currentQs < index + 1
                        ? "bg-gray-600"
                        : (this.state.questions[index].isAnswer &&
                            "bg-green-600") ||
                          "bg-red-600"
                    }`}
                  ></li>
                ))}
              </ul>
              <div className="">
                <h1
                  className={`font-semibold text-2xl ${
                    this.state.isSub &&
                    this.state.currentQs == this.state.questions.length
                      ? "block"
                      : "hidden"
                  }`}
                >{`your score is ${
                  this.state.score + "/" + this.state.currentQs
                }`}</h1>
              </div>
              <div
                className={`questions ${
                  this.state.isSub &&
                  this.state.currentQs == this.state.questions.length
                    ? "hidden"
                    : ""
                }`}
              >
                <div className="">
                  <p className="text-base  font-medium mb-10">
                    {
                      this.state.questions[this.state.currentQs - 1]
                        .questionContent
                    }
                  </p>
                  <div className=" flex flex-col gap-5">
                    {this.state.questions[
                      this.state.currentQs - 1
                    ].answerOptions.map((opt, index) => (
                      <div key={index++} className="option">
                        <p>{opt}</p>
                        {(this.state.isSub && (
                          <input
                            type="radio"
                            name="question"
                            className={` ${
                              this.state.userAnswer === opt
                                ? (this.state.questions[
                                    this.state.currentQs - 1
                                  ].isAnswer &&
                                    "border-green-600 border-2") ||
                                  "border-red-600 border-2"
                                : ""
                            }`}
                            id=""
                            value={opt}
                            disabled
                          />
                        )) || (
                          <input
                            type="radio"
                            name="question"
                            className={
                              this.state.userAnswer ? "currentAnswer" : ""
                            }
                            id=""
                            value={opt}
                            onClick={this.selectOpt}
                          />
                        )}

                        <div
                          className={`check__container ${
                            this.state.userAnswer ? "checked" : ""
                          }`}
                        >
                          <svg className="absolute w-3 h-3 top-[3px] left-[3.5px] hidden">
                            <use href="#check"></use>
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center mt-14">
                  {(this.state.isSub &&
                    this.state.currentQs != this.state.questions.length && (
                      <a
                        href="#"
                        className=" px-12 py-3 bg-sky-400/90 mx-auto transition-all rounded-lg hover:bg-sky-600"
                        onClick={(e) => this.nextQs(e)}
                      >
                        سوال بعدی
                      </a>
                    )) || (
                    <a
                      href="#"
                      className=" px-12 py-3 bg-sky-400/90 mx-auto transition-all rounded-lg hover:bg-sky-600"
                      onClick={(e) => this.subHandler(e)}
                    >
                      تایید
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
