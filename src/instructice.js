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
       async start(event){
        event.preventDefault();
        if(this.isRunning) return;
        this.isRunning = true;
           this.controller = new AbortController();
            await this.prepareRunList();
            console.log('runList hazirlandi, ASAGIDA');
            console.log(this.runList);
            while(this.runList.length){
                let subRunList = this.runList.shift();
                console.log('Set islemeye basladi');
                await Promise.all(subRunList.map(inst=>inst.process(this.controller.signal)));
                console.log('----------------Set Bitti')
            }
            this.isRunning = false;
        }
        stop(){
        console.log(this);
        this.controller.abort();
        this.controller = null;
        //must clean up the runList elements
            for(const ins of this.instructions){
                    let container = document.getElementById(ins.id);
                    if(container){
                        console.log('Removed:', container.toString())
                        container.remove();
                    }

            }
            this.isRunning = false;
            console.log(this.runList);
            this.runList = [];
            console.log(this.runList);
        }
    prepareRunList(){
        for(const instruction of this.instructions.filter(inst=>inst.just_backup===false)){
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
        console.log(this);
        this.timeouts = [];
    }
    async process(signal){
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
        }else{
            container.style.left = this.data.x+'px';
            container.style.top = this.data.y+'px';
        }


        document.body.appendChild(container);
        if(this.actions && this.actions.length>0){
            for(const action of this.actions){
                let theEvent = new Event(action.event);
                let waitBefore = action.wait_before || 200;
                this.timeouts.push(setTimeout(()=>{
                        document.getElementById(action.target).classList.add(action.notice_class)
                        document.getElementById(action.target).dispatchEvent(theEvent);
                    },waitBefore));
                let waitAfter = action.wait_after || 200;
                this.timeouts.push(setTimeout(()=>{
                    document.getElementById(action.target).classList.remove(action.notice_class)
                }, waitAfter));

            }
        }

        return new Promise((resolve,reject)=>{
            if(signal.aborted){
                this.timeouts.forEach(timeout=>clearTimeout(timeout));
                reject(new DOMException('Aborted', 'AbortError'));

            }
            switch (this.end_action.type) {
                case "time":
                    this.timeouts.push(setTimeout(()=>{
                        container.remove();
                        resolve();
                    }, this.end_action.after));
                    break;
                case "trigger":
                    document.getElementById('theUniqueID').addEventListener(this.end_action.event, ()=>{
                        container.remove();
                        if(!this.end_action.after || this.end_action.after===0){
                            resolve();
                        }else{
                            this.timeouts.push(setTimeout(()=>{
                                resolve();
                            }, this.end_action.after));
                        }
                    }   )
                    break;
                default:
                    resolve();

            }
        }).catch(err=>{
            if(err.name==='AbortError'){
                console.log('Promise aborted!');
                this.timeouts.forEach(timeout => clearTimeout(timeout));
            }else{
                console.log('Another error:',err);
            }
        })

    }
}

export default Instructice;
