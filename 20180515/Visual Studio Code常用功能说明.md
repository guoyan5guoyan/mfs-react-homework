#  <center>Visual Studio Code常用功能说明</center>  #
 
 
# 快捷键说明 #
## 主命令框 ##
<font color='red'>F1</font> 或 <font color='red'>Ctrl+Shift+P </font>: 打开命令面板。在打开的输入框内，可以输入任何命令，例如：

按一下 <font color='red'>Backspace</font> 会进入到 <font color='red'>Ctrl+P</font> 模式
* 在 <font color='red'>Ctrl+P</font> 下输入 <font color='red'>></font> 可以进入 <font color='red'>Ctrl+Shift+P</font> 模式
* 在 <font color='red'>Ctrl+P </font>窗口下还可以:

直接输入文件名，跳转到文件
* <font color='red'>?</font> 列出当前可执行的动作
* <font color='red'>! </font>显示 Errors或 Warnings，也可以 Ctrl+Shift+M
* <font color='red'>: </font>跳转到行数，也可以 Ctrl+G 直接进入
* <font color='red'>@ </font>跳转到 symbol（搜索变量或者函数），也可以 Ctrl+Shift+O 直接进入
* <font color='red'>@</font> 根据分类跳转 symbol，查找属性或函数，也可以 Ctrl+Shift+O 后输入:进入
* <font color='red'>\# </font>根据名字查找 symbol，也可以 Ctrl+T

## 常用快捷键 ##
### 编辑器与窗口管理 ###
#### 同时打开多个窗口（查看多个项目）####
* 打开一个新窗口： Ctrl+Shift+N
* 关闭窗口： Ctrl+Shift+W
#### 同时打开多个编辑器（查看多个文件） ####
* 新建文件 Ctrl+N
* 文件之间切换 Ctrl+Tab
* 切出一个新的编辑器（最多3个）Ctrl+\，也可以按住Ctrl鼠标点击Explorer里的文件名
* 左中右3个编辑器的快捷键Ctrl+1 Ctrl+2 Ctrl+3
* 3个编辑器之间循环切换 Ctrl+`
* 编辑器换位置，Ctrl+k然后按Left或Right
### 代码编辑 ###
#### 格式调整 ####
* 代码行缩进Ctrl+[ Ctrl+]
* Ctrl+C Ctrl+V如果不选中，默认复制或剪切一整行
* 代码格式化：Shift+Alt+F，或Ctrl+Shift+P后输入format code
* 上下移动一行： Alt+Up 或 Alt+Down
* 向上向下复制一行： Shift+Alt+Up或Shift+Alt+Down
* 在当前行下边插入一行Ctrl+Enter
* 在当前行上方插入一行Ctrl+Shift+Enter
#### 光标相关 ####
* 移动到行首：Home
* 移动到行尾：End
* 移动到文件结尾：Ctrl+End
* 移动到文件开头：Ctrl+Home
* 移动到定义处：F12
* 定义处缩略图：只看一眼而不跳转过去Alt+F12
* 移动到后半个括号 Ctrl+Shift+]
* 选择从光标到行尾Shift+End
* 选择从行首到光标处Shift+Home
* 删除光标右侧的所有字Ctrl+Delete
* Shrink/expand selection： Shift+Alt+Left和Shift+Alt+Right
* Multi-Cursor：可以连续选择多处，然后一起修改，Alt+Click添加cursor或者Ctrl+Alt+Down 或 Ctrl+Alt+Up
* 同时选中所有匹配的Ctrl+Shift+L
* Ctrl+D下一个匹配的也被选中(被我自定义成删除当前行了，见下边Ctrl+Shift+K)
* 回退上一个光标操作Ctrl+U
#### 重构代码 ####
* 找到所有的引用：Shift+F12
* 同时修改本文件中所有匹配的：Ctrl+F12
* 重命名：比如要修改一个方法名，可以选中后按F2，输入新的名字，回车，会发现所有的文件都修改过了。
* 跳转到下一个Error或Warning：当有多个错误时可以按F8逐个跳转
* 查看diff 在explorer里选择文件右键 Set file to compare，然后需要对比的文件上右键选择Compare with 'file_name_you_chose'.
#### 查找替换 ####
* 查找 Ctrl+F
* 查找替换 Ctrl+H
* 整个文件夹中查找 Ctrl+Shift+F

匹配符：  
* to match one or more characters in a path segment
* ? to match on one character in a path segment
* ** to match any number of path segments ,including none
* {} to group conditions (e.g. {**/*.html,**/*.txt} matches all html and txt files)
* [] to declare a range of characters to match (e.g., example.[0-9] to match on example.0,example.1, …
#### 显示相关 ####
* 全屏：F11
* zoomIn/zoomOut：Ctrl + =/Ctrl + -
* 侧边栏显/隐：Ctrl+B
* 侧边栏4大功能显示：
>* Show Explorer Ctrl+Shift+E
>* Show SearchCtrl+Shift+F
>* Show GitCtrl+Shift+G
>* Show DebugCtrl+Shift+D
>* Show OutputCtrl+Shift+U
#### 其他 ####
* 自动保存：File -> AutoSave ，或者Ctrl+Shift+P，输入 auto

# Visual Studio Code 如何安装插件 #
## 安装插件 ##
有两种方式：
* F1 输入 extensions： || ext install。extensions：还可以显示已经安装过的插件。
![方式1](https://github.com/guoyan5guoyan/img/raw/master/vs-code-%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%851 "方式1")
* ctrl + P 然后输入 >ext install
![方式2](https://github.com/guoyan5guoyan/img/raw/master/vs-code-%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%852 "方式2")

# Visual Studio Code(vscode) git的使用 #
1. 创建一个github账号 
2. 在vscode中执行命令
>* echo "# C-Tests" >> README.md
>* git init
>* git add README.md
>* git commit -m "first commit"
>* git remote add origin https://github.com/harryluo163/C-Tests.git
>* git push -u origin master
3. 回到vs code打开git工作区就会看到所有代码显示在这里 
4. 然后按提示随便在消息框里输入一个消息，再按ctrl+enter提交 
5. 然后把所有暂存的代码push云端 
6. 打开github，发现改变了 