import React from "react";
import { CChart } from "@coreui/react-chartjs";
const Profile = () => {
  return (
    <>
      <div className="container-insta w-[100%]">
        <section className="stats mt-4">
          <div
            className="stats__img-holder border-2 border-black"
            style={{
              backgroundImage: `url('https://avatars.githubusercontent.com/u/82640789?v=4')`,
            }}
          ></div>
          <div className="stats__data">
            <div className="stats__data__point">
              <div className="stats__data__point__value">6,126</div>
              <div className="stats__data__point__description">Posts</div>
            </div>
            <div className="stats__data__point">
              <div className="stats__data__point__value">317 M</div>
              <div className="stats__data__point__description">Investers</div>
            </div>
            <div className="stats__data__point">
              <div className="stats__data__point__value text-green-500">
                +225
              </div>
              <div className="stats__data__point__description">Growth</div>
            </div>
          </div>
        </section>
        <section className="description">
          <h2 className="decription__title">NikkuDev.eth</h2>
          <p>Bringing you closer to the people and things you love. ❤️</p>
        </section>
        <section className="actions">
          <button className="actions__btn actions__btn--active">
            Invest Amount
          </button>
          <button className="actions__btn">Message</button>
        </section>

        <div className="rounded-lg p-4 mt-10">
          <CChart
            type="line"
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ],
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "rgba(220, 220, 220, 0.2)",
                  borderColor: "rgba(220, 220, 220, 1)",
                  pointBackgroundColor: "rgba(220, 220, 220, 1)",
                  pointBorderColor: "#fff",
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                },
                {
                  label: "My Second dataset",
                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                  borderColor: "rgba(151, 187, 205, 1)",
                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                  pointBorderColor: "#fff",
                  data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: "#333333", // Dark grey for good contrast
                  },
                },
              },
              scales: {
                x: {
                  grid: {
                    color: "#CCCCCC", // Light grey for subtle gridlines
                  },
                  ticks: {
                    color: "#4A90E2", // Blue for clear visibility
                  },
                },
                y: {
                  grid: {
                    color: "#CCCCCC", // Light grey for subtle gridlines
                  },
                  ticks: {
                    color: "#D9534F", // Red for high contrast
                  },
                },
              },
            }}
            
          />
        </div>
        <section className="grid mt-10">
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1539108826694-1297410cdda9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1529690982439-df5e60eb5a3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1491056792553-4704d261e3ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1562138888-3d0a63b21dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1568641134257-ab85695f67e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1545385095-f5a14a9160d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1547462713-a208daf9d997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
          <a
            href=""
            className="grid__photo"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522586217274-9096ee38a805?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></a>
        </section>
      </div>
    </>
  );
};

export default Profile;
