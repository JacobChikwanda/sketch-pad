class SketchPad {
    constructor(sketchpad_element_ref, size = 500) {

        // Attributes
        this.is_drawing = false;

        // Create canvas in javascript
        this.canvas = document.createElement('canvas');

        // How add styling to the canvas
        this.canvas.width = size;
        this.canvas.height = size;
        this.canvas.style = `
            background-color: white;
            box-shadow: 0 0 4px 2px lightgray;
        `;

        // How to add element to sketchpad
        sketchpad_element_ref.appendChild(this.canvas)

        // Handling all canvas events
        this.#handleEvents()
    }

    // Function to listen to events
    #handleEvents() {
        // Handles what happens when mouse is clicked
        this.canvas.addEventListener('mousedown', (e) => {
            this.is_drawing = true;
            const mouse_position = this.#getMousePosition(e);
            console.log(mouse_position)
        });

        // Handles what happens when mouse is moving
        this.canvas.addEventListener('mousemove', (e) => {
            if (this.is_drawing) {
                const mouse_position = this.#getMousePosition(e);
                console.log(mouse_position)
            }
        });

        // Handles what happens when mouse is no longer clicked
        this.canvas.addEventListener('mouseup', (e) => {
            this.is_drawing = false;
        })
    }

    // Function gets the current position of the mouse
    #getMousePosition(e) {
        const rect = this.canvas.getBoundingClientRect();
        const mouse_position = [
            Math.round(e.clientX - rect.left),
            Math.round(e.clientY - rect.top)
        ];
        return mouse_position;
    }
}