<div align="center">
<img src="https://github.com/2214962083/2214962083/assets/35005637/f7a42850-0b23-45fc-9b33-bf1173e1319d" alt="icon"/>

<h1 align="center">Aide</h1>

English / [简体中文 🌏](https://github.com/nicepkg/aide/tree/main/README_CN.md)

Convert selected files to AI prompts with one click, enabling custom AI commands to initiate inquiries about these files. 🚀

一键将选定文件复制为 AI 提示,支持自定义 AI 命令以针对这些文件发起聊天。🚀

[![Version](https://img.shields.io/visual-studio-marketplace/v/nicepkg.aide)](https://marketplace.visualstudio.com/items?itemName=nicepkg.aide)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/nicepkg.aide)](https://marketplace.visualstudio.com/items?itemName=nicepkg.aide)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/nicepkg.aide)](https://marketplace.visualstudio.com/items?itemName=nicepkg.aide)
[![License](https://img.shields.io/github/license/nicepkg/aide)](https://github.com/nicepkg/aide/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/nicepkg/aide)](https://github.com/nicepkg/aide)

</div>

## Why Aide 🤷‍♂️

- **🚀 Efficiency Boost:** Convert selected files to AI prompts with one click, saving tons of manual copy-paste time.
- **🧠 Intelligent Interaction:** Customize AI commands to directly converse with your code files, getting tailored advice and answers.
- **🛠 Flexible Customization:** Highly configurable prompt templates and AI commands to adapt to your personalized workflow.
- **🔍 Deep Integration:** Seamlessly integrated into VS Code, making AI-assisted programming a part of your daily development routine.
- **🌟 Open Source & Free:** Completely open-source, continuously updated, and community-driven innovative tool.
- **📈 Quality Enhancement:** Leverage AI power to improve code quality and accelerate problem-solving.
- **🎓 Learning Assistant:** Beginner-friendly, helping you better understand and improve your code.
- **🌐 Cross-language Support:** Applicable to various programming languages and project types.

Whether you're a seasoned developer or a coding novice, Aide can be your powerful assistant, significantly enhancing your programming experience and work efficiency. Try it now and experience the new era of AI-driven programming!

## Features ✨

- 📋 Copy selected files as AI prompts
- 💬 Ask AI about selected files with custom commands
- 🎛 Customizable AI prompt template
- 📁 Support selected multiple files and folders
- 🚫 Custom ignore patterns for excluding files

## Installation 📦

1. Open Visual Studio Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "[Aide](https://marketplace.visualstudio.com/items?itemName=nicepkg.aide)"
4. Click Install

## Usage 🛠

### Copy as Prompt

1. Select some files or folders in the Explorer and right-click
2. Select `✨ Aide: Copy As AI Prompt`
3. The file content will be copied to your clipboard in the configured format

### Ask AI

1. Select some files or folders in the Explorer and right-click
2. Select `✨ Aide: Ask AI`
3. If prompted, enter your question
4. The configured AI command will be executed with the selected files path

For example:

- Configure `aide.aiCommand`:

```bash
aider #{filesAbsolutePath}
```

- Select `a.ts` and `b.ts` and run `✨ Aide: Ask AI`:

```bash
aider "/xxxx/your-project/a.ts" "/xxxx/your-project/b.ts"
```

## Configuration ⚙️

Aide can be customized through VS Code settings:

- `aide.aiPrompt`: Template for AI prompts (default: `#{content}`)

  - For Example: you custom aiPrompt template as `This is my files content: #{content} Please answer the question:`.
  - then select `a.ts` and `b.ts` and run `✨ Aide: Copy As AI Prompt`:
  - You will got:

    ````txt
    This is my files content:
    File: a.ts
    ```ts
    // a.ts content

    ```

    File: b.ts
    ```ts
    // b.ts content

    ```
    Please answer the question:
    ````

- `aide.aiCommand`: Template for AI command execution (default: "")

  - `#{filesRelativePath}`: Selected files relative path
  - `#{filesAbsolutePath}`: Selected files absolute path
  - `#{question}`: User input question, this will show a prompt to ask for a question

- `aide.aiCommandCopyBeforeRun`: Copy AI command before execution (default: `true`)
- `aide.ignorePatterns`: Supports [glob](https://github.com/isaacs/node-glob) rules, ignored file rule sets, default:
  ```json
  [
    "**/node_modules",
    "**/.git",
    "**/__pycache__",
    "**/.Python",
    "**/.DS_Store",
    "**/.cache",
    "**/.next",
    "**/.nuxt",
    "**/.out",
    "**/dist",
    "**/.serverless",
    "**/.parcel-cache"
  ]
  ```

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request. See the [contributing guide](CONTRIBUTING.md) for more details.

This project exists thanks to all the people who contribute:

<a href="https://github.com/nicepkg/aide/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=nicepkg/aide" />
</a>

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support 💖

If you find this project helpful, please consider giving it a ⭐️ on [GitHub](https://github.com/nicepkg/aide)!

## Star History ⭐

<div align="center">

<img src="https://api.star-history.com/svg?repos=nicepkg/smart-web&type=Date" width="600" height="400" alt="Star History Chart" valign="middle">

</div>