# 软件著作权助手

**软件著作权助手** 是一款基于 [Electron](https://www.electronjs.org/) 开发的跨平台应用程序，旨在帮助程序员快速、准确地统计代码文件的相关信息，以便于申请软件著作权。该工具简化了软件著作权申请的过程，自动化地收集代码行数、文件数量，并将代码合并为一个文档，便于直接复制到申请文档中。

## 主要功能

- **文件扩展名区分**：  
  支持根据文件扩展名（如 `.js`, `.ts`, `.java` 等）筛选和统计不同类型的代码文件，使得用户可以根据项目需求选择性地统计特定类型的代码。

- **排除空行统计**：  
  用户可以选择是否排除空行进行统计，帮助计算更为精确的实际代码行数。适用于不同的代码风格和规范需求。

- **代码文件统计**：  
  统计指定目录下所有代码文件的数量、总行数。对于大型项目，自动统计能节省大量人工计算的时间和精力。

- **合并代码文件**：  
  将所有符合条件的代码文件合并成一个单独的文件，便于直接复制到申请文档中，极大地提高了工作效率。

- **支持跨平台打包**：  
  支持 Windows、Mac 和 Linux 平台，通过 `electron-builder` 工具，可以一键打包成对应平台的安装包或可执行文件，方便不同操作系统用户使用。

## 使用说明

### 下载与安装

#### 1. **直接下载 Release 包**

   如果你不想自己编译，可以直接前往 [Release 页面](https://github.com/your-username/your-repo/releases) 下载适用于你平台的最新可执行程序。选择对应的操作系统版本下载并安装。

#### 2. **手动安装与使用**

   如果你希望在本地编译并运行该程序，请按照以下步骤进行操作：

   - **克隆项目**：
     首先，你需要从 GitHub 克隆项目到本地：
     ```bash
     git clone https://github.com/your-username/your-repo.git
     cd your-repo
     ```

   - **安装依赖**：
     在项目文件夹中，执行以下命令来安装项目的所有依赖：
     ```bash
     npm install
     ```

   - **运行项目**：
     安装完依赖后，使用以下命令启动 Electron 应用程序：
     ```bash
     npm start
     ```

   - **打包应用程序**：
     使用 `electron-builder` 工具，你可以为不同平台打包应用程序。执行以下命令为 Windows 平台打包可执行文件：
     ```bash
     npm run dist --win
     ```

     为 macOS 打包：
     ```bash
     npm run dist --mac
     ```

     为 Linux 打包：
     ```bash
     npm run dist --linux
     ```

     如果你想为多个平台同时打包，可以使用：
     ```bash
     npm run dist --win --mac --linux
     ```

   - **打包并发布**：
     你也可以使用 GitHub Actions 等 CI/CD 工具自动化构建和发布过程，进一步简化发布流程。

### 配置选项

在应用运行时，你可以通过应用界面选择以下配置选项：

- **选择需要统计的文件类型**：你可以选择哪些文件扩展名的文件需要被统计，或者忽略某些不相关的文件类型。
- **是否排除空行**：决定是否将空行从统计中排除。默认情况下，空行会被统计在内，但你可以选择排除它们来获得更加精确的代码行数。
- **选择文件夹**：选择你要统计代码的目录，该工具会递归遍历该目录下的所有代码文件。

### 系统要求

- **操作系统**：Windows, macOS, Linux（支持桌面版）
- **Node.js 版本**：>= 16.x
- **Electron 版本**：>= 11.0

## 贡献

欢迎任何形式的贡献！如果你发现 bug 或者有改进的建议，可以通过 Issue 或者 Pull Request 方式提交。我们会及时审查和合并代码。

## 常见问题

### Q: 如何处理多语言的代码文件？

A: 该工具支持通过文件扩展名区分不同语言的代码文件。因此，您可以轻松选择特定类型的文件进行统计。

### Q: 为什么代码行数统计不准确？

A: 确保在设置时正确选择了是否排除空行的选项。如果您仍然遇到问题，请检查代码文件的格式，确保没有隐藏的空白字符或其他格式问题。

### Q: 如何在 CI/CD 环境中自动化打包？

A: 可以使用 [GitHub Actions](https://docs.github.com/en/actions) 或其他 CI/CD 工具来自动化构建和打包流程。参考 [GitHub Actions 配置](https://github.com/your-username/your-repo/blob/main/.github/workflows/build.yml) 来实现多平台自动打包。

## 截图

下面是软件运行截图，展示了应用程序的主要界面及功能：

![软件著作权助手截图](screenshots.png)

## License

该项目采用 [MIT License](LICENSE) 进行开源，欢迎自由使用和修改。