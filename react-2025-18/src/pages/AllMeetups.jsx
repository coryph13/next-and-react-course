import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const formatResponseData = (data) => {
  let formattedData = [];
  for (let id in data) {
    data[id].id = id;
    formattedData.push(data[id]);
  }

  return formattedData;
};

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-5eb2e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoadedMeetups(formatResponseData(data));
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {/* {[<li>Item1</li>, <li>Item2</li>]} */}
      {<MeetupList meetups={loadedMeetups} />}
    </section>
  );
};

export default AllMeetupsPage;
