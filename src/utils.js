let utility = {
    calculatePosition:(stick_to, targetRect, containerRect)=>{
        let x = 0;
        let y = 0;
        switch (stick_to) {
        case "lefttop":
        case "leftmiddle":
        case "leftbottom":
            x = targetRect.left - containerRect.width;
            break;
        case "righttop":
        case "rightmiddle":
        case "rightbottom":
            x = targetRect.right;
            break;
        case "topmiddle":
        case "middle":
        case "bottommiddle":
            x = targetRect.left + targetRect.width / 2 - containerRect.width / 2;
            break;
        default:
            x = targetRect.left;
        }
        switch (stick_to) {
        case "lefttop":
        case "righttop":
        case "topmiddle":
            y = targetRect.top - containerRect.height;
            break;
        case "leftbottom":
        case "rightbottom":
        case "bottommiddle":
            y = targetRect.bottom;
            break;
        case "leftmiddle":
        case "rightmiddle":
        case "middle":
            y = targetRect.top + targetRect.height / 2 - containerRect.height / 2;
            break;
        default:
            y = targetRect.top;
        }
        return {x, y};
    },
    animateFloating(targetId){
        let targetElement = document.querySelector(`#${targetId}`); // Select the image
        let start = null;

        function float(timestamp) {
            if (!start) start = timestamp;
            let progress = timestamp - start;
            let sin = Math.sin(progress / 1000); // Change 1000 to affect the speed
            targetElement.style.transform = `translateY(${sin * 20}px)`; // Change 20 to affect the distance

            // Keep a constant blurry shadow

            requestAnimationFrame(float);
        }

        requestAnimationFrame(float);
    }
}

export default utility;
