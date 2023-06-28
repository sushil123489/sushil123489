
const { default: axios } = require('axios');
const xml_to_Json = require('./xml_to_json');
const file_schema = require('../schemas/fileRecord');
var CronJob = require('cron').CronJob;

const get_files_from_url= async()=> {
let headers ={}
    axios.get("https://voaratinglists.blob.core.windows.net/downloads?restype=container&comp=list",headers)
      .then(async(res) => {
          let final = await xml_to_Json(res.data);
        let resp = final.EnumerationResults && final.EnumerationResults.Blobs && final.EnumerationResults.Blobs.length ? final.EnumerationResults.Blobs[0].Blob:[] 
        let  data  = resp.map(x=>{
            let prop = x['Properties'] && x['Properties'].length ? x['Properties'][0]:{}
            return {
                fileName: x.Name && x.Name.length ? x.Name[0]:'',
                lastModified:prop['Last-Modified'][0],
                etag:prop.Etag[0],
                contentType:prop['Content-Type'][0],
                BlobType:prop.BlobType[0],
                LeaseStatus:prop.LeaseStatus[0],
                LeaseState:prop['LeaseState'][0]
            }
        });
      let files = await file_schema.find({});
      let fileName  = files.map((x=>x.fileName));
      let filterdData = data.filter(x=>!fileName.includes(x.fileName));
      filterdData.map(x=>{x.isNewRecord=1});
      await file_schema.create(filterdData);

      

    })
      .catch((error) => {
        console.log(("error occurring", error));
      })
  } 

  let job = new CronJob(
    '0 0 * * *',
    function() {
        get_files_from_url()
    },
    null,
    true,
    'America/Los_Angeles'
);

job.start();