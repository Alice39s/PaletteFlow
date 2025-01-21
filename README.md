# 🎨 PaletteFlow

PaletteFlow 是一个专为数据密集型图表定制的色卡生成器，支持 HSL、RGB 和 HEX 格式。它能够帮助设计师和开发者快速生成和管理色彩系统。

## ✨ 特性

- 🎨 支持多种颜色格式（HSL、RGB、HEX）
- 🎯 可随意调节色阶数量（12-40 或者更多？）
- 📋 便捷的颜色值复制功能
- 🌗 自适应深色/浅色主题

## 🛠️ 技术栈

- React + TypeScript
- Tailwind CSS
- Framer Motion
- Sonner
- Color Convert
- Lucide Icons

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/Alice39s/PaletteFlow.git

# 进入项目目录
cd PaletteFlow

# 安装依赖
bun i

# 启动开发服务器
bun dev
```

## 🔧 配置说明

主要配置项（`src/consts/index.ts`）：

```typescript
// 色阶配置
export const SHADE_CONFIG = {
    MIN_COUNT: 12,        // 最小色阶数
    MAX_COUNT: 40,        // 最大色阶数
    MIN_LIGHTNESS: 8,     // 最小亮度
    MAX_LIGHTNESS: 92,    // 最大亮度
    MIN_SATURATION_FACTOR: 0.7,  // 最小饱和度因子
    MAX_SATURATION_FACTOR: 1.2   // 最大饱和度因子
};

// Toast 配置
export const TOAST_CONFIG = {
    DURATION: 2000,       // 提示持续时间
    POSITION: 'top-right' // 提示显示位置
};
```

## 📦 项目结构

```
src/
├── components/
│   ├── ColorFamilyCard  # 色卡组件
│   ├── ColorPalette     # 调色板组件
│   ├── Description      # 描述组件
│   ├── Footer           # 页脚组件
│   ├── Header           # 头部组件
│   └── Layout           # 布局组件
├── hooks/
│   ├── useColorPalette  # 调色板逻辑
│   └── useTheme         # 主题管理
├── utils/
│   └── colorUtils       # 颜色处理工具
├── consts/
│   └── index.ts         # 全局常量
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/AmazingFeature`
3. 提交改动：`git commit -m 'Add some AmazingFeature'`
4. 推送分支：`git push origin feature/AmazingFeature`
5. 提交 Pull Request

## 📄 开源协议

本项目采用 [MIT](LICENSE) 开源协议。