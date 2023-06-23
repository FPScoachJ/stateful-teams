import React from "react";
import Student from "../components/Student";

export default function BcCrew({ bccrew, moveStudentToTeam, students }) {
  return (
    <div className="bc-crew">
      <h1>BC Crew</h1>
      {bccrew?.map((student) => (
        <Student
          student={student}
          moveStudentToTeam={moveStudentToTeam}
          students={students}
        />
      ))}
    </div>
  );
}
