
const axios = require('axios');
const xml2js = require('xml2js');
const fs=require("fs")

const xml_to_Json= async(xmlData)=> {
  return new Promise((res,rej)=>{
    const parser = new xml2js.Parser();
    parser.parseString(xmlData, (err, result) => {
      if (err) {
        rej(null)
      } else {
        // const jsonData = JSON.stringify(result, null, 2);
        res(result)
        // console.log(jsonData,"jdasd");
      }
    });
  })


  } 

  module.exports=xml_to_Json