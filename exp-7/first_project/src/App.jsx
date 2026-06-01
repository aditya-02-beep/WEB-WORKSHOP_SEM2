import "./App.css"
import Student from "./Student";
function App() {
return (
<div id= "app">
<h1>Student Information</h1>
<div id= "items">
<Student
name = "Aditya Kumar"
course = "Computer Science"
marks = "85"/>
<Student
name = "Ajit Verma"
course = "Information Technology"
marks = "92"/>
<Student
name = "Anuj Gupta"
course = "Electronics"
marks = "78"/>
</div>
<footer>
    <p>Aditya Kumar||2503201000086||CSE-14</p>
</footer>
</div>
);
}
export default App;