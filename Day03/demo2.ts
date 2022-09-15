//Json Object
//javascript object Notation
//value & key format

let jsonobj={
  fname:'Sumit',
  "lname":"Raokhande",
  id:9
}

// Access a json object in 2 ways
//dot operator
//Square operator

//dot operator
  // console.log(`
  //       Using Dot Operator
  //       First name :: ${jsonobj.fname}
  //       Last Name  :: ${jsonobj.lname}
  //       ID         :: ${jsonobj.id}
  // `)

  //Square operator
  // console.log(`
  // Using Square Operator
  // First name :: ${jsonobj["fname"]}
  // Last Name  :: ${jsonobj['lname']}
  // ID         :: ${jsonobj["id"]}
  // `);


  //Array of Object
    let arrobj=[
      {
        fname:'Sumit',
        lname:'Raokhande',
        id:9,
        month:["Jan",'Feb','March'],
        country:{
          cid:1,
          cname:'India'
        },
        result:[
          {
              subj:"M1",
              marks:40
          },
          {
            subj:"M2",
            marks:45
         },
         {
          subj:"M3",
          marks:55
         }
        ]
      },
      {
        fname:'Kiran',
        lname:'Raokhande',
        id:6,
        month:["may",'Dec','Aug'],
        country:{
          cid:2,
          cname:'US'
        },
        result:[
          {
              subj:"M1",
              marks:55
          },
          {
            subj:"M2",
            marks:63
         },
         {
          subj:"M3",
          marks:75
         }
        ]
      },
      {
        fname:'Spruha',
        lname:'Raokhande',
        id:3,
        month:["Feb",'Apr','June'],
        country:{
          cid:3,
          cname:'Japan'
        },
        result:[
          {
              subj:"M1",
              marks:63
          },
          {
            subj:"M2",
            marks:85
         },
         {
          subj:"M3",
          marks:70
         }
        ]
      },
      
    ];

      for(let i=0;i<arrobj.length;i++){

        console.log(`
            First Name :: ${arrobj[i].fname}
            Last Name  :: ${arrobj[i].lname}
            ID         :: ${arrobj[i].id}
            Month      :: ${arrobj[i].month.join("  ")}
          Country Name :: ${arrobj[i].country.cname}
              -------Result------------
          
        `)

          for(let j=0;j<arrobj[i].result.length;j++){
            console.log(`
                Subject :: ${arrobj[i].result[j].subj}
                Markas  :: ${arrobj[i].result[j].marks}
            `)
          }

      }

    
