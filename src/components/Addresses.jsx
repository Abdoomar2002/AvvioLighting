function Addresses() {
  return (
    <div
      className="justify-content-center d-flex align-items-between"
      style={{ backgroundColor: "#eee" }}
    >
      <br />
      <style>{`.addr{margin-bottom:10%;}`}</style>
      <div
        className="justify-content-center d-flex align-items-between"
        id="location"
      >
        <section
          className="d-flex h-100"
          style={{
            flexWrap: "wrap",
            alignContent: "space-between",
            flexDirection: "column",
          }}
        >
          <br />
          <div className="addr">
            <h4>Head Office</h4>
            <p>4025 Debrecen, Simonffy Utca 4-6, Hungary</p>
            <br />
          </div>
          <div className="addr">
            <h4>Middel East Office</h4>
            <p>SPD Freezone area , sharjah , united Arab Emirates</p>

            <br />
          </div>
          <div className="addr">
            <h4>North America Office</h4>
            <p>5564 cosmic crescent, Mississauga, Ontario, L4Z3S1, Canada</p>
            <br />
          </div>
          <div>
            <h4>Contact Email</h4>
            <p>sales@avviolighting.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Addresses;
