function Options({ options }) {
  return (
    <div className="options">
      {options.map((option) => {
        return (
          <button className="btn btn-option" key={option}>
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
