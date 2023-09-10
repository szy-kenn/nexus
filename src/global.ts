export const hexToRgb = (hex: string) => {
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
    return [r, g, b];
};

export interface GameData {
    title: string;
    price: string;
    clickedColor: string;
    imageUrl: string;
}
