const facts = [
  { label: "Capital", value: "Maseru" },
  { label: "Languages", value: "Sesotho and English" },
  { label: "Currency", value: "Loti (M), shared with the rand" },
  { label: "Known for", value: "Mountains, pony trekking, Basotho culture" },
];

function About() {
  return (
    <section className="section about">
      <h2>About Lesotho</h2>
      <p>
        Lesotho is a small mountain kingdom completely surrounded by South Africa. It is the
        only country in the world where every point sits above 1,000 metres, which is why
        people call it the Kingdom in the Sky. Visitors come for the high-altitude scenery,
        the winter snow, and the welcome of the Basotho people.
      </p>
      <dl className="facts">
        {facts.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default About;
