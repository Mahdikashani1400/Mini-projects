import React, { Component } from "react";
import ProductBox from "./ProductBox";
import ProductData from "./ProductData";
import HeaderProducts from "../Header/Header";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ProductData,
      users: [
        {
          name: "ali",
          age: 34,
        },
        {
          name: "ahmad",
          age: 29,
        },
        {
          name: "reza",
          age: 58,
        },
      ],
    };
  }
  clickHandler() {
    // console.log(this);
    // this.setState({
    //   products: [
    //     {
    //       name: "کفش طبی زشت",
    //       size: 39,
    //       price: 670,
    //       count: 99,
    //       img: "shoe",
    //     },
    //     {
    //       name: "کفش ورزشی زشت",
    //       size: 0,
    //       price: 540,
    //       count: 56,
    //       img: "shoe-2",
    //     },
    //     {
    //       name: "کفش کودک زشت",
    //       size: "Xl",
    //       price: 672,
    //       count: 56,
    //       img: "shoe-3",
    //     },
    //     {
    //       name: "کفش پاشنه بلند زشت",
    //       size: 0,
    //       price: 125,
    //       count: 56,
    //       img: "shoe-2",
    //     },
    //   ],
    // });
  }
  render() {
    return (
      <div className="component__container bg-blue_radial pt-0 justify-start ">
        <div className="container">
          <div
            className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  gap-8 px-10 mt-32"
            // onClick={() => this.clickHandler()}
          >
            {this.state.products.map((product, index) => (
              <ProductBox {...product} key={index}></ProductBox>
            ))}
            {/* <ProductBox></ProductBox>
            <ProductBox></ProductBox>
            <ProductBox></ProductBox>
            <ProductBox></ProductBox> */}
          </div>
        </div>
      </div>
    );
  }
}
