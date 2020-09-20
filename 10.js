const fs = require("fs");

(pr = (filename = "package.json", encoding = "utf-8") =>
  new Promise((res, rej) =>
    fs.readFile(filename, encoding, (err, data) =>
      err ? rej("An error has occured" + err) : res(data)
    )
  ))().then((d) => console.log(d));

(async () => {
  const data = await fs.promises.readFile("package.json", "utf-8");

  console.log(data);
})();
