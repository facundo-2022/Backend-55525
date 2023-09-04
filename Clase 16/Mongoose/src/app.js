const express = require("express");
const userRouter = require("./routes/users.router");
const { userModel } = require(".//models/user.model");
const mongoose = require("mongoose");
const { studentModel } = require("./models/student.model");
const { courseModel } = require("../src/models/course.model");

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Serving is running on port ${port}`);
});

app.use(express.json());
//Enlace de conexion con mongoose atlas
/*
mongoose
  .connect(
    "mongodb+srv://facundom:Amparo.23@cluster0.ko8l77a.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connect to the database");
  })
  .catch((error) => console.error("Error connecting to the database", error));
*/
const enviroment = async () => {
  await mongoose.connect(
    "mongodb+srv://facundom:Amparo.23@cluster0.ko8l77a.mongodb.net/?retryWrites=true&w=majority"
  );

  /*let response = await userModel.findOne().explain("executionStatus");
  console.log(response);*/
  await studentModel.create({
    first_name: "Franco",
    last_name: "Garay",
    email: "franco@garay.com",
    gender: "male",
  });

  await courseModel.create({
    title: "Curso de Backend",
    description: "El ultimo de fullStack",
    difficulty: 7,
    topics: ["fs", "handlebars", "Express", "websockets"],
    professor: "El tio omar",
  });

  let student = await studentModel.findById({
    _id: "64f399bc346b8ae1da0a7345",
  });

  //student.courses.push({ course: "64f399bc346b8ae1da0a7348" });
  let result = await studentModel.updateOne(
    {
      _id: "64f399bc346b8ae1da0a7345",
    },
    student
  );

  console.log(JSON.stringify(student, null, "\t"));
};

enviroment();
//esto es lo que vamos a consumir de routes
app.use("/api/users", userRouter);
