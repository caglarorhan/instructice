import descriptions from "./description_book.js";
let d = descriptions;
let  instructions = {
      version: "1.0.0",
      instructice_starter:{
        auto:false,
        from_app:false,
        id:"instructiceStarter",
        type:"img",
        class_name:"instructiceStarter",
        value:"../img/instructions.svg",
        title:"Click to practice with instructions!",
        alt:"Click to practice with instructions!"
      },
      instructice_stopper:{
        auto:false,
        from_app:false,
        type:"button",
        class_name:"instructiceStopper",
        value:"STOP THE INSTRUCTIONS",
        id:"stopButton",
        title:"Click to practice with instructions!",
        alt:"Click to practice with instructions!"
      },
      list: [
        {
          id: "mainInstruction",
          run_with:["sideInstruction_1B"],
          type:"text",
          just_backup:false,
          data:{
            color: "black",
            bgColor: "white",
            width: "300",
            height: "50",
            value: "Disappear by time, 5 second actually!",
            position: "absolute",
            has_target: false,
            x: 500,
            y: 500
          },
          end_action:{
            type: "time",
            target:"",
            event:"",
            after:5000
          }
        },
        {
          id: "sideInstruction_1A",
          run_with:[],
          type: "text",
          just_backup:false,
          data:{
            color: "black",
            bgColor: "white",
            width: "200",
            height: "50",
            value: "If you read this, mouseover red square in the middle of page!",
            position: "absolute",
            has_target: true,
            target: "theUniqueID",
            stick_to: "leftmiddle",
            x: 200,
            y: 200
          },
          actions:[
            {
              target:"button1",
              notice_class:"notice",
              event:"click",
              wait_after:2000,
              wait_before:1000
            },
            {
              target:"button3",
              notice_class:"notice",
              event:"click",
              wait_after:2000,
              wait_before:1000
            }
          ],
          end_action:{
            type: "trigger",
            target:"theUniqueID",
            event:"mouseover",
            after:1
          }
        },
        {
          id: "sideInstruction_1B",
          run_with:[],
          type: "text",
          just_backup:true,
          data:{
            color: "black",
            bgColor: "white",
            width: "200",
            height: "50",
            value: "Third test is here, also disappears by time!",
            position: "absolute",
            has_target: false,
            x: 900,
            y: 10
          },
          end_action:{
            type: "time",
            target:"",
            event:"",
            after:6000
          }
        }
      ]
}

export default instructions;
