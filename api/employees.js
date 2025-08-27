import employees from "#db/employees";
import express from "express";
const router = express.Router();
export default router;

router.post("/", (req, res) => {
  if (req.body === undefined) {
    res.status(400).send("Request must have a body.");
  } else if (req.body.name === undefined || !req.body.name) {
    res.status(400).send("Employee must have a name.");
  } else {
    const id = employees.length + 1;
    const name = req.body.name;
    const obj = { id: id, name: name };
    res.status(201).send(obj);
  }
});
