import React from "react";
import Card from "./Card";
import fullData from "../init";

export default function FreeBook() {
  const List = fullData.filter((data) => data.category === "Free");
  console.log("Thiis is name", List[0].name);

  return (
    <>
      <div className="container-fluid my-4 ms-2">
        <h2 className="fs-2">Free Offered Courses </h2>
        <p className="fs-5">
          Here are some free books which you can read for free. If you wnat to
          see more books or cources just go to the Course section.
        </p>
      </div>

      {/* rendering start here */}

      <div className="row container-fluid  main-card m-0 mb-5  ">
        {List.map((item) => (
          <Card alldata={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
