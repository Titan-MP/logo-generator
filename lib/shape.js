
class SVG {
    constructor(text, color, shapeColor) {
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    }

    setText(text) {
        this.text = text;
    };

    setColor(color) {
        this.color = color;
    };

    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    };
};

class Square extends SVG {
    constructor(text, color, shapeColor) {
        super(text, color, shapeColor);
    }

    getSVG() {
        return `<svg height="200" width="300">
                    <rect width="100" height="100" style="fill:${this.shapeColor};stroke-width:3;stroke:${this.color}" />
                    <text x="50%" y="50%" text-anchor="middle" fill="${this.color}" font-size="30px" font-family="sans-serif">${this.text}</text>
                </svg>`;
    };
};

class Circle extends SVG {
    constructor(text, color, shapeColor) {
        super(text, color, shapeColor);
    };

    getSVG() {
        return `<svg height="200" width="300">
                    <circle cx="50%" cy="50%" r="50" stroke="${this.color}" stroke-width="3" fill="${this.shapeColor}" />
                    <text x="50%" y="50%" text-anchor="middle" fill="${this.color}" font-size="30px" font-family="sans-serif">${this.text}</text>
                </svg>`;
    };
};

class Triangle extends SVG {
    constructor(text, color, shapeColor) {
        super(text, color, shapeColor);
    };

    getSVG() {
        return `<svg height="200" width="300">
                    <polygon points="50,0 100,100 0,100" style="fill:${this.shapeColor};stroke:${this.color};stroke-width:3" />
                    <text x="50%" y="50%" text-anchor="middle" fill="${this.color}" font-size="30px" font-family="sans-serif">${this.text}</text>
                </svg>`;
    };
};

module.exports = { Square, Circle, Triangle }