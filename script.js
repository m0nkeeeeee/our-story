let highestZ = 1;


class Paper {

    holdingPaper = false;

    prevMouseX = 0; //postion coordinates
    prevMouseY = 0;

    mouseX = 0;  //current position
    mouseY = 0;

    velocityX = 0; //velocity  of animation
    velocityY = 0;

    currentPaperX = 0;
    currentPaperY = 0; 




    init(paper) {

        //first even when we press the moust button
        paper.addEventListener('mousedown', (e) => {
            
            this.holdingPaper = true;

            paper.style.zIndex = highestZ;
            highestZ+= 1;

            if (e.button === 0) {
                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;

                console.log(this.prevMouseX);
                console.log(this.prevMouseY);
            }

        })

        // when mouse is moving
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            this.velocityX = this.mouseX - this.prevMouseX;
            this.velocityY = this.mouseY - this.prevMouseY;

            if (this.holdingPaper) {

                this.currentPaperX += this.velocityX;
                this.currentPaperY += this.velocityY;

                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;  

                paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;

            }
        })

        //if mouse is released from the click
        window.addEventListener('mouseup', () => {
            this.holdingPaper = false;
            console.log('mouse is released');
        })

        

    }
}


const papers = Array.from(document.querySelectorAll('.paper')) // select all documents from a class with the name paper and make it an array and make a constant papers and store it there

papers.forEach( paper => {
    const p = new Paper();
    p.init(paper);

})

// create a constant p which creates a new object of paper and for each object of paper init method is called 