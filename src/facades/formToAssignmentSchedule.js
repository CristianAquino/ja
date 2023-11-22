import { useState } from "react";

const FormToAssignmentSchedule = () => {
  const [formHorario, setFormHorario] = useState({});
  const handleFormHorarioChange = (e) => {
    console.log(formHorario);
    setFormHorario({ ...formHorario, [e.target.name]: e.target.value });
  };
  const hours = [
    { text: "08:00 - 09:00" },
    { text: "09:00 - 10:00" },
    { text: "10:00 - 11:00" },
    { text: "11:00 - 12:00" },
    { text: "12:00 - 13:00" },
    { text: "13:00 - 14:00" },
    { text: "14:00 - 15:00" },
    { text: "15:00 - 16:00" },
    { text: "16:00 - 17:00" },
    { text: "17:00 - 18:00" },
    { text: "18:00 - 19:00" },
    { text: "19:00 - 20:00" },
    { text: "20:00 - 21:00" },
    { text: "21:00 - 22:00" },
  ];
  const days = ["Lunes", "Martes", "Jueves", "Viernes", "Sabado", "Domingo"];
  return (
    <form>
      <table>
        <tr>
          <th>Día</th>
          <th>Hora de inicio</th>
          <th>Hora de fin</th>
          <th>Tipo de clase</th>
        </tr>
        <tr>
          <td>
            <select name="diaTeoria" onChange={handleFormHorarioChange}>
              <option value={"invalid"}>-- Seleccione un día --</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </td>
          <td>
            <select name="inicioTeoria" onChange={handleFormHorarioChange}>
              <option value={"invalid"}>-- Seleccione hora de inicio --</option>
              {hours.map((hour) => (
                <option key={hour.text} value={hour.text}>
                  {hour.text}
                </option>
              ))}
            </select>
          </td>
          <td>
            <select name="finTeoria" onChange={handleFormHorarioChange}>
              <option value={"invalid"}>-- Seleccione hora de fin --</option>
              {hours.map((hour) => (
                <option key={hour.text} value={hour.text}>
                  {hour.text}
                </option>
              ))}
            </select>
          </td>
          <td>Teoría</td>
        </tr>
        <tr>
          <td>
            <select name="diaPractica" onChange={handleFormHorarioChange}>
              <option value={"invalid"}>-- Seleccione un día --</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </td>
          <td>
            <select name="inicioPractica" onChange={handleFormHorarioChange}>
              <option value={"invalid"}>-- Seleccione hora de inicio --</option>
              {hours.map((hour) => (
                <option key={hour.text} value={hour.text}>
                  {hour.text}
                </option>
              ))}
            </select>
          </td>
          <td>
            <select name="finPractica" onChange={handleFormHorarioChange}>
              <option value={"invalid"}>-- Seleccione hora de fin --</option>
              {hours.map((hour) => (
                <option key={hour.text} value={hour.text}>
                  {hour.text}
                </option>
              ))}
            </select>
          </td>
          <td>Práctica</td>
        </tr>
      </table>
    </form>
  );
};
export default FormToAssignmentSchedule;
