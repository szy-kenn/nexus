export const hexToRgb = (hex: string): RGBColor => {
    // Remove the # character if it's present
    hex = hex.replace(/^#/, "");

    // Check for shorthand hex and expand it if necessary
    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((char) => char + char)
            .join("");
    }

    // Parse the hex value to get the individual RGB components
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Return the RGB color as an object
    return { r, g, b };
};

export const compareRgb = (color1: RGBColor, color2: RGBColor) => {
    return (
        color1.r === color2.r && color1.b === color2.b && color1.g === color2.g
    );
};

export interface GameData {
    title: string;
    price: string;
    clickedColor: string;
    imageUrl: string;
}

export interface RGBColor {
    r: number;
    g: number;
    b: number;
}
