class SketchPad {
    constructor(sketchpad_element_ref, size=500) {
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
    }
}