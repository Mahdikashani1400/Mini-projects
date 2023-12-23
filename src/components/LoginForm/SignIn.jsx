import React from "react";
import Message from "./Message";
export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.targetValueLength = null;
    this.targetTitle = null;
    // this.subHandler = this.subHandler.bind(this);
    this.state = {
      lastName: {
        id: "lastName",
        lable: "Last Name",
        value: "",
        Msg: "",
        kind: "",
      },
      userName: {
        id: "userName",
        lable: "User Name",
        value: "",
        Msg: "",
        kind: "",
      },
      email: {
        id: "email",
        lable: "Email",
        value: "",
        Msg: "",
        kind: "",
      },
      password: {
        id: "password",
        lable: "Password",
        value: "",
        Msg: "",
        kind: "",
      },
      isSubmited: -1,
    };
  }
  keywordHandler(e) {
    this.targetValueLength = e.target.value.length;
    this.targetTitle = e.target.placeholder;
    this.setState({
      [e.target.id]: {
        id: e.target.id,
        value: e.target.value,
        lable: this.targetTitle,
        Msg:
          this.targetValueLength < 8
            ? `${this.targetTitle} must be more than 8 char.`
            : `${this.targetTitle} is acceptable.`,
        kind: this.targetValueLength < 8 ? "error" : "success",
      },
    });
  }
  subHandler(e) {
    e.preventDefault();
    this.state.userName.kind === "success" &&
    this.state.lastName.kind === "success" &&
    this.state.email.kind === "success" &&
    this.state.password.kind === "success"
      ? this.setState({
          isSubmited: 1,
        })
      : this.setState({
          isSubmited: 0,
        });
    setTimeout(() => {
      this.setState({ isSubmited: -1 });
    }, 1000);
  }

  render() {
    console.log(this.state.isSubmited);
    return (
      <div className="">
        <form action="" onSubmit={(event) => this.subHandler(event)}>
          <div className="text-white font-semibold mb-6 w-fit">
            <h6 className="lg:text-2xl text-lg ">Your logo</h6>
            <a href="#" className="">
              <h3 className="mt-3 lg:text-4xl text-2xl transition-all hover:text-sky-300 $">
                Sign in
              </h3>
            </a>
          </div>
          {this.state.isSubmited !== -1 && (
            <div
              className={`bg-${
                this.state.isSubmited ? "green" : "red"
              }-600 w-full  text-white mb-6 text-center py-6 rounded-md text-lg font-semibold`}
            >
              <p>
                {(this.state.isSubmited && "Sign in is successfuly") ||
                  "has a wrong with you"}
              </p>
            </div>
          )}
          {/* {children} */}
          <div className="mb-10">
            <div className="input__container">
              <label htmlFor={this.state.lastName.id} className="">
                {this.state.lastName.lable}
              </label>
              <input
                type="text"
                id={this.state.lastName.id}
                className=""
                value={this.state.lastName.value}
                placeholder={this.state.lastName.lable}
                onChange={(event) => this.keywordHandler(event)}
              />
              {this.state.lastName.kind && (
                <Message
                  statement={(this.state.lastName.kind === "success" && 1) || 0}
                >
                  {this.state.lastName.Msg}
                </Message>
              )}
            </div>
            <div className="input__container">
              <label htmlFor={this.state.userName.id} className="">
                {this.state.userName.lable}
              </label>
              <input
                type="text"
                id={this.state.userName.id}
                className=""
                value={this.state.userName.value}
                placeholder={this.state.userName.lable}
                onChange={(event) => this.keywordHandler(event)}
              />
              {this.state.userName.kind && (
                <Message
                  statement={(this.state.userName.kind === "success" && 1) || 0}
                >
                  {this.state.userName.Msg}
                </Message>
              )}
            </div>
            <div className="input__container">
              <label htmlFor={this.state.email.id} className="">
                {this.state.email.lable}
              </label>
              <input
                type="text"
                id={this.state.email.id}
                className=""
                value={this.state.email.value}
                placeholder={this.state.email.lable}
                onChange={(event) => this.keywordHandler(event)}
              />
              {this.state.email.kind && (
                <Message
                  statement={(this.state.email.kind === "success" && 1) || 0}
                >
                  {this.state.email.Msg}
                </Message>
              )}
            </div>
            <div className="input__container">
              <label htmlFor={this.state.password.id} className="">
                {this.state.password.lable}
              </label>
              <input
                type="text"
                id={this.state.password.id}
                className=""
                value={this.state.password.value}
                placeholder={this.state.password.lable}
                onChange={(event) => this.keywordHandler(event)}
              />
              {this.state.password.kind && (
                <Message
                  statement={(this.state.password.kind === "success" && 1) || 0}
                >
                  {this.state.password.Msg}
                </Message>
              )}
            </div>
          </div>
          <button className="bg-blue-950 py-3 mb-8 w-full rounded-[10px] text-white transition-all hover:bg-blue-950/85">
            Sign in
          </button>

          <div className="">
            <div className="text-center">
              <a href="#" className="text-white text-sm ">
                or continue with
              </a>
            </div>
            <div className="grid grid-cols-3 gap-2 lg:gap-6 mt-7">
              <a
                href="#"
                className="flex justify-center items-center bg-white py-2 rounded-[10px]"
              >
                <svg className="w-7 h-7">
                  <use href="#github"></use>
                </svg>
              </a>
              <a
                href="#"
                className="flex justify-center items-center bg-white py-2 rounded-[10px]"
              >
                <svg className="w-7 h-7">
                  <use href="#facebook"></use>
                </svg>
              </a>
              <a
                href="#"
                className="flex justify-center items-center bg-white py-2 rounded-[10px]"
              >
                <svg className="w-7 h-7">
                  <use href="#google"></use>
                </svg>
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
