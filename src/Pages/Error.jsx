// ErrorPage.jsx
const ErrorPage = () => {
  const goBack = () => {
    history.goBack(); // This will go back to the previous page in the history
  };

  return (
    <div className=" text-center text-[25px] mt-[15%]">
      <h1>404 Not Found</h1>
      <p>{`Oops! The page you're looking for not founnd 🥺🥺🥺🥺 `}</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default ErrorPage;
