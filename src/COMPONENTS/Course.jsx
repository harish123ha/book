import "./Course.css";
import { Link } from "react-router-dom";
import fullData from "../init";
import Card from "./Card";

function Course() {
  console.log(fullData);
  return (
    <>
      <div className="course-margin container-fluid">
        <div>
          <h1>
            We're delighted to have you <span>Here!:)</span>
          </h1>
        </div>
        <div className="mt-5">
          <p className="text-center ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus illo dolores, ex consectetur dolorem sed consequuntur
            delectus magnam temporibus exercitationem, porro inventore. Iure,
            laboriosam veritatis? Earum, omnis. Excepturi vel beatae alias
            asperiores voluptates dolore praesentium consequatur enim
            accusantium mollitia explicabo fugiat modi veniam perspiciatis
            dolorem nulla, dicta exercitationem quisquam magni repudiandae
            recusandae?
          </p>
        </div>
        <Link to="/" className="course-btn mb-5 mt-2">
          Back
        </Link>
        <div className="row container-fluid  main-card m-0 mb-5  ">
          {fullData.map((item) => (
            <Card alldata={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
