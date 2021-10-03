class Form
{
    constructor(){
        this.input = createInput("").attribute("placeholder", "ENTER YOUR NAME");
        this.button = createButton("Start");
        this.greeting = createElement("h2");
        this.button2 = createButton("Play");
    }

    elementPositions() {
        this.input.position(width/2-100, height/2-100);
        this.button.position(width/2-85, height/2-20);
    }

    elementStyles() {
        this.input.class("customInput");
        this.button.class("customButton");
        this.button2.class("customButton");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.button2.hide();
    }

    handleMousePressed(){
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            var message  = `
            Welcome ${this.input.value()} 
            </br>You will go through the learning journey
            </br>Then check your results by attending the quiz
            </br>HAPPY LEARNING!`
            this.greeting.position(width/2-100, height/2-100);
            this.button2.position(width/2-85, height/2-20);
            this.greeting.html(message);
        });
    }

display(){
    this.elementPositions();
    this.elementStyles();
    this.handleMousePressed();
}

}