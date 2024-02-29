import React from "react";
import AccordionBox from "./AccordionBox";

export default function Accordion() {
  const accordionData = [
    {
      id: 1,
      title: "Question 1",
      info: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. 1.",
    },
    {
      id: 2,
      title: "Question 2",
      info: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. 2.",
    },
    {
      id: 3,
      title: "Question 3",
      info: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. 3.",
    },
    {
      id: 4,
      title: "Question 4",
      info: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. 4.",
    },
    {
      id: 5,
      title: "Question 5",
      info: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. 5.",
    },
  ];
  return (
    <div className="component__container bg-blue_radial">
      <div className="container">
        <div className="bg-zinc-900 rounded-lg border shadow-xl">
          {accordionData.map((data, index) => {
            return <AccordionBox key={index} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}
