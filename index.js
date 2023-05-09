const db = require("./db");

(async () => {
  // insert/create
  //   await db("todo").insert({ task: "tesitng", name: "pero" });

  // update
  //   await db("todo")
  //     .where("id", "=", 1)
  //     .update({ task: "riki ti si najgolem car" });

  // read
  const values = await db("todo").select("task", "name");
  console.log(values);
})();
