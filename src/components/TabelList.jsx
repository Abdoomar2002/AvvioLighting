import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function TableList(props) {
  const [tabelData, setTabelData] = useState([]);
  let tabel = [];
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log(Object.entries(props.tabel));
    tabel = Object.entries(props.tabel).filter((e, index) => e[1].length > 0);
    // console.log(tabel);
    let num =
      props.tabel.Wattage.length == 0
        ? props.tabel.Lumen.length
        : props.tabel.Wattage.length;
    setCount(num);
    // console.log(props.tabel.Wattage.length);
    setTabelData(tabel);
  }, []);
  function handleMouseEnter(e) {
    let side = e.target.classList[0];
    console.log(side);
    let other = document.getElementsByClassName("Wattage");
    let origin = document.getElementsByClassName("Lumen");
    if (other.length == 0 || origin.length == 0) return;
    if (origin.length != other.length) return;
    if (side == "Lumen") {
      let index = Object.entries(origin).filter((elem) => {
        return elem[1] == e.target;
      });
      index = index[0][0];

      let wattage = Object.entries(other)[index][1];
      e.target.classList.add("thover");
      wattage.classList.add("thover");
    } else {
      let index = Object.entries(other).filter((elem) => {
        return elem[1] == e.target;
      });
      index = index[0][0];

      let wattage = Object.entries(origin)[index][1];
      e.target.classList.add("thover");
      wattage.classList.add("thover");
    }
  }
  function handleMouseLeave(e) {
    let side = e.target.classList[0];
    let other = document.getElementsByClassName("Wattage");
    let origin = document.getElementsByClassName("Lumen");
    if (other.length == 0 || origin.length == 0) return;
    if (origin.length != other.length) return;
    if (side == "Lumen") {
      let index = Object.entries(origin).filter((elem) => {
        return elem[1] == e.target;
      });
      index = index[0][0];

      let wattage = Object.entries(other)[index][1];
      e.target.classList.remove("thover");
      wattage.classList.remove("thover");
    } else {
      let index = Object.entries(other).filter((elem) => {
        return elem[1] == e.target;
      });
      index = index[0][0];

      let wattage = Object.entries(origin)[index][1];
      e.target.classList.remove("thover");
      wattage.classList.remove("thover");
    }
  }
  function flex() {
    function handleFlexEnter(e) {
      let r = document.getElementsByClassName("Lumen Flex");
      let counter = r[0].parentElement.childElementCount;
      //counter--;
      let i = 0;
      for (i; i < r.length; i++) if (r[i] == e.target) break;
      let j = i >= counter ? (i % counter == 7 ? 0 : i % counter) : i;
      let CCT = document.getElementsByClassName("CCT");
      let CRI = document.getElementsByClassName("CRI");
      // console.log(CCT, CRI);
      if (CCT.length && CCT.length == counter) CCT[j].classList.add("thover");
      if (CRI.length && CRI.length == counter) CRI[j].classList.add("thover");
      for (j; j < r.length; j += counter) {
        //   console.log(CCT.length, counter, CRI.length);
        r[j].classList.add("thover");
      }
    }
    function handleFlexLeave(e) {
      let r = document.getElementsByClassName("Lumen Flex");
      let counter = r[0].parentElement.childElementCount;
      //counter--;
      let i = 0;
      for (i; i < r.length; i++) if (r[i] == e.target) break;
      let j = i >= counter ? (i % counter == 7 ? 0 : i % counter) : i;
      let CCT = document.getElementsByClassName("CCT");
      let CRI = document.getElementsByClassName("CRI");
      if (CCT.length && CCT.length == counter)
        CCT[j].classList.remove("thover");
      if (CRI.length && CCT.length == counter)
        CRI[j].classList.remove("thover");
      for (j; j < r.length; j += counter) {
        r[j].classList.remove("thover");
      }
    }
    return (
      <table width={"100%"} style={{ maxWidth: "100%" }}>
        <thead>
          <tr className="tab">
            <th
              style={{
                textAlign: "center",
                backgroundColor: "#212529",
                color: "#f6f6f6",
                border: " 2px #ddd solid",
                fontWeight: "500",
              }}
            >
              Model
            </th>
            {tabelData &&
              tabelData.map((e, index) => {
                if (e[0] == "Wattage") {
                  //  console.log(1);
                  return e[1].map((elem) => {
                    return (
                      <th
                        style={{
                          textAlign: "center",
                          backgroundColor: "#212529",
                          color: "#f6f6f6",
                          border: " 2px #ddd solid",
                          fontWeight: "500",
                        }}
                      >
                        {elem}
                        <br />
                        lm / m
                      </th>
                    );
                  });
                } else if (e[0] == "Lumen Flex") return;
                return (
                  <th
                    style={{
                      textAlign: "center",
                      backgroundColor: "#212529",
                      color: "#f6f6f6",
                      border: " 2px #ddd solid",
                      fontWeight: "500",
                    }}
                    key={index}
                  >
                    {e[0]}
                  </th>
                );
              })}
          </tr>
        </thead>

        <tbody>
          <tr className="tab">
            <td
              style={{ textAlign: "center", border: " 2px #ddd solid" }}
              rowSpan={1}
            >
              <b>{props.Model}</b>
            </td>
            {tabelData &&
              tabelData.map((e, index) => {
                if (e[0] == "Wattage") return;
                else if (e[0] == "Lumen Flex")
                  return e[1].map((elem, i) => {
                    return (
                      <td
                        className="flex"
                        key={i}
                        style={{
                          textAlign: "center",
                          border: " 2px #ddd solid",
                        }}
                      >
                        {elem.map((element, ind) => {
                          return (
                            <p
                              className={e[0]}
                              //  onMouseEnter={handleFlexEnter}
                              // onMouseLeave={handleFlexLeave}
                              style={{
                                display: "block",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                padding: "10px",
                                justifyContent: "center",
                                height: 80 / count + "%",
                                marginBottom: "0",
                                borderBottom:
                                  elem.length - 1 != ind
                                    ? "2px solid #ddd"
                                    : "",
                              }}
                              key={ind}
                            >
                              {element}
                            </p>
                          );
                        })}
                      </td>
                    );
                  });
                else {
                  return (
                    <td
                      key={index}
                      style={{
                        textAlign: "center",
                        border: " 2px #ddd solid",
                      }}
                      id={"table" + index}
                    >
                      {e[0] != "Efficacy" &&
                      e[0] != "IK Rating" &&
                      e[0] != "Dimensions" &&
                      e[0] != "LED Chip" &&
                      e[0] != "Bending" &&
                      e[0] != "Lens Options" &&
                      e[0] != "Light Direction" &&
                      e[0] != "Beam Angle" &&
                      e[0] != "Body Color" &&
                      e[0] != "Control" &&
                      e[0] != "Dimming" &&
                      e[0] != "Emergency Efficacy" &&
                      e[0] != "Charge/Discharge Duration" &&
                      e[0] != "Viewing Distance" ? (
                        Object.entries(e[1]).map((elem, index) => {
                          if (
                            (e[0] == "Lumen" ||
                              e[0] == "Wattage" ||
                              e[0] == "CCT" ||
                              e[0] == "CRI") &&
                            Object.entries(e[1]).length - 1 != index
                          )
                            return (
                              <p
                                className={e[0]}
                                //  onMouseEnter={handleFlexEnter}
                                //onMouseLeave={handleFlexLeave}
                                style={{
                                  display: "block",
                                  position: "relative",
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "10px",
                                  justifyContent: "center",
                                  height: 80 / count + "%",
                                  marginBottom: "0",
                                  borderBottom: "2px solid #ddd",
                                }}
                                key={elem}
                              >
                                {elem[1]}
                              </p>
                            );
                          else if (
                            e[0] == "Lumen" ||
                            e[0] == "Wattage" ||
                            e[0] == "CCT" ||
                            e[0] == "CRI"
                          )
                            return (
                              <p
                                className={e[0]}
                                //onMouseEnter={handleFlexEnter}
                                //onMouseLeave={handleFlexLeave}
                                style={{
                                  display: "block",
                                  position: "relative",
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "10px",
                                  justifyContent: "center",
                                  height: 80 / count + "%",
                                  marginBottom: "0",
                                }}
                                key={elem}
                              >
                                {elem[1]}
                              </p>
                            );
                          else if (Object.entries(e[1]).length - 1 != index)
                            return (
                              <p key={elem} style={{}}>
                                {elem[1]}
                              </p>
                            );
                          else
                            return (
                              <p
                                className={e[0]}
                                style={{
                                  display: "block",
                                  position: "relative",
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "10px",
                                  justifyContent: "center",
                                  height: 80 / count + "%",
                                  marginBottom: "0",
                                }}
                                key={elem}
                              >
                                {elem[1]}
                              </p>
                            );
                        })
                      ) : (
                        <p className={e[0]}>{e[1]}</p>
                      )}
                    </td>
                  );
                }

                /*  <td
                        key={index}
                        style={
                          e != "Wattage" ||
                          e != "Lumen" ||
                          e != "CCT" ||
                          e != "CRI"
                            ? {
                                textAlign: "center",
                                border: " 2px #ddd solid",
                              }
                            : {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: " space-between",
                                borderCollapse: "separate",
                                borderSpacing: "5px",
                                padding: " 10px",
                              }
                        }
                        id={"table" + index}
                      >
                        {e[0] != "Efficacy" &&
                        e[0] != "IK Rating" &&
                        e[0] != "Dimensions" &&
                        e[0] != "LED Chip" &&
                        e[0] != "Bending" &&
                        e[0] != "Lens Options" &&
                        e[0] != "Light Direction" &&
                        e[0] != "Beam Angle" &&
                        e[0] != "Body Color" &&
                        e[0] != "Control" &&
                        e[0] != "Dimming" &&
                        e[0] != "Emergency Efficacy" &&
                        e[0] != "Charge/Discharge Duration" &&
                        e[0] != "Viewing Distance" ? (
                          Object.entries(e[1]).map((elem, index) => {
                            if (
                              (e[0] == "Lumen" ||
                                e[0] == "Wattage" ||
                                e == "CCT" ||
                                e == "CRI") &&
                              Object.entries(e[1]).length - 1 != index
                            )
                              return (
                                <p
                                  className={e[0]}
                                  onMouseEnter={handleMouseEnter}
                                  onMouseLeave={handleMouseLeave}
                                  style={{
                                    display: "block",
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "10px",
                                    justifyContent: "center",
                                    height: 80 / count + "%",
                                    marginBottom: "0",
                                    borderBottom: "2px solid #ddd",
                                  }}
                                  key={elem}
                                >
                                  {elem[1]}
                                </p>
                              );
                            else if (e[0] == "Lumen" || e[0] == "Wattage")
                              return (
                                <p
                                  className={e[0]}
                                  onMouseEnter={handleMouseEnter}
                                  onMouseLeave={handleMouseLeave}
                                  style={{
                                    display: "block",
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "10px",
                                    justifyContent: "center",
                                    height: 80 / count + "%",
                                    marginBottom: "0",
                                  }}
                                  key={elem}
                                >
                                  {elem[1]}
                                </p>
                              );
                            else if (Object.entries(e[1]).length - 1 != index)
                              return (
                                <p key={elem} style={{}}>
                                  {elem[1]}
                                </p>
                              );
                            else return <p key={elem}>{elem[1]}</p>;
                          })
                        ) : (
                          <p>{e[1]}</p>
                        )}
                      </td>*/
              })}
          </tr>
        </tbody>
      </table>
    );
  }
  let abc = document.getElementsByClassName("tab");
  // console.log(abc[0].childNodes);
  if (window.outerWidth < 800) {
    if (abc.length != 0) {
      Object.entries(abc[0].children)
        .slice(5)
        .map((l) => {
          l[1].style.display = "none";
        });
      Object.entries(abc[1].children)
        .slice(5)
        .map((l) => {
          l[1].style.display = "none";
        });
    }
  } else {
    //let abc = document.getElementsByClassName("tab");

    if (abc.length != 0) {
      Object.entries(abc[0].children)
        .slice(5)
        .map((l) => {
          l[1].style.display = "";
        });
      Object.entries(abc[1].children)
        .slice(5)
        .map((l) => {
          l[1].style.display = "";
        });
    }
  }
  window.onscroll = (e) => {
    let abc = document.getElementsByClassName("tab");
    // console.log(abc[0].childNodes);
    if (window.outerWidth < 800) {
      if (abc.length != 0) {
        Object.entries(abc[0].children)
          .slice(5)
          .map((l) => {
            l[1].style.display = "none";
          });
        Object.entries(abc[1].children)
          .slice(5)
          .map((l) => {
            l[1].style.display = "none";
          });
      }
    } else {
      //let abc = document.getElementsByClassName("tab");

      if (abc.length != 0) {
        Object.entries(abc[0].children)
          .slice(5)
          .map((l) => {
            l[1].style.display = "";
          });
        Object.entries(abc[1].children)
          .slice(5)
          .map((l) => {
            l[1].style.display = "";
          });
      }
    }
  };
  function opticStrip() {
    function handleEnter(e) {
      let pcb = document.getElementsByClassName("PCB");
      let wattage = document.getElementsByClassName("Wattage");
      let lumen = document.getElementsByClassName("Lumen");
      let led = document.getElementsByClassName("LEDs");
      let counter = document.getElementsByClassName(
        e.target.classList[0]
      ).length;
      let target = Array.prototype.indexOf.call(
        e.target.parentElement.children,
        e.target
      );
      let matchcount = 0;
      if (pcb.length == counter) matchcount++;
      if (led.length == counter) matchcount++;
      if (lumen.length == counter) matchcount++;
      if (wattage.length == counter) matchcount++;
      if (matchcount > 1) {
        if (pcb.length == counter) pcb[target].classList.add("thover");
        if (wattage.length == counter) wattage[target].classList.add("thover");
        if (lumen.length == counter) lumen[target].classList.add("thover");
        if (led.length == counter) led[target].classList.add("thover");
      }
    }
    function handleLeave(e) {
      let pcb = document.getElementsByClassName("PCB");
      let wattage = document.getElementsByClassName("Wattage");
      let lumen = document.getElementsByClassName("Lumen");
      let led = document.getElementsByClassName("LEDs");
      let counter = document.getElementsByClassName(
        e.target.classList[0]
      ).length;
      let target = Array.prototype.indexOf.call(
        e.target.parentElement.children,
        e.target
      );
      let matchcount = 0;
      if (pcb.length == counter) matchcount++;
      if (led.length == counter) matchcount++;
      if (lumen.length == counter) matchcount++;
      if (wattage.length == counter) matchcount++;
      if (matchcount > 1) {
        if (pcb.length == counter) pcb[target].classList.remove("thover");
        if (wattage.length == counter)
          wattage[target].classList.remove("thover");
        if (lumen.length == counter) lumen[target].classList.remove("thover");
        if (led.length == counter) led[target].classList.remove("thover");
      }
    }
    return (
      <table width={"100%"} style={{ maxWidth: "100vw" }}>
        {" "}
        <thead>
          <tr className="tab">
            <th
              style={{
                textAlign: "center",
                backgroundColor: "#212529",
                color: "#f6f6f6",
                border: " 2px #ddd solid",
                fontWeight: "500",
              }}
            >
              Model
            </th>
            {tabelData &&
              tabelData.map((e, index) => {
                return (
                  <th
                    style={{
                      textAlign: "center",
                      backgroundColor: "#212529",
                      color: "#f6f6f6",
                      border: " 2px #ddd solid",
                      fontWeight: "500",
                    }}
                    key={index}
                  >
                    {e[0]}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          <tr className="tab">
            <td
              style={{
                textAlign: "center",
                border: " 2px #ddd solid",
              }}
              rowSpan={1}
            >
              <b>{props.Model}</b>
            </td>
            {tabelData &&
              tabelData.map((e, index) => {
                return (
                  <td
                    key={index}
                    style={
                      e != "Wattage" || e != "Lumen"
                        ? {
                            textAlign: "center",
                            border: " 2px #ddd solid",
                          }
                        : {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: " space-between",
                            borderCollapse: "separate",
                            borderSpacing: "5px",
                            padding: " 10px",
                          }
                    }
                    id={"table" + index}
                  >
                    {e[0] != "Efficacy" &&
                    e[0] != "IK Rating" &&
                    e[0] != "Dimensions" &&
                    e[0] != "LED Chip" &&
                    e[0] != "Bending" &&
                    e[0] != "Lens Options" &&
                    e[0] != "Light Direction" &&
                    e[0] != "Beam Angle" &&
                    e[0] != "Body Color" &&
                    e[0] != "Control" &&
                    e[0] != "Dimming" &&
                    e[0] != "Emergency Efficacy" &&
                    e[0] != "Charge/Discharge Duration" &&
                    e[0] != "Viewing Distance" ? (
                      Object.entries(e[1]).map((elem, index) => {
                        if (
                          (e[0] == "Lumen" ||
                            e[0] == "Wattage" ||
                            e[0] == "LEDs" ||
                            e[0] == "PCB Width") &&
                          Object.entries(e[1]).length - 1 != index
                        )
                          return (
                            <p
                              className={e[0]}
                              onMouseEnter={handleEnter}
                              onMouseLeave={handleLeave}
                              style={{
                                display: "block",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                padding: "10px",
                                justifyContent: "center",
                                height: 80 / count + "%",
                                marginBottom: "0",
                                borderBottom: "2px solid #ddd",
                              }}
                              key={elem}
                            >
                              {elem[1]}
                            </p>
                          );
                        else if (
                          e[0] == "Lumen" ||
                          e[0] == "Wattage" ||
                          e[0] == "LEDs" ||
                          e[0] == "PCB Width"
                        )
                          return (
                            <p
                              className={e[0]}
                              onMouseEnter={handleEnter}
                              onMouseLeave={handleLeave}
                              style={{
                                display: "block",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                padding: "10px",
                                justifyContent: "center",
                                height: 80 / count + "%",
                                marginBottom: "0",
                              }}
                              key={elem}
                            >
                              {elem[1]}
                            </p>
                          );
                        else if (Object.entries(e[1]).length - 1 != index)
                          return (
                            <p key={elem} style={{}}>
                              {elem[1]}
                            </p>
                          );
                        else return <p key={elem}>{elem[1]}</p>;
                      })
                    ) : (
                      <p>{e[1]}</p>
                    )}
                  </td>
                );
              })}
          </tr>
        </tbody>
      </table>
    );
  }
  return (
    <Container>
      <h2>Products</h2>
      <br />
      <br />

      {!tabelData.toString().includes("Lumen Flex") ? (
        !(props.type == "Optic Flex" || props.type == "Strip Light") ? (
          <table width={"100%"} style={{ maxWidth: "100vw" }}>
            <thead>
              <tr className="tab">
                <th
                  style={{
                    textAlign: "center",
                    backgroundColor: "#212529",
                    color: "#f6f6f6",
                    border: " 2px #ddd solid",
                    fontWeight: "500",
                  }}
                >
                  Model
                </th>
                {tabelData &&
                  tabelData.map((e, index) => {
                    return (
                      <th
                        style={{
                          textAlign: "center",
                          backgroundColor: "#212529",
                          color: "#f6f6f6",
                          border: " 2px #ddd solid",
                          fontWeight: "500",
                        }}
                        key={index}
                      >
                        {e[0]}
                      </th>
                    );
                  })}
              </tr>
            </thead>

            <tbody>
              <tr className="tab">
                <td
                  style={{
                    textAlign: "center",
                    border: " 2px #ddd solid",
                  }}
                  rowSpan={1}
                >
                  <b>{props.Model}</b>
                </td>
                {tabelData &&
                  tabelData.map((e, index) => {
                    return (
                      <td
                        key={index}
                        style={
                          e != "Wattage" || e != "Lumen"
                            ? {
                                textAlign: "center",
                                border: " 2px #ddd solid",
                              }
                            : {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: " space-between",
                                borderCollapse: "separate",
                                borderSpacing: "5px",
                                padding: " 10px",
                              }
                        }
                        id={"table" + index}
                      >
                        {e[0] != "Efficacy" &&
                        e[0] != "IK Rating" &&
                        e[0] != "Dimensions" &&
                        e[0] != "LED Chip" &&
                        e[0] != "Bending" &&
                        e[0] != "Lens Options" &&
                        e[0] != "Light Direction" &&
                        e[0] != "Beam Angle" &&
                        e[0] != "Body Color" &&
                        e[0] != "Control" &&
                        e[0] != "Dimming" &&
                        e[0] != "Emergency Efficacy" &&
                        e[0] != "Charge/Discharge Duration" &&
                        e[0] != "Viewing Distance" ? (
                          Object.entries(e[1]).map((elem, index) => {
                            if (
                              (e[0] == "Lumen" || e[0] == "Wattage") &&
                              Object.entries(e[1]).length - 1 != index
                            )
                              return (
                                <p
                                  className={e[0]}
                                  onMouseEnter={handleMouseEnter}
                                  onMouseLeave={handleMouseLeave}
                                  style={{
                                    display: "block",
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "10px",
                                    justifyContent: "center",
                                    height: 80 / count + "%",
                                    marginBottom: "0",
                                    borderBottom: "2px solid #ddd",
                                  }}
                                  key={elem}
                                >
                                  {elem[1]}
                                </p>
                              );
                            else if (e[0] == "Lumen" || e[0] == "Wattage")
                              return (
                                <p
                                  className={e[0]}
                                  onMouseEnter={handleMouseEnter}
                                  onMouseLeave={handleMouseLeave}
                                  style={{
                                    display: "block",
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "10px",
                                    justifyContent: "center",
                                    height: 80 / count + "%",
                                    marginBottom: "0",
                                  }}
                                  key={elem}
                                >
                                  {elem[1]}
                                </p>
                              );
                            else if (Object.entries(e[1]).length - 1 != index)
                              return (
                                <p key={elem} style={{}}>
                                  {elem[1]}
                                </p>
                              );
                            else return <p key={elem}>{elem[1]}</p>;
                          })
                        ) : (
                          <p>{e[1]}</p>
                        )}
                      </td>
                    );
                  })}
              </tr>
            </tbody>
          </table>
        ) : (
          opticStrip()
        )
      ) : (
        flex()
      )}
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}
export default TableList;
