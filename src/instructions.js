import descriptions from "./description_book.js";
let d = descriptions;
let  instructions = {
      version: "1.0.0",
      list: [
        {
          id: "mainInstruction",
          run_with:[],
          type:"text",
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
          data:{
            color: "black",
            bgColor: "white",
            width: "200",
            height: "50",
            value: "If you read this, click the red square in the middle of page!",
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
            event:"click",
            after:1
          }
        },
        {
          id: "sideInstruction_1B",
          run_with:[],
          type: "text",
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
            after:5000
          }
        }
      ]
}

export default instructions;
