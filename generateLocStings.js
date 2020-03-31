"use strict";
let fs = require("fs");
var prettier = require('prettier');
const langs = ['en', 'ru', 'es', 'fr', 'it', 'jp', 'ko', 'pt', 'de', 'zh-si'];
let path = './rawData/loc_strings/'

saveToFile("./data/locStrings.js")

function saveToFile(file) {
  const content = `
// generated by ${__filename}
// at ${new Date().toDateString()}

let langs = ${JSON.stringify(loadStrings(), null, 2)}

// module.exports = {langs};
 export {langs};
`
  fs.writeFileSync(
      file,
      prettier.format(content, {
          parser: 'babel',
          trailingComma: 'es5',
          printWidth: 500, // чтоб массивы выстраивались в одну линию
      })
  );
console.log(`Файл ${file} создан`)
}
function loadStrings() {
    let result = {}
    for (let lang of langs) {
        let rawStrings = fs.readFileSync(`${path}loc_strings_${lang}.txt`,"utf8");
        let allStrings = rawStrings.split('\n')
        allStrings = Array.from(allStrings)
        result[lang] = {};
        for (let i = 0; i < allStrings.length; i++) {
            let string = allStrings[i];
            if(string === "") continue
            let res = string.match(/"(.+?)","(.+?)"/);
              let key = res[1];
              let val = res[2];
            if (!(isTrash(key))) {
              if (['TID_MODULE_EMP','AU'].indexOf(key) != -1){
                result[lang][key] = val;
              }else{
                result[lang][key] = fixWorlds(val);
              } 
            }
        }
    }
    return addStrings(result);
}
function addStrings(obj){
    let jsonStrings = JSON.parse(fs.readFileSync(`${path}modification/addStringsFile.json`,"utf8"))
    obj = combineObjects(obj,jsonStrings)
    let addStringsToJson = {
      TID_MODULE_EFFECT_DURATION_DESCR:[
        'EffectDurationx10WS',
        'EffectDurationx10BS'
      ],
      TID_MODULE_EFFECT_RANGE_DESCR:[
        'EffectRadiusWS',
        'EffectRadiusBS'
      ],
      TID_MODULE_AOE_STAT:[
        'AOEDamage_WS',
        'AOEDamage_BS',
      ],
      TID_MODULE_ACTIVATION_PREP_TIME:[
        'ActivationPrepWS',
        'ActivationPrepBS'
      ],
      TID_DRONE_LIFETIME:[
        'SpawnLifetime_WS'
      ],
      TID_MODULE_COOLDOWN_STAT:[
        'ActivationDelayWS',
        'ActivationDelayBS'
      ],
      TID_MODULE_DESCR_MAX_DPS_TIME:[
        'MaxDPSTimeWS',
        'MaxDPSTime_BS',
      ],
      TID_DISPATCH_PREP_TIME:[
        'APTPIOTTPWS'
      ],
      DisableTime:[
        'DisableTimeWS'
      ]
    }
    let result = {};
    for (let lang of langs){
      result[lang] = {};
      let keys = Object.keys(addStringsToJson)
      for(let key of keys){
        let items = addStringsToJson[key]
        for(let i of items){
          let startVal = obj[lang][key]
          let endVal = `${obj[lang][i.slice(-2)]}`
          
          result[lang][i] =`${startVal} (${endVal})`
        }
      }
    }
    return combineObjects(obj,result);
}

function isTrash(key) {
    let trash = fs.readFileSync(`${path}modification/trashStrings.json`,"utf8");
    trash = JSON.parse(trash, null, 2);
    return trash.includes(key)
}
// вернуть сточку в нижем регистре, но с заглавной буквой, если такая есть
function fixWorlds(rawStr){
  let firstLetterRaw = rawStr.slice(0, 1); 
  let lower = rawStr.toLowerCase();
  let firstLetter = lower.slice(0, 1);

  if (firstLetterRaw.toUpperCase() == firstLetterRaw) { // первая буква была заглавной ?
       let result = lower.replace(firstLetter, firstLetter.toUpperCase());
       return result.replace(/:$/,'');
  }
  return lower;
}
function combineObjects(obj1, obj2) {
  for (var p in obj2) {
    try {
      if ( obj2[p].constructor==Object ) {
        obj1[p] = combineObjects(obj1[p], obj2[p]);
      } else {
        obj1[p] = obj2[p];
      }
    } catch(e) {
      obj1[p] = obj2[p];
    }
  }
  return obj1;
}