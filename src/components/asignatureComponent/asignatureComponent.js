import { useState, useEffect, Fragment } from "react";
import { BiPlusCircle, BiSolidTrash } from "react-icons/bi";
import axios from "../../axios/axiosInstance";

export default function AsignatureComponent() {
  const [ciclo, setCiclo] = useState("");
  const [planArray, setPlanArray] = useState([]);
  const [coursesArray, setCoursesArray] = useState([]);
  const [schedulesArray, setSchedulesArray] = useState([]);
  const [groupSchedule, setGroupSchedule] = useState([]);
  const [selectedHours, setSelectedHours] = useState({
    indexes: [],
    labels: [],
  });
  const [groupData, setGroupData] = useState({
    planID: "invalid",
    semesterID: "invalid",
    courseID: "invalid",
    limit: "invalid",
    groupNumber: "0",
    groupSchedule: [],
  });

  const getCourses = async () => {
    const url = `/api/Course/Search?studyPlanId=${groupData.planID}&semester=${groupData.semesterID}`;

    try {
      const response = await axios.get(url);
      setCoursesArray(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGroupNumber = async (courseGetId) => {
    const url = `/api/Group/NextGroupNumber/${courseGetId}`;

    try {
      const response = await axios.get(url);
      setGroupData((prevState) => ({
        ...prevState,
        groupNumber: response.data,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const getPlans = async () => {
    try {
      const response = await axios.get("/api/StudyPlan/All");
      setPlanArray(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const clearScreen = () => {
    setGroupSchedule([]);
    setSchedulesArray([]);
    setSelectedHours([]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "courseID" && value !== "invalid") {
      getGroupNumber(value).then(() => {
        console.log("Grupo recibido...");
      });

      clearScreen();
    }

    if (name === "semesterID" || name === "planID") {
      getGroupNumber(value).then(() => {
        console.log("Grupo recibido...");
      });

      clearScreen();
      setGroupData((prevState) => ({
        ...prevState,
        courseID: "invalid",
        limit: 0,
        groupNumber: 0,
        groupSchedule: [],
      }));
    }
  };

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

  useEffect(() => {
    getPlans().then(() => {
      console.log("Planes recibidos...");
    });
  }, []);

  useEffect(() => {
    if (groupData.planID === "invalid" || groupData.semesterID === "invalid")
      return;
    getCourses().then(() => {
      console.log("Cursos obtenidos...");
    });
  }, [groupData.planID, groupData.semesterID]);

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
          Plan de Estudios:
          <select
            name={"planID"}
            onChange={handleChange}
            value={groupData.planID}
          >
            <option value={"invalid"}>-- Seleccione un plan --</option>
            {planArray.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.code}
              </option>
            ))}
          </select>
        </label>
        <label>
          Semestre:
          <select
            name={"semesterID"}
            onChange={handleChange}
            value={groupData.semesterID}
          >
            <option value={"invalid"}>-- Seleccione un ciclo --</option>
            <option value={1}>Ciclo I</option>
            <option value={2}>Ciclo II</option>
            <option value={3}>Ciclo III</option>
            <option value={4}>Ciclo IV</option>
            <option value={5}>Ciclo V</option>
            <option value={6}>Ciclo VI</option>
            <option value={7}>Ciclo VII</option>
            <option value={8}>Ciclo VIII</option>
            <option value={9}>Ciclo IX</option>
            <option value={10}>Ciclo X</option>
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
        {coursesArray.map((course) => (
          <tr key={course.id}>
            <td>{course.name}</td>
          </tr>
        ))}
        {/*asignaturas.map((asignatura) => (
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
        ))*/}
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
