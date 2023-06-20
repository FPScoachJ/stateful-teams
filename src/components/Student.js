import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

export default function Student({
  student,
  students,
  setBinarybots,
  binarybots,
  moveStudentToTeam,
}) {
  return (
    <div className="studentCard">
      <h3>{student.name}</h3>
      <Avatar
        className="student-pic"
        src={student.img}
        alt=""
        sx={{ width: 130, height: 130 }}
      />
      <div>
        {/* {if this thing is true, do this code otherwise return null} */}
        {student?.team === "default" && (
          <>
            <Button
              name="bccrew"
              onClick={(e) => moveStudentToTeam(student, e.target.name)}
              variant="contained"
            >
              BC Crew
            </Button>

            <Button
              onClick={(e) => moveStudentToTeam(student, e.target.name)}
              color="success"
              variant="contained"
              name="binarybots"
            >
              Binary Bots
            </Button>
          </>
        )}
        {student?.team === "bccrew" && (
          <Button
            onClick={(e) => moveStudentToTeam(student, e.target.name)}
            name="binarybots"
            variant="contained"
          >
            Binary Bots
          </Button>
        )}
        {student?.team === "binarybots" && (
          <Button
            name="bccrew"
            variant="contained"
            onClick={(e) => moveStudentToTeam(student, e.target.name)}
          >
            BC Crew
          </Button>
        )}
      </div>
    </div>
  );
}
