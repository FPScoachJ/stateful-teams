import React from "react";
import Student from "../components/Student";
export default function BinaryBots({
  binarybots,
  setStudents,
  setBccrew,
  moveStudentToTeam,
  students,
}) {
  return (
    <div className="binarybots">
      <h1>Binary Bots</h1>
      {binarybots?.map((student) => (
        <Student
          student={student}
          students={students}
          moveStudentToTeam={moveStudentToTeam}
        />
      ))}
    </div>
  );
}
