import { useState, Fragment } from "react";
import { BiPlusCircle, BiSolidTrash } from "react-icons/bi";

export default function AsignatureComponent() {
  const [ciclo, setCiclo] = useState("");
  const [malla, setMalla] = useState("");
  const [asignaturas, setAsignaturas] = useState([
    {
      curso: "Programacion y computacion",
      horarios: [
        {
          seccion: "1",
          hora: "L-10:00-12:00",
        },
        {
          seccion: "2",
          hora: "L-10:00-12:00",
        },
        {
          seccion: "3",
          hora: "L-10:00-12:00",
        },
      ],
    },
    {
      curso: "Emprendimiento e innovacion",
      horarios: [
        {
          seccion: "1",
          hora: "L-10:00-12:00",
        },
        {
          seccion: "2",
          hora: "L-10:00-12:00",
        },
      ],
    },
  ]);

  const handleCicloChange = (e) => {
    setCiclo(e.target.value);
  };

  const handleMallaChange = (e) => {
    setMalla(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: "1rem",
      }}
    >
      <h1>Asignaturas</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <label>
          Ciclo:
          <select name="ciclo" onChange={handleCicloChange}>
            <option value="0">---Seleccione un ciclo--</option>
            <option value="1">I</option>
            <option value="2">II</option>
            <option value="3">III</option>
          </select>
        </label>
        <label>
          Malla:
          <select name="malla" onChange={handleMallaChange}>
            <option value="0">---Seleccione malla--</option>
            <option value="1">2015</option>
            <option value="2">2018</option>
          </select>
        </label>
      </div>
      <table style={{ width: "90%" }}>
        <thead>
          <tr>
            <th>Asignatura</th>
            <th>Seccion</th>
            <th>Horario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {asignaturas.map((asignatura) => (
          <Fragment>
            <tr>
              <td rowSpan={asignatura.horarios.length + 2}>
                {asignatura.curso}
              </td>
            </tr>
            {asignatura.horarios.map((horario) => (
              <tr>
                <td>{horario.seccion}</td>
                <td>{horario.hora}</td>
                <td>
                  <button>
                    <BiSolidTrash />
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={3}>
                <button>
                  Add new section <BiPlusCircle />
                </button>
              </td>
            </tr>
          </Fragment>
        ))}
        {/* {asignaturas.map((asignatura) => (
            <Fragment>
              <td>1</td>
              <td>L-10:00-12:00</td>
              <td>delete</td>
            </Fragment>
          ))} */}
      </table>
    </div>
  );
}
