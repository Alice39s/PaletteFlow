// 色阶配置
export const SHADE_CONFIG = {
    MIN_COUNT: 12,
    MAX_COUNT: 40,
    MIN_LIGHTNESS: 8,
    MAX_LIGHTNESS: 92,
    MIN_SATURATION_FACTOR: 0.7,
    MAX_SATURATION_FACTOR: 1.2,
} as const;

// Toast 配置
export const TOAST_CONFIG = {
    DURATION: 2000,
    POSITION: 'top-right',
} as const;

// Local Storage 键名
export const STORAGE_KEYS = {
    THEME: 'paletteflow-theme',
} as const; 