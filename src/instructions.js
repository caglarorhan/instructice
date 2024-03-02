let  instructions = {
      version: "1.0.0",
      instructions: [
        {
          id: "asdlkjl1kjllklk231",
          type: "text",
          text: "Welcome to the game!",
          position: "absolute",
          has_target: false,
          x: 0,
          y: 0,
          come_with: "load",
          coming_with: "animation_drop",
          leave_with: "time",
          leaving_with: "fadeout",
          duration: 5000
        },
        {
          id: "kakjsdhakjwhekaj",
          type: "text",
          text: "This is second instruction!",
          position: "relative",
          has_target: true,
          target_id: "theUniqueID",
          from_where: ["top", "left"],
          come_with: "ordered",
          coming_with: "fadein",
          leave_with: "time",
          leaving_with: "fadeout",
          duration: 5000
        }
      ]
}

export default instructions;
