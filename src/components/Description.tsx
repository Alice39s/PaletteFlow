import { Github, Code } from 'lucide-react';

export default function Description() {
    return (
        <div className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="w-full max-w-[2000px] mx-auto px-4 py-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        PaletteFlow
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        专为数据密集型图表定制的色卡生成器，支持 HSL、RGB 和 HEX 格式。
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="https://github.com/Alice39s/PaletteFlow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-100"
                        >
                            <Github className="h-4 w-4" />
                            点点 Star
                        </a>
                        <a
                            href="https://github.com/Alice39s/PaletteFlow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <Code className="h-4 w-4" />
                            贡献代码
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}