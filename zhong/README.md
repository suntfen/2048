# 终 (zhong)

又一个 [2048](https://github.com/gabrielecirulli/2048) 的分支版本。

我大概就是汉化了一下……


Yet another fork of [2048](https://github.com/gabrielecirulli/2048).
* Added i18n to 2048, and translated to Chinese.

![截图](screenshot.jpg "截图")

（截图不是我本人玩出来的）

我看不下去你们这些分支完了之后乱改的了啊：

* 代码的主要改动都可以在i18n文件里面弄好
* tileText对应的是每个砖块上显示什么
  * 如果想改成多个字的用["砖块一", "砖块二", ...]来替换那个字符串就可以了。
  * 改成多个字的话请记得修改css字号，css有两处要改，一个是电脑的一个是手机的。
* 上面的分数是numberToString，如果想改成原始的显示请不要去改那个"〇一二…"的串，直接把函数改成return num就好了。
* 最后记得改favicon，如果你不会编辑ico文件，换用原版的那个也不是不行。
* 还有首页下方的说明也记得编辑一下。
