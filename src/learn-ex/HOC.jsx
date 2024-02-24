// // Higher Order Component that Contians the logic
// // to detect the hover.
// function withHover(WrappedComponent) {
//   return function (props) {
//     const [isHovered, setHovered] = useState(false);

//     function handleMouseEnter() {
//       setHovered(true);
//     }

//     function handleMouseLeave() {
//       setHovered(false);
//     }

//     return (
//       <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//         <WrappedComponent {...props} isHovered={isHovered} />
//       </div>
//     );
//   };
// }

// // Updated Text Component without the Hover Logic
// const TextComponent = ({ text, isHovered }) => {
//   return (
//     <>
//       <p style={{ backgroundColor: isHovered ? "blue" : "white" }}>{text}</p>
//     </>
//   );
// };

// // Updated Input Component without the Hover Logic
// const InputComponent = ({ type, isHovered }) => {
//   return (
//     <input
//       type={type}
//       style={{ backgroundColor: isHovered ? "blue" : "white" }}
//     />
//   );
// };

// // Creating components that contain hover logic using
// // Higher Order Component.
// const TextComponentWithHover = withHover(TextComponent);
// const InputComponentWithHover = withHover(InputComponent);

// // Using the Components in our App
// const App = () => {
//   return (
//     <div className="App">
//       <TextComponentWithHover
//         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//           commodo consequat."
//       />

//       <InputComponentWithHover type="text" />
//     </div>
//   );
// };

// export default App;

//   مثالی از هوک است. کاربرد آن این است که اگر دو یا چند کامپوننت ویژگی مشابهی داشتند، آن ها را در به عنوان ورودی به یک تابع یکتا پاس میدهیم و سپس آن ویژگی را در تابع یکتا جمع و جور میکنیم. در نهایت خروجی نهایی کامپوننتی ادغام شده با کامپوننت نهایی و ویژگی های ساخته شده درون تابع یکتاست. یعنی هر کامپوننتی که آن ویژگی را داشت ، به تابع یکتا پاس میدهیم تا آن ویژگی را رویش اعمال کند.

// import "./styles.css";
import { useState, useEffect } from "react";

function withDataFetch(WrappedComponent, fetchData) {
  return function (props) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchWrapper = async () => {
        try {
          const data = await fetchData(props);
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };
      fetchWrapper();
    }, [props]);

    return (
      <WrappedComponent
        {...props}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    );
  };
}

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

const PostComponent = ({ data, isLoading, error }) => {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export const PostComponentWithData = withDataFetch(PostComponent, fetchPosts);
