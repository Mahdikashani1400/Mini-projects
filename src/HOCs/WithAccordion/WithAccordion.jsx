import React, { useState } from "react";
export default function WithAccordion(OrginalComponent) {
  const NewComponent = ({ data }) => {
    console.log(props);

    //  طبعا وقتی وید اکاردیون فراخوانی میشه، کد های داخلی نیو کامپوننت اجرا میشن و پراپس های داده شده به ارجینال کامپوننت ، پراپس های تابع نیو کامپوننت هستند.

    // در نیو کامپوننت هم یک سری کد ها که مربوط به استیت ها و توابع هستند نوشته میشود و در نهایت ارجینال کامپوننت ریترن میشه و پراپس ها و استیت های لازم به آن پاس داده میشود.

    const [showInfo, setShowInfo] = useState(false);
    const toggleShowInfoHandler = () => {
      setShowInfo((showInfo) => !showInfo);
    };
    return (
      <OrginalComponent
        data={data}
        showInfo={showInfo}
        toggleShowInfoHandler={toggleShowInfoHandler}
      />
    );
  };
  return NewComponent;
}
