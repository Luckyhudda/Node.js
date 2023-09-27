const { json } = require("body-parser");
const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const students = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/students.json`, "utf-8")
);

// get method.......
app.get("/digikull/students", (req, res) => {
  res.status(200).json({
    status: "Success",
    result: students.length,
    data: {
      students,
    },
  });
});

// post method ..............

app.post("/digikull/students", (req, res) => {
  const newId = students.length + 1;
  console.log(req.body);
  const newStudent = Object.assign({ id: newId }, req.body);

  students.push(newStudent);

  fs.writeFile(
    `${__dirname}/dev-data/data/students.json`,
    JSON.stringify(students),
    () => {
      res.status(201).json({
        status: "Success",
        data: {
          student: newStudent,
        },
      });
    }
  );

  //   res.send('done')
});

///////// search a student by id ........
app.get("/digikull/students/:id", (req, res) => {
  const id = req.params.id * 1;

  if (id > students.length) {
    return res.status(404).json({
      status: "failed",
      message: "invalid id",
    });
  }
  const student = students.find((student) => student.id === id);

  res.status(200).json({
    status: "success",
    data: {
      student,
    },
  });
});

/// patch method to update data........
app.patch("/digikull/students/:id", (req, res) => {
  const id = req.params.id * 1;
  const student = students.find((ele) => ele.id === id);
  console.log(student);
  if (!student) {
    return res.status(404).json({
      status: "faild",
      message: "student not found",
    });
  }
  console.log(req.body);
  res.send(req.body);
});

//Delete a student from students List.........
app.delete("/digikull/students/:id", (req, res) => {
  const id = req.params.id * 1;
  const studentIndex = students.findIndex((el) => el.id === id);

  if (!studentIndex) {
    return res.status(404).json({
      status: "faild",
      message: "student does not exist",
    });
  }

  students.splice(studentIndex, 1);
  fs.writeFile(
    `${__dirname}/dev-data/data/students.json`,
    JSON.stringify(students),
    () => {
      res.status(204).json({
        status: "success",
        data: {
          student: null,
        },
      });
    }
  );
});

app.listen(8900);
