import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Bangalore,Delhi,Mumbai,Kolkata"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hotel-booking-a35bb.appspot.com/o/chandan-chaurasia-fuLPFeAd17E-unsplash.jpg?alt=media&token=9e0ab71c-e7d4-4721-9e33-916024003be0"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bangalore</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hotel-booking-a35bb.appspot.com/o/abhidev-vaishnav-ivAvZfafjdk-unsplash.jpg?alt=media&token=a09be2fa-aaf3-4097-882a-e61b6ed30087"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hotel-booking-a35bb.appspot.com/o/parth-vyas-J4Ui2ch3oRU-unsplash.jpg?alt=media&token=2816550b-b94c-4a11-94b3-94930cdb60fc"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[2]} properties</h2>
            </div>
            
          </div>
          <div className="featuredItem">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hotel-booking-a35bb.appspot.com/o/abhishek-chakraborty-d2eVURGcqjc-unsplash.jpg?alt=media&token=b9de342c-6eab-40f7-b9f5-1012c37a9966"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kolkata</h1>
              <h2>{data[3]} properties</h2>
            </div>
            
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
