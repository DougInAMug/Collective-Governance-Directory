import Papa from "papaparse";
import fs from "node:fs";

fs.readFile("static/CollectiveGovernanceDirectoryData.csv", "utf8", (err, data) => {
  if (err) throw err;
  const jsonString = JSON.stringify(Papa.parse(data, { header: true }));
  fs.writeFile("static/CollectiveGovernanceDirectoryData.json", jsonString, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
