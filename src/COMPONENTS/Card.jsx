import "./Card.css";
function Card({ alldata }) {
  console.log("==a=sdf=a=sdf=", alldata);
  console.log("name", alldata.name);
  return (
    <>
      <div className="card m-0 p-0 card-width  shadow-lg overflow-auto">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1733391830~exp=1733395430~hmac=b219cda1552414173273e6f809d3a2bfc979290e016c1696af40244e47701f4f&w=740"
          className="card-img-top card-img"
          alt="..."
        />
        <div className="card-body">
          <h5>
            {alldata.name}
            <span className="free">{alldata.category}</span>
          </h5>
          <p className="bold fs-6">{alldata.title}</p>
          <div className="dollar">
            <div className="bold">${alldata.price}</div>
            <div>
              <button
                className="buy"
                type="button"
                class="btn btn-outline-secondary"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
