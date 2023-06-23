import BcCrew from "./BcCrew";
import BinaryBots from "./BinaryBots";
import DefaultTeam from "./DefaultTeam";

export default function MainContainer({
  students,
  bccrew,
  binarybots,
  setBinarybots,
  setStudents,
  setBccrew,
  moveStudentToTeam,
}) {
  return (
    <>
      <BcCrew
        students={students}
        bccrew={bccrew}
        binarybots={binarybots}
        setBinarybots={setBinarybots}
        setStudents={setStudents}
        setBccrew={setBccrew}
        moveStudentToTeam={moveStudentToTeam}
      />
      <DefaultTeam
        students={students}
        bccrew={bccrew}
        binarybots={binarybots}
        setBinarybots={setBinarybots}
        setStudents={setStudents}
        setBccrew={setBccrew}
        moveStudentToTeam={moveStudentToTeam}
      />
      <BinaryBots
        students={students}
        bccrew={bccrew}
        binarybots={binarybots}
        setBinarybots={setBinarybots}
        setStudents={setStudents}
        setBccrew={setBccrew}
        moveStudentToTeam={moveStudentToTeam}
      />
    </>
  );
}
