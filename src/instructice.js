import util from './utils.js';
import instructions from './instructions.js';
class Instructice{
    constructor(triggerId) {
        if(!instructions) throw new Error("Instructions are required, checkout for instructions.js file");
        this.instructions = instructions.list;
        this.runList = [];
        this.isRunning = false;
let starterElement = document.getElementById(triggerId);
util.animateFloating(triggerId);
starterElement.addEventListener('click', this.start.bind(this));
let stopButton = document.getElementById('stopButton');
stopButton.addEventListener('click', this.stop.bind(this));
        }
       async start(){
        if(this.isRunning) return;
        this.isRunning = true;
            this.prepareRunList();
            for(const subRunList of this.runList){
                console.log('Set islemeye basladi');
                await Promise.all(subRunList.map(inst=>inst.process()));
                console.log('----------------Set Bitti')
            }
            this.isRunning = false;
        }
        stop(){
        //must clean up the runList elements
            for(const subRunList of this.runList){
                for(const inst of subRunList){
                    let container = document.getElementById(inst.id);
                    if(container){
                        container.remove();
                    }
                }
            }
            this.isRunning = false;
            this.runList = [];
        }
    prepareRunList(){
        for(const instruction of this.instructions){
            let inst = new Instruction(instruction);
            let subRunList=[];
            subRunList.push(inst);
            if(inst.run_with.length>0){
                inst.run_with.forEach(instId=>{
                    let theInst = this.instructions.find(inst=>inst.id===instId);
                    subRunList.push(new Instruction(theInst));
                })
            }
            this.runList.push(subRunList);
        }

    }
}

class Instruction{
    constructor(instruction){
        Object.entries(instruction).forEach(([key, value])=>{
            this[key] = value;
        });
        console.log(this)
    }
    async process(){
        // Simulate the processing of the instruction
        console.log(`Processing instruction: ${this.id}`);
        let container = document.createElement('div');
        container.id = this.id;
        container.innerHTML = this.data.value;
        container.style.border = '1px solid black';
        container.style.zIndex = 1000;
        container.style.backgroundColor = this.data.bgColor;
        container.style.color = this.data.color;
        container.style.position = this.data.position;
        container.style.width = this.data.width + 'px';
        container.style.height = this.data.height + 'px';
        if(this.data.has_target){
            let target = document.getElementById(this.data.target);
            let targetRect = target.getBoundingClientRect();
            let containerRect = container.getBoundingClientRect();
            let containerPosition = util.calculatePosition(this.data.stick_to, targetRect, containerRect);
            if(this.data.position==='absolute'){
                container.style.position='absolute';
                container.style.left = containerPosition.x+'px';
                container.style.top = containerPosition.y+'px';
            }
        }

        document.body.appendChild(container);
        if(this.actions && this.actions.length>0){
            for(const action of this.actions){
                let theEvent = new Event(action.event);
                let waitBefore = action.wait_before || 200;
                    setTimeout(()=>{
                        document.getElementById(action.target).classList.add(action.notice_class)
                        document.getElementById(action.target).dispatchEvent(theEvent);
                    },waitBefore);
                let waitAfter = action.wait_after || 200;
                setTimeout(()=>{
                    document.getElementById(action.target).classList.remove(action.notice_class)
                }, waitAfter)

            }
        }

        return new Promise(resolve=>{
            switch (this.end_action.type) {
                case "time":
                    setTimeout(()=>{
                        container.remove();
                        resolve();
                    }, this.end_action.after);
                    break;
                case "trigger":
                    document.getElementById('theUniqueID').addEventListener(this.end_action.event, ()=>{
                        container.remove();
                        if(!this.end_action.after || this.end_action.after===0){
                            resolve();
                        }else{
                            setTimeout(()=>{
                                resolve();
                            }, this.end_action.after);
                        }
                    }   )
                    break;
                default:
                    resolve();

            }
        })

    }
}

export default Instructice;
