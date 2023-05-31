const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Routes will be added here

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// Sample array to store student data
let students = [];

// GET all students
app.get('/students', (req, res) => {
  res.json(students);
});

// GET a single student by ID
app.get('/students/:id', (req, res) => {
  const student = students.find((student) => student.id === req.params.id);

  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  res.json(student);
});

// POST a new student
app.post('/students', (req, res) => {
  const student = req.body;

  students.push(student);

  res.status(201).json(student);
});

// PUT (update) a student by ID
app.put('/students/:id', (req, res) => {
  const studentId = req.params.id;
  const updatedStudent = req.body;

  const index = students.findIndex((student) => student.id === studentId);

  if (index === -1) {
    return res.status(404).json({ error: 'Student not found' });
  }

  students[index] = updatedStudent;

  res.json(updatedStudent);
});

// DELETE a student by ID
app.delete('/students/:id', (req, res) => {
  const studentId = req.params.id;

  students = students.filter((student) => student.id !== studentId);

  res.sendStatus(204);
});
