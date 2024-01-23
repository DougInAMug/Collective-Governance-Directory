import Papa from "papaparse";
import fs from "node:fs";

fs.readFile(
  "static/CollectiveGovernanceDirectoryData.csv",
  "utf8",
  (err, data) => {
    if (err) throw err;
    const jsonString = JSON.stringify(
      Papa.parse(data, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
      })
    );
    fs.writeFile(
      "static/CollectiveGovernanceDirectoryData.json",
      jsonString,
      (err) => {
        if (err) throw err;
        console.log("JSON generated without error");
      }
    );
  }
);
