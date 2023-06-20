import "./App.css";
import MainContainer from "./components/MainContainer";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import dustin from "./assets/dustin.png";
import daniel from "./assets/daniel.jpeg";
import max from "./assets/max.jpg";
import justin from "./assets/justin.png";

function App() {
  const studentData = [
    { name: "dustin", img: dustin },
    { name: "daniel", img: daniel },
    { name: "max", img: max },
    { name: "justin", img: justin },
  ];
  const addTeams = studentData.map((student) => ({
    ...student,
    team: "default",
  }));
  const [students, setStudents] = useState(addTeams);
  const [binarybots, setBinarybots] = useState([]);
  const [bccrew, setBccrew] = useState([]);

  const moveStudentToTeam = (student, teamName) => {
    if (teamName === "binarybots") {
      setBinarybots([...binarybots, { ...student, team: "binarybots" }]);
      setBccrew((state) => state.filter((e) => e.name !== student.name));
      setStudents((state) => state.filter((e) => e.name !== student.name));
    } else {
      setBccrew([...bccrew, { ...student, team: "bccrew" }]);
      setBinarybots((state) => state.filter((e) => e.name !== student.name));
      setStudents((state) => state.filter((e) => e.name !== student.name));
    }
  };

  const reset = () => {
    setBinarybots([]);
    setBccrew([]);
    setStudents(addTeams);
  };

  return (
    <div className="topcontainer">
      <h1>Student Team React Challenge</h1>
      <button className="button-24" onClick={reset}>
        Reset
      </button>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <div className="App">
        <MainContainer
          students={students}
          binarybots={binarybots}
          setBinarybots={setBinarybots}
          bccrew={bccrew}
          setStudents={setStudents}
          setBccrew={setBccrew}
          moveStudentToTeam={moveStudentToTeam}
        />
      </div>
    </div>
  );
}

export default App;
