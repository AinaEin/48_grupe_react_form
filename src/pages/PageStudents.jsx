import { useEffect, useState } from "react";
import { StudentList } from "../components/students/StudentList";
import { StudentsNoData } from "../components/students/StudentsNoData";

export function PageStudents() {
  const [count, setCount] = useState(0);
  const [studentData, setStudentData] = useState([]);
  const dataURL =
    'https://raw.githubusercontent.com/AinaEin/48_grupe_react_form/main/public/students.json';

  useEffect(() => {
    fetch(dataURL)
      .then((res) => res.json())
      .then((data) => setStudentData(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <h1 className="page-title">
        Students
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </h1>
      <p className="page-description">Students attending this class:</p>
      {studentData.length === 0 ? <StudentsNoData /> : <StudentList />}
    </>
  );
}
