import { ColorFamily, generateExtendedShades } from "./colorUtils";
import { colors } from "../consts/colors";

export const initialColors: ColorFamily[] = colors.map(color => ({
    ...color,
    shadeCount: 11,
    shades: generateExtendedShades(color.baseHsl, 11)
}));
