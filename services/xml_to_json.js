
const axios = require('axios');
const xml2js = require('xml2js');
const fs=require("fs")

const xml_to_Json= async(xmlData)=> {
// Create a sample XML data

const parser = new xml2js.Parser();
parser.parseString(xmlData, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    const jsonData = JSON.stringify(result, null, 2);
    console.log(jsonData,"jdasd");

    // Write the JSON data to a file
    fs.writeFileSync('output.json', jsonData);
    console.log('JSON data has been written to output.json');
  }
});

  

    axios.post("https://graph.facebook.com/v17.0/107342319046752/messages",headers,body)
  
      .then((res) => {
        console.log("Message has Sent", res);
      })
      .catch((error) => {
        console.log(("error occurring", error));
      })
  } 

  module.exports=xml_to_Json