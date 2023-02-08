function SearchBar(props) {
  return (
    <div className="row mt-5">
      <form onSubmit={props.handleSubmit}>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="City"
            value={props.inputCity}
            onChange={props.setCity}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type={"submit"}>
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
