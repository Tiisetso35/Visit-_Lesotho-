const activities = [
  { name: "Pony trekking", text: "Ride Basotho ponies through villages and valleys." },
  { name: "Hiking", text: "Walk to waterfalls, caves and high plateaus." },
  { name: "Skiing", text: "Hit the slopes at Afriski in winter." },
  { name: "Abseiling", text: "Drop beside Maletsunyane Falls on a guided descent." },
  { name: "4x4 driving", text: "Climb Sani Pass on one of Africa's steepest roads." },
];

function PopularActivities() {
  return (
    <section className="section">
      <h2>Popular activities</h2>
      <ul className="activity-list">
        {activities.map((a) => (
          <li key={a.name}>
            <h3>{a.name}</h3>
            <p>{a.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PopularActivities;
