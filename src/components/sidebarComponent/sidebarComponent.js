import styles from "./sidebarStyles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../redux/userSlice";
import {
  BiSolidBook,
  BiSolidGroup,
  BiSolidHome,
  BiSolidSchool,
  BiSolidTimeFive,
  BiSolidUserCircle,
  BiWindow,
  BiCalendar,
} from "react-icons/bi";

export default function SideBar() {
  const userData = useSelector((state) => state.userData);
  const userRole = useSelector((state) => state.userData.role);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(clearUser());
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className={styles.sideBarContainer}>
      <div>
        <div className={styles.userContainer}>
          <BiSolidUserCircle style={{ fontSize: "50px" }} />
          <div className={styles.userInfo}>
            <h3>{userData.name}</h3>
            <p>Rol: {userRole}</p>
          </div>
        </div>

        <ul className={styles.navBar}>
          <li>
            <Link to={"/home"}>
              <BiSolidHome className={styles.navBarIcon} /> Inicio
            </Link>
          </li>

          {userRole === "Decanato" && (
            <li>
              <Link to={"/semester"}>
                <BiSolidBook className={styles.navBarIcon} /> Semestre
              </Link>
            </li>
          )}

          <li>
            <Link to={"/group"}>
              <BiSolidGroup className={styles.navBarIcon} /> Grupos
            </Link>
          </li>
          {/* new component for modal */}
          <li>
            <Link to={"/modal"}>
              <BiWindow className={styles.navBarIcon} /> Modals
            </Link>
          </li>
          <li>
            <Link to={"/asignaturas"}>
              <BiCalendar className={styles.navBarIcon} /> Asignaturas
            </Link>
          </li>

          {userRole === "Administrativo" && (
            <li>
              <Link to={"/classroom"}>
                <BiSolidSchool className={styles.navBarIcon} /> Aulas
              </Link>
            </li>
          )}

          <li>
            <Link to={"/schedule"}>
              <BiSolidTimeFive className={styles.navBarIcon} />
              Horarios
            </Link>
          </li>
        </ul>
      </div>

      <button type={"button"} onClick={handleLogOut} className={styles.logOut}>
        Cerrar Sesión
      </button>
    </div>
  );
}
