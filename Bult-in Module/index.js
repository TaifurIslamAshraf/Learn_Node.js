const fs = require("fs");

fs.writeFile("demo.txt", "My name is Taifur", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("writeFile success");
  }
});

fs.appendFile("demo.txt", " .My age 22", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("appendFile success");
  }
});

fs.readFile("demo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.rename("demo.txt", "demo1.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("rename file succsee");
  }
});

fs.writeFile("demo2.txt", "This is file two", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("write file 2 success");
  }
});

fs.unlink("demo2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("demo2 file delete success");
  }
});

fs.exists("demo1.txt", (result) => {
  if (result) {
    console.log("Found");
  } else {
    console.log("exists fs not success");
  }
});
