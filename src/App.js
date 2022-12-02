import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bookspredprops from "./Bookspredprops";
import Bookmapprops from "./Bookmapprops";
import { book } from "./Bookdata";
function App() {
  //   const url = "https://api.github.com/users";
  //   const [loading, setLoading] = useState(true);
  //   const [tours, setTours] = useState([]);
  //   const fetchTours = async () => {
  //     setLoading(false);
  //     const response = await axios.get(url);
  //     const tours = response.data;
  //     setTours(tours);
  //     console.log(tours);
  //   };
  //   useEffect(() => {
  //     fetchTours();
  //   }, []);
  //   if (loading) {
  //     return (
  //       <main>
  //         <Loading />
  //       </main>
  //     );
  //   }
  //   return (
  //     <main>
  //       <h2>Tours project setup</h2>
  // <h2></h2>
  //       <Tour tours={tours} />
  //     </main>
  // );

  return (
    <div className="container ">
      <div className="row mt-5 g-3">
        {book.map((book, index) => {
          return (
            <div className="col-lg-3 col-md-4 col-6">
              <Bookmapprops key={book.id} book={book} />;
            </div>
          );
        })}
        {/* example of using spread */}
        <h2>Example using spread operators and events</h2>
        {book.map((book, index) => {
          return (
            <div className="col-lg-3 col-md-4 col-6">
              <Bookspredprops key={book.id} {...book} />;
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
