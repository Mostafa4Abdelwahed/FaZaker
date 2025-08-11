function DisplayQuranText({ data, className="" }) {
  return (
    <p className={`leading-[4.5rem] text-center font-scheherazade text-xl lg:text-2xl xl:text-3xl ${className}`}>
      {data?.verses?.map((verse, index) => {
        return (
          <span key={index}>
            {verse.text} <span className="text-main">({verse.id})</span>{" "}
          </span>
        );
      })}
    </p>
  );
}

export default DisplayQuranText;
