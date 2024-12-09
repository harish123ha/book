import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="container-fluid banner">
        <div className=" banner-left">
          <div>
            <h1>
              Hello, welcomes here to learn something
              <span>new everyday!!!</span>
            </h1>
            <p>
              This is a bookstore where you can find free and paid books of your
              interest. You can read fee books only just login on the website.
            </p>
            <form>
              <div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" EMAIL"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <button className="btn btn-dark btn-pink">Get Started</button>
            </form>
          </div>
        </div>
        <div className="banner-right ">
          <img src="https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1733327493~exp=1733331093~hmac=e0a2e0ec322ed8647c719a1a27e8ffb65e852e764ce9a60d4aa8762b48ccd435&w=740"></img>
        </div>
      </div>
    </>
  );
}

export default Banner;
