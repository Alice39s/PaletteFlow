import { ColorFamily, generateExtendedShades } from "./colorUtils";

export const initialColors: ColorFamily[] = [
    {
        name: 'Slate',
        baseHsl: [215, 20, 65],
        baseColor: '#b0c4de',
        shadeCount: 11,
        shades: generateExtendedShades([215, 20, 65], 11),
    },
    {
        name: 'Gray',
        baseHsl: [220, 10, 65],
        baseColor: '#d3d3d3',
        shadeCount: 11,
        shades: generateExtendedShades([220, 10, 65], 11)
    },
    {
        name: 'Zinc',
        baseHsl: [240, 5, 65],
        baseColor: '#e0e0e0',
        shadeCount: 11,
        shades: generateExtendedShades([240, 5, 65], 11)
    },
    {
        name: 'Neutral',
        baseHsl: [0, 0, 65],
        baseColor: '#a9a9a9',
        shadeCount: 11,
        shades: generateExtendedShades([0, 0, 65], 11)
    },
    {
        name: 'Stone',
        baseHsl: [25, 5, 65],
        baseColor: '#d2b48c',
        shadeCount: 11,
        shades: generateExtendedShades([25, 5, 65], 11)
    },
    {
        name: 'Red',
        baseHsl: [0, 85, 60],
        baseColor: '#ff4500',
        shadeCount: 11,
        shades: generateExtendedShades([0, 85, 60], 11)
    },
    {
        name: 'Orange',
        baseHsl: [25, 95, 53],
        baseColor: '#ffa500',
        shadeCount: 11,
        shades: generateExtendedShades([25, 95, 53], 11)
    },
    {
        name: 'Amber',
        baseHsl: [45, 93, 50],
        baseColor: '#ffbf00',
        shadeCount: 11,
        shades: generateExtendedShades([45, 93, 50], 11)
    },
    {
        name: 'Yellow',
        baseHsl: [55, 92, 50],
        baseColor: '#ffff00',
        shadeCount: 11,
        shades: generateExtendedShades([55, 92, 50], 11)
    },
    {
        name: 'Lime',
        baseHsl: [85, 80, 45],
        baseColor: '#32cd32',
        shadeCount: 11,
        shades: generateExtendedShades([85, 80, 45], 11)
    },
    {
        name: 'Green',
        baseHsl: [142, 72, 45],
        baseColor: '#008000',
        shadeCount: 11,
        shades: generateExtendedShades([142, 72, 45], 11)
    },
    {
        name: 'Emerald',
        baseHsl: [160, 84, 45],
        baseColor: '#50c878',
        shadeCount: 11,
        shades: generateExtendedShades([160, 84, 45], 11)
    },
    {
        name: 'Teal',
        baseHsl: [170, 80, 45],
        baseColor: '#008080',
        shadeCount: 11,
        shades: generateExtendedShades([170, 80, 45], 11)
    },
    {
        name: 'Cyan',
        baseHsl: [185, 95, 45],
        baseColor: '#00ffff',
        shadeCount: 11,
        shades: generateExtendedShades([185, 95, 45], 11)
    },
    {
        name: 'Sky',
        baseHsl: [200, 95, 45],
        baseColor: '#87ceeb',
        shadeCount: 11,
        shades: generateExtendedShades([200, 95, 45], 11)
    },
    {
        name: 'Blue',
        baseHsl: [215, 90, 45],
        baseColor: '#0000ff',
        shadeCount: 11,
        shades: generateExtendedShades([215, 90, 45], 11)
    },
    {
        name: 'Indigo',
        baseHsl: [235, 85, 45],
        baseColor: '#4b0082',
        shadeCount: 11,
        shades: generateExtendedShades([235, 85, 45], 11)
    },
    {
        name: 'Violet',
        baseHsl: [250, 85, 45],
        baseColor: '#ee82ee',
        shadeCount: 11,
        shades: generateExtendedShades([250, 85, 45], 11)
    },
    {
        name: 'Purple',
        baseHsl: [270, 85, 45],
        baseColor: '#800080',
        shadeCount: 11,
        shades: generateExtendedShades([270, 85, 45], 11)
    },
    {
        name: 'Fuchsia',
        baseHsl: [290, 90, 45],
        baseColor: '#ff00ff',
        shadeCount: 11,
        shades: generateExtendedShades([290, 90, 45], 11)
    },
    {
        name: 'Pink',
        baseHsl: [330, 85, 45],
        baseColor: '#ffc0cb',
        shadeCount: 11,
        shades: generateExtendedShades([330, 85, 45], 11)
    },
    {
        name: 'Rose',
        baseHsl: [350, 90, 45],
        baseColor: '#ff007f',
        shadeCount: 11,
        shades: generateExtendedShades([350, 90, 45], 11)
    }
];
