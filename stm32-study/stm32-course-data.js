const COURSE = {
  "meta": {
    "bvid": "BV11X4y1j7si",
    "title": "铁头山羊 STM32 入门教程",
    "author": "铁头山羊",
    "chip": "STM32F103 · 标准库 · LQFP48"
  },
  "phases": [
    {
      "id": "prep",
      "name": "准备阶段"
    },
    {
      "id": "gpio",
      "name": "GPIO"
    },
    {
      "id": "uart",
      "name": "串口"
    },
    {
      "id": "i2c",
      "name": "I2C"
    },
    {
      "id": "spi",
      "name": "SPI"
    },
    {
      "id": "int",
      "name": "中断与 EXTI"
    },
    {
      "id": "clk",
      "name": "时钟"
    },
    {
      "id": "tim",
      "name": "定时器"
    },
    {
      "id": "adc",
      "name": "ADC"
    }
  ],
  "lessons": [
    {
      "page": 1,
      "phase": "prep",
      "title": "课程介绍",
      "duration": 456,
      "summary": "依次介绍课程版本背景、八项教学特点、C语言前提与综合小车目标；本节没有外设编程实验。",
      "notes": "本节先回顾教程重录与版本演变，再按八项特点介绍学习方式。作者明确要求C语言预备知识，展示面包板教学、现场输入代码、分层目录、随堂测试与直播答疑，并说明设置双足平衡小车综合目标的动机。最后展示ST资料并强调参考手册。直播时间是录制时安排，小车只是本节目标预告。",
      "points": [
        "零STM32基础入门，但需要先掌握C语言",
        "使用面包板与最小系统板，边输入代码边解释",
        "按章、节、小节与知识点组织学习和复习",
        "随堂测试与录制时的直播答疑安排",
        "以双足平衡小车作为课程目标预告",
        "强调STM32F1参考手册作为编程依据"
      ],
      "cid": 1219312317,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 30,
            "observation": "四版时间线与八特点，第四版标双足平衡小车。",
            "frameSha256": "8d0e2d7bbe65432d27b106becef0c3ba65edb3cb95f31039e2d3d1c4978653ce"
          },
          {
            "seconds": 120,
            "observation": "零基础入门页面明确标预备知识C语言。",
            "frameSha256": "07c6dcfe9b39f2bb518a969923be452a8b5bf61276099be39c4d03811933b6d6"
          },
          {
            "seconds": 136,
            "observation": "面包板、最小系统板、按键、LED与显示模块实物图。",
            "frameSha256": "33ca66329f1670bd22b9acdb78e8119d81b07922c84e0ebc65aefec3f6c0df6a"
          },
          {
            "seconds": 180,
            "observation": "程序纯手打示意采用ButtonTest工程编辑窗口；本节不展开代码。",
            "frameSha256": "c5d149cb414eee71ace8f9978c1406925bbdf363a87a5538eec79240f2fc5c25"
          },
          {
            "seconds": 228,
            "observation": "课程规划思维导图与章、节、小节、知识点层级。",
            "frameSha256": "d9a387cba5ad145b22eae281a2dc7eb6bdd390925bb679cee7880e79c1a72870"
          },
          {
            "seconds": 240,
            "observation": "随堂测验示例是引脚、IO命名与复用相关题目。",
            "frameSha256": "915302e10a0dbc07f3fae2561381755e2d664e7bf4ea80fc9e1c4f85f08d3104"
          },
          {
            "seconds": 300,
            "observation": "双轮小车前方有超声波模块与显示屏，作为作品目标展示。",
            "frameSha256": "ee24bc9e08054a9a093495ec9f72ec76a764fc5a7fb045cb92bcb0751a0d1c87"
          },
          {
            "seconds": 410,
            "observation": "参考资料页面列出ADC、GPIO、TIM、USART等主题文件。",
            "frameSha256": "5425aaa5797b65d630a5beefbf973e8026b4feaa05bb626a983badeaa6b377d7"
          },
          {
            "seconds": 426,
            "observation": "参考资料画面仍在，配合ASR确认参考手册的重要性说明。",
            "frameSha256": "67d0872d82573e9720a9f3fe3a6881b4bb830322fc1496a283a9cf65ddeedc78"
          }
        ]
      },
      "learningNotes": "## 00:00—01:14 · 这套教程怎样形成\n\n[从课程开场观看](https://www.bilibili.com/video/BV11X4y1j7si/?p=1&t=0)。本节是课程介绍，不进行外设初始化或程序下载。讲者先回顾自己学习 STM32 时遇到的困难，再说明这套教程经历过多次重录；画面中的时间线依次标出 2021/12 的第一版寒假训练营、2022/04 的第二版 HAL 库教程、2022/11 的第三版最小系统板，以及 2023/03 的第四版双足平衡小车。\n\n这些是视频介绍中的版本背景。后面的八项特点，解释的是作者打算怎样组织教学；不能仅凭本节的预告，认定当前已公开的 54 节已经包含完整小车制作过程。\n\n## 01:15—01:59 · 零基础入门仍然需要 C 语言\n\n[对应画面与说明](https://www.bilibili.com/video/BV11X4y1j7si/?p=1&t=75)。作者所说的“零基础”，指没有 STM32 的学习基础：从芯片名称、分类和基本概念出发，再逐渐深入各个内部模块。\n\n这里紧接着补充了一项前提：应当先掌握 C 语言。02:00 附近的课件明确写着“预备知识：C语言”。因此，本套课并不是在同一时间从 C 语法和单片机知识两端起步；如果连基本 C 程序都难以读懂，应先补这部分基础，再跟随视频编程。\n\n## 02:00—02:41 · 面包板与最小系统板的教学方式\n\n[对应教学硬件](https://www.bilibili.com/video/BV11X4y1j7si/?p=1&t=120)。画面展示最小系统板插在面包板上，周围连接按键、LED 和显示模块。作者强调电路由学习者自己搭建，目的有两点：一是知道每条连接为何存在，理解模块与主控的关系；二是练习以后开发时经常需要的简单硬件搭建。\n\n本段展示的是教学方式和器材形态，没有逐项给出这张示意实物图的接线表，也没有要求在本节复现其全部连线。具体实验仍应以随后对应课程的接线说明为准。\n\n## 02:42—03:14 · 代码现场输入与课后重做\n\n[对应编程方式](https://www.bilibili.com/video/BV11X4y1j7si/?p=1&t=162)。作者说明会边输入代码边解释思路，而不是只展示已经完成的程序。画面用一个按键工程的编辑窗口说明这种方式；本节并未逐行讲解其中的按键程序，因此这里不把这张示例图扩写成一节按键实验。\n\n本段给出的学习动作是：跟随输入，再在课后独立重做一遍。跟敲用于理解当时的思路，重做用于检查自己是否真正记住了编程步骤。\n\n## 03:15—03:59 · 按“章、节、小节、知识点”组织学习\n\n[对应目录结构图](https://www.bilibili.com/video/BV11X4y1j7si/?p=1&t=195)。讲者用一张思维导图说明课程的层级：章下面分节，节下面分小节，小节最终落实到具体知识点。教学与复习都围绕这些知识点进行。\n\n画面展示的是课程规划目录，而不是当前站点每个视频分集的一一对照表。这里的实际学习方法是：初学时逐项理解；复习时沿目录检查，发现某个知识点遗忘，再回到对应位置重看。不能把本段图中的旧规划直接当作当前视频顺序，替换本站已经按分集整理的目录。\n\n## 04:00—04:41 · 随堂测试与当时的直播安排\n\n[对应随堂测试示例](https://www.bilibili.com/video/BV11X4y1j7si/?p=1&t=240)。画面展示了一页引脚相关的测试题，涉及特殊引脚、普通 IO 命名、编号、复用与冲突处理，用来说明课后如何检查听课效果。本节没有展开这些题目的技术答案；它们是测试形式的示例。\n\n作者建议遇到测试题先暂停、自己作答，再看讲解。随后介绍直播答疑，并提到录制时暂定的周一至周五晚间八点安排。这个时间属于原视频当时的说明，不能作为现在仍然有效的直播承诺。\n\n## 04:42—06:29 · 为什么把双足平衡小车设为目标\n\n[对应作品与动机](https://www.bilibili.com/video/BV11X4y1j7si/?p=1&t=282)。作者展示双轮小车实物，前面可见超声波模块和显示屏；前面版本时间线将目标称作“双足平衡小车”。本段讨论的是从单个外设实验走向综合项目：能照着点亮灯或运行模块，并不自然等于会组织一个完整项目。\n\n作者希望通过复杂作品，促使学习者回头检查早先理解不牢的知识，并学习程序组织与解决问题的思路。这是课程目标的说明；本节没有讲小车的接线、控制算法或完整源码，也没有完成小车调试。\n\n## 06:30—07:36 · 用参考资料支撑后续学习\n\n[对应参考资料展示](https://www.bilibili.com/video/BV11X4y1j7si/?p=1&t=390)。最后一项特点介绍课程编写所参考的 ST 资料。画面列出按 ADC、GPIO、TIM、USART 等主题整理的文件，讲者特别强调 STM32F1 参考手册是编程的重要依据。\n\n对学习者而言，这段的可执行要点是：随后遇到寄存器、外设工作方式或参数含义，要学会回到相关手册查证。作者对资料阅读量及课程正确性的自我评价属于其介绍，本站不把这段自评当作对所有讲解与示例代码的独立验证。视频至此结束课程介绍，下一节开始安装开发环境。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 455.59875,
        "asrSegments": 198,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "ff200b33036737c56c0bbd1e845737a4f8f4c7976fbd4f72dfbb4ffcf52d4401",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 2,
      "phase": "prep",
      "title": "1.1 [准备] 安装开发环境",
      "duration": 1289,
      "summary": "按原片顺序安装Keil5、STM32F1支持包和ARMCC5，连接ST-Link，以现成PC13短闪工程完成编译、下载和复位观察。",
      "notes": "本节先用流水灯示例认识完整开发流程，再安装MDK-ARM V5.37和STM32F1支持包。原片09:40—11:59包含非官方授权工具演示，正文仅记录位置，不复现绕过授权或关闭防护步骤。后半段放置并登记ARMCC5，连接ST-Link，打开test工程，解决首次编译的编译器缺失报错；最终编译、下载及校验成功，并按复位展示PC13板载灯短闪。",
      "points": [
        "流水灯示范串起思路、电路、程序、编译与下载流程",
        "MDK-ARM V5.37与STM32F1 DFP2.4.0分别安装",
        "放置ARMCC后仍需在Keil中登记并选择编译器5",
        "按GND、SWCLK、SWDIO、3.3V名称连接ST-Link",
        "现成测试工程驱动PC13，低电平后Delay(50)、高电平后Delay(500)",
        "编译零错误零警告，下载校验通过后按复位观察板载LED短闪"
      ],
      "cid": 26461668950,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 60,
            "observation": "面包板上多颗外接LED与最小系统板，作为流水灯开发流程示范。",
            "frameSha256": "e20c8706c6102017dc6412bfc93af276e2c6580761073743bf3d6ca619cea7b5"
          },
          {
            "seconds": 120,
            "observation": "Keil template工程尚为空main，作者说明直接粘贴演示程序。",
            "frameSha256": "603852fe15e321bb51767a3987d3d4958c8adaffd24773bd75301f9850357690"
          },
          {
            "seconds": 300,
            "observation": "课件展示课程百度网盘地址与公开提取码3kvt，和作者评论区入口一致。",
            "frameSha256": "890da69d0eee43e11d536d6a93ccf9a8cd6eb065603b559f83082df44d4d0523"
          },
          {
            "seconds": 480,
            "observation": "MDK-ARM V5.37的Core与Pack目录分别为D:/Keil5/Core和D:/Keil5/Pack。",
            "frameSha256": "5ddd964eaf2a2fecc5da94ad010f1bcaa7c69fcdea1545e9712d18e34b60dab1"
          },
          {
            "seconds": 600,
            "observation": "安装包文件名含MDK537.EXE、Keil.STM32F1xx_DFP.2.4.0.pack、ARMCC.zip。",
            "frameSha256": "44e5c53cb658248b9f0caee0c41eaa7e5e294a72b24c62ebc0e678a06cbe2ecb"
          },
          {
            "seconds": 720,
            "observation": "授权演示后回到空Keil工作区；后续进入ARMCC准备。",
            "frameSha256": "e39b452c468b5bbe73cc66139f186b28a0c54e978c92bc8234eb0a96b2f6bc43"
          },
          {
            "seconds": 780,
            "observation": "面包板、最小系统板与ST-Link实物。",
            "frameSha256": "8ec274d3f04c2537242e2a8d43d28a9135ec8cbbe5f28a847c81a1143450f926"
          },
          {
            "seconds": 902,
            "observation": "ST-Link外壳丝印可见SWCLK、SWDIO、GND与3.3V，板端四线已连接。",
            "frameSha256": "c58d2a70c8f3047df61f5c8ef5a0186a90c3cb8b61a09613f67b057330739aa3"
          },
          {
            "seconds": 960,
            "observation": "板端调试针丝印从画面上到下为GND、SWCLK、SWIO、3.3。",
            "frameSha256": "db9e22c989b0f8397f402a8701f08a234c24f737ad0bfc3165f12fb9f4087af5"
          },
          {
            "seconds": 1020,
            "observation": "测试main全段可见：GPIOC PC13开漏2MHz，循环写RESET Delay(50)，写SET Delay(500)。",
            "frameSha256": "8c1b3496721554151798e131c16de93d47c29ffde2aa4f096b837917c869cf0f"
          },
          {
            "seconds": 1080,
            "observation": "选择ARMCC Base Folder时，后方编译输出是编译器不可用导致Build aborted。",
            "frameSha256": "d9caed0cf8a54c17adf33ffd414256607a67917a677eb2dd27a9924a2cbfb965"
          },
          {
            "seconds": 1140,
            "observation": "Manage Project Items窗口及Folders/Extensions选项卡；后方仍有编译器缺失输出。",
            "frameSha256": "e6ffbd5c004b8d4dd324271a0fc3392a8ee1b2bf52dc05e356d200f1042a23fa"
          },
          {
            "seconds": 1160,
            "observation": "编译输出为0 Error(s),0 Warning(s)，目标文件生成。",
            "frameSha256": "9323e3d4c19c0744025687b21b703932e5840b8a4b05258aeda8d72f78ae9b86"
          },
          {
            "seconds": 1200,
            "observation": "点击LOAD下载按钮，显示目标AXF路径。",
            "frameSha256": "142df886c0bbe5922d190d1a94df82febd8adc35641465ab7dae94ff5d62f928"
          },
          {
            "seconds": 1260,
            "observation": "Erase Done、Programming Done、Verify OK、Flash Load finished全部可见，右侧为复位操作与板子。",
            "frameSha256": "6a29eb5d2fcd978e20ea899f7a9aee0511587d366c99ae7c8690a31791c8c241"
          }
        ]
      },
      "learningNotes": "## 00:00—04:48 · 先用流水灯认识开发流程\n\n[从开发流程示例观看](https://www.bilibili.com/video/BV11X4y1j7si/?p=2&t=0)。本节的目标是安装并测试开发环境。作者先用面包板上的多颗 LED 演示流水灯，把开发过程连起来：先想清楚希望哪些引脚依次控制哪些灯，再搭电路，随后在 Keil 中写程序、编译，最后经 ST-Link 将程序下载到 STM32。\n\n这里要分清几个动作。编辑器里的 C 代码便于人阅读；编译把它转换成目标芯片可以执行的程序。下载则是把电脑上生成的程序写入芯片，两者不是同一个按钮。画面中的 ST-Link 一端连接电脑 USB，另一端连接最小系统板的调试接口。示例下载后，作者按复位键，展示流水灯运行。\n\n视频在此明确说，初学者还不了解程序写法，所以直接粘贴示例，不逐行编写流水灯。先记住“思路→电路→程序→编译→下载→观察结果”这条流程即可；后面安装结束时使用的是另一份板载 LED 测试工程。\n\n## 04:49—06:26 · 找到课程资料中的安装包\n\n[对应资料入口](https://www.bilibili.com/video/BV11X4y1j7si/?p=2&t=289)。05:00 的课件给出课程百度网盘链接和提取码。作者演示进入“标准库”资料，下载 Keil5 安装包文件夹；之后还操作了当时百度网盘客户端的“优化速率”设置，下载后再关闭该选项。\n\n这一段是原视频录制时的下载演示。本站已核对画面中的资料入口，但没有取得其中整套原工程；因此后面的程序摘录依据视频画面整理，不会声称已下载并验证作者全部源码。客户端界面与下载状态也应以自己的实际情况为准。\n\n## 06:27—09:39 · 安装 MDK 与 STM32F1 支持包\n\n[对应安装向导](https://www.bilibili.com/video/BV11X4y1j7si/?p=2&t=387)。原片使用的安装程序是 `MDK537.EXE`，向导标题为 MDK-ARM V5.37。作者将两个目录分别设为 `D:\\Keil5\\Core` 和 `D:\\Keil5\\Pack`：Core 存放软件本体，Pack 存放芯片支持包。这个目录划分有助于理解后面为什么要到 Core 下寻找编译器。\n\n按向导完成安装后，视频取消查看更新日志，关闭自动出现的 Pack Installer。随后单独运行 `Keil.STM32F1xx_DFP.2.4.0.pack`，安装 STM32F1 的设备支持。软件本体与芯片支持包分别解决“有开发工具”和“工具认识目标芯片”的问题，不能只安装前者便认为准备全部完成。\n\n视频提醒安装过程中可能暂时看不到向导窗口，需要等待其完成。这里的版本号记录原片环境，用于对照工程；它不是对目前最新版本的声明。\n\n## 09:40—11:59 · 原片的授权演示位置\n\n[对应原视频段落](https://www.bilibili.com/video/BV11X4y1j7si/?p=2&t=580)。这一段进入 License Management，并使用了非官方注册工具。它属于原视频实际顺序的一部分。本站记录其位置与内容性质，不复现注册码、CID、注册工具操作或关闭安全防护的步骤，也不将这些作为跟做本节的要求。使用开发工具时应完成自己所持许可对应的正常授权。\n\n## 12:00—13:07 · 将 ARMCC 放到安装目录\n\n[对应编译器文件准备](https://www.bilibili.com/video/BV11X4y1j7si/?p=2&t=720)。安装包画面中的压缩文件是 `ARMCC.zip`。作者先解压，特别检查目录没有多嵌套一层同名 ARMCC 文件夹，然后将 ARMCC 目录复制到 Keil 本体下的 `Core\\ARM` 中。\n\n这时完成的是编译器文件的放置，尚未完成 Keil 中的编译器登记。视频稍后故意继续打开测试工程，在首次编译报错后补上设置；所以现在不应把“复制完目录”当作所有编译设置已经完成。\n\n## 13:08—16:00 · 面包板和 ST-Link 的连接\n\n[对应实物连接](https://www.bilibili.com/video/BV11X4y1j7si/?p=2&t=788)。作者拿出面包板、STM32 最小系统板和 ST-Link，将最小系统板跨面包板中间区域插入。演示中还处理了新面包板插孔较紧的问题，并检查排针是否插到底。\n\n随后连接调试器。原则是认丝印上的信号名称，把同名信号相接。16:00 原尺寸画面中，板端四针从画面上方到下方为 `GND`、`SWCLK`、`SWIO`、`3.3`；ST-Link 端也显示相应的 SWCLK、SWDIO、GND 与 3.3V 标记。板上 `SWIO` 与调试器上的 `SWDIO` 指向这条调试数据线。不要按导线颜色推断信号，因为颜色只反映作者这一次的接线选择。\n\n这个测试使用 ST-Link 接口供电和下载，随后通过 ST-Link 的 USB 插头连接电脑。此处并不是把最小系统板自身的 USB 接口作为程序下载口来演示。\n\n## 16:01—17:23 · 打开准备好的测试工程，观察首次编译失败\n\n[对应测试工程](https://www.bilibili.com/video/BV11X4y1j7si/?p=2&t=961)。作者解压 `test.rar`，双击里面的 `.uvprojx` 工程文件。工程已经有源文件、启动文件、标准外设库和 `my_lib` 等分组。本节用它验证环境，并没有从空文件重新建立所有工程配置。\n\n17:00 的代码画面可见 `GPIOC`、`GPIO_Pin_13`、开漏输出和一个长短不同的延时循环。下面是画面中测试主程序的摘录，省略头文件和 `main` 外壳；需要原工程中的库与 `Delay` 实现，不能独立编译：\n\n```c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOC, ENABLE);\nGPIO_InitTypeDef GPIO_InitStruct = {0};\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_13;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_Out_OD;\nGPIO_InitStruct.GPIO_Speed = GPIO_Speed_2MHz;\nGPIO_Init(GPIOC, &GPIO_InitStruct);\nwhile (1)\n{\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_RESET);\n    Delay(50);\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET);\n    Delay(500);\n}\n```\n\n对照代码可以看到，准备部分先启用 GPIOC 时钟，再配置 PC13；循环中先写低电平、短延时，再写高电平、长延时。这与结尾展示的板载灯“短闪”对应。这里是为便于读懂测试目标所做的代码对照，原视频本段主要操作编译环境，没有展开 GPIO 原理或 `Delay` 内部实现。\n\n首次点击编译按钮后，输出窗口提示目标使用的 ARM Compiler 版本不可用。这个错误出现在真正完成源代码编译之前，要先处理编译器配置，而不是随意修改 LED 程序。\n\n## 17:24—19:32 · 登记并选择 ARM Compiler 5\n\n[对应编译器配置](https://www.bilibili.com/video/BV11X4y1j7si/?p=2&t=1044)。作者打开 Manage Project Items，转到 `Folders/Extensions`，进入编译器版本管理，选择先前放入 `Core\\ARM` 的 ARMCC 目录，将它加入列表；再通过设置默认编译器的界面选用版本 5。\n\n这里的两个动作分别是“让 Keil 找得到这个编译器”和“让工程使用对应版本”。视频中返回对话框重复确认设置后，再次编译。19:20 的输出已显示 `0 Error(s), 0 Warning(s)`，并生成目标程序，说明这一轮编译成功。编译通过验证的是工具能处理工程，尚未证明程序已经写进板子。\n\n## 19:33—21:28 · 下载、检查输出，再按复位观察短闪\n\n[对应下载与实物验收](https://www.bilibili.com/video/BV11X4y1j7si/?p=2&t=1173)。接入 ST-Link 的 USB 后，作者观察板上的电源指示，再点击工具栏的 `LOAD`。输出先后出现：\n\n- `Erase Done.`：擦除旧内容完成。\n- `Programming Done.`：本次写入完成。\n- `Verify OK.`：写入内容校验通过。\n- `Flash Load finished`：下载流程结束。\n\n画面在 21:00 附近可见这些结果。之后作者按下板上的复位键，展示板载 LED 短闪，以此作为本次安装测试的终点。这里应同时核对编译输出、下载输出和实际灯效：只看到零编译错误，还不能跳过下载与实物观察。\n\n复位是原片这次下载后的操作，不代表 STM32 的所有下载配置都必须手动按键才能启动。到这里，本节完成的是开发工具与现成测试工程的基本联通验证；后续课程再逐步解释芯片与外设。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1288.2986875,
        "asrSegments": 394,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "434cccfce666f07e33fcf08ee987d3e7f6184a8004c93e14aae2dc46e943ef07",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "未取得test.rar原工程及Delay函数实现，代码摘录不宣称独立可编译，也不擅定Delay参数的时间单位。"
        ]
      }
    },
    {
      "page": 3,
      "phase": "prep",
      "title": "1.1 [准备] STM32 的基本信息",
      "duration": 864,
      "summary": "从名称和智能手环例子认识STM32，读取F103C8T6型号，并区分DS5319数据手册与RM0008参考手册。",
      "notes": "原片依次解释STM32名称，用智能手环各模块说明主控的管理作用，再通过手机型号类比拆解STM32F103C8T6。规格表确认48引脚、64KB Flash、LQFP封装与−40～85℃。最后介绍DS5319与RM0008及其不同用途，并演示课程资料下载。",
      "points": [
        "STM32拆为ST、Microcontroller与32位",
        "智能手环中STM32协调MAX30100、MPU6050、DS3231、DS18B20和TFT",
        "从芯片丝印定位F103及C8T6四项规格",
        "C为48引脚，8为64KB Flash，T为LQFP，6为−40～85℃",
        "数据手册查规格参数，参考手册查模块原理和编程依据"
      ],
      "cid": 26054889101,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 60,
            "observation": "STM32名称拆分为ST、Micro Controller、32位。",
            "frameSha256": "fcf16de3886f1dd3ecde024e06abc61e0e3fd61c6b00c61e45f82f3910b532f7"
          },
          {
            "seconds": 180,
            "observation": "智能手环图标明MAX30100、MPU6050、DS3231、DS18B20及TFT显示器。",
            "frameSha256": "aefc35bbce86103dda39855bd68d0f1511f144d0464506853927211364404784"
          },
          {
            "seconds": 259,
            "observation": "作者转动最小系统板，示意读取芯片表面文字。",
            "frameSha256": "243383d6b331292ab7e618159577eb7c1e4c1531f16d616664bb17f8ff5a756f"
          },
          {
            "seconds": 300,
            "observation": "手机品牌/类型/系列/规格类比STM32F103C8T6的拆分。",
            "frameSha256": "f63dee5616582a2fed386f5cad1a99106c67b203d9da9186ee7ad427d727de62"
          },
          {
            "seconds": 432,
            "observation": "系列树展开F系列与F1，并定位F103；图是录制时的简化分类。",
            "frameSha256": "27aa639ae226566084d25da458cd8e4519e0ab7eaf8904eec6470d4f9c6b72fe"
          },
          {
            "seconds": 480,
            "observation": "C8T6表列C=48引脚、8=64Kbytes、T=LQFP、6=−40～85℃。",
            "frameSha256": "7fb33a030a654a8fb182914b442602ea8014bdcba7ddfb1fcabf2568a30e77bc"
          },
          {
            "seconds": 540,
            "observation": "圈出8，对应64Kbytes Flash。",
            "frameSha256": "9d5b98b56f7446fb32d1b83f6b2ba15d774756992763ab42da03b4f038a83da0"
          },
          {
            "seconds": 604,
            "observation": "圈出T及LQFP侧面伸出引脚的封装图。",
            "frameSha256": "c436903163708b73a6c88b1d9a71e03be7a8f6f9dcbb1d88787ec0bee348fb26"
          },
          {
            "seconds": 660,
            "observation": "温度栏明确6=−40～85℃、7=−40～105℃。",
            "frameSha256": "aa4bc5a6304992f8bcefe3d239d90405a66ff62dbd11f7e5a6011594a787a766"
          },
          {
            "seconds": 777,
            "observation": "DS5319数据手册与RM0008中英文参考手册，分别类比规格书与说明书。",
            "frameSha256": "c031f922231cf1a90c077cab643de3a2d70af5256ca73cd18b30f475de25701e"
          },
          {
            "seconds": 834,
            "observation": "课程百度网盘标准库目录，为最后资料下载演示。",
            "frameSha256": "fb9761104cb1b3a9b08c54178eb6e2f3fee20e1172d11c9c662ed82bc8dc8b48"
          }
        ]
      },
      "learningNotes": "## 00:00—00:51 · 本节的四个问题\n\n[从本节目录观看](https://www.bilibili.com/video/BV11X4y1j7si/?p=3&t=0)。开场介绍课程器材与资料后，作者列出四个部分：STM32 是什么；它在电子设计中承担什么角色；芯片型号各部分的含义；学习时使用哪些参考资料。下面按这个顺序展开，本节以概念和实物识别为主。\n\n## 00:52—02:18 · 把 STM32 拆开理解\n\n[对应名称解释](https://www.bilibili.com/video/BV11X4y1j7si/?p=3&t=52)。课件把 `STM32` 分成 `ST`、`M`、`32` 三部分：ST 指 STMicroelectronics，即意法半导体；M 对应 Microcontroller，即微控制器或单片机；32 表示 32 位。作者还介绍了 ST 名称与意大利 SGS、法国 Thomson 的历史联系。\n\n组合起来，本段要建立的是：STM32 是一类由 ST 公司生产的 32 位单片机的统称，不能仅凭“STM32”几个字就确定具体芯片有哪些引脚、存储容量或外设。要知道这些差异，还需要继续读取完整型号。\n\n## 02:19—04:02 · 用智能手环理解主控的作用\n\n[对应智能手环示意图](https://www.bilibili.com/video/BV11X4y1j7si/?p=3&t=139)。作者借用一个同学制作的智能手环设计说明各模块如何协作。03:00 的图中标出了：\n\n- `MAX30100`：血氧、心率传感器。\n- `MPU6050`：陀螺仪与加速度传感器，示例用于计步。\n- `DS3231`：实时时钟模块。\n- `DS18B20`：温度传感器。\n- TFT 显示器：显示测得的数据与时间。\n\n这些模块各有分工，中间的 STM32 通过程序组织它们工作。图左的 `int main(void) { … }` 只是“把 C 程序交给主控执行”的示意，未给出这些模块的通信代码。作者由此把 STM32 比作整个设计的管理者或控制器：读入模块信息、安排处理，再控制显示等输出。\n\n这一例子的重点是系统分工。传感器负责获得相应信息，主控通过程序协调各部分；不能把所有测量功能都理解成 STM32 芯片自身已经内置。\n\n## 04:03—06:36 · 从芯片丝印读完整型号\n\n[对应实物与型号拆分](https://www.bilibili.com/video/BV11X4y1j7si/?p=3&t=243)。作者转动最小系统板，让芯片表面的激光文字更容易看清，再将前两行拼成 `STM32F103C8T6`。\n\n为了说明长型号不是一串随意的字符，视频先拿“iPhone 15、蓝色、128G”作类比，把品牌、产品类型、产品系列和规格分开。这里的手机选择属于录制时举例，不应把原片中的“最新款”沿用为现在的产品判断。\n\n回到芯片，课件对应地把 `ST` 看作品牌，`M32` 看作 32 位微控制器产品类型，`F103` 指向产品系列，`C8T6` 进一步限定规格。这样阅读，就能把通用家族名称和这一颗具体器件区分开。\n\n## 06:37—07:40 · 在系列图中定位 F103\n\n[对应系列树](https://www.bilibili.com/video/BV11X4y1j7si/?p=3&t=397)。原片用一张简化系列图列出 G、F、H、L、W，分别标为通用、主流、高性能、低功耗和无线；再展开 F 系列，找到 F1 下的 F103。图中把 F1 对应到 Cortex-M3 内核与 72MHz 主频。\n\n学习时先抓住本课要用的定位：课程选择的是 F103，而不是任意 STM32 型号。这张图是原片的分类概括，不是现行完整产品目录；其中的主频也不能代替工程实际时钟配置。后续计算外设时钟时，还要依据当时的时钟设置。\n\n## 07:41—09:20 · C 表示 48 引脚，8 表示 64KB Flash\n\n[对应 C8T6 规格表](https://www.bilibili.com/video/BV11X4y1j7si/?p=3&t=461)。作者将 `C8T6` 拆成四项：引脚数量、Flash 容量、封装类型与工作温度。\n\n第一项 `C` 在表中对应 48 引脚。视频随后用芯片实物数一边的 12 个引脚，四边合计 `12 × 4 = 48`。表中还给出 T、R、V、Z 等其他引脚数量编码，用于说明相同家族可以有不同规格；本课板上这颗读的是 C。\n\n第二项 `8` 对应 `64 Kbytes` Flash。作者用电脑硬盘作比喻，说明 Flash 用来保存程序等内容。这里的 64KB 是本型号的 Flash 容量，不是 RAM 容量，也不是由“32位”三个字推算出来的。识别容量要回到这一位编码。\n\n## 09:21—12:02 · T 与 6 分别限定封装和温度\n\n[对应封装与温度说明](https://www.bilibili.com/video/BV11X4y1j7si/?p=3&t=561)。第三项 `T` 对应 `LQFP`。视频对比了侧边有引脚伸出的 LQFP 图与底部排列焊球的 BGA 图，用来解释同样是芯片，外形和焊接连接形式也可能不同。本课芯片选的是 LQFP 封装。\n\n最后一项 `6` 对应工作温度 `−40～85℃`；课件同时列出 `7` 为 `−40～105℃`。08:00、10:04、11:00 的规格表均清晰写着下限 −40℃，结尾型号复述也回到这个值。自动识别文本中个别句子出现“−45”，正文按实际规格表核对为 −40℃。\n\n至此，将型号重新合起来读：`STM32F103C8T6` 是本课使用的 F103 芯片，48 引脚、64KB Flash、LQFP 封装、−40～85℃ 温度等级。不同后缀限定不同器件，后续查图和资料时要与完整型号对应。\n\n## 12:03—14:23 · 数据手册与参考手册各解决什么问题\n\n[对应两类手册](https://www.bilibili.com/video/BV11X4y1j7si/?p=3&t=723)。原片展示 `DS5319` 数据手册，以及 `RM0008` 参考手册的中文、英文版本。12:57 的画面明确写出两者的区别：\n\n- 数据手册类似规格书，给出产品性能指标与参数。想知道芯片允许的工作条件、引脚和器件规格，应从这类资料查起。\n- 参考手册类似使用说明书，解释内部模块的原理、使用方式与编程所依据的寄存器等内容。\n\n最后，作者演示从课程百度网盘进入“标准库”下第一章第一节，找到这三份文件。这里是两类手册、三个文件：参考手册有中英文两份，不是三种用途不同的手册。本节结束时应能辨认自己芯片的完整型号，并知道查规格与查模块使用方式分别应找哪一类资料。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 863.0826875,
        "asrSegments": 275,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "f8257a9535d70570e036a05957d18b9f394332174fde182fa4d8590762f742c8",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 4,
      "phase": "prep",
      "title": "1.2 [准备] STM32 的引脚分布",
      "duration": 614,
      "summary": "从DS5319找到LQFP48引脚图，辨认物理编号、电源/复位/备用电池/启动脚，再把GPIO组名对应到板上排针。",
      "notes": "本节按查手册、辨编号、识别特殊信号、认识GPIO命名的顺序展开。作者用LQFP48图与最小系统板实物对照，解释电源、复位、备用电池和BOOT0的作用，并沿图寻找PA0到PA15，强调信号编号与物理位置的区别。",
      "points": [
        "C与T确定使用LQFP48引脚分布图",
        "顶面圆点旁是一脚，物理脚号逆时针递增",
        "VDD/VSS供电、NRST复位、VBAT备用电池、BOOT0启动选择",
        "普通IO按组字母和0～15组内编号命名",
        "同组IO并不一定在封装或板上连续排列"
      ],
      "cid": 26054951039,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 61,
            "observation": "桌面选中DS5319数据手册，旁边有RM0008。",
            "frameSha256": "b671cd663af1f2881f7f526a049d00bcfadf9696216931799148cfe1866b894c"
          },
          {
            "seconds": 120,
            "observation": "型号复习图明确C8T6对应48引脚和LQFP封装。",
            "frameSha256": "a7fe118c7078c715125c696f0ec4812b82d19fc1466a4700df643c648ba19ecd"
          },
          {
            "seconds": 180,
            "observation": "八脚封装示意：圆点旁1号脚，图示逆时针递增。",
            "frameSha256": "311d32014d4045497dc344e56ea4a5d21730a99bfe282f665ab4f2e5cf9be051"
          },
          {
            "seconds": 184,
            "observation": "八脚编号示意完整显示1～8及逆时针箭头。",
            "frameSha256": "e0e4225dd49771b78a3aa6cd679f50305b7e8f7ad3b344cb3819881948cbd63d"
          },
          {
            "seconds": 240,
            "observation": "实物芯片与笔尖用于核对48脚编号位置。",
            "frameSha256": "0a667c063d08174ae89ef16ea07bebdfa2185830b0648b084bd883311da60fc8"
          },
          {
            "seconds": 307,
            "observation": "NMOS图标栅极G、漏极D、源极S，并列出VDD/VSS名称来源。",
            "frameSha256": "fe1fd377bdaf78b5dd8e825fe3185f9612a522babd3c3fc69ab9d2b6ebd9aa49"
          },
          {
            "seconds": 360,
            "observation": "LQFP48彩色引脚图列VDD/VSS、NRST、VBAT、BOOT0及各脚号。",
            "frameSha256": "e2e55ad9df9d4201c05ae841927d82f6b8de86b70fac7b400100d150642ae0f0"
          },
          {
            "seconds": 429,
            "observation": "最小系统板翻面展示，配合ASR指出未装备用电池。",
            "frameSha256": "be9723ac234c98ca4aca61e504c373fae890a7c7d655f5c881352c474fa83152"
          },
          {
            "seconds": 480,
            "observation": "特殊引脚图仍在，BOOT0与VBAT等位置已经圈出。",
            "frameSha256": "4d049fe95c6f48a65fdce1f7988899effca6c369a50e4cca663374766c950350"
          },
          {
            "seconds": 552,
            "observation": "GPIO命名图列A0～15、B0～15、C13～15、D0～1。",
            "frameSha256": "c06f8da05979d3b6823571bfe7ba391c15e113ab946dac9b3c9331a613a84d56"
          },
          {
            "seconds": 584,
            "observation": "引脚图沿PA0到PA15逐项划线，显示同组跨多个边。",
            "frameSha256": "6e239165a611c0fe975e81c6b0c1cf396d9d1494172fbc9166bb2a55ccc2b127"
          },
          {
            "seconds": 600,
            "observation": "最小系统板正面排针丝印A0、A1等，作者逐脚定位。",
            "frameSha256": "98192bb0a24adf5c960af79b708f4c4102595e734dacab9f01ad27bed101c8e4"
          }
        ]
      },
      "learningNotes": "## 00:00—02:34 · 先按型号找到 LQFP48 引脚图\n\n[从查找手册开始](https://www.bilibili.com/video/BV11X4y1j7si/?p=4&t=0)。作者先列出四件事：找引脚分布图、认识封装引脚编号、了解特殊功能引脚、学习普通 IO 的命名。引脚分布是器件规格的一部分，所以本节打开的是上节介绍的 `DS5319` 数据手册。\n\n在目录中找到 `Pinouts and pin description` 后，会看到不同封装各有自己的图。选择前先回到完整型号：`STM32F103C8T6` 中的 C 对应 48 引脚，T 对应 LQFP，因此应找 `LQFP48`。视频据此定位第八张图；不要拿同一手册里的 100 引脚图直接给这颗芯片接线。\n\n这一过程把上节的型号识别实际用了一次：先确定具体器件与封装，再使用对应的引脚图，不能只在搜索结果中看到“STM32F103”就默认适合。\n\n## 02:35—04:01 · 圆点附近是一脚，再沿逆时针编号\n\n[对应编号示意](https://www.bilibili.com/video/BV11X4y1j7si/?p=4&t=155)。作者先画一个八脚封装，找到表面的圆点标志，将其旁边的脚作为 1 号，再按图示逆时针依次编号。随后把同样的规则应用到 LQFP48 图和最小系统板上的实际芯片。\n\n对于这颗 48 脚芯片，每一边有 12 脚：第一边 1～12，第二边 13～24，第三边 25～36，最后一边 37～48。实际查找时，先确认圆点与观察方向，再沿顺序数。03:00 的示意图是在看芯片顶面的方向下说明，不能将板背面的视觉方向直接套入。\n\n这里说的是封装的物理脚号。后面看到的 `PA0`、`PA1` 等名称是另一层信号命名；例如图中 `PA0` 位于物理 10 号脚，“0”并不表示它是封装的第零脚。\n\n## 04:02—05:54 · 电源脚，以及 VDD、VSS 名称的由来\n\n[对应特殊引脚图](https://www.bilibili.com/video/BV11X4y1j7si/?p=4&t=242)。作者把引脚图上一部分位置着色，先介绍供电相关的 VDD、VSS：本课板子使用 3.3V 供电，VDD 对应电源正，VSS 对应地，也就是这里的 0V。画面中的多组供电脚表示这些位置都是芯片连接的一部分。\n\n接着视频解释为何这里使用 VDD、VSS，而不是在入门电路中常见的 VCC、GND。05:07 的图画出 NMOS 的三个端：G 为栅极 Gate，D 为漏极 Drain，S 为源极 Source；课件将 VDD、VSS 的名称分别联系到漏极和源极。这一段是名称的辅助解释。回到本实验的接线含义，VSS 应接地，不能因为图上写了源极“负端”就另接一个负电源。\n\n## 05:55—07:15 · NRST 与 VBAT 在板上对应什么\n\n[对应复位和备用电源](https://www.bilibili.com/video/BV11X4y1j7si/?p=4&t=355)。NRST 是复位引脚。作者拿起最小系统板，指出 RESET 按键，说明按下后程序从头开始执行。结合上一节操作，可以理解下载后的复位按键并不是普通用户输入按键，而是连接到复位信号的专门按键。\n\n之后介绍 VBAT。它用于连接备用电池；主供电断开时，备用电源用于维持芯片的一部分功能。视频明确说的是“一部分功能”，不能理解成没有主电源后整个应用程序照常运行。画面还指出这块最小系统板没有直接安装纽扣电池，需要使用引出的 VBAT 位置外接。\n\n本节在此解释信号的用途，没有进行实际电池接线与掉电测试；跟随画面找到位置并理解用途即可。\n\n## 07:16—07:58 · BOOT0 与黄色跳帽\n\n[对应启动模式选择](https://www.bilibili.com/video/BV11X4y1j7si/?p=4&t=436)。接着介绍 `BOOT0`，它参与启动模式选择。作者指出最小系统板上的两个黄色跳帽，其中一个接到 BOOT0，通过移动跳帽，使这个信号接低电平或高电平。\n\n跟看这一段时，应把板上跳帽与原理图里的 BOOT0 名称对应起来。视频在这里着重说明这个引脚的角色与板上位置，并未展开所有启动组合或下载方式；本节也没有要求为了普通 IO 实验随意切换跳帽。\n\n## 07:59—09:09 · 普通 IO 用“组字母＋组内编号”命名\n\n[对应 GPIO 分组图](https://www.bilibili.com/video/BV11X4y1j7si/?p=4&t=479)。介绍完前面的特殊信号后，作者开始讲 IO 名称。用 A、B、C、D 等字母分组，每组的组内编号从 0 开始，最多到 15。因此 `PA0` 表示 GPIOA 组的 0 号 IO，`PB15` 表示 GPIOB 组的 15 号 IO。\n\n本课 LQFP48 图中列出的名称是：GPIOA 为 PA0～PA15，GPIOB 为 PB0～PB15；GPIOC 显示 PC13、PC14、PC15，GPIOD 显示 PD0、PD1。这里“每组最多 16 个”并不表示这颗 48 脚器件的每一组都完整引出了 16 个脚。\n\n图上 `PC14-OSC32_IN`、`PD0-OSC_IN` 等还带有其他功能标注。本段建立的是 GPIO 的命名方法；具体实验能否把某脚用作普通 IO，仍应结合它当时承担的功能判断。\n\n## 09:10—10:14 · 同一组 IO 在封装和板上不一定排在一起\n\n[对应逐脚定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=4&t=550)。作者沿 LQFP48 图寻找 PA0～PA15。PA0～PA2 在图的左下侧，PA3～PA7 沿下侧延续；PA8～PA13 转到右侧，PA14、PA15 又位于上侧。组内编号连续，并不代表封装上的物理位置连续。\n\n最后镜头回到最小系统板，按照板上的 A0、A1 等丝印逐项寻找。芯片封装的脚号、GPIO 信号名、板上排针位置需要通过图与丝印相互对应；以后说“连接 PA0”，应去寻找 A0/PA0 这个信号，而不是从板端任意数第零根排针。至此，本节完成了从型号、手册引脚图到实物位置的对应。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 612.928,
        "asrSegments": 232,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "23f6f450b23debe7fac09f500ece58b6ce6dc4fb5086ee8c40fb8792a2356184",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "未取得作者原课件文件，手册定位和丝印说明据原画面核对；本节未做备用电池或启动模式组合实验。"
        ]
      }
    },
    {
      "page": 5,
      "phase": "gpio",
      "title": "2.1 [GPIO] 4 种输出模式",
      "duration": 1973,
      "summary": "从人体类比和GPIO分组讲到输入输出方向，再沿RM0008输出电路解释推挽、开漏、通用与复用，并用PC13闪灯及PA9串口例对照。",
      "notes": "本节先解释GPIO与CPU的关系及A/B/C/D分组，再借LED和开关区分输出与输入。后半段从RM0008的IO结构图提取输出路径，分析推挽两管交替工作、开漏关闭PMOS及写1高阻，最后用PA9直接点灯和串口发送Hello说明通用与复用。PC13原画面程序交替Bit_SET/Bit_RESET，各Delay(1000)。",
      "points": [
        "CPU与片上外设、GPIO模块与IO引脚的角色",
        "GPIO八种模式按输入输出划分，本节集中四种输出",
        "输出写寄存器影响引脚，输入读寄存器判断外部电平",
        "推挽PMOS/NMOS交替驱动高低电平，开漏写1是高阻释放",
        "通用由CPU写输出位，复用由其他片上外设控制",
        "PA9点灯与发送Hello的串口波形作为两种控制来源的例子"
      ],
      "cid": 26335970481,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 120,
            "observation": "人体类比与芯片简化框图，标CPU和片上外设。",
            "frameSha256": "e94de72aec27e902a0422e24f19c8574bf0f0acc40eecc92d40755929c3ed6b6"
          },
          {
            "seconds": 480,
            "observation": "最小系统板与芯片IO，配合工作模式针对单引脚的说明。",
            "frameSha256": "819737c19351071c681afde385cad4331faa474bc562b23588cc54ffcfe5d0c8"
          },
          {
            "seconds": 540,
            "observation": "八种模式列表，输出侧通用/复用×推挽/开漏，输入侧上拉/下拉/浮空/模拟。",
            "frameSha256": "73cb6417c0484e9701c3c6d7a7abeb5f51c0bc73d1738ae1a4bb17cbf2593ddb"
          },
          {
            "seconds": 600,
            "observation": "输入输出箭头与对应数据寄存器示意。",
            "frameSha256": "be2af19d236bd9aabe6d21d95be4b2c6b6ee1b282e6ec1488f2a1a6cdfed836a"
          },
          {
            "seconds": 720,
            "observation": "输出经电阻和LED到地的高电平点灯示意。",
            "frameSha256": "03bcf65890461670cd99c77e8e19f13b730a99af3034347dcfa4d3d2d226bda6"
          },
          {
            "seconds": 750,
            "observation": "实际PC13代码：Out_OD、2MHz、先Bit_SET Delay(1000)，再Bit_RESET Delay(1000)；有板载灯和下载成功输出。",
            "frameSha256": "e4005df88636a1f4fd659a86b8e7a49133b1d4ec6b23cb40e81545905261138d"
          },
          {
            "seconds": 780,
            "observation": "输入数据寄存器的外部向内箭头。",
            "frameSha256": "177361805fe11eaba5d1172eeef8ab6ebe99dbffcaea567bd4528d6fc185e033"
          },
          {
            "seconds": 900,
            "observation": "输出列表圈出复用项，说明两种分类维度。",
            "frameSha256": "ed309a47985c65dd09aa055b26603f5aaae29ca6b10e7a6acba3e3a66328d700"
          },
          {
            "seconds": 1020,
            "observation": "RM0008图13 IO端口位基本结构，含输入与输出驱动器、MOS和保护结构。",
            "frameSha256": "5f4c74c03a61076c337fa61738281a3c4b165c1a3d271a8f84922bfff3f92a47"
          },
          {
            "seconds": 1140,
            "observation": "简化输出路径：CPU数据位/其他外设、选择器、输出控制、PMOS/NMOS与引脚。",
            "frameSha256": "60ec026c47cc1c3f57bbdd80ad34f974e461001b9e87e7a85dc7b364a33b7a5e"
          },
          {
            "seconds": 1260,
            "observation": "推挽Push/Pull字样，写0低、写1高两状态图。",
            "frameSha256": "917c96a229f0d8de641cf5e13f4fd70c189cb791ab23d57242d0ade2bd9e0987"
          },
          {
            "seconds": 1320,
            "observation": "推挽图继续显示PMOS/NMOS两个连接状态。",
            "frameSha256": "b7074f003d0622e90b11626293b35aac94bbb8b4887c4a2055b7facc9b63726b"
          },
          {
            "seconds": 1500,
            "observation": "MOS三端标G Gate栅极、D Drain漏极、S Source源极。",
            "frameSha256": "c4707743cc7958645a7694b494df5201f2c6df2e59036161b7aa51ca89d28744"
          },
          {
            "seconds": 1620,
            "observation": "开漏写0低、写1高阻；上PMOS保持关闭。",
            "frameSha256": "eef975e7cfd95b58c5282f4979451c2115214c4a0f8e447349d3fb51bbc45dbc"
          },
          {
            "seconds": 1680,
            "observation": "四种输出按通用/复用和推挽/开漏组合排列。",
            "frameSha256": "7934655e50aeaf50f28f67f24a718239b9c96b4b06d5838e86942b4b802aa471"
          },
          {
            "seconds": 1740,
            "observation": "通用选择CPU数据路径，复用选择其他片上外设路径。",
            "frameSha256": "6a86050a78eff4ebc1a8f62988c2870555bedf19088036300229f52dfac8637c"
          },
          {
            "seconds": 1860,
            "observation": "回顾框图，GPIO及其他外设的位置。",
            "frameSha256": "e3174276862eb1e29663f0c1d82722fb46118f93993469ee1f85eb993417e597"
          },
          {
            "seconds": 1920,
            "observation": "PA9通用CPU直接控制和复用串口发送Hello波形的对照。",
            "frameSha256": "a774cac015f26d70c4bfc367ce7a9f4f01ebfb63aaf98210dfdcb8f5973b465c"
          }
        ]
      },
      "learningNotes": "## 00:00—04:17 · 从“脑与手”理解 GPIO\n\n[从 GPIO 的角色开始](https://www.bilibili.com/video/BV11X4y1j7si/?p=5&t=0)。作者先用人体作类比：大脑负责思考，眼睛、手脚等完成不同任务。随后打开 DS5319 的内部结构框图，再简化到课件上：Cortex-M3 内核执行指令，GPIO、定时器、串口等片上外设负责各自的硬件任务。\n\n本章所学的 GPIO 就是其中一种片上外设，负责控制 IO 引脚。作者把它比作手，把引脚比作手指，用来说明 CPU 要控制外部电路时，需要经过相应的硬件模块。GPIO 是芯片里面的控制模块，最小系统板上的排针则把芯片信号引出来，两者处在不同层次。\n\n## 04:18—07:12 · 四个 GPIO 组各控制哪些引脚\n\n[对应端口分组](https://www.bilibili.com/video/BV11X4y1j7si/?p=5&t=258)。视频回顾 LQFP48 的命名，将 GPIOA 对应 PA0～PA15，GPIOB 对应 PB0～PB15，GPIOC 对应 PC13～PC15，GPIOD 对应 PD0、PD1。四个模块分别管理各组信号，后续编程时必须同时知道“哪个组”和“组内哪一脚”。\n\n作者继续沿用手的类比，说明一个 GPIO 组可以管理多个 IO。这里建立的是端口与引脚的对应关系；有些信号在板上承担晶振或调试等用途，实际使用还要看具体配置。本课不能仅凭组名存在，就把所有引脚同时当成空闲 IO。\n\n## 07:13—09:49 · 工作模式决定一根引脚怎样使用\n\n[对应八种模式](https://www.bilibili.com/video/BV11X4y1j7si/?p=5&t=433)。作者先解释“工作模式”针对的是一根 IO 的使用方式：有时向外给电平，有时接收外部信号，因此需要不同内部连接。\n\n课件把八种模式分成两边。输出侧是通用输出推挽、通用输出开漏、复用输出推挽、复用输出开漏；输入侧列上拉、下拉、浮空与模拟模式。本节只详细讲输出侧，但先用输入与输出的区别铺垫。\n\n## 09:50—12:48 · 输出：把程序写入的值变成引脚状态\n\n[对应输出数据寄存器与 LED](https://www.bilibili.com/video/BV11X4y1j7si/?p=5&t=590)。课件用横线和方框表示一根引脚，以箭头区分信号方向。输出的箭头从芯片内部走向外部，CPU 通过写输出数据寄存器的相关位，影响引脚状态。\n\n作者画了 IO 经电阻、LED 接地的示意图：在这种接法中，输出高电平使 LED 点亮，低电平使它熄灭。随后切到真实工程与板子，展示用交替写 1、写 0 让板载灯闪烁。12:30 原画面中循环部分如下，保留了实际接口和顺序；这是工程摘录，GPIO 时钟、PC13 初始化及 `Delay` 实现都在其余工程中：\n\n```c\nGPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET);   // 写1\nDelay(1000);\nGPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_RESET); // 写0\nDelay(1000);\n```\n\n同一画面可见 PC13 采用 `GPIO_Mode_Out_OD`、`GPIO_Speed_2MHz`。本段借程序说明“写位影响输出”，开漏写 1 的电气含义要等后文再解释；LED 哪个电平亮还取决于其具体接法，不能把前一张示意图的灯效机械套给所有板子。\n\n## 12:49—14:33 · 输入：从外部电平读出 0 或 1\n\n[对应输入数据寄存器](https://www.bilibili.com/video/BV11X4y1j7si/?p=5&t=769)。输入的方向相反：外部信号经引脚进入芯片，输入数据寄存器的位反映被识别到的电平，程序再读这个位。\n\n作者假设一个开关电路在断开时给低电平、闭合时给高电平，于是读到 0 或 1 就能判断开关状态。这里的重点是先明确电路产生的电平，再解释读数；“按下必为 1”并不是所有按钮接线的通用规律。本节只用这个假设例子说明输入，后面的章节再深入具体输入模式。\n\n## 14:34—19:58 · 将四个名称拆成两条分类线\n\n[对应输出电路结构](https://www.bilibili.com/video/BV11X4y1j7si/?p=5&t=874)。四个名称可以沿两条线理解：一条是“通用或复用”，另一条是“推挽或开漏”。两种选择组合，就得到四种输出模式。\n\n为了说明原理，视频打开 RM0008 的通用与复用功能章节，找到 IO 端口位的基本结构。17:00 的完整图上，右端是引脚，上半部是输入路径，下半部是输出路径。作者提取输出部分，整理为：CPU 写入的输出数据位和其他片上外设的信号，先经过选择路径，再到输出控制电路，最后控制 PMOS、NMOS，与引脚连接。\n\n读图时沿信号走一遍：谁提供控制信号，选择哪一路，输出控制怎样驱动两个管子，最终引脚与 VDD 或 VSS 如何连接。这张图用于解释基本原理，省略了本节不分析的电路；实际不同引脚的全部能力仍要查器件资料。\n\n## 19:59—24:30 · 推挽：两个输出管交替工作\n\n[对应推挽分析](https://www.bilibili.com/video/BV11X4y1j7si/?p=5&t=1199)。作者把 PMOS、NMOS 当作两个开关来理解。上面的 PMOS 连接到 VDD，下面的 NMOS 连接到 VSS，引脚在两者中间。Push 表示可以向外提供电流，Pull 表示可以从外部吸入电流。\n\n视频依次分析两个状态：\n\n- 写 0：下方 NMOS 导通、上方 PMOS 关闭，引脚连接低电位，得到低电平。\n- 写 1：上方 PMOS 导通、下方 NMOS 关闭，引脚连接高电位，得到高电平。\n\n课件以本课 3.3V 电源和 0V 地作理想开关说明。作者专门指出两个输出管不能同时导通，否则会形成 VDD 到 VSS 的直通路径。理解推挽的关键是能主动驱动高、低两种状态，以及两个管子交替工作；不是记住一个名字就结束。\n\n## 24:31—28:39 · 开漏：写 0 拉低，写 1 释放\n\n[对应开漏与高阻](https://www.bilibili.com/video/BV11X4y1j7si/?p=5&t=1471)。视频先回顾 MOS 管的栅极 G、漏极 D、源极 S，再回到输出电路。开漏状态下，上面的 PMOS 始终关闭，只由下方 NMOS 决定是否把引脚接向 VSS。\n\n写 0 时，下方 NMOS 导通，引脚被拉低，这与前面的低电平结果相同。写 1 时，下方 NMOS 也关闭，内部输出级不再把引脚接到 VDD 或 VSS，于是成为高阻状态。27:00 的原图清楚把写 1 一侧标为“高阻”，不是“高”。因此，开漏写 1 表示释放引脚，不能仅凭寄存器里是 1 就断定外部测到 3.3V。\n\n原片用理想开路、电流近于零和等效电阻很大解释高阻。这里应把它理解为输出级不主动驱动的电路状态；实际引脚仍有允许电压、漏电与保护结构等限制，不能把理想图扩展为可以施加任意电压。至此，推挽和开漏的区别已经落实到两个管子的不同工作方式。\n\n## 28:40—30:08 · 通用：CPU 写输出数据来控制\n\n[对应通用路径](https://www.bilibili.com/video/BV11X4y1j7si/?p=5&t=1720)。接下来不再改变末端输出管的类型，而是看控制信号从哪里来。在通用模式下，CPU 通过程序改输出数据寄存器，再经输出控制电路影响引脚。\n\n作者用 PA9 接 LED 举例：程序直接决定相关输出位取 0 还是 1，因而控制图中 LED 的状态。29:00 的路径图用蓝线标出了 CPU 到输出控制的上方路线。这说明“通用”描述控制来源，和“推挽/开漏”描述末端电路不是同一问题。\n\n## 30:09—32:52 · 复用：交给其他片上外设产生信号\n\n[对应 PA9 串口例子](https://www.bilibili.com/video/BV11X4y1j7si/?p=5&t=1809)。作者回顾芯片里除了 GPIO 还有串口等外设。某个外设需要经引脚输出信号时，控制来源切到这一路，由外设按照自身功能产生电平变化。\n\n视频仍使用 PA9 作对照：通用例子是 CPU 直接控制 LED；复用例子则把 PA9 交给串口模块，用来输出发送 `Hello` 所需的波形。32:00 原图把 CPU、串口模块、PA9 和右侧波形连在一起，本节没有继续录入串口初始化程序。\n\n最终再读四个名称：先问由 CPU 的输出数据位控制，还是由其他外设控制；再问末端是推挽驱动，还是开漏释放/拉低。两个问题分别回答，四种模式的含义就能对应到原图中的具体路径和开关状态。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1972.3093125,
        "asrSegments": 756,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "584faa6e6001ca81e0b026ba5c8c98466749a43d7ac06a5599d3983ecad89616",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "未取得PC13演示原工程和Delay实现，代码仅据12:30画面摘录；本节的理想开关图不能用来推断引脚任意电压/电流能力。"
        ]
      }
    },
    {
      "page": 6,
      "phase": "gpio",
      "title": "2.2 [GPIO] IO 的最大输出速度",
      "duration": 625,
      "summary": "沿推挽切换、边沿时间、三档速度与三个选档例子理解输出能力，并对原片USB类比补充适用范围。",
      "notes": "原片先解释最大输出速度，再用理想与实际波形讲边沿时间和平台压缩，接着以课件数字演示2、10、50MHz档位，给出选满足要求的较低档位原则。末尾依次举LED、TLE5012B的SSC时序、USB全速例。正文保留顺序，同时注明IO时间条件及USB例不可直接转为GPIO配置要求。",
      "points": [
        "实际波形有上升、下降和有效电平保持时间",
        "频率提高会压缩平台，边沿能力影响可用切换速度",
        "原片用125/250/125ns等图示解释2/10/50MHz档位",
        "选满足时序需求的较低档位，兼顾耗电与EMI",
        "LED与TLE5012B SSC接口时序作为选档例子",
        "USB12Mbit/s例只保留为原片类比，实际DM/DP由USB收发器接管"
      ],
      "cid": 26054951429,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 60,
            "observation": "最大输出速度定义与推挽管、交替写0/1波形。",
            "frameSha256": "0be4c0bf28c75b55a91fc3f620ea503432fc7a30ba3aa329531d7228b50348c1"
          },
          {
            "seconds": 180,
            "observation": "理想垂直边沿与实际上升/保持/下降时间对照。",
            "frameSha256": "db1631872c98addf9d0264ba05eb262e27028ae69f23caaa00804b38941904da"
          },
          {
            "seconds": 300,
            "observation": "从慢到快三组波形，平台缩短直至近乎没有。",
            "frameSha256": "a8d09b4ace22ed06e1110977e773dc0e1fa16d116c39d3e38babea6f17e6ceb8"
          },
          {
            "seconds": 360,
            "observation": "回到四部分目录，进入实际速度选择。",
            "frameSha256": "bdc46c7b4e7d30d29ab2575e75ea4e1ed142be03167992171d4d5812ec182093"
          },
          {
            "seconds": 420,
            "observation": "课件三档分别写125+250+125ns、25+50+25ns、5+10+5ns及2/10/50MHz。",
            "frameSha256": "bfdee364c05585d724ae1ac0ef9bc5d4780bedd5cc9d34418e7475ab3c6b1e28"
          },
          {
            "seconds": 480,
            "observation": "选满足要求的最小值，过陡边沿增加耗电和EMI。",
            "frameSha256": "598ee1a6641e412d88fffcc0d688eee9bd246a31f2a7ab0f56bf0ae1a82a9093"
          },
          {
            "seconds": 540,
            "observation": "LED例标低速2MHz，旁边写人眼频率、50Hz与100Hz。",
            "frameSha256": "4f18c4c5736c02706149ad29c3dfd9fbd29c8bae94a934081306dc159c4d55bc"
          },
          {
            "seconds": 570,
            "observation": "TLE5012B与SSC push-pull timing specification，baud rate典型8Mbit/s，标中速10MHz。",
            "frameSha256": "286a590d56a7fef95763419fe3f9fa3b93a0a8999165d88d7d96ece5cfd1a0ae"
          },
          {
            "seconds": 600,
            "observation": "板子USB接口，文字USB2.0 FS12Mbps和高速50MHz，属于需校注的原片例子。",
            "frameSha256": "9fdccf71014ca0d0c51598b51b5ff640048b229e1492284ce982b514ea321c70"
          }
        ]
      },
      "learningNotes": "## 00:00—02:29 · 最大输出速度与实际切换速度\n\n[从推挽输出回顾开始](https://www.bilibili.com/video/BV11X4y1j7si/?p=6&t=0)。作者假定引脚采用推挽输出，向输出位交替写 1、写 0，得到高低交替的波形。再设想逐渐加快写入，观察到某个程度后波形无法保持预期形状，用这个过程引出“IO 的最大输出速度”。\n\n片中每秒 10 次、100 次、1000 次到 10 万次，是说明概念的假设过程，并不是对这颗 STM32 实测得到的速度上限。读本节时先分清实际信号切换得多快，以及 GPIO 选定了哪一种输出能力档位；选择高档位本身不会自动产生相应频率的波形。\n\n## 02:30—03:44 · 上升时间、下降时间与保持时间\n\n[对应理想和实际波形](https://www.bilibili.com/video/BV11X4y1j7si/?p=6&t=150)。左图把电平转换画成垂直线，右图则有斜坡：从低到高需要上升时间，从高到低需要下降时间，中间达到有效电平并维持的部分称为保持时间。\n\n这张图解释的是波形的时间构成。程序写入一个值，不表示外部电压在同一瞬间完成跳变；观察实际通信信号时，除了看写入或时钟的频率，还要看边沿和有效电平持续多久。片中用 0V 与 3.3V 简化说明，工程上的上升下降测量条件应查数据手册。\n\n## 03:45—05:53 · 加快切换为何会挤掉有效电平\n\n[对应三组波形](https://www.bilibili.com/video/BV11X4y1j7si/?p=6&t=225)。作者保持边沿斜坡的形状，逐渐缩短相邻写入之间的间隔。第一组有较长平台，第二组平台缩短，第三组几乎只剩上升、下降，说明有效电平保持时间被边沿占去。\n\n随后作者把边沿画得更陡，在同样较短的间隔中重新留出平台。由此得到本段的结论：上升下降越快，越有条件支持快速切换。这是在解释输出速度档位与边沿能力的联系，没有在这一节连接示波器、测出某块板子的实际边沿。\n\n## 05:54—07:22 · 读懂 2、10、50MHz 三档示意\n\n[对应三档计算图](https://www.bilibili.com/video/BV11X4y1j7si/?p=6&t=354)。课件依次给出低速、中速、高速，并用下列数值演示时间与频率的关系：\n\n- 低速图：`125ns + 250ns + 125ns = 500ns`，倒数为 `2MHz`。\n- 中速图：`25ns + 50ns + 25ns = 100ns`，倒数为 `10MHz`。\n- 高速图：`5ns + 10ns + 5ns = 20ns`，倒数为 `50MHz`。\n\n这些是原片图上的计算。理解其用途，是将“更短边沿允许更快信号”与档位名称联系起来；不要把图中的保持时间当成每种应用都必须照填的独立寄存器参数。本节没有编写设置该参数的 C 代码。\n\n### 本站校注：这些时间带有测试条件\n\nST 的数据手册把 IO 交流特性与负载电容、供电电压等条件一起列出。例如高速档的 50MHz 和 5ns 并不是所有负载下无条件固定成立的数值。实际设计应连同条件读取，而不只记住课件上的三个数字。[ST：STM32F103x8/xB 数据手册，IO AC characteristics](https://www.st.com/resource/en/datasheet/stm32f103rb.pdf)。\n\n## 07:23—08:12 · 选择满足要求的较低档位\n\n[对应选档原则](https://www.bilibili.com/video/BV11X4y1j7si/?p=6&t=443)。原片提出“选取满足要求的最小值”，先举需要约 8MHz 信号的假设，选 10MHz 档。理由是边沿过陡会增加耗电，并引入更多电磁干扰，因而不应见到 50MHz 就一律选择最高档。\n\n这里的原则依赖具体信号与负载满足要求。初学者可以先从接口所需的时序出发，选有足够能力的档位，再结合实际电路核对；档位数字不是替接口配置好的通信速率。\n\n## 08:13—09:02 · LED 例子：低速档已经充足\n\n[对应 LED 举例](https://www.bilibili.com/video/BV11X4y1j7si/?p=6&t=493)。作者先谈人眼观察灯光闪烁，再说明普通可见 LED 闪烁的需求远低于 2MHz，所以使用低速档已足够。画面中以 100Hz 与 200 万 Hz 的数量级差距说明这一点。\n\n原片还写了一个具体的人眼临界闪烁频率，但这不是决定所有灯光是否可感知闪烁的固定界线。本段用于选档的结论只需保留：普通慢速点灯不需要为了“速度更高”而选择最陡的输出边沿。\n\n## 09:03—09:39 · 编码器例子：从接口时序看需求\n\n[对应 TLE5012B 资料图](https://www.bilibili.com/video/BV11X4y1j7si/?p=6&t=543)。作者展示英飞凌 TLE5012B。09:30 原画面的表头实际为 `SSC push-pull timing specification`，其中 SSC baud rate 一栏给出 8.0Mbit/s；作者据此举例选择中速 10MHz。\n\n读这段时应保留画面真实名称 SSC，避免将自动识别的“SPS”当接口名。视频的做法是用外部器件的时序需求帮助理解选档，并未在本节编写该编码器的通信程序或验证其全部时序参数。\n\n## 09:40—10:25 · 原片 USB 举例与适用范围\n\n[对应最后一个例子](https://www.bilibili.com/video/BV11X4y1j7si/?p=6&t=580)。原片最后指向最小系统板的 USB 接口，以 USB 全速 12Mbit/s 作类比，并在课件上写“高速50MHz”，然后结束本节。\n\n### 本站校注：不要按这个类比配置 USB 引脚\n\n这里必须分开记录“视频用来比较数量级的例子”和“实际 USB 配置”。STM32F103 的 USB_DM、USB_DP 在 USB 使能后自动连接到内部 USB 收发器；不能把 12Mbit/s 简单等同于普通 GPIO 的 12MHz 方波需求，再据此要求设置 GPIO 输出档位。依据是 RM0008 的 USB 引脚配置表；本地所核英文版第 167 页表 29 给出了这个自动连接说明。[ST：RM0008 参考手册](https://www.st.com/resource/en/reference_manual/cd00171190.pdf)。本节没有实现 USB 通信，其核心学习结果仍是理解边沿时间与输出档位，并按实际需求选档。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 624.5333125,
        "asrSegments": 190,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "f5ce7662d3132b6dafe9ba16aa507da65951a95a360fe4829bc3abb16d05ddf6",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "USB例技术适用范围已据本地官方RM0008英文版第167页表29校核并在正文就地说明；未实际执行本节任何示波器或接口测试。"
        ]
      }
    },
    {
      "page": 7,
      "phase": "gpio",
      "title": "2.3 [GPIO] LED 闪灯实验",
      "duration": 2554,
      "summary": "按LED电路、原理图、BlinkyLED模板、GPIO初始化、单步写位到100ms循环的原顺序完成PC13板载灯实验讲解。",
      "notes": "原片先讲LED和两种驱动接法，读取最小系统板D2/R5/PC13原理图，再从模板建立BlinkyLED，开启GPIOC时钟并介绍GPIO接口。实际初始化为PC13通用开漏2MHz，先单步验证写1灭灯写0亮灯，之后加入两次100ms延时循环，下载并复位展示闪烁。正文保留录入与测试先后，并纠正LED压降不可统一取0.7V。",
      "points": [
        "D2阳极接VCC3V3，阴极经R5 510Ω接PC13，低电平亮",
        "template.rar重命名BlinkyLED，先开启GPIOC APB2时钟",
        "GPIO_InitTypeDef配置Pin13、Out_OD、2MHz并传地址",
        "GPIO_WriteBit先单步SET灭灯、RESET亮灯，输出读数不同于输入电平",
        "注释单步测试，循环RESET Delay100 SET Delay100，Delay单位在本节明确为毫秒",
        "编译下载Verify OK，复位观察蓝灯闪烁；原片0.7V算例另作技术校注"
      ],
      "cid": 26351173764,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 180,
            "observation": "串联LED回路、阳极阴极、510Ω及2～10mA说明。",
            "frameSha256": "f0fed0402a4e90616c66bab478cd3363d0ed0aac746eedbc947a3ba0d809b2c5"
          },
          {
            "seconds": 240,
            "observation": "片中原算例确实写LED0.7V、电阻2.6V；需要校注不能泛化。",
            "frameSha256": "ee1659e062559306fb08924624bb9fef011ca5d5e5cd58a6eaeda61020a8b66c"
          },
          {
            "seconds": 360,
            "observation": "阳极侧开关接VDD或VSS的第一种接法。",
            "frameSha256": "6fa0809c1163b7acac597342091379f8e9ad64d72763be2e7cbcab3d7df060f3"
          },
          {
            "seconds": 540,
            "observation": "第二种开漏阴极接法，写0低、写1高阻。",
            "frameSha256": "5addb679c66723bbd7ef21e172d74ec51d56397c96344da5c0eb68511978c0fa"
          },
          {
            "seconds": 660,
            "observation": "最小系统板原理图，D1电源灯与D2 PC13灯分开。",
            "frameSha256": "91dba6cc27caf1849c15625fbdb2b1de987221b083972809283392f9ab020eaf"
          },
          {
            "seconds": 720,
            "observation": "D2、R5 510Ω和PC13放大图，对照推挽与开漏。",
            "frameSha256": "bd96e7b684ac4949e9f6a1021327ca0d9e02818bde36a1778ceeeaf7c0813314"
          },
          {
            "seconds": 900,
            "observation": "BlinkyLED目录内uvoptx、uvprojx及库文件夹。",
            "frameSha256": "5ba25614e7a63858ee9a69739cea52d26c9a73baeea7eddcd8d46e27120f5f67"
          },
          {
            "seconds": 1080,
            "observation": "从空main/while模板开始输入时钟代码。",
            "frameSha256": "812a3938aa2c13dd8134082cdc35ebae6da416eed3fc22ec754b1185b2f93ba3"
          },
          {
            "seconds": 1140,
            "observation": "桌面GPIO编程接口汇总PDF。",
            "frameSha256": "5eebbc98fbba8fe9639bbc49ab69fdcc40eb0994d5238c27aa7abe4e0e0d40c1"
          },
          {
            "seconds": 1560,
            "observation": "GPIO_Init原型与三个成员及八种模式名称。",
            "frameSha256": "a189912ff2adae52e03f5bc876b8d8fdf69c1f59335b58d1a96b5dfdda6c5f4b"
          },
          {
            "seconds": 1680,
            "observation": "初始化结构体中Pin与Speed字段的课件说明。",
            "frameSha256": "88c39e01d30a7bce3fc0b1a17f44bc0e0ef75ea7732172c58b910ab229ee9a2e"
          },
          {
            "seconds": 1800,
            "observation": "Out_OD与本片D2原理图的选择说明。",
            "frameSha256": "5abb82868bdcb2a791270f52b4386f85afe65c8c14aada1b4a83676d2a6416a0"
          },
          {
            "seconds": 1860,
            "observation": "IDE正在录入GPIO_InitStruct，Pin13和Out_OD已出现，Speed尚在输入。",
            "frameSha256": "4896185c3a73a39b6c5cc23cd7ac589b1c040cce2606367110642442225ad5b8"
          },
          {
            "seconds": 1980,
            "observation": "GPIO_WriteBit三参数及RESET0、SET1示例。",
            "frameSha256": "0f917a39a4e36992ce600056e7969531438e33019c2329d7da4bba9f9a3f0521"
          },
          {
            "seconds": 2100,
            "observation": "IDE完整初始化与先SET后RESET的测试两行，Out_OD 2MHz明确可见。",
            "frameSha256": "3611c2ed4de6b3dbf5ec7e875ad46b02c8ea8533aa99fea2abd8618d57d05145"
          },
          {
            "seconds": 2160,
            "observation": "进入调试，启动文件与下载成功输出。",
            "frameSha256": "c503c720abfc1a44a8a8f2009d3dd6fba98457ba76c60a9810bf029e6b24ded7"
          },
          {
            "seconds": 2220,
            "observation": "单步PC13写位，蓝灯可见，含输出初始化与SET/RESET行。",
            "frameSha256": "e978dfa648f6038bc03c91b6ee339afff7d40740812d807693aa7b9ad200122a"
          },
          {
            "seconds": 2340,
            "observation": "课件循环RESET/Delay100/SET/Delay100及100ms标注。",
            "frameSha256": "392fdecdbd8f865f31a9542772c647c4d8e0989585e91d37cd3f37e277415b9e"
          },
          {
            "seconds": 2460,
            "observation": "前面单步测试已注释，GPIO初始化保留。",
            "frameSha256": "70f67e911983282a75bf08425bda5f36e0551e6bb80efc68db05ad9a521cade4"
          },
          {
            "seconds": 2470,
            "observation": "IDE循环正在完成，Delay(100)及100ms注释，前测已注释。",
            "frameSha256": "e9c3107e57060302b82c8aba9a617aba33df5afdeef2aa2ef3abaeec0d96a7a2"
          },
          {
            "seconds": 2520,
            "observation": "最终循环RESET Delay100 SET Delay100，以及Programming Done、Verify OK、Flash Load finished。",
            "frameSha256": "0087ab829862d8cef291ed746e6bc449e0c093b3a3794c74d09687884dd72370"
          },
          {
            "seconds": 2540,
            "observation": "复位后实物展示PC13蓝灯和红色电源灯。",
            "frameSha256": "6771aa1e9e4b388b615e279b15fb6796420fdfd309cba56afce2af1920606648"
          }
        ]
      },
      "learningNotes": "## 00:00—01:43 · 找到本次要控制的 PC13 板载灯\n\n[对应实验目标](https://www.bilibili.com/video/BV11X4y1j7si/?p=7&t=0)。本节把前两课的输出模式与输出速度用于一次完整实验。作者指出最小系统板上标有 PC13 的 LED，目标是通过程序反复点亮、熄灭这颗灯，形成闪烁。\n\n板上还有电源指示灯，后面读原理图会把两者分开。看实验现象时要看 PC13 对应的灯，不能把“上电就亮”的电源灯当作自己的程序已经运行。\n\n## 01:44—04:42 · LED、电流与限流电阻\n\n[对应 LED 基础电路](https://www.bilibili.com/video/BV11X4y1j7si/?p=7&t=104)。作者解释 LED 是发光二极管，符号旁的箭头表示发光，电路中区分阳极、阴极。随后画出 3.3V 电源、510Ω 电阻、LED 串联到地的回路，用电阻限制电流。\n\n原片算例把 LED 压降取为 0.7V，得到电阻电压 `3.3−0.7=2.6V`，再算 `2.6/510≈5mA`。04:00 原图确实写有这些数值，因此这里保留它的讲授位置与计算过程。\n\n### 本站校注：LED 压降应按实际器件取值\n\n不能因为 LED 也属于二极管，就一概把它的正向压降当作 0.7V。实际计算应使用该 LED 在相应电流、温度下的正向压降，并考虑 IO 拉低时的压降。可按 `I≈(VDD−VF−VOL)/R` 理解这条回路。[Vishay 的 LED 原理资料](https://www.vishay.com/docs/led_physics.pdf)给出了正向电流与正向电压的关系，可用于理解这个区别；它不是本板 LED 的料号证明。因此，片中约 5mA 是其假设算例的结果，不是板载蓝色 LED 的实测电流；实际主控引脚允许电流也需一起核对。\n\n## 04:43—10:24 · 两种接线，控制动作正好不同\n\n[对应推挽与开漏示意](https://www.bilibili.com/video/BV11X4y1j7si/?p=7&t=283)。视频先把开关放在 LED 阳极一侧，让它在 VDD、VSS 间切换，再替换成推挽 IO。对于该图，输出高电平建立电流回路，输出低电平使 LED 两端失去驱动电压。\n\n第二种接线把 LED 阳极经串联电路接到 VDD，控制开关放在阴极一侧。开关闭合到地时有电流，开关断开时没有回路。作者再用开漏 IO 代替这个开关：写 0 导通下方 NMOS、拉低引脚，灯亮；写 1 关闭 NMOS、释放引脚，灯灭。\n\n作者把两种图分别称为“推挽接法”和“开漏接法”。学习时应沿电流回路理解亮灭，再对应输出状态；名称本身不是对所有可用驱动方式的排他证明。\n\n## 10:25—12:59 · 用最小系统板原理图确定本节方案\n\n[对应 D1、D2 与 R5](https://www.bilibili.com/video/BV11X4y1j7si/?p=7&t=625)。作者打开最小系统板原理图。D1 是电源指示灯；本次要控制的是 D2。12:00 的放大图显示 `VCC3V3 → D2 → R5(510Ω) → PC13`，D2 阳极接电源，阴极侧经电阻到 PC13。\n\n据此，本片选择 PC13 通用输出开漏：低电平形成到地回路，点亮 D2；写 1 释放，熄灭 D2。限流电阻在 LED 前后的位置不同，不改变它与 LED 串联、流过同一回路电流的关系。\n\n## 13:00—18:31 · 从模板建立 BlinkyLED，先开启 GPIOC 时钟\n\n[对应工程与第一行程序](https://www.bilibili.com/video/BV11X4y1j7si/?p=7&t=780)。作者从课程资料找到 `template.rar`，解压到当前文件夹，把模板目录及工程相关文件改名为 `BlinkyLED`，再打开 `.uvprojx`。展开 `user` 后进入 `main.c`，在已有的 `main` 和空 `while(1)` 框架中写程序。\n\n第一步是给 GPIOC 开时钟。PC13 归 GPIOC 管理，使用该外设前先启用它的时钟。视频用供血、心跳作比喻，并说明详细 RCC 时钟树留到后面，此处先会用固定接口：\n\n```c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOC, ENABLE);\n```\n\n第一个参数指定 GPIOC 这项 APB2 外设，第二个参数 `ENABLE` 表示开启。这里启用的是 GPIOC 的外设时钟，不是用这行代码设定 LED 闪烁频率。\n\n## 18:32—25:37 · 先认识接口，再选模式与速度\n\n[对应 GPIO 接口汇总](https://www.bilibili.com/video/BV11X4y1j7si/?p=7&t=1112)。作者打开 GPIO 编程接口汇总，依次介绍 `GPIO_Init`、`GPIO_WriteBit`、`GPIO_ReadOutputDataBit`。初始化用于配置引脚参数；写位接口修改输出数据；读输出数据位接口读回相应输出锁存值。\n\n最后一种读的是输出数据，不应拿它代替读取引脚真实输入电平。视频用“刚写 1，再读输出数据得到 1”的例子解释区别，并说明该接口本节不作为核心操作。\n\n随后确定本实验参数：由 CPU 写输出位，选通用模式；按本片原理图与方案选开漏；慢速点灯用 2MHz 档即可。ASR 在 25:16 附近一度出现“推挽”，但前后说明与随后实际代码都对应 `GPIO_Mode_Out_OD`，此处按实际录入核对。\n\n## 25:38—31:15 · 填好结构体，再交给 GPIO_Init\n\n[对应参数与录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=7&t=1538)。`GPIO_Init` 的第一个参数填端口 GPIOC，第二个参数是初始化结构体的地址。视频把结构体比作菜单：先把引脚、速度、模式填进去，再把这份参数交给函数执行。\n\n35:00 原尺寸 IDE 画面中，初始化完整显示如下；这是 `main` 中的摘录，前提是模板已提供标准外设库，且前面的 GPIOC 时钟已启用：\n\n```c\nGPIO_InitTypeDef GPIO_InitStruct = {0};\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_13;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_Out_OD;\nGPIO_InitStruct.GPIO_Speed = GPIO_Speed_2MHz;\nGPIO_Init(GPIOC, &GPIO_InitStruct);\n```\n\n`GPIO_Pin_13` 指定组内 13 号信号；它是库定义的引脚掩码，不能随手换成十进制数字 13。`Out_OD` 是通用输出开漏，`2MHz` 是输出能力档。`&GPIO_InitStruct` 取得结构体地址，使函数能够读到刚填的参数。视频本次只配置一脚，但接口中的引脚掩码并不意味着只能处理单个引脚。\n\n## 31:16—37:11 · 先单步确认写 1 灭灯、写 0 亮灯\n\n[对应写位与调试](https://www.bilibili.com/video/BV11X4y1j7si/?p=7&t=1876)。`GPIO_WriteBit` 的三个参数是端口、引脚掩码、写入值。作者先输入两行测试代码，实际顺序为先写 1、再写 0：\n\n```c\nGPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET);\nGPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_RESET);\n```\n\n随后在 Debug 选项中选择 ST-Link Debugger，编译后进入调试，单步执行时钟、初始化和两次写位。作者观察到初始化后灯亮，再写 1 灭灯，最后写 0 又亮。这里说的初始化后现象对应当时输出锁存为 0、且已经配置为输出的状态，不应概括成“芯片复位后所有 IO 天生输出低电平”。\n\n单步验证把两件事分开：接口写入值是否符合预期，以及板载灯的实际亮灭是否与接线一致。做完后退出调试，再把一次性写位改成循环。\n\n## 37:12—41:37 · 从亮灭时间图改成循环程序\n\n[对应循环思路](https://www.bilibili.com/video/BV11X4y1j7si/?p=7&t=2232)。课件先画出亮 100ms、灭 100ms 的反复过程，然后使用 `while(1)` 表示持续重复。作者说明 `Delay` 是课程提供的函数，不是标准外设库函数，参数单位为毫秒；使用前要引用 `delay.h`。\n\nIDE 中先注释掉前面两行单步测试，再在循环内录入以下代码。42:00 画面可核实最终循环：\n\n```c\nwhile (1)\n{\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_RESET);\n    Delay(100);\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET);\n    Delay(100);\n}\n```\n\n先拉低，灯亮并保持 100ms；再释放，灯灭并保持 100ms。一个完整亮灭周期约为 200ms，加上很小的程序执行时间。两次延时各决定一个阶段；如果只看其中一次就当作整周期，会把闪烁频率算错。这个片段依赖先前初始化和课程 `Delay` 文件，不能单独替代完整工程。\n\n## 41:38—42:33 · 编译下载，再复位观察闪烁\n\n[对应本次验收](https://www.bilibili.com/video/BV11X4y1j7si/?p=7&t=2498)。最后作者重新编译，点击 LOAD 下载。42:00 的输出窗口可见 `Programming Done.`、`Verify OK.` 与 `Flash Load finished`。随后回到实物按复位，展示 PC13 蓝灯闪烁，42:20 画面可见蓝灯与红色电源灯。\n\n跟做检查可沿本片顺序排查：先确认看的不是电源灯，再核对 GPIOC 时钟、PC13 掩码、开漏模式与写值关系，随后检查 `delay.h` 和函数文件是否已在工程中，最后确认下载校验完成并观察运行。编译通过和实物闪烁分别提供不同阶段的证据，本节的终点是两者都完成。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 2553.5146875,
        "asrSegments": 882,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "c2ff64ca31e5e081c15d276fdcef748d737756e829392e427729c9de36029c16",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "未取得作者BlinkyLED完整工程；程序摘录由原画面核对，未在用户硬件重跑。原片LED0.7V算例不作为实际板载LED参数。"
        ]
      }
    },
    {
      "page": 8,
      "phase": "gpio",
      "title": "2.4 [GPIO] 4 种输入模式",
      "duration": 937,
      "summary": "沿RM0008输入电路图解释保护支路、上拉下拉与浮空，再用高阻输入等效分析默认电平；模拟模式只列出未展开。",
      "notes": "原片先回顾输入方向，再从RM0008提取输入电路，依次讲保护二极管、上拉下拉电阻、悬空读数和施密特触发器。通过外端有电平与断开两种情况，解释上拉提供默认高电平；最后沿图复习。正文对静电假设和无限输入电阻作适用范围说明，未添加原片没有的ADC或DAC实验。",
      "points": [
        "外部电平经判别进入输入数据寄存器，数字输入读高低",
        "从IO结构图分离输入路径和保护二极管示意",
        "上拉、下拉、浮空分别对应两个偏置电阻的接入状态",
        "悬空不稳定，偏置电阻为未驱动输入提供默认高或低",
        "施密特触发器高输入阻抗的理想等效用于解释上拉",
        "模拟模式本节暂略；保护和理想开路说明不等于任意过压可承受"
      ],
      "cid": 26360349837,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 180,
            "observation": "完整IO结构图遮住输出半部，留下输入路径及寄存器。",
            "frameSha256": "f17877130e1e080a88037ca959495f4f7ab78479ccb0d2accb1858aab38bdf57"
          },
          {
            "seconds": 240,
            "observation": "简化图标出施密特触发器、上下拉电阻、保护二极管及四种模式。",
            "frameSha256": "e4483ae3414b01e3fd2e030d09bc3ed7a2e52cf0e3c180c29f2bb13d70b23d92"
          },
          {
            "seconds": 360,
            "observation": "负静电假设的图示，标−10000V而非真实测试。",
            "frameSha256": "b7d2d138c8ba1110ba6134e75eadc78b45c14d91a252985898b1e5908b637614"
          },
          {
            "seconds": 420,
            "observation": "列出四种模式并圈模拟模式，原片暂不深入。",
            "frameSha256": "a5499741cd476e8d7f2fa2dccba8a81232f470dc6c12eba90786dce003a4973b"
          },
          {
            "seconds": 540,
            "observation": "3.3V、0V和悬空三种外部输入条件及不稳定讨论。",
            "frameSha256": "b3fb7bcdeb9e130dc2b31fb65d9e87de51038ee7e3f6e41da19a8ea030d149dc"
          },
          {
            "seconds": 660,
            "observation": "上拉开关闭合，指向施密特输入端解释。",
            "frameSha256": "56035e0a03e96cb56c40f635f203a68fa4e15a09e4239df01d69d3de80c335f6"
          },
          {
            "seconds": 780,
            "observation": "输入端等效高阻及删去不参与推导支路的图示。",
            "frameSha256": "e3499fd5233eaaa7f267f671ef9af156f0c41cf05bbb76dc8305faec00eb8180"
          },
          {
            "seconds": 900,
            "observation": "回顾输入电路与默认电平，各模块标签清晰。",
            "frameSha256": "394e044caa25a5531d783d5b5daa64b19cf2001cfea5811d1da40c258f4573be"
          }
        ]
      },
      "learningNotes": "## 00:00—01:55 · 输入模式是读取外部电平\n\n[从输入方向回顾开始](https://www.bilibili.com/video/BV11X4y1j7si/?p=8&t=0)。作者回顾八种 IO 模式中还有四种输入相关模式。本节从一根引脚、转换电路和输入数据寄存器的示意图出发：外部给低电平，数字输入结果为 0；给高电平，结果为 1。程序通过读取该位来判断外部电平。\n\n这里的数字输入结果只回答被识别为高还是低，不给出一个精确电压值。后面的上拉、下拉和浮空模式围绕这条数字输入路径分析，模拟模式则在本节列出后暂不展开。\n\n## 01:56—04:03 · 从 RM0008 图中提取输入部分\n\n[对应 IO 内部结构图](https://www.bilibili.com/video/BV11X4y1j7si/?p=8&t=116)。作者打开中文 RM0008 中 GPIO 相关章节，遮住上一课已经分析的输出半部，只留下上方的输入路径。随后把它整理成更清楚的横向示意。\n\n从右往左读：外端是 IO 引脚，靠近引脚的是图示保护二极管，中间是带开关的上拉、下拉电阻，再往左是施密特触发器，最终到输入数据寄存器。03:00 与 04:00 原图能互相对照这些位置。因此后面讨论模式时，是改变输入电路的某些连接，不是由软件凭空把外部电压“设成”某个读数。\n\n## 04:04—06:14 · 保护二极管的示意作用\n\n[对应保护结构讲解](https://www.bilibili.com/video/BV11X4y1j7si/?p=8&t=244)。视频用干燥季节人体静电作例子，分别假设正、负静电，沿图示二极管画出电流释放路径。这里解释的是保护结构为什么存在，原片没有真的给芯片施加高压测试。\n\n### 本站校注：保护结构不等于任意过压都安全\n\n片中的“正负一万伏”是讲解静电路径的假设，不能读成该引脚允许施加这样的连续电压，也不能由这张简化图推断所有引脚的保护结构完全相同。实际允许电压、注入电流和静电等级应按目标器件数据手册判断。[ST：STM32F103x8/xB 数据手册](https://www.st.com/resource/en/datasheet/stm32f103rb.pdf)。跟随本段读图即可，不需要人为制造静电。\n\n## 06:15—07:32 · 用电阻开关区分上拉、下拉、浮空\n\n[对应三种连接](https://www.bilibili.com/video/BV11X4y1j7si/?p=8&t=375)。作者把目光移到两个电阻：闭合上方开关，接入上拉电阻，称输入上拉；闭合下方开关，接入下拉电阻，称输入下拉；两个开关都断开，称输入浮空。\n\n课件还列有第四项模拟模式，作者说明留待后面相关外设再学。本节没有配置 ADC，也没有演示模拟电压采样；对于 STM32F103C8T6，更不能从这一句泛指说明就添出芯片自带 DAC 的实验。\n\n## 07:33—10:20 · “默认电平”解决什么问题\n\n[对应悬空例子](https://www.bilibili.com/video/BV11X4y1j7si/?p=8&t=453)。作者依次讨论三种外部条件：输入 3.3V、输入 0V、什么都不连接。前两种可得到确定的高低状态；第三种悬空状态容易受周围干扰影响，读数可能不稳定。\n\n随后以输入上拉说明“默认高电平”：当外部没有驱动这根线时，上拉电阻将它偏置到高电平，使输入结果趋于稳定的 1。如果外部电路有足够的驱动能力将其拉低，仍然可以读到 0。上拉的作用是提供缺省状态，不是禁止外部信号变化。\n\n同理，下拉用于默认低电平。浮空只表示不启用内部这两个偏置电阻；实际电路如果已有外部驱动或电阻，它也不等于一定什么都没接。\n\n## 10:21—13:54 · 用高输入阻抗近似解释上拉原理\n\n[对应施密特触发器与等效图](https://www.bilibili.com/video/BV11X4y1j7si/?p=8&t=621)。作者指出施密特触发器承担高低电平到数字状态的判别。为分析上拉，视频将其输入端理想化为不吸取电流、等效电阻很大的负载。\n\n先看外部有驱动的情况：引脚与判别电路的输入节点相连，外部施加 0V 或 3.3V，内部便按该电平得到相应数字结果。再看外端断开：作者在图中暂时去掉不参与这次推导的保护支路、悬空外线和未接入的下拉支路，只剩上拉电阻与高阻输入。\n\n在这个理想近似下，上拉电阻电流很小，其两端压降也很小，输入节点接近 VDD，于是得到默认高电平。13:00 画面中的“无穷大”是简化等效，不意味着真实引脚没有漏电、没有允许输入范围，也不意味着可以给它任意电压。\n\n这个推导也帮助理解为何叫“弱上拉”：它是在外部未强制驱动时给出偏置。外部驱动能力、外接电阻与内部上拉会共同影响实际节点，不能把“上拉不影响外部结果”理解为对任意电路都绝对成立。\n\n## 13:55—15:37 · 沿原图回顾信号路径\n\n[对应本节回顾](https://www.bilibili.com/video/BV11X4y1j7si/?p=8&t=835)。作者最后仍沿同一张图回顾：保护支路负责保护；上拉或下拉电阻给外端未驱动时提供默认状态；施密特触发器判别电平；输入数据寄存器保存可供程序读取的数字状态。\n\n学完后应能根据电路回答三个问题：外部现在是否有驱动，内部启用了哪一个偏置电阻，数字输入路径最终读到什么。本节没有录入按键程序，下一节再把这些概念放进具体按钮实验。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 936.6186875,
        "asrSegments": 325,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "2d077d8785d6971b23fe6cea0b1881a53828753bb39a6e7534479e11a0dadf40",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 9,
      "phase": "gpio",
      "title": "2.5 [GPIO] 按钮实验",
      "duration": 1233,
      "summary": "先单独验证PA0外接推挽LED，再接PA1上拉按钮，循环读低电平按下状态并控制灯，实现按住亮松开灭。",
      "notes": "视频先回顾两种LED接线并改用PA0外接灯，搭接1kΩ限流支路后写1验证。之后接PA1按钮与地，配置输入上拉，学习GPIO_ReadInputDataBit，在while中按读到0点灯、否则灭灯。最终下载复位展示按住亮松开灭。正文按实际IDE修正课件枚举笔误，并注明ASR异常段和PA1误识别。",
      "points": [
        "PA0经1kΩ到外接LED阳极、阴极接地，推挽写1亮",
        "先GPIOA时钟与PA0 Out_PP2MHz初始化，独立点灯验证接触",
        "PA1按钮接地且输入上拉，松开1按下0",
        "复用GPIO_InitStruct改Pin1和IPU，不必重复开时钟",
        "GPIO_ReadInputDataBit读PA1，分支写PA0 Bit_SET/Bit_RESET",
        "课件GPIO_Pin_SET/RESET是笔误，实际IDE为Bit_SET/RESET；本例无消抖或事件翻转"
      ],
      "cid": 26054951605,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 180,
            "observation": "对比PA0外接LED1kΩ高电平亮与PC13板载低电平亮。",
            "frameSha256": "60d38568b42283e2f78e66abf52fe026bbccf6b7d319cc39c92ce8d10e9113e9"
          },
          {
            "seconds": 240,
            "observation": "LED原理图与面包板接线，PA0经1k到LED后接地。",
            "frameSha256": "e04b2c4fff8da3f5022e9cac7c6b035852cdd5979f982a21339bb2b3c1fa5f03"
          },
          {
            "seconds": 360,
            "observation": "实物LED插入，随后继续电阻与线。",
            "frameSha256": "d50cd82c153e18083346765602e8eb33c61dc55a52caea972e63011631bae3e8"
          },
          {
            "seconds": 600,
            "observation": "课件展示PA0 Out_PP2MHz与写Bit_SET点灯测试。",
            "frameSha256": "105f019e25b3f6ad0689e322cc140c6a39b4dca531b6375754823dab17c752ee"
          },
          {
            "seconds": 620,
            "observation": "IDE完整PA0初始化和Bit_SET测试调用，弥补ASR重复异常段。",
            "frameSha256": "8923f2745e67f3b411966d53013ceb435097ba9b535b3eb7240728b3450585c1"
          },
          {
            "seconds": 660,
            "observation": "进入第二部分按钮接线。",
            "frameSha256": "b2ad9b533ae5f16717fc5388cc8babd9e7cc1c79b92f4a43af82d24c3f46fc65"
          },
          {
            "seconds": 720,
            "observation": "PA1输入上拉接按钮到地，图明示按下0松开1。",
            "frameSha256": "03e514c728fcf020ffa0e89da445a1927bf07f504916857c254bfcbdc145e3a3"
          },
          {
            "seconds": 780,
            "observation": "作者转动按钮检查引脚方向。",
            "frameSha256": "b9d838239cf81e8683aa4d04b20a8b36f588a6e4675a2c78b6bed3c4eeb4e0e4"
          },
          {
            "seconds": 840,
            "observation": "PA1初始化课件划去重复时钟、重复结构体声明与Speed字段。",
            "frameSha256": "4124fa573ca66b3a605ca2e435d63113fa9d0a5252e501ab9444e14c75154e14"
          },
          {
            "seconds": 1020,
            "observation": "IDE先注释PA0常亮测试，再开始PA1初始化。",
            "frameSha256": "5649179ca7272754eb189569602e022ed3f7df54b01e2c4d6c06283db4570f87"
          },
          {
            "seconds": 1080,
            "observation": "GPIO_ReadInputDataBit原型与课件循环；课件误用GPIO_Pin_SET/RESET。",
            "frameSha256": "87630e0b55c45bf0a425b747d7f59e930c63a4252589311e8a06fd54d73d2c4f"
          },
          {
            "seconds": 1140,
            "observation": "课件继续显示上述参数笔误。",
            "frameSha256": "a09babed4688dd75f98bf8cb0a543fed43df4b4e4b35b5f26b64df6180dfba77"
          },
          {
            "seconds": 1200,
            "observation": "IDE最终循环明确Bit_SET/RESET且两分支均写GPIO_Pin_0；PA1为IPU。",
            "frameSha256": "8f9a9774e812adf6b5f575313881770c69b5265f106e57fe85a41fc3ba3f161b"
          },
          {
            "seconds": 1216,
            "observation": "实际手按按钮，外接红LED亮。",
            "frameSha256": "3a6aa3ce910e347995a6eb223094241f40ed931272ac0369347c0871b5e4d3c1"
          }
        ]
      },
      "learningNotes": "## 00:00—03:11 · 本次改用外接 PA0 灯\n\n[对应目标与 LED 接法](https://www.bilibili.com/video/BV11X4y1j7si/?p=9&t=0)。本节目标是按下按钮时外接 LED 亮、松开时灭。作者先回顾上节板载 PC13 的低电平点灯，再换成另一种连接：`PA0 → 1kΩ限流电阻 → LED → GND`。这次 PA0 配置为推挽，写 1 点亮，写 0 熄灭。\n\n03:00 的对比图同时放着两种接法，容易混淆。这里输出控制对象是 PA0 外接灯；PC13 板载灯只是回顾例子。后面程序中 PA1 负责读按钮，PA0 才负责写灯的状态。\n\n## 03:12—06:31 · 接好 ST-Link、限流电阻与 LED\n\n[对应面包板接线](https://www.bilibili.com/video/BV11X4y1j7si/?p=9&t=192)。先按 3.3V、SWIO/SWDIO、SWCLK、GND 的名称对应连接 ST-Link，再把最小系统板插到面包板上。作者从红、蓝 LED 中任选一颗，并取一只 1kΩ 电阻。\n\n片中这颗未剪脚 LED 的长脚是阳极、短脚是阴极。接线图把阳极经电阻接 PA0，阴极接地；导线与电阻必须插在面包板电气连通的同组孔内。视频逐步摆放 LED、电阻和两根连接线，而不是先把按钮程序写好再猜灯是否接对。\n\n## 06:32—10:55 · 先独立点亮 LED，验证输出支路\n\n[对应第一次测试](https://www.bilibili.com/video/BV11X4y1j7si/?p=9&t=392)。作者先展示准备写的代码，再解压模板、打开 `main.c`，录入 GPIOA 时钟、PA0 初始化和一次写 1。10:20 的 IDE 画面能核对下列内容；摘录依赖原模板标准库和 `main` 框架：\n\n```c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);\nGPIO_InitTypeDef GPIO_InitStruct;\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_0;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_Out_PP;\nGPIO_InitStruct.GPIO_Speed = GPIO_Speed_2MHz;\nGPIO_Init(GPIOA, &GPIO_InitStruct);\nGPIO_WriteBit(GPIOA, GPIO_Pin_0, Bit_SET);\n```\n\nGPIOA 对应 PA0 所在端口；`Out_PP` 是通用推挽；点灯速度较慢，取 2MHz 档。最后的 `Bit_SET` 把 PA0 输出位置 1，按本节接线点亮灯。作者下载、复位后检查灯亮，并提到若限流电阻插得较松，需调整接触。\n\nASR 在 10:11—10:41 一段出现连续重复错词，不能据此复原讲者原话。这里用 10:20 的实际代码和前后段落确认测试过程，不把识别异常写成学习内容。\n\n## 10:56—13:43 · 按钮接 PA1 与地，松开由内部上拉保持高\n\n[对应按钮原理和方向](https://www.bilibili.com/video/BV11X4y1j7si/?p=9&t=656)。按钮两端分别接 PA1、GND，PA1 配成输入上拉。松开时外部开路，上拉把输入偏置为高，读到 1；按下时 PA1 经按钮接地，读到 0。12:00 的原图明确写着“按下读0，松开读1”。\n\n随后把原理图转换为面包板接线。作者强调按钮有方向，转动实物让带引脚的一侧按画面方向插入，再用两根线连接 PA1 与地。跟做应核对实际开关接点和面包板孔组，不能只模仿导线颜色。本节使用的是按住与松开的状态，不是每按一次翻转一次灯。\n\n## 13:44—17:30 · 复用结构体，初始化 PA1 输入上拉\n\n[对应 PA1 参数](https://www.bilibili.com/video/BV11X4y1j7si/?p=9&t=824)。GPIOA 已经为 PA0 开过时钟，不需要为 PA1 另开一次。同一个 `GPIO_InitStruct` 也已声明，作者直接改它的引脚与模式，再调用初始化：\n\n```c\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_1;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_IPU;\nGPIO_Init(GPIOA, &GPIO_InitStruct);\n```\n\n`IPU` 是 Input Pull-Up，输入上拉。输入模式没有再写输出速度；结构体中先前的速度字段仍存在，但不会把输入模式变成输出。视频同时回顾 IPD、IN_FLOATING、AIN 等名称，帮助把缩写与八种模式对应起来。\n\n录入 PA1 初始化之前，作者将“直接写 PA0 为 1”的测试行注释掉。否则它虽不妨碍后面循环最终改写，也不再代表当前程序的核心控制逻辑。重点是先把两个引脚各自初始化到不同角色，再进入循环。\n\n## 17:31—19:03 · 新接口读输入，再根据低电平判断按下\n\n[对应 GPIO_ReadInputDataBit](https://www.bilibili.com/video/BV11X4y1j7si/?p=9&t=1051)。本节新接口是 `GPIO_ReadInputDataBit(GPIOx, GPIO_Pin)`。第一个参数指定端口，第二个指定引脚掩码；本次读取 PA1，因此传 GPIOA 与 `GPIO_Pin_1`。\n\n返回 0 与 `Bit_RESET` 比较时，表示输入低电平；返回 1 则可与 `Bit_SET` 对应。结合当前按钮接地、内部上拉的电路，低电平分支就是“按钮按下”。再结合 PA0 推挽灯的接法，按下分支应写 `Bit_SET` 点灯，另一个分支写 `Bit_RESET` 灭灯。\n\n### 课件与 IDE 的实际差异\n\n18:00、19:00 的课件将写灯最后一个参数印成了 `GPIO_Pin_SET`、`GPIO_Pin_RESET`，但 20:00 的 IDE 实际使用 `Bit_SET`、`Bit_RESET`。前者不是这里应照抄的库枚举名称。下面按实际 IDE 摘录，不把课件笔误当作另一种 API。\n\n## 19:04—20:02 · 在 while 中持续读取并更新灯\n\n[对应最终循环代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=9&t=1144)。实际输入的循环是：\n\n```c\nwhile (1)\n{\n    if (GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_1) == Bit_RESET)\n    {\n        GPIO_WriteBit(GPIOA, GPIO_Pin_0, Bit_SET);\n    }\n    else\n    {\n        GPIO_WriteBit(GPIOA, GPIO_Pin_0, Bit_RESET);\n    }\n}\n```\n\n每轮先读 PA1，然后写 PA0。两个引脚在这里不能互换：把灭灯分支误写到 PA1，就变成改输入引脚的输出锁存，而没有正确控制外接灯。ASR 在结尾一处识别成“向PA1写0”，实际20:00画面仍清楚是 `GPIO_Pin_0`，正文据此核对。\n\n循环不断运行，所以灯的状态会跟随按钮当前状态。本片没有加入延时消抖、边沿检测或按键事件封装；后续如要做计数或“一按翻转”，需要另处理，不能把本例直接当作已有这些功能。\n\n## 20:03—20:32 · 复位后验证按住亮、松开灭\n\n[对应最终实物](https://www.bilibili.com/video/BV11X4y1j7si/?p=9&t=1203)。作者编译、下载后按主板复位，再操作外接按钮。20:16 补抓的原画面可见手按按钮、红色外接 LED 点亮，随后视频说明松开熄灭，本次实验完成。\n\n如果结果相反，先沿本节电路区分输入与输出的有效电平；如果完全不响应，先分别验证 PA0 点灯支路和 PA1 到地的按钮连接，再核对时钟、模式、端口和引脚掩码。这样能沿本片已经分开的两次测试定位问题。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1232.2133125,
        "asrSegments": 393,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "a5f9b0878b70b2c65f3e2a8557eb5132dd8848e186c1ee2b815978cfe20d7608",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "10:11—10:41 ASR有一段重复识别错误；已用该时段原代码画面补核，但未人工逐字听写这一段。"
        ]
      }
    },
    {
      "page": 10,
      "phase": "uart",
      "title": "3.1 [串口] 通信协议",
      "duration": 1270,
      "summary": "从TX/RX交叉、起止与低位先发，依次画27、Hello、四种字长校验格式和85奇校验错误示例。",
      "notes": "本节先说明串口双方按同一格式交流，再从空闲、起始、数据与停止位讲低位先发，手画十进制27及Hello五个ASCII字符的帧。后半段介绍8/9位段与校验组合，数四种格式的有效位，最后用85补奇校验和一个1变0的例子说明检错。正文区分字长与工具有效数据位，并补奇偶校验能力边界。",
      "points": [
        "TX发送RX接收，交叉连接两个方向",
        "空闲高、起始低、D0先发、停止高",
        "27=00011011，线序11011000",
        "Hello ASCII为48 65 6C 6C 6F，每字符单独一帧",
        "STM32F1字长8/9与校验占末位，决定7/8/9位有效数据",
        "85有4个1，奇校验补1；能检出单比特翻转但不能保证所有错误都被发现"
      ],
      "cid": 26377979181,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 60,
            "observation": "TX/RX交叉，Transmit/Receive文字。",
            "frameSha256": "1070c19cb763a6e7e4cc4bc0eab374ab1fde378527828af3adcfc1315fb7a133"
          },
          {
            "seconds": 180,
            "observation": "仍沿交叉线引出协议讲解。",
            "frameSha256": "e806ff1c534805727a49ba80b5f0507ae1415bb45b0e8cdacc17b4543af4779c"
          },
          {
            "seconds": 240,
            "observation": "十进制1的二进制、空闲高电平和起始位手写。",
            "frameSha256": "ac37722c907fae2798565c4e3693a1b895d5d72b3f0ecbf58d4cddbf6a6dd16f"
          },
          {
            "seconds": 300,
            "observation": "空闲/起始/D0～D7/停止/空闲基本帧。",
            "frameSha256": "05f9b729c8be62912c34be4d4f9aec2f3ce9428e8fe0ef4d74122c2068e28cb2"
          },
          {
            "seconds": 420,
            "observation": "27=16+8+2+1、00011011与低位先发正在画。",
            "frameSha256": "500bbc4deb40b09a3bb3d31638fdc0f565d868fdaf95a9ea25ef9f1daa4a3880"
          },
          {
            "seconds": 540,
            "observation": "27线序完整11011000，Hello ASCII48/65/6C/6F。",
            "frameSha256": "74017a3bbd2b558fb04296eca1568b7de265239ba90647172d5fa8974091d38c"
          },
          {
            "seconds": 600,
            "observation": "H原图线序00010010，起始与数据波形。",
            "frameSha256": "8c960797fa175a25e1daff7317159d9dc5f2682a6cf9ccb3621d9cfc8fea2f9e"
          },
          {
            "seconds": 660,
            "observation": "e线序10100110。",
            "frameSha256": "9f30b449efb9d5e8bd5b2baed6657a090ae54b62aeaa39335cfdb0bd73016370"
          },
          {
            "seconds": 780,
            "observation": "Hello五行基本完成，两个l00110110，o11110110。",
            "frameSha256": "0acf66e3bf3b12a87f4044a536af6fd0cc8aeb4151e8fe332af16673c2a471a4"
          },
          {
            "seconds": 840,
            "observation": "数据段8/9、末位校验，停止位列表。",
            "frameSha256": "b46dc26980397e508f77a739bbba1934e3a0ea035dc8f7abb36010ff07c4e426"
          },
          {
            "seconds": 960,
            "observation": "开始画字长与有无校验四种格式。",
            "frameSha256": "a0cb61d11d3007fb1394c72a7c294b8bc70f18ee0d6c421f9e91907d3dfbfa03"
          },
          {
            "seconds": 1080,
            "observation": "四种格式标注1字节、不足1字节、多于1字节、1字节。",
            "frameSha256": "43b748efcea1ebe38b0b8ddc3837522579d3ddb2780cfbc6bc4168fe1256736b"
          },
          {
            "seconds": 1200,
            "observation": "85奇校验发送与接收示例，一个比特1变0。",
            "frameSha256": "6757bf50e2ce450506e6c06b50316de7b4c6312c36c7e75ef717a191363184bb"
          },
          {
            "seconds": 1260,
            "observation": "85四个1补校验1，对比接收端偶数个1。",
            "frameSha256": "e5a3eb6c8e34a974cba67da0a7c99763026536d9016deb7590f9508db9d473b9"
          }
        ]
      },
      "learningNotes": "## 00:00—01:51 · TX 与 RX 交叉形成两个方向\n\n[对应串口概念与接线](https://www.bilibili.com/video/BV11X4y1j7si/?p=10&t=0)。作者从两颗芯片间传数据出发，介绍串口是一种通信接口。TX 是发送端，RX 是接收端；双方 TX 接对方 RX，两条信号线分别承担两个方向的数据。\n\n01:00 的图只突出收发线，目的在于说明“这边发，对边收”，不能接成 TX 对 TX。本节分析的是芯片串口逻辑电平的数据格式，尚未录入发送程序。实际板间连接还要有共同参考地，并核对电平兼容，后面接模块时再对应实物。\n\n## 01:52—05:24 · 双方约定同样的帧格式\n\n[对应起始、数据与停止位](https://www.bilibili.com/video/BV11X4y1j7si/?p=10&t=112)。作者把通信格式比作两个人使用同一种语言。先按一位起始、八位数据、一位停止的形式说明：空闲为高；开始发送时先给一位低电平起始位；随后发送 D0～D7；最后用高电平停止位结束。\n\n数据位中高代表 1、低代表 0。作者先用十进制 1 演示，写成八位二进制是 `00000001`，但线上的先后次序是最低位先发，所以先发 D0 的 1，再发其余七个 0。停止后有新数据，可接下一帧起始位；没有数据则继续保持空闲高电平。\n\n读波形要分清两种顺序：纸上常把最高位写左边，传输时间轴则从 D0 开始。起始位与停止位是帧结构，不属于这八位有效数据。\n\n## 05:25—07:29 · 十进制 27 怎样画成波形\n\n[对应第一道算例](https://www.bilibili.com/video/BV11X4y1j7si/?p=10&t=325)。原片先拆解 `27=16+8+2+1`，因此按 D7～D0 写成 `00011011`。接着按从 D0 到 D7 的发送次序填写八格：\n\n```text\n数值写法 D7→D0：0 0 0 1 1 0 1 1\n线上顺序 D0→D7：1 1 0 1 1 0 0 0\n```\n\n在这八格前补低电平起始位，后补高电平停止位，再按 1 高、0 低把格子连成波形。09:00 的原图已完整画出 27 的八位次序；自动识别中有几处数字错序，不能拿那些错词替代实际波形。\n\n这个步骤也提供读图方法：先把起止边界划开，逐格记下 D0～D7，再按位权还原数值，而不是把时间轴左端默认当最高位。\n\n## 07:30—13:27 · Hello 要拆成五个字符帧\n\n[对应 ASCII 与五行波形](https://www.bilibili.com/video/BV11X4y1j7si/?p=10&t=450)。作者解释字符串由字符组成，再查 ASCII 表，得到大写 H 为 `0x48`、小写 e 为 `0x65`、l 为 `0x6C`、o 为 `0x6F`。Hello 有两个相同的 l，因此总共五个字符、五帧。\n\n随后每个字符分别画起始、八位数据、停止。13:00 的原图能核对五行数据，按发送先后是：\n\n- H：`0x48`，D0～D7 为 `0 0 0 1 0 0 1 0`。\n- e：`0x65`，D0～D7 为 `1 0 1 0 0 1 1 0`。\n- l：`0x6C`，D0～D7 为 `0 0 1 1 0 1 1 0`，第二个 l 重复同样一帧。\n- o：`0x6F`，D0～D7 为 `1 1 1 1 0 1 1 0`。\n\n每个字符都要自己的起始和停止，不能把 Hello 的所有比特只包在一对起止位之间。原图把各字符换行画，是为了讲解排版；线上依次连续发送，最后一个停止位之后才重新保持空闲。这里没有把 C 字符串末尾的零终止符另画成发送内容。\n\n## 13:28—15:30 · 数据长度、校验和停止长度可以选择\n\n[对应可设置的帧字段](https://www.bilibili.com/video/BV11X4y1j7si/?p=10&t=808)。前面的例子使用固定格式，接着作者列出三个可选项：数据段选择 8 或 9 位，是否启用校验，以及停止位长度。课件列出停止位 0.5、1、1.5、2 位，并强调常用一位停止。\n\n重点是校验会占用该数据段的最后一位。作者用八位段举例，将 D7 改为校验，只剩 D0～D6 承担有效数据。这里采用的是 STM32F1 字长配置的说法，不能与串口工具里“有效数据位＋校验”的字段名称混为一谈。\n\n## 15:31—18:25 · 逐一数四种格式里有多少有效数据\n\n[对应四行手画格式](https://www.bilibili.com/video/BV11X4y1j7si/?p=10&t=931)。视频把两种长度与有无校验组合，逐行画出：\n\n- 8 位段、无校验：D0～D7 都是数据，八位有效数据。\n- 8 位段、有校验：末位作校验，七位有效数据。\n- 9 位段、无校验：D0～D8 都是数据，九位有效数据。\n- 9 位段、有校验：末位作校验，八位有效数据。\n\n因此作者在“按字节传输”的语境下，选第一种无校验或第四种带校验。18:00 原图旁分别标“一字节”“不足一字节”“多于一字节”“一字节”，这正是本段想说明的差别。\n\n### 本站术语说明\n\n上述 8/9 是芯片字长段的计数方式。常见串口工具所说的 8E1/8O1，则把 8 表示为八位有效数据，校验另外计入；在本片所讨论的 STM32F1 配置中，要与“9 位字长并开校验”对应。停止位选项的适用范围也要结合具体 USART 模式，不能把课件列表理解为所有配置任意可换。\n\n## 18:26—21:10 · 用十进制 85 解释奇偶校验\n\n[对应奇校验算例](https://www.bilibili.com/video/BV11X4y1j7si/?p=10&t=1106)。作者先定义奇校验与偶校验：计数范围包含有效数据和校验位，分别要求其中 1 的总数为奇数或偶数。随后使用九位段带校验，发送十进制 `85`，即八位数据 `01010101`。\n\n85 含四个 1。采用奇校验时，校验位再补一个 1，总数变五，满足奇数要求。原图线上八位数据从低位先发为 `1 0 1 0 1 0 1 0`，后接校验 1 和停止位。接收端再数 1 的总数，检查是否符合约定。\n\n最后作者把传输中的某个 1 改成 0：有效数据少一个 1，连同校验位总数变偶数，接收方因而能发现这个错误。\n\n### 本站校注：校验通过不代表保证无错\n\n原片用一个比特翻转演示能检出的情况。奇偶校验能发现奇数个比特翻转，但有些偶数个比特同时翻转仍会保持原来的奇偶性，所以“检查通过”只代表没有检出这一类校验错误，不能作为数据绝对正确的证明。本节到此结束帧格式与校验原理，尚未设置串口初始化或发送数据函数。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1269.76,
        "asrSegments": 524,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "b15d93438ef413a5d4c35b0471326ce28b676815c6dfbe26ff924e6b3f992323",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 11,
      "phase": "uart",
      "title": "3.2 [串口] UART 模块的使用方法",
      "duration": 1344,
      "summary": "由USART收发框图和移位原理解释帧格式与BRR，最后录入USART1 115200、8位无校验的初始化片段。",
      "notes": "原片依六部分介绍USART模块、寄存器读写、收发移位、帧格式、波特率和USART_Init。以72MHz与115200推导39.0625并讲BRR位权，随后在模板录入USART1初始化。正文按最终IDE保留未零初始化的原片摘录，并指出缺硬件流控字段；不把本节说成已经收发成功。",
      "points": [
        "USART1/2/3及发送写入、接收读取的数据路径",
        "移位寄存器实现并串和串并转换，发送100接收88例",
        "字长、停止位、校验与收发方向分别配置",
        "72MHz÷x÷16=115200，x39.0625，整数12位小数4位",
        "USART_Init使用结构体设置115200、Tx|Rx、8b、1停止、No校验",
        "原片39.625印字与分解不符，且最终结构体未设置硬件流控字段，正文明确校注"
      ],
      "cid": 26054951803,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 60,
            "observation": "六部分目录：模块、基本用法、移位、帧、波特率、接口。",
            "frameSha256": "85cb9931ee0fd47625929bd35ce9c09215c31f2bf36b3e1e46dd6fc0ec27bb8c"
          },
          {
            "seconds": 120,
            "observation": "USART内部框图发送100=01100100、接收88=01011000。",
            "frameSha256": "91bbb362726d885f978de3776c2726b1e2a4f92522f3dce2c4ab95cb9b3eff51"
          },
          {
            "seconds": 180,
            "observation": "强调TX起止及数据波形由硬件组织。",
            "frameSha256": "a269dee0c9fcec13591bfc357c648d8e808094513006d43214d4dff60f88bbfd"
          },
          {
            "seconds": 360,
            "observation": "发送100的移位寄存器与TX波形。",
            "frameSha256": "165cfa461811e80ccc4033e6128b5aab449c861cd17aa2e1247c9555def7c394"
          },
          {
            "seconds": 480,
            "observation": "RX接收移位与并行数据寄存器。",
            "frameSha256": "e7d9b88e8dd71ea15cf3d3f8acc42277d62ef8398a4ce94116b130014de8172f"
          },
          {
            "seconds": 600,
            "observation": "起始、数据8/9、停止与校验帧回顾。",
            "frameSha256": "b233375b949b0d610567491458726104871ae95c6566c1178e15e0e9049198ce"
          },
          {
            "seconds": 720,
            "observation": "时钟到可调分频、固定16分频及BRR。",
            "frameSha256": "5fba2c9e4a133f4cae299de838702c75502a3cf37417150b9f2b2859bb223aeb"
          },
          {
            "seconds": 840,
            "observation": "72MHz/115200算例x39.0625，但下一行印39.625，分解仍0.0625。",
            "frameSha256": "881bad1e616fc3da8ba88e2d596921eb7ba59ebd098a3a691f98f398ae47b2eb"
          },
          {
            "seconds": 880,
            "observation": "BRR整数12位和小数4位的0/1手填，F0对应0.0625。",
            "frameSha256": "b5d4c08ea8f8d0b010ff1dedf08bf2e9859a2600b49d8f2ea36821615d4c3904"
          },
          {
            "seconds": 960,
            "observation": "USART_Init原型及五个讲解成员，不含硬件流控。",
            "frameSha256": "b4b262c1c8371eec168eeae551943e4e50e5bc3f1dd96d0c773cfabdfe16c29f"
          },
          {
            "seconds": 1020,
            "observation": "Parity与Mode各选项。",
            "frameSha256": "7150c5413291269ab621c6008fe1995ee76d86b41798e8d1a2e2522c2b9b3d84"
          },
          {
            "seconds": 1200,
            "observation": "PPT USART1 115200、8位、1停止、无校验的示例。",
            "frameSha256": "9cee25174ca512f5e7f6ce906949d34bc7a7adc97464305041879ba3d4381232"
          },
          {
            "seconds": 1320,
            "observation": "IDE五项已赋值，但USART_Init调用尚未输入。",
            "frameSha256": "f889a273a1456d3d764a09c2768309a2ec0c35a1959436115703a03e0e426210"
          },
          {
            "seconds": 1335,
            "observation": "最终IDE USART_Init调用完成，结构体无{0}且未填HardwareFlowControl，while为空。",
            "frameSha256": "600416738f51c6d2289dcb76082d68d442d1159028ee466747e87f9b1f9dc78e"
          }
        ]
      },
      "learningNotes": "## 00:00—01:37 · 在芯片中找到三个 USART\n\n[对应六部分目录](https://www.bilibili.com/video/BV11X4y1j7si/?p=11&t=0)。本节依次讲模块简介、基本用法、移位寄存器、帧格式、波特率和初始化接口。站点保留原分集的 UART 标题，实际课件与库接口使用 `USART` 名称。\n\n作者在芯片框图中找出 USART1、USART2、USART3，把它们比作嘴与耳的组合：既可以发送，也可以接收。这里先建立模块的作用，后面再选择用其中哪一个。\n\n## 01:38—03:59 · 写发送数据、读接收数据，硬件处理帧\n\n[对应内部框图](https://www.bilibili.com/video/BV11X4y1j7si/?p=11&t=98)。图右边是 TX、RX，左边绿色部分是发送、接收数据寄存器。发送时程序把数据交给发送端，模块按起始、数据、停止的格式产生 TX 波形；接收时模块解析 RX 波形，把数据放入接收端供程序读取。\n\n原图用发送十进制 100、接收十进制 88 作例子：数据分别为 `01100100` 与 `01011000`。这里是模块功能的简化说明；真正连续发送、等待接收还需要查看状态，后续发送与接收课再落实。\n\n## 04:00—07:58 · 移位寄存器把并行数据依次送出\n\n[对应发送演示](https://www.bilibili.com/video/BV11X4y1j7si/?p=11&t=240)。作者解释并行是多个比特一起保存或操作，串行是一个比特接一个比特传送。发送数据先整体装入移位寄存器，再逐位移出，由 TX 用电平表示。\n\n十进制 100 的八位写法为 `01100100`。按低位先发，依次是 `0、0、1、0、0、1、1、0`。作者用几次移位演示前两个 0 与第三个 1 的输出，随后说明重复直到整组数据送完。起始、停止等帧结构由控制电路组织，程序不需要像前一节手画波形那样逐位写 GPIO。\n\n## 07:59—09:28 · 接收时完成相反的串并转换\n\n[对应接收演示](https://www.bilibili.com/video/BV11X4y1j7si/?p=11&t=479)。RX 先检测起始，随后一位一位接收数据。图中的移位寄存器随采样逐步积累比特，收到完整数据后再交给接收数据寄存器，程序最后读取结果。\n\n发送与接收因此是两条相反的数据路径：一边并转串，一边串转并。课件把移位过程画成许多圆点，是解释硬件工作原理，不是让程序手动执行八次移位后再读取串口。\n\n## 09:29—11:08 · 帧格式由模块参数控制\n\n[对应帧参数位置](https://www.bilibili.com/video/BV11X4y1j7si/?p=11&t=569)。作者回顾起始位、8/9 位字长、停止长度和末位校验，再回到内部框图。黄色“数据帧格式”部分向控制电路提供参数，决定发送与接收采用哪一种格式。\n\n本节沿用上一课 STM32F1 字长的计数方式：使能校验时末位由校验占用。初始化中的字长与校验必须组合理解；不能只看到 `8b` 就在所有条件下认定有八位有效负载。\n\n## 11:09—12:48 · 波特率来自时钟分频\n\n[对应时钟与两级分频](https://www.bilibili.com/video/BV11X4y1j7si/?p=11&t=669)。作者把本课二进制串口的波特率解释为每秒发送多少个位，列举 9600、115200、921600。内部图上，外部输入到模块的时钟先经过可调分频，再经过固定的 16 分频，得到控制位时间的节拍。\n\n片中的简单算例是 `32MHz ÷ 2 ÷ 16 = 1MHz`。它说明分频做除法，以及 BRR 所表示的分频因子如何参与计算。波特率不是每秒有效字节数；每帧的起始、停止和校验也占用线上时间。\n\n## 12:49—14:49 · 72MHz 到 115200 的 BRR 算例\n\n[对应整数与小数位权](https://www.bilibili.com/video/BV11X4y1j7si/?p=11&t=769)。作者假设本模块输入时钟为 72MHz，希望得到 115200，于是设分频因子为 x：\n\n```text\n72,000,000 ÷ x ÷ 16 = 115,200\nx = 39.0625 = 32 + 4 + 2 + 1 + 0.0625\n```\n\n课件将 BRR 分成十二位整数部分 M11～M0 和四位小数部分 F3～F0。整数 39 对应 32、4、2、1，小数 0.0625 对应 `2^−4`，因此小数最低位为 1。按这张位权图整理，寄存器位模式为 `000000100111 0001`，即 `0x0271`。\n\n### 课件数字差异\n\n14:00 与 14:40 的原图上，方程结果 x 写 `39.0625`，下一行左侧却印成 `39.625`；其右侧分解仍是 `32+4+2+1+0.0625`。正确沿方程和位权应取 39.0625，不能照抄缺零的印字。72MHz 也是这个算例的输入假设，实际 USART 必须用其当时真正的外设时钟计算。\n\n## 14:50—17:42 · USART_Init 与初始化结构体\n\n[对应初始化接口](https://www.bilibili.com/video/BV11X4y1j7si/?p=11&t=890)。`USART_Init` 第一个参数选择 USART1、2 或 3，第二个传初始化结构体地址。作者继续用菜单比喻说明先填参数、再交给函数处理。\n\n课件重点列出五项：`USART_BaudRate` 填所需波特率，由库计算相应寄存器；`USART_WordLength` 选 8b/9b；`USART_StopBits` 选停止长度；`USART_Parity` 选 No、Even、Odd；`USART_Mode` 决定 Tx、Rx，或用按位或 `|` 同时选两者。Tx 与 Rx 是方向开关，和字长、奇偶性属于不同参数。\n\n## 17:43—22:12 · 在模板录入 USART1、115200、8位、1停止、无校验\n\n[对应实际录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=11&t=1063)。作者解压模板，打开 `main.c`，先开 USART1 的 APB2 时钟，再声明结构体，依次填波特率、收发方向、字长、停止位与校验，最后调用初始化。下面按22:15实际IDE摘录，保留其原变量名及录入顺序；这段用于对照本节，不是完整可运行串口工程：\n\n```c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_USART1, ENABLE);\nUSART_InitTypeDef USART_InitStruct;\nUSART_InitStruct.USART_BaudRate = 115200;\nUSART_InitStruct.USART_Mode = USART_Mode_Tx | USART_Mode_Rx;\nUSART_InitStruct.USART_WordLength = USART_WordLength_8b;\nUSART_InitStruct.USART_StopBits = USART_StopBits_1;\nUSART_InitStruct.USART_Parity = USART_Parity_No;\nUSART_Init(USART1, &USART_InitStruct);\n```\n\n这次配置无校验，因此八位段承载八位有效数据。`&USART_InitStruct` 将参数结构体的地址交给函数，`USART1` 则说明参数要写入哪个模块；两个位置不能互换。\n\n### 本站代码核对：原片还缺哪些前提\n\n最终IDE中结构体没有零初始化，也没有给 `USART_HardwareFlowControl` 赋值。常用 STM32F10x 标准库的该结构体还包含此字段，初始化实现会读取它；因此不能把这份片段照抄后当作参数已经全部确定的可靠成品。实际跟做应先通过 `USART_StructInit` 等方式建立已知默认值，并明确无需硬件流控；这是本站补充修正，不是原片已经输入的代码。\n\n本节停在模块参数初始化，画面没有发送结果、串口引脚初始化或模块使能测试。后面应继续连接引脚与完整发送流程；这里不据“初始化写完”推断电脑已经能够收到数据。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1343.0186875,
        "asrSegments": 485,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "fd8b013d44c9522f069c57269c189366a5ae9fa48ceafb0b3d75721c3e4a2904",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "未取得作者本节完整模板；最终可见代码未设置USART_HardwareFlowControl，不能确认作者模板是否修改标准库。本站按常用本地标准库发现该字段缺省风险并明确说明。"
        ]
      }
    },
    {
      "page": 12,
      "phase": "uart",
      "title": "3.3 [串口] 为串口初始化 IO 引脚",
      "duration": 1521,
      "summary": "依三张表定位USART1默认与重映射引脚，先录入PA9/PA10，再注释并切AFIO到PB6/PB7，配置TX复用推挽和RX上拉。",
      "notes": "本节先列USART信号，用引脚定义、重映射、GPIO配置三张表找到USART1默认PA9/PA10及替代PB6/PB7，并解释全双工等术语与RX上拉理由。接着承接上节工程，实际录入默认引脚；随后注释旧段、使能AFIO重映射，复制修改为PB6复用推挽10MHz、PB7输入上拉。",
      "points": [
        "USART五种信号中本课选择全双工异步TX/RX",
        "DS5319引脚表查默认PA9/PA10与重映射PB6/PB7",
        "RM0008重映射表和IO配置表分别确定位置和模式",
        "TX选GPIO_Mode_AF_PP10MHz，RX选GPIO_Mode_IPU",
        "先写默认版本，后注释并启AFIO、GPIO_Remap_USART1",
        "最终PB6/PB7代码两处GPIO_Init均为GPIOB，未演示收发测试"
      ],
      "cid": 26054951882,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 60,
            "observation": "本节两问题：串口引脚在哪里及如何设置模式/速度。",
            "frameSha256": "1937155816aba7c63fc033e4dd99e27a030874fc06b67157dbde64cad393f89a"
          },
          {
            "seconds": 180,
            "observation": "USART_TX/RX/CTS/RTS/CK五种信号说明。",
            "frameSha256": "88295bcc2e516b76b0b7c54295ee21f9efac815e0518b8a64fe5d326b44a45e1"
          },
          {
            "seconds": 300,
            "observation": "DS5319多封装引脚定义表，LQFP48列。",
            "frameSha256": "9663d7114840798097cc8bfc4e5a8a158742fdae73987ba2a97a5ca86f0791fa"
          },
          {
            "seconds": 480,
            "observation": "通用CPU控制与串口复用接管PA9波形对照。",
            "frameSha256": "05e75c6905d997e13f4c853bcc81494f2ae3fc894bfb75fc5a400d5a572724cd"
          },
          {
            "seconds": 600,
            "observation": "USART1默认PA9/PA10及PB6/PB7重映射引脚图。",
            "frameSha256": "ee46abd2c25fa7999bda5ba292cd26ccee9af726dd6e2d40f3e9907444270280"
          },
          {
            "seconds": 720,
            "observation": "打开RM0008准备查看外设GPIO配置。",
            "frameSha256": "6fbae5b59689d8b35b368cba6e7fb5c0a8cb6be2dfb5bd5b7cdf0a22e3f0a207"
          },
          {
            "seconds": 780,
            "observation": "USART GPIO配置表、全双工/半双工/同步/流控示意。",
            "frameSha256": "e155d0978a7381db11ccf1d8b31e192584caa9e5327b456f5c86fe4394f02ac5"
          },
          {
            "seconds": 900,
            "observation": "原片强调本套采用全双工；TX复用推挽，RX浮空或上拉。",
            "frameSha256": "c13bfb18bab3e7416158ab122a156409f35ad9ff3fc56fe5768b97bf57d969d5"
          },
          {
            "seconds": 1020,
            "observation": "六部分目录进入默认PA9/PA10代码。",
            "frameSha256": "58e5ca762924a7c074ef08cc3ad58fad566d7e373797fb3c829bcd816f4ea695"
          },
          {
            "seconds": 1140,
            "observation": "上节USART模块初始化仍保留，准备追加GPIO初始化。",
            "frameSha256": "b7b174cb141925d2563fc0213528941665b43f900de47076f087b70b653b90e9"
          },
          {
            "seconds": 1260,
            "observation": "IDE默认PA9 AF_PP10MHz、PA10 IPU正在补全。",
            "frameSha256": "b60173e44f1ff71eb71aec6f1237f4e510ceae0ca2c37cebf31250085aaeabf1"
          },
          {
            "seconds": 1320,
            "observation": "USART1_REMAP0与1表及PB6/PB7配置课件。",
            "frameSha256": "bbdade129cff24a70b0e30e499f05dd4bb49949657121b946947ff68c7f1d597"
          },
          {
            "seconds": 1380,
            "observation": "IDE已注释PA9/PA10，AFIO时钟与PinRemapConfig录入中。",
            "frameSha256": "c07af1bf5ce70719562bb29a98ed63760729d66a9bdd8e25f1604c9212882d39"
          },
          {
            "seconds": 1440,
            "observation": "AFIO重映射调用完整，开始GPIOB时钟。",
            "frameSha256": "546ac6cec8af2b03038c1c28f1602de2352c294733491eb51f411956a58ce8c3"
          },
          {
            "seconds": 1500,
            "observation": "最终PB6 AF_PP10MHz、PB7 IPU，两次GPIO_Init均为GPIOB。",
            "frameSha256": "7fa9fc6fad125e3be43326a84aee317c32aa258cb3a41f0ef8426eb883810606"
          }
        ]
      },
      "learningNotes": "## 00:00—02:25 · 两个问题：TX/RX 在哪里，应该配什么模式\n\n[对应本节问题](https://www.bilibili.com/video/BV11X4y1j7si/?p=12&t=0)。作者先回顾用 `GPIO_Init` 配置引脚，需要确定编号、模式，输出时还要选速度。可是封装图只写 PA9、PA10 等，没直接画一个独立的“TX脚”，因此本节通过三张表解决位置与参数，再分别写默认引脚、重映射引脚两段代码。\n\n## 02:26—03:32 · USART 的五种信号，本课使用 TX/RX\n\n[对应模块引脚列表](https://www.bilibili.com/video/BV11X4y1j7si/?p=12&t=146)。课件列出 USARTx_TX、RX、CTS、RTS、CK。TX 发、RX 收；CTS、RTS 与硬件流控有关；CK 用于同步模式的时钟。本课程这部分选择普通的异步全双工收发，所以当前初始化主线只使用 TX 与 RX。\n\n这里列出额外信号，是为了以后查表能认出它们，不是本节要求额外接上三根线。\n\n## 03:33—10:01 · 第一张表：从封装脚位找到 USART1\n\n[对应 DS5319 引脚表](https://www.bilibili.com/video/BV11X4y1j7si/?p=12&t=213)。作者打开数据手册的引脚定义表。原表同时列多种封装，先锁定本课的 LQFP48，再使用整理后的表查看物理编号、信号名、主功能与默认/重映射复用功能。\n\n“复位后的主功能”和“默认复用位置”要分开理解：主功能说明未配置时的用途，默认复用位置则说明外设被选用后、不改映射时从哪里引出。看到 PA9 列有 USART1_TX，不等于上电后不做任何初始化就已经在发串口数据。\n\n作者回顾 CPU 直接写位与串口模块接管波形的区别，然后查到 USART1 默认 TX 在 PA9、RX 在 PA10；映射切换后则可到 PB6、PB7。LQFP48 图上前者是物理30、31脚，后者是42、43脚。用信号名和功能列查找，比只数板上排针更可靠。\n\n## 10:02—11:26 · 第二张表：重映射状态与成对引脚\n\n[对应 USART1 重映射表](https://www.bilibili.com/video/BV11X4y1j7si/?p=12&t=602)。作者进入 RM0008 的复用重映射部分，再打开按外设整理的电子表格。USART1 的表只有两组：`USART1_REMAP=0` 对应 PA9/PA10，`=1` 对应 PB6/PB7。\n\n“搬家”改变的是同一个 USART1 的信号出口，不是把模块改为 USART2，也不是任选两个 GPIO 就能当硬件串口。切到 PB6/PB7 时，发送与接收位置按这组映射同时理解。\n\n## 11:27—14:54 · 第三张表：按通信模式选择 GPIO 配置\n\n[对应 GPIO 配置表与四种连接示意](https://www.bilibili.com/video/BV11X4y1j7si/?p=12&t=687)。作者从 RM0008 的外设 GPIO 配置部分找到 USART 表，并解释图中几个模式名称：全双工有各自的收发线路，两个方向可同时进行；半双工共用线路，两个方向不能同时驱动；同步模式增加 CK；硬件流控增加 CTS、RTS。\n\n当前要跟做的是全双工这一行：TX 为复用推挽输出，RX 可以浮空输入或上拉输入。其他连接示意用于说明术语，不能据半双工概念图直接把两个普通推挽输出硬接在一起；使用相应功能还要按该模式的配置要求处理。\n\nTX 选择复用，是因为电平变化来自 USART 硬件，不是 CPU 在循环里直接写 GPIO。RX 的数据由外部送入，所以走输入路径。\n\n## 14:55—16:44 · 本片为什么为 RX 选上拉\n\n[对应 RX 断线说明](https://www.bilibili.com/video/BV11X4y1j7si/?p=12&t=895)。作者在允许的浮空、上拉之间选择上拉：如果接收线意外断开，上拉会让输入趋向高电平，而本课串口空闲正是高电平，因此比没有偏置更适合这个默认状态。\n\n这能减少悬空造成的误判，却不等于实现了断线检测，也不是证明线路可靠。它回答的是输入失去外部驱动时趋向什么状态，而不是软件如何识别故障。\n\n## 16:45—21:11 · 第一段代码：默认 PA9 与 PA10\n\n[对应实际默认引脚录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=12&t=1005)。作者打开上节 USART1 初始化工程，在其后声明 GPIO 结构体，开启 GPIOA 时钟，再先配 PA9、后配 PA10。21:00 画面与后面被注释的代码可核对这一段：\n\n```c\nGPIO_InitTypeDef GPIO_InitStruct;\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_9;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_AF_PP;\nGPIO_InitStruct.GPIO_Speed = GPIO_Speed_10MHz;\nGPIO_Init(GPIOA, &GPIO_InitStruct);\n\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_10;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_IPU;\nGPIO_Init(GPIOA, &GPIO_InitStruct);\n```\n\n两处开 GPIOA 时钟在原片中重复出现，作者说明重复不影响本次使用。PA9 的 `AF_PP` 是复用推挽，输出档位选 10MHz；PA10 用 `IPU` 上拉输入，不再为输入设置输出速度。两次 `GPIO_Init` 使用同一结构体，第二次改的成员会按新的输入模式作用于 PA10。\n\n这是承接模板和 USART 模块配置的引脚片段，不能单独作为完整串口工程。它与接下来的重映射版本是先后对照的两种选择。\n\n## 21:12—23:12 · 先注释原配置，再通过 AFIO 切换映射\n\n[对应重映射操作](https://www.bilibili.com/video/BV11X4y1j7si/?p=12&t=1272)。作者先把 PA9、PA10 的原引脚代码注释掉，然后介绍 AFIO 也是片上外设，使用前开其时钟。随后输入：\n\n```c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO, ENABLE);\nGPIO_PinRemapConfig(GPIO_Remap_USART1, ENABLE);\n```\n\n第一行使 AFIO 可用，第二行启用 USART1 的映射切换，相当于选择表里的 REMAP=1。只改 GPIO 引脚号码而不改映射，不能让 USART1 自动从新位置输出；映射选择和 GPIO 初始化分别解决内部路由、外端电路模式两个问题。\n\n## 23:13—25:18 · 第二段代码：PB6 发送，PB7 接收\n\n[对应最终 PB6/PB7 录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=12&t=1393)。作者复制前面的引脚代码，再修改端口和编号。25:00 最终 IDE 清楚显示两个 `GPIO_Init` 都已改为 GPIOB，而不是继续留着 GPIOA：\n\n```c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB, ENABLE);\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_6;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_AF_PP;\nGPIO_InitStruct.GPIO_Speed = GPIO_Speed_10MHz;\nGPIO_Init(GPIOB, &GPIO_InitStruct);\n\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB, ENABLE);\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_7;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_IPU;\nGPIO_Init(GPIOB, &GPIO_InitStruct);\n```\n\nPB6 为 TX，保持 AF_PP 与 10MHz；PB7 为 RX，保持 IPU。结构体声明沿用前面那一份，USART 模块仍是 USART1。检查这种复制修改时，要同时看时钟组、Pin 掩码、`GPIO_Init` 的端口，不能只改其中一处。\n\n本节在这段录入后结束，没有连接电脑收数据的演示，也没有把 PB6/PB7 和 PA9/PA10 两套位置同时用来收发。下一节再把选定引脚、模块使能与实际发送串起来。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1520.512,
        "asrSegments": 550,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "edcc712ae95ab021efa308df22eaf446d3397e1815ddd63cc2eed0201d812b19",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "未取得作者模板，承接上节USART结构体硬件流控字段未确定的限制仍在；本节只有代码录入，没有实际收发结果。"
        ]
      }
    },
    {
      "page": 13,
      "phase": "uart",
      "title": "3.4 [串口] 发送数据",
      "duration": 1939,
      "summary": "沿发送缓冲与移位过程区分TXE和TC，补USART使能，现场封装阻塞字节数组发送函数，再用重映射PB6/PB7和UartAssist接收五字节。",
      "notes": "本节从发送寄存器缓冲与移位过程解释为何需等待TXE，再用TC判断整批发送结束。作者补上USART_Cmd使能，并逐项讲解标志查询和发送接口。现场函数My_USART_SendBytes遍历pData，逐字节等TXE并发送，最后等TC。26:20的Keil版本内部三个调用均固定USART1，与课件发送调用使用USARTx存在差异。随后沿用PB6/PB7重映射，通过USB转串口和UartAssist接收数组1至5；末尾画面另有FF，作者未解释或修复。",
      "points": [
        "TDR与移位寄存器分工，满寄存器继续写可能覆盖待发数据",
        "每字节写前等待TXE，数组写完后等待TC",
        "USART_Cmd、USART_GetFlagStatus与USART_SendData的实参含义",
        "My_USART_SendBytes的原片Keil内部实际固定USART1",
        "PB6接RXD、PB7接TXD并共地，电脑设115200、8N1、无流控",
        "实录窗口出现FF及01 02 03 04 05，额外FF原因未定位"
      ],
      "cid": 26054951912,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 300,
            "observation": "TXE表示TDR空，可以接收下一字节；不等于线路发送完成。",
            "frameSha256": "435931fa00a8023404f4789e689ccb167dc8f5863c8b6e5d95533c293ff2326d"
          },
          {
            "seconds": 360,
            "observation": "缓冲发送图中前一项在移位寄存器，后一项可留在TDR。",
            "frameSha256": "7a0b5768a8d2c6ab56c319ae9431096865d74ecc727c9f138033b5bcdb9d0b15"
          },
          {
            "seconds": 420,
            "observation": "TC图解同时要求TDR空与发送移位结束。",
            "frameSha256": "279d068cff35339274276af73a09f6f71ba622b1f95ce0fa3003177582f5a8b0"
          },
          {
            "seconds": 600,
            "observation": "USART_Cmd接口及USART1、ENABLE示例。",
            "frameSha256": "701298b82fe20a95c00f2f94420525de3ed980a8d05870b03830575174211734"
          },
          {
            "seconds": 720,
            "observation": "编辑器配置窗口处理源码编码，后续继续录入发送函数。",
            "frameSha256": "4c0aef262cc7365039ea54039f8630ba3e7ae6d9a82166e23a7f5550196b32dd"
          },
          {
            "seconds": 780,
            "observation": "USART_GetFlagStatus接口、TXE/TC及SET返回示例。",
            "frameSha256": "415f2b754464e221a8fd4395e59540fe8ebaa300b76ed5cc3c87d069f483eb65"
          },
          {
            "seconds": 900,
            "observation": "USART_SendData第二形参uint16_t及发送0x01例。",
            "frameSha256": "4ed9b70dc81da6d6070a081a820059de2fb8399d8c4ce4b299fcc08e6bff1461"
          },
          {
            "seconds": 1200,
            "observation": "课件完整函数里TXE/TC等USART1，SendData使用USARTx。",
            "frameSha256": "c0c8f3d1c1b4065751a7c61e88d7728e85271e8568745e66392dacf5274b0a15"
          },
          {
            "seconds": 1440,
            "observation": "Keil正在for内部录入TXE空循环，使用USART1。",
            "frameSha256": "cc19747a0452f0f24747c211bd7546eac585a562e51bdd493520060c97a2f55c"
          },
          {
            "seconds": 1560,
            "observation": "Keil的USART_SendData实际也使用USART1、pData[i]。",
            "frameSha256": "8d714160b25e48dbc2f42c8bbbe93bf86350c4fa7098457a745c91ea73045285"
          },
          {
            "seconds": 1580,
            "observation": "函数录入完成，TXE等待、SendData和TC等待全部固定USART1。",
            "frameSha256": "403944de18a41827ebccf859c6444bcd199880a9d8686633817532336e0d8214"
          },
          {
            "seconds": 1620,
            "observation": "USB转串口与ST-Link接线图，串口当前采用PB6/PB7交叉接线。",
            "frameSha256": "bb9c27787a1790cc6e28e76b3b7d067e35d8996ee1ea6dc667c222e78cdee054"
          },
          {
            "seconds": 1740,
            "observation": "课程文件夹内UartAssist.exe串口助手。",
            "frameSha256": "de536138cc176e7f8b9c959863f203c5802cac6eea89b8f67ca430f437ce98c9"
          },
          {
            "seconds": 1860,
            "observation": "USART参数仍是前课五字段，并已加入USART_Cmd。",
            "frameSha256": "18b1eeae39d579c7430d7d14ab076b7d8d49e6adb06d4cf4459957f9211e6652"
          },
          {
            "seconds": 1880,
            "observation": "bytesToSend为1、2、3、4、5，主循环前调用My_USART_SendBytes。",
            "frameSha256": "3892e5f9368b206f718045aca7a9139051746a9fcfc992738ac106f8d2d2ba38"
          },
          {
            "seconds": 1915,
            "observation": "串口助手COM13、115200、8N1、NONE流控、HEX，数据有额外FF及01至05。",
            "frameSha256": "8cdc6cd18a0241a96dce7c56a9698a814c83748e6c5c5dc2072b7493828cb879"
          }
        ]
      },
      "learningNotes": "## 00:00—03:47 · 从发送数据寄存器到移位寄存器\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=13&t=0)\n\n本节沿用前两节的 USART1 配置，目标是一次发出五个字节。CPU 先把一个字节写进发送数据寄存器 TDR，硬件再把它搬到发送移位寄存器，由 TX 引脚逐位发出。这里有两个存储位置，不能把“CPU 已经写入”理解成“接收端已经收到”。\n\n第一个字节开始移位以后，TDR 可以暂存第二个字节；第二个字节尚未搬走时，又写第三个字节，就可能覆盖等待发送的数据。视频用字节 1、2、3、4、5 的移动图解释：发送函数必须先确认 TDR 有空位，再写下一项，而不是用连续五次写寄存器碰运气。\n\n## 03:48—08:55 · TXE 负责接着装，TC 负责等到发完\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=13&t=228)\n\nTXE 是发送数据寄存器空标志。TXE=1，表示 TDR 现在能接收下一项；TXE=0，则应等待。即使 TXE 已经等于 1，移位寄存器里的当前帧仍可能正在发送，所以它不能单独证明线路发送结束。\n\nTC 是发送完成标志。视频把“数据寄存器空”和“移位发送结束”一起画成 TC=1 的条件。两种等待的位置因此不同：每次写入前等 TXE，整个数组写完以后再等 TC。后者让调用者在函数返回时知道最后一帧也已发送完，而不只知道最后一个字节已被 CPU 交给外设。\n\n## 08:56—16:51 · 补上外设使能，认识三个接口\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=13&t=536)\n\n作者先补充此前初始化中遗漏的总使能：在 `USART_Init` 后调用 `USART_Cmd(USART1, ENABLE)`。本段还把 GPIO 配置移到 USART 参数配置之前，并处理编辑器中文注释的编码显示问题。使能外设时钟、写初始化参数、打开 USART，是用途不同的步骤，不能相互替代。\n\n`USART_GetFlagStatus(USARTx, USART_FLAG_TXE)` 用来读 TXE，换成 `USART_FLAG_TC` 就读 TC；返回值 `RESET`、`SET` 分别表示标志未置位、已置位。`USART_SendData` 把数据交给发送数据寄存器。它的 Data 形参为 `uint16_t`，用于容纳可能的九位数据；这不意味着本实验每次在线路上发送十六个数据位。当前仍是此前设置的八位字长、无校验、一位停止位。\n\n## 16:52—26:24 · 现场封装 My_USART_SendBytes\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=13&t=1012)\n\n函数接收串口、数组起始地址和数量。`pData[i]` 取出数组第 i 项，`i < Size` 限定发送范围。下面按 26:20 原片 Keil 画面摘录函数主体，省去中文注释；其中串口实参保留画面中的写法。\n\n~~~c\nvoid My_USART_SendBytes(USART_TypeDef *USARTx,\n                       uint8_t *pData, uint16_t Size)\n{\n    for (uint32_t i = 0; i < Size; i++)\n    {\n        while (USART_GetFlagStatus(USART1, USART_FLAG_TXE) == RESET);\n        USART_SendData(USART1, pData[i]);\n    }\n    while (USART_GetFlagStatus(USART1, USART_FLAG_TC) == RESET);\n}\n~~~\n\n两个 `while` 末尾的分号就是空循环体：条件仍为真就持续查询，不会执行下一句。TXE 等待必须放进 `for`，每一个字节都要经过检查；TC 等待放在 `for` 外，只在最后等一次。若放进循环，程序会每发一字节都等其完整结束，失去利用发送缓冲衔接下一项的意图。\n\n原片有一处值得保留的代码差异：20:00 课件的 `USART_SendData` 使用 `USARTx`，但 26:20 录入完的 Keil 函数中，读 TXE、写数据和读 TC 都固定使用 `USART1`。因此这份实际画面里的函数虽有 `USARTx` 形参，内部仍专用于 USART1；不能直接把它当成可切换任意串口的通用函数。这里没有把实录代码悄悄改成另一份版本。\n\n## 26:25—30:28 · 沿用重映射接线，配置电脑接收端\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=13&t=1585)\n\n实验接着上一节的 USART1 重映射配置：PB6 是 TX，接 USB 转串口模块的 RXD；PB7 是 RX，接模块 TXD；两边 GND 相连。原片接线图旁还写有默认 PA9、PA10 的提示，但当前程序和实际示意走的是 PB6、PB7，不能只看旁注把线接回默认脚。\n\n电脑端解压并运行 UartAssist。作者用插拔 USB 转串口模块前后的端口变化识别模块，当时出现的是 COM13；实际电脑应选自己新增的端口。设置为 115200 波特率、8 数据位、1 停止位、无校验、无流控，再打开端口。下载用的 ST-Link 与收发字节的 USB 转串口模块同时存在，各有用途。\n\n## 30:29—32:17 · 发出五个字节，按原片记录显示结果\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=13&t=1829)\n\n31:20 的 Keil 画面在 `USART_Cmd` 后、空的主循环前加入以下调用；它在进入 `while(1)` 前执行一次，所以通过复位可以重新触发发送。\n\n~~~c\nuint8_t bytesToSend[] = {1, 2, 3, 4, 5};\nMy_USART_SendBytes(USART1, bytesToSend, 5);\n~~~\n\n接收窗口选择 HEX 显示后，末尾能看到预期的 `01 02 03 04 05`。窗口前面还多出 `FF`，作者现场指出这个额外字节，却没有在本节定位原因或展示修复。应分别记录“目标五字节出现”和“存在额外 FF”，不能把画面写成只有五字节，也不能自行把 FF 归因于复位、噪声或某条代码。\n\n跟随本节排查时，可先对照 USART1 是否已使能、PB6/PB7 重映射与交叉连接是否一致、电脑参数是否匹配，再检查 TXE 等待和数组长度。上两节初始化结构体尚有字段默认值的限制，仍应参见对应代码校注；本节没有展示作者补齐该字段的动作。原片函数采用阻塞等待，也未设置超时，标志迟迟不到时会停在相应空循环。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1938.752,
        "asrSegments": 654,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "c72547ca9972057cff419237de3743cfb39a782fbd567d1d18bfb49459871b9d",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "原片额外接收FF的原因未定位；26:20函数内部固定USART1，不能把形参存在当成已实现通用串口。"
        ]
      }
    },
    {
      "page": 14,
      "phase": "uart",
      "title": "3.5 [串口] 格式化打印字符串",
      "duration": 1939,
      "summary": "先整理PrintfTest和注释，再以fputc重定向printf至USART1；从Hello world测试进入GetTick毫秒拆分与时分秒格式打印，真实讲授止于约23:25。",
      "notes": "本节完整讲授先从控制台Tom问候引入格式化，将工程改名并抽出USART1初始化、补充注释，然后说明printf与fputc分工。现场补stdio.h并实现fputc，将字符发到USART1，ASCII窗口出现Hello world。随后调用作者GetTick，以29430125毫秒逐步计算时分秒，循环按%02u和%03u打印，最后加入Delay(100)并演示递增时间。讲授约23:25结束；源片32:18含长黑色空尾，未用其首次识别幻觉编造内容。",
      "points": [
        "PrintfTest改名，GPIO与USART配置抽成My_USART1_Init",
        "为发送函数参数和串口初始化分段写注释",
        "printf格式替换与本工具链fputc逐字符重定向分工",
        "fputc等待TXE、发送uint8_t字符、return ch；需stdio.h提供FILE",
        "GetTick毫秒逐次取余/整除，29430125换为08:10:30.125",
        "%02u/%03u补零，Delay(100)降低打印频率，源片后部为空尾"
      ],
      "cid": 26054951959,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 60,
            "observation": "电脑C控制台提示输入姓名，用于格式化问候的开场。",
            "frameSha256": "f24c53cc9af6738babdedc46e842f1d96c6267bb97f3065c971d2270d47de983"
          },
          {
            "seconds": 240,
            "observation": "PrintfTest中仍保留前课五字节数组和My_USART_SendBytes测试。",
            "frameSha256": "1b1baa82e415c4e7e8e5640121e20121fd064732d6a1b294ab9deb04e69ee07d"
          },
          {
            "seconds": 420,
            "observation": "正在给My_USART1_Init注释，前方发送函数内部仍固定USART1。",
            "frameSha256": "a1fd75f0fb64432a91f7dcc76ad8f3cdfaee56ce51e9325bcd8ad07caf65e2f8"
          },
          {
            "seconds": 600,
            "observation": "课件printf生成字符串后通过fputc输出，并示意改为串口发送。",
            "frameSha256": "52d1acc40a840a338af54970ec8cc3fdc19561b730e27ecbd0a0960ebb0efaa4"
          },
          {
            "seconds": 780,
            "observation": "Keil创建fputc，已有stdio.h，正在填TXE等待。",
            "frameSha256": "282100d8f6069d960df0c77a79fdbee1fee5c827f22bcb24758ce4023fe0ecd9"
          },
          {
            "seconds": 805,
            "observation": "fputc完整可见：等TXE、USART_SendData(USART1,(uint8_t)ch)、return ch。",
            "frameSha256": "77753c2ac64f4ac5f0807294822bb36fa9b50b105fe005148f80d26c2de3396b"
          },
          {
            "seconds": 855,
            "observation": "删除前课测试后，main正在填Hello world的printf。",
            "frameSha256": "234f0af33e5f949aa16371f5782226010eea5f25d8888b14a9c7615fc427f33c"
          },
          {
            "seconds": 880,
            "observation": "串口助手ASCII出现问号及Hello world.，与板上复位演示并列。",
            "frameSha256": "f0d826635900f1c9e6a8d1a21b7fcaa43cf87e293611e4bb8631c403bbb3b4ce"
          },
          {
            "seconds": 960,
            "observation": "GetTick时间图给29430125与08:10:30.125及拆分表达式。",
            "frameSha256": "905af07eb549b56f7397d52bd3f132702a0519c9e9bd58d91b042c85afffe8e3"
          },
          {
            "seconds": 1140,
            "observation": "逐步演算取余125、30、10及小时8，全部对应29430125。",
            "frameSha256": "64aa4227cee6022b71e159ae1a945b3816a0c281394ac237de595e8b831a3259"
          },
          {
            "seconds": 1320,
            "observation": "Keil已取GetTick及拆分miliSeconds、seconds、minutes、hour，尚未写printf。",
            "frameSha256": "8dc7d9f2c4a0a7d198a1008ee237cacd9309a966b2def803a2dd409098890e16"
          },
          {
            "seconds": 1365,
            "observation": "Keil格式化输出已完整，尚未加Delay。",
            "frameSha256": "6f38418050333334afdf5857bfe40b8522bbc152927860570f9e96cb1abaeb17"
          },
          {
            "seconds": 1370,
            "observation": "主循环完整，printf后新增Delay(100)，变量名miliSeconds。",
            "frameSha256": "559cd32995591937b25546eeac084857d1f8475314a0466c52b74246ec175ae5"
          },
          {
            "seconds": 1390,
            "observation": "串口实际时间行02.020、02.121、02.222递增。",
            "frameSha256": "41cc9ae9673313990b9e5b165656da3b444c1ba1d6e74b96b0619f93fb2efd5b"
          },
          {
            "seconds": 1400,
            "observation": "片尾回到六项目录回顾。",
            "frameSha256": "b9641e481efa187f1076a09213d197611e5c84dfac053590085608d06873c2e2"
          },
          {
            "seconds": 1440,
            "observation": "24分钟原片为黑场，仅右上水印。",
            "frameSha256": "1f637df22298b117d64a2d0799c56263f54521a5cd0bb7966ed4c39a47bd0175"
          },
          {
            "seconds": 1680,
            "observation": "28分钟仍黑场，仅右上水印。",
            "frameSha256": "340935079bd07d967bca283e6f63c8de83f5831f8e6b3c6931d18884802b17c4"
          },
          {
            "seconds": 1860,
            "observation": "31分钟仍黑场，仅右上水印。",
            "frameSha256": "f53a3c71c1a3e357352b1e8778383755bb694ac8adb29d26f2b29b1c185f9edf"
          }
        ]
      },
      "learningNotes": "## 00:00—02:00 · 用 Tom 问候语说明格式化输出\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=14&t=0)\n\n作者先在电脑上的 C 控制台程序演示：提示输入姓名，输入 Tom 后输出问候语。所谓格式化，是先按格式字符串把变量内容放到指定位置，例如把 %s 替换为名字，再把生成的字符输出。这个开场是电脑程序，用于解释概念，不是本节最终 STM32 接收姓名的实验。\n\n随后列出六步：工程改名、整理代码、添加注释、格式化原理、重写 fputc、打印时间。前面整理工作也是实录的一部分，后面的 printf 依赖已有串口初始化，不能从一个空白 main 直接调用就期待引脚出现波形。\n\n## 02:01—05:34 · 工程改名并抽出 My_USART1_Init\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=14&t=121)\n\n把原来的 template 文件夹及工程文件分别改名为 PrintfTest。作者分析原 main 中的三部分：PB6/PB7 引脚配置、USART1 参数配置、五字节发送测试。前两部分共同构成初始化，因此声明并实现 My_USART1_Init，把相关代码移进去，main 只保留对它的调用及测试逻辑。\n\n封装改变代码的摆放位置，串口硬件配置仍沿用上一节：PB6 为 TX、PB7 为 RX，USART1 重映射、115200、八位字长、无校验、一停止位、双向收发。原片初始化结构体的字段限制仍参见前课校注，本段没有展示另行补齐所有字段的动作。\n\n## 05:35—08:37 · 用注释交代用途、参数和配置\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=14&t=335)\n\n作者先给 My_USART_SendBytes 写简介，再说明 USARTx 是串口名称、pData 是待发数据、Size 是数量且单位为字节。随后为 My_USART1_Init 写明引脚与通信格式，并把实现分成“初始化 PB6、PB7”和“初始化 USART1”两段。\n\n注释应帮助读者知道调用前提和配置结果。上一节已指出现场发送函数内部固定 USART1 的差异，本节 07:00 原图仍能看到它；给形参写“串口名称”注释，并不会使函数内部自动变成任意串口通用实现。\n\n## 08:38—11:49 · printf 负责格式，fputc 负责把字符送出去\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=14&t=518)\n\n课件用两步解释 printf：先得到包含 Tom 的完整问候语，再逐字符调用 fputc 输出。对于本节的嵌入式工具链，作者通过提供自己的 fputc，把原来面向控制台的输出路径改到 USART1；这属于本工程采用的重定向方式，不能把课件中的示意函数当成所有 C 运行库的统一源码。\n\nfputc 的 ch 参数是待输出字符，类型为 int；这里转换成 uint8_t 后发送。FILE 指针 f 在这份串口实现中没有参与选择输出目标。实现仍沿用发送课的两步：先等 TXE 置位，再向 USART1 写入字符，最后返回 ch。\n\n## 11:50—14:56 · 重写 fputc，并实际发送 Hello world\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=14&t=710)\n\n现场先写函数名和参数，编辑器提示 FILE 类型未知，于是到文件顶部加入 stdio.h，再回到文件末尾完成实现。下面按 13:25 原片 Keil 画面摘录，省略中文注释。\n\n~~~c\nint fputc(int ch, FILE *f)\n{\n    while (USART_GetFlagStatus(USART1, USART_FLAG_TXE) == RESET);\n    USART_SendData(USART1, (uint8_t)ch);\n    return ch;\n}\n~~~\n\n函数名需与库调用点一致。它等待的是发送数据寄存器空，并没有在每个字符末尾另等 TC；TXE 与整帧发送结束的区别仍适用上一课。\n\n接线保持 PB6/PB7 与 USB 转串口交叉连接，下载器和串口模块都接电脑。串口助手选 115200、八数据位、一停止位、无校验、无硬件流控，接收区选 ASCII。作者删去五字节测试，在串口初始化后调用 printf(\"Hello world. \\r\\n\")，编译、下载，再按复位；接收区出现 Hello world. 和换行。前面还显示一个问号，作者称其对应 FF 并出现在启动时，但本节没有定位其硬件或软件根因。\n\n## 14:57—18:59 · GetTick 的毫秒数怎样拆成时分秒\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=14&t=897)\n\n下一个实验打印“时:分:秒.毫秒”。GetTick 是作者随 delay.h 提供的函数，不是 STM32 标准库接口；它返回启动后增长的毫秒计数，并非年月日或已校准的实时时钟。使用前引用 delay.h，在 main 开头调用 Delay_Init。\n\n原例给定 currentTick=29,430,125。先对 1000 取余得到毫秒 125，整数除以 1000 后剩 29,430 秒；再对 60 取余得到秒 30，整数除以 60 剩 490 分；再对 60 取余得到分 10，除以 60 后剩小时 8。因此结果为 08:10:30.125。\n\n取余保留当前低位单位，除法去掉已经取出的单位，两者交替进行。整数除法直接舍去小数部分，不会把 490.5 分四舍五入为 491 分。原片是用这一个数逐步演算，不是凭记忆填几个独立余数。\n\n## 19:00—22:49 · 按实际变量名打印，最后加入 Delay(100)\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=14&t=1140)\n\n作者注释前面的 Hello world 测试，加入延时模块初始化，在主循环中取数、拆分并输出。下面按 22:50 Keil 画面摘录循环内部，保留其中 miliSeconds 的拼写。\n\n~~~c\nuint32_t currentTick = GetTick();\nuint32_t miliSeconds = currentTick % 1000;\ncurrentTick = currentTick / 1000;\nuint32_t seconds = currentTick % 60;\ncurrentTick = currentTick / 60;\nuint32_t minutes = currentTick % 60;\ncurrentTick = currentTick / 60;\nuint32_t hour = currentTick;\nprintf(\"%02u:%02u:%02u.%03u\\r\\n\",\n       hour, minutes, seconds, miliSeconds);\nDelay(100);\n~~~\n\n%u 按无符号整数输出，02、03 指定至少两位、三位，并在不足时补零。格式中的两个冒号及小数点是要实际发出的字符，实参顺序必须与小时、分钟、秒、毫秒一致。最后加 Delay(100) 是降低打印频率，并不是把 GetTick 的时间单位改成 100 毫秒。\n\n## 22:50—23:25 · 观察时间递增，并辨认源片空尾\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=14&t=1370)\n\n再次编译、下载、复位后，串口助手显示连续的时间行。23:10 画面中可见 00:00:02.020、00:00:02.121、00:00:02.222 等，说明实际行间还包含执行和发送耗时，不能把 Delay(100) 写成实测严格每 100.000 毫秒一次。\n\n作者在约 23:25 结束讲授。源文件总长约 32:18，随后有较长空尾；已核对的 24:00、28:00、31:00 原画面均为黑场，仅留水印。正文止于真实讲授和结果，没有把空尾上的自动识别幻觉扩充成课程内容。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1938.8373125,
        "asrSegments": 479,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "ed7523c80ea4060e1daf584c85fcf6f3755b03c36145e0bba873c042a93b8d77",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 15,
      "phase": "uart",
      "title": "3.6 [串口] 接收数据",
      "duration": 1300,
      "summary": "按接收过程、RXNE、轮询代码、ASCII命令点灯和错误标志的原片顺序讲解，保留现场删错代码与注释倒置的修正说明。",
      "notes": "本节用五字节接收流程引出RXNE，讲解USART_ReceiveData，并在USARTRxTest中以阻塞轮询接收字符。作者现场纠正误删初始化的问题，配置PC13板载LED后，用ASCII字符0、1分别控制熄灭与点亮。原片代码注释有亮灭倒置，正文依据实际语句和实物校正。末尾按PE、FE、NE、ORE顺序解释错误；对NE多数判决和ORE首次触发条件补入ST手册校注，明确区分原片简化示意。",
      "points": [
        "接收移位寄存器与RDR配合，RXNE表示有新数据可读",
        "USART_ReceiveData返回uint16_t，当前八位实验以uint8_t保存",
        "PB6/PB7串口初始化，PC13输出开漏2MHz并以写1灭灯开始",
        "接收字符0写SET灭灯，字符1写RESET亮灯，其余不处理",
        "改名后重新选ST-Link调试器，ASCII命令实物验证",
        "PE、FE、NE、ORE及原片噪声/过载示意的RM0008校注"
      ],
      "cid": 26054952041,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 240,
            "observation": "RxNE全称与RDR非空图，非空时等于1。",
            "frameSha256": "1c45a978bef7cbfdbc337d1068533668b39c98e91e54408e338ef8a445fa6a8c"
          },
          {
            "seconds": 300,
            "observation": "USART_ReceiveData原型返回uint16_t，读取接收数据寄存器。",
            "frameSha256": "f0bdb2a3914f7f5e610b9e03edad69cdbbde3e3471168974e6f4322f68b9253d"
          },
          {
            "seconds": 420,
            "observation": "三步接收代码：等待RXNE、读入byteRcvd、处理。",
            "frameSha256": "515e160c0b8baa31ab2030a64509c732db9c816cc31bade52c79bbf1c9c5b5e3"
          },
          {
            "seconds": 660,
            "observation": "原工程暂误保留My_USART_SendBytes，正在建立LED初始化函数。",
            "frameSha256": "841bf7fa6376a1bc46d1e22986e54bee32cdbd04aa97151896626e76eed43b31"
          },
          {
            "seconds": 700,
            "observation": "PC13模式Out_OD、Speed_2MHz和GPIO_Init可见；尚未写初值。",
            "frameSha256": "f730a80b685ec82ebe343f1ed61369e6342e8e096cda1c83187cc4069edd821e"
          },
          {
            "seconds": 720,
            "observation": "课件字符0写SET、字符1写RESET，中文亮灭注释倒置。",
            "frameSha256": "4a919a4a9dad3df84bbb595a45259eec61d470c5fadfc90de0f2e57e1c4f9b23"
          },
          {
            "seconds": 840,
            "observation": "主函数调用My_USART1_Init和My_OnBoardLED_Init，RXNE轮询使用USART1。",
            "frameSha256": "08f136e26ca4ca0540d4cc3699a4aad962e5bfb3a678b8237bef8e6b46860144"
          },
          {
            "seconds": 900,
            "observation": "Keil现场正录入字符判断和GPIO操作。",
            "frameSha256": "bed6521c727ea0e5d1ca80999654732987de249b54089a438454b069f4721599"
          },
          {
            "seconds": 907,
            "observation": "主循环完成，byteRcvd比较字符0和1，SET/RESET语句与课件相同。",
            "frameSha256": "46f9e05e65fccb055e237dabe4def61f2663215d6d83cd5a96b8425e2e1a391b"
          },
          {
            "seconds": 960,
            "observation": "串口助手ASCII发送0，PC13蓝灯熄灭。",
            "frameSha256": "9050fef004c6f394839907db3c975e6366837a708e48a8a471393786479547b3"
          },
          {
            "seconds": 970,
            "observation": "ASCII发送1后PC13蓝灯明显点亮。",
            "frameSha256": "b2092412d4d544302ca13df7d865d8a8bab89e9bc4fe89df9f724a14a63ad975"
          },
          {
            "seconds": 1080,
            "observation": "PE例为85、奇校验，原数据与收到单bit变化的图。",
            "frameSha256": "a01cb011584b6cdebcecd8c091cc61d3af2a11c180c21569d14ec182bdad69aa"
          },
          {
            "seconds": 1140,
            "observation": "FE示意圈出停止位应高而未识别高的位置。",
            "frameSha256": "88193ada82a29e73c90becb907fed94541cff2f1dc4dcbc77da90dc06950d61f"
          },
          {
            "seconds": 1200,
            "observation": "NE课件在一位标010三采样，原解释需按多数判决校注。",
            "frameSha256": "df68d246b20347cf306b98930608841a91b0c657f04ced3c1f3ca36934aefa1f"
          },
          {
            "seconds": 1260,
            "observation": "ORE课件RDR字节1、移位字节2，字节3尚在外部。",
            "frameSha256": "8bb4d7eeca3eac5049c0bb89b6c871266fc38bfc22859947f397a2ae11b458fd"
          },
          {
            "seconds": 1290,
            "observation": "ORE动画中继续移动字节3，用来说明未及时读导致数据丢失。",
            "frameSha256": "58a7b464f2cc16f7b34ff91ca8f3327dfc1e6664266f42b2ceeff7ecf3ea2431"
          }
        ]
      },
      "learningNotes": "## 00:00—03:04 · 接收端怎样取得一串字节\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=15&t=0)\n\n本节先解释接收过程，再用电脑命令控制 PC13 板载 LED，最后认识四种错误标志。对端发来的帧由 RX 进入接收移位寄存器，硬件逐位收集；一帧接收完成，数据转入接收数据寄存器 RDR，CPU 再从 RDR 读取。\n\n视频用连续五个字节说明软硬件如何配合：硬件接收下一字节的同时，程序应及时取走上一字节。程序处理数据的速度和串口硬件采样的速度不是一回事；即使波特率设置正确，程序迟迟不读寄存器也可能丢数据。\n\n## 03:05—07:38 · RXNE 与接收接口构成三步流程\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=15&t=185)\n\nRXNE 的含义是 Receive Data Register Not Empty，即接收数据寄存器非空。RXNE=1 表示已有数据可读，RXNE=0 则先等待。它与发送课里的 TXE 含义相反：发送需要等空位，接收需要等数据。\n\n`USART_ReceiveData(USARTx)` 从指定串口的接收数据寄存器取数。返回类型为 `uint16_t`，是因为硬件还支持九位数据；当前八位、无校验的实验才使用 `uint8_t` 变量保存。视频归纳的程序顺序为：等待 RXNE 置位、读取数据、根据读到的内容处理。读取不是等待的替代操作，不能不看状态就把一次读数当成新字节。\n\n## 07:39—11:54 · 清理工程，恢复串口初始化和板载灯\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=15&t=459)\n\n作者把工程改名为 `USARTRxTest`，删除上一节的格式化打印测试，准备保留串口初始化。现场一度删错：留下了发送数组函数，却删掉需要的串口初始化，13:13 后又明确纠正并粘回 `My_USART1_Init`。跟着录入时应看修正后的结构，而不是停在早先中间状态。\n\n板载 LED 接 PC13，使用输出开漏、2 MHz 模式，开启 GPIOC 时钟并调用 `GPIO_Init`。该板灯的有效电平沿用 GPIO 实验：写 0 点亮，写 1 熄灭；作者在初始化末尾写 1，让实验从熄灭开始。主函数先调用串口初始化，再调用 `My_OnBoardLED_Init`。串口继续使用 PB6/TX、PB7/RX 的重映射方案。\n\n## 11:55—15:12 · 接到字符后修改 PC13\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=15&t=715)\n\n主循环每次只处理一个字节。下面按 15:07 原片 Keil 主循环摘录，省略注释；引号是程序含义的一部分。\n\n~~~c\nwhile (1)\n{\n    while (USART_GetFlagStatus(USART1, USART_FLAG_RXNE) == RESET);\n    uint8_t byteRcvd = USART_ReceiveData(USART1);\n    if (byteRcvd == '0')\n    {\n        GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET);\n    }\n    else if (byteRcvd == '1')\n    {\n        GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_RESET);\n    }\n}\n~~~\n\n这里比较的是字符 `'0'` 和 `'1'`，不是数值 0 和 1；其他字节不改变灯的状态。`if`、`else if` 共同表达两种互斥命令。RXNE 未置位时，内层空循环一直等待，因此这是阻塞轮询，当前程序不会在等待期间执行其他主循环业务。\n\n原片 12:00 课件和 15:07 Keil 注释把 `Bit_SET` 一侧写成“亮灯”，与实际低电平点亮的接法相反。正文按实际语句、作者口述目标和随后实物结果解释：收到 `'0'` 写 SET 熄灭，收到 `'1'` 写 RESET 点亮，不能照抄倒置的中文注释。\n\n## 15:13—16:16 · 先修正下载器，再用 ASCII 发命令\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=15&t=913)\n\n编译显示无错误、无警告，但首次下载报错。作者把原因定位到改名后调试器配置，进入工程选项的 Debug 页选择 ST-Link Debugger，再次下载成功。这说明编译成功与下载成功需要分别观察。\n\n复位以后，在串口助手发送区选择 ASCII。画面中发送 `0` 时 PC13 蓝灯熄灭，发送 `1` 后蓝灯点亮，作者随后重复切换验证。若发送区使用 HEX，输入 `01` 发出的是数值 1，并不等于字符 `'1'`，因此不会进入上述字符分支。接收区偶有显示不影响本节命令定义，也不能据此补出一份未展示的应答协议。\n\n## 16:17—19:12 · PE 校验错与 FE 帧格式错\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=15&t=977)\n\nPE 是 Parity Error。视频再次用十进制 85 的二进制 `0101 0101` 说明奇校验：数据中四个 1，再加校验位 1 成为奇数个；若传输中一个数据位翻转，接收端统计得到偶数个 1，就能发现校验不符。校验检测通过不能保证所有位都正确，多位变化也可能逃过这种检查。\n\nFE 是 Framing Error。视频画出八数据位、一停止位的帧，并把应该出现高电平停止位的位置圈出来；若该时刻没有识别到停止位，就会出现帧格式错误。理解时应对齐整帧的时间位置，而不是看到数据位里有低电平就判为 FE。\n\n## 19:13—21:39 · NE 与 ORE：原片示意及硬件校注\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=15&t=1153)\n\nNE 是 Noise Error。视频在一位波形中画三次采样，`010` 的采样不一致用于说明检测到噪声。原讲把这种情况称为“既不是 0 也不是 1”，此处需要按硬件手册收紧：STM32F1 仍会按多数采样判出位值，例如 `010` 判为 0，同时设置 NE，表示该数据可靠性有问题；并非寄存器里存入一个第三种逻辑值。\n\nORE 是 Overrun Error。原片用第一个字节留在 RDR、后续字节继续到来的动画说明“程序读得太慢导致丢失”。动画把第二字节留到第三字节覆盖时才解释错误；准确触发条件应以 RXNE 为准：新字符已收完、准备转入 RDR 时，旧数据仍未取走、RXNE 仍为 1，就会置 ORE，原有 RDR 内容保留，新收到的数据发生丢失风险，不必等第三个字节才首次报错。\n\n以上两点为本站依据 [ST 官方 RM0008](https://www.st.com/resource/en/reference_manual/rm0008-stm32f103xx-advanced-armbased-32bit-mcus-stmicroelectronics.pdf) 第 27.3.3 节、表 191 和 USART_SR 说明所作校注。原片本节介绍错误含义，没有给出完整的错误恢复处理程序，不能把前面的点灯循环视为已处理所有接收异常。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1299.5626875,
        "asrSegments": 462,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "2ee3547391f1e4238581e8b79538aa0ca8047c4df565e831b9eb1234c7b3347c",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 16,
      "phase": "uart",
      "title": "3.7 [串口] 封装常用功能",
      "duration": 1386,
      "summary": "在USARTLibTest中引用my_lib/usart，逐项测试五种发送接口，再用单字节接收控制PC13及CRLF行接收回显，保留漏配速度的现场修正。",
      "notes": "本节从重复查询标志的负担引出库封装，在新USARTLibTest中复制已有初始化，引用my_lib中的usart.h。作者以F12查看定义和注释，逐项验证单字节、数组、字符、字符串及格式化发送，再以ReceiveByte重做板载LED命令；初次GPIO配置漏写速度，随后补2MHz。多字节接收未测，最后实际使用ReceiveLine的CRLF分隔、100长度和无限超时接收一行并回发，演示结束符未齐时不回显。",
      "points": [
        "复用串口初始化，usart.h声明与usart.c实现，F12阅读注释",
        "五种发送：SendByte、SendBytes、SendChar、SendString、Printf",
        "HEX观测5A和01至05，ASCII观测a、Hello world及Tom问候",
        "ReceiveByte字符0/1点灯，GPIO_Speed漏写后补2MHz",
        "ReceiveBytes仅列出且明确未实测，ReceiveLine五参数及0/-1/-2返回说明",
        "LINE_SEPERATOR_CRLF和负超时，缺分隔符不回显、补齐后回显"
      ],
      "cid": 26054952078,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 300,
            "observation": "usart.h列五种发送、三种接收，宏实际拼写LINE_SEPERATOR，CR/LF/CRLF。",
            "frameSha256": "a71c67ecb030fbcb3697ec4f3bd5b4943cdb974a6be9ff606f64842e686703c3"
          },
          {
            "seconds": 480,
            "observation": "My_USART_SendByte实现调用My_USART_SendBytes(USARTx,&Data,1)。",
            "frameSha256": "b98f54f5f92e3c1ee340c49a91686cb6c71edf7e0286ff2608e048d6a4e3b8b8"
          },
          {
            "seconds": 540,
            "observation": "main引用usart.h，调用My_USART_SendByte(USART1,0x5a)。",
            "frameSha256": "db5e09b8ea79c6e7addd65d69ff1b16fc1b78678150940a19d6757ee7e2eb412"
          },
          {
            "seconds": 600,
            "observation": "串口助手HEX与板子复位，发送结果目标5A前还有FF。",
            "frameSha256": "26f0d4b7bcb5af50ab5da17a42411024388ea4b561cd5171ff4c9f91e950781c"
          },
          {
            "seconds": 660,
            "observation": "库数组发送实现中TXE和SendData均使用USARTx。",
            "frameSha256": "43182f7fdc5831332df36bad014d1ea2ea57fbf539059fb96fb76ea5fb2906ab"
          },
          {
            "seconds": 720,
            "observation": "HEX窗口累计显示FF 5A和01至05。",
            "frameSha256": "4331a60085f922227f1c08f4d338f08d8ae3c013c204e563e89bf23aee449c5a"
          },
          {
            "seconds": 840,
            "observation": "字符a测试已注释，当前SendString文本为Hello world.加CRLF。",
            "frameSha256": "686eebaa5c17e7084ea0e44d9c50237f3d7ae6c4b28287ce0cf6e19b32210590"
          },
          {
            "seconds": 900,
            "observation": "const char *strName=Tom，Printf格式串Hi,%s! Nice to meet you!。",
            "frameSha256": "7e2bc94f2f977966d972032cb1116ad4f957dc0804ee156b5da570677c135777"
          },
          {
            "seconds": 960,
            "observation": "头文件ReceiveByte单串口参数、返回uint8_t，三接收声明可见。",
            "frameSha256": "3abe5ff9db2134f562ace9d23ba8493ab834b3421422ede516fce35f448bf2e0"
          },
          {
            "seconds": 1080,
            "observation": "PC13正录入输出开漏，尚缺GPIO_Speed字段。",
            "frameSha256": "40bed0a806bb30c188db50c65b9d3d72d520ea834d79aaed4221b1d459503933"
          },
          {
            "seconds": 1115,
            "observation": "发现漏速度，现场正在补GPIO_Speed；字符0写SET、1写RESET。",
            "frameSha256": "2d7f539e9d9305d4568e1f4fd5b8624012b6b048621abc2c0bace5de08c82c87"
          },
          {
            "seconds": 1200,
            "observation": "ReceiveLine注释明确参数、超时毫秒、负数无限和返回0/-1/-2。",
            "frameSha256": "4b36cff520e0615c0e9f6e9a12ce4659e269267d0d70eb56f2fb2b74bf01759b"
          },
          {
            "seconds": 1260,
            "observation": "点灯代码被注释，前方GPIO配置已包含Speed_2MHz。",
            "frameSha256": "d6c97930dd3a8ccd6a1b05aad4b2f4ad01a9179d4cfd840114d2220506644d31"
          },
          {
            "seconds": 1320,
            "observation": "buffer[100]与ReceiveLine(USART1,buffer,100,LINE_SEPERATOR_CRLF,-1)==0。",
            "frameSha256": "1e389707c4964ee711093c7fab05215eff53aafad44e20baa74f200eeeca0432"
          },
          {
            "seconds": 1335,
            "observation": "成功分支补入My_USART_SendString(USART1,buffer)。",
            "frameSha256": "e46dccedf2aefcbe898dc3f6071441717b5c235e640bd5fcac624920460453c3"
          },
          {
            "seconds": 1372,
            "observation": "串口助手ASCII，已显示Hello world和123；正在单独补发CRLF，自动解析转义符勾选。",
            "frameSha256": "fe5b9a419dc0b9d4621d1d856c49e12b0fa46092b7d8737da0521872d2553339"
          }
        ]
      },
      "learningNotes": "## 00:00—01:45 · 为什么把串口代码封装成库\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=16&t=0)\n\n前几节每次发送都要查询 TXE、写发送寄存器、等待 TC，接收要查询 RXNE、读取数据；为了使用标准 printf，还要重写 fputc。本节把这些重复操作交给 my_lib 中的函数，让主函数更接近“发一个字节”“收一行并回发”这样的实际意图。\n\n视频的重点是阅读并调用已经封装的接口。封装减少调用处的代码，不会自动完成引脚、时钟和 USART 参数初始化，因此进入新工程仍先准备 My_USART1_Init。\n\n## 01:46—05:21 · 新建 USARTLibTest，认识 usart.h 与 usart.c\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=16&t=106)\n\n作者解压母版 template.rar，把文件夹和工程文件改名为 USARTLibTest，从 PrintfTest 复制串口初始化实现，在主函数前放声明，并在主函数内调用。沿用的配置是 USART1、PB6/TX、PB7/RX、115200、八位、无校验、一停止位、收发双向。\n\n工程树中的 my_lib 包含 usart.h 和 usart.c：头文件列出可供调用的函数及宏，源文件放实现。主程序引用 #include \"usart.h\"，再调用这些函数。作者演示先编译工程，在头文件函数名上按 F12 跳到定义，通过函数前的注释确认参数和返回值，而不是只凭名称猜用法。\n\n## 05:22—12:01 · 单字节与数组发送，先在 HEX 中观察\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=16&t=322)\n\n发送接口共有五种。首先测试 My_USART_SendByte，第一个参数选串口，第二个参数给要发的字节；实际例子是 0x5a。08:00 原片源码里，该函数将参数地址和数量 1 交给 My_USART_SendBytes，体现单字节功能复用数组发送功能。\n\n首次下载前又遇到调试器未选择的问题，作者进入 Debug 选择 ST-Link Debugger 后重新下载。串口助手使用 COM13、115200、无校验、八位、一停止位、无流控；端口号属于录制时电脑，自己操作要选实际模块端口。接收区选 HEX，复位后出现目标 5A，前面仍有额外 FF。作者称它在启动时出现，但本段没有定位或排除根因，不能把这句话扩展为所有硬件复位都会发送 FF。\n\n第二个接口 My_USART_SendBytes 接收串口、数组地址、字节数量。作者将单字节测试注释，再定义 byteArray 为五项 1、2、3、4、5，数量传 5；复位后的 HEX 窗口可见 01 02 03 04 05。11:00 所示库函数中，查询标志和写入都使用传入的 USARTx，已不同于前课手写函数内部固定 USART1 的版本。\n\n## 12:02—15:13 · 字符、字符串与格式化输出逐个测试\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=16&t=722)\n\n接着分别测试 My_USART_SendChar、My_USART_SendString 和 My_USART_Printf。下面把各次实际调用整理在一起；原片每次会注释前一组测试，并非让以下所有调用同时运行。\n\n~~~c\nMy_USART_SendByte(USART1, 0x5a);\nuint8_t byteArray[] = {1, 2, 3, 4, 5};\nMy_USART_SendBytes(USART1, byteArray, 5);\nMy_USART_SendChar(USART1, 'a');\nMy_USART_SendString(USART1, \"Hello world. \\r\\n\");\nconst char *strName = \"Tom\";\nMy_USART_Printf(USART1, \"Hi, %s! Nice to meet you! \\r\\n\", strName);\n~~~\n\n字符测试把接收区改为 ASCII，显示小写 a。字符串测试看到 Hello world. 后换行；\\r\\n 表示回车加换行。格式化接口比标准 printf 多了开头的串口参数，%s 则由 strName 指向的文本替换，结果是向 Tom 打招呼。主程序无需再次编写 fputc，因为调用的是库中提供的格式化接口；仍不能据此断言库的任意长度、并发调用等边界已被测试。\n\n## 15:14—18:58 · ReceiveByte 重做字符点灯，保留漏配与修正\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=16&t=914)\n\n接收接口有 My_USART_ReceiveByte、My_USART_ReceiveBytes、My_USART_ReceiveLine。单字节接口只需串口参数，返回收到的字节。作者先注释发送测试，在主循环中用 char c = My_USART_ReceiveByte(USART1) 取代前课手写的 RXNE 等待和读取，再判断字符 0、1：前者向 PC13 写 SET 熄灭，后者写 RESET 点亮。\n\n为了使用 PC13，现场添加 GPIOC 时钟、Pin13、输出开漏以及 GPIO_Init。首次测试灯没有按预期亮，作者随后指出漏写最大输出速度，并补 GPIO_InitStruct.GPIO_Speed = GPIO_Speed_2MHz；21:00 之后的画面仍能看到这行已补齐的代码。应记录“先漏配、再补配、再下载”，不能将最早的中间代码直接写成最终成功版本。\n\n复位后串口助手发送区选择 ASCII，发送字符 0 灭灯、1 亮灯，复现上一节现象。My_USART_ReceiveBytes 本节仅列出，作者明确跳过实测，因此不要为它补写一段不存在的现场演示。\n\n## 18:59—22:15 · ReceiveLine 的五个参数与回显代码\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=16&t=1139)\n\n作者按 F12 查看 My_USART_ReceiveLine 的源码注释：五个参数依次为串口、输出数组、最大长度、行分隔符、超时毫秒数。成功返回 0；超时返回 -1；画面注释还列出超过最大长度返回 -2。负的超时值表示无限等待，示例使用 -1。\n\n原片宏名拼写为 LINE_SEPERATOR_CR、LINE_SEPERATOR_LF、LINE_SEPERATOR_CRLF，分别表示 \\r、\\n、\\r\\n；调用时需按该头文件实际拼写，不能擅自改成另一个英文拼法。末尾把点灯代码注释，改为下面的行回显；按 22:15 Keil 画面摘录。\n\n~~~c\nwhile (1)\n{\n    char buffer[100];\n    if (My_USART_ReceiveLine(USART1, buffer, 100,\n                            LINE_SEPERATOR_CRLF, -1) == 0)\n    {\n        My_USART_SendString(USART1, buffer);\n    }\n}\n~~~\n\nbuffer 用来接收输出文本，100 与数组长度对应；只有返回 0 才发送内容。超时 -1 的“无限”等待与返回值 -1 的“已超时”属于不同位置的含义，不能混为一谈。\n\n## 22:16—23:05 · 用缺失结束符的实验检验“一行”\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=16&t=1336)\n\n编译、下载、复位后，发送区和接收区都用 ASCII。作者发送 Hello world 加 \\r\\n，收到对应回显；发送 123 加结束符也能回显。只发 123、暂不加 \\r\\n 时没有新回显，补发结束符后才把之前累积的内容返回。\n\n这里的关键是程序按双方约定的分隔符判定一行完成，串口本身只传字节，不会替程序判断自然语言行尾。串口助手勾选“自动解析转义符”才会把输入的 \\r\\n 变成相应控制字节；否则可能只是发出反斜杠和字母，接收函数会继续等待。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1385.7706875,
        "asrSegments": 579,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "95d4716443b8efbeb75d7e6620a244f8ea96c5177df04d8a99025278724fd825",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 17,
      "phase": "i2c",
      "title": "4.1 [I2C] 基本电路结构",
      "duration": 1300,
      "summary": "沿原片七部分，从串口直接连接的扩展局限进入SCL/SDA开漏上拉与逻辑线与，再分别解释主机时钟、主机数据和从机数据的驱动关系。",
      "notes": "本节完整原片内容按七部分展开，先由前章USART直接接线引出共享总线，再画SCL、SDA及两个上拉电阻和七位地址。核心是开漏写0下拉、写1高阻，全体释放为高、任一设备拉低则为低。作者依次说明主机产生时钟、主机控制SDA、从机发送时主机让出SDA；正文补足地址空间与实际设备数量、主机时钟与时钟拉伸、电阻下拉时仍导电等边界，避免把入门示意绝对化。讲授约14:20结束，源21:39后部黑色空尾未写成新增知识。",
      "points": [
        "当前直接串口接法有限，图示I2C一主多从共享两线",
        "SCL与SDA分别上拉、开漏信号输出，七位地址选择目标",
        "地址空间不等于任意设备数量；实际还有冲突、电容、时序限制",
        "全体释放才为高、任一拉低则为低，电路实现逻辑与",
        "主机发时钟或数据时其他端释放，对应主机与一串1的逻辑式",
        "从机发数据时主机及其他从机释放SDA，讲授14:20结束，源片长空尾"
      ],
      "cid": 26054952169,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 60,
            "observation": "七部分目录，从串口缺点至主机/从机发送数据。",
            "frameSha256": "543e6ab69c3d6cfd0d8a5bab938ac15d12e1c3a07e338164aad0ebf05362ef85"
          },
          {
            "seconds": 120,
            "observation": "最小系统板USART1/2/3分别直接连设备的示意。",
            "frameSha256": "89216b53afe6fa854c25429792a4331d17864a5e8b1480d15d529992e4fa9e1c"
          },
          {
            "seconds": 180,
            "observation": "一主多从共SCL/SDA，各自上拉，图示七位地址和开漏输出要求。",
            "frameSha256": "29ae9c07a5cc69da6404a0e4a58f6e8f26043fedea808009a1116273b0a0dab1"
          },
          {
            "seconds": 240,
            "observation": "七位地址0000000至1111111、0至127的数学范围，非保证实际挂满。",
            "frameSha256": "4429ba4c696afbdd463c0990fe22e8d23fa8850c0638e7bfc178df2ec13386f0"
          },
          {
            "seconds": 360,
            "observation": "开漏输出与SCL/SDA两个上拉电阻是线与电路前提。",
            "frameSha256": "af3f94132f60311830c723eb27f2542eed9e8acf04a0295b3c1161f2ad07cc66"
          },
          {
            "seconds": 420,
            "observation": "上拉电阻圈出、下方开漏输出圈出，准备解释逻辑与。",
            "frameSha256": "dfddecafe9f40b7c8dd53ae3a7554bb38325659a2deedca9e93642fc5f783c46"
          },
          {
            "seconds": 480,
            "observation": "左右对照全1结果1、从机2写0结果0。",
            "frameSha256": "e17f6289588298088e5f3e2967cfdb7089cafbbd6472dbe930ada7470c0f29b0"
          },
          {
            "seconds": 540,
            "observation": "全体开漏释放高阻，上拉将SCL维持高，任一0拉低。",
            "frameSha256": "f1b7da3a4467b462164353bf8d8f978aa162a407221f49af99a48b845a061d8a"
          },
          {
            "seconds": 660,
            "observation": "主机SCL交替0/1，其余SCL均1，右侧形成方波。",
            "frameSha256": "190de0f140e0dffd4ced87c3c353ace259ed28df9c5fac1d30a3124c278145ab"
          },
          {
            "seconds": 780,
            "observation": "主机SDA交替0/1，其余从机释放，公式Y=主&1&1…&1。",
            "frameSha256": "2d5d6879d811a2d299528fd22c0749cd54356fa87da06ad89a7af123a668cd03"
          },
          {
            "seconds": 840,
            "observation": "目标从机发送，主机与其他从机SDA标1断开，目标从机控制0/1。",
            "frameSha256": "cdd260ed4722007e2ba35c836c3760dfeeb52649eb6baeb85db51402bc4734fa"
          },
          {
            "seconds": 900,
            "observation": "15分钟原片黑场，仅右上水印。",
            "frameSha256": "108b6523e4dac5f76f092a5a15270810e1c4d2a7c874b84fed462c908c5c45b1"
          },
          {
            "seconds": 1020,
            "observation": "17分钟原片黑场，仅右上水印。",
            "frameSha256": "108b6523e4dac5f76f092a5a15270810e1c4d2a7c874b84fed462c908c5c45b1"
          },
          {
            "seconds": 1140,
            "observation": "19分钟原片黑场，仅右上水印。",
            "frameSha256": "76475589d631ff1a03645b3c0695972bf21890d6d1eb5a70b9cae305c92b341d"
          },
          {
            "seconds": 1260,
            "observation": "21分钟原片黑场，仅右上水印。",
            "frameSha256": "76475589d631ff1a03645b3c0695972bf21890d6d1eb5a70b9cae305c92b341d"
          }
        ]
      },
      "learningNotes": "## 00:00—02:22 · 从直接串口接线引出共享总线\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=17&t=0)\n\n新章开始，作者先用前章 TX/RX 交叉连接指出扩展设备的困难：当前 F103C8 有 USART1、USART2、USART3，按前章每个串口直接接一台设备的方式，能独立接的数量有限。因此本章引入 I²C，让多个器件共享一组通信线。\n\n这一比较针对前章的直接串口接法，不应扩大成一切使用串行数据的系统都只能一对一。原片依次安排七部分：串口的缺点、总线结构、两根线的作用、逻辑线与、主机发时钟、主机发数据、从机发数据。本节始终围绕这张基础电路图解释，没有录入 I²C 驱动。\n\n## 02:23—04:45 · SCL、SDA 共用，两根线分别上拉\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=17&t=143)\n\n原图把单片机作为一台主机，下方接从机 1、2 到 n。所有设备的 SCL 相接，成为串行时钟线；所有 SDA 相接，成为串行数据线。两根线上各放一只到 Vdd 的上拉电阻，设备信号输出采用开漏结构。图示是一主多从的入门接法，不代表 I²C 规范只允许一个主机。\n\n作者为从机标上七位地址，从 0000000 到 1111111，共 128 种编码，扣去特殊用途后仍有较多可分配地址。主机先发目标地址，建立本次通信后传数据，再换地址与另一设备通信。\n\n原讲用“数量几乎不受限制”“一百多个设备”强调扩展性，此处应区分地址空间和实际可接数量：地址不能冲突，还受保留地址、总线电容及电气时序等限制，不能仅凭七位编码保证任意接满上百个模块。这个边界以及多主机能力可对照 [NXP 官方 UM10204](https://www.nxp.com/docs/en/user-guide/UM10204.pdf)。\n\n## 04:46—05:52 · 时钟给节拍，数据可以双向\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=17&t=286)\n\n右侧波形上方是 SCL 的高低变化，下方是 SDA 数据。视频用一个时钟周期传一位解释节拍关系：SCL 频率决定传输节奏，SDA 低表示 0、高表示 1。数据可以由主机发给从机，也可以反向传回。\n\n原片说时钟由主机产生，是当前示例的基础前提。由于 SCL 本身也采用开漏共线，某设备若仍拉低它，总线不会因主机“写 1”立刻升高；规范中的时钟拉伸正利用这种能力。因此“主机安排时钟节拍”不等于 SCL 电平始终只受主机一个引脚支配。\n\n## 05:53—07:57 · 开漏输出为何适合逻辑线与\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=17&t=353)\n\n作者回顾 GPIO 开漏结构：写 0 时下侧晶体管导通，引脚拉低；写 1 时下侧也断开，输出高阻。高阻的含义是该输出端不再主动拉低，不是引脚用推挽方式输出一个强高电平。\n\n逻辑与运算的规则是全部输入为 1，结果才为 1；任一输入为 0，结果就为 0。把多个开漏端并到一根上拉线上，正好可以用电路实现这一关系。这里讲的是信号输出级的电气行为，后续硬件 I²C 仍需按复用功能配置引脚，不能只把所有相关 GPIO 一律设成普通输出便认为驱动已完成。\n\n## 07:58—10:00 · 两张电路图推导全 1 与任一 0\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=17&t=478)\n\n作者只选 SCL 来分析，SDA 原理相同。第一张图让全部设备写 1：各下拉晶体管都断开，没有器件把线拉低，上拉电阻使总线升高。用逻辑式写就是 Y=1&1&1…&1=1。\n\n第二张图让其中一个从机写 0，其余设备仍写 1。写 0 的设备把共线拉到低电平，其他高阻端不会与它争着输出高，于是 Y=1&0&1…&1=0。这个“任何一方能拉低、全体释放才为高”就是逻辑线与。\n\n原讲在这里说上拉电阻“不起作用”，准确理解是它不能把被有效下拉的线维持为高，而不是电阻停止导电；此时仍有从供电经上拉电阻流向下拉端的电流。上拉与开漏是配套关系，不能把上拉删掉后仍期待全体释放时得到可靠高电平。\n\n## 10:01—11:59 · 主机如何产生时钟\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=17&t=601)\n\n当前示例先让所有从机的 SCL 写 1、保持释放。这样总线电平就跟随主机的开漏动作：主机写 0，下拉导通、SCL 低；主机写 1，下拉断开、上拉使 SCL 高。交替进行便形成右侧方波。\n\n公式 Y=主机&1&1…&1 强调这个前提：其他设备都释放时，结果才由主机这一项决定。将此处与上一段任一设备拉低的图对照，便能理解为什么检查实际总线电平与只看输出命令不同。\n\n## 12:00—13:03 · 主机如何向从机发数据\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=17&t=720)\n\n把分析对象换成 SDA。主机要发送数据，先让各从机释放 SDA；主机根据待发位决定拉低还是释放。发 0 就下拉为低，发 1 就释放、由上拉得到高。右侧数据波形与上方时钟按位对应。\n\n本段主要解释谁驱动线路，以及高低电平如何形成。起始、停止、地址及应答尚要到下一节按协议组合，不能把一串随意的 SDA 高低变化当成已经完成一笔器件读写。\n\n## 13:04—14:20 · 从机发送时，主机必须让出 SDA\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=17&t=784)\n\n要从某一从机读取，主机先在 SDA 上写 1，释放数据线；除目标从机外的其他从机也保持释放。于是由目标从机按位拉低或释放 SDA，主机观察线路的低或高，取得 0、1。\n\n14:00 原图把主机和其他从机的 SDA 旁写 1、画断开标记，只保留目标从机控制数据线，清楚展示了方向切换。改变的是谁有权拉低 SDA，线路本身和上拉电阻不用交换；SCL 仍用于给本次收发提供节拍。\n\n作者约 14:20 结束讲授。源片总长约 21:39，后部为空尾；15:00、17:00、19:00、21:00 原尺寸帧均为黑场，仅保留水印。正文止于这七部分电路解释，没有把空尾识别中的重复词句写成课程知识。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1299.5626875,
        "asrSegments": 335,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "772e4fc50fa29a825377ac6939445c7ed275f396af908dae5ab729c17a933327",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 18,
      "phase": "i2c",
      "title": "4.2 [I2C] 通信协议",
      "duration": 919,
      "summary": "沿起止条件、七位地址加方向、逐字节应答和两个手绘例题讲解I2C，明确原片地址采用左移口径及0x64被误写为0x54的笔误。",
      "notes": "本节完整顺序为流程回顾、帧格式、起止条件、寻址、数据传输、两笔手绘例题。写例依次画线上地址0x78、数据0x5A与0x33及应答；读例画线上地址0x21，从机发数据，主机最后NACK停止。原片所称0x78/0x20采用已左移的地址字节口径，正文结合位序和NXP规范区分规范七位地址。读例题设0x64，原片末图却写01010100，确为0x54，正文保留并更正这一差异，不冒称实测数据。",
      "points": [
        "起始和停止均在SCL高时辨认SDA下降或上升",
        "地址七位A6至A0加R/W，发送方释放SDA让接收方ACK",
        "片中0x78/0x20为左移口径，对应七位0x3C/0x10，线上读0x79/0x21",
        "写例题：0x78地址字节，数据0x5A和0x33，各有从机ACK",
        "读例题题设0x64，原图写01010100实为0x54，正文明确校正",
        "最后读字节由主机NACK再停止，不把通用帧图末ACK机械照抄"
      ],
      "cid": 26054952392,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 60,
            "observation": "连接与流程图：SCL/SDA上拉，起始后七位地址加读1写0。",
            "frameSha256": "762b2f7f4dfc9ebd04538e753e30a57848872cc6a209f1133d6036f2fa5e3b3c"
          },
          {
            "seconds": 120,
            "observation": "同一通信流程准备对应到帧格式。",
            "frameSha256": "88779976ec5ae88f106d12f31057ddec320f1ccaeab324de27becd52023b1c40"
          },
          {
            "seconds": 180,
            "observation": "整帧图A6至A0、R/W、ACK、数据D7至D0，多个数据字节。",
            "frameSha256": "44e62c9f7b26691b028813825bc483f48cec1aaeb7cb503dce25b99d35c12967"
          },
          {
            "seconds": 240,
            "observation": "起始SCL高SDA下降，停止SCL高SDA上升，整帧两端对应。",
            "frameSha256": "57b8794288821c0abc413b6e2db41038a32219c702e9f22981cf6999ee20b20b"
          },
          {
            "seconds": 360,
            "observation": "寻址0x78读的实际八位写为01111001，对应线上0x79。",
            "frameSha256": "e689308fbe21ceba78938c7cc0ee31d08841c4731b0654211d67eb21945dc750"
          },
          {
            "seconds": 420,
            "observation": "地址位A6/A5/A0及R/W写到波形，第九拍应答另列。",
            "frameSha256": "d7e8f7ee7a087b2b5cc73e6cb1a5ae376346d77559915fe3408c2bdb376926e8"
          },
          {
            "seconds": 480,
            "observation": "ACK图由主机释放SDA，从机将SDA拉低。",
            "frameSha256": "cd3bdd8d6f90abb78251ba4c9aab8d2ad8a820d4b4ef273b43c34a71dc564c7d"
          },
          {
            "seconds": 600,
            "observation": "例题：向0x78写0x5a、0x33，从0x20读且假设0x64。",
            "frameSha256": "67f7bf14574f7aacf5d64749556097b5516480dead3bcc73a8bdd4082304bbb9"
          },
          {
            "seconds": 660,
            "observation": "写地址01111000已画，下一数据开始写0x5a。",
            "frameSha256": "b7e01ebf85cdb3e87f2023ecb874ce8b5d33f44fa9208be006ac2f1768aa46f7"
          },
          {
            "seconds": 720,
            "observation": "0x5A=01011010，第二项0x33=00110011，作者继续画波形。",
            "frameSha256": "58e3c90d822b2f0b01d9cd76267f8b12589e889263c61ff03cb5bbe01a15bf4c"
          },
          {
            "seconds": 745,
            "observation": "写例完整两字节及ACK，正在构造最后停止条件。",
            "frameSha256": "cafcc60b061ede389327dcda8d5f010d3a6ca71505227557ad2654636614ca24"
          },
          {
            "seconds": 780,
            "observation": "第二笔重新起始，原题设备标0x20。",
            "frameSha256": "259a0d595c0e1c6b03cbf33417d53a0e36f5e44d0fbcdc64c890fc8b783be984"
          },
          {
            "seconds": 840,
            "observation": "读地址00100001即0x21，从机ACK；准备画0x64。",
            "frameSha256": "3b96883ba51df6fcf8c8776c75317fec417f80de29b934f942e041906c479912"
          },
          {
            "seconds": 900,
            "observation": "题设0x64却手写01010100并据此画数据，主机末拍不拉低。",
            "frameSha256": "82b47ae95c2fd771c3e1f78d3753c8799152dfccbdcbecb8c235465ca125fabd"
          },
          {
            "seconds": 905,
            "observation": "片尾读图仍为01010100，NACK与停止已画，未修正数据笔误。",
            "frameSha256": "e502e33588600b92cacdd4d4c6606eb6f2f668c514b02cd73fa7b7726cf34b51"
          }
        ]
      },
      "learningNotes": "## 00:00—03:09 · 把通信流程对应到数据帧\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=18&t=0)\n\n本节先回顾 I²C 连接和通信流程，再依次展开起止条件、寻址、数据传输，最后画两个例题波形。主机发起通信，先发送起始条件；随后发送七位地址和一位读写方向，写为 0，读为 1；寻址成功后，按选定方向传输一个或多个字节，最后由主机停止。\n\n课件把这个流程画到一条水平数据帧上：起始、地址加方向、应答、数据字节及应答、停止。与前面异步串口的一帧相比，这里一笔通信可以含多个数据字节。看图时需要同时辨认“现在处于哪一个阶段”和“此阶段由谁驱动 SDA”，不能只记住高低电平序列。\n\n## 03:10—05:13 · 起始与停止都以 SCL 高为条件\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=18&t=190)\n\n空闲时 SCL、SDA 都为高。SCL 保持高时，SDA 从高变低形成起始条件；同样在 SCL 高时，SDA 从低变高形成停止条件。作者把这两处变化分别画到整帧最左端和最右端，再放大成两张小图。\n\n因此不能把任何 SDA 下降沿都叫作起始，必须同时查看当时 SCL 是否为高。数据位传输期间则要让 SDA 在 SCL 的高电平区间保持稳定，改变位值应安排在低电平期间；起止条件正是需要单独识别的特殊变化。\n\n## 05:14—08:12 · 七位地址、读写位与第九拍应答\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=18&t=314)\n\n地址按 A6 到 A0 发送，后面跟 R/W 位。主机发送完这八位以后，释放 SDA，让接收地址的从机在应答拍拉低；主机检测到低，便得到 ACK。若没有器件拉低，上拉电阻使线保持高，表示未得到应答。\n\n这里“释放”不是推挽主动输出高电平，而是开漏输出不再拉低；电阻和其他设备共同决定总线电平。发送方必须让出这一个时隙，否则接收方无法独立给出应答。ACK 是字节之后独立的一拍，不应塞进地址七位或数据八位中计数。\n\n原片先做“寻址 0x78（读）”例子，画面实际写出 0111 1001，也就是地址阶段在线上发送 0x79。**地址口径校注：这里的 0x78 已采用七位地址左移一位的表示，对应规范七位地址 0x3C；末位再替换为读写方向。** 若使用一个接受原始七位地址的接口，应传 0x3C，不能照抄 0x78 后再无条件左移一次。判断某个库接口需要哪种口径，必须查其参数约定。\n\n这一校注依据原片的实际位序和 [NXP 官方 UM10204](https://www.nxp.com/docs/en/user-guide/UM10204.pdf) 的七位地址加第八位 R/W 定义。用统一关系表达，就是线上地址字节 =（七位地址左移 1 位）加读写位；视频例题数字需按这个关系理解，不能把不同口径混称“七位地址”。\n\n## 08:13—09:14 · 每个字节后由接收方应答\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=18&t=493)\n\n数据传输也按“八位数据、应答一拍”重复。主机写数据时，主机是发送方，从机是接收方，因此从机应答；主机读数据时，从机是发送方，主机是接收方，因此主机负责应答。固定不变的是接收方给应答，而不是永远由某一类设备给应答。\n\n每发送一个字节，发送方释放 SDA，接收方若确认继续接收就拉低。最后一个读字节如何结束，作者留到第二个完整例题说明。\n\n## 09:15—12:37 · 先向片中“0x78”写 0x5A、0x33\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=18&t=555)\n\n题目分成两笔独立通信，第一笔向原片标为 0x78 的从机写两个字节。按上面的口径，它的七位地址是 0x3C，写方向的线上地址字节仍为 0x78。作者先画起始条件，再写地址字节 0111 1000，最后一位 0 表示写；随后主机释放 SDA，由从机拉低应答。\n\n第一个数据 0x5A 展开为 0101 1010，从最高位开始发；八位后仍是从机 ACK。第二个数据 0x33 为 0011 0011，八位后从机再次 ACK。12:06 作者发现自己刚画的一处波形高低不对，当场改为高电平，再继续画应答和停止，应以修正后的图为准。\n\n最后先使 SCL 为高，再释放 SDA 让它上升，形成停止条件。纸上跟画时可以写成“起始→0x78→从机 ACK→0x5A→从机 ACK→0x33→从机 ACK→停止”，每个字节保留八位和单独的应答拍，避免数时钟时把应答漏掉。\n\n## 12:38—14:26 · 再读片中“0x20”，分清地址与数据\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=18&t=758)\n\n第二笔先重新发送起始条件，再寻址另一个设备。原片将设备标为 0x20，方向为读，实际画出的线上地址字节是 0010 0001，即 0x21；沿用同一口径，它对应的规范七位地址为 0x10。地址仍由主机发送、从机应答，随后才轮到从机在 SDA 上发送数据。\n\n题设说假定读到 0x64。这是原片手工画波形的假设值，不是连接实物后读取到的测量结果。**原片此处有未修正的二进制笔误：14:00 后写成 0101 0100，15:05 的末图仍保持该写法，实际是 0x54；题设 0x64 的正确展开应为 0110 0100。** 画题设波形时应采用正确八位，但回看原片则能看到二者差异，不能把原图错误悄悄写成已经纠正。\n\n## 14:27—15:16 · 最后一个读字节以 NACK 结束\n\n[原视频定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=18&t=867)\n\n从机发完八位以后释放 SDA，轮到主机应答。因为题目只需要一个字节，不再继续读，主机在应答拍不拉低，让 SDA 保持高，给出 NACK；然后产生停止条件。作者在末尾明确把“不应答”和结束读联系起来，因此不能照开头通用帧图把最后一拍也机械写成 ACK。\n\n最终第二笔应理解为“起始→0x21→从机 ACK→从机数据八位→主机 NACK→停止”。读数据阶段与寻址阶段的发送方发生变化，而结束条件仍由主机发起。至此两道原片练习完成，核心是按时间顺序给每一位标明阶段、方向和驱动者。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 918.2933125,
        "asrSegments": 370,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "03b5226285664a1ac9d50cb0f492aeda252c46de773a11da3dca9dd426178843",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 19,
      "phase": "i2c",
      "title": "4.3 [I2C] I2C 模块的使用方法",
      "duration": 1545,
      "summary": "依次查I2C引脚与复用表、初始化PB8/PB9，连接四针OLED，选择400k快速模式并配置I2C1、编译。",
      "notes": "本节在I2CTest中定义My_I2C_Init，按原片先重映射I2C1，再将PB8/PB9配置为AF_OD、2MHz。随后解释OLED四针及两条信号线上拉，比较标准/快速模式与2:1、16:9低高电平时间比。最后启用I2C1的APB1时钟、施加并释放复位，配置400000、I2C_Mode_I2C和I2C_DutyCycle_2，调用I2C_Init/I2C_Cmd，并在main中调用初始化。末尾编译0错误0警告。",
      "points": [
        "I2C1默认PB6/PB7，重映射PB8/PB9；本例选择重映射",
        "My_I2C_Init中使能AFIO、重映射与PB8/PB9开漏复用输出",
        "OLED的GND/3.3V/SCL/SDA连接及两条总线上拉",
        "SM/FM速率范围与快速模式TLow/THigh=2:1选择",
        "I2C1 APB1时钟、复位、三成员赋值、I2C_Cmd及main调用"
      ],
      "cid": 26054952246,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 240,
            "observation": "引脚与GPIO表：I2C1 PB6/7默认、PB8/9重映射，I2C2 PB10/11，开漏复用输出。",
            "frameSha256": "e48c2a71f11c092b7e2389854d1b5357a13ff5625529abb38ae34cea13f5ea3e"
          },
          {
            "seconds": 430,
            "observation": "函数原名My_I2C_Init，main当时尚无调用。",
            "frameSha256": "26ef29388abe9a53b58e340d340bbf41c23f4c04bca3888d1693dd97211da8de"
          },
          {
            "seconds": 540,
            "observation": "IDE重映射与GPIOB时钟已录入，结构体成员正在输入。",
            "frameSha256": "8d6d9e31d86adcc3cb2f36ebf3335ee1c9707b40a3686edeed0f16386d9f43a2"
          },
          {
            "seconds": 600,
            "observation": "PB8|PB9、AF_OD、2MHz和GPIO_Init(GPIOB)齐全。",
            "frameSha256": "5d1e770922e63b902a43dfd7870493f487509a8518809d1f3bf98923327c53e4"
          },
          {
            "seconds": 720,
            "observation": "OLED四针、PB8/9和两条3.3V上拉的原理图及面包板图。",
            "frameSha256": "3d82baef71678703b5b1262a950afda6470d2a5db7a8e02f3e2b3c841cd78e55"
          },
          {
            "seconds": 960,
            "observation": "快速模式TLow/THigh=2/1与16/9，勾选2/1。",
            "frameSha256": "a1f77da7b3b8633663d7a681ee3d55bdf2b1a49806b5cbc26a13b044c7489797"
          },
          {
            "seconds": 1080,
            "observation": "I2C_InitTypeDef三参数讲解，后三成员灰色标注与从机有关。",
            "frameSha256": "21a66d52618c4377861a4f948261df1841ec33eabc049b5bf581e3614949eccc"
          },
          {
            "seconds": 1200,
            "observation": "I2C APB1时钟、两次复位、三成员赋值与I2C_Cmd的PPT。",
            "frameSha256": "018e7a419d237894d6cf01605f56c4f9c629af59d7cfd0d3095c564a71ba4b6d"
          },
          {
            "seconds": 1380,
            "observation": "PPT参数400000/Mode_I2C/DutyCycle_2。",
            "frameSha256": "16cd3e954c0e8b19088bf50562e3294e02a7931196bf0e2d9cac23893ccedc55"
          },
          {
            "seconds": 1455,
            "observation": "IDE三成员赋值与I2C_Init已完成，尚未I2C_Cmd。",
            "frameSha256": "35e9daccf6e97849e9eaa12da276c61f5f3b534c3f6c239fbe18b4f622622dea"
          },
          {
            "seconds": 1500,
            "observation": "I2C_Cmd总开关讲解。",
            "frameSha256": "df450c3daa0a3cb8c331256a239b4450470894defae0ca42c0b2b101887031f8"
          },
          {
            "seconds": 1529,
            "observation": "main在while前调用My_I2C_Init。",
            "frameSha256": "ff01caec1e4a36590e6eba4e149d3ae4cabc48c20454769c515768e8a0dd21bd"
          },
          {
            "seconds": 1535,
            "observation": "生成hex，0 Error(s),0 Warning(s)。",
            "frameSha256": "d49929d5ecee0eed7954bedfd9e6145c6b7f9312ccf39993e35f3918a10c7f46"
          }
        ]
      },
      "learningNotes": "## 01:02—04:58 · 找到片上 I2C 模块和它的引脚\n\n[观看模块与引脚表](https://www.bilibili.com/video/BV11X4y1j7si/?p=19&t=62)。本节从 I2C 通信协议转向 STM32 内部的 I2C 外设，任务是初始化 I2C1，并把后续要使用的四针 OLED 屏接上。片上 I2C 模块提供 SCL 时钟线和 SDA 数据线，初始化前先确认位置和 GPIO 模式。\n\n视频依次查看引脚分布、重映射和 GPIO 配置三张表。I2C1 默认 SCL=PB6、SDA=PB7；使能重映射后改为 SCL=PB8、SDA=PB9。I2C2 的对应位置是 PB10、PB11。本节选 I2C1，并使用重映射后的 PB8、PB9。\n\n配置表把两条线都列为开漏复用输出。这里“复用”对应由片上 I2C 外设控制引脚，“开漏”对应前面讲过的总线线与连接。它们要配合上拉电阻工作。\n\n## 04:59—10:02 · 建立 I2CTest，先写 My_I2C_Init 的 GPIO 部分\n\n[观看新建工程与函数](https://www.bilibili.com/video/BV11X4y1j7si/?p=19&t=320)。视频从模板工程解压、重命名为 I2CTest，打开后声明并定义 `void My_I2C_Init(void)`，把初始化集中在这个函数中。\n\n先使能 AFIO 时钟，再使能 I2C1 重映射。接着打开 GPIOB 时钟，把两个参数相同的引脚放在一次 GPIO 初始化中。10:00 的 IDE 已显示下面这段代码：\n\n```c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO, ENABLE);\nGPIO_PinRemapConfig(GPIO_Remap_I2C1, ENABLE);\n\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB, ENABLE);\nGPIO_InitTypeDef GPIO_InitStruct;\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_8 | GPIO_Pin_9;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_AF_OD;\nGPIO_InitStruct.GPIO_Speed = GPIO_Speed_2MHz;\nGPIO_Init(GPIOB, &GPIO_InitStruct);\n```\n\n`GPIO_Pin_8 | GPIO_Pin_9` 通过按位或同时选中 PB8、PB9；它们模式和输出速度相同，所以可以共用同一个结构体配置。`GPIO_Mode_AF_OD` 对应前面表中的开漏复用输出。这里的 `GPIO_Speed_2MHz` 是 GPIO 输出速度配置，后面的 I2C 通信速率另由 `I2C_ClockSpeed` 设置。\n\n## 10:03—13:34 · 按四针 OLED 接线图连接总线\n\n[观看原理图与面包板接线](https://www.bilibili.com/video/BV11X4y1j7si/?p=19&t=603)。视频先认四针 OLED：GND、VCC、SCL、SDA，然后逐项把原理图换成面包板连接。屏幕 GND 接单片机地，VCC 接本实验的 3.3V；SCL 接 PB8，SDA 接 PB9。\n\n两条总线各有一颗电阻上拉到 3.3V。图中标注 4.7kΩ，讲解还提到套件中的 1kΩ 电阻可用于本实验。观察 12:00 的图时，可从 OLED 的两根信号线分别追到 PB8、PB9，再检查各自的上拉电阻另一端是否接到 3.3V。视频随后展示连好后的实物，并提醒接上调试器。\n\n本节此时完成的是接线和外设初始化准备，屏幕显示内容的编程接在后续课程。\n\n## 13:35—15:22 · 选择 I2C 速度模式\n\n[观看速率说明](https://www.bilibili.com/video/BV11X4y1j7si/?p=19&t=815)。讲解沿用串口课中的波特率概念：I2C 逐比特传输，每个时钟周期传送一个数据比特，速率描述每秒传输多少比特。\n\n课件列出标准、快速、快速增强、高速和超快等 I2C 速度模式，再圈出本课 STM32 支持的标准模式 SM 和快速模式 FM。标准模式最高 100kbit/s；快速模式最高 400kbit/s。本例选择 400kbit/s，写入初始化参数时使用数字 `400000`。\n\n## 15:23—17:07 · 读懂快速模式的两个占空比选项\n\n[观看时钟波形](https://www.bilibili.com/video/BV11X4y1j7si/?p=19&t=923)。课件把 SCL 的高、低持续时间分别画出，本节所说的 2:1 与 16:9 是 `TLow/THigh`，即低电平时间与高电平时间之比。\n\n2:1 表示低电平占两份、高电平占一份；16:9 表示低电平占十六份、高电平占九份。因此这些数字的顺序要跟图上的低、高电平对应，不能直接把 2:1 读成高电平占整个周期的比例。视频在没有特殊要求的本实验中选择 2:1，对应 `I2C_DutyCycle_2`。\n\n## 17:08—22:28 · I2C_Init 参数与开启时钟、复位\n\n[观看初始化接口](https://www.bilibili.com/video/BV11X4y1j7si/?p=19&t=1028)。`I2C_Init` 的第一个参数指定 I2C1 或 I2C2，第二个参数指向 `I2C_InitTypeDef`。本节讲解并赋值三个成员：`I2C_ClockSpeed` 配速率，`I2C_Mode` 选择普通 I2C 或 SMBus 用法，`I2C_DutyCycle` 选择快速模式的时钟低高比。\n\n本例取 `400000`、`I2C_Mode_I2C`、`I2C_DutyCycle_2`。课件将其余三个成员灰色标注为与从机有关；这是课件当时的分类，其中 ACK 的控制在后面的主机接收课还会出现。\n\n[观看外设时钟与复位顺序](https://www.bilibili.com/video/BV11X4y1j7si/?p=19&t=1184)。在 GPIO 初始化后，先打开 I2C1 的 APB1 时钟，再施加、释放外设复位信号。原片用按下、松开复位按钮来解释 `ENABLE` 和 `DISABLE` 两次调用：\n\n```c\nRCC_APB1PeriphClockCmd(RCC_APB1Periph_I2C1, ENABLE);\nRCC_APB1PeriphResetCmd(RCC_APB1Periph_I2C1, ENABLE);\nRCC_APB1PeriphResetCmd(RCC_APB1Periph_I2C1, DISABLE);\n```\n\n注意这里操作 I2C1 用的是 `APB1`；前面的 AFIO、GPIOB 时钟用 `APB2`，不能因为函数名相近就把总线位置抄混。\n\n## 22:29—25:44 · 写入初始化参数、闭合开关并编译\n\n[观看最后一段录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=19&t=1349)。下面摘录本节画面中给三个成员赋值并调用初始化的部分；原片声明结构体后直接为这三个成员赋值：\n\n```c\nI2C_InitTypeDef I2C_InitStruct;\nI2C_InitStruct.I2C_ClockSpeed = 400000;\nI2C_InitStruct.I2C_Mode = I2C_Mode_I2C;\nI2C_InitStruct.I2C_DutyCycle = I2C_DutyCycle_2;\nI2C_Init(I2C1, &I2C_InitStruct);\nI2C_Cmd(I2C1, ENABLE);\n```\n\n### 本站工程注：区分课堂摘录与可复用初始化\n\n本地标准库的 `I2C_Init` 实际还会使用 `I2C_Ack`、`I2C_OwnAddress1`、`I2C_AcknowledgedAddress`。因此原片只写三个成员的摘录，不能直接当作其余字段已有确定值的完整初始化。自行整理工程时可先调用库的 `I2C_StructInit(&I2C_InitStruct)` 取得默认值，再覆盖本实验参数；这条是本站依据库源码的补充，并非视频当时录入的语句。\n\n`I2C_Init` 应用参数，`I2C_Cmd(I2C1, ENABLE)` 再闭合框图中的总开关。24:15 的 IDE 录入到 `I2C_Init`，后面才补使能语句；25:29 回到 `main`，在 `while(1)` 前调用 `My_I2C_Init()`。\n\n[观看编译结果](https://www.bilibili.com/video/BV11X4y1j7si/?p=19&t=1535)。25:35 的 Build Output 显示生成 hex，并为 `0 Error(s), 0 Warning(s)`。本节至此完成 I2C1 的 GPIO 重映射、模块配置、OLED 接线和编译；下一步才学习如何沿这条总线发送、接收数据。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1544.3413125,
        "asrSegments": 547,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "479598368eed3da15aa41de530234d821cbc7a617af756f541aefe72e994f302",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "原片声明I2C_InitStruct后只给三个成员赋值，未见清零或I2C_StructInit；正文据实标明摘录范围，未自行补成完整工程初始化。",
          "课件将Ack/OwnAddress1/AcknowledgedAddress标为从机有关，ACK在后续主机接收中也被控制，正文作具体跨课说明。"
        ]
      }
    },
    {
      "page": 20,
      "phase": "i2c",
      "title": "4.4 [I2C] 写数据",
      "duration": 1853,
      "summary": "按寄存器状态与五个阶段逐段实现My_I2C_SendBytes，再发送五字节点亮OLED全屏。",
      "notes": "本节在I2CTest中实现My_I2C_SendBytes，依次等待BUSY清零、产生START并等SB、发送Addr&0xfe并通过ADDR/AF判断寻址。成功后按SR1、SR2顺序清ADDR，循环检查AF与TXE并发送pData[i]，最后等BTF、发送STOP并返回0。地址失败返回-1，数据拒收返回-2，视频中途还回补过遗漏的return -2。最后将00/8d/14/af/a5五字节发送到靠左格式地址0x78，下载、复位后展示OLED全屏亮起。",
      "points": [
        "发送数据寄存器、移位寄存器、SR1/SR2与START/STOP控制",
        "原接口I2Cx、靠左地址Addr、pData、Size及0/-1/-2返回值",
        "BUSY空闲等待、START与SB、AF/ADDR应答分支",
        "Addr&0xfe写方向与先读SR1再读SR2清ADDR",
        "逐字节AF/TXE检查，最后AF/BTF等待与STOP",
        "commands={00,8d,14,af,a5}发送到0x78，复位后全屏点亮"
      ],
      "cid": 26054952533,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 420,
            "observation": "PPT接口My_I2C_SendBytes与参数、0/-1/-2含义。",
            "frameSha256": "ed73affdc38214269c95df39bca633b96eae44ad40dd0e4717689cd342080981"
          },
          {
            "seconds": 660,
            "observation": "IDE函数名及参数，正在写BUSY等待。",
            "frameSha256": "00e651db3981032708b706c69b936f3aeb10dba32196ebe08f21c4da6fec65b1"
          },
          {
            "seconds": 780,
            "observation": "IDE完整BUSY等待和I2C_GenerateSTART。",
            "frameSha256": "e98fb7729ee3c16ddce7b44a254d13f802c0c8cc5317a6de30755bd4b91279e6"
          },
          {
            "seconds": 960,
            "observation": "地址阶段PPT：AF/ADDR，Addr&0xfe与应答分支。",
            "frameSha256": "f2104a6ade0d34586cd6a05a1f4c4826983ca6cd1ddf1156214dec4c29a8dcf8"
          },
          {
            "seconds": 1200,
            "observation": "IDE地址成功break、AF失败分支录入过程，原API为GenerateSTOP。",
            "frameSha256": "9ceb33d6a49a232b734455de7075405b0e8fef76cd6dc2fb48cfc79967ca8ee8"
          },
          {
            "seconds": 1320,
            "observation": "IDE成功/失败分支完整，先读SR1再读SR2清ADDR。",
            "frameSha256": "9357afb8fa7b2038459a360f23e4d37d396fb67693707562d8b7c95890e564d0"
          },
          {
            "seconds": 1440,
            "observation": "IDE for(uint16_t i=0;i<Size;i++)与内部等待框架。",
            "frameSha256": "a46ea2bc67566e4e8d39416af8ebfa9deb021cb8d0b9c15f4b989c5382e320c6"
          },
          {
            "seconds": 1620,
            "observation": "IDE循环AF失败返回-2、TXE分支、发送pData[i]，循环后BTF等待正在录入。",
            "frameSha256": "39231172d5aeec0b5c02a1109b319d4dcc83ef1c23565a8361af50ddddb6b939"
          },
          {
            "seconds": 1680,
            "observation": "IDE循环后AF失败、BTF置位break，开始写STOP。",
            "frameSha256": "ad4dd8409d4b58dbe6a6079ddb9d9fa1f18ff63da27facf77acfff75b2feafd3"
          },
          {
            "seconds": 1740,
            "observation": "PPT0x78与五个命令字节及含义。",
            "frameSha256": "e841d43a3dd9cabc8183376f8fcde2f33e4061341e6bca784fb3828dbd88afc5"
          },
          {
            "seconds": 1800,
            "observation": "IDE commands五字节及My_I2C_SendBytes(I2C1,0x78,commands,5)。",
            "frameSha256": "c131050efb0ee704d354e0b4b6ad50161018d8482462e2082d497e083d6b7b08"
          },
          {
            "seconds": 1819,
            "observation": "实物按复位，OLED为暗。",
            "frameSha256": "9f299641ab962b9db94d3fb595ed6352d98003532e2b2ca4b9635e98ce4a283f"
          },
          {
            "seconds": 1823,
            "observation": "实物OLED全屏已亮。",
            "frameSha256": "237ed08786fcf079b1cdc0529eae6ca2d78144c63cc1a5d5fc0347d639c317d7"
          }
        ]
      },
      "learningNotes": "## 00:46—03:23 · 从内部框图找发送通路和状态标志\n\n[观看 I2C 内部框图](https://www.bilibili.com/video/BV11X4y1j7si/?p=20&t=46)。本节接着 I2CTest 工程编写向从机发送多个字节的函数。图中右侧是 SDA、SCL，发送数据寄存器把 CPU 写入的数据交给移位寄存器，再逐比特送到 SDA；接收方向则把串行数据组合后放进接收数据寄存器。\n\n右上角的 SR1、SR2 是状态寄存器，本节通过它们的标志判断总线忙、起始位完成、寻址成功、应答失败和数据发送进度。控制寄存器中的 START、STOP 位用于要求硬件产生起始、停止条件。上节设置的速率、标准/快速模式、占空比则控制 SCL 时钟。\n\n## 03:24—08:39 · 把数据帧对应到 My_I2C_SendBytes\n\n[观看数据帧与接口](https://www.bilibili.com/video/BV11X4y1j7si/?p=20&t=204)。先按“起始位→七位地址和写方向→从机应答→数据和应答→停止位”回顾一次发送。主机写数据时，地址后的 R/W 位为 0；每个数据字节发送后，由从机应答。\n\n本节将这些操作封装成原片的接口：\n\n```c\nint My_I2C_SendBytes(I2C_TypeDef *I2Cx,\n                     uint8_t Addr,\n                     uint8_t *pData,\n                     uint16_t Size);\n```\n\n`I2Cx` 指定外设；`Addr` 采用课件所说的“靠左”地址，即七位地址占字节的高七位，最低位留给方向；`pData` 指向要发的数据数组；`Size` 是数组中要发送的字节数。返回 0 表示成功，-1 表示寻址失败，-2 表示发送的数据被拒绝。三个返回值分别对应正常终点、地址阶段未应答、数据阶段未应答。\n\n## 08:40—13:26 · 等待总线空闲，再发起始位\n\n[观看第一、第二阶段录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=20&t=520)。IDE 先录入函数原型和定义，然后在函数内部按阶段写。SR2 的 BUSY 为 1 表示总线忙，为 0 表示总线空闲，因此原片先等待 BUSY 清零；随后设置 START 并等待 SB 置位：\n\n```c\nwhile(I2C_GetFlagStatus(I2Cx, I2C_FLAG_BUSY) == SET);\nI2C_GenerateSTART(I2Cx, ENABLE);\nwhile(I2C_GetFlagStatus(I2Cx, I2C_FLAG_SB) == RESET);\n```\n\n第一条循环解决“现在能否开始”，第三条循环解决“起始位是否已经发出”。调用产生起始位的函数之后，硬件仍要实际改变总线电平；SB 从 0 到 1 才是这一步完成的状态。两类等待不能混成一条固定延时。\n\n## 13:27—21:36 · 地址阶段：清 AF、发送 Addr、判断应答、清 ADDR\n\n[观看地址与两个应答标志](https://www.bilibili.com/video/BV11X4y1j7si/?p=20&t=807)。AF 是应答失败标志；ADDR 是寻址成功标志。本节在发送地址之前先清 AF，再写 `Addr & 0xfe`。因为 `0xfe` 的最低位为 0、其余七位为 1，按位与保留七位地址，把最低的方向位固定为写方向。\n\n原片在 IDE 中把寻址结果写成下面的分支结构：\n\n```c\nI2C_ClearFlag(I2Cx, I2C_FLAG_AF);\nI2C_SendData(I2Cx, Addr & 0xfe);\nwhile(1)\n{\n    if(I2C_GetFlagStatus(I2Cx, I2C_FLAG_ADDR) == SET)\n    {\n        break;\n    }\n    if(I2C_GetFlagStatus(I2Cx, I2C_FLAG_AF) == SET)\n    {\n        I2C_GenerateSTOP(I2Cx, ENABLE);\n        return -1;\n    }\n}\n```\n\nADDR 置位时退出等待，继续发送数据；AF 置位时先产生停止位，再返回 -1。`break` 只是离开这个等待循环，而 `return -1` 会结束整个 `My_I2C_SendBytes`，两个出口的范围不同。\n\n[观看清 ADDR 的具体操作](https://www.bilibili.com/video/BV11X4y1j7si/?p=20&t=1215)。寻址成功后，本节还要求按顺序读 SR1、SR2，以清 ADDR，再进入数据阶段：\n\n```c\nI2C_ReadRegister(I2Cx, I2C_Register_SR1);\nI2C_ReadRegister(I2Cx, I2C_Register_SR2);\n```\n\n22:00 的 IDE 显示这两句位于寻址等待循环之后，并在后面开始写数据阶段。它们是此处的寄存器读取顺序，不能换成普通的清标志调用来解释原片。\n\n## 21:37—25:15 · 循环发送：先查拒收与 TXE，再写 pData[i]\n\n[观看逐字节发送代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=20&t=1297)。外层是 `for(uint16_t i=0; i<Size; i++)`，每轮向发送数据寄存器写一个数组元素。写入前，内层等待循环先检查 AF，再检查 TXE：\n\n```c\nwhile(1)\n{\n    if(I2C_GetFlagStatus(I2Cx, I2C_FLAG_AF) == SET)\n    {\n        I2C_GenerateSTOP(I2Cx, ENABLE);\n        return -2;\n    }\n    if(I2C_GetFlagStatus(I2Cx, I2C_FLAG_TXE) == SET)\n    {\n        break;\n    }\n}\nI2C_SendData(I2Cx, pData[i]);\n```\n\nAF 表示前面发出的数据未被应答，此时终止并返回 -2；TXE 表示发送数据寄存器空，可以继续写下一个字节。退出内层等待后，才执行 `I2C_SendData`。外层循环让 `i` 从 0 增长到 `Size-1`，把数组依次写完。\n\n视频录入这部分时先写出停止位调用，随后在 26:06 左右明确回到循环中补上遗漏的 `return -2`。27:00 的 IDE 已能看到它；因此中途未写返回值的画面与补完后的代码应分开读。\n\n## 25:16—28:18 · 等待 BTF，最后发停止位并返回 0\n\n[观看发送完毕的判断](https://www.bilibili.com/video/BV11X4y1j7si/?p=20&t=1516)。把最后一个字节写进发送数据寄存器后，串行移位通路可能仍在发送。讲解用“发送数据寄存器和移位寄存器都空”说明最后的 BTF 等待。\n\n外层 `for` 结束后，原片再写一个 `while(1)`：先查 AF，若失败则产生停止位并返回 -2；再查 `I2C_FLAG_BTF`，置位时 `break`。这一次用 BTF 而不是只看 TXE，目的是等待最后的发送过程走完。\n\n走出这个循环，调用 `I2C_GenerateSTOP(I2Cx, ENABLE)`，最后 `return 0`。至此整段发送函数的五个阶段衔接起来：等待空闲、起始、寻址、发送数据、停止。\n\n## 28:19—30:52 · 用五个字节把 OLED 屏幕点亮\n\n[观看原实验数据和调用](https://www.bilibili.com/video/BV11X4y1j7si/?p=20&t=1699)。视频接回上节的 OLED 电路，给出本例靠左格式的地址 `0x78`，以及点亮全屏的五个字节。29:00 课件逐项标注：`0x00` 表示命令流，`0x8d,0x14` 使能电荷泵，`0xaf` 打开屏幕开关，`0xa5` 让屏幕全亮。\n\n30:00 的 IDE 在 `My_I2C_Init()` 后录入：\n\n```c\nuint8_t commands[] = {0x00, 0x8d, 0x14, 0xaf, 0xa5};\nMy_I2C_SendBytes(I2C1, 0x78, commands, 5);\n```\n\n这个调用把前面接口的四个参数落实为 I2C1、屏幕地址、原数组和五字节长度。随后编译、设置 ST-Link 调试器并下载。[观看按复位后的实物](https://www.bilibili.com/video/BV11X4y1j7si/?p=20&t=1819)：30:19 手按复位时屏幕为暗，30:23 原图已显示整块屏幕亮起，与本节发送这组命令的演示终点对应。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1852.544,
        "asrSegments": 646,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "65c24382b43b860b9c621ac3147ed714e0f1ca27a2822e8a1facf2803412d3e4",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "完整ASR在发送结束附近有重复词异常，关键分支和常量已以原尺寸IDE/PPT帧核对；未据ASR异常拼补代码。"
        ]
      }
    },
    {
      "page": 21,
      "phase": "i2c",
      "title": "4.5 [I2C] 读数据",
      "duration": 2165,
      "summary": "按原片声明My_I2C_ReceiveBytes，逐步解释读方向、ACK/NAK与三种长度分支，再读取OLED的D6控制板载灯，并标明F1工程时序差异。",
      "notes": "本节在I2CTest中实现My_I2C_ReceiveBytes。先说明读方向地址与末字节NAK，再按原片分别录入Size=1、Size=2和多字节接收。正文保留实际函数、参数、数组下标及原画面先清ADDR后关ACK的顺序，同时依据ST AN2824单列F1单字节ACK应在清ADDR前关闭，以及双/多字节专门时序的差异。原实验从0x78读一字节rcvd，用D6判断OLED开关并控制PC13；首次编译缺成功返回值，补return0后编译通过，复位演示板载灯亮。",
      "points": [
        "原接口I2Cx/靠左Addr/pBuffer/Size，0成功、-1寻址失败",
        "Addr|0x01设置读方向，AF/ADDR判断寻址",
        "ACK/NAK与正在接收字节的关系，STOP安排时机",
        "实际单字节先清ADDR再关ACK的原片顺序，与AN2824工程顺序单列",
        "Size=2两次RXNE及多字节Size-1循环和末字节读取",
        "OLED状态D6→PC13；补return0消除warning后下载复位亮灯"
      ],
      "cid": 26054888134,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 120,
            "observation": "原接口、参数、0/-1及接收帧，Size注释仍写发送。",
            "frameSha256": "b58f6bd3bfa1c391707ab7e374d0b9a54f288de06bf7d83ac9f0ec7ad866ea68"
          },
          {
            "seconds": 660,
            "observation": "Addr|0x01图示和AF/ADDR说明。",
            "frameSha256": "2cb8eb6f49832d103973011bbeca6343bbbc63e669fb07505093662660dfe64c"
          },
          {
            "seconds": 747,
            "observation": "七部分目录，在寻址讲解后转ACK/NAK。",
            "frameSha256": "ebdcf07154af4850cf7afff9e99918caf6239bf0629e901621795873879a6670"
          },
          {
            "seconds": 840,
            "observation": "ACK位0/1与正在接收字节的两个例子。",
            "frameSha256": "28e2c02530a90cc93ea95ab6172fc4a5549fef2fb109862de8b524003cfd418d"
          },
          {
            "seconds": 1080,
            "observation": "PPT单字节明确先SR1/SR2清ADDR，再ACK关闭、STOP、RXNE读取。",
            "frameSha256": "1fca3783e6ad25e2394ae78d54d294761da54d4cdfb8844189161fdecc4b6491"
          },
          {
            "seconds": 1260,
            "observation": "IDE单字节同样先清ADDR再关闭ACK，正在输入RXNE等待。",
            "frameSha256": "b97b671fe74ad704627ee7a5ad1ff40be90dc331aef4223272001124002309c8"
          },
          {
            "seconds": 1440,
            "observation": "IDE单字节完整，开始双字节分支清ADDR并开ACK。",
            "frameSha256": "2e9c405a1ffe5875dcb91e21af2a4cda35e05afa6618b1dc6b0102f771506bb3"
          },
          {
            "seconds": 1560,
            "observation": "双字节读取第一字节，再关ACK/STOP，等待末字节。",
            "frameSha256": "65799252f29a8c9f1b47d0bb50c7be42cb300b032fc8a04f6b37039ab92ba19b"
          },
          {
            "seconds": 1740,
            "observation": "多字节else、Size-1循环读取；上方第二字节pBuffer[1]已完成。",
            "frameSha256": "3e548cb0cd69b74367cc3414314fd40627970849b18a41a7c7d0fa0dbee81cbd"
          },
          {
            "seconds": 1800,
            "observation": "OLED状态表D6及rcvd、My_I2C_ReceiveBytes调用、PC13判定。",
            "frameSha256": "51195ce3bae9080e9761decfecc33bf77a7a332eb472b8b37c89d6514982a39b"
          },
          {
            "seconds": 1860,
            "observation": "同状态实验PPT，D6=0开/1关。",
            "frameSha256": "75325ef1ac3fc37c5e833ea3c9135285781a92509fc8a162b69eab72db48e37d"
          },
          {
            "seconds": 2040,
            "observation": "IDE My_OnBoardLED_Init名称与main，开始接收调用。",
            "frameSha256": "0e43ce30b5a98b154fb057882a3bebf128ecea83c0e7ddd45e23a503e4fe5a43"
          },
          {
            "seconds": 2100,
            "observation": "完整main D6判断与PC13写位，首次编译1warning。",
            "frameSha256": "de5467ad0724fa5a09446c12d7b91365ee7d24e7f01a74bcace6a9bfbc369c71"
          },
          {
            "seconds": 2109,
            "observation": "警告原文：非void My_I2C_ReceiveBytes结尾缺return。",
            "frameSha256": "e46da2a246fc0139e55d2e4376c64abb314092b76a2eca77cc6fcbde8173c452"
          },
          {
            "seconds": 2122,
            "observation": "末尾return0已补，编译0 Error/0 Warning。",
            "frameSha256": "fa8049896ebd99bedf900b4a766bb3ed7945075306c17661326a5f9074677fe1"
          },
          {
            "seconds": 2143,
            "observation": "实物OLED亮、板载灯亮。",
            "frameSha256": "ee9a3a75ce0792b7e08ba6d8c36b105afd8d1511a01118cd07cc62fd8c236cd7"
          },
          {
            "seconds": 2160,
            "observation": "课末回顾三种长度。",
            "frameSha256": "ce1395fffca6b1715e8328ba3a9eced3840f0fbce85fc4ddad6516d588a36d60"
          }
        ]
      },
      "learningNotes": "## 00:27—04:41 · 声明接收函数并区分三种长度\n\n[观看原片接口](https://www.bilibili.com/video/BV11X4y1j7si/?p=21&t=27)。本节在 I2CTest 中接着发送函数编写接收函数：\n\n```c\nint My_I2C_ReceiveBytes(I2C_TypeDef *I2Cx,\n                        uint8_t Addr,\n                        uint8_t *pBuffer,\n                        uint16_t Size);\n```\n\n`I2Cx` 选择 I2C 外设，`Addr` 仍使用靠左格式的七位从机地址，`pBuffer` 是保存收到数据的缓冲区，`Size` 是要读取的字节数。课件这个参数的注释仍写成发送数量，讲解当场说明应为接收数量。返回 0 代表读取成功，-1 代表地址阶段没有收到从机应答。\n\n视频先把声明和函数体加入工程，再列出本节顺序：接收流程、起始与地址、ACK/NAK、停止位，然后分别写 `Size==1`、`Size==2`、`Size>2` 三种情况。\n\n## 04:42—12:38 · 读方向的地址阶段与末字节 NAK\n\n[观看接收数据帧](https://www.bilibili.com/video/BV11X4y1j7si/?p=21&t=282)。起始和寻址仍由主机完成，但地址字节的 R/W 位改为 1。数据阶段由从机发送、主机接收并应答；前面的字节回复 ACK，最后一个字节回复 NAK，再结束本次读取。\n\n本节先复用上节的起始与寻址思路：`I2C_GenerateSTART` 后等 SB，清 AF，再通过下面的语句发送读方向地址：\n\n```c\nI2C_SendData(I2Cx, Addr | 0x01);\n```\n\n与上节 `Addr & 0xfe` 对照：按位或 `0x01` 保留高七位地址，把最低位设为 1。之后循环检查 AF 与 ADDR：AF 置位，产生 STOP 并返回 -1；ADDR 置位则离开寻址等待，进入按长度区分的接收代码。\n\n## 12:39—16:07 · 为什么 ACK 和 STOP 要在字节结束前安排\n\n[观看 ACK 的两个寄存器例子](https://www.bilibili.com/video/BV11X4y1j7si/?p=21&t=759)。课件用接收数据寄存器、移位寄存器中的“字节1、字节2、字节3”解释应答时刻。ACK 控制位为 1 时发送应答，为 0 时不把 SDA 拉低，形成 NAK。设置时机必须早于对应应答已经发出的时刻。\n\n左图的字节1已在接收数据寄存器，字节2正在接收，ACK 配置会影响字节2；右图字节2连同应答已结束，则再改 ACK 影响后续字节。这个对照帮助理解：CPU 读走一个字节，并不意味着总线上的下一个字节还没开始。\n\n随后讲 STOP：给 STOP 位写 1 是安排停止条件，课件把它放在当前字节完成后出现。后面三种接收分支，都围绕最后一个字节前怎样安排 NAK 与 STOP 展开。\n\n## 16:08—21:34 · Size==1：原片先清 ADDR，再关闭 ACK\n\n[观看单字节流程及原代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=21&t=968)。18:00 的 PPT 和后续 IDE 均使用以下顺序；这里按原画面摘录，供同步对照：\n\n```c\nI2C_ReadRegister(I2Cx, I2C_Register_SR1);\nI2C_ReadRegister(I2Cx, I2C_Register_SR2);\nI2C_AcknowledgeConfig(I2Cx, DISABLE);\nI2C_GenerateSTOP(I2Cx, ENABLE);\nwhile(I2C_GetFlagStatus(I2Cx, I2C_FLAG_RXNE) == RESET);\npBuffer[0] = I2C_ReceiveData(I2Cx);\n```\n\n前两句通过读 SR1、SR2 清 ADDR；`I2C_AcknowledgeConfig` 关闭 ACK；STOP 安排结束；等 RXNE 后读取接收数据寄存器，将唯一的字节放到 `pBuffer[0]`。这段位于 `if(Size == 1)` 内。\n\n### 本站工程注：F1 单字节接收顺序\n\n原片这里的先后与 ST 的单字节轮询流程有差异。F1 应在清 ADDR 前关闭 ACK，清 ADDR 后安排 STOP，再等 RXNE 读数据；原厂还说明了中断保护时段。上面的代码是视频顺序记录，工程实现应对照 [ST AN2824 第1.2.1节、第6页与图2](https://www.st.com/resource/en/application_note/an2824-stm32f10xxx-ic-optimized-examples-stmicroelectronics.pdf#page=6)。\n\n## 21:35—26:10 · Size==2：先读首字节，再安排末字节\n\n[观看双字节分支](https://www.bilibili.com/video/BV11X4y1j7si/?p=21&t=1295)。视频用两个数据字节推演：第一个后面是 ACK，第二个后面是 NAK 和停止位。IDE 在 `else if(Size == 2)` 中先清 ADDR，再 `I2C_AcknowledgeConfig(I2Cx, ENABLE)`，等 RXNE 后把首字节存到 `pBuffer[0]`。\n\n接着改为 `I2C_AcknowledgeConfig(I2Cx, DISABLE)`，调用 `I2C_GenerateSTOP(I2Cx, ENABLE)`，再次等待 RXNE，最后将第二个字节存入 `pBuffer[1]`。26:00 画面中正在从前面的读取语句复制末字节读取，29:00 上方已能看到完整的 `pBuffer[1]` 赋值。\n\n这里原片使用的是两次 RXNE 等待的简化路径。ST 的双字节接收另外安排 POS、ACK 和 BTF 时序；本节按画面解释原路径，工程时序仍见上面的 AN2824，不能把这段简化路径作为原厂双字节流程。\n\n## 26:11—29:58 · 多字节分支：循环前 Size-1 个，末尾单独读\n\n[观看多字节分支录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=21&t=1571)。第三个分支在视频中写成 `else`，按本课 `Size>2` 的情形讲。先清 ADDR、开启 ACK，然后用循环读取前 `Size-1` 个元素。29:00 原图显示：\n\n```c\nfor(uint16_t i=0; i<Size-1; i++)\n{\n    while(I2C_GetFlagStatus(I2Cx, I2C_FLAG_RXNE) == RESET);\n    pBuffer[i] = I2C_ReceiveData(I2Cx);\n}\n```\n\n循环外再关闭 ACK、安排 STOP，等 RXNE 后写入 `pBuffer[Size-1]`，补上最后一个元素。讲解在复制代码后特别提醒把关闭 ACK 的参数改成 `DISABLE`。\n\n这一段用数组下标表达“前面若干字节”和“最后一个字节”的区别。原厂对于多字节结束还规定了最后三字节的 BTF 等待与读取安排，见 AN2824 图1；原片的这一段不包含该完整收尾安排。本节的实物演示只调用一次单字节接收。\n\n## 29:59—34:54 · 读取屏幕状态 D6，控制 PC13 指示灯\n\n[观看本节原实验](https://www.bilibili.com/video/BV11X4y1j7si/?p=21&t=1799)。视频回到 OLED，展示状态字节表：D6=0 表示屏幕开启，D6=1 表示关闭。先定义 `My_OnBoardLED_Init`，把 PC13 配为开漏输出、2MHz；然后在 `main` 中调用板载 LED 初始化，保留上节让屏幕全亮的五字节命令。\n\n这段记录的是原片所用屏幕与状态表，现有画面未确认其控制器具体型号。更换 OLED 模块时，应先核对对应控制器及所用接口是否支持读状态，以及状态位定义，不能把本例的 D6 约定推广到所有 OLED。\n\n再定义 `uint8_t rcvd`，从 `0x78` 读取一个字节。35:00 的 IDE 显示完整判断：\n\n```c\nuint8_t rcvd;\nMy_I2C_ReceiveBytes(I2C1, 0x78, &rcvd, 1);\nif((rcvd & (0x01 << 6)) == 0)\n{\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_RESET);\n}\nelse\n{\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET);\n}\n```\n\n`&rcvd` 把这个变量作为一字节缓冲区交给接收函数；`0x01 << 6` 只把第6位置1，按位与后判断是否为0，就提取了 D6。屏幕开启时给 PC13 低电平点亮板载灯，关闭时给高电平熄灯。读状态与判断位的代码发生在 `while(1)` 前，是启动时的一次检测。\n\n## 34:55—36:05 · 根据警告补返回值，再看实物结果\n\n[观看漏写返回值的修正](https://www.bilibili.com/video/BV11X4y1j7si/?p=21&t=2095)。首次编译出现一个警告；35:09 原图显示 `My_I2C_ReceiveBytes` 在非 void 函数末尾缺少返回语句。视频在三个接收分支之后补入 `return 0;`，35:22 的 Build Output 已为 0 错误、0 警告。\n\n[观看复位后指示灯](https://www.bilibili.com/video/BV11X4y1j7si/?p=21&t=2139)。下载并按复位后，屏幕仍亮，35:43 原图可见板载指示灯亮起。它对应本例读取状态后点灯的演示；前面单、双、多字节分支的完整工程时序，应结合本页的具体工程注理解。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 2164.7573125,
        "asrSegments": 703,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "994dc8eb7065f4aa2119a10f2e908641a0efac840814b84a1d1a27a2b70c474d",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "原片F1接收路径简化且单字节ACK关闭晚于清ADDR；已在线核对ST官方AN2824第1.2.1节第6页、图1/2，在正文就地说明，未替换成自拟完整驱动。",
          "ASR存在几段重复/低置信识别，接口与关键代码以所列原图为准；未完整人工听音。"
        ]
      }
    },
    {
      "page": 22,
      "phase": "i2c",
      "title": "4.6 [I2C] 软 I2C",
      "duration": 2721,
      "summary": "在PA0/PA1上按原视频从电平操作逐步构造软件I2C，组合收发函数，并记录两次实际修正后点亮OLED的过程。",
      "notes": "本节建立SoftwareI2CTest，将OLED信号改接PA0/PA1。视频先写GPIO初始化、电平读写、空循环延时，再按波形实现SendStart、SendStop、SendByte、ReceiveByte，最后组合My_SI2C_SendBytes与My_SI2C_ReceiveBytes。正文以IDE原名、int8_t从7到0和位掩码为主线，注明PPT条件括号及i>0与IDE的差异。首次编译补两个成功return0；首次点屏失败后，回初始化补PA0/PA1的Bit_SET，重新下载复位后全屏亮。",
      "points": [
        "SCL=PA0/SDA=PA1，My_SI2C_Init配通用开漏输出，初始高电平在片尾才补",
        "scl_write/sda_write/sda_read/delay_us和原片us*8空循环",
        "SendStart/SendStop逐个电平边沿与延时",
        "SendByte从D7到D0，掩码判断及释放SDA读取ACK",
        "ReceiveByte逐位组装byte与sda_write(!Ack)，PPT/IDE循环条件区别",
        "My_SI2C_SendBytes/ReceiveBytes综合，补return0和PA0/PA1高电平后OLED点亮"
      ],
      "cid": 27827769119,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 180,
            "observation": "原理图明确SCL PA0/SDA PA1与上拉，初始电压高。",
            "frameSha256": "580d5ec8963ae4fe9d69cc01edbbc50bad68d21cc027f97ba3ebdc06187c63a6"
          },
          {
            "seconds": 360,
            "observation": "IDE My_SI2C_Init原名及GPIO配置录入。",
            "frameSha256": "e6e3fc679b2556ad0d928a5488671583add389cfef8b60c17e24aae3695c5962"
          },
          {
            "seconds": 600,
            "observation": "IDE scl_write(uint8_t level)，PA0与Bit_RESET/SET分支。",
            "frameSha256": "77a713fa0ad61c718f21f7e1dcce8b52987d6f1e63d57ac1848deb9f6fc6b122"
          },
          {
            "seconds": 660,
            "observation": "IDE sda_read、PA1、返回1/0与delay_us声明。",
            "frameSha256": "c19b38713d482e1a1eb221c4e4a7a3db2849af40e9612d7bd3092d4f50894187"
          },
          {
            "seconds": 780,
            "observation": "delay_us原实现n=us*8，uint32_t空循环，SendStart正在录入。",
            "frameSha256": "be06b24f8690366b8a0e91ffde19fd8f9fb32b31278e1e3a3b2241e56887b7e6"
          },
          {
            "seconds": 960,
            "observation": "PPT起始/停止波形，delay与scl_wirte字样。",
            "frameSha256": "b9907e558152c744122caeffef61c0a80f0285c48936926f902c13e7aa75183c"
          },
          {
            "seconds": 983,
            "observation": "IDE SendStart两句完整，SendStop已到SDA最后拉高的录入。",
            "frameSha256": "5fcf290ceb6c63c7cd2a59c41094727ac3f4fc9288ed7dd8fb801aa14667fa7b"
          },
          {
            "seconds": 1020,
            "observation": "单比特发送波形，低准备/高读取。",
            "frameSha256": "451f1fa0546c0f8ffddd6e0c98e4e1860d7635e3e82fe9ad89ed97c15eface77"
          },
          {
            "seconds": 1440,
            "observation": "PPT位判断条件未整体括起按位与结果。",
            "frameSha256": "77d26bc7f8991c2eee4a28db8e676d43605574e6afff884d9e77c0b2a171e550"
          },
          {
            "seconds": 1500,
            "observation": "IDE if((Byte&(0x01<<i))!=0)，for int8_t i>=0。",
            "frameSha256": "627136f8347e0a829ca73d6b19ed900d48c11c29734945e3b50b51523ec8450b"
          },
          {
            "seconds": 1620,
            "observation": "SendByte完整八位循环，开始应答读取。",
            "frameSha256": "f2c657b321dd68c2606548155efdaf1022f04569a82e85e478491f3bb35e4be4"
          },
          {
            "seconds": 1660,
            "observation": "ACK段scl0/sda1/延时/scl1/延时，正在写return sda_read。",
            "frameSha256": "b9c18c2ceb588109430baf13bb9dabb66fa03cc3dbb04d56baef68f0dac9b9c7"
          },
          {
            "seconds": 1680,
            "observation": "单比特接收波形，释放SDA后读取。",
            "frameSha256": "a73e082efd1ce78f57df87905c74d6cdfdf20edd71154f6041fe2fcec6e83822"
          },
          {
            "seconds": 1980,
            "observation": "IDE ReceiveByte(uint8_t Ack)，byte=0，i>=0逐位读。",
            "frameSha256": "2a92e4d60d0c9cb2a05606c9ccb59d9a53196f479a9f6f7cc7cb30107472f126"
          },
          {
            "seconds": 2100,
            "observation": "PPT receive_byte与i>0，与IDE存在差异。",
            "frameSha256": "00b2a45904ebf0250af67a4e24888a1be5c820d0a3ad0056ee06c08cf9346bc9"
          },
          {
            "seconds": 2120,
            "observation": "IDE byte|=(0x01<<i)，sda_write(!Ack)应答段与返回录入。",
            "frameSha256": "92952da1570bda800b5e67e633c913f7c92da3eb15ef12106b0160101130f85f"
          },
          {
            "seconds": 2160,
            "observation": "综合接口My_SI2C_SendBytes与My_SI2C_ReceiveBytes。",
            "frameSha256": "94f0abf60e83d4e7a630cc00b3de95f5882b33a0b690951d2fc4b354d0164d52"
          },
          {
            "seconds": 2400,
            "observation": "IDE发送数据循环，失败STOP/-2；开始接收函数。",
            "frameSha256": "36cdfeee5cc97de997e96d8b77d7097b83a01bdc57fa204741fb168ac0d4e939"
          },
          {
            "seconds": 2520,
            "observation": "IDE接收前Size-1次ReceiveByte(1)，最后ReceiveByte(0)，STOP。",
            "frameSha256": "2188ce4cbbf6b978d254e4a914836ce7c4076a2aab1c475b65bb5f20898171bc"
          },
          {
            "seconds": 2580,
            "observation": "两条缺return成功路径的warning。",
            "frameSha256": "3b14a9dc2d3bc36fef68ab6d2a3db45194334d5e787b42d430b6b525d46aaade"
          },
          {
            "seconds": 2640,
            "observation": "main commands数组五字节，综合发送调用录入。",
            "frameSha256": "14449a233b06adee98d21082ad30a7a6a9c46bf3c03c4feff17b95a1eb851826"
          },
          {
            "seconds": 2656,
            "observation": "首次实物测试暗屏。",
            "frameSha256": "45606493325c0cc43ceb3554c5752f1e423dc6f83ab2f54b8a25767181bb8283"
          },
          {
            "seconds": 2700,
            "observation": "My_SI2C_Init末尾已补PA0/PA1两条Bit_SET。",
            "frameSha256": "7a2bf7c49a7f31e05bb059ab2e23a600491ff34dcb8f661b952ffe1f2aed25a3"
          },
          {
            "seconds": 2709,
            "observation": "重新下载复位后OLED全屏亮。",
            "frameSha256": "2bed0f1590dbf17fa4dd89e2cf4228676554a8ad096fb32d8f345fa58a70b10e"
          }
        ]
      },
      "learningNotes": "## 00:29—04:04 · 用普通 GPIO 模拟 I2C，信号线改到 PA0、PA1\n\n[观看软件 I2C 的动机与接线](https://www.bilibili.com/video/BV11X4y1j7si/?p=22&t=29)。讲者从硬件 I2C 操作步骤较多、引脚位置受限谈起，再回看已经学过的起始、地址、数据、应答和停止波形：既然知道波形规则，就能用普通 GPIO 按顺序改变电平，模拟一条 I2C 总线。\n\n本节重新建立 SoftwareI2CTest 工程。OLED 的电源、地和两颗上拉保持图中的连接，SCL 从 PB8 改到 PA0，SDA 从 PB9 改到 PA1。两脚用通用开漏输出，空闲时应释放为高电平。这里由软件直接控制 GPIO，因此是 `GPIO_Mode_Out_OD`，与上节片上外设控制的 `AF_OD` 对照。\n\n## 04:05—11:24 · 初始化与四个基础操作\n\n[观看 My_SI2C_Init 和基础函数](https://www.bilibili.com/video/BV11X4y1j7si/?p=22&t=245)。`My_SI2C_Init` 开 GPIOA 时钟，将 `GPIO_Pin_0 | GPIO_Pin_1` 配为开漏输出、2MHz，在 `main` 中调用。此时实际录入漏了前面说过的初始高电平，片尾测试会回到这里补上。\n\n随后先声明、再实现四个操作。IDE 的实际拼写是 `scl_write(uint8_t level)`、`sda_write(uint8_t level)`、`sda_read(void)`、`delay_us(uint32_t us)`。前两个分别用 `GPIO_WriteBit` 控制 PA0、PA1：参数为0写 `Bit_RESET`，否则写 `Bit_SET`。`sda_read` 用 `GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_1)` 读总线实际电平，高返回1，低返回0。\n\n延时函数中，原片计算 `uint32_t n = us * 8;`，再执行 `for(uint32_t i=0; i<n; i++);`。这是讲解针对当时程序配置采用的空循环估算；它与 CPU 配置、编译优化有关，不能把乘8作为所有工程中固定的微秒换算。\n\n## 11:25—16:31 · SendStart 与 SendStop 对应哪几个边沿\n\n[观看起始和停止波形](https://www.bilibili.com/video/BV11X4y1j7si/?p=22&t=685)。`SendStart` 按总线起初已空闲的前提，只将 SDA 拉低，再 `delay_us(1)`；SCL 保持高时，SDA 下降沿就是起始条件。\n\n停止条件要让 SDA 在 SCL 为高时产生上升沿。因为当前 SDA 可能高也可能低，`SendStop` 先把 SCL 拉低，再把 SDA 拉低，延时；随后拉高 SCL，延时；最后释放 SDA 为高，再延时。先拉低 SCL，才能在准备 SDA 低电平时避免意外构成起始条件。\n\nIDE 中用的是 `SendStart`、`SendStop` 和 `delay_us`。这部分 PPT 将延时简写为 `delay(1)`，其中还有 `scl_wirte` 拼写；同步看代码时以 IDE 的 `scl_write`、`delay_us` 对应实际实现。\n\n## 16:32—25:06 · SendByte：低电平准备数据，高电平供从机读取\n\n[观看发送一个比特的推导](https://www.bilibili.com/video/BV11X4y1j7si/?p=22&t=992)。图把每个比特分成两段：SCL 低时发送方准备 SDA，SCL 高时接收方读取，期间 SDA 保持稳定。原片先用占位的 `x` 表示要发送的位，再把八个位的操作放进循环，从 D7 发到 D0。\n\n`uint8_t SendByte(uint8_t Byte)` 的发送循环在 27:00 IDE 中已经完整显示：\n\n```c\nfor(int8_t i=7; i>=0; i--)\n{\n    scl_write(0);\n    if((Byte & (0x01 << i)) != 0)\n    {\n        sda_write(1);\n    }\n    else\n    {\n        sda_write(0);\n    }\n    delay_us(1);\n    scl_write(1);\n    delay_us(1);\n}\n```\n\n`int8_t` 带符号，循环到 i=0 后还能减为 -1 并退出。`0x01 << i` 把1移到待发位，和 `Byte` 按位与后非0，就将 SDA 写1，否则写0。\n\n24:00 PPT 的条件写成 `Byte & (0x01 << i) != 0`，没有把按位与结果整体括起；25:00、27:00 的 IDE 则是上面这个 `((Byte & (0x01 << i)) != 0)` 结构。本页代码按实际 IDE 摘录，保留两处画面的区别。\n\n## 25:07—27:46 · 发完八位后释放 SDA，读取从机 ACK\n\n[观看第九个时钟的应答读取](https://www.bilibili.com/video/BV11X4y1j7si/?p=22&t=1507)。八个位发完后，主机不能继续把 SDA 拉低占住总线，否则无法读取从机应答。原片的应答部分依次执行：\n\n```c\nscl_write(0);\nsda_write(1);\ndelay_us(1);\nscl_write(1);\ndelay_us(1);\nreturn sda_read();\n```\n\n开漏写1表示释放 SDA，由上拉使它变高；从机若应答，会在这一拍将线拉低。因此 `SendByte` 返回0是收到 ACK，返回1是 NAK。这是读取电平的结果含义，与后面接收函数的 `Ack` 参数含义应分别理解。\n\n## 27:47—35:35 · ReceiveByte：读取八位，再主动回复 ACK 或 NAK\n\n[观看接收波形与 ReceiveByte](https://www.bilibili.com/video/BV11X4y1j7si/?p=22&t=1667)。接收时主机仍产生 SCL，但数据由从机给出。每一位都先 `scl_write(0)`、`sda_write(1)` 释放 SDA，延时后 `scl_write(1)`，再延时、读 SDA。\n\nIDE 定义 `uint8_t ReceiveByte(uint8_t Ack)`，先 `uint8_t byte = 0;`，再从 i=7 到0读取八次。如果 `sda_read() != 0`，便用 `byte |= (0x01 << i);` 将对应位置1；读到0时保留初值。33:00 原图可见循环条件为 `i>=0`。35:00 PPT 的例子却印成 `i>0`，讲解在录入时也明确指出要包含等号；IDE 才包含 D0 的读取。\n\n八位结束，主机回复应答：先 SCL=0，然后 `sda_write(!Ack)`，延时、SCL=1、再延时，最终返回 `byte`。这里参数 `Ack=1` 表示要应答，所以取反后向 SDA 写0；`Ack=0` 表示 NAK，所以向 SDA 写1。这正好解释后面为什么前面的字节传1、最后一个字节传0。PPT 使用过 `receive_byte` 拼写，IDE 采用 `ReceiveByte`。\n\n## 35:36—42:09 · 将基础操作组合成 My_SI2C_SendBytes 和 ReceiveBytes\n\n[观看综合接口与逐段录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=22&t=2136)。本节综合接口是 `My_SI2C_SendBytes(Addr, pData, Size)` 和 `My_SI2C_ReceiveBytes(Addr, pBuffer, Size)`。与硬件 I2C 课相比，它们没有 I2Cx 参数，因为本节底层已固定操作 PA0、PA1。\n\n发送函数先 `SendStart()`，再 `SendByte(Addr & 0xfe)`；若地址未应答，`SendStop()` 后返回-1。随后 `for(uint32_t i=0; i<Size; i++)` 逐个调用 `SendByte(pData[i])`；若数据未应答，停止并返回-2。全部发送完，调用 `SendStop()`。\n\n接收函数先起始，再用 `SendByte(Addr | 0x01)` 发读地址；地址失败同样停止并返回-1。接收部分在 42:00 IDE 显示为：\n\n```c\nfor(uint32_t i=0; i<Size-1; i++)\n{\n    pBuffer[i] = ReceiveByte(1);\n}\npBuffer[Size-1] = ReceiveByte(0);\nSendStop();\n```\n\n前 `Size-1` 个字节回复 ACK，最后一个回复 NAK，最后发送停止条件。此时两个综合函数的成功路径还没写返回值，视频接下来通过编译警告补全。\n\n## 42:10—45:21 · 两次排错：补 return 0，再补初始高电平\n\n[观看编译警告和测试](https://www.bilibili.com/video/BV11X4y1j7si/?p=22&t=2530)。第一次编译有两个 warning，43:00 原图分别指向 `My_SI2C_SendBytes`、`My_SI2C_ReceiveBytes` 缺少成功返回值。讲者给两个函数都补 `return 0;`，然后重新编译。\n\n测试仍使用 `commands` 数组中的 `00/8d/14/af/a5` 五个字节，通过 `My_SI2C_SendBytes(0x78, commands, 5)` 发给 OLED。首次下载、复位没有点亮；44:16 实物图仍为暗屏。\n\n[观看最后的初始化修正](https://www.bilibili.com/video/BV11X4y1j7si/?p=22&t=2658)。视频找到初始化漏项，在 `GPIO_Init` 后给 PA0、PA1 分别补写高电平：\n\n```c\nGPIO_WriteBit(GPIOA, GPIO_Pin_0, Bit_SET);\nGPIO_WriteBit(GPIOA, GPIO_Pin_1, Bit_SET);\n```\n\n45:00 IDE 可见两句都已加入。重新编译、下载并复位后，45:09 原图显示全屏点亮。这次修正回到片头空闲条件：只有初始化后两线释放为高，`SendStart` 中拉低 SDA 的动作才能按本节前提产生所需的起始条件。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 2720.9813125,
        "asrSegments": 1005,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "6b73adc8ad57417a5e4e5db67dccdeab9ccca0da7c54fddae792e73811552166",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "原片us*8的空循环延时只按当时配置估算，正文限定其作用范围；未改成自拟定时器延时。",
          "PPT中的位判断括号、i>0和函数简写已与IDE原状逐项区分，未静默更正课件。",
          "实物演示只测试综合发送点亮OLED，未据此声称ReceiveBytes已实物通过。"
        ]
      }
    },
    {
      "page": 23,
      "phase": "i2c",
      "title": "4.7 [I2C] 封装常用功能",
      "duration": 1050,
      "summary": "在I2CLibTest中分别测试硬件i2c库和带SI2C_TypeDef对象的软件si2c库，使用PB6/PB7点屏并读D6控制指示灯。",
      "notes": "本节从模板建立I2CLibTest，先在main.c写默认PB6/PB7的硬件I2C1初始化，再包含i2c.h调用My_I2C_SendBytes发送五字节点屏、My_I2C_ReceiveBytes读一字节D6并控制PC13。随后删除硬件初始化，包含si2c.h，声明全局SI2C_TypeDef si2c，配置SCL/SDA为GPIOB的6/7，调用My_SI2C_Init。最后将两个收发首参数改成&si2c，重新编译下载；拔下再插回屏幕后为暗，再按复位屏和板载灯一起亮。",
      "points": [
        "my_lib中i2c.h/c与si2c.h/c各自用途",
        "硬件I2C1默认PB6/PB7、400k、2:1，My_I2C1_Init仍由应用编写",
        "My_I2C_SendBytes/ReceiveBytes硬件接口及OLED五字节/D6测试",
        "My_OnBoardLED_Init配置PC13并设置初始熄灭",
        "软件SI2C_TypeDef si2c与SCL/SDA端口、引脚四成员、My_SI2C_Init(&si2c)",
        "软件收发改用&si2c，拔插OLED后复位验证屏幕和LED亮"
      ],
      "cid": 26054952730,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 120,
            "observation": "目录先测试硬件I2C再软件I2C。",
            "frameSha256": "7f38cbe46e074aecf345affd516ab4530ce90517240cb94d687e88c440f702e4"
          },
          {
            "seconds": 360,
            "observation": "My_I2C1_Init名称、main调用、PB6/PB7配置。",
            "frameSha256": "c490a795c3e3b4ef6bb7deef17d607d34c6ddae6ba77cc433934c1cce8d82d64"
          },
          {
            "seconds": 420,
            "observation": "PPT硬件My_I2C_SendBytes/ReceiveBytes四参数。",
            "frameSha256": "0a4a5417182402f50de0cbb2f1f40b0da9e0fc8df19c45eeb2a23e88f9afbdb1"
          },
          {
            "seconds": 540,
            "observation": "i2c.h、commands五字节与硬件发送调用，编译0错0警告。",
            "frameSha256": "8672dc2b8269b998a00168f1c9b8aa8f9a5a35c826568ba10c237d1a15f336d8"
          },
          {
            "seconds": 660,
            "observation": "My_OnBoardLED_Init，PC13 Out_OD/2MHz；I2C三成员初始化。",
            "frameSha256": "b22d865afb64a7012bc941be35dd5d5f9bb48e3cea1149ee94782fd8c6f5098e"
          },
          {
            "seconds": 674,
            "observation": "正在给PC13追加初始写位，前面GPIO初始化完整。",
            "frameSha256": "ea78656cfe0d00afd304328def656b8c0756e320b0271cd284838b45ea6c0668"
          },
          {
            "seconds": 720,
            "observation": "main中硬件接收调用正在录入，rcvd变量。",
            "frameSha256": "4e34c0406907c4561035a367cc08dede00ecf2b1ddd3da2c3f2e37c2dbff6985"
          },
          {
            "seconds": 766,
            "observation": "硬件实物屏幕与板载LED亮。",
            "frameSha256": "eb071cc4de0c8001a96d07d9c4e51c151868d773f88bb4fb5e97d6287228b40d"
          },
          {
            "seconds": 840,
            "observation": "si2c.h与全局SI2C_TypeDef si2c，硬件调用尚未替换的中间状态。",
            "frameSha256": "7aeccf1c9390cfcade02b37e16b508ee75e0534f0ee49c5df21721a72c85992b"
          },
          {
            "seconds": 900,
            "observation": "SCL_GPIOx/GPIO_Pin与SDA成员指定PB6/PB7，My_SI2C_Init录入。",
            "frameSha256": "a5ac709752a195a2e758a882741a8420cb8da6994d27ea281636db842e6e4fdd"
          },
          {
            "seconds": 960,
            "observation": "My_SI2C_Init(&si2c)、软件SendBytes/ReceiveBytes完整，首参数&si2c。",
            "frameSha256": "0ce57a8a8088494c1ef02910c13c89575ca1df70ae84c0857754e6c091dfb776"
          },
          {
            "seconds": 992,
            "observation": "拔插屏幕后暗屏，板载灯未亮。",
            "frameSha256": "d0fde0a93a5f86404d2b26993acf16fdf0ce8bd5e05c547562314632d931cc09"
          },
          {
            "seconds": 996,
            "observation": "复位后OLED与板载灯亮。",
            "frameSha256": "206d4fd3b09807247b52901c165156e8e221de7abdfbcab7768f4a90e4bf59fe"
          }
        ]
      },
      "learningNotes": "## 00:00—02:00 · 从手写收发转到 my_lib 中的封装\n\n[观看本节文件与任务](https://www.bilibili.com/video/BV11X4y1j7si/?p=23&t=0)。本节测试前几课常用 I2C 功能的库封装，先硬件、后软件。视频从模板建立 I2CLibTest 工程，在 `my_lib` 中找到四个文件：`i2c.h`、`i2c.c` 用于硬件 I2C，`si2c.h`、`si2c.c` 用于软件 I2C。\n\n重点由“如何在函数内部操作标志和波形”转到“怎样准备外设或对象并调用接口”。讲者说明库在课堂代码基础上另外做了调整。本节按实际展示的头文件与调用讲用法，不能用前几课手写函数的内部过程反推库中的全部实现。\n\n## 02:01—06:01 · 硬件库仍需先初始化 I2C1，接线改到 PB6、PB7\n\n[观看硬件部分](https://www.bilibili.com/video/BV11X4y1j7si/?p=23&t=121)。这次 I2C1 使用默认引脚，SCL=PB6、SDA=PB7，不做重映射。视频提醒把屏幕的两根信号线换到这两个位置，上拉、电源和地按实验电路连接。\n\n`My_I2C1_Init` 先初始化 PB6、PB7 为开漏复用输出、2MHz；再启用 I2C1 的 APB1 时钟，施加并释放复位信号，配置 `400000`、`I2C_Mode_I2C`、`I2C_DutyCycle_2`，调用 `I2C_Init` 和 `I2C_Cmd(I2C1, ENABLE)`，最后在 `main` 调用初始化函数。\n\n这里“用库发送”并不等于库替应用代码选好了片上 I2C1 的引脚和速率。硬件部分依然由本节在 `main.c` 写这段初始化。原片仍只给 I2C 初始化结构体三个成员赋值；整理工程时关于其它成员的确定初值，见第4.3节单列的本站工程注。\n\n## 06:02—09:18 · 包含 i2c.h，用原五字节调用发送库\n\n[观看硬件库接口](https://www.bilibili.com/video/BV11X4y1j7si/?p=23&t=362)。`i2c.h` 提供 `My_I2C_SendBytes` 和 `My_I2C_ReceiveBytes`。两者第一个参数都是 `I2Cx`，再依次填写靠左格式的从机地址、发送数组或接收缓冲区、字节数。\n\n视频先测试发送。在 `main.c` 引用 `i2c.h`，初始化后写入同一组全屏命令并调用：\n\n```c\n#include \"i2c.h\"\n\nuint8_t commands[] = {0x00, 0x8d, 0x14, 0xaf, 0xa5};\nMy_I2C_SendBytes(I2C1, 0x78, commands, 5);\n```\n\n这三行分别解决声明来源、待发内容和调用参数。09:00 的 IDE 已显示调用，编译、下载后按复位，OLED 全屏点亮。与前面实验相同的五字节，使这里的测试能聚焦于更换为库调用后的行为。\n\n## 09:19—12:53 · 再读状态字节，用 D6 控制板载灯\n\n[观看硬件接收测试](https://www.bilibili.com/video/BV11X4y1j7si/?p=23&t=559)。本节沿用屏幕状态指示灯：从 OLED 读一个字节，D6=0 表示屏幕开启，D6=1 表示关闭。先写 `My_OnBoardLED_Init`，启用 GPIOC 时钟，把 PC13 配为 `GPIO_Mode_Out_OD`、2MHz，并补写高电平，使指示灯初始熄灭。\n\n这里沿用的是原片所用模块的状态表。控制器具体型号未从现有画面确认；其他 OLED 的控制器、接口读回能力和状态位定义需分别核对，不能仅凭同为 OLED 就照搬本例的 D6 判断。\n\n`main` 在初始化和发送全屏命令之后声明 `uint8_t rcvd;`，再调用：\n\n```c\nMy_I2C_ReceiveBytes(I2C1, 0x78, &rcvd, 1);\n```\n\n读取结果保存在 `rcvd`，接着判断 `(rcvd & (0x01 << 6)) == 0`。为0时给 PC13 写 `Bit_RESET` 点灯，否则写 `Bit_SET` 灭灯。掩码只保留 D6，其余位不参加这个判断。\n\n[观看硬件测试结果](https://www.bilibili.com/video/BV11X4y1j7si/?p=23&t=762)。编译下载、按复位后，12:46 的原图同时可见全亮 OLED 和亮起的板载指示灯。\n\n## 12:54—15:04 · 软件库用 SI2C_TypeDef 保存两根信号线的位置\n\n[观看软件库的切换](https://www.bilibili.com/video/BV11X4y1j7si/?p=23&t=774)。视频删除原先硬件 I2C1 的初始化函数与调用，改为引用 `si2c.h`。软件库有初始化、发送、接收三个接口，并引入描述总线的对象。IDE 中先声明全局变量：\n\n```c\nSI2C_TypeDef si2c;\n```\n\n然后在 `main` 最前面指定两条线的位置。讲解口头一度提到 PB8、PB9，但随后纠正为本次实际接线的 PB6、PB7；15:00、16:00 IDE 一致显示：\n\n```c\nsi2c.SCL_GPIOx = GPIOB;\nsi2c.SCL_GPIO_Pin = GPIO_Pin_6;\nsi2c.SDA_GPIOx = GPIOB;\nsi2c.SDA_GPIO_Pin = GPIO_Pin_7;\nMy_SI2C_Init(&si2c);\n```\n\n`SCL_GPIOx` 与 `SDA_GPIOx` 保存端口，另两个成员保存引脚编号。`&si2c` 把这个对象交给初始化函数，库据此操作两根 GPIO。本节软件库的配置方式，已经不同于上节把 PA0、PA1直接写在底层函数中的手写版本。\n\n## 15:05—17:29 · 替换两个调用，断屏供电后重新验证\n\n[观看软件收发调用](https://www.bilibili.com/video/BV11X4y1j7si/?p=23&t=905)。发送、接收分别改成下面两句，原来的命令、地址、长度和 D6 判断继续使用：\n\n```c\nMy_SI2C_SendBytes(&si2c, 0x78, commands, 5);\nMy_SI2C_ReceiveBytes(&si2c, 0x78, &rcvd, 1);\n```\n\n对照刚才硬件调用，首参数从 `I2C1` 换为软件总线对象的地址 `&si2c`；余下参数按各自接口沿用。这样理解的是本节这两个收发接口的对应关系，初始化步骤则由前一段分别说明。\n\n[观看重新插屏后的验证](https://www.bilibili.com/video/BV11X4y1j7si/?p=23&t=977)。视频解释屏幕之前一直供电，单看它还亮着不能判断新代码是否生效，于是拔下屏幕再插回。16:32 原图是暗屏、指示灯未亮；再次按复位后，16:36 原图屏幕和指示灯一起亮起。本节由此分别完成了硬件库和软件库的点屏、读状态测试。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1049.024,
        "asrSegments": 374,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "db1700ef71a9cd2f28e7f83f75016f11b8cf7262e8806fd4dd3c09c936d47bcd",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "讲解配置软件引脚时口头一度提PB8/PB9随后纠正，IDE最终为PB6/PB7；正文据实区分。",
          "未获得库原工程，未声称库内部与课堂手写版完全一致或已经完整代码审计。"
        ]
      }
    },
    {
      "page": 24,
      "phase": "i2c",
      "title": "4.8 [I2C] OLED 显示器",
      "duration": 3846,
      "summary": "按64分钟原课顺序连接OLED写回调，讲画笔/画刷/光标，逐例显示英文、中文字库、日期、文本区域、点线矩形圆、位图和两帧动画。",
      "notes": "本节建立OLEDTest，先通过My_SoftwareI2C_Init准备PB6/PB7，再用i2c_write_bytes回调把OLED驱动接到My_SI2C_SendBytes，完成My_OLEDScreen_Init。正文依视频顺序讲画笔、画刷、坐标和光标；随后逐段解释Hello world、字体工具生成hyjk16、居中中文、2024/09/06格式化打印、文本区域、八点与折线、矩形和圆。最后按画面记录image2cpp的128×64、Plain bytes、Horizontal格式，生成bitmap与bitmapFlip，在循环中清屏、绘制、发送并Delay(500)交替显示。保留课件和IDE在坐标、日期与颜色宏上的实际区别。",
      "points": [
        "PB6/PB7软件I2C、oled对象、i2c_write_bytes与OLED_Init回调",
        "画笔/画刷白黑透明、坐标范围及Set/Move/GetCursor",
        "Hello world与SendBuffer、生成hyjk16并居中显示你好世界",
        "default_font、Printf日期2024/09/06、全屏文本区域换行",
        "八个点、DrawLine/LineTo、矩形与圆，记录PPT/IDE端点区别",
        "image2cpp字节数据、bitmap与bitmapFlip、Clear/SendBuffer/Delay(500)循环动画"
      ],
      "cid": 26054952902,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 300,
            "observation": "My_SoftwareI2C_Init原名与si2c.h。",
            "frameSha256": "776994c76985727820dd2d9a16f62fd578eda4179eb74a60ab707628bf65a35c"
          },
          {
            "seconds": 660,
            "observation": "PB6/PB7配置，i2c_write_bytes(uint8_t addr,const uint8_t*pdata,uint16_t size)录入。",
            "frameSha256": "6f0b5815d1909efa50e26d2ff55eec881d1e84948477453f135e462df528b615"
          },
          {
            "seconds": 720,
            "observation": "回调return My_SI2C_SendBytes(&si2c,addr,pdata,size)，开始My_OLEDScreen_Init。",
            "frameSha256": "a40f0b8aaa962d04c1469903ae3206318a5c5e7655edf040536a1ffdcf16ea56"
          },
          {
            "seconds": 750,
            "observation": "OLED_InitStruct.i2c_write_cb赋原函数，OLED_Init(&oled,&OLED_InitStruct)。",
            "frameSha256": "b22a9c9a24d51079adb73fe476966f731062c0bf8fd8d7a5c6f4d4d7a0498ec2"
          },
          {
            "seconds": 1080,
            "observation": "OLED_SetPen/SetBrush接口定义。",
            "frameSha256": "9b122cd15912a5237a0108e6313ffdf4faefd720aa9456240fd00bae3dec265b"
          },
          {
            "seconds": 1320,
            "observation": "oled.h中的屏幕宽高与光标接口。",
            "frameSha256": "8a30f32e91713a6333f5f6d34df507a53fcd5e517231d4a7b2a4b9a092d82473"
          },
          {
            "seconds": 1500,
            "observation": "全部Set/Move/GetCursor接口与GetCursor输出指针。",
            "frameSha256": "2c7895f4af61e16925a5b097292b2cb86c79ffedcd03e6fd7f0f9a0be42e5257"
          },
          {
            "seconds": 1740,
            "observation": "main初始化顺序，准备第一例。",
            "frameSha256": "3e8e496aa4d6632fc29690d2f8959aec38754b57be9d1a7b2b9138534b51fa55"
          },
          {
            "seconds": 1800,
            "observation": "Hello例PEN_COLOR_WHITE、PEN_COLOR_TRANSPARENT、24/50。",
            "frameSha256": "46148dc480a335c1093f98ab41eeda90fd5b02f701c5840bfae468bded5bbd75"
          },
          {
            "seconds": 1860,
            "observation": "实物Hello world小写w。",
            "frameSha256": "4629e81fa98400cfc3824de064a90e28295724f53760e2252581548f498bb9b3"
          },
          {
            "seconds": 1980,
            "observation": "font目录.map中你好世界。",
            "frameSha256": "edcc63fc7a039a7db2ea13c8fef6fcb21ba8794789123c4195044550e3252496"
          },
          {
            "seconds": 2040,
            "observation": "字体转换工具、汉仪劲楷.ttf、输入字号16。",
            "frameSha256": "f100d5b3f7c70dbe2003eb618b8f830fe6d500b33f6f7dcd40087156207a6c9b"
          },
          {
            "seconds": 2068,
            "observation": "声明SI2C_TypeDef si2c/OLED_TypeDef oled，加入字体头文件阶段；第一例完整。",
            "frameSha256": "7ab8ee530b5ac619496dc7d6c8c0609e3ebf3021094a8af13e2a3e24ca3d8ee7"
          },
          {
            "seconds": 2100,
            "observation": "字体PPT hyjk16、GetStrWidth和x/28，文字标签另有坐标。",
            "frameSha256": "a64f282dcbe5731fe0ec0a7a6532b57ba5abd4e17d8cb388609fc6c2173a5ab5"
          },
          {
            "seconds": 2280,
            "observation": "IDE SetFont hyjk16，int16_t x居中公式正在录入。",
            "frameSha256": "702296b41b1a633cd19fcf61f6dfe4ec94602d7194be881c69fe0da3db1d0ff0"
          },
          {
            "seconds": 2340,
            "observation": "转格式化打印的目录。",
            "frameSha256": "600e6088039ba3a6cc33c3fab72b06ef4710e5ef47456a2aab035a7ca60c810d"
          },
          {
            "seconds": 2520,
            "observation": "中文公式完整、x/28，开始日期例。",
            "frameSha256": "52db3e6563ef83c242aa96542a816d5a571f816446ed164db51ae75ca88f9061"
          },
          {
            "seconds": 2580,
            "observation": "IDE default_font、58/64、%04d/%02d/%02d、2024/9/6。",
            "frameSha256": "4853d9a3353c99c7a8ca5e92714fbe478d5fdc9608b9f2482e5ad98f34d1d1a1"
          },
          {
            "seconds": 2640,
            "observation": "文本区域PPT StartTextRegion/StopTextRegion。",
            "frameSha256": "47a4cf598bc4623ded1d548a8b4f4989520ed39a6eeffa9d043c85ac4a695447"
          },
          {
            "seconds": 2760,
            "observation": "IDE区域0/0/128/64，前面三例被注释。",
            "frameSha256": "f7bc91b0269e2c2811a82789524eccc8dcc3cf2500c4b8699d75ffd099fe1da8"
          },
          {
            "seconds": 2820,
            "observation": "四句John英文与回车换行、SendBuffer。",
            "frameSha256": "5fc09b5c9a4e9ca07f62cf1444f8f40ac608285aae2d3a01c15291332f5ad876"
          },
          {
            "seconds": 3000,
            "observation": "八点代码、uint8_t i=1;i<8、MoveCursorX10。",
            "frameSha256": "e9158450bad739207e5cf07353904990bcdb4c628893192cb40b6895f8a48ab7"
          },
          {
            "seconds": 3014,
            "observation": "实物一排八点。",
            "frameSha256": "837b0ed99aa11ac3593004b48c8247aaab21384e58ff8544bcd2ea4fa9488613"
          },
          {
            "seconds": 3180,
            "observation": "PPT DrawLine和LineTo，端点127/63。",
            "frameSha256": "9d85f558eb65ecccb88bd42422d3591585fbfdee0f62c825518b3d81bca61c1f"
          },
          {
            "seconds": 3225,
            "observation": "实物两对角线和中间折线。",
            "frameSha256": "3499541eca00a44b1204b6b234925b2aed290077a004d00657a75f350f41c95f"
          },
          {
            "seconds": 3480,
            "observation": "IDE原画线128/64被注释，矩形20/20、40/20、圆65/30半径5；右矩形中途漏&oled。",
            "frameSha256": "b17860c418a582b86013d4cd9824f76afa1f4ddfb53d54c7f947db49bcc7643d"
          },
          {
            "seconds": 3532,
            "observation": "实物左框矩形、中间圆、右填充矩形。",
            "frameSha256": "14f14114c1a10be22d31dd5b4a314e2ba9b56793c428baaf452aa222a6e36d60"
          },
          {
            "seconds": 3600,
            "observation": "image2cpp原网址与尺寸正在调整。",
            "frameSha256": "d7b35080c2b68efaa2c275b322cf56bb85a74f9e248ca333b944b1600c1ce2a4"
          },
          {
            "seconds": 3625,
            "observation": "输出Plain bytes，Horizontal-1 bit per pixel。",
            "frameSha256": "28808909c4a100deb51584298eceb72248d2e43f922430c27987cc6b12695818"
          },
          {
            "seconds": 3717,
            "observation": "实物单幅位图。",
            "frameSha256": "3ef73661b721c991dc5f46b1ca39c20fe7f70b92dcbd9024d35091e3bd2338e6"
          },
          {
            "seconds": 3780,
            "observation": "循环开始，先绘制bitmap，后续尚在录入。",
            "frameSha256": "26ca63c4d52fd150ef6e69f0608e741b26578fb4a6aeeb8d5277925e9bf132b4"
          },
          {
            "seconds": 3820,
            "observation": "循环Clear/DrawBitmap/SendBuffer，两帧已写，Delay正在补。",
            "frameSha256": "da6e4fcc5f0ef5f4a139fb92f47e3010b217a683a956f125765e140076f61ae5"
          },
          {
            "seconds": 3825,
            "observation": "完整两帧循环，每帧Delay(500)，bitmapFlip大小写。",
            "frameSha256": "2290e114482fa6fe4a157000bc5f36a527e80ea61bb28e3c68511b7d071682e7"
          },
          {
            "seconds": 3833,
            "observation": "实物第一朝向图案。",
            "frameSha256": "4192445fb2155b57b27d9f483c9ee23c912bb06d87123c98a94e01ac13dc1416"
          },
          {
            "seconds": 3837,
            "observation": "实物左右翻转后的另一朝向。",
            "frameSha256": "bf00d22672b26259099ad282ea51f02c5cd92ddc2bbb784204c3aea8ac88a976"
          },
          {
            "seconds": 3840,
            "observation": "课末五部分目录。",
            "frameSha256": "58d5c4ddcbd41ea9da6ef5e79a4b901efcc2b0ed3a9dbc0e7a00f0a060aa6198"
          }
        ]
      },
      "learningNotes": "## 00:59—06:10 · 从显存像素原理开始，准备软件 I2C\n\n[观看显示原理与接线](https://www.bilibili.com/video/BV11X4y1j7si/?p=24&t=59)。视频先把 OLED 图像解释为显存中的比特与屏上像素的对应：置1使对应像素亮，置0使它灭，组合起来就是图像。随后建立 OLEDTest 工程，使用上节软件 I2C 库连接屏幕，SCL=PB6、SDA=PB7。\n\n`main.c` 引用 `si2c.h`，声明 `SI2C_TypeDef si2c`。本节另外写 `My_SoftwareI2C_Init`，给 `si2c` 的 SCL/SDA 端口与引脚成员赋 GPIOB、Pin6、Pin7，再调用 `My_SI2C_Init(&si2c)`。`main` 首先调用这个初始化函数。\n\n## 06:11—12:49 · 用 i2c_write_bytes 回调连接 OLED 驱动与总线\n\n[观看 OLED 初始化与回调](https://www.bilibili.com/video/BV11X4y1j7si/?p=24&t=371)。视频打开 `oled.h`，使用 `OLED_Init` 初始化屏幕。应用先引用 `oled.h`，声明 `OLED_TypeDef oled`；初始化结构体包含 `i2c_write_cb` 函数指针，驱动要向屏幕发送数据时，通过这个回调交给具体总线。\n\n第一步按回调的参数格式实现 `i2c_write_bytes`。12:30 IDE 可见原实现：\n\n```c\nint i2c_write_bytes(uint8_t addr, const uint8_t *pdata, uint16_t size)\n{\n    return My_SI2C_SendBytes(&si2c, addr, pdata, size);\n}\n```\n\n回调收到地址、待发数据和长度，把它们转给软件 I2C，同时补上软件总线对象 `&si2c`，再将发送函数的结果返回。这里是两层接口的连接，`i2c_write_bytes` 不另行拆分命令字节。\n\n第二步在 `My_OLEDScreen_Init` 中把函数名交给初始化结构体，再初始化屏幕：\n\n```c\nOLED_InitTypeDef OLED_InitStruct;\nOLED_InitStruct.i2c_write_cb = i2c_write_bytes;\nOLED_Init(&oled, &OLED_InitStruct);\n```\n\n`main` 的初始化顺序是先软件 I2C，再 `My_OLEDScreen_Init()`。这样屏幕驱动开始调用回调时，总线已经准备好。\n\n## 12:50—19:00 · 画笔、画刷决定哪些像素改变\n\n[观看画笔与画刷](https://www.bilibili.com/video/BV11X4y1j7si/?p=24&t=770)。视频先用 Windows 画图的前景色、背景色作类比。画笔决定线条、图形边框、文字和位图前景；画刷决定矩形内部、文字和位图背景。白色表示点亮像素，黑色表示熄灭像素，透明表示保留原来内容。\n\n画笔还有粗细，图中从1像素逐渐增加，点和边框随之变粗；画刷只有颜色。课件列出的接口是 `OLED_SetPen(&oled, Pen_Color, Width)` 和 `OLED_SetBrush(&oled, Brush_Color)`。后面的例子先设置这些状态，再绘制内容。\n\n透明画刷的例子让原来长条仍能透过矩形内部；黑画刷则把该处像素清成黑。它们在黑色空背景上可能看起来相似，叠画后就能看到区别。\n\n## 19:01—25:34 · 坐标与光标：设置绝对位置，或者移动一段距离\n\n[观看坐标与光标接口](https://www.bilibili.com/video/BV11X4y1j7si/?p=24&t=1141)。屏幕宽128、高64个像素，原点在左上，X向右增加，Y向下增加；像素编号 X 为0—127、Y为0—63。图中的示例点数过去是 `(3,2)`。\n\n光标是下一次绘制的当前位置。矩形以它为左上角，圆以它为圆心；字符串的定位点按后面原例放在文字左下方。`OLED_SetCursor` 同时设置 X、Y，`OLED_SetCursorX/Y` 只设置一个坐标；`OLED_MoveCursor` 按 dX、dY 在当前位置上增量移动，`OLED_MoveCursorX/Y` 分别沿一轴移动。\n\n25:00 的接口图还列出 `OLED_GetCursor`，通过 `pXOut`、`pYOut` 两个指针带回坐标；`OLED_GetCursorX/Y` 分别直接返回一个坐标。设置位置与增量移动的差别，会在后面画一串点与连续折线时用到。\n\n## 25:35—31:03 · 第一例：在 (24,50) 绘制 Hello world\n\n[观看第一段实际显示代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=24&t=1535)。视频先介绍 `OLED_DrawString`，再在 `while(1)` 前编写第一例。原片最后录入的内容是小写 w 的 `Hello world`，依次设置白色1像素画笔、透明画刷、光标，然后绘制并发送缓冲区：\n\n```c\nOLED_SetPen(&oled, PEN_COLOR_WHITE, 1);\nOLED_SetBrush(&oled, PEN_COLOR_TRANSPARENT);\nOLED_SetCursor(&oled, 24, 50);\nOLED_DrawString(&oled, \"Hello world\");\nOLED_SendBuffer(&oled);\n```\n\n画刷参数这里原片使用的是 `PEN_COLOR_TRANSPARENT`，本页按实际录入保留。`DrawString` 先修改单片机内的绘图缓冲区，`OLED_SendBuffer` 才把内容送到屏幕。31:00 实物画面显示这行英文。后面换示例时，视频多次保留最后的 SendBuffer，替换前面准备和绘制部分。\n\n## 31:04—38:58 · 生成中文字体，再计算居中位置\n\n[观看字体数据生成](https://www.bilibili.com/video/BV11X4y1j7si/?p=24&t=1864)。为了显示“你好世界”，视频从 Windows 字体中复制“汉仪劲楷”到工程的 `my_lib/font/ttfttc`，在 `.map` 文件写入需要生成的四个字，再运行字体转换工具，输入字体文件名、字号16和生成名称。原例的字体名是 `hyjk16`，随后引用生成的头文件。\n\n这一步生成的是所选字形的数据；本例只录入了四个汉字。要切回显示英文数字的后续例子，视频会重新选择默认字体。\n\n[观看中文显示代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=24&t=2198)。IDE 为中文选择字体后，用屏宽减去字符串宽度再除2，得到左边空白宽度，实现水平居中：\n\n```c\nOLED_SetFont(&oled, &hyjk16);\nint16_t x = (OLED_GetScreenWidth(&oled)\n             - OLED_GetStrWidth(&oled, \"你好世界\")) / 2;\nOLED_SetCursor(&oled, x, 28);\nOLED_DrawString(&oled, \"你好世界\");\n```\n\n纵坐标在最终 IDE 中为28。前面的课件文字标签和早先口头示意出现过其它坐标，这里以实际调用的 `x,28` 对照。绘制仍在 SendBuffer 之前，随后编译下载并展示中文与原英文一起显示。\n\n## 38:59—43:20 · 恢复默认字体，用 OLED_Printf 格式化日期\n\n[观看格式化打印](https://www.bilibili.com/video/BV11X4y1j7si/?p=24&t=2339)。本例要在右下角显示日期，先恢复 `default_font`，使数字和标点有对应字形，再设置光标 `(58,64)`，按格式串输出年、月、日。43:00 IDE 已显示最终录入：\n\n```c\nOLED_SetFont(&oled, &default_font);\nOLED_SetCursor(&oled, 58, 64);\nOLED_Printf(&oled, \"%04d/%02d/%02d\", 2024, 9, 6);\n```\n\n`04` 与 `02` 指定补零后的宽度。前面的示意日期曾是9月5日，实际录入与演示用的是9月6日，三个数字作为本例固定参数传入。文字在缓冲区画好后，仍通过 SendBuffer 更新屏幕。\n\n## 43:21—47:09 · 开启文本区域，让长段英文自动换行\n\n[观看文本区域](https://www.bilibili.com/video/BV11X4y1j7si/?p=24&t=2601)。视频比较没有区域时长字符串越出屏幕，和设置区域后到边界自动换行的行为。`OLED_StartTextRegion` 指定左上角、宽、高；`OLED_StopTextRegion` 用来结束文本区域状态。\n\n实际例子先注释前面三段显示代码，在 `(0,0)` 开一个 `128×64` 的区域，再依次写四句关于 John 年龄的英文。47:00 的 IDE 显示第一句以 `There was a man named John.` 开头，后续每句带 `\\r\\n`。开启区域会把光标置到合适的文字起点，本段直接调用 DrawString，最后 SendBuffer，展示长句在区域内换行的效果。\n\n## 47:10—50:16 · 画八个点：先画一个，再移动光标七次\n\n[观看画点代码与结果](https://www.bilibili.com/video/BV11X4y1j7si/?p=24&t=2830)。本例用白色、3像素画笔，将光标放到 `(29,32)`，先画第一个点，再在循环中每次向右移动10像素、画一个点。50:00 的原代码是：\n\n```c\nOLED_SetPen(&oled, PEN_COLOR_WHITE, 3);\nOLED_SetCursor(&oled, 29, 32);\nOLED_DrawDot(&oled);\nfor(uint8_t i=1; i<8; i++)\n{\n    OLED_MoveCursorX(&oled, 10);\n    OLED_DrawDot(&oled);\n}\nOLED_SendBuffer(&oled);\n```\n\n循环从1到7，因为下标0对应的第一个点已在循环前画出。50:14 实物可见一排八个点。这个例子把画笔粗细、绝对定位、相对移动和绘制结合在同一段中。\n\n## 50:17—53:48 · DrawLine 与 LineTo：连续折线是否移动光标\n\n[观看画线接口和例子](https://www.bilibili.com/video/BV11X4y1j7si/?p=24&t=3017)。`OLED_DrawLine` 从当前光标到给定 X、Y 画线；`OLED_LineTo` 在画线后把光标也移到终点，因此可以连续给出下一条线的终点。\n\n视频先画两条对角线，再将光标设到 `(84,22)`，依次 `OLED_LineTo` 到 `(44,22)`、`(44,42)`、`(84,42)`。后面每段的起点承接前段终点，形成中间的折线。\n\n53:00 PPT 的两条对角线端点用127、63；实际 IDE 录入为 `(0,0)→(128,64)` 和 `(0,64)→(128,0)`，后续58:00注释代码仍保留这个写法。128、64超过前面像素编号上限，这是原片两处的差异；在未取得驱动实现时，不据显示结果推断库内部如何处理边界外端点。53:45 实物原图可见两条对角线和中间折线。\n\n## 53:49—59:00 · 矩形以光标为左上角，圆以光标为圆心\n\n[观看矩形、圆示例](https://www.bilibili.com/video/BV11X4y1j7si/?p=24&t=3229)。`OLED_DrawRect` 接收宽、高；`OLED_DrawCircle` 接收半径。原例先把光标设 `(20,20)`，白色1像素画笔、透明画刷 `BRUSH_TRANSPARENT`，画 `40×20` 的左矩形。\n\n然后光标设 `(65,30)`，保留画笔和画刷，画半径5的圆。最后设到 `(70,20)`，改为透明画笔、白色画刷 `BRUSH_WHITE`，再画 `40×20` 的右矩形。录入右矩形时，视频还回到 SetCursor 补上遗漏的 `&oled` 参数。58:52 实物显示左边框矩形、中间圆和右边填充矩形，体现同一绘制接口在不同画笔、画刷状态下的效果。\n\n## 59:01—61:58 · 将图像转成字节数组，再绘制整屏位图\n\n[观看位图转换操作](https://www.bilibili.com/video/BV11X4y1j7si/?p=24&t=3541)。视频打开 image2cpp 页面，选择原图片，将画布设为128×64，使用填满画布的缩放方式，再导出字节。60:25 原图可见输出选项为 `Plain bytes`、绘制格式 `Horizontal - 1 bit per pixel`。\n\n复制生成数据后，在工程顶部声明 `bitmap` 数组保存它。显示时先将光标设 `(0,0)`，再调用：\n\n```c\nOLED_DrawBitmap(&oled, 128, 64, bitmap);\nOLED_SendBuffer(&oled);\n```\n\n宽、高说明本例要显示整屏数据，最后一个参数指向位图字节。视频录入时先漏最后的数据参数，随后补入 `bitmap`，再编译下载。61:57 实物显示生成的卡通图案。\n\n## 61:59—64:05 · 第二份左右翻转位图，组成两帧循环动画\n\n[观看片尾动画代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=24&t=3719)。视频在转换页面把同一图片左右翻转，再生成数据，复制到第二个数组 `bitmapFlip`。随后注释单次绘制例子，把两次绘制都放入 `while(1)`。63:45 IDE 已显示完整循环：\n\n```c\nOLED_Clear(&oled);\nOLED_SetCursor(&oled, 0, 0);\nOLED_DrawBitmap(&oled, 128, 64, bitmap);\nOLED_SendBuffer(&oled);\nDelay(500);\n\nOLED_Clear(&oled);\nOLED_SetCursor(&oled, 0, 0);\nOLED_DrawBitmap(&oled, 128, 64, bitmapFlip);\nOLED_SendBuffer(&oled);\nDelay(500);\n```\n\n每帧先清缓冲区，再定位、绘制、发送，停留500毫秒后切另一帧。视频为延时加入 `delay.h`，实际函数名是 `Delay`。63:53与63:57的实物画面分别显示图案的两个朝向，完成从单幅图到循环动画的最后一个例子。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 3845.1626875,
        "asrSegments": 1524,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "cff389e625a9c0fb963356b0e95b6c059d8e28b9adc394fe723ccfa0d6816919",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "ASR在首次设置画笔处有重复识别异常，相关宏名以30:00和34:28实际IDE为准。",
          "画线PPT端点127/63、IDE128/64；未获得驱动源工程，不能仅凭实物图推断越界端点的内部处理。",
          "未获取原字体/位图数组完整数据与完整作者工程；正文只摘画面已核清的接口及流程，不重建不可读的数据数组。"
        ]
      }
    },
    {
      "page": 25,
      "phase": "spi",
      "title": "5.1 [SPI] 电路结构和通信协议",
      "duration": 853,
      "summary": "沿原片的一主多从电路和双向波形，依次解释NSS、极性与相位、四种模式、位顺序及8/16位宽度。",
      "notes": "本节是SPI协议理论课，没有原代码。正文按电路、片选、同步收发波形、极性和相位、四模式、位序、宽度排列，保留原图的具体边沿和位号。",
      "points": [
        "以主机为参照区分MOSI和MISO，SCK由主机产生",
        "图示每个从机用独立低有效NSS选择",
        "一周期两条数据线各传一位，读图先看片选再看时钟",
        "由空闲电平判断第一、第二边沿，再选采样相位",
        "CPOL与CPHA组合为模式0至3",
        "区分LSB/MSB位顺序与8/16位分组宽度"
      ],
      "cid": 26054952913,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 120,
            "observation": "一主多从电路与MOSI、MISO、SCK、NSS英文名称。",
            "frameSha256": "08f921dee2d50f8e2f15e5fba79ba5e99c81b79fa76b4b000e7d93c3a7ba3bde"
          },
          {
            "seconds": 240,
            "observation": "每个从机独立NSS，主机普通IO控制，低电平选中。",
            "frameSha256": "7f562ee816b8ca8070a3c3550f9200e32bce9d10386b8ff7243309e5420dd7c8"
          },
          {
            "seconds": 360,
            "observation": "NSS1有效、NSS2/3无效，同时显示SCK、MOSI和MISO。",
            "frameSha256": "30529af0c1bac6182db0d5b1bc1638becc5ae5e00bc8587abfc346d96f344d83"
          },
          {
            "seconds": 480,
            "observation": "极性、第一第二边沿及相位的上下两组波形。",
            "frameSha256": "120a47aaf5a5fcdaac76019febc75dc0c3983ddbe1d1e4303bc32b51546a798d"
          },
          {
            "seconds": 600,
            "observation": "采样虚线与第一边沿的位置对应。",
            "frameSha256": "52480bfec28c406357d5f7b8a7fe8ec1204abda4554d22ce02c991bcf685b0e4"
          },
          {
            "seconds": 660,
            "observation": "四组SPI模式标注CPOL和CPHA。",
            "frameSha256": "669879c8b8b32c33e2ae8aebd824c47674d826417fc16c28fc224964d7117934"
          },
          {
            "seconds": 720,
            "observation": "LSB/MSB两种位序波形及bit位权。",
            "frameSha256": "866ac8729d31ee29535b4f651647a47543207ddb3cf858d66c5a58f34e422929"
          },
          {
            "seconds": 780,
            "observation": "手写位权并对照低位、高位先传的顺序。",
            "frameSha256": "d351e8e3c14496ee0de5aa1904d7c44f3084e278717c2c9d51515ff4fd1ad9a5"
          },
          {
            "seconds": 810,
            "observation": "8bit与16bit的数据分组，MOSI/MISO同步。",
            "frameSha256": "17d3062dbdec42b79545970f2bc9dc83dde12397e668b516d36c2bc4b58e167b"
          },
          {
            "seconds": 840,
            "observation": "片尾六项回顾，按电路到数据宽度排列。",
            "frameSha256": "ae9f916d809e394f395fc961da919ea54ef14efc9a114fa07f075e0e0938ed37"
          }
        ]
      },
      "learningNotes": "## 00:00—01:06 · 先按原片分清六个问题\n\n本节从已学过的串口、I²C转到SPI，先讲总线怎么连接，再看一笔通信的波形，随后才讨论极性、相位、四种模式、位顺序和数据宽度。它是后续SPI初始化与W25Q64实验的协议基础，本节没有编写驱动函数，也没有运行Flash实验。\n\n[视频00:41：六项讲授顺序](https://www.bilibili.com/video/BV11X4y1j7si/?p=25&t=41)。学习时先把信号名与方向对应起来，再判断边沿；只背“模式0、模式3”容易在后面的配置参数里选错。\n\n## 01:07—03:53 · 一主多从图中的MOSI、MISO与SCK\n\n原图左边是一台作为主机的单片机，右边接多个从机。这里讲的是图示的一主多从接法，不能由这个例子推出所有SPI系统只能采用这一种结构。\n\nMOSI是Master Output Slave Input，即主机输出、从机输入：主机通过这根线发送，各从机的对应输入接在同一条线上。MISO是Master Input Slave Output，即主机输入、从机输出：主机在这根线上接收被选中从机返回的数据。记忆方向时始终以主机为参照，不要把名字理解成每个器件都从自己的同名引脚向外发送。\n\nSCK是Serial Clock，图中由主机产生并送给各从机。它给双方提供共同的位节拍，后面的数据收发都以这些时钟周期和边沿为依据。[视频02:00：对照四种信号的英文名称](https://www.bilibili.com/video/BV11X4y1j7si/?p=25&t=120)。\n\n## 03:54—04:58 · NSS决定这一笔通信找谁\n\nNSS在原片中展开为Negative Slave Select，强调低电平选中。图里主机分别用普通GPIO连接每个从机的NSS，因此有几台从机就画了几条独立片选线。要和某一台通信，就把它的NSS拉低，其他从机的NSS保持高电平。\n\n注意两类线的区别：MOSI、MISO和SCK在这张图中共用，NSS则每台从机独立。不能把所有片选也接在一起，再期望主机通过这条线区分设备。本节只解释连接和选择关系，具体哪一个GPIO控制Flash片选要到后面的实验中确定。\n\n## 04:59—06:53 · 沿着同一张波形读一笔收发\n\n原片的波形先让NSS1变低，NSS2、NSS3保持高，表示本次选择从机1。随后主机产生SCK，MOSI随时钟发送主机数据，MISO在相同的时钟过程中传回从机数据。每一个时钟周期，两条数据线各传输一位，所以这幅图体现的是同时发送和接收，两个方向经历相同数量的位时钟。\n\n读图顺序应是：先看片选是否有效，再数时钟周期，最后在对应位置看MOSI和MISO的位。不要把两条线误读成“先发完一串，再额外产生另一串时钟接收”。[视频06:00：选择从机1后的三条总线波形](https://www.bilibili.com/video/BV11X4y1j7si/?p=25&t=360)。\n\n## 06:54—09:04 · 极性先决定空闲电平，才有第一、第二边沿\n\n时钟极性描述SCK空闲时是低电平还是高电平。空闲低时，一周期中的第一边沿是上升沿、第二边沿是下降沿；空闲高时，第一边沿是下降沿、第二边沿是上升沿。\n\n因此“第一边沿”不是永远等于“上升沿”。判断顺序是先确认空闲电平，再沿时间方向找到离开空闲电平的第一次跳变。原片用上下两组波形对比这件事，这是后面理解CPOL和CPHA组合的前提。\n\n## 09:05—10:24 · 相位决定在哪一个边沿采样\n\n相位在这里用第一边沿采样、第二边沿采样来区分。接收端在指定边沿读取当前数据，发送端需要让对应位在采样时可被稳定读取。读原图时要把采样虚线落到具体边沿上，不能笼统地说“在高电平时接收”。\n\n同一种极性可以配两种相位；同一种“第一边沿采样”也可能对应上升沿或下降沿，取决于前面选定的空闲电平。[视频10:00：边沿与数据有效位置](https://www.bilibili.com/video/BV11X4y1j7si/?p=25&t=600)。\n\n## 10:25—11:40 · 四种模式是两个选择的组合\n\n原片将极性CPOL和相位CPHA组合为四种模式：\n\n- 模式0：CPOL=0、CPHA=0，空闲低，在第一边沿也就是上升沿采样。\n- 模式1：CPOL=0、CPHA=1，空闲低，在第二边沿也就是下降沿采样。\n- 模式2：CPOL=1、CPHA=0，空闲高，在第一边沿也就是下降沿采样。\n- 模式3：CPOL=1、CPHA=1，空闲高，在第二边沿也就是上升沿采样。\n\n这四项是在解释通信格式，不是在本节替某个器件选模式。后续配置SPI时，要让双方采用相容的时序。[视频11:00：四组模式原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=25&t=660)。\n\n## 11:41—13:05 · 传输顺序是先出bit0还是bit7\n\n原图先用位权说明最低位与最高位：8位数据中bit0的权重是2的0次方，bit7的权重是2的7次方。LSB First表示先传最低位，波形里的位次依次是0、1、2直到7；MSB First则从7、6、5一直到0。\n\n这里改变的是同一组位在时间轴上出现的先后，不是把最低位重新赋成最高位的权重。应沿波形从左往右读位号，再回到原数据判断数值。[视频12:00：两种位顺序对照](https://www.bilibili.com/video/BV11X4y1j7si/?p=25&t=720)。原图有一处位号笔误：MSB First下方MISO首组仍印成0→7，与同组MOSI及后续各组7→0不一致；按MSB First定义应从最高位开始，不能照这组错号复画。\n\n## 13:06—14:12 · 数据宽度与片尾回顾\n\n最后的图把传输分成8 bit和16 bit两种分组：上图每8个位构成一组，下图每16个位构成一组，SCK仍然是一位一个周期，MOSI和MISO仍同步进行。这是在为本课程所用STM32 SPI的宽度选项做准备，不应扩写成所有SPI器件只能用这两种宽度。\n\n[视频13:30：8位和16位分组原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=25&t=810)。片尾按开头的六项回顾：电路结构、通信流程、极性和相位、四种模式、位顺序、数据宽度。下一节进入硬件结构时，就可以把这些波形概念对应到移位寄存器和控制参数。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 852.16,
        "asrSegments": 320,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "2251e1657ebdf5c58955672214d527cb856cc45564e9a539b94126d07304c81e",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 26,
      "phase": "spi",
      "title": "5.2 [番外] 按钮驱动程序编写",
      "duration": 1295,
      "summary": "从PA0上拉按钮和PC13板载灯出发，用previous/current识别松开边沿、翻转输出，再在变化分支末尾加Delay(10)消抖。",
      "notes": "本节建立ButtonTest，按钮PA0输入上拉、板载LED PC13开漏输出。先用previous/current记录前后采样，仅在0→1松开边沿进入LED切换；通过读取PC13输出数据位写相反值实现翻转。首次实物测试偶发看似未响应，视频用机械金属片和毛刺解释一次动作可能出现多次上升沿。最后引用delay.h，在变化分支末尾、执行边沿处理之后加Delay(10)，重新编译下载并连续测试。正文保留该实际延时位置，没有改成延时后重新采样的另一种实现。",
      "points": [
        "按钮PA0接地/IPU与PC13低电平有效Out_OD",
        "App_Button_Init/App_OnBoardLED_Init及ButtonTest工程",
        "previous/current均Bit_SET，先保存旧值再读取PA0",
        "current!=previous并current==Bit_SET识别松开事件",
        "GPIO_ReadOutputDataBit读取PC13旧输出，再写相反值",
        "抖动多次上升沿导致偶数次翻转，变化处理末尾Delay(10)后实物测试"
      ],
      "cid": 26054953107,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 240,
            "observation": "目录连接/初始化/边沿原理/消抖。",
            "frameSha256": "f6824f82092d1a8d79453ce0566cd31b7c5cc19583b5b224909c692a7d20451b"
          },
          {
            "seconds": 420,
            "observation": "App_Button_Init原名、PA0 IPU；App_OnBoardLED_Init开始。",
            "frameSha256": "96fe351c82081fc0ecde10f543610503693fda666da56e14eb0fffc38dfd65d6"
          },
          {
            "seconds": 480,
            "observation": "转按钮程序原理。",
            "frameSha256": "a716f328c0d513fa4c2c6c61092860fb92770b5cb65e91de777da4a27a700142"
          },
          {
            "seconds": 780,
            "observation": "current和previous初值Bit_SET，previous=current后GPIO_ReadInputDataBit，开始不等判断。",
            "frameSha256": "a9d35a734f88f3eaf10f3f91205f9330ec36839c763b4ef7ef0134442dbbb9f0"
          },
          {
            "seconds": 960,
            "observation": "松开条件及GPIO_ReadOutputDataBit/WriteBit切灯，按下else空。",
            "frameSha256": "b91534bfb294d8a72f65397f6df46bb6c15c880396afb614a7ce4af6dde5ef7a"
          },
          {
            "seconds": 1080,
            "observation": "按钮内部结构、按下/松开毛刺、课件标注10ms。",
            "frameSha256": "28bf0ee611f1fc7c0905375544f08eaa0aa25e7d77c4bb05aa00c88f91303be6"
          },
          {
            "seconds": 1140,
            "observation": "毛刺上升沿与0→1→0→1→0示意。",
            "frameSha256": "d2318b6a26c589577e9aa00714a97b36443b6d6789c5940d028ef039500c2c71"
          },
          {
            "seconds": 1260,
            "observation": "实际Delay(10)在变化if内的分支后，编译0错0警告。",
            "frameSha256": "7a9f208dc11dd94ff473a11edd43eb68be9246c98602b57a9dc9515990d021db"
          },
          {
            "seconds": 1268,
            "observation": "实物操作按钮，板载LED暗。",
            "frameSha256": "249cab215fbb804a4b28446e3a5930ef0ae57095cc566fb774dd191de3185382"
          },
          {
            "seconds": 1271,
            "observation": "实物操作按钮，板载LED亮。",
            "frameSha256": "fd68fad2f6c485752f328f559bacaa9a17f6b802fbacbad55ce1baafa85bd65a"
          },
          {
            "seconds": 1273,
            "observation": "实物操作按钮，板载LED再次暗。",
            "frameSha256": "6d5122d48cd7296a9225c51a5764884ed52bcc80ad6c59a3e145dbd2f4ead828"
          }
        ]
      },
      "learningNotes": "## 00:40—03:57 · 按钮接 PA0，板载 LED 使用 PC13\n\n[观看实验目标与电路](https://www.bilibili.com/video/BV11X4y1j7si/?p=26&t=40)。这节番外为后面的 SPI 实验准备按钮驱动：一次按钮动作切换一次板载 LED 亮灭。视频先分别复习按钮和 LED 的接法，再连接实物。\n\n按钮一端接 PA0，另一端接地，PA0 配输入上拉。松开时输入被上拉为1，按下时经按钮接地为0。板载 LED 已接 PC13，按图中的低电平有效接法，PC13 写0点亮、写1熄灭；这一部分不用额外接线。\n\n这里先分清两个“状态”：PA0 读到的是按钮电平，PC13 写入的是 LED 控制电平。它们都用0、1表示，但含义不同。\n\n## 03:58—07:51 · 在 ButtonTest 初始化按钮和 LED\n\n[观看两个初始化函数](https://www.bilibili.com/video/BV11X4y1j7si/?p=26&t=238)。视频从模板建立 ButtonTest，分别定义 `App_Button_Init` 与 `App_OnBoardLED_Init`。讲者把前缀改为 App，是为了与 `my_lib` 中的函数区分。\n\n`App_Button_Init` 使能 GPIOA 时钟，选 `GPIO_Pin_0`、`GPIO_Mode_IPU`，调用 `GPIO_Init(GPIOA, &GPIO_InitStruct)`。输入模式这里没有设置输出速度。LED 初始化使能 GPIOC，选 Pin13、`GPIO_Mode_Out_OD`、`GPIO_Speed_2MHz`，最后初始化 GPIOC。`main` 在循环之前依次调用这两个函数。\n\n## 07:52—11:48 · 捕捉松开的瞬间，而不是在持续按住时反复翻转\n\n[观看 previous/current 推导](https://www.bilibili.com/video/BV11X4y1j7si/?p=26&t=472)。视频再次展示现象，并进一步明确：LED 在松开按钮时切换，按下时不切换。因此任务变为识别 PA0 的0→1变化。\n\n用 `previous` 保存上一次值，`current` 保存当前值。两值不同代表出现边沿；再看当前值，若现在为1，则上次必为0，是松开；若现在为0，则上次为1，是按下。这样按钮保持某一电平时不会不断执行切灯。\n\n原片先将两个变量都初始化为 `Bit_SET`，按初始松开的情况开始：\n\n```c\nuint8_t current = Bit_SET, previous = Bit_SET;\n```\n\n## 11:49—13:27 · 每轮先保存旧值，再读新值\n\n[观看状态更新录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=26&t=709)。视频利用已有 `while(1)` 轮询按钮，循环内先写：\n\n```c\nprevious = current;\ncurrent = GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_0);\n```\n\n这个先后使 `previous` 保留本次读取前的旧状态，`current` 接住这次新读的 PA0。随后 `if(current != previous)` 进入边沿处理，里面再判断 `if(current == Bit_SET)`。松开分支中写 LED 切换，按下对应的 `else` 在本节留空。\n\n例如按钮从松开变按下，前后是1、0，进入变化分支但不切灯；之后保持按下，两次都是0，不进入；松开时变0、1，才执行一次切换。这是原片通过两次采样判断事件的主线。\n\n## 13:28—16:40 · 读取 PC13 输出寄存器，再写相反值\n\n[观看 LED 翻转代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=26&t=808)。视频先回顾输出数据寄存器控制引脚，再引出 `GPIO_ReadOutputDataBit`，读的是上次写入 PC13 的控制值。松开分支中的原代码为：\n\n```c\nif(GPIO_ReadOutputDataBit(GPIOC, GPIO_Pin_13) == Bit_SET)\n{\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_RESET);\n}\nelse\n{\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET);\n}\n```\n\n原输出为1时改写0，原输出为0时改写1，实现翻转。这里按钮使用 InputDataBit，LED 使用 OutputDataBit：一个读外部输入电平，一个读输出控制位。\n\n首次编译出现文件末尾缺换行的警告，视频补换行后重新编译、下载。实物中能切灯，但有时一次操作看起来没有改变，于是接着分析抖动。\n\n## 16:41—19:37 · 机械抖动为什么可能让一次动作看起来没生效\n\n[观看按钮内部结构与毛刺](https://www.bilibili.com/video/BV11X4y1j7si/?p=26&t=1001)。课件拆开按钮，画出内部弹性金属片接通与断开的状态，再将按下、松开瞬间画成多次跳变。\n\n程序正在捕捉上升沿。若一次机械动作产生多个上升沿，就可能短时间连续切灯。视频在波形旁写 `0→1→0→1→0`，说明偶数次翻转后又回到原状态，人眼看起来像按钮没有响应。这不是持续按住时循环切换，而是边沿检测把抖动也当成了变化。\n\n本例用10毫秒的延时避开后续毛刺。课件上的抖动时间是本节选延时的依据，具体按钮的抖动特性仍取决于器件与操作情况。\n\n## 19:38—21:35 · 在变化分支末尾加 Delay(10)，再做实物测试\n\n[观看消抖代码位置](https://www.bilibili.com/video/BV11X4y1j7si/?p=26&t=1178)。视频引用 `delay.h`，并说明当前提供的延时库会自动完成初始化，因此此处直接调用 `Delay(10)`。\n\n21:00 IDE 可见实际位置：`Delay(10);` 位于 `if(current != previous)` 内，在松开切灯分支和空的按下分支之后。也就是说检测到边沿，先执行对应处理，再暂停采样10毫秒。原片没有在延时之后重新读取 PA0，也没有把这一段写成“等待后再次确认电平”的实现。\n\n[观看最后按钮测试](https://www.bilibili.com/video/BV11X4y1j7si/?p=26&t=1262)。编译下载后重新复位，视频连续操作按钮，演示每次动作切换灯；21:08、21:11、21:13 原帧可见操作过程中 LED 亮灭状态发生变化。至此，本节完成了从原始输入采样、边沿判断、输出翻转到延时遮蔽抖动的实现，下一节再处理单击、双击和长按。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1294.6773125,
        "asrSegments": 487,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "23346f283c48e46b1276fa89f3ad869af2474d3c886465c508d4d8f9102b58df",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "课件给出的抖动时间不作为所有按钮的通用上限；正文按本实验10ms参数解释。",
          "原片消抖是边沿处理后Delay10遮蔽后续采样，未延时后重采样，正文明确此实际位置。"
        ]
      }
    },
    {
      "page": 27,
      "phase": "spi",
      "title": "5.3 [番外] 按钮代码的封装",
      "duration": 1809,
      "summary": "用ButtonLibTest的按钮库识别单击/双击/长按，在USART1输出cnt，保留原初始化字段、进程调用、回调绑定与片尾库bug说明。",
      "notes": "本节建立ButtonLibTest，初始化PA9/PA10的USART1，先发送Hello world.验证串口，再使用button.h声明button1和App_Button_Init。正文按原片解释GPIO、三个默认时间参数、四个回调及My_Button_Proc循环调用。点击回调区分clicks1加一和2清零，长按回调每次加一，绑定后在三处变化位置补My_USART_Printf(USART1,\"%d\",cnt)。保留LongPressInterval/LongPressTickInterval的课件与IDE命名差异，以及首次长按有库bug、修复细节未展示的事实。",
      "points": [
        "PA0按钮，USART1默认PA9/PA10，App_USART1_Init与Hello world测试",
        "Button_TypeDef button1、Button_InitTypeDef与My_Button_Init",
        "三个0时间参数选1000/100/200ms默认值，IDE LongPressTickInterval与PPT不同",
        "while中持续My_Button_Proc(&button1)",
        "button_clicked_cb处理1/2次点击，button_long_pressed_cb持续cnt++，分别绑定",
        "三处My_USART_Printf的格式串%d不带换行；首次长按库bug修复后复测"
      ],
      "cid": 26054953051,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 300,
            "observation": "App_USART1_Init名称与PA9 TX/PA10 RX注释。",
            "frameSha256": "bb236540950633bfb8d93bfc3b5e7c60763a7522a3dbaeaf1271231eb8b36178"
          },
          {
            "seconds": 480,
            "observation": "USART115200、Tx|Rx、8位、无校验、1停止位；未赋流控。",
            "frameSha256": "21d8eda490a121523a24067b6a4b7008076ae9cd4f65122ddbf8937be7cb2f9c"
          },
          {
            "seconds": 660,
            "observation": "usart.h、button.h；原Hello world.加回车换行。",
            "frameSha256": "7ef6bad109cc6d40b6786c2637b346eb5793f9b678b8949c65880868a9a71ab2"
          },
          {
            "seconds": 720,
            "observation": "PPT四回调与1000/100/200默认，长按间隔名LongPressInterval。",
            "frameSha256": "c4321dcaca24d844ec7b70706987ddf90354f56af8e8207c2ceb2b51e67d76c7"
          },
          {
            "seconds": 960,
            "observation": "全局Button_TypeDef button1，main当时尚未初始化按钮。",
            "frameSha256": "4d7018f96c372b42e12d5597a4239f647a5407fcc876995f5bc85de119076126"
          },
          {
            "seconds": 1080,
            "observation": "实际Button_InitStruct成员LongPressTickInterval，回调先0。",
            "frameSha256": "a5c55341e0f9d9e25223fea7f151922885739c6ba989a5df57174a1d68d19c1d"
          },
          {
            "seconds": 1200,
            "observation": "My_Button_Proc原理对照previous/current轮询。",
            "frameSha256": "0f484e9ea925a07ec86b0d590e46aa507fb2338fa6f03658ec1c53cb1f2254f0"
          },
          {
            "seconds": 1248,
            "observation": "main录入My_Button_Proc的中途状态。",
            "frameSha256": "73374d925787755533919b5ca025e5b4dbd25a54e3009d6be57bf65eb472deaa"
          },
          {
            "seconds": 1256,
            "observation": "My_Button_Proc(&button1)完整。",
            "frameSha256": "e4d4ca51f76bde47169f83aad1155659b0ab431ce9bf8e1dc6bb0187945b8da8"
          },
          {
            "seconds": 1380,
            "observation": "全局uint32_t cnt=0与回调声明录入过程。",
            "frameSha256": "72b820265127b3ee285b34bd88d634d0b10d3def0157cc2262e8d01e3f53d207"
          },
          {
            "seconds": 1500,
            "observation": "点击回调cnt++/cnt0，绑定clicked，长按开始。",
            "frameSha256": "919d99d209e50507c294caccb98b3e7668faa533e03a630cbef66817dffb60be"
          },
          {
            "seconds": 1680,
            "observation": "第二次录入回调的中途状态，点击已写、长按尚空。",
            "frameSha256": "d8333ab85b287c4c173ae6d63502b4850ffa84c6288500acd5223771050c7495"
          },
          {
            "seconds": 1740,
            "observation": "两回调已绑定，开始为点击补My_USART_Printf。",
            "frameSha256": "2aa9e8e6324af7ded9873e73e786d4d343dfce6991afe7f2db41437f8d850cde"
          },
          {
            "seconds": 1752,
            "observation": "点击和长按三处均已打印，格式串%d无换行。",
            "frameSha256": "72866fc196a23ca2bae8f03d8349aa17d7121358d5bd87ae239fdf0e5bc5fc81"
          },
          {
            "seconds": 1770,
            "observation": "实物按钮与串口计数列表，接收自动换行选项已勾。",
            "frameSha256": "6f9514276f82d2cd564e60efd53216f9c616270aebaadd9da2b98166e0770084"
          },
          {
            "seconds": 1788,
            "observation": "串口接收保留大量连续数字和随后新计数。",
            "frameSha256": "6db4c3b2bc18eac75140e3d38ff7a04ea72f2a973193f0aa3bc26fc867a04e86"
          },
          {
            "seconds": 1791,
            "observation": "修复说明之后的实物操作与计数测试。",
            "frameSha256": "b2f053a4151d929430c65a99f8b6946ad1938245ca7cd23b8545092311b7353b"
          },
          {
            "seconds": 1800,
            "observation": "课末五部分目录。",
            "frameSha256": "7e583348960a4ebec259b97005fe7954829fefea588ee37c655d13551215eb3d"
          }
        ]
      },
      "learningNotes": "## 00:42—02:41 · 用串口观察单击、双击与长按\n\n[观看目标现象与电路](https://www.bilibili.com/video/BV11X4y1j7si/?p=27&t=42)。本节测试 `my_lib` 中封装的按钮驱动：单击让计数增加1，双击清零，长按时持续增加，通过串口把数字发到电脑。电路沿用 PA0 接地按钮，并增加 USB 转 TTL 模块连接 USART1，使用默认 PA9=TX、PA10=RX。\n\n视频先演示三种动作，再按“电路→串口初始化→按钮初始化→进程函数→回调”逐步编写 ButtonLibTest。\n\n## 02:42—09:25 · App_USART1_Init 后先发送 Hello world 测试\n\n[观看串口初始化](https://www.bilibili.com/video/BV11X4y1j7si/?p=27&t=162)。`App_USART1_Init` 先配置 GPIOA：PA9 为 `GPIO_Mode_AF_PP`、2MHz，PA10 为 `GPIO_Mode_IPU`。再开 USART1 的 APB2 时钟，配置115200、Tx|Rx、8位数据、无校验、1位停止位，调用 `USART_Init`，最后 `USART_Cmd(USART1, ENABLE)`。\n\n为先确认串口正常，引用 `usart.h`，在 `main` 的初始化后调用：\n\n```c\nMy_USART_SendString(USART1, \"Hello world.\\r\\n\");\n```\n\n串口助手设置同一波特率、8位、无校验、1停止位，接收选 ASCII，打开后按复位观察这行测试文字。后面加入按钮代码时，视频将这一测试调用注释掉。\n\n### 本站工程注：初始化结构体的流控成员\n\n原片声明 `USART_InitTypeDef USART_InitStruct` 后未显示清零，也没有给 `USART_HardwareFlowControl` 赋值。本地标准库的 `USART_Init` 实际仍读取该成员；整理独立工程时可先 `USART_StructInit` 取得默认值，再覆盖所需参数。这是依据库源码的工程补充，不是视频当时录入的步骤。\n\n## 09:26—16:02 · Button_TypeDef 与初始化参数分别保存什么\n\n[观看 button.h 与参数说明](https://www.bilibili.com/video/BV11X4y1j7si/?p=27&t=566)。引用 `button.h`，先为按钮声明全局 `Button_TypeDef button1`，初始化时把 `&button1` 交给 `My_Button_Init`。另一个参数是 `Button_InitTypeDef`，用于提供 GPIO、时间和回调配置。\n\nGPIOx、GPIO_Pin 指定按钮位置，本例 GPIOA、Pin0。三个时间参数在本节均填0，表示取库的默认值：\n\n- `LongPressTime`：长按阈值，默认1000毫秒。\n- 长按重复间隔：默认100毫秒，达到长按后按此节奏触发事件。\n- `ClickInterval`：连续点击的最大间隔，默认200毫秒；较慢的两次动作会被视为两次单击。\n\n这里有一个画面命名差异：PPT 写 `LongPressInterval`，18:00、25:00 IDE 实际成员是 `LongPressTickInterval`，代码应按所使用库头文件的实际成员对应。\n\n四个回调成员分别处理按下 `button_pressed_cb`、松开 `button_released_cb`、点击 `button_clicked_cb`、长按 `button_long_pressed_cb`。点击回调参数 `clicks` 区分单击、双击等；长按参数 `ticks` 表示重复触发次数。\n\n## 16:03—18:42 · App_Button_Init 先绑定引脚和默认时间\n\n[观看初始化录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=27&t=963)。本节定义 `App_Button_Init` 包起库调用，先声明 `Button_InitTypeDef Button_InitStruct`，逐个填写成员。原片此时将四个回调先填0，待写完处理函数再替换其中两个。\n\n```c\nButton_InitStruct.GPIOx = GPIOA;\nButton_InitStruct.GPIO_Pin = GPIO_Pin_0;\nButton_InitStruct.ClickInterval = 0;\nButton_InitStruct.LongPressTime = 0;\nButton_InitStruct.LongPressTickInterval = 0;\n```\n\n成员填完后调用 `My_Button_Init(&button1, &Button_InitStruct)`，再在 `main` 调用 `App_Button_Init()`。GPIO 的输入上拉初始化由按钮库完成，因此本例调用方通过结构体告诉库引脚位置。\n\n## 18:43—20:57 · My_Button_Proc 必须持续被调用\n\n[观看进程函数的含义](https://www.bilibili.com/video/BV11X4y1j7si/?p=27&t=1123)。视频打开 `My_Button_Proc` 的说明，再用上节 previous/current 的轮询框架对照：原来每轮读取输入、判断边沿和处理事件的工作，现在封在这个进程函数里。\n\n因此初始化只准备状态，实际检测仍需不断运行。视频把它放入主循环：\n\n```c\nwhile(1)\n{\n    My_Button_Proc(&button1);\n}\n```\n\n这里“进程函数”是本库对需要反复调用的处理函数的称呼。本节没有另建操作系统任务。\n\n## 20:58—28:28 · 点击与长按回调改变同一个 cnt\n\n[观看回调逐段编写](https://www.bilibili.com/video/BV11X4y1j7si/?p=27&t=1258)。全局声明 `uint32_t cnt = 0`，点击时 `clicks==1` 就 `cnt++`，`clicks==2` 就 `cnt=0`。长按回调每次触发也 `cnt++`，本例没有使用传入的 ticks 来计算计数值。\n\n视频在这一段前后两次展示了回调的声明、实现和绑定录入，最终都落实到相同两个函数。原名是小写的 `button_clicked_cb(uint8_t clicks)` 和 `button_long_pressed_cb(uint8_t ticks)`。写完后回初始化结构体，将相应成员从0改成函数名，按下、松开回调继续为0：\n\n```c\nButton_InitStruct.button_clicked_cb = button_clicked_cb;\nButton_InitStruct.button_long_pressed_cb = button_long_pressed_cb;\n```\n\n函数名赋给成员是让库在识别动作后调用它；只定义函数而未绑定，库不会因此自动知道应该使用哪个处理函数。\n\n## 28:29—29:18 · 在三处计数变化后补串口输出\n\n[观看补齐打印](https://www.bilibili.com/video/BV11X4y1j7si/?p=27&t=1709)。视频发现还没有把数字发到电脑，于是在单击加1、双击清零、长按加1三处分别补 `My_USART_Printf`。29:12 IDE 显示完整点击回调：\n\n```c\nvoid button_clicked_cb(uint8_t clicks)\n{\n    if(clicks == 1)\n    {\n        cnt++;\n        My_USART_Printf(USART1, \"%d\", cnt);\n    }\n    else if(clicks == 2)\n    {\n        cnt = 0;\n        My_USART_Printf(USART1, \"%d\", cnt);\n    }\n}\n```\n\n长按回调则是 `cnt++` 后调用同一句打印。原片格式串此处只有 `\"%d\"`，没有在代码里附加回车换行；串口助手画面勾选了接收区自动换行。以上按课堂代码保留，不能把界面换行反推为源码包含 `\\r\\n`。\n\n## 29:19—30:09 · 保留长按库问题与修复后的重新测试\n\n[观看最终测试及说明](https://www.bilibili.com/video/BV11X4y1j7si/?p=27&t=1759)。首次测试能看到数字增加和清零，但讲者随后指出长按存在问题，说明检查后是库内 bug，并在修复后再次演示单击增加、双击清零、长按连续增加。\n\n29:30 原图可见串口计数列表，29:48 的接收区保留前一段大量连续数字及随后新的计数；29:51继续进行按键演示。视频没有展示这次库内修复的具体代码，本页也不把某一内部算法补作修复内容。此处能跟随学习的是应用层对象、初始化、循环调用、回调绑定和三处打印的完整用法。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1808.1706875,
        "asrSegments": 766,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "fcbc052b0c648a0b412bf05d0a28facb38f12c2e4ea3eedfd300d3f583d8a145",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "讲者说明长按库bug已修复，但原片未展示具体内部改动，正文不补造。",
          "USART_HardwareFlowControl未赋值的原片代码与本地库实际读取该成员之间的差异，已单列本站工程注。",
          "本节My_USART_Printf以%d打印uint32_t cnt为原样摘录，未私换格式串或加换行。"
        ]
      }
    },
    {
      "page": 28,
      "phase": "spi",
      "title": "5.4 [SPI] IO 引脚初始化",
      "duration": 1266,
      "summary": "从W25Q64六个引脚与SPI1重映射表确定PB3/4/5和PA15接线，按主机全双工选择GPIO模式与2MHz输出档位，在SPITest的App_SPI1_Init中逐根初始化。",
      "notes": "完整阅读496段ASR后按接线、GPIO配置表、速度资料和IDE录入逐段核对。原码在PA15段经历复制修改，20:16才完成GPIOA端口修正；本节保留当时AFIO和重映射两句，后续P31再处理调试复用。",
      "points": [
        "W25Q64为外部Flash，DI/DO/CLK分别接主机MOSI/MISO/SCK。",
        "SPI1选择PB3/4/5重映射，普通PA15接CS，模块接3.3V与地。",
        "SCK/MOSI使用AF_PP，MISO使用IPU，片选PA15使用Out_PP。",
        "区分器件资料的80MHz、实验约1MHz通信选择和2MHz GPIO档位。",
        "App_SPI1_Init依次配置AFIO、SPI1重映射、PB3、PB4、PB5、PA15并由main调用。"
      ],
      "cid": 26054953171,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 420,
            "observation": "SPI1默认PA5/6/7与重映射PB3/4/5，SPI2 PB13/14/15的表。",
            "frameSha256": "be863821b7f5d09198d52527a131a52d7449e31dd142c982b7e9eef1f085300f"
          },
          {
            "seconds": 480,
            "observation": "PB5-DI/PB4-DO/PB3-CLK/PA15-CS、3.3V及共地接线图。",
            "frameSha256": "71084508a3c57e0acadb7a3a133752a79171861fac1774668b1dad4befdae53c"
          },
          {
            "seconds": 600,
            "observation": "SPI GPIO配置表中主从/全双工输入输出模式。",
            "frameSha256": "9c1105d6b29bb7404c2559a4e91593a105db60e0b0422212ac09b9082071cd20"
          },
          {
            "seconds": 780,
            "observation": "Flash资料的80MHz时钟工作与中英文对照。",
            "frameSha256": "946237923b7a54667622060714f1f28f9197b3ae4f35114b7c59f14d971703a2"
          },
          {
            "seconds": 960,
            "observation": "App_SPI1_Init只写到使能AFIO时钟。",
            "frameSha256": "c8e8feb047cf222265a2df3bd242447c7ae2186230bc016f3a763f669b356ca0"
          },
          {
            "seconds": 1020,
            "observation": "添加GPIO_Remap_SPI1和GPIOB时钟，正在录入。",
            "frameSha256": "91c3882fa3113b9fb649239ea1f51fefe4c7d4ef7c314bbb0a31738369c3fd11"
          },
          {
            "seconds": 1080,
            "observation": "PB3 AF_PP/2MHz参数，GPIO_Init仍在输入。",
            "frameSha256": "c4f93607f2d09c215a0074d823695f67b1caa18ede11a4de819d3602dc2ccbcb"
          },
          {
            "seconds": 1100,
            "observation": "PB3完整GPIO_Init(GPIOB,&GPIO_InitStruct)及PB4注释开头。",
            "frameSha256": "34c0b0b05c7ed14b2ea6c79c55a72d14a2a35cc361299166a8582d8a10f60bb7"
          },
          {
            "seconds": 1140,
            "observation": "四引脚配置整理页，PA15普通Out_PP。",
            "frameSha256": "955844cf32587fce1f09207a8a142118138953212172a18d1efcd030c566f32a"
          },
          {
            "seconds": 1200,
            "observation": "复制编辑PA15过程，部分旧Pin5/AF_PP/GPIOB暂未改完。",
            "frameSha256": "b359afebcb01b0023295cd741f36ef71dd8d62f6488a8548ac9dd95c75821ebe"
          },
          {
            "seconds": 1214,
            "observation": "PA15参数已改15/Out_PP，最后GPIO_Init端口仍GPIOB。",
            "frameSha256": "7d00bd7644acfd079659a2458670d4642ea76c43ea9299a7ddfe50b2d2ca69f6"
          },
          {
            "seconds": 1216,
            "observation": "PA15段GPIO_Init端口改为GPIOA完成。",
            "frameSha256": "56d94a35ec774fe43889f80b514be63b219b3cdb8ac63364b1ec6b7e247b0884"
          },
          {
            "seconds": 1217,
            "observation": "PB3、PB4、PB5各段的GPIO参数与调用。",
            "frameSha256": "060db652b9f6d210d639346442bbe500e848a68ca88585b18600d83e36816e50"
          },
          {
            "seconds": 1220,
            "observation": "main调用App_SPI1_Init，函数顶部仅AFIO与SPI1重映射两句。",
            "frameSha256": "355fe0bd48614c588ebfd3a121ba28257e8c593e4fd6cf76fc193bfba87e3565"
          }
        ]
      },
      "learningNotes": "## 00:00—03:35 · 回到SPI，先认识外设与W25Q64\n\n[观看本节安排与SPI模块](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=33) · [观看Flash模块介绍](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=118)\n\n前两节完成按钮驱动后，本节回到SPI，先定位引脚、接线，再决定GPIO模式与输出速度，最后创建SPITest工程编写IO初始化。\n\n讲者在STM32内部框图中指出SPI1、SPI2。SPI模块是片上通信外设，W25Q64是通过SPI连接的外部Flash。视频以电脑内部硬盘与移动硬盘作类比：片内Flash主要存放程序，外部模块可单独保存数据，断电后仍保留。\n\n接着认识模块上的六个标识：VCC、CS、DO、GND、CLK、DI。视频将VCC接3.3V、GND接地；DI从从机角度叫Data Input，所以接主机MOSI；DO是从机Data Output，所以接主机MISO；CLK接主机SCK。先按信号方向理解这些名字，再看对应GPIO编号。\n\n## 03:35—09:10 · 查重映射表，接PB3/PB4/PB5和PA15\n\n[观看引脚定位](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=342) · [观看07:00映射表](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=420) · [观看08:00接线图](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=480)\n\n结构框图右侧列出MOSI、MISO、SCK、NSS。本实验把单片机作为主机，数据与时钟使用SPI外设，外部模块片选另外选一个普通IO控制。\n\nSPI1默认SCK/MISO/MOSI是PA5/PA6/PA7，重映射后为PB3/PB4/PB5。SPI2表中给出的SCK/MISO/MOSI为PB13/PB14/PB15。本次明确选择SPI1，并使用重映射那一组：\n\n- PB5是MOSI，接模块DI。\n- PB4是MISO，接模块DO。\n- PB3是SCK，接模块CLK。\n- PA15用作普通GPIO，接模块CS。\n- 模块VCC接3.3V，GND与单片机共地。\n\nPA15输出高时不选中模块，输出低时选中。它在这份方案中由普通GPIO写高低控制，位置与SPI1的重映射引脚表恰好有联系，但用途要按本实验的实际控制方式理解。\n\nASR把部分默认引脚或PA15识别成了PB，以上编号按07:00映射表、08:00接线图核实。面包板图把同一套连接展开成实际插线位置，接线时逐根对应信号即可。\n\n## 09:10—11:08 · 按主机全双工所在行选GPIO模式\n\n[观看GPIO配置表](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=573)\n\n表格会同时列出主机、从机及不同通信方向。本节只按本次使用的主机全双工方案取对应行：\n\nSCK从主机向外送时钟，采用复用推挽输出GPIO_Mode_AF_PP；MOSI向外发送数据，同样是AF_PP。复用表示输出内容由SPI外设生成，而不是每一位都靠GPIO_WriteBit编排。\n\nMISO接收从机数据。表中主机全双工一行允许浮空或带上拉输入，视频选择输入上拉GPIO_Mode_IPU，使未被有效驱动时有默认高电平。PA15片选则采用普通推挽输出GPIO_Mode_Out_PP，由应用直接控制它的电平。\n\n这样，模式选择与信号方向一一对应：两个外设输出、一根输入、一根普通控制输出。输入模式的PB4不需要再设置输出速度参数。\n\n## 11:08—14:15 · 从资料页到本次2MHz输出档位\n\n[观看速度选择与资料页](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=668) · [观看13:00对照页](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=780)\n\n视频先回顾GPIO输出速度有2、10、50MHz三个档位，再查W25Q64资料特性页。画面中列出80MHz时钟工作等性能，讲者说明面包板连线情况下不选择这么高的通信频率，本次先按约1MHz的SPI时钟来考虑。\n\n因此SCK、MOSI和普通片选输出都选择GPIO_Speed_2MHz。这里有两个量：SPI时钟频率说明SCK如何翻转；GPIO速度档位是引脚输出配置。资料中的最高性能、准备使用的通信频率以及GPIO档位不能当成同一个参数。\n\n19:00整理页给出最终资源配置：PB3为AF_PP、2MHz，PB4为IPU，PB5为AF_PP、2MHz，PA15为Out_PP、2MHz。后面逐项把这些内容写进初始化函数。\n\n## 14:15—16:22 · 新建SPITest并开启重映射\n\n[观看模板工程与函数建立](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=854) · [观看16:00开始录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=960)\n\n解压已有模板并把目录、工程文件改名为SPITest，打开main.c。声明并实现App_SPI1_Init，将第一步注释为初始化IO引脚。PB3/PB4/PB5来自SPI1重映射，因此先写：\n\n~~~c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO, ENABLE);\nGPIO_PinRemapConfig(GPIO_Remap_SPI1, ENABLE);\n~~~\n\n第一句打开AFIO时钟，第二句使能SPI1映射切换。先确定外设实际落在哪组引脚，再初始化相应GPIO。本节此处记录的是这两句；调试复用冲突会在后续P31继续处理。\n\n## 16:22—18:02 · PB3：SCK的复用推挽输出\n\n[观看PB3参数录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=984) · [观看18:20完成后的代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=1100)\n\n函数内声明GPIO_InitTypeDef GPIO_InitStruct，然后配置PB3：\n\n~~~c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB, ENABLE);\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_3;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_AF_PP;\nGPIO_InitStruct.GPIO_Speed = GPIO_Speed_2MHz;\nGPIO_Init(GPIOB, &GPIO_InitStruct);\n~~~\n\nGPIOB时钟对应端口，GPIO_Pin_3对应具体引脚；AF_PP和2MHz对应前面选好的模式、速度。最后把结构体地址交给GPIO_Init，应用到GPIOB。结构体变量可复用，下一根引脚重新填写相应成员。\n\n## 18:02—19:26 · PB4接收，PB5发送\n\n[观看PB4、PB5配置](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=1084) · [观看20:17完整可辨的中段](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=1217)\n\nPB4的MISO采用输入上拉，实际录入为：\n\n~~~c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB, ENABLE);\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_4;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_IPU;\nGPIO_Init(GPIOB, &GPIO_InitStruct);\n~~~\n\n这里没有重新写GPIO_Speed，因为本段是输入配置。随后复制PB3输出配置去设置PB5，将Pin_3改为Pin_5，保持AF_PP、2MHz，并调用GPIO_Init(GPIOB, &GPIO_InitStruct)。同一结构体每次改好后立即调用，因此PB3、PB4、PB5分别得到各自配置。\n\n## 19:26—20:30 · PA15片选输出，最后调用初始化函数\n\n[观看PA15录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=1166) · [观看20:16端口修正完成](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=1216) · [观看main中的调用](https://www.bilibili.com/video/BV11X4y1j7si/?p=28&t=1220)\n\n最后再复制输出初始化，改端口、编号和模式。20:16可见完成后的片段：\n\n~~~c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_15;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_Out_PP;\nGPIO_InitStruct.GPIO_Speed = GPIO_Speed_2MHz;\nGPIO_Init(GPIOA, &GPIO_InitStruct);\n~~~\n\n复制编辑过程中，20:00一度仍显示Pin_5、AF_PP、GPIOB；20:14最后一行还在改端口，20:16已改成GPIOA。按后一个时间点解释最终这一小段，才能与PA15普通输出的目标一致。\n\n接着在main中调用App_SPI1_Init，再进入空while。本节到此完成GPIO准备；下节继续为SPI模块本身设置通信方向、模式、格式与分频。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1265.0453125,
        "asrSegments": 496,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "ff8ac9072c0f702025f02f420c2616d852a552c475c74d1bd95613da86b59d64",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 29,
      "phase": "spi",
      "title": "5.5 [SPI] SPI 模块的初始化",
      "duration": 2537,
      "summary": "从SPI内部框图和SPI_Init结构体展开通信方向、帧格式、分频与NSS，按W25Q64波形在本节录入主机两线全双工、8位、High/2Edge、MSB、64分频、软件NSS及内部置1。",
      "notes": "完整阅读1014段ASR，并按原尺寸框图、方向图、W25Q64BV波形、分频计算和最后IDE逐项核对。本节原录入为模式3，后续P31调整保留在其时间顺序；结尾调用SPI_Init并将内部软件NSS置1。",
      "points": [
        "收发寄存器、移位、时钟分频与状态标志的框图路径。",
        "SPI_Init的模块与结构体指针参数，主机角色与四种通信方向。",
        "按0x04指令波形选择8位、MSB，解释模式0/3并实际录入High/2Edge。",
        "按本段72MHz输入选64分频，得到1.125MHz。",
        "区分外部片选与内部NSS，以SPI_NSS_Soft和SPI_NSSInternalSoft_Set完成软件管理。"
      ],
      "cid": 26054953302,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 180,
            "observation": "SPI框图发送/接收寄存器与MOSI/MISO路径。",
            "frameSha256": "8f4ce4c121db8c4b84ab6627408884ce80e9ec8a8c2d9ba0b716d5d4194f7ee2"
          },
          {
            "seconds": 420,
            "observation": "SPI框图NSS硬件输入和内部NSS软件输入。",
            "frameSha256": "9ec50031f24826bb754bffb8d5e5b350f12465bed7a4a6759bacfd103d5c77a3"
          },
          {
            "seconds": 720,
            "observation": "IDE在GPIO之后开启SPI1时钟并开始SPI_InitTypeDef声明。",
            "frameSha256": "24218f4f00f8f4130af09aa2229efcd98f3d283fcd099248ca4429ffc87dd6fa"
          },
          {
            "seconds": 900,
            "observation": "本节六部分目录进入通信方向。",
            "frameSha256": "3d87500445b5d7b93714c0c501ededb37764082cea232cb61fbb9684c2140a01"
          },
          {
            "seconds": 1020,
            "observation": "PPT四种通信方向与两线全双工接线。",
            "frameSha256": "6d722ff1645cf369d207fbce31e5bc2336932b1d6c755e4d7325b5fcf3b003b8"
          },
          {
            "seconds": 1140,
            "observation": "PPT单线发送/接收方向图。",
            "frameSha256": "6a5c562444373eb501098021f3f3a0c34e9fe1a529e608672b5cf377dd11c45d"
          },
          {
            "seconds": 1560,
            "observation": "浏览W25Q64BV资料的指令页。",
            "frameSha256": "529b8dbec597a17fa4371a41ff5f2a53cb4464bc579246612960d17bdc0bef9e"
          },
          {
            "seconds": 1740,
            "observation": "Write Disable 0x04波形，8位、极性相位与MSB推导。",
            "frameSha256": "02ed7807af0c56c6d60b5c68b1bc0549e9d8a72d2d660c5cd28c0e8eb0c5d6e3"
          },
          {
            "seconds": 1860,
            "observation": "IDE填完Master、两线全双工、8b，正在填CPOL。",
            "frameSha256": "b0952f5e38bfb0a5098d651869528d6058480220f0b6e63c283e184e68005dda"
          },
          {
            "seconds": 2040,
            "observation": "72MHz除2到256，选64得1.125MHz。",
            "frameSha256": "b66dd0804147e09e02bc984e7ca8168bf28f0cca784478e7ed0ae2315c666849"
          },
          {
            "seconds": 2220,
            "observation": "主机/从机NSS与多主机交叉控制示意。",
            "frameSha256": "d7262620390ad002d53728c996e10c1a84c9e75c9cf124fd261786746a053f0c"
          },
          {
            "seconds": 2340,
            "observation": "软件内部NSS图与SPI_NSSInternalSoftwareConfig调用。",
            "frameSha256": "746aa106bf214cb0ee70d3a1a0e889c1eddadb7e18e978c56f1fcd36646f4d13"
          },
          {
            "seconds": 2488,
            "observation": "完整可辨IDE配置为High/2Edge、MSB、64、Soft，SPI_Init和内部NSS Set。",
            "frameSha256": "c2a8a9eb86ba03c2be7d075e0ba8207f870c9c935e62fb53d5a5d775bf9176fb"
          }
        ]
      },
      "learningNotes": "## 00:00—07:56 · 从SPI内部框图理解接下来要配置什么\n\n[观看框图讲解](https://www.bilibili.com/video/BV11X4y1j7si/?p=29&t=79)\n\n上节已经完成GPIO，本节继续初始化SPI1模块本身。讲者先把内部图分成数据收发、时钟、通信方向、NSS管理和状态标志几个部分，后面的结构体成员分别对应这些位置。\n\n发送时，程序把数据写入发送数据寄存器，硬件再移到移位部分，逐位从MOSI送出。接收时，MISO上的位进入接收移位部分，组成一组数据后转入接收数据寄存器，程序再读取。图中的TxE对应发送数据寄存器空，RxNE对应接收数据寄存器非空；这两个状态将在下节收发函数里使用。\n\nSCK来自内部时钟，经总开关、预分频和时钟控制部分输出。分频决定快慢，CPOL决定空闲电平，CPHA决定在哪个边沿采样。把这三个参数对应到图上，比只背成员名字更容易理解为什么它们共同决定波形。\n\n通信方向部分既涉及主机、从机角色，也涉及两线全双工、两线只读、单线发送、单线接收。右侧另有NSS输入来源选择，最后一部分会专门说明为什么做主机仍要配置它。\n\n## 07:56—15:00 · SPI_Init与初始化结构体\n\n[观看SPI_Init参数解释](https://www.bilibili.com/video/BV11X4y1j7si/?p=29&t=476) · [观看12:00开始录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=29&t=720)\n\n回到上节App_SPI1_Init，在GPIO配置后增加第二步。先打开SPI1时钟：\n\n~~~c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_SPI1, ENABLE);\n~~~\n\nSPI_Init有两个参数：SPIx指定操作哪一个模块，SPI_InitStruct指向配置结构体。视频把这个结构体比作菜单：先写希望的参数，再把地址交给初始化函数。本次模块是SPI1，因此最后调用的第一个参数就是SPI1。\n\n函数内定义SPI_InitTypeDef SPI_InitStruct。首先填写SPI_Mode，选择SPI_Mode_Master，使单片机作为主机、W25Q64作为从机。\n\n随后预览几个成员：SPI_DataSize控制8位或16位帧；SPI_CPOL、SPI_CPHA控制时钟极性与相位；SPI_FirstBit决定先传最高位还是最低位。以一个字节为例，位7的权重最大，是MSB；位0权重最小，是LSB。它们描述同一数据按什么顺序出现在引脚上，不改变程序中这个字节的数值类型。\n\n## 15:00—20:35 · 为什么本例选择两线全双工\n\n[观看四种方向的示意图](https://www.bilibili.com/video/BV11X4y1j7si/?p=29&t=900) · [观看17:00图示](https://www.bilibili.com/video/BV11X4y1j7si/?p=29&t=1020)\n\n两线全双工就是本章标准SPI连接：MOSI负责主发从收，MISO负责主收从发，两条数据线可以同时工作；SCK和片选另外承担同步、选中职责。“两线”在这里数的是数据线，不是整套连接只要两根导线。\n\n接着看两线只读。图中以从机仅接收为例：从机接收主机送来的内容，不同时通过另一条线回传；讲者用主机广播说明用途。这是本图的角色安排。最后两图是单线发送、单线接收：同一数据通路切换方向，一边发送时另一边接收，两个方向不能同时进行。\n\n17:00 课件将两线只读选项拼写为 `SPI_Direction_2Lines_ReadOnly`；核对本地标准库 `stm32f10x_spi.h`，对应宏实际为 `SPI_Direction_2Lines_RxOnly`。这里保留课件与库名的区别。本例最终选用 `SPI_Direction_2Lines_FullDuplex`，这处课件拼写不进入本例初始化代码。\n\n本次W25Q64使用分开的MOSI、MISO，需要双向收发，因此选择：\n\n~~~c\nSPI_InitStruct.SPI_Direction = SPI_Direction_2Lines_FullDuplex;\n~~~\n\n它与前面的SPI_Mode_Master是两个成员：一个确定角色，一个确定数据通路的工作方式。方向选好后，视频才继续展开帧格式。\n\n## 20:35—25:16 · 数据宽度、极性相位与位顺序\n\n[观看帧格式复习](https://www.bilibili.com/video/BV11X4y1j7si/?p=29&t=1235)\n\n8位帧以八个比特为一组，对应一个字节；16位帧以十六个比特为一组，对应一个半字。先明确一组数据包含多少位，才知道收发程序一次处理的单位。\n\nCPOL低表示SCK空闲低，CPOL高表示空闲高；CPHA第一边沿表示在第一个变化边沿采样，第二边沿表示在第二个变化边沿采样。两项分别记成0或1，得到00、01、10、11四种组合，也就是模式0、1、2、3。\n\n第一边沿随空闲电平而变：空闲低时先上升，空闲高时先下降。因此不能脱离CPOL只记“第一边沿就是上升沿”。视频逐图标出边沿与数据采样点，再将其对应到四种模式。\n\n位顺序则有LSB First与MSB First。前者先传位0，后者先传位7。图中数据仍是同一个字节，只是比特的时间先后不同。到这里仅理解了可选项，具体选哪一组，还要看本次从机的要求。\n\n## 25:16—31:50 · 读W25Q64的04指令波形，选择8位、MSB及模式3\n\n[观看从机资料的选择过程](https://www.bilibili.com/video/BV11X4y1j7si/?p=29&t=1516) · [观看29:00波形推导](https://www.bilibili.com/video/BV11X4y1j7si/?p=29&t=1740)\n\n讲者打开W25Q64BV资料，从指令章节选Write Disable(04h)作为简单例子。这里是拿它的波形判断通信格式：CS对应NSS，CLK对应SCK，DI对应MOSI，DO对应MISO。\n\n命令0x04写成二进制为00000100。图中从位7传到位0，共八位，所以得到两个结论：数据宽度选8位，位顺序选MSB First。CS在传输期间保持低，表示选中从机。\n\n时钟图允许模式0和模式3。空闲低时，上升沿是第一边沿，对应低极性、第一边沿采样，即00；空闲高时，上升沿是第二边沿，对应高极性、第二边沿采样，即11。视频在本节实际录入时选择后一组：\n\n~~~c\nSPI_InitStruct.SPI_DataSize = SPI_DataSize_8b;\nSPI_InitStruct.SPI_CPOL = SPI_CPOL_High;\nSPI_InitStruct.SPI_CPHA = SPI_CPHA_2Edge;\nSPI_InitStruct.SPI_FirstBit = SPI_FirstBit_MSB;\n~~~\n\n这就是本节当时的模式3配置。后续P31开头还会调整为Low/1Edge，阅读本分P时先保留这里实际写出的High/2Edge。\n\n## 31:50—34:26 · 72MHz除以64，得到约1MHz的SCK\n\n[观看时钟分频推导](https://www.bilibili.com/video/BV11X4y1j7si/?p=29&t=1910) · [观看34:00计算图](https://www.bilibili.com/video/BV11X4y1j7si/?p=29&t=2040)\n\n资料页给出器件高速通信能力，但本实验采用面包板，继续沿用上一节约1MHz的目标。这里暂按SPI1内部输入时钟72MHz推算，具体时钟来源留到后续章节。\n\n分频器提供2、4、8直到256分频。图中依次计算出36MHz、18MHz、9MHz、4.5MHz、2.25MHz、1.125MHz等，最后选64分频，因为72MHz÷64=1.125MHz，接近本次目标。\n\n~~~c\nSPI_InitStruct.SPI_BaudRatePrescaler = SPI_BaudRatePrescaler_64;\n~~~\n\n成员里填写的是分频选项，不是直接填入1000000。72MHz是这一段推算采用的输入条件，1.125MHz是分频后的SCK；二者也都与上一节GPIO_Speed_2MHz的输出档位有区别。\n\n## 34:26—39:16 · 主机也要处理NSS，转向软件管理\n\n[观看NSS与多主机示意](https://www.bilibili.com/video/BV11X4y1j7si/?p=29&t=2066) · [观看37:00图示](https://www.bilibili.com/video/BV11X4y1j7si/?p=29&t=2220)\n\n做从机时，NSS是片选输入，低表示被选中，高表示未选中。视频接着补充主机情况：不能仅因本次用普通GPIO控制外部模块CS，就忽略SPI内部对NSS的管理。\n\n左图用主机NSS保持高电平说明主机身份条件；右图用两主机间交叉连接普通IO与NSS，说明NSS被拉低时主机身份会受到影响。这一段用于解释为何主机端也需要给NSS一个确定的高状态。\n\n为了省去额外的物理引脚与连线，讲者回到内部框图，选择内部软件NSS作为信号来源。软件管理后，内部NSS是可写0或1的控制位；本例要写1。\n\n这个内部信号与PA15送往W25Q64的外部片选职责不同：前者用于SPI自身的NSS管理，后者在应用交易时选择Flash。理解两者，才能读懂最后两类调用。\n\n## 39:16—42:17 · SPI_NSS_Soft、SPI_Init与内部NSS置1\n\n[观看软件NSS录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=29&t=2355) · [观看41:28末段代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=29&t=2488)\n\n先填写软件管理选项，再把结构体地址传给初始化函数：\n\n~~~c\nSPI_InitStruct.SPI_NSS = SPI_NSS_Soft;\nSPI_Init(SPI1, &SPI_InitStruct);\n~~~\n\nSPI_Init应用前面已经填写的主机、两线全双工、8位、High/2Edge、MSB、64分频及软件NSS。接着使用视频新介绍的接口设置内部NSS：\n\n~~~c\nSPI_NSSInternalSoftwareConfig(SPI1, SPI_NSSInternalSoft_Set);\n~~~\n\n第一个参数指定SPI1，第二个参数Set表示将内部NSS置1；Reset则表示置0。前一句SPI_NSS_Soft选择由软件管理，后一句才写入内部信号的值，它们各完成一个步骤。\n\n至此，本节在已有GPIO基础上完成SPI1参数配置。视频最后回顾框图、SPI_Init、方向、帧格式、分频和NSS六部分；下一节才沿着发送与接收状态编写收发函数。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 2536.8106875,
        "asrSegments": 1014,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "2d45ff947d09193ba74a7dcb4932611e30f7ac4d232d12652302ce1560734459",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 30,
      "phase": "spi",
      "title": "5.6 [SPI] 数据收发",
      "duration": 1330,
      "summary": "沿SPI双向时序、寄存器流程和四字节动画，逐段实现App_SPI_MasterTransmitReceive，并在SPITest中编译。",
      "notes": "本节先从多片选时序说明SPI同时收发，再声明App_SPI_MasterTransmitReceive(SPIx,pDataTx,pDataRx,Size)。通过发送与接收数据寄存器框图，安排开启、预写首字节、循环Size-1次、读末字节、关闭五段流程。四字节动画逐轮对应发送下标i+1、接收下标i与末尾Size-1。随后逐项讲解标准库调用并录入SPITest，21:45编译结果为0错误0警告。",
      "points": [
        "MOSI与MISO在同一时钟下同时收发，比特与字节数量相对应",
        "原接口SPIx、pDataTx、pDataRx、Size的参数含义",
        "预写首字节，循环Size-1次等待TXE写下一个并等待RXNE读当前",
        "循环外读取末字节，以四字节动画对应i+1与Size-1",
        "使用SPI_Cmd、SPI_I2S_SendData/GetFlagStatus/ReceiveData并编译通过"
      ],
      "cid": 26054953382,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 133,
            "observation": "NSS1低，其他片选高；MOSI/MISO同时移动，比特收发同步。",
            "frameSha256": "f69f7e4db708d3b0d53fb7f3dd9a7eaed1cc2cffd6f754276149010b5266e974"
          },
          {
            "seconds": 240,
            "observation": "接口App_SPI_MasterTransmitReceive，SPIx、const pDataTx、pDataRx与uint16_t Size。",
            "frameSha256": "6ac11ac3359a35820ccffbe8c54cd67e0c3efdbd198cf19186ba3ed56b4353d7"
          },
          {
            "seconds": 399,
            "observation": "框图与流程：预写首字节、Size-1轮TXE写/RXNE读、末字节读取、关闭。",
            "frameSha256": "7407169474a78635123961e903272bf33c82c07f90cbfcaecc5590ca9a3e9f79"
          },
          {
            "seconds": 665,
            "observation": "四发送字节与四接收字节的流程动画起点。",
            "frameSha256": "e75a05d77900886ab962279c66f55cba7631a4cf2d702bd81c96c55e8221daa3"
          },
          {
            "seconds": 930,
            "observation": "PPT完整收发实现，TXE/RXNE、i+1与Size-1均清楚。",
            "frameSha256": "0636a8dbc0a2467de3758f8c268cfb3f30af97d2a98fcbc79f0ecb07fa07546d"
          },
          {
            "seconds": 1080,
            "observation": "IDE尚在定义函数，初始化仍High/2Edge，与本节前一课相接。",
            "frameSha256": "2561560ce204ceb23ab444166c6331b5ca538aee5a65e9e7d53935a1275bead6"
          },
          {
            "seconds": 1200,
            "observation": "IDE循环已写发送部分，下标pDataTx[i+1]。",
            "frameSha256": "e40e0535afa4111c52b8526bcad38ab9451a3c1617984697d55af8852b444df9"
          },
          {
            "seconds": 1260,
            "observation": "PPT末尾RXNE读取与SPI_Cmd DISABLE。",
            "frameSha256": "7a40cabc6af6229efeb4e12e60c1f03013ffbdc2839ccd57743629edffd023e1"
          },
          {
            "seconds": 1285,
            "observation": "IDE循环接收及末字节读取已经录入，关闭语句尚未录入。",
            "frameSha256": "ca0839106ae77f776b48ea0fb090b884f32107cdccbff45d19abadd42f6aade7"
          },
          {
            "seconds": 1295,
            "observation": "IDE正在补SPI_Cmd(SPIx,DISABLE)。",
            "frameSha256": "ab88fc07a83476218f7b75584acbfe319a3d2e3efeb65ed12ddf857403cfb4ef"
          },
          {
            "seconds": 1300,
            "observation": "IDE函数与循环收发代码。",
            "frameSha256": "99c85348eab7c1e71e9a8b6e61deae7c774888840b43fe9f74acfba7515d97c1"
          },
          {
            "seconds": 1305,
            "observation": "Build Output显示0 Error(s),0 Warning(s)。",
            "frameSha256": "f2b1b258833c83c237bbd085aa854a17af58a4508c9524f21eb880248d889718"
          },
          {
            "seconds": 1315,
            "observation": "结束回顾四项内容。",
            "frameSha256": "8bf398113a7637749031eb0a3e66bd317459f7b401abefb312cceb8aaac3e5f4"
          },
          {
            "seconds": 1320,
            "observation": "课末目录回顾。",
            "frameSha256": "9435dac34368bbe36e34ec169d941b9243e1ab6833b972bf785994a21a7bd9b7"
          }
        ]
      },
      "learningNotes": "## 00:28—02:25 · 先看一次 SPI 收发包含什么\n\n[观看收发特点与时序图](https://www.bilibili.com/video/BV11X4y1j7si/?p=30&t=54)。本节接着初始化代码，编写 SPI 主机同时发送、接收数据的函数。图中有三条片选 NSS1、NSS2、NSS3；NSS1 拉低时，对应从机参加通信，其余片选保持高电平。SCK 的连续脉冲同时推动 MOSI 和 MISO 上的数据移动。\n\n沿一组时钟观察，主机从 MOSI 发出一个比特的同时，也从 MISO 接收一个比特。因而发送若干字节时也会产生同样数量的接收字节。本节接口把两个方向都保留下来：发送数组给出要发的内容，接收数组存放通信时同步收到的内容。\n\n## 02:26—05:19 · 声明原片的收发接口\n\n[观看接口参数](https://www.bilibili.com/video/BV11X4y1j7si/?p=30&t=146)。原片声明的是下面这个函数，随后在 SPITest 工程中实现：\n\n```c\nvoid App_SPI_MasterTransmitReceive(SPI_TypeDef *SPIx,\n                                  const uint8_t *pDataTx,\n                                  uint8_t *pDataRx,\n                                  uint16_t Size);\n```\n\n`SPIx` 选用片上的哪个 SPI，例如 SPI1；`pDataTx` 指向待发送数据，前面的 `const` 表示函数通过这个指针读取发送内容；`pDataRx` 指向接收缓冲区，函数会把收到的字节写进去。`Size` 表示这次收发的字节数量，它同时限定发送量和接收量。\n\n接口返回类型是 `void`，接收到的数据通过 `pDataRx` 带回。读下面的数组下标时，要始终把 `Size` 理解为数量：第一个元素是下标 0，最后一个是下标 `Size-1`。\n\n## 05:20—10:37 · 按框图安排先发、循环、收尾\n\n[观看寄存器框图与流程](https://www.bilibili.com/video/BV11X4y1j7si/?p=30&t=320)。原图分别画出发送数据寄存器、发送移位通路、接收移位通路与接收数据寄存器。CPU 向发送数据寄存器写入数据后，硬件把数据移到串行通路并依次送出；接收方向则把串行数据凑成字节，供 CPU 从接收数据寄存器读走。\n\n本节反复使用两个标志：`TXE` 表示发送数据寄存器可以继续放入数据，`RXNE` 表示接收数据寄存器中有可读的数据。流程把发送和接收错开一拍：先放入第一个发送字节，再在循环中放入下一个发送字节、读回前一个接收字节，最后单独取走末尾的接收字节。\n\n原片右侧的流程是：\n\n1. 闭合 SPI 总开关。\n2. 向发送数据寄存器写第一个字节。\n3. 循环 `Size-1` 次：等待 TXE，写第 `i+1` 个数组元素；等待 RXNE，读入接收数组第 `i` 个元素。\n4. 等待 RXNE，读最后一个接收字节。\n5. 断开 SPI 总开关。\n\n这里等待 TXE 的目的，是确认发送数据寄存器已空，可以放下一个字节；并不是把它解释为整次 SPI 通信已经完成。接收数据则对应到 RXNE，随后通过读操作取走。\n\n## 10:38—14:35 · 用四个字节推演数组下标\n\n[观看四字节动画](https://www.bilibili.com/video/BV11X4y1j7si/?p=30&t=638)。视频在框图上方放出四个发送字节和四个接收位置，用它们逐轮演示流程。\n\n开始时先写发送字节 1，也就是 `pDataTx[0]`。循环第一次 `i=0`：等 TXE 后写发送字节 2，即 `pDataTx[1]`；等 RXNE 后读接收字节 1，存入 `pDataRx[0]`。第二次 `i=1`，写发送字节 3、读接收字节 2。第三次 `i=2`，写发送字节 4、读接收字节 3。\n\n当三次循环结束，四个待发送字节都已写入，但接收数组还差最后一个。于是循环外再等 RXNE，把接收字节 4放进 `pDataRx[3]`。这样发送是“预先写 1 个、循环写 3 个”，接收是“循环读 3 个、末尾读 1 个”，两边各为 4 个。这个例子正是循环 `Size-1` 次以及收尾下标 `Size-1` 的由来。\n\n## 14:36—17:47 · 把流程对应到标准库调用\n\n[观看 PPT 原代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=30&t=876)。下列片段摘自画面中的实现，保留原函数、标志和数组下标：\n\n```c\nSPI_Cmd(SPIx, ENABLE);\nSPI_I2S_SendData(SPIx, pDataTx[0]);\n\nfor(uint16_t i=0; i<Size-1; i++)\n{\n    while(SPI_I2S_GetFlagStatus(SPIx, SPI_I2S_FLAG_TXE) == RESET);\n    SPI_I2S_SendData(SPIx, pDataTx[i+1]);\n    while(SPI_I2S_GetFlagStatus(SPIx, SPI_I2S_FLAG_RXNE) == RESET);\n    pDataRx[i] = SPI_I2S_ReceiveData(SPIx);\n}\n```\n\n`SPI_Cmd` 控制图中的总开关；`SPI_I2S_SendData` 把给定数据写入发送数据寄存器；`SPI_I2S_GetFlagStatus` 读取指定标志；`SPI_I2S_ReceiveData` 读取接收数据。函数名里的 `I2S` 来自 SPI/I2S 共用的库接口，本节使用的是 SPI 收发。\n\n两条 `while` 后面的分号是原片写法：标志仍为 `RESET` 时留在空循环等待，标志置位后才执行下一条语句。发送取 `pDataTx[i+1]`，是因为下标 0 的字节已经在循环前送出；接收从 `pDataRx[i]` 开始，是因为循环第一次才取回第一个接收字节。\n\n循环外的原片收尾代码如下：\n\n```c\nwhile(SPI_I2S_GetFlagStatus(SPIx, SPI_I2S_FLAG_RXNE) == RESET);\npDataRx[Size-1] = SPI_I2S_ReceiveData(SPIx);\nSPI_Cmd(SPIx, DISABLE);\n```\n\n末尾的等待与读取补齐最后一个接收字节，再关闭 SPI。这份课堂实现按存在待发送字节的调用展开，开头直接读取 `pDataTx[0]`，没有为 `Size=0` 单列分支。\n\n## 17:48—22:09 · 在工程中按同一顺序录入并编译\n\n[观看 IDE 录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=30&t=1068)。视频切回 SPITest，在 `App_SPI1_Init` 后定义 `App_SPI_MasterTransmitReceive`，按照“开启、预写首字节、循环、读末字节、关闭”的五段逐项录入。20:00 附近画面只写到循环中的发送语句；21:25 已显示循环接收和末字节读取；21:35 正补最后的 `SPI_Cmd(SPIx, DISABLE)`。这些是同一个函数的录入进度。\n\n[观看编译结果](https://www.bilibili.com/video/BV11X4y1j7si/?p=30&t=1305)。21:45 的 Build Output 显示 `0 Error(s), 0 Warning(s)`。本节以收发函数编写、编译和流程回顾结束；接下来才把它用到 W25Q64 实验。回看时可同时对照三处：流程图的 `Size-1` 次循环、四字节动画中的三轮循环、代码的 `i+1` 与 `Size-1`，把同一个收发过程对应起来。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1329.8773125,
        "asrSegments": 526,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "ccb9264920ec1ff3f1ac1a584bf97cb860b35f4e000968970fdb88ab17ea079e",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "ASR在20:24—20:54附近有重复识别异常，相关代码以15:30 PPT和21:25/21:35 IDE实际画面核对。"
        ]
      }
    },
    {
      "page": 31,
      "phase": "spi",
      "title": "5.7 [SPI] W25Q64 实验（上）",
      "duration": 2512,
      "summary": "先修正PA15/JTAG、片选初值与SPI模式0，再沿原函数在零地址保存0x12、读回并观察全局变量a。",
      "notes": "本节开头先纠正前几节的配置：释放PA15的JTAG占用，初始化后让CS保持高，并把本实验改为SPI模式0。随后声明SaveByte/LoadByte，介绍存储层级和六步流程，再依次录入写使能、擦除、等待和页编程；33:57复制补齐第4/6步。读取使用03加三个零地址字节，再发FF交换一个字节，最后调试全局a=0x12。PPT中的PA12与口述、Keil实际使用的PA15单独对照。",
      "points": [
        "开头三次配置修正：释放JTAG、CS先写高、模式改为Low/1Edge。",
        "保留App_W25Q64_SaveByte、LoadByte与App_SPI_MasterTransmitReceive原接口。",
        "逐句解释06、20、05、02、03指令、buffer和1/4/5字节交换。",
        "按原片先录入页编程，再复制补齐第4/6步，最后调试a=0x12。"
      ],
      "cid": 26054953378,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原代码画面对照",
        "checkedAt": "2026-10-28",
        "scope": "P31已阅读完整音轨的自动识别文本，并对照原画面核对顺序、函数名、参数与结果；自动识别不是作者字幕，未逐秒人工听写，也未取得作者原工程。",
        "anchors": [
          {
            "seconds": 120,
            "observation": "SPI1接线图：PB3/PB4/PB5和PA15片选。",
            "frameSha256": "376046b453cb7b87f0e1fc8cebf7e3bfd20b8e4dcc05e099012c965f6f3bcadd"
          },
          {
            "seconds": 405,
            "observation": "Keil已将CPOL/CPHA改为Low/1Edge，PA15初始化后写高。",
            "frameSha256": "55c8d553178af2f8bff45e3ee03e9dc3a49fc7012ea54703890df813e4f37595"
          },
          {
            "seconds": 480,
            "observation": "声明原SaveByte、LoadByte及SPI收发函数。",
            "frameSha256": "156524ac4914a01b23f778b791922675cdf1f0c0d85bdb45b8535227760e64a8"
          },
          {
            "seconds": 600,
            "observation": "容量图：64Mbit/8MByte、块、扇区、页。",
            "frameSha256": "84d85efa630bc72d67972631f0a1a991246b3276c8c3b82fe093537dc92a78fd"
          },
          {
            "seconds": 780,
            "observation": "保存流程：两次写使能、擦除/页编程、两次等待。",
            "frameSha256": "b46dcedf7e2930a8de3f6c4fc4c586ec63d288d7f0a77c003c70b5b837d185da"
          },
          {
            "seconds": 1080,
            "observation": "写使能06的PPT示例；投影片片选印为PA12，口述及IDE用PA15。",
            "frameSha256": "2b0f953b8fddb83eb1b0b63886344b99c43105b6331121421abfc529d3e01798"
          },
          {
            "seconds": 1440,
            "observation": "扇区擦除发送20和三个零地址字节，交换长度4。",
            "frameSha256": "8d9150b464b6909fb1e80ac6bb51e769867bb9b3ca9d0d0e6f1500183dd5a078"
          },
          {
            "seconds": 1620,
            "observation": "读状态05，再用FF交换一字节，检查BUSY位。",
            "frameSha256": "a828422ba8381586e8b1cd382e95ea9adb030c1cf8fdcd0e0e062efb9f4f06d3"
          },
          {
            "seconds": 1920,
            "observation": "页编程发送02、三个零地址字节及Byte，长度5。",
            "frameSha256": "c972fba140fd163393adc3ae6422c0f6137319df81a8671771ff62a113d5bb5a"
          },
          {
            "seconds": 2220,
            "observation": "后续读取PPT已改为03、三个零地址，FF交换一字节。",
            "frameSha256": "f40ea67b5c0e468857500b539310f969a319105bff34608c7c6668f421888d3e"
          },
          {
            "seconds": 2340,
            "observation": "原函数接口和SaveByte(0x12)、LoadByte调用，固定零地址。",
            "frameSha256": "db533a0bd46d093a689814e1e91284de3f1c2a9a5d50e2a95a6ceeed69a9507c"
          },
          {
            "seconds": 2460,
            "observation": "Keil调试显示全局a的值为0x12。",
            "frameSha256": "c1a78e7d2f1c2d984dccd87178f4b5d9e059c1a895293ab5eafeb1830da1f44b"
          }
        ]
      },
      "learningNotes": "## 00:32—01:10 · 本节要做的实验\n\n开头展示面包板上的 W25Q64 模块。本节先通过 SPI 向模块保存一个字节，再把这个字节读出来。上下两节中的本节是“上”，不要把下一节的按键、LED 状态应用提前混进来。\n\n## 01:10—06:46 · 先修正前几节的三处配置\n\n作者先回到上一节的工程纠正配置，然后才开始讲 Flash 的存取。跟做时应先完成这三次修正，再进入后面的读写函数。\n\n### 第一次修正：PA15 被 JTAG 功能占用\n\n[01:25 接线说明](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=85)：SPI1 已从默认引脚重映射到 PB3、PB4、PB5，分别连接 SCK、MISO、MOSI；PA15 作为普通 GPIO 控制 CS。CS 输出高表示未选中，输出低表示选中。\n\n[02:50 引脚表](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=170)：PA15 的复位默认功能是 JTAG 的 JTDI。作者据此回到 `App_SPI1_Init` 的 GPIO 初始化部分，在原先 SPI1 重映射调用旁边增加释放 JTAG 引脚的调用。原片可辨的关键两行是：\n\n```c\nGPIO_PinRemapConfig(GPIO_Remap_SPI1, ENABLE);\nGPIO_PinRemapConfig(GPIO_Remap_SWJ_JTAGDisable, ENABLE);\n```\n\n第一行决定 SPI1 信号映射到哪组脚；第二行关闭 JTAG、保留 SWD，使这里用到的引脚不再被完整 JTAG 接口占用。这不是重新接一根线就能解决的问题。\n\n### 第二次修正：初始化结束后先取消片选\n\n[04:18—05:11 初始化时的 CS](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=258)：尚未开始通信时，模块应处于未选中状态。作者找到 PA15 的 GPIO 初始化位置，并在初始化后写高：\n\n```c\nGPIO_Init(GPIOA, &GPIO_InitStruct);\nGPIO_WriteBit(GPIOA, GPIO_Pin_15, Bit_SET);\n```\n\n这里的 `Bit_SET` 表示把片选线置高，不是“开启 Flash”。一次器件命令开始时才拉低 CS，命令结束后再拉高。\n\n### 第三次修正：本实验改用 SPI 模式 0\n\n[05:14 参数回顾](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=314)：原片保留 8 位数据宽度和 MSB First，并回顾先前选过高空闲、第二边沿的模式 3。作者在本实验中将问题归因为所用模块“不支持模式 3”，因此把配置改为模式 0。这是对作者本次实验说法的记录。\n\n[06:33—06:46 实际修改](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=393)：先把 CPOL 从 High 改成 Low，再把 CPHA 从 2Edge 改成 1Edge：\n\n```c\nSPI_InitStruct.SPI_CPOL = SPI_CPOL_Low;\nSPI_InitStruct.SPI_CPHA = SPI_CPHA_1Edge;\n```\n\n06:40 的代码画面还处于修改中间状态，能看到 Low 与 2Edge 同屏；06:45 已是 Low 与 1Edge。跟视频操作时要看修改完成后的组合，不能停在中间帧照抄。同屏其余参数为主机、双线全双工、8 位、MSB、64 分频、软件 NSS。\n\n这段记录的是作者在本实验中采用的配置。原片展示的手册波形本身同时标有 Mode 0/3，因此不要把这次实验的叙述扩展成“所有 W25Q64 型号都不支持模式 3”。\n\n## 06:49—08:44 · 列出本节结构，先声明两个函数\n\n[06:49 本节三部分](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=409)：存储结构、存储数据、读取数据。\n\n[07:10 开始介绍两个接口](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=430)，随后在 `main.c` 顶部写原型，并在文件末尾先建立空函数体：\n\n```c\nvoid App_W25Q64_SaveByte(uint8_t Byte);\nuint8_t App_W25Q64_LoadByte(void);\n```\n\n`Byte` 是要保存的数据。`SaveByte` 返回 `void`；`LoadByte` 不接受参数，返回 `uint8_t`。本节后面填写的就是这两个固定的单字节接口，示例地址为 `0x000000`。\n\n## 08:44—10:34 · 按原图认识容量、块、扇区和页\n\n[08:44 正式讲存储结构](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=524)。作者先把模块类比成掉电仍保存数据的硬盘，再从型号末尾的“64”解释容量单位。图中从总容量逐层展开：\n\n- W25Q64 总容量为 64 Mbit，即图中的 8 MByte。\n- 总容量分为 128 个块，每块 64 kByte。\n- 每块分为 16 个扇区，每个扇区 4 kByte。\n- 每个扇区分为 16 页，每页 256 Byte。\n\n注意型号中的 64 对应 Mbit，而图中换成字节后是 8 MByte；不能把它读成 64 MByte。随后会用到的两个操作单位分别是扇区与页。\n\n## 10:34—15:56 · 为什么是这六步保存流程\n\n[10:34 转入存储数据](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=634)。作者先区分 RAM 写入和本实验里的 Flash 写入：这里先擦除原区域，再进行编程。流程图由两组组成：\n\n1. 写使能 → 扇区擦除 → 等待空闲。\n2. 写使能 → 页编程 → 等待空闲。\n\n[11:47 两个操作单位](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=707)：先解释为何使用扇区擦除——本例每次最少擦一个 4 kByte 扇区，而不是逐字节擦；再解释页编程——一次写入的数据最多是一页，即 256 Byte。作者用写入 1 MB 数据为例，说明不能一次整批送入，而要分成小段送入。原片借此把前面的存储结构图与接下来的操作对应起来，没有在这里另写跨页算法。\n\n[13:55 写使能](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=835)：作者用“一把锁”解释防止意外修改数据的控制。擦除和编程都会修改内容，所以操作前先写使能；操作后又会关闭，下一个修改操作之前需要再次使能。因此图中有两次写使能，不是重复写错了。\n\n[14:43 等待空闲](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=883)：擦除和编程都需要时间。原片用擦除约 50 ms、页编程约 10 ms 说明这种耗时，再引出状态寄存器 1 的 BUSY 位：1 表示操作进行中，变为 0 表示完成。代码要等的是 BUSY 清零，不是简单写死上述延时；这两个数值是原片的讲解示意，不能作为所有型号的保证值或通用超时上限。\n\n[15:56 回到函数体](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=956)：找到先前建好的 `App_W25Q64_SaveByte`，先按图写下六步注释，然后逐步填入 SPI 指令。\n\n## 16:49—22:38 · 第一步：写使能，逐句读原 SPI 调用\n\n[16:49 起](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=1009)，作者先从 W25Q64BV 手册的 Instructions 找到 Write Enable，再把波形放到课件上。该指令是一字节 `0x06`。\n\n波形里的 `/CS` 对应片选，CLK 对应 SCK，DI 对应 MOSI，DO 对应 MISO。此次只需要把 `0x06` 发送出去，接收通路的数据没有要使用的含义。\n\n[19:14—22:38 对照代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=1154)。先选中，再调用上一节已有的收发函数，最后取消选中。下面是对照整理的片段：`buffer[0] = 0x06` 取自 PPT，片选按口述和 Keil 使用 PA15；它不是该时刻 Keil 画面的逐行抄录。\n\n```c\nuint8_t buffer[10];\nbuffer[0] = 0x06;\nGPIO_WriteBit(GPIOA, GPIO_Pin_15, Bit_RESET);\nApp_SPI_MasterTransmitReceive(SPI1, buffer, buffer, 1);\nGPIO_WriteBit(GPIOA, GPIO_Pin_15, Bit_SET);\n```\n\n逐项看这个调用：\n\n- `SPI1`：使用哪一个 SPI 外设。\n- 第一个 `buffer`：从这个数组取出待发送的字节；这里就是 `buffer[0]` 中的 `0x06`。\n- 第二个 `buffer`：把收到的数据也放回同一数组。发送区和接收区使用同一个数组，并不代表没有进行接收；只是这一阶段收到的值不再使用。\n- `1`：交换 1 个字节，不是数组长度。数组预留了 10 项，是因为后面还会发送较长的指令帧。\n\n**原片画面差异：**17:00—21:00 的 PPT 印的是 `GPIOA, GPIO_Pin_12`，即 PA12；但 19:22—19:35 口述明确强调 PA15，Keil 录入也使用 PA15。这里按实际接线和 Keil 来跟，不把 PPT 的 PA12 混进去。\n\n[25:00 的 Keil 中间画面](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=1500)从数组声明到首次发送之间尚未显示 `buffer[0] = 0x06`；PPT 有这句。现有后段画面没有再次完整露出这段开头，尚未确认作者何时补入。调试画面的工程路径也与这段录入时不同，不能用最后读回成功反推中间代码已完整；这里明确保留差异。\n\n## 22:38—25:29 · 第二步：把扇区擦除拼成四字节命令\n\n[22:38 起的擦除波形与代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=1358)分成指令和地址两部分。指令码是 `0x20`，后面跟 24 位地址，也就是 3 个字节。\n\n本节示例要保存到 `0x000000`，所以三个地址字节都填零。发送数组中的 4 项依次是：\n\n```c\nbuffer[0] = 0x20;\nbuffer[1] = 0x00;\nbuffer[2] = 0x00;\nbuffer[3] = 0x00;\n```\n\n然后沿用相同的片选边界：PA15 拉低 → `App_SPI_MasterTransmitReceive(SPI1, buffer, buffer, 4)` → PA15 拉高。这次 `Size` 是 4，因为指令占 1 字节、地址占 3 字节；接收数据仍放回 `buffer`，本操作不使用它。\n\n此处发送的是“开始擦除”的命令。函数调用返回后，Flash 内部的擦除不一定已经结束，因此下一步仍要查询 BUSY。\n\n## 25:29—30:34 · 第三步：读状态寄存器 1，等 BUSY 清零\n\n[25:29 解释为什么等待](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=1529)，接着从手册找到 Read Status Register-1，指令码是 `0x05`。一次轮询包括两个交换阶段：先发送 `0x05`，再交换一个字节取得状态。\n\n[28:00—30:34 实际讲解和录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=1680)的核心是：\n\n```c\nbuffer[0] = 0x05;\nApp_SPI_MasterTransmitReceive(SPI1, buffer, buffer, 1);\nbuffer[0] = 0xff;\nApp_SPI_MasterTransmitReceive(SPI1, buffer, buffer, 1);\n```\n\n这两次调用处在同一个 CS 拉低窗口内，全部结束后才把 PA15 拉高。第一阶段送出读状态指令；第二阶段发送 `0xff` 的同时产生时钟，把返回的状态字节覆盖到 `buffer[0]`。原片说明 `0xff` 使读期间 MOSI 保持高电平。\n\n接下来用位与取出状态字节的最低位：\n\n```c\nif ((buffer[0] & 0x01) == 0) break;\n```\n\n`0x01` 只保留 bit 0，也就是 BUSY。如果结果仍非零，就继续上面的 `while (1)`；等它清零才 `break`。原片这里用的是没有超时参数的忙轮询，退出依据是读回的 BUSY 位。\n\nPPT 部分画面的 `buffer[0] = 0xff` 漏了行末分号，33:00 的 Keil 对应行有分号。应看正在录入和修正的过程，不把某一中间帧当成最终可编译程序。\n\n## 30:34—33:57 · 先讲第 5 步：页编程，发送五个字节\n\n[30:34 转入页编程](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=1834)。这里先讲第 5 步，而第 4 步写使能、第 6 步等待稍后通过复制前文补齐。跟着视频录入时，先沿作者当前讲到的步骤看。\n\n页编程的指令是 `0x02`，后面先跟 24 位地址，再跟待保存的数据。本节只保存一个字节，因此数组按下面的顺序填写：\n\n```c\nbuffer[0] = 0x02;\nbuffer[1] = 0x00;\nbuffer[2] = 0x00;\nbuffer[3] = 0x00;\nbuffer[4] = Byte;\n```\n\n前 4 项是指令和零地址；第 5 项 `Byte` 就是调用 `App_W25Q64_SaveByte` 时传进来的那个参数。`Byte` 与 `buffer[4]` 的关系，是从函数参数到发送缓冲区的赋值。\n\n随后 PA15 拉低，调用 `App_SPI_MasterTransmitReceive(SPI1, buffer, buffer, 5)`，再把 PA15 拉高。`Size=5` 的原因是 1 字节指令＋3 字节地址＋1 字节数据。\n\n[31:36—31:53](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=1896)还会对照手册中最长一页的波形：页最多 256 Byte，但本实验只发送第一个数据字节。应把“波形图允许较长数据”和“当前代码实际只写一字节”区分清楚。\n\n## 33:57—34:25 · 再复制补齐第 4 步与第 6 步\n\n[33:57 作者回到两个重复步骤](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=2037)：把第 1 步写使能代码复制到第 4 步，把第 3 步等待循环复制到第 6 步。到这里，第 4、6 步的代码框架也已补入。\n\n所以在 33:00、34:00 某些正在编辑的画面里，这两处一度只有注释；不能因为停在那个时刻就把它当成最终缺少写使能或等待。结合口述看完复制过程，作者讲解的预期执行顺序为：\n\n```text\n写使能 → 擦除零地址所在扇区 → 等 BUSY=0\n写使能 → 在零地址编程 Byte → 再等 BUSY=0\n```\n\n## 34:25—38:53 · 填写 LoadByte：先发四字节，再收一字节\n\n[34:25 进入读取数据部分](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=2065)。作者回到手册 Read Data 项，指令码为 `0x03`，后面跟 24 位地址。前面把数据保存在零地址，这里也从零地址读。\n\n[36:34 讲程序的两阶段](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=2194)：第一阶段发送指令与地址，第二阶段才接收目标数据。关键数组内容和调用为：\n\n```c\nbuffer[0] = 0x03;\nbuffer[1] = 0x00;\nbuffer[2] = 0x00;\nbuffer[3] = 0x00;\nApp_SPI_MasterTransmitReceive(SPI1, buffer, buffer, 4);\nbuffer[0] = 0xff;\nApp_SPI_MasterTransmitReceive(SPI1, buffer, buffer, 1);\n```\n\n上述两次调用处在同一次 CS 选中内。`4` 是指令和地址的总长度；`1` 是本次要取回的数据长度。第一阶段收到的内容仍覆盖到数组，但它不是最终要返回的数据；第二阶段把 `buffer[0]` 先置为 `0xff`，再边发送边接收，接收完成后的 `buffer[0]` 才是读出的那个字节。\n\n[37:27—38:53 实际填写 `App_W25Q64_LoadByte`](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=2247)：函数内声明 `buffer`，PA15 拉低，完成两个阶段，PA15 拉高，再用下面这句返回读到的数据：\n\n```c\nreturn buffer[0];\n```\n\n**中间画面勘误：**36:00 的 PPT 标题和口述是 `0x03`，代码首项一度显示 `0x02`；37:00 的后续画面已经显示 `0x03`，并出现 `buffer[0] = 0xff`。这里按读取指令及后续画面解释，不能把页编程的 `0x02` 用作读取命令。PPT 的片选仍印为 PA12，实际口述与 Keil 使用 PA15。\n\n## 38:53—41:09 · 用原片的全局变量 a 观察读回值\n\n[38:53 开始测试](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=2333)。作者先调用保存函数写入 `0x12`，再调用读取函数，把返回值交给全局变量 `a`：\n\n```c\nuint8_t a = 0;\n```\n\n`main` 中在 `App_SPI1_Init()` 之后执行：\n\n```c\nApp_W25Q64_SaveByte(0x12);\na = App_W25Q64_LoadByte();\n```\n\n[39:43](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=2383)作者解释选用全局变量是为了在 Keil 调试时方便观察这个值，避免例子里未使用的局部变量影响观察。\n\n[40:28 起](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=2428)编译并进入调试，依次执行保存和读取。[41:00](https://www.bilibili.com/video/BV11X4y1j7si/?p=31&t=2460)画面显示 `a=0x12`，与写入值一致。这就是本节演示的验收结果：本次调试的单字节保存与读取相符。\n\n## 41:09—片尾 · 本节完成到哪里\n\n作者回顾块、扇区、页的层级，以及保存和读取这两个函数，并说明整个实验完成了一半，下节继续。本节的操作终点是读回 `0x12`；后续的应用跟着 P32 继续学。\n\n完整函数应对照作者的工程与视频录入过程使用；本笔记按段摘出真实语句，解释各步的字节、片选和返回值，没有把未取得的原工程包装成已验证的完整源码。",
      "learningNotesOrigin": "依据本节全音轨的自动识别文本及原画面，按视频顺序解释原接口和代码；不等于逐字人工听写或取得原工程。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 2511.1466875,
        "asrSegments": 1043,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "99a80e434bc5ff2740f1100e41fe6f66a01cefbd366241e5eb8c33ffae2abf16",
        "reviewedAt": "2026-10-28"
      }
    },
    {
      "page": 32,
      "phase": "spi",
      "title": "5.8 [SPI] W25Q64 实验（下）",
      "duration": 959,
      "summary": "在上节SPITest工程中加入PA0按钮和PC13板载LED，单击翻转后用SaveByte保存01/00，上电时LoadByte读取并按原if/else恢复，最后演示断电上电测试。",
      "notes": "本节先演示按键切灯与断电恢复，再依次实现LED初始化、按钮初始化、单击回调、保存和上电读取。实际IDE使用button_clicked_cb、My_Button_Proc和App_OnBoardLED_Init；13:14可见两个保存分支，14:55可见byte==0/else恢复。完整ASR376段已阅读，并对照原尺寸代码及实物画面。",
      "points": [
        "PC13开漏输出与低电平点亮，App_OnBoardLED_Init初始化。",
        "Button_TypeDef对象、零初始化配置和My_Button_Init；while持续调用My_Button_Proc。",
        "button_clicked_cb以clicks==1识别单击，读取输出状态再翻转PC13。",
        "点亮后SaveByte(0x01)，熄灭后SaveByte(0x00)。",
        "三项初始化之后、while之前读取byte；等于0写SET灭，else写RESET亮。",
        "分别演示亮、灭状态在断电上电后的恢复。"
      ],
      "cid": 26054953613,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 157,
            "observation": "PC13 LED接3.3V和串联电阻的原理图。",
            "frameSha256": "d78021e598572d8d0d54096b1c986a8d5d0bfef89b7e9886f8c37402c725bfb1"
          },
          {
            "seconds": 270,
            "observation": "App_OnBoardLED_Init配置GPIOC时钟、PC13开漏、2MHz及GPIO_Init。",
            "frameSha256": "519ef8b7cf9108b5e1343aef060e881faf0d66f69d9536d956733b48bcec42bd"
          },
          {
            "seconds": 300,
            "observation": "已接Flash的面包板图中增加按钮接地与PA0。",
            "frameSha256": "2dcc5ccf6bfe52b6ec2bb3a465044f113e0be743f6c7f84e3ad652a4a84de148"
          },
          {
            "seconds": 360,
            "observation": "PPT使用Button_TypeDef、My_Button_Init、My_Button_Proc与零初始化结构体。",
            "frameSha256": "d2fcff51673db5e6c3ca68107b99afa21662194c749a60d1fa978f80533cbe58"
          },
          {
            "seconds": 380,
            "observation": "按钮PPT初始化与主循环进程调用。",
            "frameSha256": "2cf936bc81e9f2c0e76b6c0abe39d98507a2427f274783263fc299a8b91f3568"
          },
          {
            "seconds": 505,
            "observation": "IDE App_Button_Init为GPIOA/Pin0，while暂为空，处于补进程前。",
            "frameSha256": "3c6642ea5ec9080e616bb5dda5969af6b5fffd1714eaaa549007e29763d3e3ab"
          },
          {
            "seconds": 650,
            "observation": "IDE注册Button_InitStruct.button_clicked_cb = button_clicked_cb。",
            "frameSha256": "28182f71cf3f1ce44d7bdb8d04cf236b2380d28943798e785ccbfa2f761bd9c2"
          },
          {
            "seconds": 660,
            "observation": "实际IDE回调注册和初始化调用，代码烧录输出。",
            "frameSha256": "bd14e0ccdc00f9690a43bd05bbc5412d42aa953417b545dd7ca4759a261b0ba1"
          },
          {
            "seconds": 720,
            "observation": "PPT单击分支点亮后SaveByte(0x01)，熄灭后SaveByte(0x00)。",
            "frameSha256": "800ec54bed7a376de4b67675630d275ec37cc71f3f6520acf0556f8462da25ce"
          },
          {
            "seconds": 790,
            "observation": "实际IDE仅第一分支刚加SaveByte(0x01)，第二分支仍在编写。",
            "frameSha256": "4eb4aea971e4d35d6c02c60eb9757d8f98549e1dbdd36f6919a3fdc433e35ec6"
          },
          {
            "seconds": 794,
            "observation": "实际IDE两个分支均已出现01/00保存调用，外层clicks==1。",
            "frameSha256": "980b46d07c650d9014393b77e04fc75ff171bb808e7468addd79032e7782cbcf"
          },
          {
            "seconds": 895,
            "observation": "main三次初始化后LoadByte到byte，if0写SET，否则RESET。",
            "frameSha256": "eb5096d2d5d02317140b8f51bc0eca928dff64889d00cd4ee43b8e3bc581b257"
          },
          {
            "seconds": 920,
            "observation": "实物恢复测试，板载LED与供电指示状态。",
            "frameSha256": "56941976615bf99f977cf9d46ddc75b714143dc4f6477812da3a5d461d90cf32"
          },
          {
            "seconds": 932,
            "observation": "实物断电阶段供电灯熄灭。",
            "frameSha256": "1dd5488ae95dec720dab7b6d089ee33c7b3439b9afc646f3eb43bab84a0ece41"
          },
          {
            "seconds": 935,
            "observation": "重新供电后板载LED点亮。",
            "frameSha256": "7b8b44abce5bbe54b527053ad2ec0ec8006ebfbd8d5d9cfe29ffed5541d946db"
          }
        ]
      },
      "learningNotes": "## 00:00—02:30 · 按钮切换，并在重新上电后恢复状态\n\n[观看本节实验现象](https://www.bilibili.com/video/BV11X4y1j7si/?p=32&t=28)\n\n本节接着上节的 SPITest 工程做应用。先按一次按钮切换板载 LED，再让 W25Q64 保存切换后的状态：亮时保存0x01，灭时保存0x00。重新上电时，单片机程序从头执行，先读取这个字节，再把灯设置为对应状态。\n\n开头先演示效果：按钮使灯亮灭切换；保持亮时断电、上电，灯恢复亮；改成灭后重复，灯恢复灭。随后按五部分实现：初始化板载LED、初始化按钮、单击切换、保存状态、启动恢复。理解这条顺序，后面的函数就各有位置。\n\n## 02:30—04:40 · 用 App_OnBoardLED_Init 初始化 PC13\n\n[观看LED电路与初始化](https://www.bilibili.com/video/BV11X4y1j7si/?p=32&t=151)\n\n原理图中，3.3V经LED与串联电阻接到PC13；PC13拉低时灯亮，写高时灯灭。讲者沿用开漏接法，选择输出开漏模式和2MHz输出速度档位。\n\n打开上期工程后，先删除main里保存0x12、读取到a的测试语句及全局a，保留原SPI与Flash函数。新增 App_OnBoardLED_Init。04:30的IDE关键行如下：\n\n~~~c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOC, ENABLE);\nGPIO_InitTypeDef GPIO_InitStruct;\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_13;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_Out_OD;\nGPIO_InitStruct.GPIO_Speed = GPIO_Speed_2MHz;\nGPIO_Init(GPIOC, &GPIO_InitStruct);\n~~~\n\nGPIOC时钟使能后，结构体选PC13、开漏输出、2MHz，最后由GPIO_Init应用配置。main中在 App_SPI1_Init 之后调用 App_OnBoardLED_Init，使板载灯具备后续输出控制条件。\n\n## 04:40—08:32 · PA0按钮对象与 My_Button_Init\n\n[观看按钮接线](https://www.bilibili.com/video/BV11X4y1j7si/?p=32&t=294) · [观看按钮初始化代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=32&t=340)\n\n沿用上节已接好的Flash模块，再增加一枚按钮：一端接地，另一端接PA0。视频特别指出面包板上按钮的放置方向，照图检查引脚朝向后再接线。\n\n这里调用之前封装的按钮库。引用button.h，以Button_TypeDef定义button对象，再把初始化放进 App_Button_Init：\n\n~~~c\nButton_TypeDef button;\n\nvoid App_Button_Init(void)\n{\n    Button_InitTypeDef Button_InitStruct = {0};\n    Button_InitStruct.GPIOx = GPIOA;\n    Button_InitStruct.GPIO_Pin = GPIO_Pin_0;\n    My_Button_Init(&button, &Button_InitStruct);\n}\n~~~\n\n结构体先以{0}初始化。此阶段先填GPIOx和GPIO_Pin，确定按钮来自PA0；时间参数和回调在这一阶段没有逐一重新配置。My_Button_Init的第一个参数是按钮对象的地址，第二个参数是配置结构体的地址，作用是用这份配置初始化button。\n\n之后在main调用 App_Button_Init。初始化只建立对象，按钮状态还需要进程函数不断更新，下一部分会补上它。\n\n## 08:32—11:23 · 单击回调翻转LED，补上按钮进程\n\n[观看单击处理](https://www.bilibili.com/video/BV11X4y1j7si/?p=32&t=512) · [观看回调注册](https://www.bilibili.com/video/BV11X4y1j7si/?p=32&t=650)\n\n讲者进入第三部分时指出，刚才遗漏了while中的按钮进程，先补入：\n\n~~~c\nwhile (1)\n{\n    My_Button_Proc(&button);\n}\n~~~\n\n按钮库在进程调用中判断动作，满足条件后调用应用提供的回调。IDE中的函数名是 button_clicked_cb，参数clicks表示点击次数；本节只在clicks==1时处理单击。\n\n最初的回调只切换PC13。它读取上次输出值：若为Bit_SET，即灯灭，就写Bit_RESET点亮；否则写Bit_SET熄灭。重点是读输出状态，而不是直接把按键电平复制给LED。\n\n~~~c\nvoid button_clicked_cb(uint8_t clicks)\n{\n    if (clicks == 1)\n    {\n        if (GPIO_ReadOutputDataBit(GPIOC, GPIO_Pin_13) == Bit_SET)\n        {\n            GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_RESET);\n        }\n        else\n        {\n            GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET);\n        }\n    }\n}\n~~~\n\n随后在 App_Button_Init 中加入回调成员：\n\n~~~c\nButton_InitStruct.button_clicked_cb = button_clicked_cb;\n~~~\n\n左边是库配置结构体里的回调成员，右边是刚实现的函数，赋值后再调用My_Button_Init。PPT中曾把应用回调简称为button_click_cb；实际IDE统一用button_clicked_cb。本段编译、下载后演示单击能不断切换亮灭，先验证按钮与LED这条链路。\n\n## 11:23—13:15 · 在同一回调里保存切换后的状态\n\n[观看保存状态讲解](https://www.bilibili.com/video/BV11X4y1j7si/?p=32&t=683) · [观看13:14实际录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=32&t=794)\n\n上节已经有 App_W25Q64_SaveByte 和 App_W25Q64_LoadByte。本节直接调用保存函数，不重新实现Flash底层。\n\n在单击回调的两个分支中，先改变引脚，再保存新状态。13:14的IDE中，这两个分支为：\n\n~~~c\nif (GPIO_ReadOutputDataBit(GPIOC, GPIO_Pin_13) == Bit_SET)\n{\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_RESET);\n    App_W25Q64_SaveByte(0x01);\n}\nelse\n{\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET);\n    App_W25Q64_SaveByte(0x00);\n}\n~~~\n\n这段仍位于clicks==1内部。写低把灯点亮，因此随后存0x01；写高把灯熄灭，因此存0x00。Flash中的0和1描述灯的逻辑状态，与PC13引脚电平恰好相反。保存调用跟随一次单击发生，并没有放进while每一轮反复调用。\n\n原SaveByte返回void，所以此处直接调用；这一段没有把它改成带成功/失败返回值的新接口。13:00和13:10画面处在逐行录入过程，13:14已经能同时看清两个保存调用。\n\n## 13:15—15:03 · 初始化后、while前读取并恢复\n\n[观看上电恢复思路](https://www.bilibili.com/video/BV11X4y1j7si/?p=32&t=801) · [观看14:55恢复代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=32&t=895)\n\n断电后重新上电，main会重新执行。视频把读取与恢复放在三个初始化函数之后、while之前，先准备SPI、LED和按钮，再读出此前保存的字节：\n\n~~~c\nApp_SPI1_Init();\nApp_OnBoardLED_Init();\nApp_Button_Init();\n\nuint8_t byte = App_W25Q64_LoadByte();\nif (byte == 0)\n{\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET);\n}\nelse\n{\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_RESET);\n}\n~~~\n\nbyte等于0，恢复为灭灯，所以写Bit_SET；else分支恢复亮灯，写Bit_RESET。原代码判断的是“等于0或否则”，因此任何非零值都会走亮灯分支；这里按画面保留该判断。\n\n这次读取只在进入while之前执行一次。以后按钮进程继续运行，单击改变灯并保存新值；下次上电又通过同一位置读回来。\n\n## 15:03—15:58 · 分别验证灭灯、亮灯的断电恢复\n\n[观看最后实物测试](https://www.bilibili.com/video/BV11X4y1j7si/?p=32&t=903)\n\n编译下载后，先复位并观察当前灯状态，再单击使它熄灭，断电、上电检查仍灭。接着再次单击点亮，重复断电上电。15:32画面可见供电指示熄灭，15:35又可见重新亮起的LED，与这一阶段的操作讲解相互对应。\n\n本节最终把前两节能力串起来：按钮库通过进程与回调产生单击行为，GPIO改变PC13输出，SaveByte存0x00或0x01，启动时由LoadByte取回并恢复。按这个顺序回看各调用，可以明确区分“运行中保存新状态”和“启动时恢复旧状态”。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 958.6986875,
        "asrSegments": 376,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "9aeee3fb2022499bad1b0f8834f5b95b3c994ab0c3c183108b66b0657cf7c8fd",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 33,
      "phase": "int",
      "title": "6.1 [中断] 中断的概念",
      "duration": 919,
      "summary": "依三个生活类比引出中断，再沿串口控制闪灯例子，对比延时后的轮询与RXNE中断接收。",
      "notes": "正文按生活例子、程序框架、任务拆分、轮询问题、速率计算、中断组织顺序讲解。原函数省略参数明确标为课件占位；USART接收溢出另据ST手册纠正。",
      "points": [
        "中断示意包含暂停、处理、返回三个动作",
        "区分main的常规循环与预先写好的IRQHandler",
        "原任务字符0/1/2分别控制慢、正常、快闪",
        "115200的8N1每字节约0.087ms，远短于200ms查询间隔",
        "五字节动画不能当硬件队列，实际溢出需按ORE规则理解",
        "本节仅课件框架，串口初始化和完整指令判断尚未给出"
      ],
      "cid": 26054953556,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 120,
            "observation": "阅读拍蚊子、跑步系鞋带、游戏取快递三图。",
            "frameSha256": "8e836808ef9018303a036ec64a03d87183ca3bb34b7212cc4cea459eb3a5788e"
          },
          {
            "seconds": 300,
            "observation": "main的while常规程序与xxx_IRQHandler占位函数。",
            "frameSha256": "d97c2efeb7ba08caf71df6c9ab4310c4c25ecc4e199eecaf2fc9413ac26be896"
          },
          {
            "seconds": 420,
            "observation": "闪灯代码写Bit_RESET/SET与Delay，串口接收代码有省略参数。",
            "frameSha256": "eb960aaaab5cc2d8b48bda9d086dee4c43df9d6c87c510fe7ec2f20ba7d6383f"
          },
          {
            "seconds": 540,
            "observation": "RXNE查询、USART_ReceiveData、uint8_t byte。",
            "frameSha256": "06ddf2601cadaa3a8fceec221d774eb42684bedc10afa52cc89e8eada592651f"
          },
          {
            "seconds": 660,
            "observation": "五字节动画，字节1在接收数据寄存器，字节2在移位寄存器。",
            "frameSha256": "bb79f3761d963a39ef918f90e503eeb187c944a4907772d268eef8c2ca2884ee"
          },
          {
            "seconds": 720,
            "observation": "顺序合并代码与200ms、11520字节率手写标记。",
            "frameSha256": "47e66b5d4b9fd0c8d7b82e10707c8a2248d744a5cc22fd88e8530215f7df03ac"
          },
          {
            "seconds": 840,
            "observation": "USART1_IRQHandler内uint8_t data=USART_ReceiveData(...)及中断时序。",
            "frameSha256": "cf76c18c4bde2ea8386a94043597b2c2c4f18fc24cdfc66b891704c06321aed9"
          }
        ]
      },
      "learningNotes": "## 00:00—01:14 · 中断这一章先回答“为什么要用”\n\n作者先讲概念，再用串口控制LED闪烁速度的例子比较轮询与中断。这里以课件和时序图说明程序组织方式，没有在本节完成串口中断的初始化、下载或实物测试。\n\n## 01:15—03:57 · 三个生活例子都有暂停、处理、返回\n\n原片依次举读书时拍蚊子、跑步时系鞋带、玩游戏时开门取快递。每张图的水平箭头是原来的工作，向上的箭头是突发事件，上方的小段是对事件的处理，随后回到原来的工作继续。\n\n[视频02:00：三幅原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=33&t=120)。三个例子共同强调的是返回后继续，而不是发生一次事件就从头重启整个任务。\n\n## 03:58—05:28 · 常规程序与中断响应函数分开放\n\n作者把main中while(1)反复执行的内容称为常规程序。事件到来后，处理器转去执行预先写好的中断响应函数，完成后恢复常规程序。课件先用xxx_IRQHandler表示这一类函数，IRQ Handler展开为Interrupt Request Handler。\n\n[视频05:00：两种程序的位置](https://www.bilibili.com/video/BV11X4y1j7si/?p=33&t=300)。xxx是概念占位，不是可以随便取的真实中断入口名；稍后的串口示意会使用USART1_IRQHandler。本节还未讲中断使能、优先级和向量表，不能把“事件一来就调用”理解成无需任何配置，也不能据此保证每个事件都会排队保存。\n\n## 05:29—07:19 · 原任务先拆成闪灯和接收两部分\n\n目标是电脑串口发送字符'0'、'1'、'2'，分别让板载LED慢闪、正常闪、快闪。作者先单看闪灯：GPIO_WriteBit写Bit_RESET点亮，Delay延迟，再写Bit_SET熄灭，再Delay。课件中的端口、引脚和延时参数均用省略号，尚未给出完整工程。\n\n此时主循环只是在亮灯段、灭灯段之间来回，不涉及中断。后面加入串口接收时，要解决的是如何在这两段执行期间及时拿走数据。[视频07:00：左右分开的两段示意](https://www.bilibili.com/video/BV11X4y1j7si/?p=33&t=420)。\n\n## 07:20—09:18 · RXNE先报告有数据，再读取\n\n接着回到USART框图：Rx进入的波形先逐位接收到移位寄存器，完整接收后进入接收数据通路，RXNE表示有尚未读取的数据。课件的轮询逻辑是先用USART_GetFlagStatus检查RXNE是否为SET，再用USART_ReceiveData读到uint8_t byte，随后依据byte调整闪灯速度。\n\n这里用RDR称接收数据寄存器的内部角色；在本课程STM32F1的程序可见寄存器里，读取入口是USART_DR，不是另外构造一个名叫RDR的寄存器成员。原图中的函数参数仍被省略，重点是“先判断、后读取”，还不是完整可编译代码。\n\n## 09:19—12:42 · 顺序拼接为什么来不及\n\n原片把两部分直接放进同一个while：亮灯及延时、灭灯及延时，最后才查RXNE读取。这意味着两次查询之间可能隔了整个闪灯周期。作者假设亮100ms、灭100ms，一轮约200ms；串口115200bit/s、1起始位+8数据位+1停止位，每字节10位，每秒可传11520字节，单字节约0.087ms，原片取约0.1ms。数据到达远快于主循环检查。\n\n[视频12:00：200ms与串口字节时间的比较](https://www.bilibili.com/video/BV11X4y1j7si/?p=33&t=720)。这才是例子要说明的接收不及时，不是说把任何两段程序放在同一主循环都必然失败。\n\n原片10:30—11:29用五字节动画说明覆盖，并口述最后剩字节1、字节5。**教材更正：不能把这个动画当作F103的“两字节队列”。** ST手册规定，RXNE尚未清除又收到新帧会产生ORE；原接收数据保留，溢出期间后续接收的数据会丢失。因此仅靠稍后的一次读取，并不能保证取到最后一个字节。[ST RM0008的USART接收溢出定义](https://www.st.com/resource/en/reference_manual/rm0008-stm32f103xx-advanced-armbased-32bit-mcus-stmicroelectronics.pdf)。\n\n## 12:43—14:41 · 用RXNE中断及时读取，主循环继续闪灯\n\n作者再回到框图右上的中断开关，选择RXNE这一来源。主循环保留闪灯代码，把接收与处理移到USART1_IRQHandler中。14:00原图的核心语句摘录如下，省略号为课件原有占位，不能直接编译：\n\n```c\nvoid USART1_IRQHandler(void){\n    uint8_t data = USART_ReceiveData(...);\n    // 对收到的数据进行处理\n    ...\n}\n```\n\n[视频14:00：中断响应插入闪灯过程](https://www.bilibili.com/video/BV11X4y1j7si/?p=33&t=840)。时序图中的数据箭头到来时，流程短暂离开亮灯或灭灯段，读走接收数据后返回。这让读取不必等待两个Delay全部结束；但实际效果仍取决于后续的中断配置和处理耗时，不代表加入中断就绝不会丢数据。\n\n## 14:42—15:17 · 本节停在概念与组织方式\n\n片尾回顾中断概念和串口控制闪灯例子。本节尚未给出'0'、'1'、'2'对应的具体延时变量与完整判断代码，也没有实测结果；下一节先讲优先级，再进入实际串口中断编程。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 918.8053125,
        "asrSegments": 343,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "5971363b7e50826b364760a8535922f871e895610061da284821895287512726",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 34,
      "phase": "int",
      "title": "6.2 [中断] 中断优先级",
      "duration": 1226,
      "summary": "按门诊类比、NVIC框图、四位分组、1011拆分、嵌套比较及综合原题，解释两类优先级并纠正同级先来后到说法。",
      "notes": "完整保留原四路比较与六路综合题的参数、判断步骤和时间顺序，同时依据ST PM0056修正课件的完全同级先来先到结论。无代码或实物调试。",
      "points": [
        "分组0至4将四个有效位按0/4至4/0分配",
        "1011五种拆分依次0/11、1/3、2/3、5/1、11/0",
        "数字越小越紧急，抢占字段决定能否嵌套",
        "子优先级选择同抢占级别的待处理请求，不能使同级抢占",
        "原片完全同级先来后到说法应按IRQ号仲裁规则更正",
        "综合题5嵌套2，4和6都先于3，二者先后缺IRQ号不能保证"
      ],
      "cid": 26163347874,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 120,
            "observation": "普通门诊排队与急诊打断两图。",
            "frameSha256": "b993ec0530d3f4e97bb9825951561def811a4cda848427697b9863e0791fc725"
          },
          {
            "seconds": 240,
            "observation": "外设、中断、NVIC、时序、向量表五部分。",
            "frameSha256": "e959a965047d931fe2c19a5beb2bcd0df926025ccf0fb8f9508a56a6efdf0528"
          },
          {
            "seconds": 480,
            "observation": "四个格子与分组0至4的分界。",
            "frameSha256": "3822ae28a1745064766e26cc55e0c066638e01798bec072e93918bde17e384a1"
          },
          {
            "seconds": 540,
            "observation": "1011按分组0计算为0、11。",
            "frameSha256": "d294ac508695bedb7c3d7267eacbc75c39568d030fec9f43ff88fbbb26ff357e"
          },
          {
            "seconds": 600,
            "observation": "分组3的101与1，结果5、1。",
            "frameSha256": "d0ba9f657d5b460cd22781d06924261cb630521a3943d8db548b9de812856c11"
          },
          {
            "seconds": 720,
            "observation": "分组2四组原数1001、1000、0011、1110。",
            "frameSha256": "72f72982cbbc3eecbb60f36fcbd609adf6cc25b0156a8a7e092a474e2daf3521"
          },
          {
            "seconds": 840,
            "observation": "四组已写为2/1、2/0、0/3、3/2，正比较嵌套。",
            "frameSha256": "277333376fb54d51fe86d620ce7132e2da86cd6f1402a584026aac62d9ec938d"
          },
          {
            "seconds": 960,
            "observation": "检票员类比，原文确写优先级相同先来后到，需纠正。",
            "frameSha256": "f4cecaa870d37207f6647f07950870f3e32acaa6b7a4cfdfb77e8571036aed60"
          },
          {
            "seconds": 1080,
            "observation": "综合题刚从常规程序进入中断1，参数2、3。",
            "frameSha256": "03381264db2f4a387229357ac90d8adea6b8a8936d95fae906a5fa54176f1a43"
          },
          {
            "seconds": 1140,
            "observation": "六个参数齐全，5嵌套2，3/4/6等待。",
            "frameSha256": "bc4c2e12a6a5d8ed66764aeeab3dd24b1b962d56048d3e29d49d821b2e12fbdc"
          },
          {
            "seconds": 1190,
            "observation": "最终原图4→6→3，4/6优先级同14，无真实IRQ号。",
            "frameSha256": "814c1670231feeaccf079664b390c2b1cba64855880a80b041e0e73815961c88"
          },
          {
            "seconds": 1200,
            "observation": "片尾五部分目录总结。",
            "frameSha256": "cb68aef2e52b37a459aee68079e6c92f3e76faff74cbaa0c54e307b366ca48e8"
          }
        ]
      },
      "learningNotes": "## 00:00—03:24 · 两个看病例子区分排队与打断\n\n作者先举普通门诊：正在给病人1看病时，病人2、赶火车的病人3到来，先看完1，再看较急的3，最后看2。第二个例子中，给病人4看病时来了急诊病人5，于是暂停4，先处理5，再回来继续4。\n\n[视频02:00：两张时序图](https://www.bilibili.com/video/BV11X4y1j7si/?p=34&t=120)。前者只改变后续顺序，后者会打断正在做的事。优先级就是用数字表达这种紧急程度，后面要分别用子优先级与抢占优先级理解它们。\n\n## 03:25—07:24 · 沿片上外设、NVIC、向量表读原图\n\n原图从左到右依次是片上外设、中断、NVIC、中断时序图、中断向量表。USART的RXNE、TXE等状态可以经各自使能开关汇合成该USART的全局中断；I²C画出事件与错误两路，SPI画一路，EXTI则列出独立或共享的多路中断。\n\nNVIC管理这些请求，判断当前响应谁；处理器再通过向量表找到相应中断入口。这里的向量表是入口对应关系，不是应用程序里自己写的一串if判断。[视频04:00：原中断结构图](https://www.bilibili.com/video/BV11X4y1j7si/?p=34&t=240)。本节着重优先级概念，还未调用NVIC配置函数。\n\n## 07:25—08:33 · 四个有效位怎样分成两个字段\n\n作者把每路优先级放大成四个格子，用一条可移动分界线划分抢占优先级和子优先级。课程所用F103实现四个优先级有效位；这里的分组0至4按标准外设库的称法理解：\n\n- 分组0：0位抢占、4位子优先级。\n- 分组1：1位抢占、3位子优先级。\n- 分组2：2位抢占、2位子优先级。\n- 分组3：3位抢占、1位子优先级。\n- 分组4：4位抢占、0位子优先级。\n\n[视频08:00：分界线的五个位置](https://www.bilibili.com/video/BV11X4y1j7si/?p=34&t=480)。分组改变的是这些有效位的解释方式，不是给每一个中断各自任意选择一套分界，也不是增加总有效位数。\n\n## 08:34—10:26 · 同一个1011的五种拆法\n\n原片始终向四格填1011，只移动分组分界。按“抢占、子优先级”写出结果：分组0为(0,11)，分组1为(1,3)，分组2为(2,3)，分组3为(5,1)，分组4为(11,0)。没有分到位的那一项在原例里记为0。\n\n例如分组2把10与11分开，二进制10是2、11是3；分组3把101与1分开，101是4+1=5。先画分界再换十进制，不能把整个1011永远当作某一个字段。[视频10:00：分组三的手写拆分](https://www.bilibili.com/video/BV11X4y1j7si/?p=34&t=600)。\n\n## 10:27—14:46 · 抢占优先级只看能否嵌套\n\n作者回到急诊例子，引出中断嵌套：正在执行一个响应函数时，被抢占优先级更高的新中断打断，处理完后再返回。这里数字越小，紧急程度越高。\n\n原练习用分组2，四路优先级依次为1001、1000、0011、1110，拆成(2,1)、(2,0)、(0,3)、(3,2)。以中断1正在执行为前提：中断2的抢占同为2，不能嵌套；中断3的抢占为0，高于2，可以嵌套；中断4的抢占为3，低于2，只能等待。\n\n[视频14:00：三个比较过程](https://www.bilibili.com/video/BV11X4y1j7si/?p=34&t=840)。注意中断2虽然子优先级0优于中断1的1，也不能靠这一项打断它；决定嵌套的是抢占字段。\n\n## 14:47—17:18 · 排队类比保留，但“先来先到”要更正\n\n原片用高铁检票比喻：乘客1正在检票时，2、3、4、5到达，发车时间依次8:00、7:55、7:50、7:55；讲者按1、4、3、5、2解释先处理当前任务，再按紧急程度安排等待者。这段类比是为说明不抢占时仍需选择待处理请求。\n\n[视频16:00：检票类比与原三条原则](https://www.bilibili.com/video/BV11X4y1j7si/?p=34&t=960)。原片说完全相同优先级按先来后到排队，**这不符合NVIC的实际仲裁规则**：多个已挂起请求先比抢占字段，再比子优先级；两项都相同时，IRQ号较小的先处理。当前正在执行的同级中断仍不会被同级请求抢占。这里应把生活类比与硬件规则分开，不能把挂起机制当作按到达时间保存的队列。依据[ST PM0056第2.3.5—2.3.6节](https://www.st.com/resource/en/programming_manual/cd00228163.pdf)。\n\n## 17:19—19:51 · 跟着原综合题逐步判断\n\n最后仍选分组2。原图给出中断1(2,3)、中断2(2,0)、中断3(3,3)、中断4(3,2)、中断5(1,0)、中断6(3,2)。\n\n1. 常规程序执行时中断1到来，进入1。\n2. 执行1时2到来，两者抢占都为2，因此先完成1，再处理2。\n3. 执行2时3、4、5、6陆续到来，5的抢占为1，可以打断2；3、4、6的抢占为3，只能挂起等待。\n4. 完成5后先返回2继续，随后处理等待的3、4、6。分组2下，3的组合值为15，4与6都是14，所以4和6优先于3。\n\n[视频19:00：六个原始参数](https://www.bilibili.com/video/BV11X4y1j7si/?p=34&t=1140)，[19:50：原片最终时序](https://www.bilibili.com/video/BV11X4y1j7si/?p=34&t=1190)。讲者画成4→6→3，并用先来后到解释4在6之前；按上面的硬件更正，图中没有给出4与6各自实际IRQ号，故只能确认“两者均先于3”，不能保证4一定先于6。最后这些挂起请求处理完，再返回常规程序。\n\n## 19:52—20:27 · 本节结束在优先级推演\n\n片尾总结四个有效位、两类优先级，以及嵌套和等待的区别。下一节会把分组、通道号与优先级写进串口中断初始化，本节不添加尚未出现的接线、库函数或实测结果。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1225.5146875,
        "asrSegments": 515,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "f176fceee0e5fa60033c0f6d0c9511e9cd971c6e61527ff89a99a59e9410c039",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "综合题中断4与6没有对应实际IRQ号，不能据图断言二者固定先后。"
        ]
      }
    },
    {
      "page": 35,
      "phase": "int",
      "title": "6.3 [中断] 串口中断编程实验",
      "duration": 2281,
      "summary": "按原视频完成 USART1 接收中断实验：主循环以 blinkInterval 闪烁 PC13，ASCII 字符 0/1/2 经 RXNE 中断把间隔改为 1000/200/50。",
      "notes": "已完整阅读本节 884 段 ASR，依据 IDE 与课件差异保留录入顺序：先接收和字符分支，后补外层 RXNE 判断；PPT 的 byte/独立 if 与 IDE 的 dataRcvd/else if 分开。原代码 main 仍使用 Delay，未替换为队列或非阻塞方案。",
      "points": [
        "PC13 开漏闪灯与 Watch 窗口修改 blinkInterval 的预验证",
        "USART1 默认 PA9/PA10 接线、115200 8N1 与 Hello world. 测试",
        "USART_ITConfig 使能 RXNE，分组 2 配置 USART1_IRQn 的 (0,0) 优先级",
        "从启动文件复制 USART1_IRQHandler，先查 RXNE 再读 dataRcvd",
        "原 if / else if 字符分支及 ASCII 发送 1、2 的实物演示"
      ],
      "cid": 26162955859,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 240,
            "observation": "App_OnBoardLED_Init 正录入 GPIO_Init；PC13、Out_OD、2MHz 已可见",
            "frameSha256": "475d62f4792a6845b1ace3b255a894088d48f14ba611f2fb69c49a63f82fd648"
          },
          {
            "seconds": 420,
            "observation": "全局 uint32_t blinkInterval=1000 与亮/延时/灭/延时主循环完整",
            "frameSha256": "e434a61940778fa03b96a49141635e9310c5a08698247123afd15be5ddb08fb2"
          },
          {
            "seconds": 480,
            "observation": "调试状态与板载 LED 实物",
            "frameSha256": "58679639daf0a9715038f0e58f41f6de51bf5891de4c313d4a02a3b73202355a"
          },
          {
            "seconds": 540,
            "observation": "USART1 默认 PA9/PA10 交叉连接 USB 转 TTL、共地接线图",
            "frameSha256": "5fa0b25afd4eb732a472ca8fd834fb5b47cdcc872740d8eb177e2b0b942b5ea6"
          },
          {
            "seconds": 720,
            "observation": "App_USART1_Init 的 PA9 初始化正在录入，速度宏暂未完成正确",
            "frameSha256": "a784ee3b18966f27f75184b94aaaa44b1c2c852ac53cf8f39141cf3804ec09c1"
          },
          {
            "seconds": 900,
            "observation": "PA10 IPU 与 USART 115200、None 流控、Tx|Rx 已录入",
            "frameSha256": "b607606eb3d153facd643cce5d5457fb59d6e8adaca94b2ee0be2235601021fd"
          },
          {
            "seconds": 960,
            "observation": "USART 参数 8b/1stop/无校验及 USART_Cmd 完成",
            "frameSha256": "6563895e383cbb4928c1800faeff0d62c304a6d089bd7849272706c7d57ca603"
          },
          {
            "seconds": 1062,
            "observation": "串口助手收到 Hello world.；IDE 保留测试 SendString 调用",
            "frameSha256": "574cfc8cfeef9eae451256ba887423595e28414cfc61456d45eb2cd40068b618"
          },
          {
            "seconds": 1080,
            "observation": "本节五步目录进入 RXNE 中断配置",
            "frameSha256": "eb67cb32119c0eeeadd2c146bbb9e7536b5167d665984929985af13ef907e744"
          },
          {
            "seconds": 1320,
            "observation": "USART_Cmd 后准备第三步中断配置",
            "frameSha256": "8dcda6f4c3a45042731ce42c74e02a2efd5cd5ae6c075b5ebc0cd0905dcd611f"
          },
          {
            "seconds": 1380,
            "observation": "NVIC 在 Cortex-M3 内核，与 APB 片上外设对照图",
            "frameSha256": "13f50c56e1663f86ded945664d26d157131d2875bceb6cfd72d618502f6cc862"
          },
          {
            "seconds": 1620,
            "observation": "五种优先级分组图，分组2是2位抢占2位子优先级",
            "frameSha256": "ebfe0757627b329643b67516f560240aa04cfbbc337d0d0642a8e7f7a70f6a7a"
          },
          {
            "seconds": 1643,
            "observation": "main 首行完整 NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2)",
            "frameSha256": "e27719e249945885c3fa0f6535d1bae700ed229da9f044a2c75184348df59456"
          },
          {
            "seconds": 1800,
            "observation": "USART_ITConfig(USART1,USART_IT_RXNE,ENABLE) 与 NVIC 结构体声明",
            "frameSha256": "9433f06452544393edc158d9c6e7e04b28d21f4e7a9792f5590e36e770ee5738"
          },
          {
            "seconds": 1920,
            "observation": "USART1_IRQn 及抢占/子优先级均0",
            "frameSha256": "9537146afdcfaa36457d5fc5401231b342a836eda435fde21bdec0ff04ba97ff"
          },
          {
            "seconds": 1962,
            "observation": "NVIC 四成员与 NVIC_Init 调用完整",
            "frameSha256": "49076465aa893f5fa6902150b11500351860cdbc4bbc161ff1c27474ddec6ac4"
          },
          {
            "seconds": 1980,
            "observation": "PPT ISR 使用 byte 和三个独立 if 的示意",
            "frameSha256": "9ea7d8627df64a4d02eaa7d75d296d9f2d4aea4b3eb17cc23a8c4205b8ca581e"
          },
          {
            "seconds": 2040,
            "observation": "startup_stm32f10x_md.s 中 USART1_IRQHandler 名称",
            "frameSha256": "3437b1b81c33fc6d8c3d69f825e5eb6977cef192c4e0fd16d0f83fdac441bad4"
          },
          {
            "seconds": 2100,
            "observation": "实际 IDE 使用 dataRcvd，首先录入字符0分支",
            "frameSha256": "9f9f28208876d31c8e82d690be64cc19a369e3c3b0555e2896272568a38cfdfe"
          },
          {
            "seconds": 2125,
            "observation": "PPT 回到共享中断来源和 RXNE 外层判断",
            "frameSha256": "3c3e3b0bf9f75aa857fd0fee5d20b014c20090f65657ded2b93e88e8717ceaca"
          },
          {
            "seconds": 2160,
            "observation": "课件 RXNE 条件与三字符示意",
            "frameSha256": "c313404c12cb50e79930c8f763f45731a9fc0ad83c536d57c220bdb0e558784d"
          },
          {
            "seconds": 2200,
            "observation": "最终 IDE 完整 ISR，RXNE 外层与 dataRcvd else if 链，1000/200/50",
            "frameSha256": "5f1143efd980eb7d8ec88474de631fae5328cb67676510329c1c48468ce1fdb3"
          },
          {
            "seconds": 2206,
            "observation": "main 分组2和编译0错误0警告",
            "frameSha256": "a41e0f175a9d4e947b40d068b7b9851e67095fb6083892ed5462802bc12d93f4"
          },
          {
            "seconds": 2220,
            "observation": "串口助手 ASCII 发送设置与开发板实物",
            "frameSha256": "cf3c7ed37bdcfce229991047eeb7dc5417e509f86d06e75d9e7e870c64126b2d"
          },
          {
            "seconds": 2241,
            "observation": "发送框字符1，开发板实物灯亮",
            "frameSha256": "3a8256018d6fa8dac35f6bc11b8282787c521cb78cf73856e4647089a1911d78"
          },
          {
            "seconds": 2246,
            "observation": "发送框字符2，开发板实物灯亮",
            "frameSha256": "e899cdb7ad37d5399f997a59c7df5dac526853d621817d10cc95c44c2bb92200"
          }
        ]
      },
      "learningNotes": "## 00:27—04:13 · 明确实验任务，先初始化板载 LED\n\n[视频 00:27](https://www.bilibili.com/video/BV11X4y1j7si/?p=35&t=27) 本节通过电脑发送字符控制 PC13 板载 LED 的闪烁速度：字符 `0` 对应慢闪，`1` 对应中速，`2` 对应快闪。视频按照“闪灯代码、串口初始化、RXNE 中断使能、NVIC 配置、中断响应函数”五步完成实验。\n\n新工程名为 `USART_IT_Test`。在 `main.c` 声明并实现 `App_OnBoardLED_Init(void)`：开启 GPIOC 的 APB2 时钟，把 `GPIO_Pin_13` 配置为 `GPIO_Mode_Out_OD`，速度 `GPIO_Speed_2MHz`，再调用 `GPIO_Init(GPIOC, &GPIO_InitStruct)`。这里的板载 LED 低电平亮、高电平灭。\n\n## 04:15—08:15 · 主循环闪灯，用变量控制两次延时\n\n[视频 04:15](https://www.bilibili.com/video/BV11X4y1j7si/?p=35&t=255) 将任务分开：常规程序负责闪灯，中断响应函数接收串口数据并改变闪灯间隔。在文件顶部录入全局变量 `uint32_t blinkInterval = 1000;`，引入 `delay.h`。07:00 原画面中的循环为：\n\n```c\nwhile(1)\n{\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_RESET); // 亮\n    Delay(blinkInterval); // 延迟\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET); // 灭\n    Delay(blinkInterval); // 延迟\n}\n```\n\n两个 `Delay` 都取 `blinkInterval`，所以它控制亮、灭各保持多久。老师编译后进入调试，打开 Watch 1，加入该变量，关闭十六进制显示。在运行中把数值由 1000 改为 200、再改为 60，观察 LED 越闪越快。这一步先验证变量确实能改变闪灯速度；最后串口命令的快闪值另设为 50。\n\n本站工程注：原声明没有 `volatile`，后面却在中断中异步修改该变量。独立复现时应明确这种共享访问，使用合适的 `volatile` 声明保证主程序重新读取；本页保留原声明，不把这项补充写成视频已经输入的内容。\n\n## 08:27—12:36 · USART1 默认引脚与接线\n\n[视频 08:27](https://www.bilibili.com/video/BV11X4y1j7si/?p=35&t=507) 使用 USART1，不做串口引脚重映射。PA9 是单片机 TX，接 USB 转 TTL 的 RXD；PA10 是单片机 RX，接转换器 TXD；两边 GND 相连。ST-Link 继续接调试接口。\n\n创建 `App_USART1_Init(void)`。先开启 GPIOA 时钟，PA9 配置为 `GPIO_Mode_AF_PP`、`GPIO_Speed_2MHz`；随后把结构体引脚改为 `GPIO_Pin_10`、模式改为 `GPIO_Mode_IPU`，再次 `GPIO_Init(GPIOA, &GPIO_InitStruct)`。PA10 为输入，不另写输出速度。12:00 的速度宏还处在录入中的错误状态，15:00 画面已是正确的 `GPIO_Speed_2MHz`。\n\n## 12:38—17:58 · 完成串口参数，先发送一行测试文本\n\n[视频 12:38](https://www.bilibili.com/video/BV11X4y1j7si/?p=35&t=758) 开启 `RCC_APB2Periph_USART1` 时钟，填好 `USART_InitTypeDef USART_InitStruct`：波特率 115200、硬件流控 `USART_HardwareFlowControl_None`、方向 `USART_Mode_Tx | USART_Mode_Rx`、校验 `USART_Parity_No`、停止位 `USART_StopBits_1`、字长 `USART_WordLength_8b`。随后依次执行：\n\n```c\nUSART_Init(USART1, &USART_InitStruct);\nUSART_Cmd(USART1, ENABLE);\n```\n\n本实验需要接收命令，因此保留配置中的 `USART_Mode_Rx`。老师临时引入 `usart.h`，在两个初始化调用之后用 `My_USART_SendString` 发送 `\"Hello world. \\r\\n\"`。串口助手也设为 115200、8 位数据、1 位停止、无校验、无流控，打开串口并选择 ASCII 接收。17:42 原画面可见接收到 `Hello world.`，说明发送测试通过。随后删除这条测试调用及本次不再使用的 `usart.h` 引用，继续实现接收中断。\n\n## 18:00—22:27 · 让 RXNE 成为 USART1 中断源\n\n[视频 18:00](https://www.bilibili.com/video/BV11X4y1j7si/?p=35&t=1080) 回看 USART 框图：多个状态经过各自的使能开关，再合到 USART 的全局中断请求。接收数据就绪标志 RXNE 是本实验需要的来源。在 `App_USART1_Init` 中，继 `USART_Cmd` 之后录入：\n\n```c\nUSART_ITConfig(USART1, USART_IT_RXNE, ENABLE);\n```\n\n第一个参数指定 USART1，第二个选择 RXNE 中断，第三个使能该来源。这里使能的是 USART 内部的接收中断请求；还要配置 NVIC 对应通道，才能接通后续处理路径。\n\n## 22:28—32:42 · 先选优先级分组，再初始化 NVIC 通道\n\n[视频 22:28](https://www.bilibili.com/video/BV11X4y1j7si/?p=35&t=1348) 课程区分片上外设和内核中的 NVIC，再介绍优先级分组、各中断优先级以及使能通道。本例选分组 2，两位抢占优先级、两位子优先级，两个取值范围均为 0～3。在 `main` 的开头、两个应用初始化函数之前加入：\n\n```c\nNVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);\n```\n\n在 `App_USART1_Init` 末尾声明 `NVIC_InitTypeDef NVIC_InitStruct`。老师打开 `stm32f10x.h`，从 `IRQn` 枚举中找到 `USART1_IRQn`，而不是凭印象填写中断编号。32:42 画面的配置为：\n\n```c\nNVIC_InitStruct.NVIC_IRQChannel = USART1_IRQn;\nNVIC_InitStruct.NVIC_IRQChannelPreemptionPriority = 0;\nNVIC_InitStruct.NVIC_IRQChannelSubPriority = 0;\nNVIC_InitStruct.NVIC_IRQChannelCmd = ENABLE;\nNVIC_Init(&NVIC_InitStruct);\n```\n\n本例只有一路应用中断，选定优先级 `(0,0)`，再通过 `ENABLE` 打开 USART1 的 NVIC 通道。此时串口配置顺序是 GPIO、USART 参数及总开关、RXNE 来源、NVIC 通道。\n\n## 32:43—35:23 · 从启动文件复制 ISR 名称，再按收到的字符改间隔\n\n[视频 32:43](https://www.bilibili.com/video/BV11X4y1j7si/?p=35&t=1963) 打开 `startup_stm32f10x_md.s`，找到并复制 `USART1_IRQHandler`，在 `main.c` 定义同名的无参数、无返回值函数。启动文件中的名字决定哪个函数响应这一路中断，不能把它换成自定的普通函数名。\n\n老师先录入 `uint8_t dataRcvd = USART_ReceiveData(USART1);`，然后建立 `if / else if` 分支：收到字符 `'0'` 时令 `blinkInterval = 1000`，收到 `'1'` 时设为 200，收到 `'2'` 时设为 50。这里比较的是带单引号的字符，不是数值字节 0、1、2。课件使用变量 `byte` 和三个独立 `if` 作示意，实际 IDE 使用 `dataRcvd` 和 `else if` 链。\n\n## 35:23—36:48 · 为 ISR 补 RXNE 判断，保留实际录入结构\n\n[视频 35:23](https://www.bilibili.com/video/BV11X4y1j7si/?p=35&t=2123) 因为 USART1 多个来源共用一个中断入口，老师回头在外层补 RXNE 判断，并把刚写好的接收、判断代码剪切进去。36:40 原画面中的函数为：\n\n```c\nvoid USART1_IRQHandler(void)\n{\n    if(USART_GetFlagStatus(USART1, USART_FLAG_RXNE) == SET)\n    {\n        uint8_t dataRcvd = USART_ReceiveData(USART1);\n\n        if(dataRcvd == '0')\n        {\n            blinkInterval = 1000;\n        }\n        else if(dataRcvd == '1')\n        {\n            blinkInterval = 200;\n        }\n        else if(dataRcvd == '2')\n        {\n            blinkInterval = 50;\n        }\n    }\n}\n```\n\n先查 RXNE，再读取接收数据寄存器，随后按内容更新间隔。主循环仍负责写 PC13 和延时，中断里没有另起一个闪灯循环。对于未匹配三个字符的数据，这段分支不改 `blinkInterval`。36:46 编译输出为 0 个错误、0 个警告。\n\n## 36:50—38:00 · ASCII 发送命令，观察三个闪灯档位\n\n[视频 36:50](https://www.bilibili.com/video/BV11X4y1j7si/?p=35&t=2210) 下载代码，保持串口打开，发送方式选择 ASCII。复位后变量初值是 1000，因此先慢闪。随后发送字符 `1`，闪烁变快；再发送 `2`，进入更快的档位。37:21 和 37:26 的原画面分别显示发送框中的 `1`、`2`，ASR 对应这一连续演示。\n\n沿数据路径回看：电脑字符进入 PA10 → USART 接收置 RXNE → USART 的 RXNE 中断请求交给 NVIC → `USART1_IRQHandler` 读取并修改 `blinkInterval` → 主循环后续的 `Delay(blinkInterval)` 使用该间隔。这样把本节五步连成一个可以跟着原代码定位的实验。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 2280.7253125,
        "asrSegments": 884,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "4102957b852c44030cebfea353847a7886eb6c8db56876db16aa5dcabdd581b1",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "未取得作者完整工程及 delay 库实现，未据此推断优化设置下的共享变量行为；本页代码摘录保留画面实际声明。"
        ]
      }
    },
    {
      "page": 36,
      "phase": "int",
      "title": "7.1 [EXTI] 工作原理",
      "duration": 1030,
      "summary": "沿GPIO与铃铛类比、松开切灯应用、线号与端口复用，再读边沿检测与请求路径，完成PA0上升沿的原理选择。",
      "notes": "正文按四部分的实际顺序解释原图与按钮波形；明确区分16条GPIO线与共享NVIC通道，并按ST资料标注家族20线图的型号范围。",
      "points": [
        "GPIO读当前电平，EXTI检测选定边沿",
        "上拉按钮按下下降、松开上升，原目标是松开切灯",
        "previous/current轮询比较与硬件边沿检测是不同办法",
        "线号跟随引脚编号，同编号跨端口只能选一个来源",
        "原20线图属家族范围，C8不具备以太网唤醒线19",
        "本节PA0仅原理举例，无代码；下一节实际采用PA5和PA6"
      ],
      "cid": 26163347929,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 180,
            "observation": "GPIO读0/1、EXTI出中断的两支路径和铃铛类比。",
            "frameSha256": "ee465f4f1cb265d26b6abba586081ca0f375e86ce980cbd58f4c5c342032e99e"
          },
          {
            "seconds": 240,
            "observation": "手写上升沿低到高。",
            "frameSha256": "ad8126e86d5515eebf3ce4fe18a6431788954101bab3e847411fd968db863b6c"
          },
          {
            "seconds": 360,
            "observation": "previous/current原拼写，松开高按下低，上拉图。",
            "frameSha256": "b519c038ab5a21c02790c260177e768b0b1b7e6cdc5372ee0cb255c14bf2c00f"
          },
          {
            "seconds": 420,
            "observation": "轮询与EXTI并列，正说明松开上升沿。",
            "frameSha256": "0a1cd6fb975de8fb5abb0363a719c2923ffcc8e00ee08a3f81f6bc1f90a93439"
          },
          {
            "seconds": 540,
            "observation": "16个铃铛及16+4家族图。",
            "frameSha256": "c44caf14c6607558931694ad808df78ef9864b0af7ce5ce759b17684f4bcfc1d"
          },
          {
            "seconds": 660,
            "observation": "复用器选择GPIOA/B/C/D与线号0。",
            "frameSha256": "6347d1f7eda57b581a2eafee22da9517f4511069e0d61189689ee70b6384f4a7"
          },
          {
            "seconds": 780,
            "observation": "总图0至19含Ethernet、共享EXTI9_5及15_10，放大单线。",
            "frameSha256": "0cc4d3ca9476646ba7a4937d00c3b632967b0ca82e5a9208cb12624609161ce2"
          },
          {
            "seconds": 840,
            "observation": "边沿检测输出选择上升沿路径，软件触发和事件支路可见。",
            "frameSha256": "87eb6e01ba6bed0275a96b1b43be6c09ce77d4992a081ff7b3923e45bfb5f5dd"
          },
          {
            "seconds": 960,
            "observation": "再次回到按钮示意准备假设PA0。",
            "frameSha256": "9e9712121df695c53330ed7b1db72e1c3c4b0642368093bb1b2b8092b2678c4f"
          },
          {
            "seconds": 1000,
            "observation": "最终PA0、线0、GPIOA、上升沿、接通中断的红线。",
            "frameSha256": "577a824fdfe5b4d8df47f8c30626b7bdcedf775e8c9a77190ce247a7d001a307"
          },
          {
            "seconds": 1020,
            "observation": "片尾四部分目录。",
            "frameSha256": "5098b9d82dd085d4ade82dd2b4e26232831fd2a8f19e016cb8e6f9a8e6f6155f"
          }
        ]
      },
      "learningNotes": "## 00:00—01:40 · EXTI的全称与本节四部分\n\nEXTI是External Interrupt/Event Controller，外部中断/事件控制器。作者按模块简介、按钮应用、线的概念、线的内部结构四部分展开。全片通过框图、波形和类比说明原理，没有录入EXTI初始化函数或下载实验。\n\n## 01:41—04:38 · GPIO读电平，EXTI捕捉选定边沿\n\n作者继续用手掌代表GPIO、手指代表IO，再在手指上系铃铛来比喻EXTI：手指一动铃铛就响。原图让同一个输入信号分别进入GPIO和EXTI两条路径。GPIO数字输入回答现在是0还是1；EXTI关注发生了哪一种电平变化。\n\n低变高是上升沿，高变低是下降沿。配置好边沿和中断通路后，捕捉到相应变化就可以请求中断，处理代码放进对应响应函数。[视频03:00：两条路径的原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=36&t=180)。持续保持高电平并不是反复产生上升沿，要区分电平状态与变化动作。\n\n## 04:39—07:56 · 松手才切灯：从previous/current转向边沿\n\n原任务是按下按钮时灯不切换，松开瞬间才翻转。按钮一端接地，另一端接上拉输入：松开为高，按下接地为低。因此按下对应下降沿，松开对应上升沿。\n\n作者先回顾轮询办法：循环读取current，把上一次值放在previous；两值不同时发生变化，previous=1、current=0是按下，previous=0、current=1是松开。06:00原图确实写的是previous和current，不采用识别文本中的错拼。\n\n加入EXTI后，选择上升沿触发，把翻转动作放进中断处理，便不必在主循环不断比较两次采样值。[视频07:00：轮询与边沿检测的对照](https://www.bilibili.com/video/BV11X4y1j7si/?p=36&t=420)。本节用理想按钮波形解释选择依据，并没有讲或实现按键消抖，不能把“捕捉边沿”当成已经消除了机械抖动。\n\n## 07:57—10:53 · 一条线包括输入选择、检测与请求输出\n\n接着把EXTI拆成一条条线。每条线左侧选择输入来源，中间捕捉边沿，右侧输出中断请求。作者用编号0至15的16个铃铛对应外部GPIO线，再列GPIOA、GPIOB各16个、GPIOC的PC13～15、GPIOD的PD0/PD1，说明封装中可用信号多于16条线，必须选择如何分配。\n\n[视频09:00：16个铃铛与端口图](https://www.bilibili.com/video/BV11X4y1j7si/?p=36&t=540)。EXTI线号由引脚组内编号决定，端口组由前面的复用器选择，不是给PA0随意分配一条空闲EXTI5线。原片统计的是这些信号名；部分信号可能用于晶振、调试等功能，不能据总数认定板上全部同时空闲。\n\n## 10:54—12:26 · 同编号跨端口只能选一个来源\n\n以线0为例，选GPIOA就接PA0，选GPIOB就接PB0，其他端口也按相同编号对应。作者特别提醒本课封装没有PC0，其他型号可能有；这只是复用关系的举例，不能为F103C8新增一个未引出的引脚。\n\n同一时刻，EXTI0的输入只能选其中一个端口的0号脚。选择PA0之后，不能让PB0同时作为EXTI0的另一个独立来源；它仍可承担其他合适的GPIO功能。[视频11:00：端口选择的讲解位置](https://www.bilibili.com/video/BV11X4y1j7si/?p=36&t=660)。\n\n### 本站型号校注：20线是家族图，不是C8的全部配置\n\n原片把总结构写成20=16+4，后四条标PVD、RTC、USB、Ethernet。本教材主控F103C8不具备图中的以太网唤醒线19；ST手册明确该线仅连接型器件可用。与外部GPIO有关的仍是线0～15。另要区分“线”与“NVIC通道”：原总图已把5～9、10～15分别合并到共享中断，16条GPIO线并不等于16个独立响应入口。参见[ST RM0008外部中断/事件GPIO映射说明](https://www.st.com/resource/en/reference_manual/rm0008-stm32f101xx-stm32f102xx-stm32f103xx-advanced-arm-based-32-bit-mcus-stmicroelectronics.pdf)。\n\n## 12:27—14:31 · 深入单线：选端口，再选上升、下降或双边沿\n\n原片把一条线放大，从左向右读：端口选择复用器、边沿检测电路、边沿选择、请求通路。检测电路画出上升沿、下降沿两路，二者取或得到双边沿选择。选上升沿就只对低到高变化反应，选下降沿则相反，选双边沿时两种变化都可触发。\n\n[视频14:00：沿上升沿路径读图](https://www.bilibili.com/video/BV11X4y1j7si/?p=36&t=840)。这张图是帮助理解的整理示意，尚不是让程序逐块实现一个软件边沿检测器；实际配置函数留到下一节。\n\n## 14:32—15:15 · 软件触发与事件在此只作介绍\n\n原图还画有软件触发位：写1可发起软件请求，不必等待外部引脚出现边沿。右侧请求又分为中断和事件两路。作者说明本章主讲中断，事件暂不展开，软件触发也只简单指出位置。\n\n因此本节不补写未出现的软件触发测试或事件唤醒程序，也不能由这段概念说明推断任意屏蔽状态下处理器都会立即进入响应函数。\n\n## 15:16—17:06 · 回到PA0松开切灯，串起配置选择\n\n最后假设按钮接PA0。先按组内编号选EXTI线0，再把输入端口选为GPIOA；按钮松开是上升沿，所以选上升沿通路，并接通中断方向的开关。之后在对应中断中翻转灯的亮灭，才与“按下不变、松开切换”的目标相符。\n\n[视频16:40：最终选择路径](https://www.bilibili.com/video/BV11X4y1j7si/?p=36&t=1000)。这是PA0的原理假设例子；下一节实际双按钮实验采用PA5、PA6，不能在本节提前把这两个引脚当作已经配置完成。片尾回顾四部分后结束。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1029.312,
        "asrSegments": 372,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "de5e9e179e481b575ca84e744b2290c8ec712729ee0ed80e265c30b9bea85b8a",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 37,
      "phase": "int",
      "title": "7.2 [EXTI] 按钮实验",
      "duration": 1655,
      "summary": "按原片从双按钮接线开始，逐步写入PC13灯、PA5/PA6上拉输入、AFIO线分配、EXTI上升沿与共享NVIC通道，最后完成原中断函数并验证左右键控制灯。",
      "notes": "原实验为左键松开后亮灯、右键松开后灭灯。正文按接线、GPIO、AFIO、EXTI、NVIC、中断函数、编译下载的原顺序讲解。26:30的Keil最终画面显示线5写Bit_RESET、线6写Bit_SET，两个分支均调用EXTI_ClearFlag。另单独纠正原口述将清零结果混同为寄存器写零的表述。",
      "points": [
        "PC13开漏输出，PA5/PA6上拉输入，松开按钮产生上升沿",
        "GPIO_EXTILineConfig通过AFIO把PA5、PA6分配到EXTI5、EXTI6",
        "两条线均使用Interrupt、Rising、ENABLE，共享EXTI9_5_IRQn",
        "原处理函数使用两个独立if，分别GetFlagStatus、ClearFlag并控制PC13",
        "保留复制后修改Bit_SET与稍后补清标志的实际录入顺序"
      ],
      "cid": 26163743004,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 60,
            "observation": "原片五步骤目录：电路、分配线、线参数、NVIC、中断函数。",
            "frameSha256": "a1d60194c7955480a11b86d1a0ade8e66b46ad473596bb5548b4bf5f8811b8c7"
          },
          {
            "seconds": 120,
            "observation": "原电路图：PC13板载灯，两枚按钮PA5/PA6另一端接地。",
            "frameSha256": "888d2fd25b0d80c5878bc26f703bf085f93f18eff6c453f6bffb0883f272937a"
          },
          {
            "seconds": 360,
            "observation": "IDE：PC13 Out_OD、2MHz、GPIO_Init后Bit_SET；开始App_Button_Init。",
            "frameSha256": "6b9a9c5c72a1ebce1ccf0e6f77660c843d2549bfdbc3e3696aae5717e6b53bdc"
          },
          {
            "seconds": 420,
            "observation": "main调用App_OnBoardLED_Init、App_Button_Init，while1空。",
            "frameSha256": "aea2a3e8af09d27feb7bdb8fa1d08ca770b8b1753b8ab7475b5fc55128a3dfd7"
          },
          {
            "seconds": 496,
            "observation": "GPIO_EXTILineConfig原函数签名、GPIOA/PinSource5/6及AFIO时钟。",
            "frameSha256": "3430ca9559aa16a9c5ce30fdfa1b864056295c34e975f1f796956a7ad0ed53a9"
          },
          {
            "seconds": 827,
            "observation": "EXTI_InitTypeDef四成员与可选模式/触发边沿。",
            "frameSha256": "7bf899fe71469f6537f926137f3683e1eb1495e83cc8e1a45e75791b9a943b8c"
          },
          {
            "seconds": 900,
            "observation": "原片按钮松开/按下波形，以及线5/6均Rising的PPT代码。",
            "frameSha256": "d6414ade0e79d18fc798062aaaa80512f48643888ca78e28756f7a8ee509f367"
          },
          {
            "seconds": 960,
            "observation": "IDE显示PA6 IPU和AFIO时钟与线5/6映射；开始EXTI配置。",
            "frameSha256": "e2513c79c8ca724b78d2835e8713d9bb1af63c546e98d9b6df0dea2ef0faf3fe"
          },
          {
            "seconds": 1020,
            "observation": "EXTI线0-4独立、5-9共享、10-15共享的中断框图。",
            "frameSha256": "76cec2c18ce0fabc3b0404a405d46e38b66ae6500ef0ed7541384ed1dda7f82c"
          },
          {
            "seconds": 1158,
            "observation": "IDE：线5/6Interrupt、Rising、ENABLE初始化。",
            "frameSha256": "12d2e2a3cbd7b1ba3922114c81a1024a32dd3b7e3c7300bdaa26441b66af8ede"
          },
          {
            "seconds": 1200,
            "observation": "stm32f10x.h中MD枚举显示EXTI9_5_IRQn=23。",
            "frameSha256": "84feab27797aa1092b9f1f77c4429365dcf8fb307917c98a6738951dd1d8a8a4"
          },
          {
            "seconds": 1320,
            "observation": "IDE NVIC EXTI9_5_IRQn、抢占/子优先级0、ENABLE，输入原处理函数名。",
            "frameSha256": "60147ef94234c2e9a531b24324b82c75e1eb362c85d63151b366049612e9abc1"
          },
          {
            "seconds": 1380,
            "observation": "原PPT EXTI_GetFlagStatus，线5亮灯Bit_RESET、线6灭灯Bit_SET。",
            "frameSha256": "40a80c5ad13e630d5833a33aab61387521721d7c41c1d77c52859aab8fad3bad"
          },
          {
            "seconds": 1500,
            "observation": "IDE复制中间状态线6仍Bit_RESET，不能当最终代码。",
            "frameSha256": "20f3dd584789260bf9bf0979e8da1508baf358cee46cdd073cc111b8f6f121d3"
          },
          {
            "seconds": 1530,
            "observation": "PPT已补两个EXTI_ClearFlag，线6正确Bit_SET。",
            "frameSha256": "f2b5a36a66d45527aa44c9d64a4b4317cfdc1aed385e8b3d574161db75f121a1"
          },
          {
            "seconds": 1575,
            "observation": "IDE已将线6改Bit_SET，正在向线5分支录入ClearFlag。",
            "frameSha256": "36da910ec44b0556f771a0940bbdcd7fe1c37da54666fa8867ddf799d508f4d5"
          },
          {
            "seconds": 1590,
            "observation": "IDE完整处理函数两个独立if、两次ClearFlag、线5RESET与线6SET，开始编译。",
            "frameSha256": "9a55b7a2eeb4d70c3e20ece8627e3908f684b8c93f0168bca2491eb096fbe985"
          },
          {
            "seconds": 1605,
            "observation": "实物操作两枚按钮，板载灯亮的画面。",
            "frameSha256": "c81e26564fc57dea8e589ff9d3434ec2e5f57532c4137a822b43ef080ed6b937"
          },
          {
            "seconds": 1625,
            "observation": "片尾结束后重新出现GPIO_EXTILineConfig分配示意。",
            "frameSha256": "1fa7c72d97d46e880ab440698d3b63cd2606088f121400d821259dca0068cdb4"
          }
        ]
      },
      "learningNotes": "## 00:33—01:31 · 实验目标与五个步骤\n\n[从实验演示开始](https://www.bilibili.com/video/BV11X4y1j7si/?p=37&t=33)。两枚按钮分别控制板载 LED：左键按下再松开后亮灯，右键按下再松开后灭灯。视频按“搭建电路与 GPIO 初始化 → 分配 EXTI 线 → 配置线参数 → 配置 NVIC → 编写中断响应函数”展开。\n\n这里的动作时刻要记准确：原片演示的是松开按钮时响应。后面选择上升沿，正好与按钮的上拉接法对应。\n\n## 01:33—03:21 · PC13 板载灯与 PA5、PA6 按钮\n\n[对照电路图](https://www.bilibili.com/video/BV11X4y1j7si/?p=37&t=120)：板载 LED 接 PC13，使用开漏输出控制；两枚外接按钮分别连接 PA5、PA6，另一端都接地。\n\nPA5、PA6 配置为输入上拉后，按钮松开时为高电平，按下时被接到地而变低，松开的一刻又从低变高。视频也特别提醒四脚按钮的方向，接线应按图确认，不能只看按钮外壳的位置。\n\n## 03:23—05:40 · 建立 DualButtonTest 并初始化 LED\n\n老师从模板工程建立 `DualButtonTest`，在 `main.c` 声明并实现两个原函数：\n\n```c\nvoid App_OnBoardLED_Init(void);\nvoid App_Button_Init(void);\n```\n\n[先写 LED 初始化](https://www.bilibili.com/video/BV11X4y1j7si/?p=37&t=300)，主要代码是：\n\n```c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOC, ENABLE);\nGPIO_InitTypeDef GPIO_InitStruct;\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_13;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_Out_OD;\nGPIO_InitStruct.GPIO_Speed = GPIO_Speed_2MHz;\nGPIO_Init(GPIOC, &GPIO_InitStruct);\nGPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET);\n```\n\n先开 GPIOC 的时钟，再填写引脚、模式和输出速度，最后调用 `GPIO_Init`。`Out_OD` 是开漏输出。PC13 输出低电平时灯亮，所以初始化末尾写 `Bit_SET`，使灯先保持熄灭。随后在 `main` 中调用 `App_OnBoardLED_Init()`。\n\n## 05:41—07:00 · 在 App_Button_Init 中配置两个输入\n\n按钮都属于 GPIOA，因此先使能 GPIOA 时钟。原片先初始化 PA5，再复制代码把引脚改为 PA6，输入模式均为 `GPIO_Mode_IPU`：\n\n```c\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_5;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_IPU;\nGPIO_Init(GPIOA, &GPIO_InitStruct);\n\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_6;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_IPU;\nGPIO_Init(GPIOA, &GPIO_InitStruct);\n```\n\n视频指出输入模式不必填写输出速度。完成两个 GPIO 后，在 `main` 中调用 `App_Button_Init()`；后面的 EXTI 和 NVIC 配置继续放进这个函数。\n\n## 07:01—11:36 · 用 AFIO 为 EXTI5、EXTI6 选择输入引脚\n\n[看 EXTI 与 AFIO 的分工](https://www.bilibili.com/video/BV11X4y1j7si/?p=37&t=496)。GPIO 引脚比 EXTI 外部输入线多，因此每条线前面有输入选择器。同编号的 PA5、PB5 等端口候选，需选出其中一个接入 EXTI5。\n\n本例要把 PA5 接到线 5、PA6 接到线 6。输入选择器属于 AFIO，先开 AFIO 的时钟，再调用原接口：\n\n```c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO, ENABLE);\nGPIO_EXTILineConfig(GPIO_PortSourceGPIOA, GPIO_PinSource5);\nGPIO_EXTILineConfig(GPIO_PortSourceGPIOA, GPIO_PinSource6);\n```\n\n第一个参数选择端口，第二个参数选择引脚编号。这里使用 `GPIO_PinSource5`、`GPIO_PinSource6`，它们与配置 GPIO 时的 `GPIO_Pin_5`、`GPIO_Pin_6` 是不同参数类型，按原片区分。\n\n## 11:37—16:36 · 配置中断模式、上升沿与线使能\n\n老师接着展开单条 EXTI 线的内部图：输入选择之后还有边沿检测和中断/事件开关。`EXTI_Init` 接收 `EXTI_InitTypeDef` 指针，需要配置四个成员：线号、模式、触发边沿、使能状态。\n\n[15:00 的图将按钮动作与上升沿对应](https://www.bilibili.com/video/BV11X4y1j7si/?p=37&t=900)。本例使用中断模式，在按钮松开时触发，因此选择 `EXTI_Trigger_Rising`。原片先写线 5，再复制出线 6：\n\n```c\nEXTI_InitTypeDef EXTI_InitStruct;\nEXTI_InitStruct.EXTI_Line = EXTI_Line5;\nEXTI_InitStruct.EXTI_Mode = EXTI_Mode_Interrupt;\nEXTI_InitStruct.EXTI_Trigger = EXTI_Trigger_Rising;\nEXTI_InitStruct.EXTI_LineCmd = ENABLE;\nEXTI_Init(&EXTI_InitStruct);\n\nEXTI_InitStruct.EXTI_Line = EXTI_Line6;\nEXTI_InitStruct.EXTI_Mode = EXTI_Mode_Interrupt;\nEXTI_InitStruct.EXTI_Trigger = EXTI_Trigger_Rising;\nEXTI_InitStruct.EXTI_LineCmd = ENABLE;\nEXTI_Init(&EXTI_InitStruct);\n```\n\n`EXTI_Mode_Interrupt` 选择中断通路，`ENABLE` 打开相应开关。视频特别说明 EXTI 无需像普通外设那样单独开启 EXTI 时钟；前面使能的 AFIO 时钟仍然需要。\n\n## 16:37—20:58 · 两条线共用 EXTI9_5 中断\n\n[看中断合并关系](https://www.bilibili.com/video/BV11X4y1j7si/?p=37&t=1020)：EXTI0～4 分别有独立中断；EXTI5～9 合用 `EXTI9_5`；EXTI10～15 合用另一个中断。本例的线 5、线 6 都进入同一个 NVIC 通道。\n\n老师先在程序开头设置优先级分组 2，并说明分组对所有中断共同生效。本实验只有一个中断通道，不涉及不同通道之间的先后竞争。\n\n随后回到 `App_Button_Init()`，声明 `NVIC_InitTypeDef NVIC_InitStruct`。通道名从 `stm32f10x.h` 的中断编号枚举中查得，原代码是：\n\n```c\nNVIC_InitStruct.NVIC_IRQChannel = EXTI9_5_IRQn;\nNVIC_InitStruct.NVIC_IRQChannelPreemptionPriority = 0;\nNVIC_InitStruct.NVIC_IRQChannelSubPriority = 0;\nNVIC_InitStruct.NVIC_IRQChannelCmd = ENABLE;\nNVIC_Init(&NVIC_InitStruct);\n```\n\n这里开启的是共享中断通道，不是分别为 PA5、PA6 建两个 NVIC 通道。\n\n## 20:59—25:04 · 从启动文件找处理函数，再分别判断两条线\n\n老师在启动文件 `startup_stm32f10x_md.s` 的中断向量表中找到 `EXTI9_5_IRQHandler`，把同名函数写入 `main.c`。[随后说明如何区分线 5 与线 6](https://www.bilibili.com/video/BV11X4y1j7si/?p=37&t=1380)。\n\n原片使用 `EXTI_GetFlagStatus(EXTI_Line5)` 和 `EXTI_GetFlagStatus(EXTI_Line6)`，返回 `SET` 说明对应挂起标志已置位。线 5 对应左键，应向 PC13 写 `Bit_RESET` 点灯；线 6 对应右键，应写 `Bit_SET` 灭灯。\n\n24:36 左右，老师特别指出两个判断不能写成 `if ... else`：两条线可能同时触发，需要分别检查，所以使用两个独立的 `if`。25:00 的 IDE 画面还保留复制时的 `Bit_RESET`，口述随即要求改为 `SET`；后面的完整代码已显示这一修正。\n\n## 25:05—26:23 · 补上 EXTI_ClearFlag，完成中断处理\n\n前面的代码还缺清除标志位这一步。如果对应挂起标志一直保持置位，中断就可能反复进入。[26:30 的 IDE 完整状态](https://www.bilibili.com/video/BV11X4y1j7si/?p=37&t=1590)如下，保留原接口与两个独立判断：\n\n```c\nvoid EXTI9_5_IRQHandler(void)\n{\n    if (EXTI_GetFlagStatus(EXTI_Line5) == SET)\n    {\n        EXTI_ClearFlag(EXTI_Line5);\n        GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_RESET);\n    }\n    if (EXTI_GetFlagStatus(EXTI_Line6) == SET)\n    {\n        EXTI_ClearFlag(EXTI_Line6);\n        GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET);\n    }\n}\n```\n\n先判断是哪条线，再清除该线标志，执行点灯或灭灯。两个分支都处理时，代码顺序是先线 5、后线 6。\n\n原片将“标志最终清为 0”口述成“向该位写 0”。应区分结果与寄存器操作：EXTI 的挂起寄存器实际是写 1 清除，标准库 `EXTI_ClearFlag` 已完成此操作；不要据口述改成向 `EXTI->PR` 写 0。[ST 官方 RM0008 §10.3.6](https://www.st.com/resource/en/reference_manual/rm0008-stm32f101xx-stm32f102xx-stm32f103xx-stm32f105xx-and-stm32f107xx-advanced-armbased-32bit-mcus-stmicroelectronics.pdf)明确说明了这一点。\n\n## 26:25—27:35 · 编译、下载与板上验证\n\n视频编译后报告无错误、无警告，随后下载并复位开发板。[26:43 起的实物演示](https://www.bilibili.com/video/BV11X4y1j7si/?p=37&t=1603)显示左键使板载灯亮、右键使灯灭，与开头的实验目标一致。\n\n这套程序由中断处理按钮，`main` 在完成初始化后保留空的 `while (1)`。片尾结束语之后，又接回一小段 EXTI 外部输入线与复用器的说明；它重复前面的分配原理，没有新增一套按钮代码。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1654.1013125,
        "asrSegments": 595,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "ad5ef7dd2821f85679c251fbbe9b411de21e8328e6464509a5904c42ce48d254",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 38,
      "phase": "clk",
      "title": "8.1 [时钟] 时钟树",
      "duration": 1726,
      "summary": "从GPIO和USART的时钟例子出发，按部件、树根、树干、树枝读原时钟树，再完成8MHz、分级36/9/36MHz及最高频率三个原例。",
      "notes": "本节先借GPIOC使能和USART波特率回顾时钟，再介绍分频器、PLL与复用器。随后按树根四时钟源、树干SYSCLK三来源、树枝AHB/APB1/APB2逐段解释原图。保留8/20/72MHz的PLL演算与片尾三个分频原例；具体F103C8的DMA配置另据数据手册注明，不把家族概括图当作本型号外设清单。",
      "points": [
        "分频器做除法、PLL做倍频、复用器选择来源",
        "按高低速和内外位置区分HSI、HSE、LSI、LSE",
        "SYSCLK来自HSI、HSE或PLL，沿原例计算8/20/72MHz",
        "先由SYSCLK分出HCLK，再分出PCLK1与PCLK2",
        "三个原练习的分频选择依次为1/1/1、2/4/1、1/2/1",
        "PCLK1最高36MHz，与HCLK和PCLK2的72MHz上限区分"
      ],
      "cid": 26163742877,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 120,
            "observation": "开头回看PC13闪灯工程，GPIOC、Out_PP、2MHz与两次Delay(100)可见。",
            "frameSha256": "35ed793514f7946cb1bd06febe74bd9567c60f0b3f93b5a4232c3d85ee25851b"
          },
          {
            "seconds": 180,
            "observation": "USART框图的时钟经过分频器和除16环节形成波特率。",
            "frameSha256": "79a587a4aea6b6c7a31bf3eb8da00b061b3a4bf93865599d5f3f7ce2b313bed7"
          },
          {
            "seconds": 517,
            "observation": "完整树图与三个部件：分频器除法、锁相环乘法、复用器选择。",
            "frameSha256": "72b45203d7888a2976464ac1b21c645ca0a828ed47dad24d788e5eabfeddf2b8"
          },
          {
            "seconds": 660,
            "observation": "四个时钟源的LS/HS、I/E表格及各标称频率，HCLK/PCLK2为72Mmax、PCLK1为36Mmax。",
            "frameSha256": "29ca980e299319b8ad29106061da248420b7c6c4e3cb7e1d728e60174e9d774c"
          },
          {
            "seconds": 720,
            "observation": "LSI/LSE/HSI/HSE英文全称与芯片内外位置图。",
            "frameSha256": "2a33e59233febfb8cbe7cb6a0c8c72385580389ea1ccc7e7b01266d7c474cb92"
          },
          {
            "seconds": 780,
            "observation": "LSE接PC14/PC15，HSE接PD0/PD1的原图。",
            "frameSha256": "c799e10afb7c718e2c2a5b10ccbc927dc2ae920b9e02068c8e8ab00b1470ab3b"
          },
          {
            "seconds": 960,
            "observation": "SYSCLK来自HSI、PLL、HSE的三张对比图。",
            "frameSha256": "1d81ac097b704016b663cc2df6af601093ba93432060e6c028732bdeafcf2e3a"
          },
          {
            "seconds": 1140,
            "observation": "三来源图配合口述，正在讨论PLL可产生的8/12/16/20/36/72MHz频率。",
            "frameSha256": "31355cd2fed1a33547d4c08d4a39f9da3f722e63dc89c940defbae6b0610277f"
          },
          {
            "seconds": 1208,
            "observation": "PLL可变频率列表突出20MHz原例。",
            "frameSha256": "9632c6f1fddc18065ec310ee5f035b2c943ccca193bd61f8bb23dea14f8780e3"
          },
          {
            "seconds": 1260,
            "observation": "SYSCLK三来源图仍在，PLL路径可选HSI/2、HSE/2或HSE。",
            "frameSha256": "a4d430ffc4e88cf0a2a184df456799972e69907f459efdd44d3b17d530c95f74"
          },
          {
            "seconds": 1380,
            "observation": "AHB/APB1/APB2名称、外设分布，原图确实列出DMA1及DMA2。",
            "frameSha256": "420d4d9284f8b82505f2a3368f5d4802254264747ea39661913f9745fb4bbfea"
          },
          {
            "seconds": 1553,
            "observation": "三个分频原练习题目：全8MHz、36/9/36MHz、各自Max。",
            "frameSha256": "a049624cb785206ff917db350d668d43a264f34454d21cb3a6753649205182c4"
          },
          {
            "seconds": 1620,
            "observation": "第二个例子AHB选除2，72MHz变为HCLK36MHz。",
            "frameSha256": "c15a8878635da44e90e98ed32fa0af78af1644e339edaaef9ef9214f7faadb1c"
          },
          {
            "seconds": 1696,
            "observation": "最后一例已标AHB除1、APB1除2，解释各自最大频率。",
            "frameSha256": "54c1e3f30b433f5440334f16d40f624858c32f90b7646db0524d9f948dffeb84"
          }
        ]
      },
      "learningNotes": "## 00:00—01:13 · 本节按五部分读懂时钟树\n\n[从本节目录观看](https://www.bilibili.com/video/BV11X4y1j7si/?p=38&t=37)。作者先讲时钟与时钟树的概念，再认识分频器、锁相环和复用器，最后把整张图拆成树根、树干、树枝。这一节围绕原图和频率计算展开，下一节再编写配置程序。\n\n## 01:14—03:28 · 从 GPIOC 和 USART 回顾时钟的作用\n\n[观看时钟概念](https://www.bilibili.com/video/BV11X4y1j7si/?p=38&t=74)。原片把高低交替的方波信号比作心跳：片上模块按照时钟节拍推进工作，时钟频率会影响模块工作的速度。\n\n随后回看先前的 PC13 闪灯代码：向 PC13 写低电平点亮，延时，再写高电平熄灭、延时。这里要注意的不是重新学习闪灯，而是使用 GPIOC 之前为什么必须先开启它的时钟。使能时钟这一步，让端口获得工作的条件。\n\n[02:40 起回到 USART 框图](https://www.bilibili.com/video/BV11X4y1j7si/?p=38&t=160)。串口除了数据位、停止位、校验等参数，还要设置波特率。图中输入时钟经过可配置分频，再经过除以 16 的环节，形成所需节拍。因此先前计算波特率所假设的 72MHz，并不是所有串口天然固定具有的时钟；它来自后面要分析的时钟配置。\n\n## 03:29—05:28 · 树根、树干、树枝与外设各对应什么\n\n[对照原时钟树](https://www.bilibili.com/video/BV11X4y1j7si/?p=38&t=209)。作者接着用血液循环系统作类比：根部产生信号，主干加工和传递，分支把信号送到不同模块，末端的“树叶”对应 GPIO、SPI、USART 等片上外设。\n\n原图画了左右两棵树：左侧较大的高速树是主要研究对象，右侧还有低速树。读图时先沿信号方向找到来源，再经过选择、倍频或分频，最后到达目标模块；不能把树上不同位置的频率都当成同一个数。\n\n## 05:29—07:28 · 第一个部件：分频器对频率做除法\n\n[观看分频器例子](https://www.bilibili.com/video/BV11X4y1j7si/?p=38&t=361)。原图里标着“/2”的方框具有固定二分频功能。例如 HSI 的 8MHz 通过这里，输出就成为 `8 / 2 = 4MHz`。\n\n另一些分频器允许选择系数。作者以 AHB 分频器为例：输入为 72MHz，选除以 1，输出 72MHz；选除以 2，输出 36MHz；选除以 4，输出 18MHz。图中 AHB 还提供更大的分频档位，最大标为除以 512。\n\n读分频器先确定输入频率，再看当前选择的除数，最后算输出。多个分频器串接时，下一段的输入是上一段算出的输出，不能每次都重新从 72MHz 开始计算。\n\n## 07:29—09:16 · 锁相环做倍频，复用器选择通路\n\n[观看 PLL 与复用器](https://www.bilibili.com/video/BV11X4y1j7si/?p=38&t=449)。课件用“乘法”说明锁相环 PLL：图中倍频系数可选 2～16，若输入是 8MHz，选择乘以 9，就得到 72MHz。\n\n梯形符号表示复用器。它从多路输入中选择一路送往下一级，本身不是把几路频率相加。PLL 前的选择关系在图中归纳为三种来源：`HSI/2`、`HSE/2`、`HSE`。先选哪一路，再设倍频系数，才能确定 PLL 输出。\n\n这三个部件的区别到此明确：分频器改除数，PLL 改倍数，复用器改来源。后面树根和树干中的每条线路，都可以按这三个动作逐段读出。\n\n## 09:17—14:52 · 树根：四个时钟源的名字与位置\n\n[观看四个时钟源表格](https://www.bilibili.com/video/BV11X4y1j7si/?p=38&t=557)。作者先按速度分组，再按内外位置分组：LS 是 Low Speed，HS 是 High Speed；I 是 Internal，E 是 External。于是得到：\n\n- LSI：内部低速时钟，课件标称 40kHz。\n- LSE：外部低速时钟，课件标为 32.768kHz。\n- HSI：内部高速时钟，课件标称 8MHz。\n- HSE：外部高速时钟，图示晶振范围为 4～16MHz。\n\n[12:30 附近对照芯片引脚](https://www.bilibili.com/video/BV11X4y1j7si/?p=38&t=750)。图中 LSE 接 PC14、PC15，HSE 接 PD0、PD1。镜头随后回到最小系统板，辨认标有 8.000 的高速晶振和 32.768kHz 的低速晶振。\n\n内部时钟使用方便，外部晶振则是视频中追求较高精度的选择。这里的 8MHz、40kHz 等应理解为所讨论时钟源的标称频率；选择来源与是否使用 PLL，是后面配置路径的不同问题。\n\n## 14:53—18:36 · 树干：SYSCLK 有三种来源\n\n[观看三条来源对比](https://www.bilibili.com/video/BV11X4y1j7si/?p=38&t=893)。树干把源信号加工成系统时钟 SYSCLK，即 System Clock。原图依次比较直接取 HSI、直接取 HSE、取 PLL 输出三种路径。\n\n直接选 HSI 时，中间没有倍频环节，SYSCLK 就取其标称 8MHz。直接选 HSE 时，系统时钟等于外接源的频率：板上是 8MHz 晶振，就得到 8MHz；原片另外举了更换为 12MHz 晶振的例子。这里改变的是外接源，不能理解成写一个选择位就把同一颗晶振变成另一频率。\n\n选 PLL 输出时，可以同时选择输入来源和倍频系数，所以更灵活。用内部源可以减少对外接晶振的依赖，用外部源则沿用外接源的精度特点；两种选择都要继续计算经过分频与倍频后的结果。\n\n## 18:37—21:30 · 按原片计算 8、20、72MHz\n\n[观看 PLL 计算实例](https://www.bilibili.com/video/BV11X4y1j7si/?p=38&t=1117)。本段按三个目标频率演算：\n\n1. 产生 8MHz：HSI 的 8MHz 先除以 2 得 4MHz，再由 PLL 乘以 2，回到 8MHz。若外接 HSE 也是 8MHz，也可以走 `HSE/2 × 2` 这条路径。\n2. 产生 20MHz：原片取 8MHz HSE，先二分频到 4MHz，再乘以 5，得到 20MHz。作者随后说明内部 HSI 也能按相同算式得到这个频率。\n3. 产生 72MHz：本例使用 8MHz HSE 直接进入 PLL，选择九倍频，得到 `8 × 9 = 72MHz`。\n\n同样的输出频率，可能有不同来源路径。跟着例子计算时，要把“来源、输入是否除以 2、PLL 倍数”一起写清，而不只记最后的 8 或 72。\n\n## 21:31—25:44 · 树枝：从 AHB 再分出 APB1、APB2\n\n[观看总线与外设对应关系](https://www.bilibili.com/video/BV11X4y1j7si/?p=38&t=1328)。作者回顾内部结构图，介绍 AHB 高级高速总线，以及 APB1、APB2 两条高级外设总线。GPIO、SPI1、USART1 位于图中 APB2 一侧，I2C1、I2C2 等位于 APB1 一侧。\n\n因此，先前开启 USART1 或 GPIO 时用 APB2 的时钟接口，开启 I2C 时用 APB1 的接口。接口名里的总线编号有具体的挂载关系依据，不能随意互换。\n\n回到树形图，SYSCLK 先经 AHB 分频得到 HCLK，再分别经过 APB1、APB2 分频得到 PCLK1、PCLK2：\n\n```text\nSYSCLK / AHB分频系数 = HCLK\nHCLK / APB1分频系数 = PCLK1\nHCLK / APB2分频系数 = PCLK2\n```\n\n课件把 HCLK、PCLK2 的上限标为 72MHz，把 PCLK1 的上限标为 36MHz。最后三个例子就是按这条先后关系计算分频值。\n\n针对本教材 F103C8 的资料核对：原片概括图中列有 DMA1、DMA2；[ST 的 STM32F103x8/B 数据手册](https://www.st.com/resource/en/datasheet/stm32f103c8.pdf)为本型号列出一套 7 通道 DMA 控制器。读家族示意图时应区分具体器件，不能据图给 C8 增加 DMA2。\n\n## 25:45—26:35 · 例 1：三个输出都为 8MHz\n\n[观看第一道原例](https://www.bilibili.com/video/BV11X4y1j7si/?p=38&t=1545)。已知 SYSCLK 为 8MHz，要求 HCLK、PCLK1、PCLK2 均为 8MHz。AHB 选除以 1，得到 HCLK=8MHz；APB1、APB2 也各除以 1，两个外设总线时钟仍为 8MHz。三个分频系数依次是 `1、1、1`。\n\n## 26:36—27:25 · 例 2：72MHz 系统时钟分出 36、9、36MHz\n\n[观看第二道原例](https://www.bilibili.com/video/BV11X4y1j7si/?p=38&t=1596)。题目要求 HCLK=36MHz、PCLK1=9MHz、PCLK2=36MHz。逐层计算：\n\n- AHB：`72 / 2 = 36MHz`。\n- APB1：输入已经是 36MHz，`36 / 4 = 9MHz`。\n- APB2：同样从 HCLK 取 36MHz，`36 / 1 = 36MHz`。\n\n所以对应选择为 AHB 除以 2、APB1 除以 4、APB2 除以 1。APB1 的除数不是用 SYSCLK 直接除以 9 得出的 8；它前面已经经过 AHB 二分频。\n\n## 27:26—28:46 · 例 3：让各条总线达到各自上限\n\n[观看最后一道原例](https://www.bilibili.com/video/BV11X4y1j7si/?p=38&t=1646)。SYSCLK 取最高 72MHz，AHB 除以 1，使 HCLK=72MHz；APB1 除以 2，使 PCLK1=36MHz；APB2 除以 1，使 PCLK2=72MHz。因此原片最后得到 `1、2、1`。\n\n题面写“都达到 Max”，指各自允许的最大值，不是三个结果必须相等。把本例的 `72、36、72MHz` 分清，后续才不会把 APB1 也当成 72MHz。至此，本节完成从时钟源到系统时钟、再到三条总线的读图与计算，下一节继续落实到程序配置。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1725.8453125,
        "asrSegments": 632,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "3dbe5e184a8d92f009a8325e17a3671dfd5cadd888579db8fc98959ad882f25c",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 39,
      "phase": "clk",
      "title": "8.2 [时钟] 时钟树编程",
      "duration": 2354,
      "summary": "从8MHz复位状态与闪灯过快的问题出发，检查SystemInit，按原App_SystemClock_Init四步配置HSE/PLL/总线/SYSCLK，再补Flash预取和等待周期，最后演示外设时钟及I2C1复位。",
      "notes": "正文遵循原片六部分。保留ClockTreeTest中400000次假设、查看Reset_Handler的SystemInit、跳过该调用后改666666次的实验顺序；保留原App_SystemClock_Init与全部四步RCC调用。Flash配置讲在后面，最终放在函数前面；最后才讲ClockCmd与ResetCmd。",
      "points": [
        "复位时HSI8MHz不等于模板进入main时的时钟状态",
        "原实验跳过SystemInit后用666666次空循环重新观察延时",
        "HSE就绪→PLL HSE_Div1九倍频就绪→AHB1/APB1二分/APB2一分→切PLL并等0x08",
        "Flash预取与Latency2后讲、最终插入App_SystemClock_Init开头",
        "GPIOA/APB2、USART2/APB1、DMA1/AHB与I2C1施加后释放复位"
      ],
      "cid": 26164136889,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 235,
            "observation": "复位HSI8MHz树与假设10周期、400000次循环的PPT。",
            "frameSha256": "831c9263f3444a7be29c53bfcdbf26b55f6756c3dddb1658198072f7e566abbc"
          },
          {
            "seconds": 480,
            "observation": "IDE ClockTreeTest：PC13 Out_OD/2MHz，闪灯代码。",
            "frameSha256": "0ef270d83ee3bd889031c05e2f205c91b35787e054c81ad6dd01cc4aef22027a"
          },
          {
            "seconds": 540,
            "observation": "Reset_Handler先调用SystemInit，再跳__main的启动图。",
            "frameSha256": "9d2aa58dabf3237403eb116092236da9e88e892fa18b7d85ec16fc2c79b27551"
          },
          {
            "seconds": 600,
            "observation": "SystemInit前后8MHz与72/72/36MHz树对比。",
            "frameSha256": "b2f2d1f808bb6172637631ff42919906037dcb5eeec62a4a8a0f4f25bc6a7654"
          },
          {
            "seconds": 660,
            "observation": "启动汇编实际SystemInit调用两行待注释位置。",
            "frameSha256": "686a50001194a632086c029af5ecbfeef3547b247f89f23109a54f24fbf0e939"
          },
          {
            "seconds": 780,
            "observation": "完整RCC十接口清单及树上对应关系。",
            "frameSha256": "1bfd736aa2b1c1aa1101356e075cafecdea26f63c0bbe8f2608c11b2ac223368"
          },
          {
            "seconds": 1177,
            "observation": "RCC_GetSYSCLKSource等接口原清单。",
            "frameSha256": "b59f68d2de5a1a38e5da16939052f0906278dfe14e634823fe5418de23b93ab4"
          },
          {
            "seconds": 1320,
            "observation": "时钟树图上标HSE、PLL、分频、切换四步骤。",
            "frameSha256": "0c06e237f7110c48c15626949df37c5267661ef4f96edf2e816325c2d253c605"
          },
          {
            "seconds": 1380,
            "observation": "IDE声明原App_SystemClock_Init，延时循环666666。",
            "frameSha256": "6aa934f6ee387c67fd3d0b7d2900dd2651ebd4e050ed7dee00543c1f511e0915"
          },
          {
            "seconds": 1440,
            "observation": "HSE_ON与等待HSERDY的PPT原代码。",
            "frameSha256": "b35f0a88c510f9af080f962c082509c9a1ae11f255e7173b74ff93b383be36dc"
          },
          {
            "seconds": 1560,
            "observation": "HSE_Div1、PLLMul_9、PLLCmd、等待PLLRDY的PPT。",
            "frameSha256": "950c38414b65b195c877ae98e5804a403d17d6b205b6cb933b78b4083aefa492"
          },
          {
            "seconds": 1740,
            "observation": "IDE HSE/PLL就绪循环已录入，开始总线分频。",
            "frameSha256": "07cdf256972b7396c04e44af625b01eb6f101af0a728aefe0619d5c6a93e376f"
          },
          {
            "seconds": 1800,
            "observation": "PPT SYSCLKSource_PLLCLK与GetSYSCLKSource!=0x08原代码。",
            "frameSha256": "9ffda613fc59331410821bab277f73f078c903a13a2a5ba2f68d12362f0638b3"
          },
          {
            "seconds": 1860,
            "observation": "IDE分频为HCLK Div1、PCLK1 Div2、PCLK2 Div1。",
            "frameSha256": "efe4be7a3ed8b8adae2bfefda8ca7466079a266418510f3e702845a77d15d524"
          },
          {
            "seconds": 1905,
            "observation": "Flash预取、<=24/48/72MHz等待周期与Latency2图。",
            "frameSha256": "f7b905ef7ce21209258bcba0d4122a853e0c1bf7c0746c83772fccddbdc34d0d"
          },
          {
            "seconds": 2100,
            "observation": "IDE在App_SystemClock_Init开头插入FLASH_PrefetchBufferCmd与SetLatency。",
            "frameSha256": "b17d85e1d49b74f8265d4184e54615d867e0f0cab31996f9dcc1ba7a84ee8051"
          },
          {
            "seconds": 2118,
            "observation": "main开头调用App_SystemClock_Init，随后GPIO初始化和闪灯。",
            "frameSha256": "c34dd3958f7c3a74c97ca59bb406cc1cdce56ab19dea32a953a7a67ba4628700"
          },
          {
            "seconds": 2160,
            "observation": "外设AHB/APB2/APB1时钟使能与APB复位接口清单。",
            "frameSha256": "c78a52b2a1147cf56bc549e9cc5168096850fade7d470ad5f01a9434ebd0b164"
          },
          {
            "seconds": 2324,
            "observation": "IDE例子GPIOA/USART2/DMA1时钟、I2C1 Reset ENABLE再DISABLE。",
            "frameSha256": "55256e947c4f7c37707ff2754f9e1495bcd0eacb4a73d712c5e83de1b461e02d"
          },
          {
            "seconds": 2340,
            "observation": "原六部分回顾。",
            "frameSha256": "784ef27492037920346994c6c302bf7bbe0b43710c1422ab15ab1fda7c5f7697"
          }
        ]
      },
      "learningNotes": "## 00:29—02:38 · 先区分复位状态与程序运行后的状态\n\n本节分六部分：时钟树初始状态、标准库启动代码、RCC 接口、手动配置时钟树、Flash 指令预取、外设时钟与复位。\n\n[从复位时钟树看起](https://www.bilibili.com/video/BV11X4y1j7si/?p=39&t=95)。芯片刚复位、尚未执行时钟配置代码时，SYSCLK 选 HSI，频率为 8MHz。AHB、APB1、APB2 分频系数均为 1，因此此时 HCLK、PCLK1、PCLK2 也都是 8MHz。\n\n注意这个时间条件：它描述的是硬件复位后的状态，不代表进入用户 `main` 时还一定保持 8MHz。后面的闪灯实验专门揭示这一区别。\n\n## 02:39—07:44 · 用空循环闪灯观察执行速度\n\n老师先假设 CPU 每执行一次 `for` 循环需要 10 个周期。按 8MHz 计算，一个周期是 0.125μs，一次循环约 1.25μs；希望延迟 0.5s，就需循环 400000 次。\n\n[原片建立 ClockTreeTest](https://www.bilibili.com/video/BV11X4y1j7si/?p=39&t=300)，直接在 `main` 中初始化 PC13 为 `GPIO_Mode_Out_OD`、`GPIO_Speed_2MHz`，然后写闪灯循环。以下为原片这一步的核心摘录：\n\n```c\nGPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_RESET);\nfor (uint32_t i = 0; i < 400000; i++);\nGPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET);\nfor (uint32_t i = 0; i < 400000; i++);\n```\n\nPC13 低电平亮灯，高电平灭灯。两处循环末尾的分号表示空循环。老师预期亮、灭各约半秒，但下载后看到灯闪得明显更快，于是带着这个问题转去检查启动代码。\n\n这里的 10 周期只是计算假设，400000 次也因此只是最初的实验值。\n\n## 07:45—11:34 · 启动文件先调用 SystemInit\n\n[查看启动代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=39&t=540)。老师打开 `startup_stm32f10x_md.s`，从中断向量表往下找到 `Reset_Handler`。画面显示先加载并调用 `SystemInit`，随后跳到 `__main`，再由运行环境进入用户程序。\n\n本模板的 `SystemInit` 已经把时钟树配置为高性能状态：8MHz HSE 经 PLL 九倍频得到 72MHz，AHB 不分频，APB2 不分频，APB1 二分频。因此 HCLK 为 72MHz、PCLK2 为 72MHz、PCLK1 为 36MHz。内核运行速度已经提高，按 8MHz 估算的延时自然会缩短。\n\n为了观察原始状态，视频在本实验中暂时注释掉调用 `SystemInit` 的两行汇编。老师强调汇编注释使用英文分号。这个修改使本实验的用户代码从尚未重新配置的时钟状态开始运行；后面再手动完成配置。\n\n## 11:35—12:36 · 再修正空循环的估算\n\n跳过 `SystemInit` 后，闪灯速度明显变慢，但仍略快于预期。老师进一步解释：一次循环不一定真的消耗 10 个 CPU 周期，在他当前实验条件下约为 6 个周期。\n\n于是视频把两处 `400000` 改为 `666666`，再次编译、下载，观察到约一秒完成一次亮灭。这里应把它理解为原实验环境下对空循环的校准；不同编译选项、代码生成或时钟状态下，不能直接保证同样的精确延时。\n\n## 12:37—20:08 · 按时钟树认识十个 RCC 接口\n\n[对照原接口清单](https://www.bilibili.com/video/BV11X4y1j7si/?p=39&t=1177)。RCC 是 Reset And Clock Controller，兼管复位与时钟。老师按清单顺序说明各接口与树上环节的对应关系：\n\n- `RCC_HSEConfig` 控制外部高速时钟；`RCC_HSICmd` 控制内部高速时钟。\n- `RCC_PLLConfig` 选择 PLL 输入来源和倍频系数；`RCC_PLLCmd` 控制 PLL 开关。\n- `RCC_SYSCLKConfig` 选择 SYSCLK 来源。\n- `RCC_HCLKConfig`、`RCC_PCLK1Config`、`RCC_PCLK2Config` 分别配置 AHB、APB1、APB2 分频。\n- `RCC_GetFlagStatus` 查询时钟相关就绪标志；`RCC_GetSYSCLKSource` 查询当前系统时钟来源。\n\n后两个查询函数的作用贯穿后面的程序：打开 HSE 或 PLL 后要等就绪，要求切换 SYSCLK 后也要等切换真正完成。\n\n## 20:09—23:42 · 手动配置的四个步骤\n\n视频的目标是从 HSI 8MHz 状态变到 HSE 经 PLL 后的 72MHz 状态。[老师先在图上标四步](https://www.bilibili.com/video/BV11X4y1j7si/?p=39&t=1320)：\n\n1. 开启 HSE。\n2. 配置 PLL 输入与九倍频，再启动 PLL。\n3. 配置 AHB、APB1、APB2 分频系数。\n4. 最后把 SYSCLK 切到 PLL。\n\n接着在 `main.c` 声明并实现原函数 `void App_SystemClock_Init(void)`，先写下这四个步骤的注释，再逐段填代码。先准备来源与分频、最后切换，可避免直接切到尚未准备好的时钟。\n\n## 23:43—25:12 · 开启 HSE 并等待 HSERDY\n\n[第一步的原代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=39&t=1440)：\n\n```c\nRCC_HSEConfig(RCC_HSE_ON);\nwhile (RCC_GetFlagStatus(RCC_FLAG_HSERDY) == RESET);\n```\n\n第一行发出开启请求。第二行反复查询 HSE 就绪位：仍为 `RESET` 就继续等待，变为 `SET` 才退出。原片这里使用的是空体等待循环。\n\n## 25:13—28:21 · 配置并启动 PLL\n\n[PLL 参数与原代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=39&t=1560)：\n\n```c\nRCC_PLLConfig(RCC_PLLSource_HSE_Div1, RCC_PLLMul_9);\nRCC_PLLCmd(ENABLE);\nwhile (RCC_GetFlagStatus(RCC_FLAG_PLLRDY) == RESET);\n```\n\n`RCC_PLLSource_HSE_Div1` 表示 HSE 不先分频，直接送入 PLL；`RCC_PLLMul_9` 选择九倍频。本例外部时钟为 8MHz，所以 PLL 输出目标为 72MHz。\n\n先写参数，再开启 PLL，最后等待 `PLLRDY`。这三件事不能简单缩成“选了九倍频就立刻切换系统时钟”。\n\n## 28:22—29:34 · 配置三个总线分频\n\n原片分别填写 AHB、APB1、APB2：\n\n```c\nRCC_HCLKConfig(RCC_SYSCLK_Div1);\nRCC_PCLK1Config(RCC_HCLK_Div2);\nRCC_PCLK2Config(RCC_HCLK_Div1);\n```\n\nHCLK 跟随 SYSCLK；PCLK1 为 HCLK 的一半；PCLK2 跟随 HCLK。最终切到 72MHz 后，这三个频率分别为 72MHz、36MHz、72MHz，符合原图上各总线的目标。\n\n## 29:35—31:29 · 切换 SYSCLK，查询实际来源\n\n[视频用到的最后两行时钟配置](https://www.bilibili.com/video/BV11X4y1j7si/?p=39&t=1800)：\n\n```c\nRCC_SYSCLKConfig(RCC_SYSCLKSource_PLLCLK);\nwhile (RCC_GetSYSCLKSource() != 0x08);\n```\n\n第一行要求选择 PLL。第二行确认切换结果：原片列出的返回值是 `0x00` 表示 HSI、`0x04` 表示 HSE、`0x08` 表示 PLL。只要还没返回 `0x08`，就继续等待。\n\n到这一步，四个时钟配置步骤才写完；视频随后补讲 Flash 配置，并把相关代码插到这个函数的开头。\n\n## 31:30—33:53 · 补讲指令预取，并把使能放到函数开头\n\n[看 CPU、Flash 与缓冲区的原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=39&t=1905)。程序存储在 Flash 中，内核运行时读取指令。Flash 读取速度较慢，预取机制可以提前把后续指令放进缓冲区，减少内核等待。\n\n原片使用：\n\n```c\nFLASH_PrefetchBufferCmd(ENABLE);\n```\n\n老师强调这项配置应在低速状态完成，因此回到 `App_SystemClock_Init` 开头，在尚未切换到高速时钟前加入该行。跟随视频时，要同时记住讲解顺序与最终代码位置：Flash 是后讲的，但代码被放在前面。\n\n## 33:54—35:11 · 为 72MHz 设置两个 Flash 等待周期\n\n视频接着按原图说明访问等待：低于或等于 24MHz 时无需额外等待；更高频率按范围加入等待，72MHz 配置两个等待周期。原调用是：\n\n```c\nFLASH_SetLatency(FLASH_Latency_2);\n```\n\n这行同样放在函数开头，先设置 Flash，再进行后面的 HSE、PLL、分频与切换。最终在 `main` 最前面调用 `App_SystemClock_Init()`，然后才初始化 PC13、进入闪灯循环。\n\n## 35:12—35:32 · 下载后观察闪灯加快\n\n老师编译并下载，复位后看到闪灯速度明显加快，以此说明手动时钟配置已起作用。视频采用的是闪灯现象观察，没有在这里用测量仪器给出系统时钟频率的实测值。\n\n## 35:33—37:48 · 按外设所在总线选择时钟开关\n\n[最后转到外设时钟使能](https://www.bilibili.com/video/BV11X4y1j7si/?p=39&t=2160)。老师用三种外设举例，原代码分别为：\n\n```c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);\nRCC_APB1PeriphClockCmd(RCC_APB1Periph_USART2, ENABLE);\nRCC_AHBPeriphClockCmd(RCC_AHBPeriph_DMA1, ENABLE);\n```\n\nGPIOA 位于 APB2，USART2 位于 APB1，DMA1 位于 AHB。先看外设挂在哪条总线，再选择相应 `PeriphClockCmd`，比仅凭名称猜函数更可靠。\n\n## 37:49—39:14 · 外设复位要先施加，再释放\n\n原片最后使用 I2C1 演示单独复位外设：\n\n```c\nRCC_APB1PeriphResetCmd(RCC_APB1Periph_I2C1, ENABLE);\nRCC_APB1PeriphResetCmd(RCC_APB1Periph_I2C1, DISABLE);\n```\n\n`ENABLE` 施加复位信号，`DISABLE` 释放复位信号。老师将它比作按下再松开复位按钮；这里作用对象是 I2C1 模块。它与前面开启时钟的 `PeriphClockCmd` 是不同操作。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 2353.8773125,
        "asrSegments": 848,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "87b902293be20df5704cd802a034bd120089058c9da430b7c56a8d02e5b0f62b",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 40,
      "phase": "tim",
      "title": "9.1 [定时器] 时基单元",
      "duration": 1702,
      "summary": "按原片五部分读时基单元：TIM1与TIM2–4的范围、PSC/CNT/ARR/RCR、手表类比和三种计数方向，再推导TIM3的1μs/1ms参数，最后对比ARR从7改3时的预加载波形。",
      "notes": "正文跟随五部分原图与原例，没有添加本节不存在的编程实验。保留10MHz/PSC9、ARR4五脉冲、石英表、TIM3 1μs/1ms以及ARR7→3的顺序。RCR的高级定时器范围与原片Shadow名称差异就在相应段落澄清。",
      "points": [
        "C8为TIM1高级、TIM2–4通用；RCR虚线功能不能套到TIM3",
        "PSC实际分频为PSC+1，向上计数一轮包含ARR+1个脉冲",
        "原片石英手表32768Hz分频到1Hz、ARR59类比",
        "按APB分频是否为1判断定时器一倍/两倍时钟，TIM3在本配置下72MHz",
        "原题1μs/1ms算得PSC71、ARR999；ARR7改3解释预加载生效时刻"
      ],
      "cid": 26164461584,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 170,
            "observation": "C8位置图TIM1在APB2、TIM2/3/4在APB1；家族定时器分类。",
            "frameSha256": "5718e9d41ff0064d52e67af50bfbe648fea22f82301b07ff35affce5baed7a04"
          },
          {
            "seconds": 240,
            "observation": "总框图四功能分区，RCR等虚线仅高级定时器。",
            "frameSha256": "653bc9315216c2fbd50840b0c8fdc78edde7c3a46f8b2463bc4f7f75966b564f"
          },
          {
            "seconds": 360,
            "observation": "时基五部分结构，PSC+1、ARR+1、RCR+1标注。",
            "frameSha256": "387be21b1c48b6e6f63f90f3ef3c79591dcedb466c4bc1c218e77e0214164be1"
          },
          {
            "seconds": 420,
            "observation": "时钟10MHz进入PSC降频的原图。",
            "frameSha256": "31aa2ed4f697bafbac2e31b284340ee33c90677ca44c3d17f318f29157a0ae6a"
          },
          {
            "seconds": 510,
            "observation": "CNT阶梯、ARR周期和RCR重复关系。",
            "frameSha256": "3620a090ae684987e0b5742f3c8aa93e94cd347e5e8b4c08303a062f54c78a48"
          },
          {
            "seconds": 540,
            "observation": "ARR4、0至4再回0的五个脉冲示例。",
            "frameSha256": "be318e652af5d89a6b08531352a64c8032a06ce9e0b034e543b2c7dee7f41440"
          },
          {
            "seconds": 660,
            "observation": "石英表32.768k晶振、秒脉冲、0至59秒针类比。",
            "frameSha256": "bcc0ac610508a888c97a3b624b22d319788640095cf08bd324286618897bdb43"
          },
          {
            "seconds": 851,
            "observation": "向上、向下、中心对齐三种波形。",
            "frameSha256": "a8921cbcf13f29e98a67441970858edbe7e753b7f2d4c57a551fa070893886a9"
          },
          {
            "seconds": 900,
            "observation": "原题TIM3分辨率1us、周期1ms及CNT波形。",
            "frameSha256": "39c075bc9bd92766e09b915a338ab2e599f63ab28d1d45e8aaad9c069dfd9196"
          },
          {
            "seconds": 1191,
            "observation": "APB分频为1则一倍，否则两倍，TIM1/TIM2–4均72MHz的配置图。",
            "frameSha256": "cf69421c554e74b0da29d72d057e761f4ff5007110835d1970fc45971b5816bc"
          },
          {
            "seconds": 1200,
            "observation": "同图圈TIM3计算36MHz乘2为72MHz。",
            "frameSha256": "5ddd804989107c10f1fb8bd62d268b36614899c1afc9cf0ea173f44b076501ae"
          },
          {
            "seconds": 1380,
            "observation": "原题结果PSC71、ARR999、RCR0写在虚线框旁。",
            "frameSha256": "58cc231189ce39e84d7aae630341a0707dd8b309ad2242bce5b1672e320282ae"
          },
          {
            "seconds": 1440,
            "observation": "原片将软件写入缓存标Shadow、实际生效标Active的命名图。",
            "frameSha256": "eb94eeb79aa6804f7b1811954599604d867cdaf0a0b06074e0b75b7f89c82b32"
          },
          {
            "seconds": 1531,
            "observation": "未预加载ARR7变3且CNT已5，继续至65535的波形。",
            "frameSha256": "0eda889f9eacc5d88f3ec4fb9e975acef8f4c3fcf78c8033638e818ac01c27de"
          },
          {
            "seconds": 1672,
            "observation": "启用预加载后黑线新值先变3、红线等update再变3。",
            "frameSha256": "e25249b24aae4675a6c3f140298a83e985c42a4ca0c6d228be7b79428c6422bb"
          }
        ]
      },
      "learningNotes": "## 00:37—03:51 · 本节范围与芯片上的四个定时器\n\n本节按“定时器简介 → 时基单元结构 → 计数方向 → 时钟来源 → 寄存器预加载”讲解。[先看芯片内部位置](https://www.bilibili.com/video/BV11X4y1j7si/?p=40&t=170)：本课使用的芯片有 TIM1、TIM2、TIM3、TIM4，其中 TIM1 在 APB2，TIM2～4 在 APB1。\n\n老师把定时器比作芯片里的手表，再对照参考手册区分高级、通用、基本定时器。对本教材的 STM32F103C8T6，TIM1 是高级定时器，TIM2～4 是通用定时器。原片提到的 TIM8、TIM6/7、TIM9～14 是 STM32F1 家族范围的分类介绍，应与当前具体芯片区分。\n\n## 03:52—05:18 · 把复杂框图拆成四个部分\n\n[对照定时器总框图](https://www.bilibili.com/video/BV11X4y1j7si/?p=40&t=240)。老师依次圈出时基单元、输出比较、输入捕获、从模式控制器。本节只展开时基单元；下面几节再继续其他部分。\n\n图中虚线框有专门含义：那些部分只属于高级定时器。本课画在计数器右侧的 RCR 就是虚线框，不能据此认为 TIM2～4 都有同样的重复计数器。\n\n## 05:19—07:13 · 时钟输入与预分频器 PSC\n\n时基单元的图从左向右包含时钟来源、PSC、CNT、ARR 和高级定时器的 RCR。[先顺着输入路径阅读](https://www.bilibili.com/video/BV11X4y1j7si/?p=40&t=360)。时钟既可以来自时钟树，也可以经过从模式控制器；本节先研究时钟树输入。\n\n预分频器把输入频率降低，实际除数是 `PSC + 1`。原片首先举 10MHz 输入、希望得到 1MHz 的例子：应设置 PSC=9，得到 `10MHz / (9 + 1) = 1MHz`。这里写入的数是 9，实际做的是十分频。\n\n## 07:14—09:56 · CNT 计数、ARR 周期与 RCR 重复次数\n\nCNT 对分频后的脉冲计数。采用向上计数时，每来一个计数脉冲加 1，达到 ARR 后，下一个脉冲使它溢出并回到 0。\n\n[原片用 ARR=4 展开计数过程](https://www.bilibili.com/video/BV11X4y1j7si/?p=40&t=540)：`0 → 1 → 2 → 3 → 4 → 0`。从初始 0 到下次回到 0 需要五个脉冲，所以一个计数周期对应 `ARR + 1`，不能把 ARR 值直接当成周期包含的脉冲数。\n\n随后老师讲 RCR：在具有重复计数器的高级定时器中，CNT 溢出 `RCR + 1` 次才产生相应更新事件。例如 RCR=1 对应重复两次。这里要区分 CNT 的一次溢出与最终 update 事件；只有确实使用 RCR 的定时器，才再加入这一级重复关系。\n\n## 09:57—12:59 · 用石英手表串起整条计时路径\n\n[看原片手表类比](https://www.bilibili.com/video/BV11X4y1j7si/?p=40&t=660)。32.768kHz 晶振对应时钟源，经过 32768 分频得到 1Hz 秒脉冲；秒针对应 CNT，每来一个脉冲走一格。\n\n秒针从 0 走到 59，再回到 0，一圈是 60 秒，对应 ARR=59。通过这个例子，把三个角色联系起来：来源产生节拍，分频器决定每一步间隔，ARR 决定走多少步回到起点。\n\n## 13:00—14:32 · 向上、向下与中心对齐\n\n[对照三种计数波形](https://www.bilibili.com/video/BV11X4y1j7si/?p=40&t=851)。向上计数从 0 增加到 ARR，再溢出回 0；向下计数从 ARR 递减到 0，再重装；中心对齐则在向上、向下之间交替。\n\n老师说明后续主要采用向上计数。前面 `ARR + 1` 的周期解释针对这一计数过程，不要直接把它当成中心对齐完整往返周期的公式。\n\n## 14:33—17:33 · 原题：TIM3 分辨率 1μs，周期 1ms\n\n[看本节实际计算题](https://www.bilibili.com/video/BV11X4y1j7si/?p=40&t=900)。分辨率是最小计时间隔，相当于秒针走一格的时间；周期是一整圈所需时间。本题要求 CNT 每走一步是 1μs，每 1ms 完成一次计数周期。\n\n1μs 对应 1MHz，因此要先让 PSC 输出 1MHz。原片比较两个假设：如果输入为 10MHz，PSC 应为 9；如果输入为 20MHz，PSC 应为 19。可见必须先算出定时器真实输入频率，才能确定 PSC。\n\n## 17:34—20:01 · TIM3 时钟为何是 72MHz\n\n[回到时钟树计算](https://www.bilibili.com/video/BV11X4y1j7si/?p=40&t=1191)。视频采用模板启动完成后的配置：HCLK=72MHz、PCLK2=72MHz、PCLK1=36MHz。\n\n定时器前面还有自动选择的一倍或两倍通路：\n\n- 相应 APB 分频系数为 1 时，定时器时钟等于该 PCLK。\n- 相应 APB 分频系数不为 1 时，定时器时钟等于该 PCLK 的两倍。\n\nTIM1 所在 APB2 不分频，所以得到 72MHz；TIM2～4 所在 APB1 二分频，所以从 `36MHz × 2` 也得到 72MHz。本题 TIM3 的输入因此是 72MHz，不能直接把 PCLK1 的 36MHz 当成 TIM3 时钟。\n\n## 20:02—23:17 · 从 72MHz 推导 PSC=71、ARR=999\n\n要得到 1MHz 计数节拍，`72MHz / (PSC + 1) = 1MHz`，所以 PSC=71。接着，1ms 等于 1000 个 1μs，需要 `ARR + 1 = 1000`，所以 ARR=999。\n\n[23:00 原图回顾这些值](https://www.bilibili.com/video/BV11X4y1j7si/?p=40&t=1380)。对本题的向上计数，可整理为：\n\n```text\n计数节拍 = 72MHz / (71 + 1) = 1MHz\n一步时间 = 1 / 1MHz = 1μs\n计数周期 = (999 + 1) × 1μs = 1ms\n```\n\n原片还在通用示意图的 RCR 虚线框旁写了 RCR=0，表示不额外重复。应结合前面的虚线说明理解：TIM3 本身没有 RCR，实际配置 TIM3 时不能另写一个不存在的重复计数器；PSC=71、ARR=999 才是这道 TIM3 时基题的参数结果。\n\n## 23:18—26:25 · 运行中把 ARR 从 7 改成 3 会怎样\n\n视频最后研究预加载。[先看未使用预加载的波形](https://www.bilibili.com/video/BV11X4y1j7si/?p=40&t=1531)：原先 ARR=7，CNT 从 0 数到 7 后回到 0；下一轮数到 5 时，软件突然把 ARR 改为 3。\n\n如果新值立即生效，CNT 已经超过新的上限 3，本轮无法再按预期在 3 处结束，而要继续计数，直到 16 位计数器的最大值 65535 后才回到 0。老师用这个异常变长的周期说明，为什么运行中改周期需要考虑新参数的生效时刻。\n\n## 26:26—28:22 · 让新 ARR 等到更新事件再生效\n\n[对照加入预加载后的两条线](https://www.bilibili.com/video/BV11X4y1j7si/?p=40&t=1672)。软件写入 3 时，先保存新值；当前周期仍按 ARR=7 运行。等本轮完成、发生 update 后，新值才成为实际使用的 ARR，下一轮按 0～3 计数。周期就能从八个计数节拍过渡到四个，不出现中间异常拉长的一轮。\n\n原片用黑线表示“刚写入但未生效”的值、红线表示“当前生效”的值，这两条线的行为可以直接对照上面过程。术语需与手册区分：原片把写入缓存标成 Shadow，而 [ST RM0008 时基单元说明](https://www.st.com/resource/en/reference_manual/rm0008-stm32f101xx-stm32f102xx-stm32f103xx-advanced-arm-based-32-bit-mcus-stmicroelectronics.pdf)将软件访问的部分称为 preload，并把更新后实际使用的副本称为 shadow。本节记住“先暂存、更新时生效”的机制，避免被原图名称混淆。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1701.4613125,
        "asrSegments": 632,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "1d159511224c05b8361202f22b4770109d3e7cfdcf817042dd762537a0344743",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 41,
      "phase": "tim",
      "title": "9.2 [定时器] 自制延迟函数",
      "duration": 1443,
      "summary": "按原UserDelay工程顺序先定义毫秒currentTick和App_Delay，再配置TIM3的71/999时基、更新中断与NVIC，写原TIM3_IRQHandler，最后用500ms闪灯及两短一长序列验证。",
      "notes": "完整跟随五部分：先计时与延迟函数，再时基、更新中断、NVIC和处理函数，最后板载灯测试。原参数名ms、expireTime、currentTick及App_TIM3_TimeBaseInit均保留。12:40和18:18原图确认未填TIM_ClockDivision；22:20原图确认LED初始化完整含GPIO_Init与Bit_SET。",
      "points": [
        "volatile uint32_t currentTick由每1ms的更新中断递增",
        "原App_Delay先算expireTime=currentTick+ms再忙等，保留其回绕边界局限",
        "App_TIM3_TimeBaseInit配置TIM3时钟、PSC71/ARR999/Up并启动",
        "TIM_ITConfig使能Update，NVIC分组2、TIM3_IRQn及优先级0/0",
        "原TIM3_IRQHandler先GetFlagStatus，再ClearFlag，再currentTick++",
        "原录入遗漏ClockDivision默认初始化，教材补充与原摘录明确区分"
      ],
      "cid": 26164658846,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 420,
            "observation": "PPT原App_Delay(uint32_t ms)、expireTime与currentTick比较，volatile全局变量。",
            "frameSha256": "937b30a26ba44a0d03e19362d7026d28c596757d690e8d90e22cc68c5858ec57"
          },
          {
            "seconds": 660,
            "observation": "时基接口TIM_TimeBaseInit、TIM_Cmd签名及PSC71/ARR999。",
            "frameSha256": "11b4297c7155ea7ac986a4adfa09d15f05ea91284967f592935a91ff84e726be"
          },
          {
            "seconds": 720,
            "observation": "IDE PSC71、Period999、CounterMode_Up及结构体成员选择。",
            "frameSha256": "557f184511883b24e4a196ca28f9002c2f3272cfe00a6c39b4d768892ce8b61e"
          },
          {
            "seconds": 760,
            "observation": "IDE完整已填四字段、调用TimeBaseInit，未先默认初始化或填ClockDivision。",
            "frameSha256": "cbdf7588aaa3e6a30eed5d290c89f55822d8b9e28e198c910a0669696c6ad1e1"
          },
          {
            "seconds": 900,
            "observation": "TIM_ITConfig签名、选择TIM_IT_Update及通向NVIC的三个配置步骤图。",
            "frameSha256": "5b871dda2f9e585d809306bb9bce976d86f804800d2a1d7c9d2e9fec7747915f"
          },
          {
            "seconds": 960,
            "observation": "IDE原App_TIM3_TimeBaseInit含TIM_Cmd与TIM_ITConfig，仍未填ClockDivision。",
            "frameSha256": "b02f4cd0db5d37dc7b9cb5877c3749202b0b52ba1b4b114400da998de5996a56"
          },
          {
            "seconds": 1080,
            "observation": "IDE正在填写TIM3_IRQn、抢占0，子优先级尚在录入。",
            "frameSha256": "0e856882dac1f025b7392f359de84003bb252d16e7afff97280e2c6c3f2952c8"
          },
          {
            "seconds": 1098,
            "observation": "IDE最终NVIC TIM3_IRQn、抢占0/子0、ENABLE，调用NVIC_Init。",
            "frameSha256": "782ccbebbd71c3e76894193f6359c34cdc4e7ff1e7b19b5d07c5cb7610ff559c"
          },
          {
            "seconds": 1200,
            "observation": "PPT原TIM3_IRQHandler：GetFlagStatus、ClearFlag、currentTick++。",
            "frameSha256": "946b10841330498871dc913fe9f0d83e0b3cc7c8012b7ccde3be5c6cec969e8d"
          },
          {
            "seconds": 1320,
            "observation": "IDE中断函数已完整，PC13初始化还在录入过程。",
            "frameSha256": "2dc70a325a91b1754e5717c6271bffbb629c9014114197ebac5731dc27022927"
          },
          {
            "seconds": 1330,
            "observation": "IDE LED函数确有GPIO_Init(GPIOC,&GPIO_InitStruct)，开始初始灭灯语句。",
            "frameSha256": "caf2d1ff4833b76f745c02244e8d2cb2e4f6077b5bd9e4af29c7e06b617cc261"
          },
          {
            "seconds": 1340,
            "observation": "IDE LED初始化完成：PC13 Out_OD2MHz、GPIO_Init及Bit_SET。",
            "frameSha256": "e0162c2a42c6188cad4dd9ed82a01e044bf53476a7e2fbec243e0d759f632641"
          },
          {
            "seconds": 1380,
            "observation": "main分组2，先TIM3初始化再LED初始化，亮/灭各App_Delay500。",
            "frameSha256": "fb6ddb512ad0896eea7c7b9d5ba237f7c73c0ef968e07cbd22e06c4ab1728664"
          },
          {
            "seconds": 1413,
            "observation": "IDE复制闪灯序列以便改两短一长，仍为中间500ms参数。",
            "frameSha256": "9374843bdd61997b8b24d2857f966eca349b8d271deeeff18810cf4afcb02d09"
          },
          {
            "seconds": 1428,
            "observation": "最终再次复位观察板载灯的实物演示。",
            "frameSha256": "10b5c9d80a43765d8b0341edf5890821f9f753f09892194b961bb20b8c6c3fc7"
          }
        ]
      },
      "learningNotes": "## 00:29—02:13 · 从现成 Delay 转向 TIM3 自制延时\n\n老师先回顾板载灯闪烁实验。之前提供的 `Delay` 基于内核 SysTick；本节则从 TIM1～4 中选择 TIM3，用普通外设定时器实现延时。讲解顺序是“取得当前时间 → 写延时函数 → 初始化时基 → 配置中断 → 编写中断函数”，最后再用灯验证。\n\n## 02:14—04:40 · 每毫秒中断一次，累计 currentTick\n\n[先看毫秒计时思路](https://www.bilibili.com/video/BV11X4y1j7si/?p=41&t=144)。输入为 72MHz，PSC=71 后得到 1MHz，即每个计数节拍为 1μs；ARR=999 后，每 1000 个节拍更新一次，也就是 1ms。\n\n老师让这个更新事件产生中断，并声明原变量：\n\n```c\nvolatile uint32_t currentTick = 0;\n```\n\n每发生一次更新中断，就让 `currentTick++`。它记录的是本程序累计的毫秒数，例如累计 5 次就是 5ms，而不是日历日期。`volatile` 让主程序反复读取这个可由中断修改的变量，后面的等待循环才能观察到数值变化。\n\n## 04:41—07:49 · 建立 UserDelay，先实现 App_Delay\n\n老师从模板建立 `UserDelay`，先把全局 `currentTick` 写进 `main.c`。他暂时把定时器初始化与中断代码放到后面，先说明有了毫秒计数如何等待。\n\n[07:00 的原函数](https://www.bilibili.com/video/BV11X4y1j7si/?p=41&t=420)为：\n\n```c\nvoid App_Delay(uint32_t ms)\n{\n    uint32_t expireTime = currentTick + ms;\n    while (currentTick < expireTime);\n}\n```\n\n`ms` 是要求延迟的毫秒数，`expireTime` 是“当前毫秒数加延迟量”得到的结束时刻。空的 `while` 循环持续读取 `currentTick`，直到它达到结束时刻才返回。程序在这里忙等，时间推进依赖后面配置的 TIM3 中断继续执行。\n\n这段保留原片写法。用于长期运行程序时，还需处理 `uint32_t` 计数回绕：直接加结束时刻并比较大小，不覆盖跨回绕边界的延时情况。本片演示的短时闪灯没有验证这个边界。\n\n## 07:50—09:39 · 声明 App_TIM3_TimeBaseInit 并开时钟\n\n[开始配置 TIM3](https://www.bilibili.com/video/BV11X4y1j7si/?p=41&t=540)。原函数名称是 `App_TIM3_TimeBaseInit`。老师先列三步：开启 TIM3 时钟，配置时基参数，启动定时器。\n\nTIM3 在 APB1，因此第一行使用：\n\n```c\nRCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM3, ENABLE);\n```\n\n这里开启的是外设工作时钟，还没有开启更新中断或 NVIC 通道。\n\n## 09:40—12:43 · 填写 TIM_TimeBaseInitTypeDef\n\n老师介绍 `TIM_TimeBaseInit`：第一个参数选择定时器，第二个参数是时基初始化结构体指针。[16:00 后续完整参数画面对照](https://www.bilibili.com/video/BV11X4y1j7si/?p=41&t=960)如下：\n\n```c\nTIM_TimeBaseInitTypeDef TIM_TimeBaseInitStruct;\nTIM_TimeBaseInitStruct.TIM_Prescaler = 71;\nTIM_TimeBaseInitStruct.TIM_Period = 999;\nTIM_TimeBaseInitStruct.TIM_CounterMode = TIM_CounterMode_Up;\nTIM_TimeBaseInitStruct.TIM_RepetitionCounter = 0;\nTIM_TimeBaseInit(TIM3, &TIM_TimeBaseInitStruct);\n```\n\n`TIM_Prescaler` 对应 PSC，`TIM_Period` 对应 ARR，`TIM_CounterMode_Up` 选择向上计数。因此本例更新周期按 `72MHz / 72 / 1000` 算为每秒 1000 次。\n\n结构体里包含 `TIM_RepetitionCounter`，原片填写了 0；但 TIM3 没有硬件 RCR，标准库也只向具备该功能的定时器写 RCR，不能把这个成员名当成 TIM3 硬件存在重复计数器的证据。\n\n这里还有一处原片遗漏：老师在 12:19 左右表示 `TIM_ClockDivision` 先不用设置，画面也未先做结构体默认初始化。标准库 `TIM_TimeBaseInit` 实际仍读取这个成员，因此把自动局部变量留为未初始化值不可靠。教材更正应先用 `TIM_TimeBaseStructInit` 初始化全部成员，或明确填写所需字段（本例可用 `TIM_CKD_DIV1`）；上面摘录保留原片状态，没有将更正冒充作者已录入的代码。\n\n## 12:44—13:40 · 启动计数，并在 main 调用初始化\n\n第三步使用原接口：\n\n```c\nTIM_Cmd(TIM3, ENABLE);\n```\n\n`ENABLE` 让定时器开始运行，`DISABLE` 则停止。老师随后在 `main` 调用 `App_TIM3_TimeBaseInit()`，但此时还不能只靠 `App_Delay` 完成等待：仍需把更新事件连接到中断，再在处理函数中递增 `currentTick`。\n\n## 13:41—15:41 · 使能定时器内部的更新中断\n\n[先打开 Update 标志到中断的开关](https://www.bilibili.com/video/BV11X4y1j7si/?p=41&t=900)。原调用是：\n\n```c\nTIM_ITConfig(TIM3, TIM_IT_Update, ENABLE);\n```\n\n第一个参数选择 TIM3，第二个选择更新中断源，第三个使能。老师把它接着写在 `App_TIM3_TimeBaseInit` 中，作为第四步。图上还有 Trigger、CC1 等其他中断来源，本实验只开启 Update。\n\n## 15:42—18:20 · 分组 2 与 TIM3_IRQn\n\n视频回到 main 设置全局分组；[23:00 最终 main 对照](https://www.bilibili.com/video/BV11X4y1j7si/?p=41&t=1380)仍保留这行：\n\n```c\nNVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);\n```\n\n然后在时基初始化函数末尾增加第五步，配置 NVIC。通道名从 `stm32f10x.h` 的中断编号枚举中查得，采用 `TIM3_IRQn`；抢占优先级和子优先级均填写 0，并使能通道：\n\n```c\nNVIC_InitStruct.NVIC_IRQChannel = TIM3_IRQn;\nNVIC_InitStruct.NVIC_IRQChannelPreemptionPriority = 0;\nNVIC_InitStruct.NVIC_IRQChannelSubPriority = 0;\nNVIC_InitStruct.NVIC_IRQChannelCmd = ENABLE;\nNVIC_Init(&NVIC_InitStruct);\n```\n\n因此这里有两个不同层次的开关：`TIM_ITConfig` 打开 TIM3 内部更新中断源，NVIC 配置则允许这个中断通道交给内核处理。\n\n## 18:21—20:41 · 从向量表找到 TIM3_IRQHandler\n\n老师再次打开启动文件，从向量表复制原函数名 `TIM3_IRQHandler`，在 `main.c` 实现。[原处理代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=41&t=1200)是：\n\n```c\nvoid TIM3_IRQHandler(void)\n{\n    if (TIM_GetFlagStatus(TIM3, TIM_FLAG_Update) == SET)\n    {\n        TIM_ClearFlag(TIM3, TIM_FLAG_Update);\n        currentTick++;\n    }\n}\n```\n\nTIM3 多种标志可能共用中断，因此先确认 Update 标志；确认后先清标志，再执行本实验真正需要的工作——毫秒数加 1。这里使用原片的 `TIM_GetFlagStatus`、`TIM_ClearFlag`，不要与其他名称相近的中断接口混写成作者原代码。\n\n## 20:42—23:24 · 初始化板载灯，验证亮灭各 500ms\n\n老师接着增加 `App_OnBoardLED_Init`，配置 PC13 为开漏输出、2MHz，并使灯初始熄灭。最终 `main` 先设中断分组，再调用 TIM3 初始化、板载灯初始化。\n\n[23:00 的测试循环](https://www.bilibili.com/video/BV11X4y1j7si/?p=41&t=1380)如下：\n\n```c\nGPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_RESET);\nApp_Delay(500);\nGPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET);\nApp_Delay(500);\n```\n\n编译、下载、复位后，原片观察到灯亮约 500ms、灭约 500ms，约一秒完成一次闪烁。这验证了视频当前配置下毫秒中断、软件计数与等待函数之间的连接。\n\n## 23:25—24:03 · 改成两次短闪、一次长闪\n\n最后老师将闪灯序列改为前两次亮 50ms，最后一次亮 500ms，再次下载观察。修改的是主循环调用 `App_Delay` 的参数和亮灭序列，TIM3 的 1ms 基准与 `currentTick` 递增方式仍然沿用前面代码。\n\n跟着这一节调试时，按原片的顺序检查整条链：TIM3 时基产生更新 → 更新中断使能 → NVIC 放行 → 处理函数清标志并递增 `currentTick` → `App_Delay` 等待计数达到结束时刻。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1442.56,
        "asrSegments": 542,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "dd093836947728a2fc80d31d425858f55981832d61dc9fb59d39adcbe8b5f0ae",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 42,
      "phase": "tim",
      "title": "9.3 [定时器] 输出比较",
      "duration": 1277,
      "summary": "按原片五部分，从四通道和PWM面积例子，推导ARR/CCR占空比，再辨别八模式、互补输出和极性。",
      "notes": "全片为概念与原图讲解，无初始化代码。保留原PWM计算、八模式和同步Buck例子；明确区分作者已修正的PWM边界与尚需按ST手册纠正的匹配模式。",
      "points": [
        "输入捕获测时间，输出比较产生定时波形",
        "PWM占空比为TH/T，原3.3V面积例子不是引脚恒定直流",
        "ARR9共10份，CCR3/4/5依次30%/40%/50%",
        "Active/Inactive原图有错，匹配是置有效或无效而非单拍脉冲",
        "作者13:36修正PWM1为CNT<CCR，等于时无效",
        "沿OCxREF的两条路径和各自极性判断实际输出关系"
      ],
      "cid": 26714769572,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 120,
            "observation": "四通道图含CCR、输入捕获与输出比较，虚线标高级功能。",
            "frameSha256": "07fbde279a45e2145b0d1ee9110cf14befea2ce124aa16db9aa61160ca4b4d27"
          },
          {
            "seconds": 180,
            "observation": "五部分目录，先简介与PWM再模式、互补、极性。",
            "frameSha256": "365d8717b0203751dd30a3685beae42e340a72bdf35088818f6f5fd065683cc3"
          },
          {
            "seconds": 300,
            "observation": "PWM五组占空比及3.3V等效电压。",
            "frameSha256": "f8474be73faab76fe5b3ccfab0e281ee262b20570495f51ca310301d289313f3"
          },
          {
            "seconds": 420,
            "observation": "ARR9、CCR1为3和30%波形，边界须以后文修正为准。",
            "frameSha256": "ee651292522d67c07eeca6d2d869c95ceb1b5542ddd579370e4a050e6ced3503"
          },
          {
            "seconds": 480,
            "observation": "转入五部分目录第三项。",
            "frameSha256": "e274ea7881c5d111b61b44e10a5e836f536ff64662fe42af86c070af30a785de"
          },
          {
            "seconds": 540,
            "observation": "OCxREF名称和模式、极性、使能三块。",
            "frameSha256": "03720f49821f898995588358fcc6155ef0b8b0091471cf67c842084c5bea54ec"
          },
          {
            "seconds": 600,
            "observation": "原八模式总表，Active/Inactive错误窄脉冲及PWM错误小于等于可见。",
            "frameSha256": "4f3e03be370c61be82965b036b9c33d89bc44b637539f8d41be2cc0168d0ee36"
          },
          {
            "seconds": 720,
            "observation": "作者沿相等点解说Active/Inactive的原错误波形。",
            "frameSha256": "24b145c506b6bf072dffeecd548557acf42592442f14624476c6d4410c662098"
          },
          {
            "seconds": 840,
            "observation": "PWM两行已改成严格小于，原表前两匹配模式仍未修正。",
            "frameSha256": "b794d147a8552bf28a5e160ac62af16709d81b80486477cd3cbfbcbc39ac6702"
          },
          {
            "seconds": 960,
            "observation": "正常和互补路径，此时极性部分被遮住。",
            "frameSha256": "e238ee6a1a233323c373dafb0d1cc5ff208a36c8e03ba12232bc3b1c2b2578a4"
          },
          {
            "seconds": 1080,
            "observation": "同步Buck的12V转3.3V、两开关、电感电容。",
            "frameSha256": "fdb7c94cdbd7cf8938b4bb532e09015777d52e1bba796f9d7247d1d9fd19ac9a"
          },
          {
            "seconds": 1200,
            "observation": "正常与互补各自的极性选择。",
            "frameSha256": "7a9d328360c596607ed855a03f5e03dba2955337f1ac7afa3588257da2f6230a"
          },
          {
            "seconds": 1260,
            "observation": "互补路径已有反相器，加第二次反相可与参考同相。",
            "frameSha256": "7b8dbdacec346bbb3226b1889bab44d522e22f37d59ff61b0a5978a569be44ba"
          }
        ]
      },
      "learningNotes": "## 00:00—01:03 · 本节沿五部分认识输出比较\n\n作者先回到定时器总图：前两节学过时基单元，这节转向通道里的输出比较，按简介、PWM例子、八种模式、互补输出、极性选择展开。全片是框图和波形讲解，没有编写PWM初始化程序；下一节才把这些选择落实为库函数参数。\n\n## 01:04—02:58 · 从四个通道找到CCR与输出比较\n\n[视频02:00：原定时器四通道框图](https://www.bilibili.com/video/BV11X4y1j7si/?p=42&t=120)。每个通道中间是捕获/比较寄存器CCRx，x对应通道编号。图的左侧输入捕获用于测量外部信号的周期、占空比等时间参数，右侧输出比较用于根据定时器产生定时波形，再通过引脚输出。\n\n这里先区分测量与产生信号，尚未讲输入捕获的具体操作。图中虚线标注的重复计数器、互补输出和MOE属于高级定时器功能，不能把这张家族结构图理解成TIM2、TIM3等也都有同样的互补引脚。\n\n## 02:59—05:46 · PWM原例：周期固定，改变高电平比例\n\nPWM在原图中展开为Pulse Width Modulation。作者先固定周期T，再改变高电平持续时间TH，用TH/T表示占空比。3.3V与0V切换的例子依次给出：0%对应平均0V，25%对应0.825V，50%对应1.65V，75%对应2.475V，100%对应3.3V。[视频05:00：占空比和等效电压原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=42&t=300)。\n\n这里的“等效电压”是按面积求平均的解释：PWM引脚瞬时仍在高、低电平间切换，不能把25%占空比直接当成引脚持续输出0.825V直流。原片用它说明没有DAC时如何理解PWM的调节作用，本节并未搭建滤波电路或测量模拟输出。\n\n## 05:47—07:58 · ARR=9、CCR1=3如何得到30%\n\n作者抽出时基单元和通道1，令CNT向上计数，ARR写9，因此一个周期包括0到9共10个计数状态。CCR1写3，把它画成水平比较线；按本节后半修正后的PWM1条件，CNT为0、1、2时参考输出有效，从3开始无效，高电平占3份，因此占空比3/10=30%。\n\n继续把CCR改成4、5，原例得到40%、50%，ARR保持9，所以周期没有改变。不要把ARR的数值9当成只有9份，也不要把CNT=CCR的那一份误算进PWM1高电平。[视频07:00：ARR与CCR比较原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=42&t=420)。早期图和后面的总表有波形边界错误，作者13:36明确回头修正，下面以修正后的严格小于条件为准。\n\n## 07:59—10:58 · 参考信号、极性与使能是不同环节\n\n输出比较框图被分成模式选择、极性选择、输出使能。模式选择根据CNT与CCRx产生OCxREF，名称中的OC是Output Compare，x是通道号，REF是Reference，即该通道的输出比较参考信号。\n\n[视频09:00：沿OCxREF向右读框图](https://www.bilibili.com/video/BV11X4y1j7si/?p=42&t=540)。OCxREF处于内部参考位置，之后还要经过极性和使能，才到实际输出。原片列出Frozen、Active On Match、Inactive On Match、Toggle、Force Inactive、Force Active、PWM1、PWM2八种模式，并把PWM1作为学习重点。\n\n## 10:59—13:28 · 前六种模式与原片需纠正的一处\n\n冻结模式保持OCxREF不变；翻转模式在每次CNT与CCR匹配时改变一次参考状态；强制无效、强制有效则直接把参考状态设为无效或有效。这些模式与周期内持续比较大小的PWM模式要分开理解。\n\n原片11:40—12:17把Active On Match画成“相等时高，否则低”的窄脉冲，把Inactive On Match画成相反波形。**教材更正：这两种模式是在匹配事件发生时分别把OCxREF置为有效、无效；并不会仅因下一拍不再相等，就自动恢复相反状态。** 不能照着原总表的这两行推导脉冲宽度。ST的OCxM定义是匹配时置位或清零，而Toggle才是匹配时翻转。[对照原片12:00](https://www.bilibili.com/video/BV11X4y1j7si/?p=42&t=720)，寄存器含义据[ST RM0008参考手册的TIMx_CCMR1输出模式定义](https://www.st.com/resource/en/reference_manual/rm0008-stm32f101xx-stm32f102xx-stm32f103xx-stm32f105xx-and-stm32f107xx-advanced-armbased-32bit-mcus-stmicroelectronics.pdf)。\n\n## 13:29—14:49 · 作者修正PWM边界：是小于，不是小于等于\n\n13:36作者指出刚才波形画错，并替换图中的PWM两行。13:48再次强调PWM1使用CNT<CCR，而不是CNT≤CCR：向上计数时，小于则OCxREF有效，大于等于则无效；PWM2的有效、无效关系反过来。\n\n[视频14:00：已修正的PWM总表](https://www.bilibili.com/video/BV11X4y1j7si/?p=42&t=840)。这正好解释前面的ARR=9、CCR=3为什么是30%，而不是40%。该条件对应本例向上计数，不能不加区分地套到所有计数方向与对齐方式。\n\n## 14:50—17:12 · 正常输出和互补输出的两条路径\n\n作者回到四通道图，指出前三个通道分别有CH1/CH1N、CH2/CH2N、CH3/CH3N；第四通道没有在图中画出互补端。随后暂时遮住极性选择，单看OCxREF分出的两路：正常路径直接通过，互补路径先经过反相器，所以在该简化条件下两路电平相反。\n\n[视频16:00：正常与互补路径](https://www.bilibili.com/video/BV11X4y1j7si/?p=42&t=960)。这段只是在建立基本关系，最后还会揭开极性选择继续分析。不能在此提前得出“无论怎么配置，两个引脚都必然相反”的结论。\n\n## 17:13—19:06 · 同步Buck解释为何需要两路控制\n\n原片举同步Buck降压电源：输入12V，经两个交替导通的开关及电感、电容，给负载提供3.3V。上面的开关闭合时，下面断开；上面断开时，下面闭合。作者借两条相反的控制波形说明正常PWM和互补PWM的用途，随后提到电机电路也常见这样的开关对。\n\n[视频18:00：原同步Buck电路](https://www.bilibili.com/video/BV11X4y1j7si/?p=42&t=1080)。这是原理示例，没有在本节完成电源硬件、驱动或死区调试，不能把它写成已运行成功的STM32电源实验。\n\n## 19:07—21:15 · 极性选择会进一步改变输出关系\n\n最后揭开框图中的极性选择。正常输出选高极性时不再反相，选低极性时多经过一次反相。互补支路前面已有一个反相器，若其极性选择再加一次反相，两次反相抵消，此时它可以与OCxREF同相。\n\n[视频20:00：两路各自的极性选择](https://www.bilibili.com/video/BV11X4y1j7si/?p=42&t=1200)。因此读最终波形，要从模式产生的OCxREF出发，沿各自支路数反相，再看输出使能。片尾到这里结束；代码配置留到下一节PWM实验。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1276.6933125,
        "asrSegments": 497,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "3284f40ddd86779a3a97038b503aca8bf6788d0238867dfd3b10306a1c0ffc3e",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 43,
      "phase": "tim",
      "title": "9.4 [定时器] 呼吸灯实验",
      "duration": 2150,
      "summary": "按BreathingLED原工程顺序从正弦占空比推导出发，查PA8/PB13与AF_PP，配置TIM1的1μs/1ms时基、PWM1正常/互补输出和MOE，再用GetTick、sin及TIM_SetCompare1更新CCR1并观察红蓝灯。",
      "notes": "完整跟随原片的BreathingLED工程，保留原App_PWM_Init、GetTick、sin、ccr1与TIM_SetCompare1。原片31:09实写TIM_CCPreloadControl(TIM1,ENABLE)，并非CCR1数值预加载，本页保留摘录并明确教材更正。时基与OC结构体漏默认初始化的实际问题也单独说明，不把补充当成视频原代码。",
      "points": [
        "TIM1_CH1=PA8、CH1N=PB13，正常红灯与互补蓝灯，均AF_PP2MHz",
        "duty=0.5*(sin(2πt)+1)，载波周期1ms与呼吸变化周期分开",
        "TIM1 APB2时钟72MHz，PSC71/ARR999/Up/RCR0并开启ARR预加载",
        "原TIM_OC1Init选择PWM1、两路高极性和使能，TIM_CtrlPWMOutputs打开MOE",
        "原TIM_CCPreloadControl与真正CCR1预加载接口差异明确核实并更正",
        "原主循环GetTick乘1e-3、sin(2*3.14*t)、ccr1=duty*1000、SetCompare1"
      ],
      "cid": 26755662507,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 120,
            "observation": "原正弦0.5(sin2πt+1)与PWM周期1ms推导图。",
            "frameSha256": "047f6ae545c2ea2bda41df014aca0f94893a63caaac0c51cf1a1535cf9899853"
          },
          {
            "seconds": 480,
            "observation": "两路LED各1k电阻，正常与互补输出接灯到地。",
            "frameSha256": "441c9175c7bd2728c06dbef2e4442c1a4c7639a8a4d533e084a0ae877114c3fd"
          },
          {
            "seconds": 600,
            "observation": "原表19 CHx输出比较和CHxN均推挽复用输出。",
            "frameSha256": "a4558fb589585ccf0a0ff43a428036e749e9e40dcc2ee126679192eb35cda226"
          },
          {
            "seconds": 780,
            "observation": "IDE BreathingLED原App_PWM_Init、PA8 AF_PP/2MHz。",
            "frameSha256": "e80c6a780de5a4b662fdc2608b1324d5d1251c1cfef94e28201c109b81850041"
          },
          {
            "seconds": 1140,
            "observation": "PB13 AF_PP/2MHz及TIM1 APB2时钟开启。",
            "frameSha256": "1069ce9428619ca365e39574fce4188dd94a50c0b3d5e84b9fbe4cb01905a116"
          },
          {
            "seconds": 1200,
            "observation": "时基结构体Up、Period999、Prescaler71、开始填RCR，未初始化ClockDivision。",
            "frameSha256": "6a9ecb4e70bd0f1c2556ff59cfa5ba80879623fb43a95c4e602042d322262055"
          },
          {
            "seconds": 1320,
            "observation": "原ARR预加载ENABLE已录入。",
            "frameSha256": "4344c98176b0ea0dcd67f7796b3458bc75bb34555df04146ddd1a2e5d2b67bd0"
          },
          {
            "seconds": 1560,
            "observation": "原输出通道结构、TIM_OC1Init与CtrlPWMOutputs接口。",
            "frameSha256": "85ae07f4e5b85ed8f374042c188e44cdc7c5661a3c68a82091045fa752d8e59f"
          },
          {
            "seconds": 1740,
            "observation": "OC结构体PWM1、OCNHigh、OCHigh、OutputN/Output使能，录入Pulse。",
            "frameSha256": "2067e403ce4bb1e38fd7664e85b3829afdb5c8250d5f0d71caa6d9505dc119c9"
          },
          {
            "seconds": 1800,
            "observation": "回看时基四字段完整，仍无ClockDivision赋值。",
            "frameSha256": "5374b4485e0edb0af05d69d6b4bfd0e838b0e88096f5e4e3db89c4a0ca0ac4b0"
          },
          {
            "seconds": 1860,
            "observation": "OC六个字段完整、MOE已使能，开始录入CCPreloadControl。",
            "frameSha256": "e6b6938c05d8b87c0897424f81296d1e494a486dedaf2d33a0c230c78576d840"
          },
          {
            "seconds": 1865,
            "observation": "CCPreloadControl第一参数录入TIM1的中间画面。",
            "frameSha256": "6becdcc6a69e2a3f248ead42d3d833d726383124b252d12d9670917a312c61c9"
          },
          {
            "seconds": 1867,
            "observation": "CCPreloadControl(TIM1,EN...)参数录入中。",
            "frameSha256": "34687da59edb5427e86faeb7b139e89806345f2b8c8492a22839d46c14788d6a"
          },
          {
            "seconds": 1869,
            "observation": "完整原行TIM_CCPreloadControl(TIM1, ENABLE)，不是OC1PreloadConfig。",
            "frameSha256": "a2b20e735c1fc99f62d85f0e7b0d827798920a73649ad4155b9909c694eb8c42"
          },
          {
            "seconds": 1870,
            "observation": "已切回CCR1与周期的原图，31:10不是代码画面。",
            "frameSha256": "1cf544e6bec7dd863b91e8feb3db0983370089fe98c7cbca674ccc70d987d3d2"
          },
          {
            "seconds": 1920,
            "observation": "引用delay.h，main已调用App_PWM_Init，开始在while取时间。",
            "frameSha256": "07eb30c2e9fe440398ac3eb36bdbeb40e41141d5efdef3adf26bcd8cde64e9b7"
          },
          {
            "seconds": 1980,
            "observation": "主循环GetTick()*1.0e-3f和0.5*(sin(2*3.14*t)+1)。",
            "frameSha256": "9f3be24c4c2da0488a12b258f2da8aa7f7eafde31b621ac82c831ce0fe39481d"
          },
          {
            "seconds": 2040,
            "observation": "原SetCompare1接口，1000计数周期、CCR1控制有效时间的图。",
            "frameSha256": "f36550310d97db989e97d6e6b3d4caff9e84049993d974ce30a326a2df5a4121"
          },
          {
            "seconds": 2100,
            "observation": "完整主循环含uint16_t ccr1=duty*1000与TIM_SetCompare1(TIM1,ccr1)，开始编译。",
            "frameSha256": "08925bce6190dc4e4d9f862287d405f1a5d627e42203ba09520b741bf35234e3"
          }
        ]
      },
      "learningNotes": "## 00:28—04:09 · 两颗灯反向呼吸，占空比按正弦变化\n\n本节用 TIM1 通道 1 的正常输出驱动红灯，互补输出驱动蓝灯。目标是两灯一明一暗地连续变化。[先看原片推导](https://www.bilibili.com/video/BV11X4y1j7si/?p=43&t=120)：`sin(2πt)` 的范围为 -1～1，加 1 后为 0～2，再乘 0.5，得到 0～1 的占空比。\n\n```text\nduty = 0.5 × (sin(2πt) + 1)\nPWM周期 = 1ms\n```\n\nPWM 本身的周期是 1ms，即 1kHz；缓慢变化的是它的占空比。两个时间尺度要分清：用快速高低电平调节亮度，用较慢的正弦规律形成呼吸效果。\n\n## 04:10—08:38 · 查 TIM1 引脚，按原图接 PA8 与 PB13\n\n老师先查定时器引脚分布表。本实验不进行重映射，TIM1_CH1 正常输出是 PA8，TIM1_CH1N 互补输出是 PB13。部分重映射与完全重映射仅用来读表，本次电路沿用默认位置。\n\n[对照两路 LED 电路](https://www.bilibili.com/video/BV11X4y1j7si/?p=43&t=480)：正常输出接红灯，互补输出接蓝灯，两路都串 1kΩ 限流电阻，LED 阴极接地。原片接线时提醒长脚为正极，先辨认方向再插到面包板上。\n\n## 08:39—13:33 · 两个引脚均为复用推挽输出\n\n[从 GPIO 配置表确认模式](https://www.bilibili.com/video/BV11X4y1j7si/?p=43&t=600)。TIM1_CH1 作为输出比较、CH1N 作为互补输出时，都使用 `GPIO_Mode_AF_PP`。视频选 2MHz 的 GPIO 输出速度，以配合本例较低的 PWM 频率。\n\n老师建立 `BreathingLED` 工程，声明并实现原函数 `App_PWM_Init()`。先开 GPIOA 时钟，配置 PA8，再复制配置代码，改端口与引脚为 GPIOB、PB13，并开启 GPIOB 时钟。原片参数摘录为：\n\n```c\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_8;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_AF_PP;\nGPIO_InitStruct.GPIO_Speed = GPIO_Speed_2MHz;\nGPIO_Init(GPIOA, &GPIO_InitStruct);\n```\n\nPB13 同样使用 `AF_PP` 与 2MHz，调用 `GPIO_Init(GPIOB, ...)`。这里输出由 TIM1 外设驱动，因此使用复用输出模式。\n\n## 13:34—17:37 · 推导 TIM1 时基参数\n\n视频回到 PWM 波形：ARR 决定周期，CCR1 决定一个周期中有效部分的长度。老师给出本例要求：计数分辨率 1μs、PWM 周期 1ms。\n\nTIM1 位于 APB2；本模板配置 PCLK2=72MHz，APB2 不分频，定时器输入因此为 72MHz。要得到 1MHz 计数节拍，PSC=71；要累计 1000 个 1μs 节拍，ARR=999。计数方向选向上。\n\n本次确实使用高级定时器 TIM1，因此原图虚线框中的 RCR 有效，老师将它设为 0，表示每次计数溢出都产生更新事件。\n\n## 17:38—20:11 · 在 App_PWM_Init 中配置时基\n\n[原片先开启 TIM1 时钟](https://www.bilibili.com/video/BV11X4y1j7si/?p=43&t=1140)：\n\n```c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_TIM1, ENABLE);\n```\n\n再声明 `TIM_TimeBaseInitTypeDef TIM_TimeBaseInitStruct`，依次填写向上计数、Period=999、Prescaler=71、RepetitionCounter=0，最后调用：\n\n```c\nTIM_TimeBaseInit(TIM1, &TIM_TimeBaseInitStruct);\n```\n\n该段沿用原视频的结构体填写过程；与上一节一样，原片没有完整初始化 `TIM_ClockDivision`，本页在后面的结构体更正处一并说明。\n\n## 20:12—22:41 · 补上 ARR 预加载，再启动时基\n\n老师接着补讲此前漏掉的 ARR 预加载：预加载使新参数在适当更新边界生效。[22:00 画面中的原调用](https://www.bilibili.com/video/BV11X4y1j7si/?p=43&t=1320)为：\n\n```c\nTIM_ARRPreloadConfig(TIM1, ENABLE);\nTIM_Cmd(TIM1, ENABLE);\n```\n\n先开启 ARR 的预加载，再启动时基。PSC、ARR、RCR 的工作原理沿用前面时基单元一课。\n\n## 22:42—25:59 · 分析输出比较通道的各个开关\n\n原片从 CCR1 开始向右读输出通路：先设初值为 0，再选择 PWM1 模式；正常输出与互补输出均选择高极性，并分别使能。最后还有高级定时器的 MOE 主输出开关。\n\nPWM1 在本例向上计数时，用 `CNT < CCR1` 决定参考信号的有效部分。两路均采用本例的高极性配置，所以正常路跟随参考信号，互补路与之反向，形成两灯交替明暗。\n\n[原片介绍 TIM_OC1Init 与主输出接口](https://www.bilibili.com/video/BV11X4y1j7si/?p=43&t=1560)。`OC1` 指输出比较通道 1，不能因为使用两颗灯就把它当成两个独立定时器通道。\n\n## 26:00—29:11 · 逐项填写 TIM_OCInitTypeDef\n\n[原片录入结果](https://www.bilibili.com/video/BV11X4y1j7si/?p=43&t=1869)中的主要参数为：\n\n```c\nTIM_OCInitStruct.TIM_OCMode = TIM_OCMode_PWM1;\nTIM_OCInitStruct.TIM_OCNPolarity = TIM_OCNPolarity_High;\nTIM_OCInitStruct.TIM_OCPolarity = TIM_OCPolarity_High;\nTIM_OCInitStruct.TIM_OutputNState = TIM_OutputNState_Enable;\nTIM_OCInitStruct.TIM_OutputState = TIM_OutputState_Enable;\nTIM_OCInitStruct.TIM_Pulse = 0;\nTIM_OC1Init(TIM1, &TIM_OCInitStruct);\n```\n\n`OCN` 表示互补路，`OutputNState` 与 `OutputState` 分别控制互补、正常输出；`TIM_Pulse` 在这里设置 CCR1 初值，0 对应正常路初始有效占比为 0。\n\n教材更正：原片直接声明局部结构体，没有先做默认初始化，又跳过 `TIM_OCIdleState`、`TIM_OCNIdleState`；但 TIM1 的标准库初始化函数仍读取这两个成员。连同前面未设置的 `TIM_ClockDivision`，实际工程应完整初始化，分别可使用标准库的 `TIM_TimeBaseStructInit`、`TIM_OCStructInit` 后再改本例参数。以上摘录保留原片写入的字段，默认初始化属于这里明确标出的补充。\n\n## 29:12—30:05 · 使能 TIM1 的 MOE 主输出\n\n通道参数配置完成后，原片调用：\n\n```c\nTIM_CtrlPWMOutputs(TIM1, ENABLE);\n```\n\n它控制高级定时器的 MOE。定时器开始计数、通道输出使能、主输出使能是不同层次的操作，本实验都要接通。随后老师在 `main` 调用 `App_PWM_Init()`。\n\n## 30:06—31:08 · 动态改 CCR 前，原片补写了一行控制预加载\n\n老师准备动态改变 CCR1 时，返回初始化函数追加一行，并称之为开启 CCR 预加载。[31:09 后续完整录入结果](https://www.bilibili.com/video/BV11X4y1j7si/?p=43&t=1869)实际写的是：\n\n```c\nTIM_CCPreloadControl(TIM1, ENABLE);\n```\n\n这里必须辨认接口差异：该函数设置的是 CCPC，即捕获比较**控制位**的预装载，并不等于开启 CCR1 数值的预加载。若要实现讲述中“CCR1 在更新事件时生效”的功能，应使用 `TIM_OC1PreloadConfig(TIM1, TIM_OCPreload_Enable)`。这是对照标准库实现与 [RM0008 的 CCR1/OC1PE 说明](https://www.st.com/resource/en/reference_manual/rm0008-stm32f101xx-stm32f102xx-stm32f103xx-stm32f105xx-and-stm32f107xx-advanced-armbased-32bit-mcus-stmicroelectronics.pdf)给出的教材更正，没有把原函数悄悄换成另一函数。\n\n## 31:09—33:14 · 用 GetTick 计算时间和正弦占空比\n\n原片回到主循环，从模板的 `delay.h` 找到 `GetTick()`。它返回毫秒，因此乘 `1.0e-3f` 转成秒；再加入 `math.h`，使用正弦函数。原代码为：\n\n```c\nfloat t = GetTick() * 1.0e-3f;\nfloat duty = 0.5 * (sin(2 * 3.14 * t) + 1);\n```\n\n这里保留视频里的 `sin`、`3.14` 与变量名 `t`、`duty`。先得到秒单位时间，再代入约一秒一周期的占空比公式。\n\n## 33:15—34:55 · 把占空比换算成 CCR1 并写入\n\n[对照周期与有效长度的原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=43&t=2040)。本例一个周期包含 1000 个计数节拍，因此 CCR1 的值等于 `duty × 1000`。视频接着写：\n\n```c\nuint16_t ccr1 = duty * 1000;\nTIM_SetCompare1(TIM1, ccr1);\n```\n\n`TIM_SetCompare1` 写入通道 1 的比较值；后缀 1 对应 CCR1。主循环不断重新取时间、算占空比、算比较值、更新 CCR1，硬件则持续产生 PWM。\n\n## 34:56—35:50 · 编译、下载与红蓝交替变化\n\n[35:00 的主循环完整画面](https://www.bilibili.com/video/BV11X4y1j7si/?p=43&t=2100)显示上述四行依次连接。视频编译后报告无错误、无警告；第一次下载发现调试器未连接，接上后重新下载并复位。\n\n最终实物演示中红灯、蓝灯交替变化，达到开头的呼吸灯目标。该演示说明原片当前条件下观察到了灯光变化；上面已标出的结构体遗漏和预加载接口差异，仍应在实际工程中按对应更正处理。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 2149.3546875,
        "asrSegments": 796,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "3f91958935774d66fdfa310e669fa0e47b705cf905514ebb9f25d3af3331e33d",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 44,
      "phase": "tim",
      "title": "9.5 [定时器] 输入捕获",
      "duration": 1006,
      "summary": "按原片从捕获CNT快照、双线6μs脉宽例讲到成对通道内部结构，再依次解释输入滤波、边沿检测、直接/间接选择与1/2/4/8捕获分频。",
      "notes": "概念课，保留双线测脉宽再改单线内部交叉的原顺序，未编造实验代码或滤波数值。原图PSC71、ARR65535和2/8捕获实例均与画面核对。",
      "points": [
        "72MHz/PSC71得到1μs计数，CCR1=2、CCR2=8得到6μs",
        "输入路径按滤波、边沿、信号选择、捕获分频展开",
        "先CH1/CH2双线，再CH1直接上升和CH2间接下降共用TI1",
        "直接/间接选择决定来源，通道编号决定CCR目的地",
        "捕获分频控制隔几个选定边沿保存一次，与时基PSC区别"
      ],
      "cid": 26758545421,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 180,
            "observation": "总图CH1方波边沿到CC1/CCR1的捕获路径。",
            "frameSha256": "7da43e41648847d726f5c32fe2ca1d59c3b2697874da8faf659f5a4795f558ed"
          },
          {
            "seconds": 300,
            "observation": "原脉宽图72M、PSC71、ARR65535、CCR1=2和CCR2=8。",
            "frameSha256": "1498da6f42464d1301f58d79d7d74c815c80fd30ad915e2c3d9cf11a5618a545"
          },
          {
            "seconds": 360,
            "observation": "原图每计数1μs，上下边沿差6个计数。",
            "frameSha256": "9771e05d697ea227b2a258b1aa4e23c9525af3dbfda224073f5e093cefb6f712"
          },
          {
            "seconds": 480,
            "observation": "总图CH1/2与CH3/4成对交叉连线。",
            "frameSha256": "4521025b8a382e61043308205bcf191ef5dd05172f5c813bb4c8d3fd13d2a0b4"
          },
          {
            "seconds": 600,
            "observation": "输入滤波前后毛刺波形及fDTS时钟。",
            "frameSha256": "81900cd06988af2d172cac4a74f8df327e49c3bde9dcff603fb6ddde1be12468"
          },
          {
            "seconds": 660,
            "observation": "局部边沿检测输出上升与下降脉冲。",
            "frameSha256": "9afec3934f3e8d4f5f5d6e8ab0bed0a608dabc9a7ca339252e01abcbd783527f"
          },
          {
            "seconds": 780,
            "observation": "CH1外接脉冲、CH2引脚划掉，说明交叉输入。",
            "frameSha256": "205373788b8863cf7d7acc7a7f3dfc0327137623ca94dba11a50e2ca16933a44"
          },
          {
            "seconds": 840,
            "observation": "直接/间接路径同一TI1，单线测上下边沿。",
            "frameSha256": "a8f7d87cba7c564c86ab417fb8d5c2068e4b20f1b5f218ad296d95185ee4fe0e"
          },
          {
            "seconds": 960,
            "observation": "1/2/4/8捕获分频，原图四次上升沿编号。",
            "frameSha256": "3952fe6635f9712c39ee9f7882be7188836f3f605b555e42a3acbcb1937a2513"
          }
        ]
      },
      "learningNotes": "## 00:00—02:34 · 从输出波形转向记录输入时刻\n\n本节仍沿用前面定时器总图，从时基单元、输出比较回到通道左侧的输入捕获。输出比较用 CNT 与 CCR 比较决定输出；输入捕获则在外部信号满足条件时，把当时的 CNT 保存到 CCR。记录两个边沿的计数值，就有了测量脉宽、周期和占空比的基础。\n\n老师先列出讲解顺序：基本原理、内部结构，再拆开输入滤波、边沿检测、信号选择和分频。沿这个顺序看图，才能分清“计时的时钟”和“引起记录的输入边沿”。\n\n## 02:35—04:15 · 捕获就是给 CNT 拍一张快照\n\n[03:00 原总图](https://www.bilibili.com/video/BV11X4y1j7si/?p=44&t=180)在 CH1 输入处画出方波，并圈出一个边沿。边沿经过输入捕获单元，产生 CC1 事件，当前 CNT 值便进入 CCR1。这个数表示事件发生在计数器的哪个位置；它本身还不是秒数，必须结合计数分辨率换算。\n\nCNT 仍由时基时钟驱动，捕获动作不会把外部方波直接变成 CNT 的计数时钟。图中的四个通道有各自 CCR，可以选择记录不同的边沿。\n\n## 04:16—07:00 · 原例：两个通道记录一次高电平脉宽\n\n老师先画出把同一脉冲同时送到 CH1、CH2 的方案。CH1 记录上升沿，CH2 记录下降沿。[05:00—06:00 原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=44&t=300)给出时基参数：输入时钟 72MHz，PSC=71，所以计数频率为 72MHz÷72=1MHz，每个计数对应 1μs。画面还把 ARR 标为最大值 65535。\n\n波形旁边画的是一格一格向上的 CNT：上升沿到来时 CNT=2，捕获到 CCR1；下降沿到来时 CNT=8，捕获到 CCR2。本例两次捕获之间没有跨越计数器回绕，因此：\n\n```text\n上升沿时间戳：CCR1 = 2\n下降沿时间戳：CCR2 = 8\n高电平脉宽 = (8 - 2) × 1μs = 6μs\n```\n\n这里的关键是两个寄存器记录同一个计数器的两个时刻。暂时先理解这个差值，后面再说明为什么最终可以只接一根输入线。\n\n## 07:01—09:14 · 先看成对通道，再拆开输入路径\n\n老师返回总图，指出 CH1 与 CH2 之间、CH3 与 CH4 之间都有交叉连线。随后把前一对通道和时基单元单独放大。输入捕获路径依次经过输入滤波、边沿检测、信号选择、输入捕获分频，然后才产生 CC 事件并保存 CNT。\n\n这张局部图同时保留了 PSC、CNT 和 ARR。上面的 PSC 控制 CNT 多久加一次；下面通道中的分频器控制多少次选定边沿才执行一次捕获。两个分频器位于不同的路径，作用也不同。\n\n## 09:15—10:35 · 输入滤波：先把毛刺挡在边沿检测之前\n\n[10:00 原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=44&t=600)在输入方波上画出很短的干扰脉冲，又在滤波器后画出较干净的方波。滤波器的目标是避免短暂噪声被当成真正的边沿捕获。\n\n原图把滤波器的采样时钟标为 fDTS，并画出来自内部时钟的 1、2、4 分频关系。老师在本节只解释滤除毛刺的作用，把具体采样条件和参数配置留到实验中。阅读后面的代码时，应把输入滤波参数与这段信号路径对应起来。\n\n## 10:36—11:31 · 边沿检测：分别形成上升沿和下降沿脉冲\n\n滤波后的电平再进入边沿检测器。原图从检测器引出两条线，一条对应上升沿脉冲，一条对应下降沿脉冲。选择上升沿就是记录低到高的时刻，选择下降沿就是记录高到低的时刻。\n\n脉宽例中，开始与结束需要不同边沿，所以两个捕获通道的边沿配置不同。捕获条件决定记录哪个时刻，计数分辨率决定这个时刻的单位。\n\n## 11:32—13:33 · 信号选择：直接、间接与 TRC\n\n老师接着解释每个通道的三种信号来源。TRC 来自从模式控制器，本节先放在一边；重点是直接输入与间接输入。直接输入取本通道对应的输入，例如 CH1 取 TI1；间接输入通过成对通道的交叉连线取另一路，例如 CH1 可以取 TI2。\n\n[13:00 原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=44&t=780)把外部脉冲接在 CH1，划掉了 CH2 的外部接线。此处先看懂图中交叉线路的去向：通道编号表示保存到哪个 CCR，选择直接或间接表示从哪个外部输入取得边沿。这两件事不能混为一件。\n\n## 13:34—14:57 · 原方案改进：一根线同时记录两个边沿\n\n回到前面的高电平脉宽测量，老师利用交叉连线省下第二根外部输入线。信号只接 CH1：CH1 选择直接输入并捕获 TI1 的上升沿；CH2 选择间接输入并捕获同一 TI1 的下降沿。于是 CCR1 与 CCR2 仍分别保存开始、结束时刻，CH2 对应的外部引脚则可留作其他用途。\n\n[14:00 的单线方案](https://www.bilibili.com/video/BV11X4y1j7si/?p=44&t=840)与本节最开始“双线接入 CH1、CH2”的讲法是先后两步：先用两个引脚解释差值测时，再利用芯片内部的交叉连接实现同一目标。\n\n## 14:58—16:46 · 输入捕获分频：隔几个边沿保存一次\n\n最后一个模块的可选分频为 1、2、4、8。分频为 1 时，每个符合选择条件的边沿都能产生一次捕获；分频为 2 时，每到第二个选定边沿捕获一次；分频为 4 时，每到第四个选定边沿捕获一次。\n\n[16:00 原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=44&t=960)在四个上升沿旁依次标出 1、2、3、4，并圈出通道分频器的 4。这改变的是捕获事件的间隔，CNT 的计数速度仍由上方 PSC 决定。至此应能沿着“外部输入→滤波→选边沿→直接/间接选择→捕获分频→CCR”的路径解释一次捕获如何发生。\n\n## 来源与核对范围\n\n本页按 P44 完整音轨的本地 ASR 辅助阅读，并交叉核对九张原视频画面。ASR 不是作者字幕，本节是原理课，没有把后续超声波实验的函数或初始化参数提前写成原片代码。正文保留了先双线、后单线的讲授顺序，以及原图 CCR1=2、CCR2=8、6μs 的例子。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1004.928,
        "asrSegments": 296,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "5e86fb0ad60fd1e8eb38d6a78f645a5681be2e084bc0cb608bd64e4472e3507e",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 45,
      "phase": "tim",
      "title": "9.6 [定时器] 超声波测距实验",
      "duration": 2976,
      "summary": "跟随HCSR04Test原片从HC-SR04时序、PA0/PA8接线和USART1 Hello world开始，推导1μs/65535时基、配置两路直接/间接捕获，再按六步主循环触发、轮询、算距离与串口输出。",
      "notes": "保留原App_HCSR04_Init、DelayUs和My_USART_Printf及补录Trig初始化的实际顺序。明确ClockDivision漏初始化、原3mm换算缺往返二倍因子、无超时/跨回绕处理；原3.3V接线仅按画面记录。最终实测读数约0.1236m，不扩展成精度检验。",
      "points": [
        "Trig=PA0，Echo=PA8/TIM1_CH1，USART1 PA9/PA10交叉接TTL",
        "App_USART1_Init先配置AF_PP10MHz/IPU和115200 8N1再测试Hello world",
        "TIM1时基PSC71/ARR65535/Up/RCR0，完整周期65536μs",
        "CH1直接上升/CH2间接下降，Filter0和DIV1共同测TI1",
        "六步顺序清CNT、清CC1/2、启动、DelayUs10触发、阻塞等待、停止",
        "GetCapture1/2差值乘1e-6*340/2得米，Printf四位小数和Delay100"
      ],
      "cid": 26758285375,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 300,
            "observation": "原Trig>10μs、8个40kHz发送波、Echo脉宽乘340/2。",
            "frameSha256": "b1eda51dba5608e698d22f93e903b4fdb044bc5de5c7efdbf23dcc4387c8091f"
          },
          {
            "seconds": 480,
            "observation": "原3.3V供电标注，Trig PA0，Echo PA8，USART1 PA9/10。",
            "frameSha256": "3aba399a9d1e4afd5cdecf07b403263e9f7b3300e3fe8fb25c97a5d951f3e144"
          },
          {
            "seconds": 900,
            "observation": "PA9 AF_PP10MHz、PA10 IPU、115200和无流控。",
            "frameSha256": "652a794d9bc37506ca31397a176644e878513fdbacfce80b3f8452f0d681282d"
          },
          {
            "seconds": 960,
            "observation": "原App_USART1_Init及main调用。",
            "frameSha256": "b0e4d25be9a3e1840531d8079b82bf1dd8968e29a41b063b149d40582df7b4b1"
          },
          {
            "seconds": 1020,
            "observation": "My_USART_SendString(USART1,Hello world.加换行)，编译零错误警告。",
            "frameSha256": "d8a3bf69763400d3fd7fa0dc5b1aaa4db4821900cdf6c57f8cad08e2e0e02fd5"
          },
          {
            "seconds": 1030,
            "observation": "串口助手115200 NONE/8/1/NONE和ASCII。",
            "frameSha256": "4d1ff9e875c8db277dcc51251c5ab9abf969bc92384cb5644d23dda19818c0d9"
          },
          {
            "seconds": 1860,
            "observation": "App_HCSR04_Init进入时基结构体赋值。",
            "frameSha256": "cd6806fcf9adb8e03ae8cb658e0c6e0ad446e43a3187b5a7757ae1b1ec422e22"
          },
          {
            "seconds": 1905,
            "observation": "Up/65535/71/RCR0四字段，没有ClockDivision初始化。",
            "frameSha256": "4d400927fb81723ffd66a11a63579950dc0416c0013c35f5138b7dbd21d3541d"
          },
          {
            "seconds": 1920,
            "observation": "原六部分目录，进入输入捕获。",
            "frameSha256": "f39e7ee43929ad36064cd920e00f37d81e272243709b29717a30f959dba930ff"
          },
          {
            "seconds": 2100,
            "observation": "完整时基和PA8 IPD代码。",
            "frameSha256": "6e9983e701043b2aef19be9f13c35929384ef4838664fff084b21ed92710dbe6"
          },
          {
            "seconds": 2280,
            "observation": "原CH1直接上升、CH2间接下降且DIV1路径。",
            "frameSha256": "a62de22fa96c2cda1059e6c6388a7940512d9fc2dacd66229c8a8c9a5b5548bd"
          },
          {
            "seconds": 2340,
            "observation": "两次TIM_ICInit五字段，CH2 Falling/IndirectTI。",
            "frameSha256": "46bd13227eafa1edcbb3ac936f0b00bd1fa4f5a21fc88820b5e4dc2fb3eec859"
          },
          {
            "seconds": 2520,
            "observation": "原清CNT/CC1/CC2、启动、触发、等待、关闭六步图。",
            "frameSha256": "0074f7699af60651c54a9a53feb5cc5f04471d7d4cfceef2cad398fcdffd58fb"
          },
          {
            "seconds": 2607,
            "observation": "PA0 Out_PP2MHz及Init录入。",
            "frameSha256": "8fc493a2a6dde8741993857dbf44a7448ec489e67c0922a8003fbfc3b3080f55"
          },
          {
            "seconds": 2640,
            "observation": "main前三步清CNT、清标志、启动TIM1。",
            "frameSha256": "1174492d061faddb98d1ac2b89f3b7fa3ae809dbbd34f5ec1cb8a4b6923f8638"
          },
          {
            "seconds": 2700,
            "observation": "delay.h原DelayUs(uint32_t us)声明。",
            "frameSha256": "9972d5ca1314a521ad53a2a741801c5415ebd403403a650c0434787169127ce5"
          },
          {
            "seconds": 2760,
            "observation": "原TIM_GetFlagStatus接口原型。",
            "frameSha256": "a7cebd379b2f0c7163e62781486684e30af7209ae7eb4cb2cc7f68a6876cc3e8"
          },
          {
            "seconds": 2810,
            "observation": "原六步图，等待完成后关定时器。",
            "frameSha256": "3d44780c0527cecd441482f6aff9efb39e80d6adf109c1aa5a020841446549c9"
          },
          {
            "seconds": 2880,
            "observation": "最终触发10μs和两个等待；CCR第二行复制中尚未改名。",
            "frameSha256": "70c5c7669a8762505177970d395ead9adc16f274620704cd9019e0c1c22490ff"
          },
          {
            "seconds": 2890,
            "observation": "已改ccr2=GetCapture2，开始计算distance。",
            "frameSha256": "040de88c883c44b77bb771c505bf21f463f03c41784eefc1bde3316549a6c411"
          },
          {
            "seconds": 2940,
            "observation": "完整距离原式、Printf和Delay100，零错误零警告。",
            "frameSha256": "5e3a2c70a0a91e4643a96f1a4a357326671b9eab972ac4e2cc99a4fbc67793ac"
          },
          {
            "seconds": 2955,
            "observation": "串口最终distance=0.1236/0.1238约12.36厘米。",
            "frameSha256": "2ee186252d3d0ac24eff9ac868f35f0854e8e492a6b382de115ec8de841dd120"
          }
        ]
      },
      "learningNotes": "## 00:00—02:07 · 本次任务：把 Echo 脉宽变成串口距离\n\n老师先展示 HC-SR04 超声波模块和串口读数：移动障碍物，电脑上的距离随之变化。本节按“模块用法→接线→串口→测量流程→时基与输入捕获→主循环”的实际顺序完成 HCSR04Test 工程。输入捕获负责记录回波脉冲的两个边沿，串口负责把计算结果发送给电脑。\n\n## 02:08—06:41 · 模块的 Trig、Echo 和往返时间\n\n模块一侧发送超声波，另一侧接收反射回来的声波。视频以 340m/s 作为声速，声音走过的是传感器到障碍物的往返路程，所以距离等于传播时间乘声速再除以 2。\n\n[05:00 原时序图](https://www.bilibili.com/video/BV11X4y1j7si/?p=45&t=300)标出四个端子：VCC、Trig、Echo、GND。Trig 输入大于 10μs 的高电平脉冲后，模块发出八个 40kHz 周期的超声波；Echo 返回一个高电平脉冲，用它的宽度表示测量时间。八个发送周期约占 0.2ms。程序最终要测的是 Echo 脉宽，而不是直接在单片机上接收 40kHz 声波。\n\n## 06:42—09:14 · 按原图分清触发、捕获与串口接线\n\n[08:00 接线图](https://www.bilibili.com/video/BV11X4y1j7si/?p=45&t=480)把 Trig 接 PA0，Echo 接 PA8（TIM1_CH1）。Trig 只需一个普通输出引脚产生启动脉冲；Echo 则进入定时器输入捕获。CH2 的外部引脚不用接线，后面通过间接输入取得 TI1 的下降沿。\n\n右侧使用 USART1：PA9 是 TX，连 USB 转 TTL 模块的 RXD；PA10 是 RX，连模块 TXD，并连接地。原视频的传感器 VCC 图中标的是 3.3V，这里按画面记录；模块名称不能代替具体硬件版本的供电规格。\n\n## 09:15—12:43 · 先写 App_USART1_Init 的引脚初始化\n\n老师从母版工程建立 HCSR04Test，先编写 `App_USART1_Init`。先开启 GPIOA 时钟，再用同一个 `GPIO_InitTypeDef` 分别配置 PA9 和 PA10。[15:00 后续完整引脚代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=45&t=900)中，PA9 是 `GPIO_Mode_AF_PP`、`GPIO_Speed_10MHz`；PA10 是 `GPIO_Mode_IPU`。\n\nPA9 复用推挽负责发送，PA10 上拉输入负责接收。代码对 GPIOA 时钟重复使能，老师说明重复使能不会把已经开启的时钟关掉。对输入引脚，讲解中删去了再次设置输出速度的那行。\n\n## 12:44—17:33 · 初始化 USART1，并先验证 Hello world\n\n引脚之后才配置 USART1 模块：开启 APB2 上的 USART1 时钟，填写 `USART_InitTypeDef`，调用 `USART_Init`，最后 `USART_Cmd(USART1, ENABLE)`。参数为 115200 波特率、8 位数据、1 位停止、无奇偶校验、无硬件流控、同时使能 Tx 与 Rx。\n\n老师引用 `usart.h`，在 main 调用初始化后发送测试字符串。[17:00 原代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=45&t=1020)使用的是此前课程封装的接口：\n\n```c\nMy_USART_SendString(USART1, \"Hello world. \\r\\n\");\n```\n\n编译下载后，串口助手选择相同通信格式和 ASCII 接收。复位开发板出现 Hello world，才继续输入捕获部分。这里验证的是“电脑能收到串口文本”，还没有进行超声波测量。\n\n## 17:34—19:33 · 两个 CCR 分别记录 Echo 上升沿和下降沿\n\nEcho 已接到 PA8/TIM1_CH1，因此 CH1 取直接输入并捕获上升沿；CH2 取间接输入，捕获同一 TI1 的下降沿。上升沿时 CNT 保存到 CCR1，下降沿时 CNT 保存到 CCR2。无回绕时，`CCR2-CCR1` 乘计数分辨率就是高电平宽度。\n\n这一处正好把上一节的内部交叉连接用起来：CH2 表示第二个捕获寄存器，并不要求另接一根 Echo 线到 CH2 引脚。\n\n## 19:34—23:58 · 原图先列出六步测量流程\n\n老师先梳理一轮测量的顺序：清 CNT；清 CC1、CC2 标志；启动定时器；PA0 发 Trig 脉冲；等待两个捕获标志；关闭定时器。两个捕获标志分别表示开始与结束边沿已经到来。\n\n视频用 ARR=999、CNT 初值=900 的假设说明：如果不先清 CNT，测量途中可能很快回绕。清零是在本轮开始前留出尽可能长的计数区间；它不能让任意长的回波永远不溢出。本节随后用最大 ARR 增大这段区间。\n\n## 23:59—29:15 · 选择 1μs 分辨率和最大 ARR\n\n时基参数先从测量需求推导。视频把模块的距离精度作为选择分辨率的参考，最后选 1μs；ARR 取 65535，让上计数从 0 数到 65535。因而完整回绕周期为 65536μs，即 65.536ms，不能把“ARR 的值”直接当作计数次数。\n\n原片以 3mm÷340m/s 得到约 8μs；这只是单程换算。按本节自己使用的往返公式，3mm 对应的 Echo 时间变化应为 `2×0.003/340≈17.6μs`。选择 1μs 仍足够细，但应把这个二倍关系算清楚。\n\nTIM1 位于 APB2，本工程 PCLK2=72MHz、APB2 分频为 1，TIM1 时钟也是 72MHz。PSC=71 后得到 1MHz，上计数，ARR=65535，RCR=0。\n\n## 29:16—31:57 · App_HCSR04_Init 先配置时基，暂不启动\n\n老师建立 `App_HCSR04_Init`，先开 TIM1 的 APB2 时钟，再填写时基结构体。原片摘录如下，[35:00 后续完整画面对照](https://www.bilibili.com/video/BV11X4y1j7si/?p=45&t=2100)：\n\n```c\nTIM_TimeBaseInitTypeDef TIM_TimeBaseInitStruct;\nTIM_TimeBaseInitStruct.TIM_CounterMode = TIM_CounterMode_Up;\nTIM_TimeBaseInitStruct.TIM_Period = 65535;\nTIM_TimeBaseInitStruct.TIM_Prescaler = 71;\nTIM_TimeBaseInitStruct.TIM_RepetitionCounter = 0;\nTIM_TimeBaseInit(TIM1, &TIM_TimeBaseInitStruct);\n```\n\n此处先不调用 `TIM_Cmd`，因为启动动作安排在每轮测量中。原片口述暂不配置 ClockDivision，画面也没有为该局部结构体赋此成员；但标准库 `TIM_TimeBaseInit` 会读取它。实际复现时应先用 `TIM_TimeBaseStructInit` 取得默认值，或完整初始化所有所需成员。这是对原摘录的补充修正。\n\n## 31:58—35:03 · PA8 为什么最终选 IPD\n\n视频查表得知输入捕获引脚可以配置浮空输入，又根据 Echo 空闲为低电平，把本例 PA8 设成 `GPIO_Mode_IPD`。这样意外断开 Echo 时，引脚仍有默认低电平。代码开启 GPIOA 时钟，设置 Pin8、IPD，再调用 `GPIO_Init`。\n\n这段配置的是输入引脚电气模式；接下来 `TIM_ICInit` 配置的才是芯片内部的捕获路径，两者必须分别完成。\n\n## 35:04—39:21 · TIM_ICInit 依次配置 CH1、CH2\n\n[39:00 原代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=45&t=2340)中，老师用 `TIM_ICInitTypeDef TIM_ICInitStruct` 先填 CH1 的五个成员：\n\n```c\nTIM_ICInitStruct.TIM_Channel = TIM_Channel_1;\nTIM_ICInitStruct.TIM_ICFilter = 0;\nTIM_ICInitStruct.TIM_ICPolarity = TIM_ICPolarity_Rising;\nTIM_ICInitStruct.TIM_ICPrescaler = TIM_ICPSC_DIV1;\nTIM_ICInitStruct.TIM_ICSelection = TIM_ICSelection_DirectTI;\nTIM_ICInit(TIM1, &TIM_ICInitStruct);\n```\n\nFilter=0 不启用该数字滤波配置；Rising 选择上升沿；DIV1 每次符合条件的边沿都捕获；DirectTI 取本通道 TI1。复制这组配置后，CH2 改为 `TIM_Channel_2`、`TIM_ICPolarity_Falling`、`TIM_ICSelection_IndirectTI`，仍为 Filter0、DIV1，再调用一次 `TIM_ICInit`。IndirectTI 让 CH2 也来自 TI1，记录下降沿到 CCR2。完成后 main 调用 `App_HCSR04_Init`。\n\n## 39:22—41:57 · 主循环先清计数、清标志、再启动\n\n六步流程现在才开始落到 main 的 while 循环中。原片前三步为：\n\n```c\nTIM_SetCounter(TIM1, 0);\nTIM_ClearFlag(TIM1, TIM_FLAG_CC1);\nTIM_ClearFlag(TIM1, TIM_FLAG_CC2);\nTIM_Cmd(TIM1, ENABLE);\n```\n\n`TIM_SetCounter` 写 CNT；两次 `TIM_ClearFlag` 清除上轮遗留状态；`TIM_Cmd` 打开计数。必须在本轮触发之前清标志，否则旧的 SET 状态可能让等待过程误以为本次已经捕获。\n\n## 41:58—45:24 · 回到初始化补 PA0，再发 10μs 触发\n\n写到触发动作时，老师返回 `App_HCSR04_Init` 末尾，添加 PA0 的初始化：GPIOA 时钟、`GPIO_Pin_0`、`GPIO_Mode_Out_PP`、`GPIO_Speed_2MHz` 和 `GPIO_Init`。然后回到 main 输出高电平、延时、再输出低电平。\n\n老师发现已有 `Delay` 是毫秒级，转到 `delay.h` 找到 `DelayUs(uint32_t us)`，引用该头文件，再写入原调用：\n\n```c\nGPIO_WriteBit(GPIOA, GPIO_Pin_0, Bit_SET);\nDelayUs(10);\nGPIO_WriteBit(GPIOA, GPIO_Pin_0, Bit_RESET);\n```\n\n这里是 10μs 的延时请求；前面的模块图写“大于 10μs”。正文保留原代码，不把函数名改成其他微秒延时接口。\n\n## 45:25—46:53 · 等待 CC1、CC2 后停止定时器\n\n[49:00 最终主循环中的等待代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=45&t=2940)保留原先后顺序：\n\n```c\nwhile(TIM_GetFlagStatus(TIM1, TIM_FLAG_CC1) == RESET);\nwhile(TIM_GetFlagStatus(TIM1, TIM_FLAG_CC2) == RESET);\nTIM_Cmd(TIM1, DISABLE);\n```\n\n第一个循环等上升沿，第二个等下降沿；两者完成后停止计数。本实验采用阻塞轮询，没有超时出口，也没有实现跨回绕计数。如果 Echo 缺失或等待过长，不能把本段代码当成已具备异常恢复的测距驱动。\n\n## 46:54—49:36 · 读取原捕获值、换算米并观察结果\n\n最后才读取 CCR、计算距离、串口输出。48:00 复制第二行时一度还是 `ccr1/GetCapture1`，后续实际改为 CCR2；[49:00 最终代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=45&t=2940)为：\n\n```c\nuint16_t ccr1 = TIM_GetCapture1(TIM1);\nuint16_t ccr2 = TIM_GetCapture2(TIM1);\nfloat distance = (ccr2 - ccr1) * 1.0e-6f * 340.0f / 2;\nMy_USART_Printf(USART1, \"distance = %.4f\\r\\n\", distance);\nDelay(100);\n```\n\n差值的单位是计数，乘 1e-6 换成秒，再乘 340m/s、除以 2，最终单位是米。`%.4f` 保留四位小数，`Delay(100)` 减慢下一次测量。视频编译显示零错误、零警告，下载后串口出现约 0.1236、0.1238 的读数，并随障碍物移动变化。这说明原演示中得到约 12.36cm 的输出，不构成精度校准或全部异常场景验证。\n\n## 来源与核对范围\n\n本页读完 P45 全部音轨 ASR，并核对接线、串口、时基、两路输入捕获、主循环和最终串口原图。正文中的代码是相应画面的短摘录，保留原 `App_HCSR04_Init`、`DelayUs`、`My_USART_Printf`。ASR 为机器辅助文本，未取得作者工程；未将结构体初始化补充、往返时间算式修正或异常边界写成原片已经实现的功能。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 2975.2106875,
        "asrSegments": 965,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "93640bcbbdb8cb90e89c2233a9e9a8bfb7593c53341fbd367a1fc1e98848a2b3",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 46,
      "phase": "tim",
      "title": "9.7 [定时器] 从模式控制器",
      "duration": 1291,
      "summary": "沿原片遥控器/接收头类比理解TRGI/TRGO，依次解释从模式，再看使能与Update主模式，最后推导TIM1带TIM2/3门控启停和时分秒三级计数例。",
      "notes": "概念课按原讲法与两个原图例逐段解释，未虚构初始化代码。说明门控不清零、触发只启动、TRGO属于内部触发，原秒分时图只是教学例。原三只定时器的时基值及RCR划掉均核对。",
      "points": [
        "TRGI触发输入与TRGO触发输出的原遥控器类比",
        "八种从模式名称，编码器三种仅介绍用途",
        "复位清CNT、门控电平、触发启动、外部时钟计数的差异",
        "八个主选项中仅详细讲使能及Update",
        "TIM1主使能和TIM2/3从门模式同步启停",
        "1kHz/PSC999/ARR59秒表，后两级PSC0/ARR59及23逐级进位"
      ],
      "cid": 26757173218,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 240,
            "observation": "TRGI接收头、TRGO遥控器类比原图。",
            "frameSha256": "086f51363e72d84ba3c0df7904211161e2c27ebfb39fdc8aecea2f62cf5a2e39"
          },
          {
            "seconds": 540,
            "observation": "八种从模式列表，复位模式高亮说明。",
            "frameSha256": "e68f6d5d3b09510e49f399a5806ae488eef210823ee5064ad025f2a2d5b8404d"
          },
          {
            "seconds": 600,
            "observation": "门模式输入低高低和CNT暂停/运行示意。",
            "frameSha256": "ce306c40c470b913a2e43a37dbbd85decaa823c00029448b17b78c42f88a1243"
          },
          {
            "seconds": 660,
            "observation": "触发模式按上升沿启动的原图。",
            "frameSha256": "ae93ddcb425547ff6e11e6aff0407664840b32a966e12cc737ee15d5ca1befda"
          },
          {
            "seconds": 720,
            "observation": "外部时钟模式1以TRGI作时基来源。",
            "frameSha256": "1d8e556113bcae0a071d29fd243e3762d48c22921df871f443310dc3f2521f62"
          },
          {
            "seconds": 840,
            "observation": "八个主模式列表划去六项，保留使能和Update。",
            "frameSha256": "aebfbcd70cff06062d2d496f355142dc0c9711a46223da78d2676ddb4da15569"
          },
          {
            "seconds": 960,
            "observation": "TIM1使能TRGO连TIM2/3门控TRGI同步示意。",
            "frameSha256": "edd4064098c418203a70ef2424a1ad4f4df477e7200ad34a1d7907302d188221"
          },
          {
            "seconds": 1200,
            "observation": "秒分时级联原图PSC999/0/0、ARR59/59/23，TIM2/3划去RCR。",
            "frameSha256": "250fdb69461c46e5200425fa523562e3b8156836d969cceeef39ba65a3bc2f3f"
          }
        ]
      },
      "learningNotes": "## 00:00—02:45 · 总图左上角：接收触发，也输出触发\n\n老师先回顾定时器的四部分，最后转到左上角的从模式控制器。本节按概念、八种从模式、主模式中的两个重点、同步启停例、时分秒级联例展开。\n\n控制器左边是 TRGI，右上是 TRGO，下方与时基单元相互作用。TRGI 是触发输入，输入信号可以影响计数的启动、暂停、复位或时钟来源；TRGO 是触发输出，可以把本定时器的状态或事件交给其他模块。\n\n## 02:46—06:21 · 用遥控器与接收头理解 TRGI、TRGO\n\n视频先演示遥控器控制板载 LED：按 1 点亮，按 2 熄灭，再把这个现象作为类比。[04:00 原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=46&t=240)把 TRGI 比作接收头、TRGO 比作遥控器。\n\n接收头类比回答“定时器接到什么控制信号”，遥控器类比回答“定时器把什么条件输出给别人”。比如前者可以使 CNT 清零或开始工作，后者可以控制另一只定时器，或安排后续 ADC 的采样时刻。图里的“命令”是帮助理解的说法，实际是芯片内部选择、传递的电平与事件信号。\n\n## 06:22—08:34 · 八种从模式先认名称\n\n原片依次列出：从模式禁止、编码器模式 1、编码器模式 2、编码器模式 3、复位模式、门模式、触发模式、外部时钟模式 1。\n\n从模式禁止表示不通过所选触发来控制时基，前面普通定时的实验以此为背景。三种编码器模式与测量电机角度、角速度有关，老师本节只介绍用途，把具体用法留待后课。它们虽同列在从模式选择中，也不能把编码器两路输入简单理解成同一根 TRGI 的八种电报码；编码器计数依据 TI1、TI2 的边沿与电平关系。[ST 的 RM0008 从模式定义](https://www.st.com/resource/en/reference_manual/rm0008-stm32f103xx-advanced-armbased-32bit-mcus-stmicroelectronics.pdf)也区分了这两类来源。\n\n## 08:35—09:28 · 复位模式：新边沿重新设定计时起点\n\n老师把模式设成复位模式，先让时基计数，再在 TRGI 输入一个脉冲。当所选触发出现上升沿时，CNT 被清零，之后继续计数。因此图形表现为原来逐渐上升的 CNT 突然回到零，再重新向上。\n\n理解这个模式时要区分“清零”和“停表”。复位是在事件到来时重新确定起点，本例并没有因为触发之后变低就停止计数。后面的 PWM 测量会利用同类动作，让每个周期重新从零开始。\n\n## 09:29—10:29 · 门模式：高电平期间计数，低电平期间保持\n\n[10:00 原门控图](https://www.bilibili.com/video/BV11X4y1j7si/?p=46&t=600)先画一个低—高—低信号，再解释 CNT：TRGI 低时暂停，数值保持；TRGI 高时允许计数；再次变低时又保持。\n\n本例数值在暂停处接着原值恢复，门控本身不等于清零。图中用总开关比喻允许或禁止计数；实际配置还需要按手册使能定时器并正确选择触发路径，不能理解为只写一个从模式就替代所有初始化。\n\n## 10:30—11:19 · 触发模式：边沿负责启动\n\n与门模式不同，触发模式看的是启动边沿。原图假设开始时定时器未运行，一个 TRGI 上升沿到来后打开计数。后续输入回到低电平，并不会像门模式一样自动暂停。\n\n因此门模式适合回答“这段电平期间是否计数”，触发模式回答“从哪个事件开始计数”。两者都影响时基运行，但依据的条件不同。\n\n## 11:20—12:41 · 外部时钟模式 1：把触发当作计数来源\n\n老师把原来来自时钟树的时钟与 TRGI 路径对照。[12:00 原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=46&t=720)说明外部时钟模式 1 用所选触发驱动时基。本例 PSC=0、向上计数，每来一次有效脉冲，CNT 加 1。\n\n这个例子用于突出变化：内部定时器时钟不再是本例计数步进的来源，输入事件本身变成被计数对象。PSC 仍在路径中，所以“每个脉冲加 1”要连同本例 PSC=0 一起理解。\n\n## 12:42—14:31 · 主模式重点一：使能；重点二：Update\n\n原片展示八个主模式选项，但划去其中六个，只详细解释使能和 Update。[14:00 原列表](https://www.bilibili.com/video/BV11X4y1j7si/?p=46&t=840)仍能看到复位、比较脉冲及 OC1REF—OC4REF 等选项；本节没有逐项配置这些模式。\n\n使能模式把计数运行的使能状态作为 TRGO：图中开关断开对应 0，闭合对应 1。Update 模式则每次更新事件到来输出一个触发脉冲。老师举例：如果时基每 1ms 产生一次 Update，TRGO 便每隔 1ms 产生一次相应事件。\n\n这里的高低电平和脉冲是内部信号表示，不表示已经把 TRGO 配成某个外部 GPIO 方波输出。\n\n## 14:32—17:19 · 原例一：一只定时器带两只同步启停\n\n[16:00 原同步示意图](https://www.bilibili.com/video/BV11X4y1j7si/?p=46&t=960)是 TIM1 在左、TIM2 与 TIM3 在右。老师让 TIM1 的 TRGO 选择使能，TIM2、TIM3 选择门模式，再把主定时器的 TRGO 连接到两个从定时器的 TRGI。\n\n推导顺序是：TIM1 运行→TRGO=1→两个从定时器门信号有效→两者也运行；TIM1 停止→TRGO=0→两个从定时器暂停。这个例子同步的是计数运行区间，不会自动把三者的 CNT、PSC、ARR 都变成相同数值。\n\n图中的连线表示内部触发关系，具体工程需要选择芯片支持的内部触发映射。本节没有给出这组三只定时器的初始化代码或实测波形。\n\n## 17:20—21:31 · 原例二：秒、分、时逐级进位\n\n老师最后用 TIM1、TIM2、TIM3 模拟秒针、分针、时针。[20:00 原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=46&t=1200)明确注明此例用来解释功能，实际应用不按这个方式占用三只定时器。\n\n第一只假设输入 1kHz，PSC=999 得到 1Hz，ARR=59，使 CNT 每秒加 1、每 60 秒回绕。它的主模式选 Update，于是每分钟向下一只提供一次触发。\n\n第二只选择外部时钟模式 1，PSC=0，每个一分钟触发使 CNT 加 1；ARR=59，每 60 分钟产生一次 Update。第二只也把 Update 作为 TRGO，送给第三只。\n\n第三只同样按外部触发计数，PSC=0，每小时加 1，原图 ARR=23，表示 24 小时循环。图中 TIM2/TIM3 的 RCR 被划掉，与它们没有高级定时器重复计数器相符。至此，上一只的更新事件就成为下一只的计数来源，构成级联。\n\n## 来源与核对范围\n\n本页读完 P46 完整音轨 ASR，并亲看八张原图。保留原遥控器类比、八种从模式的讲解详略、只重点讲两个主模式、同步启停与时分秒两个例子的先后关系。ASR 不是作者字幕；本节为原理课，正文没有虚构标准库调用或声称完成实机级联实验。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1290.4533125,
        "asrSegments": 446,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "60b766e7fbd650b1fd1ae372aa0e93b4b5e6ac62bd5fbcb2c6f674a28e17b5da",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 47,
      "phase": "tim",
      "title": "9.8 [定时器] PWM 参数测量原理",
      "duration": 1649,
      "summary": "按原四部分顺序对照RM0008框图、拆解TI1FP1等节点名、查ITR路由，再用CH1直接上升/CH2间接下降和TI1FP1复位CNT推导PWM周期与占空比。",
      "notes": "原理课保持总图、节点、路由、测量四部分顺序。逐项核对节点拼写与ITR表，再解释每上升沿清零、下降沿CCR2和下个上升沿CCR1的原3/10例；没有混写后续实验代码。",
      "points": [
        "时基、CCR、输入/输出和TRGI/TRGO在简图与手册图中的对应",
        "TI/F/P和两个数字表示来源、滤波极性及使用通道",
        "TRGI有ETRF、ITR/TRC、TI1FP1/TI2FP2等来源",
        "查各自从定时器行：TIM2和TIM3接TIM1均选择ITR0",
        "TI1FP1上升沿既CH1捕获又从模式复位CNT",
        "原波形CCR2=3、CCR1=10：周期CCR1×分辨率，占空比30%"
      ],
      "cid": 26757562526,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 420,
            "observation": "原RM0008高级框图与简图叠加定位时基、CCR和通道。",
            "frameSha256": "6234647ce1a1074f9520cce5e952e628017ab4c51adfbab08e36872971ca6ee4"
          },
          {
            "seconds": 780,
            "observation": "TI/F/P命名、TI1FP1/TI2FP1/TI1FP2/TI2FP2位置。",
            "frameSha256": "a2a07cf605bfcc1878671fe146ea697dcaee8c79913882bab45206ac7d53d7f6"
          },
          {
            "seconds": 900,
            "observation": "TI1FP2跨通道来源及直接/间接位置。",
            "frameSha256": "afadd27154398f12a33f89323554f6952756776c4b29b453ba506ae0faa9ed13"
          },
          {
            "seconds": 1020,
            "observation": "原手册TRGI多路选择与ETRF/TRC/TI1FP1/TI2FP2。",
            "frameSha256": "5b9c159f1286daa1325be352af6596fa1242951e4ac08faa8a2e2f05d38b55cd"
          },
          {
            "seconds": 1140,
            "observation": "两张内部触发表，ITR按从定时器行区分。",
            "frameSha256": "397e4bf95edac889a89a53f29683f0574d49092c08f96e56d68bc4ce82edb848"
          },
          {
            "seconds": 1260,
            "observation": "TIM1连TIM2/3示意与两表对照。",
            "frameSha256": "69d74301e47865c670fac4964ca2274d060570eb3dd42a854bb2f370b3cee0ff"
          },
          {
            "seconds": 1320,
            "observation": "TIM2/TIM3 ITR0均对应TIM1，其余列不同。",
            "frameSha256": "c15fd038bb7e085e360de5a13c65233272962255bfc09a6180021d4ff37fbfb6"
          },
          {
            "seconds": 1440,
            "observation": "单CH1输入，直接上升/间接下降，TI1FP1接TRGI复位路径。",
            "frameSha256": "7e55baac0418c982d2fd2a7e63c1bacb0c927d2482ee944382ce71a2afc82e8a"
          },
          {
            "seconds": 1560,
            "observation": "原三行波形：CNT清零、CCR2=3、CCR1=10。",
            "frameSha256": "6350278a858646340cff0f8015abdfdffc3d728179a8f29c19228fda036f77a5"
          },
          {
            "seconds": 1620,
            "observation": "高电平与周期原图长度标记，说明CCR2/CCR1。",
            "frameSha256": "3813698a43af10c26ac57a363805a03980621a161edc48b81f353185325ecd5a"
          }
        ]
      },
      "learningNotes": "## 00:00—02:48 · 本次测量的是周期与占空比\n\n老师先画 PWM 波形，把周期定义为相邻同类边沿之间的时间，把占空比定义为一个周期中高电平所占的比例。单用输入捕获也能记录“上升—下降—下一次上升”三个时刻再相减；本节加入从模式控制器，让每个周期自动重新计时，计算更直接。\n\n原讲授顺序有四步：把参考手册总图与课程简图对应起来；读懂输入捕获节点名；选择 TRGI 来源；最后推导 PWM 测量原理。本节是原理课，下一节才落到实验代码。\n\n## 02:49—08:30 · 在 RM0008 总图中找到熟悉的四部分\n\n老师打开当时使用的 RM0008 版本，在高级定时器章节看框图。章节号、表号和页码会随版本变化，应按高级控制定时器的名称定位。\n\n先找 PSC、CNT、ARR、RCR 与右边的 U：它们就是时基单元和 Update 事件。再看下方 CCR1—CCR4，左侧是四个输入捕获通道，右侧是输出比较和输出控制。CH1/CH2 成对，CH3/CH4 成对。最后找到上方的从模式控制器，以及 TRGI 输入和 TRGO 输出。[07:00 原框图叠加对照](https://www.bilibili.com/video/BV11X4y1j7si/?p=47&t=420)展示的是同一组功能在两种画法中的对应位置。\n\n这一段的目标是能独立沿手册图追踪信号，而不是只背下课堂简图的位置。RCR 和互补输出等高级定时器专有部分，仍要和前面学过的通用定时器区别。\n\n## 08:31—12:03 · 为什么本节要专门学节点名\n\n老师先指出输入捕获图里有 TI1、TI1FP1、TI1FP2、IC1、IC1PS 等名字，再解释本次测量需要把 TI1FP1 接到 TRGI。只有认出它在哪个处理阶段，才知道从模式控制器接收的究竟是什么。\n\n随后回顾路径：输入引脚→滤波→边沿与极性选择→直接/间接/TRC 选择→捕获分频→CC 事件。CC 事件发生时，把 CNT 保存到对应 CCR。注意给 TRGI 的分支位于捕获分频之前，因此 TI1FP1 不能解释成已经经过 DIV1/2/4/8 捕获分频的结果。\n\n## 12:04—15:23 · 把 TI、F、P 与两个数字拆开读\n\n[13:00 节点命名图](https://www.bilibili.com/video/BV11X4y1j7si/?p=47&t=780)中，TI 表示 Timer Input，TI1、TI2 是两个输入信号；F 表示经过滤波；P 表示经过极性选择。第一个数字指出信号从哪一路输入，P 后的数字指出供哪个捕获通道使用。\n\n沿原图逐个读：TI1FP1 从 TI1 来、给通道 1 用，是 CH1 的直接路径；TI2FP1 从 TI2 来、给通道 1 用，是 CH1 的间接路径。TI1FP2 从 TI1 来、给通道 2 用，是 CH2 的间接路径；TI2FP2 则是 CH2 的直接路径。\n\n本次让 CH1 选择 TI1 的上升沿，因此 TI1FP1 对应这一选定边沿；CH2 则通过间接输入记录同一 TI1 的下降沿。不要因为二者都来自一个外部引脚，就把它们保存的 CCR 也看成同一个。\n\n## 15:24—18:19 · 找到 TRGI 前面的来源选择器\n\n老师从手册总图摘出 TRGI 前的多路选择部分。[17:00 原框图](https://www.bilibili.com/video/BV11X4y1j7si/?p=47&t=1020)可以找到 ETR 经处理得到的 ETRF、内部触发 ITR0—ITR3、TI1F_ED、TI1FP1、TI2FP2。课堂把内部触发与边沿检测的一支概括为 TRC，再与另外几路对照。\n\nETR 是外部触发引脚输入，TI1FP1 和 TI2FP2 是刚认过的直接捕获路径。老师本节屏蔽了 ETR 和 TI1F_ED 的细节，重点留给内部定时器级联与本次测量所需的 TI1FP1。原片提到 TIM1 的 ETR 在 PA12、TIM2 的默认 ETR 在 PA0，用来说明外部触发确有引脚入口。\n\n## 18:20—19:58 · ITR0 不代表全芯片固定的一只定时器\n\nITR0—ITR3 用于把其他定时器的 TRGO 引进来。老师强调：同样写 ITR0，在不同从定时器行里的含义可能不同，必须查对应关系表。[19:00 原内部触发表](https://www.bilibili.com/video/BV11X4y1j7si/?p=47&t=1140)分别列出高级与通用定时器的连接关系。\n\n读表时，先确定自己配置的是哪只从定时器，找到那一行，再根据想接收的主定时器选择列。图里还包含 TIM5、TIM8 等系列成员；STM32F103C8T6 只有自身具备的定时器可用，不能把家族表里的每个名称都当成本芯片外设。\n\n## 19:59—22:49 · 回到上一节的同步例，查出两个 ITR0\n\n原例仍是 TIM1 的 TRGO 控制 TIM2、TIM3 的 TRGI。TIM1 主模式为使能，后两只为门模式。现在补上“内部怎么接”的细节：[21:00—22:00 原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=47&t=1260)在通用定时器表里逐行查询。\n\n对 TIM2，ITR0 对应 TIM1，另外几列在原表分别列 TIM8、TIM3、TIM4，因此选 ITR0。对 TIM3，ITR0 也对应 TIM1，另外列则是 TIM2、TIM5、TIM4，所以这里同样选 ITR0。结论来自各自的行，不能只因两者都要级联就省略查表。\n\n## 22:50—24:48 · PWM 测量：捕获两种边沿，再用上升沿复位\n\n[24:00 原测量结构图](https://www.bilibili.com/video/BV11X4y1j7si/?p=47&t=1440)把 PWM 只接到 CH1。CH1 直接捕获上升沿，CH2 间接捕获下降沿，两路捕获分频都为 1，与前面超声波测脉宽的路径相同。\n\n新增动作是：选择 TI1FP1 作为 TRGI 来源，把从模式设为复位。于是每个上升沿既参与 CH1 捕获，也触发 CNT 重新从零计时。下降沿到来时，CH2 保存自本周期开始以来的高电平计数；下一个上升沿到来时，CH1 保存上一整个周期的计数，然后开始新一轮。\n\n## 24:49—27:29 · 原图 CCR2=3、CCR1=10，直接得到 30%\n\n[26:00—27:00 原波形推导](https://www.bilibili.com/video/BV11X4y1j7si/?p=47&t=1560)分三行：最上是 PWM，中间是 TI1FP1 触发脉冲，最下是 CNT 台阶。第一个上升沿把 CNT 清到零，随后计数；下降沿到来时 CNT=3，保存到 CCR2；下一次上升沿前 CNT=10，保存到 CCR1，并再次清零。\n\n```text\n周期 = CCR1 × 计数时间分辨率\n高电平时间 = CCR2 × 计数时间分辨率\n占空比 = CCR2 / CCR1 = 3 / 10 = 30%\n```\n\n相同的时间分辨率在相除时抵消，所以占空比可以直接取两者比值。本图中的 3、10 是解释测量过程的示例，不是下一节已经测到的具体数据。刚开始运行时也需要先建立一个完整周期，不能把未经历有效起始上升沿的初始捕获当成稳定结果。\n\n## 来源与核对范围\n\n本页读完 P47 完整音轨 ASR，并亲看十张原图，核对节点拼写、内部触发表、单线输入和 3/10 的原波形。保留“总图→节点名→TRGI→测量”的顺序。ASR 不是作者字幕；正文没有添加原片不存在的初始化函数或声称完成了下一节实验。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1648.5973125,
        "asrSegments": 634,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "670ec128cbe7c47b17929ea5e9eb626608a9007b39e55f2e8ca400b2a5079170",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 48,
      "phase": "tim",
      "title": "9.9 [定时器] PWM 参数测量实验",
      "duration": 2865,
      "summary": "沿PWMMeasurement工程先调通USART1中文输出，再由TIM3/PA6产生1ms、20%待测PWM；配置TIM1/PA8双捕获和TI1FP1复位，按Trigger标志读取周期与占空比并显示原0.999ms/19.92%结果。",
      "notes": "保留先串口、输出、呼吸测试、固定20%、测量配置、主循环的原顺序，逐项核对原App_TIM3_Init/App_TIM1_Init。原片公式用sin与duty*999，实测19.92%而非ASR误记19.2%。明确TIM3无MOE、CCPreloadControl不等于CCR1预加载，原轮询无超时/除零防护。",
      "points": [
        "USART1仅Tx/PA9 AF_PP10MHz，115200 8N1，并统一UTF-8中文显示",
        "作者本节实际补上局部结构体= {0}，不能套用前课未初始化结论",
        "App_TIM3_Init PSC71/ARR999、PWM1/High/PA6 AF_PP2MHz，先呼吸验证再CCR200固定20%",
        "TIM3原MOE/CCPreloadControl调用保留并明确芯片范围及OC1PE修正",
        "App_TIM1_Init PSC71/ARR65535，上升DirectTI和下降IndirectTI，TI1FP1从模式Reset",
        "Trigger清除/等待后读GetCapture1/2；浮点占空比，ms周期，Printf和Delay100"
      ],
      "cid": 26757957690,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 180,
            "observation": "原板PA6到PA8跳线和TTL/调试器接线。",
            "frameSha256": "ba1a4c056254dcd5ddc5c3a87fab7fe70f3b7b1e269205bac05aff077a4df95e"
          },
          {
            "seconds": 480,
            "observation": "USART GPIO结构声明，作者开始补初始化。",
            "frameSha256": "41c29a1ff0a10b2e0e39745c03f85fc7e04aada07a1f01e0c234472ed1d325a2"
          },
          {
            "seconds": 510,
            "observation": "GPIO_InitStruct和USART_InitStruct均= {0}，115200。",
            "frameSha256": "c6ca7198374c5fab5ab9c2e6fceaf4020440437a2dbd9a1537d78f1d61228ab9"
          },
          {
            "seconds": 600,
            "observation": "原My_USART_SendString接口开始录入中文。",
            "frameSha256": "0656bc0d0da591fbc6ec356a2b4ee875d9d535bba5f40e20ab2c1e72ff3fc559"
          },
          {
            "seconds": 960,
            "observation": "App_TIM3_Init时基结构= {0}。",
            "frameSha256": "c392df4fc4fabc1618565d8d217fda118ce24179718f1ce30be081b2654ecda1"
          },
          {
            "seconds": 1020,
            "observation": "TIM3 Up/999/71/RCR0，ARR preload开启。",
            "frameSha256": "c72a4125677573ad9ab8cb8ef386bcd76db488b1c1e9f3743a8804c60d455c8c"
          },
          {
            "seconds": 1140,
            "observation": "TIM3时基与PA6 PWM1图，MOE画法仍沿用高级定时器。",
            "frameSha256": "451a804838f96bcd2016604ca7227f80128d850b339e91f4f83778555775b9a1"
          },
          {
            "seconds": 1260,
            "observation": "PA6 AF_PP2MHz，OC结构= {0}，PWM1/High/OutputState ENABLE/Pulse0。",
            "frameSha256": "7fa4ccc900a5b733c93205f173444a066ca35efe79484e7b44748dfbdb8141b1"
          },
          {
            "seconds": 1290,
            "observation": "PPT原MOE及CCR预加载步骤标记。",
            "frameSha256": "b5db42f9d3f09f2b8189193bfc3292848c8c6367fd1e5c117cc5f6b1e4567638"
          },
          {
            "seconds": 1312,
            "observation": "原TIM_CtrlPWMOutputs(TIM3,ENABLE)、TIM_CCPreloadControl(TIM3,ENABLE)两行。",
            "frameSha256": "89c94d4389ffbbcbc3e10f818ca991af8e2f5a83e08f908402b250c884b3d5bf"
          },
          {
            "seconds": 1320,
            "observation": "App_TIM3_Init函数整体回看。",
            "frameSha256": "738bdc897d23628e05a2d20325d7b1dbb0d76d66cca6077e21bee13305320b2b"
          },
          {
            "seconds": 1380,
            "observation": "呼吸循环原式少乘号中间状态与ccr1=duty*999。",
            "frameSha256": "e5d11608213a2c3b7bfa98d3758234eaaff91cdf50c18fb55e36a06ed9cb7de2"
          },
          {
            "seconds": 1440,
            "observation": "补齐乘号后的GetTick、sin、duty*999、TIM_SetCompare1原完整循环。",
            "frameSha256": "7300cf0a25ab4a0adbd6b19634fb611780664eb270907309e1817c439a1a65b3"
          },
          {
            "seconds": 1500,
            "observation": "选中准备注释呼吸计算的前三行。",
            "frameSha256": "4c62d5410af29de05147a71354112ed6ad277689a833281298acdcc5dff1b088"
          },
          {
            "seconds": 1530,
            "observation": "待测框图手写1ms/20%，旁边旧截图仍30%，非最终实测。",
            "frameSha256": "e940aba9c225a617114cce87ceb36e52787ae4821e5d68fe4843afb1b5cb2efa"
          },
          {
            "seconds": 1860,
            "observation": "App_TIM1_Init = {0}时基录入。",
            "frameSha256": "cf28130e6ca9ad74acedcb0b368708ec25b3cbced72ca1ada5fffd18cb600990"
          },
          {
            "seconds": 1870,
            "observation": "TIM1时基Period开始录入，非最终状态。",
            "frameSha256": "14044b2ff67bb47adba16db612a33b39199dcf675e609f6e5171a18e1f975d78"
          },
          {
            "seconds": 1920,
            "observation": "TIM1完整Up/65535/71/RCR0、ARR预加载和启动。",
            "frameSha256": "2d83cc3229023541e1e851ceff2f174360991503c2d3b94f156fd01e74fe512f"
          },
          {
            "seconds": 2040,
            "observation": "PA8 IPD及清零GPIO结构体。",
            "frameSha256": "032a397ad2a361cc1870d13c29968c45dcf60f923ea96be3c89cd8030166a65c"
          },
          {
            "seconds": 2220,
            "observation": "CH1全参数、CH2通道/Falling/DIV1录入。",
            "frameSha256": "7fa59d159967fb3f4e8e85b66981e9375b1897081e8fe0750fea0dfbad5147b4"
          },
          {
            "seconds": 2240,
            "observation": "CH2最终IndirectTI参数录入，来自TI1。",
            "frameSha256": "41b540d9d7cc92c5c22c01d80e15cbedd43a9555ff7a1b228d400e951066dd9f"
          },
          {
            "seconds": 2400,
            "observation": "TIM_SelectSlaveMode官方源原型与8选项。",
            "frameSha256": "4cbe3b787f2764481c554846b27e9faf04823075a89ae19b88733a839e70059d"
          },
          {
            "seconds": 2440,
            "observation": "原InputTrigger及SlaveMode在App_TIM1_Init末尾录入。",
            "frameSha256": "3b9a723ad59938506a0ae7965a5951d9528dcd059f1643ff058957790189d92a"
          },
          {
            "seconds": 2460,
            "observation": "回看TIM1时基= {0}和65535。",
            "frameSha256": "d6776535e5192c6099af565cd8bbc17013fbca39db38c4a29cea159dab1f032e"
          },
          {
            "seconds": 2640,
            "observation": "main初始化USART1/TIM3/TIM1、SetCompare1(TIM3,200)、开始清Trigger等待。",
            "frameSha256": "6a2b044a97e888c2d9a53f63d79881dff162e32ece39d0f76b74e9acf9631098"
          },
          {
            "seconds": 2770,
            "observation": "Trigger轮询、GetCapture1/2、period乘1e-6与1e3、float占空比。",
            "frameSha256": "3816c471e24a00d54a26756fec7351752c69216a7adb5a9525935f1e5f6d1615"
          },
          {
            "seconds": 2805,
            "observation": "原实测串口0.999ms、19.92%，并非19.2%。",
            "frameSha256": "ea4e1fd2d87a64ba01f163aecdae2f2088aba68f7e53aaac596b83583b345d19"
          },
          {
            "seconds": 2820,
            "observation": "最终Delay100录入及Printf完整格式。",
            "frameSha256": "1d66d23b373b9ae2d3bc186ac2dc34ed0b05278564ac785a391c3bef72915772"
          },
          {
            "seconds": 2825,
            "observation": "加延时后原串口继续0.999ms、19.92%。",
            "frameSha256": "41f26189e0e8fcaeb62b8f90bfbdecd9c877e0c63614b9f68ae3486a956f8fe7"
          }
        ]
      },
      "learningNotes": "## 00:00—03:14 · TIM3 产生待测信号，TIM1 负责测量\n\n本节建立 PWMMeasurement 工程，把上一节的原理落实到代码。TIM3_CH1 从 PA6 输出待测 PWM，使用跳线接到 PA8/TIM1_CH1。TIM1 的 CH1、CH2 和从模式控制器共同测周期与占空比，结果经 USART1 发给电脑。\n\n视频先介绍原理与电路，再初始化串口、产生待测信号、配置 TIM1 时基与捕获、选择复位触发，最后编写读取计算。这根 PA6→PA8 的线连接的是外部 PWM 信号；本实验没有用 ITR 把 TIM3 的 TRGO 接到 TIM1。\n\n## 03:15—06:10 · 串口这次只配置发送引脚 PA9\n\n老师从母版建立工程，在 `App_USART1_Init` 中先开 GPIOA 时钟，PA9 配置成 `GPIO_Mode_AF_PP`、`GPIO_Speed_10MHz` 并调用 `GPIO_Init`。这次只要向电脑输出数据，所以没有像上一节一样初始化 PA10 接收脚。\n\nPA9 接 USB 转 TTL 的 RXD，开发板与模块连接地。先把输出通道调通，后面的数字变化才有可观察的结果。\n\n## 06:11—09:28 · 原片主动补上结构体的零初始化\n\nUSART1 位于 APB2。开启它的时钟后，老师声明结构体，并在本节特别指出此前局部结构体未赋初值可能引出不确定问题，返回 GPIO 处一并补上 `= {0}`。[08:30 原画面](https://www.bilibili.com/video/BV11X4y1j7si/?p=48&t=510)能同时看到 GPIO 与 USART 结构体的零初始化。\n\nUSART 参数为 115200、无硬件流控、`USART_Mode_Tx`、无奇偶校验、1 位停止位、8 位数据，然后 `USART_Init` 和 `USART_Cmd(USART1, ENABLE)`。main 先调用串口初始化。本节的零初始化是作者实际补录的内容，不能继续沿用此前课程“结构体成员未初始化”的结论。\n\n## 09:29—11:50 · 中文测试字符串还需要编码匹配\n\n老师引用 `usart.h`，调用 `My_USART_SendString` 发送“你好世界”，先编译下载。串口助手设为 115200、8N1、无流控、ASCII 文本接收；遇到中文显示问题，又检查 Keil 编辑设置为 UTF-8，并在串口助手的字符编码菜单选 UTF-8。复位后出现中文，完成串口测试。\n\n这是本节串口演示与上一节 Hello world 的实际差别。串口通信格式一致，只能保证字节解释的基本条件，中文字节还要由相同的字符编码解码。\n\n## 11:51—17:09 · App_TIM3_Init 先产生 1ms 的计数周期\n\n老师先从时基图推导：TIM3 时钟 72MHz，PSC=71 得到 1μs 分辨率，ARR=999 得到 1000 个计数，即 1ms 周期、1kHz PWM。TIM3 没有 RCR，结构体中的该字段在原代码仍填 0。\n\n[17:00 前后完整时基录入](https://www.bilibili.com/video/BV11X4y1j7si/?p=48&t=1020)的关键参数为：\n\n```c\nTIM_TimeBaseInitTypeDef TIM_TimeBaseInitStruct = {0};\nTIM_TimeBaseInitStruct.TIM_CounterMode = TIM_CounterMode_Up;\nTIM_TimeBaseInitStruct.TIM_Period = 999;\nTIM_TimeBaseInitStruct.TIM_Prescaler = 71;\nTIM_TimeBaseInitStruct.TIM_RepetitionCounter = 0;\nTIM_TimeBaseInit(TIM3, &TIM_TimeBaseInitStruct);\nTIM_ARRPreloadConfig(TIM3, ENABLE);\nTIM_Cmd(TIM3, ENABLE);\n```\n\n前面还先调用 APB1 的 TIM3 时钟使能。ClockDivision 没有另赋值，但这次结构体已清零，取零值，不是未初始化局部内存。\n\n## 17:10—21:03 · PA6 复用输出与 TIM3_CH1 的 PWM1\n\n时基之后，开启 GPIOA 时钟，把 PA6 配成 AF_PP、2MHz，并调用 `GPIO_Init`。再使用零初始化的 `TIM_OCInitTypeDef` 配置输出比较。原片填写 PWM1、高极性、`TIM_OutputState = ENABLE`、Pulse=0，最后 `TIM_OC1Init(TIM3, ...)`。[21:00 原代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=48&t=1260)能看到这些原字段。\n\nPulse 是 CCR1 初值，先为零；后面再用 `TIM_SetCompare1` 改变它。TIM3 是通用定时器，原片也说明不设置带 N 的互补输出参数。\n\n## 21:04—22:03 · 原片两行要与 TIM3 的真实功能区分\n\n老师接着按此前高级定时器的画法追加 MOE 与预加载。[21:52 原画面](https://www.bilibili.com/video/BV11X4y1j7si/?p=48&t=1312)实际写的是：\n\n```c\nTIM_CtrlPWMOutputs(TIM3, ENABLE);\nTIM_CCPreloadControl(TIM3, ENABLE);\n```\n\n这是需要明确更正的原录入。STM32F103 的 TIM3 没有高级定时器 MOE，`TIM_CtrlPWMOutputs` 不能作为 TIM3 输出的必要使能步骤；本地 ST 标准库也把该函数参数限制在带主输出控制的定时器。第二个接口在库中写 CR2 的 CCPC 位，并非 CCR1 数值预加载；TIM3 的相应位也没有高级定时器的 CCPC 功能。若要使 TIM3 的 CCR1 值按更新事件生效，正确的对应接口是 `TIM_OC1PreloadConfig(TIM3, TIM_OCPreload_Enable)`，这里作为教材更正，未冒充作者原代码。[RM0008 的通用定时器与 OC1PE 定义](https://www.st.com/resource/en/reference_manual/rm0008-stm32f101xx-stm32f102xx-stm32f103xx-advanced-arm-based-32-bit-mcus-stmicroelectronics.pdf)可用于对照。\n\n## 22:04—25:19 · 先做呼吸灯检查，再改固定 20%\n\n老师在 main 调用 `App_TIM3_Init`，先用呼吸灯代码验证输出，引用 `delay.h` 和 `math.h`。23:00 时正弦表达式还少乘号，之后实际补上；[24:00 完整原循环](https://www.bilibili.com/video/BV11X4y1j7si/?p=48&t=1440)为：\n\n```c\nfloat t = GetTick() * 1.0e-3f;\nfloat duty = 0.5*(sin(2*3.14*t) + 1);\nuint16_t ccr1 = duty * 999;\nTIM_SetCompare1(TIM3, ccr1);\n```\n\n原代码这里确实乘 999；ARR=999 的计数周期是 1000，因此不能把这行解释成精确覆盖 100% 的占空比映射。老师临时把 PA6 连接到 PC13，借板载 LED 观察到呼吸效果，然后注释时间、正弦和 ccr1 三行，把 `TIM_SetCompare1(TIM3, 200)` 移到循环前，生成固定 1ms、20% 的待测 PWM。该临时接灯检查与正式 PA6→PA8 测量是两个步骤。\n\n## 25:20—29:31 · TIM1 测量时基选择最大 ARR\n\n视频回顾测量路径：CH1 直接上升、CH2 间接下降，TI1FP1 作为 TRGI，从模式复位。先确定 TIM1 的计数分辨率和范围：输入时钟 72MHz，PSC=71 得到 1μs；向上计数；ARR=65535；RCR=0。\n\n测量计数器应尽量避免在待测周期中回绕，因此 ARR 取最大值。这里 ARR=65535 对应 65536μs 的完整计数区间，并不表示本实验待测 PWM 周期变为 65ms；待测信号仍由 TIM3 的 ARR999 决定。\n\n## 29:32—32:13 · App_TIM1_Init 的原时基配置\n\n老师声明 `App_TIM1_Init`，先开 TIM1 的 APB2 时钟，再使用 `= {0}` 的时基结构体，依次填 Up、65535、71、0。调用 `TIM_TimeBaseInit(TIM1, ...)` 后，原片继续打开 ARR 预加载和计数器：[32:00 原完整代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=48&t=1920)。\n\n```c\nTIM_ARRPreloadConfig(TIM1, ENABLE);\nTIM_Cmd(TIM1, ENABLE);\n```\n\n至此 TIM1 已开始计数，但捕获与复位路径还要继续配置。这里的 `App_TIM1_Init` 用来测量输入，与 `App_TIM3_Init` 产生输出的职责分开。\n\n## 32:14—35:47 · PA8 下拉输入，CH1 直接捕获上升沿\n\n开启 GPIOA 时钟，用清零的 GPIO 结构体把 PA8 配成 `GPIO_Mode_IPD`，再调用 `GPIO_Init`。接着声明并清零 `TIM_ICInitTypeDef TIM_ICInitStruct`。\n\nCH1 的参数为 `TIM_Channel_1`、Filter0、`TIM_ICPolarity_Rising`、`TIM_ICPSC_DIV1`、`TIM_ICSelection_DirectTI`，然后 `TIM_ICInit(TIM1, &TIM_ICInitStruct)`。这对应每个输入上升沿记录一次 CNT 到 CCR1，没有另开本例输入滤波。\n\n## 35:48—37:47 · CH2 从同一 TI1 记录下降沿\n\n老师复用同一结构体，改为 `TIM_Channel_2`、Filter0、`TIM_ICPolarity_Falling`、DIV1、`TIM_ICSelection_IndirectTI`，再调用 `TIM_ICInit`。[37:20 参数画面对照](https://www.bilibili.com/video/BV11X4y1j7si/?p=48&t=2240)能看到最终 IndirectTI 的录入。\n\nCH2 的间接输入来自 CH1/TI1，所以不用额外接 CH2 引脚。它保存本周期下降沿之前的计数到 CCR2；与 CH1 记录的整个周期相比，就能算出高电平比例。\n\n## 37:48—41:15 · 两个新接口设置来源与复位动作\n\n老师分别介绍 `TIM_SelectInputTrigger` 和 `TIM_SelectSlaveMode`：前者选择 TRGI 从哪里来，后者选择收到触发后做什么。原片依此录入：\n\n```c\nTIM_SelectInputTrigger(TIM1, TIM_TS_TI1FP1);\nTIM_SelectSlaveMode(TIM1, TIM_SlaveMode_Reset);\n```\n\nTI1FP1 是 CH1 直接路径的选定上升沿信号。每个上升沿既让 CH1 捕获前一周期计数，又触发 CNT 重新计时。main 的初始化顺序为 `App_USART1_Init`、`App_TIM3_Init`、`App_TIM1_Init`，随后设置待测信号 CCR1=200。\n\n## 41:16—44:24 · 主循环用 Trigger 标志等待边界\n\n老师在总图补充 Trigger 事件：TRGI 引起复位时，也设置 Trigger 标志。因此一轮读取先清标志，再轮询等待它重新变 SET，随后读取捕获值。[46:10 后续完整主循环对照](https://www.bilibili.com/video/BV11X4y1j7si/?p=48&t=2770)：\n\n```c\nTIM_ClearFlag(TIM1, TIM_FLAG_Trigger);\nwhile(TIM_GetFlagStatus(TIM1, TIM_FLAG_Trigger) == RESET);\nuint16_t ccr1 = TIM_GetCapture1(TIM1);\nuint16_t ccr2 = TIM_GetCapture2(TIM1);\n```\n\n这等待的是周期边界事件，不是串口接收中断。原循环没有超时和启动阶段完整周期筛选；待测信号消失时会阻塞，刚启动的第一组捕获也不能据此保证已经完整。\n\n## 44:25—46:26 · 原公式先换毫秒，再处理浮点除法\n\n视频先把 CCR1 乘 1μs 换秒，再乘 1000 换毫秒。占空比先把 CCR2 转为 float，避免整数除法把不足 1 的比例截成零，再乘 100 得百分数。原代码是：\n\n```c\nfloat period = ccr1 * 1.0e-6f * 1.0e3f;\nfloat duty = ((float)ccr2) / ccr1 * 100.0f;\nMy_USART_Printf(USART1, \"周期=%.3fms, 占空比=%.2f%%\\r\\n\", period, duty);\n```\n\n格式串中的 `%%` 用来输出一个百分号，周期保留三位小数，占空比两位。代码直接用 ccr1 作除数，未单独处理零值；这是原演示的实际边界，不能把本段当作已完成全部输入有效性检查的通用仪表程序。\n\n## 46:27—47:45 · 保留真实读数与最后追加的延时\n\n编译下载后，[46:45 原串口结果](https://www.bilibili.com/video/BV11X4y1j7si/?p=48&t=2805)显示周期 **0.999ms**、占空比 **19.92%**。这和此前示意图里“1000μs、30%”的占位截图不同，也应纠正机器把口述识别成 19.2% 的误差。目标设置是 1ms、20%，原片只说明实测有小误差，没有进一步定位误差来源。\n\n因为输出太快，老师最后在循环末尾追加 `Delay(100)`，再次下载，串口仍显示这些数值，刷新速度降低。这里的延时控制显示更新速度；测量时基和输入 PWM 并没有改成 100ms 周期。\n\n## 来源与核对范围\n\n本页完整读完 P48 全部音轨 ASR，并亲看二十九张原图，含结构体零初始化、两行错误接口、原正弦循环、最终公式与真实结果的定点补抓。保留原函数、参数和操作先后；对 TIM3 无 MOE、CCPC 与 CCR1 预加载区别明确标为修正。ASR 不是作者字幕，未取得作者工程，未把输出读数当作所有配置细节正确或全部异常场景通过的证明。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 2864.0213125,
        "asrSegments": 1058,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "57d2175fde1d6b150a7b0c6b0a69435a79877aad73f6d00dbf917bef9786ad09",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 49,
      "phase": "adc",
      "title": "10.1 [ADC] 逐次逼近型 ADC",
      "duration": 1744,
      "summary": "从温度连续/离散记录和4/12位比较，沿69g天平、采样保持框图，逐步完成2.21V的四位SAR原例。",
      "notes": "全片概念课，没有ADC初始化程序。正文完整解释六部分的原图和计算，明确四位模型的教学范围，并按ST AN2834区别码值端点比例、理想LSB和实际准确度。",
      "points": [
        "ADC在本章实际转换的是电压，其他物理量需先转成信号",
        "采样深度是结果位数，12位有4096个码值0至4095",
        "保留原3.3/15与3.3/4095算例，但校注LSB须按4096级及原舍入误差",
        "69g原例按50、25、12.5、6.25g依次试砝码",
        "采样取点、保持让多轮比较针对同一电压",
        "2.21V原例依次保留b3、舍b2、保留b1、舍b0，得到1010"
      ],
      "cid": 26547585091,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 360,
            "observation": "温度连续曲线与两小时柱图，time数组缺8，数组为课件示意格式。",
            "frameSha256": "fd2baeac2b331fb1f2655c112eb5ab00c56e5bd72080cb8b992386759399e8ca"
          },
          {
            "seconds": 480,
            "observation": "芯片框图ADC1/2，12位逐次逼近。",
            "frameSha256": "cd7030bdc1cec5d7d309f458d29fa5c845c4a9010337111ca57d08de26d0ba38"
          },
          {
            "seconds": 660,
            "observation": "4位3.3/15、12位3.3/4095，原二进制及约算误差。",
            "frameSha256": "cb2c38b9d854885ccfbaf6ecbd4f1adc45f27047f3f6a964738d721d518e9a3c"
          },
          {
            "seconds": 780,
            "observation": "原12位比值、100110110001b与1.9997V。",
            "frameSha256": "cdf8083f65d76fa4aad9391cc4281a80d692f70106ce9975178d8919641332db"
          },
          {
            "seconds": 960,
            "observation": "69g、50/25/12.5/6.25g天平原例。",
            "frameSha256": "3826cb6a933a43df5dd6b70f848b968db05f5900ee98767010048703ce8445c8"
          },
          {
            "seconds": 1140,
            "observation": "b0至b3结果位、电压发生器、比较器与采样保持框图。",
            "frameSha256": "bf4f7f928e0b5ca948d8c4959ff05c86a8c130d196dc76e43b1d57999095cb65"
          },
          {
            "seconds": 1380,
            "observation": "开关、电阻、电容与比较器，正解释保持。",
            "frameSha256": "f230b09438e300e859564c293203abf7920bd61ccdac827c980e7ced548492ee"
          },
          {
            "seconds": 1560,
            "observation": "2.21V输入与1.76、0.88、0.44、0.22V四个位权。",
            "frameSha256": "f0b055274accfac265a55f389cb8b3bd8f41e08599a232030e62beda60578571"
          },
          {
            "seconds": 1680,
            "observation": "已试到b1，左侧保留1.76+0.44，b2为0。",
            "frameSha256": "332e890f394e9f432cc24e8d5f19202ad19d44e2c87782e36989692b7034814b"
          },
          {
            "seconds": 1720,
            "observation": "最终b3..b0为1010，2.20V与2.42V的最后试探。",
            "frameSha256": "2fe33e5c9b017c14cd068d8685f73ee52e6ebd929f663fca60072ddd95e22e60"
          }
        ]
      },
      "learningNotes": "## 00:00—01:07 · 第十章先讲ADC原理\n\n原片把本节分为六部分：ADC是什么、芯片中的ADC、采样深度、逐次逼近结构、采样保持、完整转换例子。全片围绕温度曲线、天平和四位电压模型讲解，没有编写ADC初始化或采集程序。\n\n## 01:08—04:45 · 用气温曲线说明连续信号\n\nADC是Analog-to-Digital Converter，模拟到数字转换器。作者先画某地0到24小时的气温曲线：不只整点有温度，8点半、8点10分乃至更细时间点也有值，用它说明时间连续；同一时刻的温度也不限于19.3一位小数，用它说明幅度连续。\n\n这里的“无限精度”是在建立连续量的数学模型，并不是说真实温度计具有无限测量精度。随后作者指出，单片机有限的存储不能原样保存无穷多个时间点及无限位小数，需要用有限数字表达信号。\n\n## 04:46—07:36 · 数字记录只在选定时刻保存有限精度的值\n\n右图改为气象站每两小时记录一次，温度保留一位小数。原图给出0点17.1℃、2点17.5℃等有限测量值，并画time与temp两个数组对应采样时间和温度。[视频06:00：连续曲线与离散记录对照](https://www.bilibili.com/video/BV11X4y1j7si/?p=49&t=360)。\n\n课件数组使用方括号和省略写法，且time一行漏列8点，图上仍有8点记录；这里是数据表示示意，不作为可直接编译的C数组代码。到07:12，作者把讨论收回本章外设：STM32的ADC实际转换的是输入电压，不是直接测出自然界的温度，其他物理量需要先由传感器等转成相应电信号。\n\n## 07:37—10:24 · 本芯片两个12位ADC，课程先学ADC1\n\n作者在内部框图中指出ADC1、ADC2，二者为12位逐次逼近型ADC，当前课程主线先学ADC1。接着解释“采样深度”：这里指用多少位二进制表示转换结果，12位结果从全0到全1，具有4096种可能码值，数值范围0～4095。\n\n[视频08:00：ADC1/ADC2在芯片框图中的位置](https://www.bilibili.com/video/BV11X4y1j7si/?p=49&t=480)。这里的位数描述幅度分辨能力，不是采样间隔、每秒采多少点，也不是缓冲区能存多少个样本。\n\n## 10:25—13:51 · 保留4位与12位的2V原算例，并辨明模型\n\n课件先用端点对应模型：4位0000对应0V、1111对应3.3V，以3.3/15=0.22V作码值到电压的比例。2V原例取1001b，即9，9×0.22=1.98V，与2V相差0.02V。\n\n接着画12位0～4095，写3.3/4095≈0.000806V。原图给出100110110001b，用舍入后的0.000806相乘，列出约1.9997V及约0.0003V误差。它要表达的是位数增加后，幅度分格更细。[视频13:00：两组原算式](https://www.bilibili.com/video/BV11X4y1j7si/?p=49&t=780)。\n\n### 本站计算校注：码值端点比例与理想LSB不能混为一谈\n\n原图的12位二进制是2481；若按未舍入的3.3/4095计算，它对应约1.99934V，并不是图中舍入计算的1.9997V。即使仍用这个端点模型，最接近2V的整数码也应为2482。因此本页保留原式供对照，不把0.0003V当成实际ADC精度结论。\n\n更进一步，STM32理想12位ADC的1LSB按参考电压范围/4096定义，参考3.3V时约0.8057mV，而不是用最大码4095充当量化级数。码范围0～4095与共有4096级是两件事；实际测量还会有偏移、增益、非线性等误差，分辨率不等于准确度。依据[ST AN2834的ADC误差与LSB定义](https://www.st.com/resource/en/application_note/an2834-how-to-get-the-best-adc-accuracy-in-stm32-microcontrollers-stmicroelectronics.pdf)。\n\n## 13:52—17:15 · 69g重物与四个砝码解释“逐次”\n\n作者把逐次逼近ADC也称SAR ADC，随后用天平演示：重物实际69g，砝码依次50g、25g、12.5g、6.25g。从最大的开始尝试：放50仍偏轻，保留；加25后偏重，取下25；加12.5仍偏轻，保留；再加6.25，合计68.75g，接近69g。\n\n重点是每轮只试一个从大到小的权重，根据比较结果保留或去掉，而不是从最小值一次次加到69。[视频16:00：四个原砝码](https://www.bilibili.com/video/BV11X4y1j7si/?p=49&t=960)。\n\n## 17:16—20:10 · 将天平对应到四位SAR框图\n\n左下的待测电压相当于重物，采样保持电路相当于承放重物的托盘；比较器负责比较两边，结果寄存器的b3～b0相当于四个砝码，右侧电压发生器依据试探码产生比较电压。\n\n该四位图只是为了容易逐步推演，并不是把F103的ADC改为4位，也不是芯片另外提供一个可供用户输出的DAC。作者把结果位写1比作放砝码，写0比作取下，比较器的反馈决定这次试探是否保留。[视频19:00：原SAR结构与天平对应](https://www.bilibili.com/video/BV11X4y1j7si/?p=49&t=1140)。\n\n## 20:11—24:21 · 先采样，再在多轮比较期间保持\n\n逐次试探需要时间，如果这期间输入电压不断改变，相当于称重时重物一直变化。采样保持电路因此先取当前点，再暂时维持该电压，供后续比较。\n\n原图由开关、RADC、CADC组成：闭合开关，输入经电阻给电容充电，电容电压逐渐接近输入；断开开关，将电容与左侧信号隔开，右侧高输入阻抗使放电很小，从而近似保持。[视频23:00：采样开关与保持电容](https://www.bilibili.com/video/BV11X4y1j7si/?p=49&t=1380)。这是理想近似，不是瞬间充满、永不漏电；保持解释也不需要把比较器两个输入当成电压相等的“虚短”。\n\n## 24:22—26:45 · 2.21V原例先采样，再列出位权\n\n最后按原四位端点模型演示2.21V：先闭合采样开关，让电容接近2.21V，再断开保持。原片用3.3/15=0.22V列出b3、b2、b1、b0的位权，依次为1.76、0.88、0.44、0.22V。\n\n[视频26:00：输入2.21V与四个原位权](https://www.bilibili.com/video/BV11X4y1j7si/?p=49&t=1560)。这些数字继续沿用原片的四位教学模型，上面LSB校注仍适用，不能拿它们替代真实12位硬件的传递特性。\n\n## 26:46—29:02 · 从b3试到b0，最后保留1010\n\n原例先清四位，再逐个试1：\n\n1. 试b3：1.76V小于2.21V，保留1。\n2. 试b2：1.76+0.88=2.64V，超过2.21V，去掉这一位。\n3. 试b1：1.76+0.44=2.20V，仍小于2.21V，保留1。\n4. 试b0：2.20+0.22=2.42V，超过2.21V，去掉这一位。\n\n所以按b3到b0读结果为1010，对应原模型2.20V。[视频28:40：最后一位去掉后的原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=49&t=1720)。这一段完整展示先采样、保持、由高到低试探、比较、保留或清零的过程；下一节再分析STM32 ADC的具体结构。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1743.5093125,
        "asrSegments": 686,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "e082e0edd5d034729b24235ebe433d03abd825217d226b1fcc771fa6b2da3b97",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 50,
      "phase": "adc",
      "title": "10.2 [ADC] ADC 模块的结构框图",
      "duration": 1545,
      "summary": "沿原图从共享SAR的通道切换，进入常规与注入两份计划，最后推演TIM3周期触发中插入软件注入的五路原例。",
      "notes": "完整解释四部分原图与通道7/8/9、通道0至4两个实际示意例；原内部通道错号据ST手册和数据手册校注，采样示意时间与实际周期档位分开说明。",
      "points": [
        "一个ADC核心依次采样多路，非所有通道同瞬间采样",
        "PA0–7和PB0/1是C8十个外部输入0–9",
        "原14/15内部通道编号错误，温度/参考实际为ADC1的16/17",
        "常规序列最多16项，共用一个DR",
        "TIM3 PSC71、ARR999产生1ms更新TRGO触发",
        "注入最多4项，原综合题3/4插入后重新转换被打断的常规通道1"
      ],
      "cid": 26148276533,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 540,
            "observation": "LQFP48 PA0–7、PB0/1标通道0–9。",
            "frameSha256": "16fc6962cf05bb6b59108be0809236b94d3e3f0df177cc7be2ff8e258aa0c991"
          },
          {
            "seconds": 660,
            "observation": "课件外部0–13表，下面手写14温/15参，实际错误需更正。",
            "frameSha256": "d031053d603419ff025742931b06e8bfa9860f7a1f3f6a15a27e8c1954e7ebd9"
          },
          {
            "seconds": 900,
            "observation": "常规16项表用通道7/8/9和0.1/0.2/0.1us原计划。",
            "frameSha256": "335267cdf7bcfc11d685e38fad60573abb769bb14b0209801b832b25fa78d9fd"
          },
          {
            "seconds": 1020,
            "observation": "8个原触发来源包含TIM3_TRGO与EXTI11。",
            "frameSha256": "ae648cf4da43be383e59de74b55650199f1c5c4324edb91f6be27949e7ba6d58"
          },
          {
            "seconds": 1080,
            "observation": "TIM3输入72MHz，PSC71、ARR999、TRGO更新每1ms。",
            "frameSha256": "e9897da3b358b8016e0cdafa895520776d24cff04f8c67aadd116e49251419cb"
          },
          {
            "seconds": 1140,
            "observation": "每个触发后依次7/8/9，黄块是采样。",
            "frameSha256": "6bd3abaf8802794c4c900d748c7f72052528df1a581fc5fe1cd1cba1c921e4ec"
          },
          {
            "seconds": 1260,
            "observation": "注入4项，JDR1–4，三个差别。",
            "frameSha256": "fe403635ad801d94217e5876765b08144870d66174329ce8c652b872ae22533c"
          },
          {
            "seconds": 1380,
            "observation": "PA0–4原综合电路，两份计划及TIM3/软件触发。",
            "frameSha256": "e1b7806dfd6b78c80a7d2e666b23cd7e961fc5ca3f28b226cf03703c7c42d708"
          },
          {
            "seconds": 1500,
            "observation": "最终0/1/3/4/1/2顺序，被打断通道1重新出现。",
            "frameSha256": "8aba3a5c1d153a5276d0314a41005fc6a74f1f5f2ac9ebfb77dcb5a00ffd6b70"
          }
        ]
      },
      "learningNotes": "## 00:00—01:48 · 把上一节SAR原理放进STM32的ADC模块\n\n作者先从芯片框图中的ADC1、ADC2选出一个放大，按多路复用、常规序列、注入序列、综合例子四部分解释内部结构。全片仍是原理图与时序推演，没有录入库函数或完成多路采集实验。\n\n## 01:49—05:39 · 简化SAR符号前，先回顾采样开关\n\n原片重新画出比较器、结果位、电压发生器、采样保持。闭合开关时输入经电阻给电容充电，断开后近似保持，再进行逐位比较。作者把复杂的SAR主体换成一个五边形，把采样开关单独留在前面，后续用这个简化符号读通道结构。\n\n输入电压先被采下，再转换成12位数字并存入结果寄存器，程序从寄存器读取结果。这里的图形变换是在减少画面复杂度，没有改变先采样、后转换的过程。\n\n## 05:40—08:42 · 多个通道共用一个转换核心，依次切换\n\n作者复制前面的采样开关，每路模拟信号各接一只开关，共用后面的转换核心。先闭合第一路，采样后断开、转换、读结果；再对第二路、第三路重复，因此一个ADC可以完成多路测量。\n\n原片口述用“同时对多路转换”概括用途，但图中的操作是先后进行：同一个ADC核心依次采样各路，不代表所有通道在同一瞬间采样，也不代表每路都有独立转换器。后续序列就是安排这个先后顺序。\n\n## 08:43—12:08 · 外部引脚正确对应，内部通道编号需更正\n\n[视频09:00：LQFP48中的十个外部模拟输入](https://www.bilibili.com/video/BV11X4y1j7si/?p=50&t=540)。原片查到通道0～7对应PA0～PA7，通道8、9对应PB0、PB1。接着打开整理的引脚表，说明PC0等信号在当前封装没有引出，不能因为ADC通道选择字段存在，就在板上找到对应排针。\n\n这里原片有实质编号错误：09:36以后把温度传感器写成通道14、内部参考写成15，11:00附近的表也据此只列外部0～13。**F103正确应为ADC1通道16接内部温度传感器、17接VREFINT；14、15本来是PC4、PC5的外部通道，当前LQFP48未引出。** 原图的14/15标记保留为对照信息，跟做时不能照填错误通道。依据[ST RM0008的ADC_SMPR1说明](https://www.st.com/resource/en/reference_manual/rm0008-stm32f101xx-stm32f102xx-stm32f103xx-advanced-arm-based-32-bit-mcus-stmicroelectronics.pdf)和[DS5319引脚表](https://www.st.com/resource/en/datasheet/stm32f103c8.pdf)。\n\n## 12:09—16:01 · 常规序列是最多16项的转换计划\n\n原图把常规序列分成启动来源、Regular Sequence、DR三个部分。作者把序列比作计划表：每项选择一个通道，按表中顺序操作采样开关，再转换数据；常规序列最多有16项。\n\n原例只填三行：通道7采样0.1μs，通道8采样0.2μs，通道9采样0.1μs。执行时依次采7、转7，采8、转8，再采9、转9。每一次结果都进入同一个DR，并不是DR中同时排着三项结果。[视频15:00：原三行计划](https://www.bilibili.com/video/BV11X4y1j7si/?p=50&t=900)。\n\n采样时间指开关闭合、给采样电容建立电压的阶段，不包含后面的全部转换时间。图中0.1/0.2μs是解释计划的示意值；实际F1按通道选择ADC时钟周期档位，不是随意填任意微秒小数，同一通道的采样设置也不是每个序列位置各有一份。\n\n## 16:02—17:31 · 选择哪一个来源来启动常规计划\n\n常规序列左侧画一个触发来源选择器。原图列出TIM1_CH1、CH2、CH3、TIM2_CH2、TIM3_TRGO、TIM4_CH4、EXTI11和软件启动。作者选定一个来源后，以有效触发启动一次计划说明工作过程。\n\n[视频17:00：触发来源与序列的关系](https://www.bilibili.com/video/BV11X4y1j7si/?p=50&t=1020)。这里的“外部触发”是相对于ADC转换控制而言，来源可以是芯片内部定时器信号，不一定要从芯片外额外拉一根触发线。\n\n## 17:32—20:10 · TIM3每1ms触发通道7、8、9\n\n原例选择TIM3_TRGO。先假设TIM3输入72MHz，设PSC=71得到1MHz计数、一步1μs，再设ARR=999，每1000步产生更新，即1ms。把更新事件用作TRGO输出，因此每1ms给ADC一个触发。\n\n[视频18:00：PSC71、ARR999与更新TRGO](https://www.bilibili.com/video/BV11X4y1j7si/?p=50&t=1080)。回到ADC时序图，每个触发后都依次出现7、8、9，黄色小段表示各自采样时间，后面是转换部分。[视频19:00：重复执行原三项序列](https://www.bilibili.com/video/BV11X4y1j7si/?p=50&t=1140)。1ms是触发间隔，不是三路之间完全没有时间差，也不是每一路采样开关保持闭合1ms。\n\n## 20:11—22:07 · 注入序列与常规序列的三点差别\n\n注入序列也有触发来源、计划与结果，但最多4项，结果使用JDR1～JDR4分开保存，并具有优先于常规组的触发处理机制。原图以常规16项、注入4项作数量对比，强调读取注入结果时不必把所有项都从同一个DR依次接走。\n\n[视频21:00：注入序列的四个结果寄存器](https://www.bilibili.com/video/BV11X4y1j7si/?p=50&t=1260)。“最多4项”是序列长度，不是另外增加四条外部引脚，也不是这四项与常规序列在两个独立ADC核心中并行运行。\n\n## 22:08—23:36 · 综合原例先填两份计划\n\n原图通过PA0～PA4输入五路模拟量。常规计划填通道0、1、2，采样示意时间分别0.1、0.2、0.1μs，由TIM3_TRGO每1ms触发。注入计划填通道3、4，各0.1μs，来源选软件启动。\n\n[视频23:00：两份原计划及各自触发](https://www.bilibili.com/video/BV11X4y1j7si/?p=50&t=1380)。本节只是沿框图作这些选择，没有写对应函数，不把这个示意当作已经搭好五路传感器、保存好全部结果的工程。\n\n## 23:37—25:41 · 通道1被打断后，要重新转换该项\n\n第一次常规触发正常完成0→1→2。第二次执行到通道1时，软件触发注入组，于是暂停常规组，先转换3→4，然后回到被打断的通道1，再完成2。第三个常规触发再从0→1→2开始。[视频25:00：最终执行图](https://www.bilibili.com/video/BV11X4y1j7si/?p=50&t=1500)。\n\n这里“回来继续”应精确理解为重新完成被打断的常规转换；ST手册说明当前转换会复位，注入结束后从最后被打断的那次常规转换恢复，不能把一次SAR比较拆成前后两半保存着继续。以上区别也不是NVIC中断优先级的配置，属于ADC内部两类转换组的调度。片尾至此结束，下一节再讲ADC时钟、采样周期和转换耗时。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1544.3626875,
        "asrSegments": 606,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "86a11b8ca8dbc07f9872d4fa21447b53b5722c127cd570fa6008d1f607248fd3",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 51,
      "phase": "adc",
      "title": "10.3 [ADC] 采样时间和转换时间",
      "duration": 1691,
      "summary": "按原片先从PCLK2算12MHz，再解释固定12.5周期，沿光敏分压的戴维南等效算源内阻上界，代公式得到采样周期门槛。",
      "notes": "保留五部分推导、公式参数、单位和原图大于号，明确12.5固定阶段与总转换的术语差别，10k为源内阻上界，10.24为门槛而非已设置值。无代码或实测结果。",
      "points": [
        "72MHz经ADC除6得12MHz，除2/4超14MHz上限",
        "原片12.5周期是采样后固定阶段，总转换还要加采样",
        "源内阻越大，采样电容建立到同样精度需要更久",
        "光敏R1=10k、R2随光照变化，AO随R2分压",
        "戴维南U=VCC*R2/(R1+R2)，R=R1并R2取10k上界",
        "原不等式要求Ts大于约10.24周期，非硬件可任填的档位"
      ],
      "cid": 26536248591,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 360,
            "observation": "PCLK2为72MHz，ADC除6为12MHz且标14MHz上限。",
            "frameSha256": "6d8702147eb4bccd357da1da86faa3a8833373865afe59773a2564c513ebaf5c"
          },
          {
            "seconds": 540,
            "observation": "固定转换阶段12+0.5=12.5cycle约1.04us。",
            "frameSha256": "de2a99a2c63f2f660528611ed9926738fc3235727f6b786b3011993d8ec19b2b"
          },
          {
            "seconds": 840,
            "observation": "源内阻、RADC和CADC充电网络。",
            "frameSha256": "e15500b919952caf043ba727a1e90a3c9c325cfeead8c8ecf43023d91141355a"
          },
          {
            "seconds": 1020,
            "observation": "R1=10K，R2光敏电阻，AO从中点输出。",
            "frameSha256": "476a095609d34f022ceea6ad26b9145c75ec07288e2575a40d6a446b6eb9cc60"
          },
          {
            "seconds": 1260,
            "observation": "戴维南等效U=VCC*R2/(R1+R2)、R=R1//R2≤10k。",
            "frameSha256": "a6a58a619d5cc80ecc2ecde12b06bb51c8d506178134f68a80e282ad008d2b56"
          },
          {
            "seconds": 1320,
            "observation": "同页原电源与并联结果，可区分电压源归零为短接。",
            "frameSha256": "361dd1f2b0b72bd9e8ca76dfae2795528f45ae718380dfe412a9f27b05ca4749"
          },
          {
            "seconds": 1440,
            "observation": "原源阻抗不等式移项Ts>...，非等号。",
            "frameSha256": "5c02d108d9634fc62eeb2d1f13d70a646f7664c16fedccffd67df4952a337c03"
          },
          {
            "seconds": 1500,
            "observation": "原DS5319表46，RADC1k/CADC8pF在Max栏。",
            "frameSha256": "4a5685b9b9e2aa368a20733aac427b73e3fea2abc8735fedb4f94f5e19ef0e0b"
          },
          {
            "seconds": 1560,
            "observation": "10k、1k、8pF、12bit、12MHz逐个参数标注。",
            "frameSha256": "3414947aadea1373b2c6e88e6692988b2b55a8772dafe2b74e0b2a982da12579"
          },
          {
            "seconds": 1620,
            "observation": "原代入ln(2^(12+2))，10.24cycle。",
            "frameSha256": "e218aced543189e574ea6da16764b2accaccae18058a501941193ca52a04e4a7"
          },
          {
            "seconds": 1680,
            "observation": "片尾五项目录，12.5与10.24cycle。",
            "frameSha256": "01580d0130991286e8f1f161fe05ddd78e11bd9c1cc7e24b399705a491dfbfa1"
          }
        ]
      },
      "learningNotes": "## 00:00—02:27 · 先分清两个阶段，再开始计算\n\n原片先回顾转换过程：闭合采样开关，从输入信号取当前点；断开开关，保持电压并进行SAR比较。作者把前一段称为采样时间，把后面的固定比较阶段称为转换时间。本节依次讲ADC时钟、固定转换耗时、源内阻的影响、源内阻计算、采样时间计算。\n\n本节没有录入ADC程序，也没有测量光照数据。它为下一节光敏模块实验先算出时钟与时间要求。\n\n## 02:28—04:37 · 从PCLK2经过ADC预分频\n\n作者沿芯片框图找到ADC1、ADC2，再回到时钟树。它们的转换时钟不是直接等于PCLK2，而是由PCLK2经过专门的ADC预分频得到，可选除以2、4、6、8。\n\n这与上章定时器在特定APB分频下的倍频规则不同：不能把定时器的“乘2”搬到ADC。先知道PCLK2，再选择ADC分频，才能计算每个ADC周期有多长。\n\n## 04:38—07:30 · 原例72MHz除6，得到12MHz\n\n原例采用课程模板启动后的时钟配置：SYSCLK、HCLK、PCLK2均为72MHz，PCLK1为36MHz。随后查RM0008，要求ADC时钟不超过14MHz。72/2=36MHz、72/4=18MHz均超限；72/6=12MHz可用，72/8=9MHz也可用，本节选12MHz。\n\n[视频06:00：原时钟树与除6选项](https://www.bilibili.com/video/BV11X4y1j7si/?p=51&t=360)。72MHz是这份模板的既定配置，不是F103裸复位状态，也不是只要使用标准库就必然得到的频率。后续所有周期换算都以本例12MHz为前提。\n\n## 07:31—10:46 · 固定比较阶段为12.5个ADC周期\n\n作者以12个结果位类比12个砝码，每位尝试一次，再加0.5周期，得到固定比较耗时12.5周期。12MHz时，一个周期约0.08333μs，所以12.5周期约1.0417μs。作者明确说没有查到额外0.5周期的更深原因，只要求记住，不在正文另编内部过程解释。\n\n[视频09:00：原12.5周期公式](https://www.bilibili.com/video/BV11X4y1j7si/?p=51&t=540)。注意本片把“采样后的固定阶段”简称转换时间；ST手册所说总转换时间Tconv包含采样，即“采样周期数+12.5周期”。估算采样吞吐量时两者都要加，不能直接把1/1.04μs当完整采样率。参见[ST RM0008第11.6节](https://www.st.com/resource/en/reference_manual/rm0008-stm32f101xx-stm32f102xx-stm32f103xx-advanced-arm-based-32-bit-mcus-stmicroelectronics.pdf)。\n\n## 10:47—14:54 · 源内阻越大，采样电容建立电压越慢\n\n原片先借3.7V锂电池与约10mΩ内阻说明等效模型，再把一般输入信号表示成理想电压源串联源电阻。电池数字只是这个类比的假设，不能当作所有18650电池的固定参数。\n\n展开ADC后，充电路径上有源电阻RAIN、内部采样开关电阻RADC和采样电容CADC。开关闭合时，电容通过这些电阻建立电压；总电阻更大，充电更慢，为达到同样的建立精度就需要更长采样时间。[视频14:00：源内阻与采样网络](https://www.bilibili.com/video/BV11X4y1j7si/?p=51&t=840)。\n\n“充满”在这里是达到所需误差范围的近似，不是数学上在某个有限时刻与输入完全相等。\n\n## 14:55—18:23 · 光敏模块的AO来自串联分压\n\n作者介绍下一节要用的光敏传感器模块。原图从VCC到地依次是R1=10kΩ与光敏电阻R2，中点输出AO，AO展开为Analog Output。光更强时R2下降，分到R2上的电压下降，AO也随之下降。\n\n[视频17:00：原分压电路](https://www.bilibili.com/video/BV11X4y1j7si/?p=51&t=1020)。模块外观还画有DO，但本节只分析AO的模拟通路。由AO电压随光变化，可以作光照相对变化测量；本节没有给出电压到照度单位的标定关系，不能直接把电压说成精确lux值。\n\n## 18:24—21:40 · 戴维南第一步：求开路输出电压\n\n作者先把VCC符号改画成电压源，把原模块电路转成便于等效的两端网络，再应用戴维南等效。目标是从AO与GND向里看，得到一个理想电压源U串联一个电阻R。\n\n开路时，R1与R2仍串联分压，AO相对GND的电压为：\n\n```text\nU = VCC × R2 / (R1 + R2)\n```\n\n[视频21:00：开路电压与等效电路](https://www.bilibili.com/video/BV11X4y1j7si/?p=51&t=1260)。这里开路的是输出端，不是拆掉R1或R2；输出没有接负载时，原分压支路仍存在。\n\n## 21:41—23:24 · 第二步：电压源归零后得到R1并R2\n\n为了求等效内阻，把独立电压源置零，也就是用短路替代它；从AO到地看，R1、R2因此并联。原图给出的结论是R=R1//R2≤10kΩ。由于R2随光照变，不能把内阻一直当作恰好10kΩ；本课取10kΩ上界来作采样时间估算。\n\n[视频22:00：原并联结果](https://www.bilibili.com/video/BV11X4y1j7si/?p=51&t=1320)。这一段同时说明为什么只看分压中点电压还不够：两路电路可能输出相近电压，但源内阻不同，给ADC采样电容充电的能力也不同。\n\n## 23:25—26:26 · 原数据手册公式保留大于号\n\n作者从所用版本DS5319第75页取出允许源阻抗公式，移项得到下面关系。这里Ts以ADC周期数表示，因为右侧乘了fADC；若要秒数，再除以fADC：\n\n```text\nTs > (RAIN + RADC) × CADC × ln(2^(N+2)) × fADC\n```\n\n[视频24:00：原不等式与移项结果](https://www.bilibili.com/video/BV11X4y1j7si/?p=51&t=1440)。RAIN是外部源内阻，RADC是内部采样开关电阻，CADC是采样电容，N=12，fADC=12MHz。25:00显示所用版本表46，RADC的1kΩ、CADC的8pF都列在Max栏；不应把这些设计取值描述成每颗器件测出来都完全相同。\n\n## 26:27—28:09 · 算出的10.24是下限，不是可直接填写的档位\n\n原片代入RAIN=10kΩ、RADC=1kΩ、CADC=8pF、N=12、fADC=12MHz，使用ln(2^14)约9.7，算得右侧约10.24个周期。[视频27:00：参数代入原图](https://www.bilibili.com/video/BV11X4y1j7si/?p=51&t=1620)。\n\n回到上面的不等号，含义是采样周期数应大于这个估算门槛，不能说实际硬件已经配置成10.24周期；该值换成时间约0.854μs。片尾仍以12.5周期和10.24周期回顾，实际档位选择留到下一节。理解本节后，应能从真实PCLK2、分频与源阻抗重算，不能把10.24当成所有传感器通用的采样时间。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 1690.6453125,
        "asrSegments": 627,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "16f1f318eeff082220c329348eeafd779190ab4615600237c7fbddc48d842781",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 52,
      "phase": "adc",
      "title": "10.4 [ADC] 常规单通道转换",
      "duration": 3101,
      "summary": "按RegularSingleConv原片从光敏分压与PA0接线开始，设置AIN及ADC12MHz，逐个解释六字段、原对齐算例和Rank1/13.5周期，再用EOC轮询读取dr、换算voltage并以1.5V控制PC13。",
      "notes": "完整按原实验顺序讲解，保留六字段讲授顺序与中途补录LED初始化。内部温度/参考原图14/15明确纠正为16/17；保留原4095换算并说明模型限度。单通道EOC不推广成扫描末尾，原演示没有串口读数、照度标定或调用校准接口。",
      "points": [
        "10k上臂/光敏下臂分压，越亮AO越低；AO接PA0，DO不用，3.3V供电",
        "App_ADC1_Init配置GPIO_Mode_AIN、RCC_PCLK2_Div6与ADC1 APB2时钟",
        "六字段：单次、右对齐、软件触发None、独立模式、长度1、禁扫描",
        "原3.084V≈3827=0xEF3对齐例；3.3/4095端点比例与4096量化步长分开",
        "ADC_RegularChannelConfig通道0/Rank1/13Cycles5，触发使能及ADC_Cmd",
        "清EOC/软件启动/轮询/读取dr、voltage=dr*(3.3f/4095)，PC13开漏2MHz阈值点灯"
      ],
      "cid": 26538477378,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 180,
            "observation": "原10k电阻与光敏电阻分压、AO输出，越亮电压越低曲线。",
            "frameSha256": "7a74b0675b6f24aff748a298a267ee5865aae280931475b34bb2108f1321ae07"
          },
          {
            "seconds": 250,
            "observation": "原图约1.5V作为明暗阈值。",
            "frameSha256": "1707c1515a0b96934e268a52430bd9cfb7ad6293994af4081a78120562c4d259"
          },
          {
            "seconds": 360,
            "observation": "AO接PA0与ADC0路径，原图温度14/参考15错误标号。",
            "frameSha256": "fb01865077c9636edffbf1c4c6a0cd83dcf4e55cbc8acfe58ae51a52b168f3be"
          },
          {
            "seconds": 420,
            "observation": "单ADC0/软件启动/DR流程完整，其他通道不使用。",
            "frameSha256": "cd0537f89f482fcbee86d55de878a8dc0d88516232d1a352e5e55d9bb44b9efd"
          },
          {
            "seconds": 465,
            "observation": "原光敏模块3.3V/GND/AO到PA0接线，DO空。",
            "frameSha256": "e821499ae312308a5b607d1e282afa525466b4984e3219b57171817845677884"
          },
          {
            "seconds": 780,
            "observation": "App_ADC1_Init原GPIO_Pin_0、GPIO_Mode_AIN录入。",
            "frameSha256": "b8c52443e50a23a12443df52a6dfaad601176c6008859072c8369de96c47b902"
          },
          {
            "seconds": 960,
            "observation": "GPIO结构补= {0}且已GPIO_Init。",
            "frameSha256": "e6c4593face9a5d4a4db88d7702ada341f5b7d7b244429e387f5a99bfb5bccd9"
          },
          {
            "seconds": 1000,
            "observation": "RCC_ADCCLKConfig(RCC_PCLK2_Div6)及ADC1 APB2时钟。",
            "frameSha256": "b3fbb8e314d6a39a2680a7e3e2a4fd6abf05c5d61092626c57c00688f6ecd5c5"
          },
          {
            "seconds": 1080,
            "observation": "ADC四组22接口表，黄色标出本节八项。",
            "frameSha256": "4f0c760527e22a7062f24754f12b3d544aeefec891d23680a8483858b3b1d62f"
          },
          {
            "seconds": 1680,
            "observation": "原3.084V经4095比例得3827、二进制EF3及左右对齐图。",
            "frameSha256": "175d056733882b2c655c37f624d9faa8a8e59cc7c5da84f2d5e1540c9a8462b2"
          },
          {
            "seconds": 1740,
            "observation": "相同原例左右四位填零位置。",
            "frameSha256": "c66feff3f99662175b3a95d6b518dbf7c86661adc47291a8fa859589b25d161d"
          },
          {
            "seconds": 1920,
            "observation": "ADC触发源库宏，其中None为软件启动选择。",
            "frameSha256": "aa0f082166278dbf67b282e87a189d36a932c5cab6dabf9c0d6b4c10bf8b17c7"
          },
          {
            "seconds": 2100,
            "observation": "六字段PPT，最后解释扫描模式。",
            "frameSha256": "2573c9d00d7286d159959786acef0fd5f57f6d796a16d1e5aa59881829f3696e"
          },
          {
            "seconds": 2125,
            "observation": "库ADC_InitTypeDef定义，Scan/Continuous/Trigger/DataAlign/Number。",
            "frameSha256": "7bde25894262517a19681ea513586c2d17a844ae5c5e846add2fe93db4d6f0ca"
          },
          {
            "seconds": 2142,
            "observation": "原ADC_InitStruct= {0}完整六字段DISABLE/Right/None/Independent/1/DISABLE。",
            "frameSha256": "4b53734648513c6957e86909e5c480c569d96ecda0ce6e21cebe0ab1c69e9b9f"
          },
          {
            "seconds": 2150,
            "observation": "原七部分目录，开始常规序列配置。",
            "frameSha256": "6a83df765bc4cd542ffbb2eff644b961f664846a355268a44eb4a7a6e67ef376"
          },
          {
            "seconds": 2340,
            "observation": "ADC_RegularChannelConfig原型与八种采样周期宏。",
            "frameSha256": "95472bd988e00be964b2ce6b1f4ecb71b987cf15612e3bff98e2b0fc353375ca"
          },
          {
            "seconds": 2400,
            "observation": "原接口表与计划中通道0、10.24Cycle需求说明。",
            "frameSha256": "9b51447c5e79d5893921078ac2b7cbcc219d3ba98fedecd9b01fc4e921053646"
          },
          {
            "seconds": 2460,
            "observation": "完整六字段、RegularChannelConfig通道0/Rank1/13Cycles5、ExternalTrig使能。",
            "frameSha256": "325511178cd35256ecac5cbb7129b4a8940bd0346de4d90d39c28d22b17c1da7"
          },
          {
            "seconds": 2465,
            "observation": "ADC_Cmd(ADC1,ENABLE)正在录入的中间状态。",
            "frameSha256": "d5cf63ed451841d9b949e847eafccbe012958578c12373200149b774334a3561"
          },
          {
            "seconds": 2470,
            "observation": "返回App_ADC1_Init查看AIN、六分频和ADC时钟。",
            "frameSha256": "cab1277d25017e6e11aa9224b01268a14adff66766ed8fd1a24ae3d82bccac41"
          },
          {
            "seconds": 2640,
            "observation": "main清EOC已录入，开始软件启动。",
            "frameSha256": "7a9af875266fc4f55a4e5583c15e5785f9c42b99ecc1d91962c2699992eb5f95"
          },
          {
            "seconds": 2700,
            "observation": "软件启动ENABLE与EOC轮询条件录入。",
            "frameSha256": "327c4f0fc56e4b302c5105fc79867fbc6e63c33bd48ec28a526e95d48170c76c"
          },
          {
            "seconds": 2820,
            "observation": "完整EOC四步及uint16_t dr=ADC_GetConversionValue(ADC1)。",
            "frameSha256": "f93f7e578a653cd6399d8f2aa97d2cc984990c3f753d37f47d52024c51ae0154"
          },
          {
            "seconds": 2850,
            "observation": "原光敏曲线回看1.5V阈值。",
            "frameSha256": "d49631b2d57afaeb399fc83d920bc2d05e9067d01335cca9d4e21ba68799b4bc"
          },
          {
            "seconds": 2940,
            "observation": "ADC_Cmd最终ENABLE，开始App_OnBoardLED_Init。",
            "frameSha256": "09748cceb0b56050d159512238903f30a61b209dbea3c99a928faabd9eb32ca2"
          },
          {
            "seconds": 2965,
            "observation": "原PC13 Out_OD/2MHz及零初始化GPIO结构，GPIO_Init完成。",
            "frameSha256": "ea2b09361f510ab667b17c2057bd2e439f70cb237ac27da40b06504f0a235134"
          },
          {
            "seconds": 2985,
            "observation": "原float voltage=dr*(3.3f/4095)完整公式。",
            "frameSha256": "44492816e3076a55f76ede73a570753c62dbe6bae56c8ca416f8f6a9bc1a775d"
          },
          {
            "seconds": 3000,
            "observation": "原voltage>1.5条件刚录入。",
            "frameSha256": "bed19d11fc00890936249348fa0f5e71d5f82a4956e11edf83bf04f18f523d6d"
          },
          {
            "seconds": 3010,
            "observation": "暗时PC13 Bit_SET，开始else。",
            "frameSha256": "462800a8b294e5d2be923fd6bade9361470509c2f6ca51203655a3512b67d359"
          },
          {
            "seconds": 3018,
            "observation": "完整if/else，亮时Bit_RESET，阈值与引脚核对。",
            "frameSha256": "537ce9386158a24e35f7f6331ba7ec3939024574b5b913a3ae736899a26a6a69"
          },
          {
            "seconds": 3020,
            "observation": "相同分支上部参数对照。",
            "frameSha256": "775220bdd48488c7f953a938156c2f6c3568c4252651ad965b3cfb9bc5bc0157"
          },
          {
            "seconds": 3025,
            "observation": "最终main先OnBoardLED再ADC1初始化，准备编译。",
            "frameSha256": "61137eb3006f618e1dfafdd47624a16a1155d1f1a61b73b59911d7acc9acce20"
          },
          {
            "seconds": 3060,
            "observation": "原实机明亮时LED点亮，开始遮挡。",
            "frameSha256": "808cf6622a5bb3e190b2b0452897583bcb78eb65567059f7cffe8bc0415277b8"
          },
          {
            "seconds": 3065,
            "observation": "遮住光敏模块时板载LED熄灭原画面。",
            "frameSha256": "cd2c6be8982680c3608b2cd03ac25f98df7d23047f56565ec7278fe123e2b5e6"
          }
        ]
      },
      "learningNotes": "## 00:00—02:24 · 常规序列只安排一个通道\n\n老师先拆解本节标题。ADC 前面可以切换多路模拟输入，本节先只转换其中一路；常规序列 Regular Sequence 是安排转换通道与先后顺序的计划，另一个 Injected Sequence 是注入序列。本次只在常规序列第一项安排通道 0，不启用多通道扫描。\n\n这里的复用是一个 ADC 转换核心依次处理不同输入，不能把“可以转换多路”理解为同一个核心同时对所有引脚采样、转换。本节最终得到的是光敏模块电压，并用阈值控制板载 LED。\n\n## 02:25—05:09 · 原光敏模块：越亮，AO 电压越低\n\n[03:00 模块与原电路图](https://www.bilibili.com/video/BV11X4y1j7si/?p=52&t=180)上端是 10kΩ 的 R1，下端是光敏电阻 R2，供电 3.3V，AO 从两者中点输出。光越强，R2 越小，分到 R2 上的电压越低。这是后面判断方向的依据。\n\n视频取图示约 1.5V 为明暗阈值：电压大于 1.5V 表示较暗，熄灭 LED；电压较低表示较亮，点亮 LED。它是本例的阈值示范，没有把这个光敏模块标定成精确照度计。\n\n## 05:10—08:40 · AO 接 PA0，DO 留空\n\n本次选 ADC1 的通道 0，对应 PA0。模块 AO 接 PA0，GND 接开发板地，VCC 接 3.3V，DO 数字输出不用。[07:45 原接线图](https://www.bilibili.com/video/BV11X4y1j7si/?p=52&t=465)对应的就是这三根有效连线。\n\n把通道 0 安排到常规序列第一项，启动转换后先采样，再进行逐次逼近转换，结果进入 DR 的相应数据字段，最后由软件读取。本节只转换一项，便于先看清整个流程。\n\n原片 [06:00 框图](https://www.bilibili.com/video/BV11X4y1j7si/?p=52&t=360)把内部温度、参考电压写成通道 14、15；这是图中的错误标号。STM32F103 的温度输入实际为 ADC1_IN16，内部参考为 ADC1_IN17，见[RM0008 温度传感器章节](https://www.st.com/resource/en/reference_manual/rm0008-stm32f101xx-stm32f102xx-stm32f103xx-stm32f105xx-and-stm32f107xx-advanced-armbased-32bit-mcus-stmicroelectronics.pdf)。本节 PA0/通道 0 的接线与代码仍正确对应。\n\n老师随后列出七部分：初始化引脚、配置 ADC 时钟、认识接口、配置基本参数、配置常规序列、开启 ADC、启动并读结果。后面的代码按这个顺序逐步补齐。\n\n## 08:41—13:28 · App_ADC1_Init 先把 PA0 配成 AIN\n\n视频从母版建立 RegularSingleConv 工程，声明 `App_ADC1_Init`。先回顾输入上拉、下拉、浮空与模拟模式：本次输入连续电压，选模拟输入，不选数字电平输入模式。老师在库定义中找到 `GPIO_Mode_AIN`，解释 AIN 是 Analog Input。\n\n[16:40 后续完整引脚代码对照](https://www.bilibili.com/video/BV11X4y1j7si/?p=52&t=1000)为：\n\n```c\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);\nGPIO_InitTypeDef GPIO_InitStruct = {0};\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_0;\nGPIO_InitStruct.GPIO_Mode = GPIO_Mode_AIN;\nGPIO_Init(GPIOA, &GPIO_InitStruct);\n```\n\n原片在录入过程中补上 `= {0}`。模拟输入不需要设置输出速度。本段设置的是引脚模式，尚未设置 ADC 的转换参数。\n\n## 13:29—16:42 · ADC 时钟不能直接照搬 PCLK2 的 72MHz\n\n老师专门抽出 ADC 时钟分频：ADC 从 PCLK2 经过专用分频器取时钟。本工程 PCLK2=72MHz，需要选六分频，得到 12MHz，低于该器件 ADC 时钟上限 14MHz。[原片 16:40](https://www.bilibili.com/video/BV11X4y1j7si/?p=52&t=1000)实际调用为：\n\n```c\nRCC_ADCCLKConfig(RCC_PCLK2_Div6);\nRCC_APB2PeriphClockCmd(RCC_APB2Periph_ADC1, ENABLE);\n```\n\n第一行设置分频比，第二行开启 ADC1 外设时钟，作用不同。14MHz 上限也可对照[STM32F103x8/xB 数据手册的 ADC 特性](https://www.st.com/resource/en/datasheet/stm32f103rb.pdf)。不要把“开启 ADC1 的 APB2 时钟”误解成转换核心就按 72MHz 工作。\n\n## 16:43—22:52 · 接口表中本次实际使用的八个接口\n\n[18:00 原接口表](https://www.bilibili.com/video/BV11X4y1j7si/?p=52&t=1080)把接口分为通用、常规、注入和校准，黄色标出本例需要的八个：`ADC_Init` 配参数，`ADC_Cmd` 控制总开关；`ADC_GetFlagStatus` 查询标志，`ADC_ClearFlag` 清标志。\n\n常规组中的 `ADC_RegularChannelConfig` 安排通道、位置与采样时间；`ADC_ExternalTrigConvCmd` 控制触发使能；`ADC_SoftwareStartConvCmd` 通过软件发起转换；`ADC_GetConversionValue` 读常规转换结果。\n\n老师先用框图指出各接口控制的位置，再逐项使用。表里出现注入序列和校准接口，不代表本节随后已经调用了它们。\n\n## 22:53—26:23 · ADC_Init 的第一项：先关闭连续转换\n\n老师声明 `ADC_InitTypeDef ADC_InitStruct`，再依次解释六个成员。第一项是 `ADC_ContinuousConvMode`，本例填 `DISABLE`，每次由程序明确发起转换，而不是一次启动后自动连续重复。\n\n第二项 `ADC_DataAlign` 控制对齐方式。视频先暂缓填写，转到下面的位图说明 12 位结果如何放入数据字段。这是本节较长的一段推导，不能只把六个字段列表贴出来就跳过。\n\n## 26:24—30:19 · 原例 3.084V 与左、右对齐\n\n原图用 16 位的数据表示位置，其中真正转换结果为 b11—b0 共 12 位。右对齐把结果放在低 12 位，左侧四位补零；左对齐则把结果向高位移四位，低四位补零。这里讨论的是单个转换结果的数据排列，不是断言整个 ADC_DR 寄存器仅有 16 位。\n\n[28:00—29:00 原算例](https://www.bilibili.com/video/BV11X4y1j7si/?p=52&t=1680)使用端点比例 `3.084÷(3.3÷4095)`，取近似码值 3827，即 `1110 1111 0011b`（0xEF3）：\n\n```text\n右对齐：0000 1110 1111 0011\n左对齐：1110 1111 0011 0000\n```\n\n右对齐读出的数便于直接计算，所以本例选 `ADC_DataAlign_Right`。原片的 3.3/4095 是把两个端点对齐的线性换算比例；严格的理想 12 位量化步长是参考电压范围除以 4096，两种含义应分开。本页保留原算例和代码，不把该比例冒充精确 ADC 量化模型。\n\n## 30:20—32:22 · 软件启动对应 ADC_ExternalTrigConv_None\n\n第三个成员选择常规转换的触发来源。老师查库定义，逐个看 TIM1 CC1/CC2/CC3、TIM2 CC2、TIM3 TRGO、TIM4 CC4、外部中断线等来源，最后选本例的软件启动项 `ADC_ExternalTrigConv_None`。\n\n这里的 None 表示本例不选那些定时器或引脚触发源，并非“不允许启动 ADC”。后面仍要用 `ADC_SoftwareStartConvCmd` 发出软件启动请求。本节没有把 TIM3 触发提前接进来，定时器触发属于下一节内容。\n\n## 32:23—35:48 · 独立模式、一个通道、关闭扫描\n\n第四项 `ADC_Mode_Independent` 表示 ADC1、ADC2 独立工作，本例使用 ADC1，不安排双 ADC 配合。第五项 `ADC_NbrOfChannel=1` 规定常规序列只执行一个位置；第六项 `ADC_ScanConvMode=DISABLE` 关闭扫描。\n\n[35:42 原六字段完整录入结果](https://www.bilibili.com/video/BV11X4y1j7si/?p=52&t=2142)先补好结构体初值，再将地址传给 `ADC_Init`。摘录为：\n\n```c\nADC_InitTypeDef ADC_InitStruct = {0};\nADC_InitStruct.ADC_ContinuousConvMode = DISABLE;\nADC_InitStruct.ADC_DataAlign = ADC_DataAlign_Right;\nADC_InitStruct.ADC_ExternalTrigConv = ADC_ExternalTrigConv_None;\nADC_InitStruct.ADC_Mode = ADC_Mode_Independent;\nADC_InitStruct.ADC_NbrOfChannel = 1;\nADC_InitStruct.ADC_ScanConvMode = DISABLE;\nADC_Init(ADC1, &ADC_InitStruct);\n```\n\n“一个通道”是序列长度，“通道 0”则是下一步填入这一位置的输入编号，数字 1 和 0 分别回答不同问题。\n\n## 35:49—39:34 · Rank=1，通道 0，采样 13.5 个周期\n\n老师用常规序列计划表说明第一项的内容。上一节估算的最低采样需求约为大于 10.24 个 ADC 时钟周期，可选档位没有 10.24，因此选比它长的 13.5 周期，接口名为 `ADC_SampleTime_13Cycles5`。\n\n[41:00 后续完整配置对照](https://www.bilibili.com/video/BV11X4y1j7si/?p=52&t=2460)的调用是：\n\n```c\nADC_RegularChannelConfig(ADC1, ADC_Channel_0, 1, ADC_SampleTime_13Cycles5);\n```\n\n四个参数依次是 ADC 实例、输入通道、序列位置 Rank、该通道采样时间。Rank 从 1 开始，本例通道编号则是 0。按本节 12MHz 时钟推算，13.5 周期采样约为 1.125μs；采样后还需要逐次逼近转换时间，不能把采样时间直接当整次转换耗时。\n\n## 39:35—41:33 · 先使能触发，再打开 ADC 总开关\n\n老师在常规序列配置后依次写入：\n\n```c\nADC_ExternalTrigConvCmd(ADC1, ENABLE);\nADC_Cmd(ADC1, ENABLE);\n```\n\n前一行对应原框图中触发信号到常规序列之间的开关，后一行才是 ADC 总开关。至此 `App_ADC1_Init` 完成，main 调用它。真正的一次次采样启动随后写在 while 循环中。\n\n## 41:34—45:56 · 主循环四步：清 EOC、启动、等完成、读结果\n\n老师先在图里梳理，再逐行录入：清除旧 EOC，软件启动一次，阻塞轮询等新 EOC，最后读取转换值。[47:00 后续完整读取代码](https://www.bilibili.com/video/BV11X4y1j7si/?p=52&t=2820)：\n\n```c\nADC_ClearFlag(ADC1, ADC_FLAG_EOC);\nADC_SoftwareStartConvCmd(ADC1, ENABLE);\nwhile(ADC_GetFlagStatus(ADC1, ADC_FLAG_EOC) == RESET);\nuint16_t dr = ADC_GetConversionValue(ADC1);\n```\n\n`dr` 是原片变量名，承接右对齐的 12 位转换结果。本例只有一个常规通道，所以等这次转换完成就取得这轮需要的数据。EOC 的含义不要扩展成“多通道扫描一定要全序列结束才置位”；F1 的多通道结果读取需另外讨论。原循环也未设置等待超时。\n\n## 45:57—47:57 · 原换算 voltage 与 1.5V 判定\n\n原片把码值 0—4095 与 0—3.3V 两端对应，使用浮点变量保存近似输入电压：[49:45 后续完整公式](https://www.bilibili.com/video/BV11X4y1j7si/?p=52&t=2985)。\n\n```c\nfloat voltage = dr * (3.3f / 4095);\n```\n\n3.3f 保证按浮点计算，而不是先进行整数相除。这个公式依赖本例把参考范围按 3.3V 处理；它没有在程序中测量实际参考电压。视频随后回到光敏曲线，决定大于 1.5V 时熄灯，其余情况点灯。\n\n## 47:58—49:41 · 临时转去写 App_OnBoardLED_Init\n\n写条件分支之前，老师先声明 `App_OnBoardLED_Init`，开启 GPIOC 时钟，用 `= {0}` 的 GPIO 结构体配置 PC13、`GPIO_Mode_Out_OD`、`GPIO_Speed_2MHz`，再调用 `GPIO_Init`。这是本节实际的补录顺序，LED 初始化没有在开头先写完。\n\n[49:25 完整 LED 初始化](https://www.bilibili.com/video/BV11X4y1j7si/?p=52&t=2965)之后，main 加入该调用。老师说明 LED 与 ADC 初始化之间无本例的先后依赖；[50:25 最终 main](https://www.bilibili.com/video/BV11X4y1j7si/?p=52&t=3025)显示先 `App_OnBoardLED_Init`，再 `App_ADC1_Init`。\n\n## 49:42—51:41 · 分支代码与原遮挡演示\n\n[50:18 完整原条件分支](https://www.bilibili.com/video/BV11X4y1j7si/?p=52&t=3018)为：\n\n```c\nif(voltage > 1.5)\n{\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_SET);\n}\nelse\n{\n    GPIO_WriteBit(GPIOC, GPIO_Pin_13, Bit_RESET);\n}\n```\n\nPC13 置高使板载 LED 熄灭，置低点亮；else 包括等于阈值的情况。代码编译后显示零错误、零警告。第一次下载时调试器未连接，接上重试，随后复位：环境较亮时 LED 点亮，遮住光敏模块则熄灭，移开再点亮。\n\n这就是原片实际完成的结果。本节没有串口打印电压、没有给照度数值标定，也没有执行表中列出的四个校准接口；正文不补造这些已完成步骤。\n\n## 来源与核对范围\n\n本页读完 P52 完整音轨 ASR，并亲看三十五张原尺寸画面，核对光敏电路、PA0 AIN、时钟、六字段、Rank1/13.5 周期、EOC 四步、原电压公式及 LED 分支。代码保持原 `App_ADC1_Init`、`App_OnBoardLED_Init`、`dr`、`voltage`，按补录顺序解释。ASR 不是作者字幕，未取得作者工程；内部通道错标和端点比例与量化步长的区别均明确说明。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 3100.3733125,
        "asrSegments": 1075,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "1f885c3e28d164fa84a963c88313d23b5ec8a27d221def144e6a08d610157785",
        "reviewedAt": "2026-10-29",
        "unresolved": []
      }
    },
    {
      "page": 53,
      "phase": "adc",
      "title": "10.5 [ADC] 定时器触发",
      "duration": 2776,
      "summary": "按原片以 TIM1 Update/TRGO 每1ms触发 ADC1 注入通道0，轮询JEOC读取JDR1，把电压按三位小数发送至VOFA+显示光敏曲线，并保留触发使能接口的录入修正。",
      "notes": "完整阅读827段ASR，亲看原尺寸帧核对ADC/TIM/USART参数与VOFA+设置。录入中常规触发开关被误用，随后作者自行改为注入触发开关；按先后记录。保留原软件轮询和Printf路径，未添加DMA/中断采集或自拟校准代码。",
      "points": [
        "光敏AO接PA0，USART1仅用PA9向USB转TTL发送",
        "TIM1输入72MHz，PSC71、ARR999、RCR0形成1ms更新，TRGO选Update",
        "注入序列长度1、通道0放位置1，外部触发选TIM1 TRGO",
        "ADC时钟PCLK2/6=12MHz，独立、右对齐，关闭扫描与连续模式",
        "首次误用常规触发开关，42:33后修正为ADC_ExternalTrigInjectedConvCmd",
        "JEOC轮询、JDR1读数、3.3/4095换算、FireWater的%.3f换行文本与VOFA+曲线"
      ],
      "cid": 26389449160,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 60,
            "observation": "回顾软件启动常规序列，框图另标注入TIM1 TRGO与JDR1",
            "frameSha256": "009041541d2a5f2bee9c49507adfbc8734e20cafae97cf32d77c15815e5b0c9d"
          },
          {
            "seconds": 120,
            "observation": "PA0通道0进入注入序列第一位置的图示",
            "frameSha256": "1e08751bfb8cb1547e928c4e2adaabe768c67d5b00aada3f9561a222de24fa30"
          },
          {
            "seconds": 240,
            "observation": "TRGO Update触发ADC与采样点关系",
            "frameSha256": "56e0f34ef18df6c2f36db6861af9f578a6f38a288b8458e5a13179b8aeb14bf3"
          },
          {
            "seconds": 300,
            "observation": "TRGO上升沿对应通道0转换时间点",
            "frameSha256": "ceca463daa60dc20472640bd69d296d849cb0077d6b7d0871751c585dbd2aa3f"
          },
          {
            "seconds": 480,
            "observation": "光敏AO接PA0、3.3V供电；PA9串口单向发送及共地电路",
            "frameSha256": "f93baa2debb0dd53e6b8cedd8ff44d3a47df1297d3cb30585f91426ae3288017"
          },
          {
            "seconds": 720,
            "observation": "App_USART1_Init，PA9 AF_PP 2MHz，GPIO结构体={0}",
            "frameSha256": "0102d51bcafea776dc5a93a32e1da409866f603ed480059194888ce12ab6559c"
          },
          {
            "seconds": 810,
            "observation": "USART结构体={0}，115200、None流控、Tx、NoParity、1stop、8b和USART_Init",
            "frameSha256": "475b3e1d4e7f9af7b6a3824c58f70c84ead81d4806560b3eb1727a85ceff680c"
          },
          {
            "seconds": 826,
            "observation": "USART初始化中的PA9 GPIO和结构体初值",
            "frameSha256": "b71c3849a3cc4f1f7dc779e2290ebc5d339ff8952570021fbd4a2f78d521b6e9"
          },
          {
            "seconds": 840,
            "observation": "main调用App_USART1_Init",
            "frameSha256": "f2de916395e2d683eca3710ebffbeb130c32b564c20454751755d600bb1d81da"
          },
          {
            "seconds": 924,
            "observation": "串口助手收到Hello world.，开发板实物",
            "frameSha256": "c0731a7b87c7ea8a286c1d2f6ff5f85c4a40c3382bde3ef45df49adb95e26f2e"
          },
          {
            "seconds": 960,
            "observation": "Hello发送被注释，开始声明App_TIM1_Init",
            "frameSha256": "73d10a39921353bd3ec6da1bde61126b00f9b6aa28d78356e32e30da2af0219e"
          },
          {
            "seconds": 1080,
            "observation": "时基推导：72MHz、PSC71、ARR999、RCR0、Update 1ms",
            "frameSha256": "36dc6fa874a900a1153d8e2e0038125d5c2eade6f1a7d42a7645453a06980aa5"
          },
          {
            "seconds": 1200,
            "observation": "TIM1结构体={0}，Up/999/71/0已写",
            "frameSha256": "c813304defac502b59bbb9e52ce3a806de6e9745f57c66ce89c0a0e39d1598e0"
          },
          {
            "seconds": 1260,
            "observation": "TIM_TimeBaseInit、SelectOutputTrigger Update、TIM_Cmd ENABLE完整",
            "frameSha256": "cc55381397cc13a2a1cd6a3d24b0d9a53c2438a63516dd03641f0fb487a012b5"
          },
          {
            "seconds": 1380,
            "observation": "注入序列六个API表和通道0、采样时间示意",
            "frameSha256": "458eb2e4b019d526f50e31ca5f7e498a8cd7cda287767dbdaeb66e7452b586a5"
          },
          {
            "seconds": 1440,
            "observation": "注入外部触发来源TIM1 TRGO的图示",
            "frameSha256": "ec4fde995f56e7d4478419753c6a5688ff6ce68933db9984141044d9b5ac27a4"
          },
          {
            "seconds": 1500,
            "observation": "注入四位置和各JDR结果寄存器关系",
            "frameSha256": "5f9255ba86282a3fb9b4635214543fb9bbfb181c6b52ff9ff2380a50bf518ec1"
          },
          {
            "seconds": 1620,
            "observation": "App_ADC_Init的PA0 AIN录入",
            "frameSha256": "7953fb3d02ef69989d4ad537bbde3ad336794c3df24bc5127e70849a514f263c"
          },
          {
            "seconds": 1680,
            "observation": "ADC时钟PCLK2 Div6=12MHz与ADC1时钟使能示意",
            "frameSha256": "ae67d421b16fd0ac8cf6490952b10d3039adaefb3a2fb6284caa7bcc5f06935f"
          },
          {
            "seconds": 1920,
            "observation": "ADC结构体={0}与时钟配置",
            "frameSha256": "ff6e6f08dd72da643c9b86909987c69b10b01111a7cac2bfe2d57c9d6686c123"
          },
          {
            "seconds": 1980,
            "observation": "ADC基本六参数最终录入，常规长度实际1",
            "frameSha256": "2c52a160ba1b02cbd48a371be11abd4fc856adcc2283d5031321f292bbd3f782"
          },
          {
            "seconds": 2100,
            "observation": "注入长度ADC_InjectedSequencerLengthConfig(ADC1,1)",
            "frameSha256": "3779846213d63458948b032564b183d23fce49e730f168c91b79bc9388c70750"
          },
          {
            "seconds": 2160,
            "observation": "通道0与约10.24cycle讲解图",
            "frameSha256": "ca95f59eaace755736e3944d270ea29a56b8912e27b9355b69ed9aaebcba8e16"
          },
          {
            "seconds": 2214,
            "observation": "InjectedChannelConfig通道0 rank1 13Cycles5；开关仍误写常规ConvCmd",
            "frameSha256": "40d9d6b5ddd94e46d2acd166ecef2b59a3f2975c68f9fa8a49ea22701ff6de33"
          },
          {
            "seconds": 2220,
            "observation": "注入初始化五步骤目录",
            "frameSha256": "d1ab9604e7a8f2f7965eda8e6796d211846f61c01f5cff0bcec9a172adefa07b"
          },
          {
            "seconds": 2250,
            "observation": "ADC PA0 AIN最终GPIO与ADC时钟配置",
            "frameSha256": "53bf1d950fad1d2d4839bde0552a17bb3a82cddbc7a9c2ce2badd8840ae1e1af"
          },
          {
            "seconds": 2280,
            "observation": "注入转换结果JDR1相关接口图",
            "frameSha256": "956f2776e9d536586a1fc62624339585b0e75bfb81f16bb758ffd9bdfa73ceb9"
          },
          {
            "seconds": 2400,
            "observation": "main三初始化顺序，while等待ADC_FLAG_JEOC",
            "frameSha256": "82c628dd3e2eb8b7c95e96c7c4ad674a1f8eb1168abaff185cc0a8fd09685cd3"
          },
          {
            "seconds": 2460,
            "observation": "uint16_t jdr1读取ADC_InjectedChannel_1",
            "frameSha256": "439840f5a546a637173270226dcd767f7ea9127d874daaf8e4d4e0b6c34775ce"
          },
          {
            "seconds": 2520,
            "observation": "清JEOC和float voltage=jdr1*(3.3f/4095)",
            "frameSha256": "2b5d724ca9de05f176b838ff2e67673bf015072ba840aeaec86097b74e8fb740"
          },
          {
            "seconds": 2552,
            "observation": "最终读取清标志、换算、My_USART_Printf(USART1,\"%.3f\\n\",voltage)完整",
            "frameSha256": "a3f61451a786a36abd810af113ef477abf26424ce389ab7579bdac010f565d01"
          },
          {
            "seconds": 2580,
            "observation": "回到ADC初始化，原误用ADC_ExternalTrigConvCmd尚可见",
            "frameSha256": "3c596587fa0b3d0ffde6c0f5ce0527102e81f4edba3c044b8f2d9df683f0fcef"
          },
          {
            "seconds": 2596,
            "observation": "原片已修正为ADC_ExternalTrigInjectedConvCmd；通道0 rank1 13Cycles5与ADC_Cmd完整",
            "frameSha256": "3b0383eb466025197ff139b8a591f5cb24bdaf09b60b95bec76051a9ef1b5695"
          },
          {
            "seconds": 2640,
            "observation": "VOFA+1.3.10 FireWater串口115200/None/8/1设置",
            "frameSha256": "f3cd4244439eab2eb54481a4a3cfbb3f53646b03e78f2c3b3e1f853d333e9b08"
          },
          {
            "seconds": 2700,
            "observation": "VOFA+接收到连续电压文本",
            "frameSha256": "97e4f499f77b063f8374d01e595aaf786c8c5906feb9c9818cd4e7a9caa5a873"
          },
          {
            "seconds": 2760,
            "observation": "VOFA+波形与光照变暗后的实物演示",
            "frameSha256": "40254b44ffb1c0806119bf856bac1946228f007d5c13912007e0e0e1dc66527d"
          }
        ]
      },
      "learningNotes": "## 00:10—06:20 · 用 TIM1 TRGO 周期触发 ADC 注入序列\n\n[视频 00:10](https://www.bilibili.com/video/BV11X4y1j7si/?p=53&t=10) 先回顾上一节：光敏模块 AO 接 PA0，即 ADC 通道 0，软件启动常规序列。本节仍采 PA0，但改用注入序列，把通道 0 放到注入序列第一个转换位置，通过 TIM1 的 TRGO 启动，结果从 JDR1 读取。\n\n[视频 02:32](https://www.bilibili.com/video/BV11X4y1j7si/?p=53&t=152) 回顾 TRGO：定时器可以向其他模块提供内部触发信号。本例选择 Update 模式，每次更新事件产生触发脉冲；设置更新间隔为 1 ms，就能让 ADC 周期转换。图中的脉冲上升沿分别对应一次通道 0 转换，把取得的各点连起来，就得到随时间变化的曲线。\n\n本节实验链路为光敏模块 → PA0/ADC1 注入通道 → USART1 → 电脑曲线。开头先演示光照变化与电压曲线的关系，后面逐步实现。\n\n## 07:26—08:45 · 接光敏模块和串口发送线\n\n[视频 07:26](https://www.bilibili.com/video/BV11X4y1j7si/?p=53&t=446) 光敏模块 VCC 接 3.3 V，GND 共地，AO 接 PA0；这里读取模拟输出，不使用 DO。USART1 只向电脑发送数据，因此仅把 PA9/TX 接 USB 转 TTL 的 RXD，并接共地，不接收电脑命令。\n\n## 08:45—15:39 · 初始化 USART1，并先验证发送\n\n[视频 08:45](https://www.bilibili.com/video/BV11X4y1j7si/?p=53&t=525) 从模板新建 `ADCTimerTrigger` 工程，在 `main.c` 声明 `App_USART1_Init(void)`。初始化顺序为：\n\n- 开启 GPIOA 时钟，把 PA9 设为 `GPIO_Mode_AF_PP`、`GPIO_Speed_2MHz`；GPIO 初始化结构体初值为 `{0}`。\n- 开启 `RCC_APB2Periph_USART1` 时钟。\n- `USART_InitTypeDef USART_InitStruct = {0}`，填写 115200、`USART_HardwareFlowControl_None`、`USART_Mode_Tx`、`USART_Parity_No`、`USART_StopBits_1`、`USART_WordLength_8b`，调用 `USART_Init`。\n- 用 `USART_Cmd(USART1, ENABLE)` 开启模块。\n\n在 `main` 调用初始化，引入 `usart.h`，临时执行 `My_USART_SendString(USART1, \"Hello world. \\r\\n\");`。串口助手采用相同串口参数、ASCII 接收，复位后显示文本，15:24 原画面可见 `Hello world.`。随后注释这条测试调用，保留 `usart.h` 供后面发送电压使用。\n\n## 15:40—21:13 · 初始化 TIM1，推导 1 ms 更新间隔\n\n[视频 15:40](https://www.bilibili.com/video/BV11X4y1j7si/?p=53&t=940) 新建 `App_TIM1_Init(void)`。本例时钟配置下，TIM1 输入为 72 MHz；PSC 填 71，实际除以 `71+1`，得到 1 MHz，即每次计数 1 μs。ARR 填 999，计数 1000 次；重复计数器 RCR 填 0，因此周期为 `1 μs × 1000 = 1 ms`。\n\n先使能 TIM1 的 APB2 时钟，使用 `TIM_TimeBaseInitTypeDef TIM_TimeBaseInitStruct = {0}`。原画面中的参数与调用是：\n\n```c\nTIM_TimeBaseInitStruct.TIM_CounterMode = TIM_CounterMode_Up;\nTIM_TimeBaseInitStruct.TIM_Period = 999;\nTIM_TimeBaseInitStruct.TIM_Prescaler = 71;\nTIM_TimeBaseInitStruct.TIM_RepetitionCounter = 0;\nTIM_TimeBaseInit(TIM1, &TIM_TimeBaseInitStruct);\n\nTIM_SelectOutputTrigger(TIM1, TIM_TRGOSource_Update);\nTIM_Cmd(TIM1, ENABLE);\n```\n\n`TIM_SelectOutputTrigger` 选 Update 为 TRGO 来源，随后启动 TIM1。把 `App_TIM1_Init` 放到 `main` 的 USART 初始化之后。这里的 TRGO 走芯片内部触发通路，不是在 PA0 上输出一个定时器波形。\n\n## 21:14—25:12 · 区分注入序列的各个接口\n\n[视频 21:14](https://www.bilibili.com/video/BV11X4y1j7si/?p=53&t=1274) 对照 ADC 框图介绍注入接口：`ADC_InjectedSequencerLengthConfig` 设置注入序列长度；`ADC_InjectedChannelConfig` 填入通道、位置和采样时间；`ADC_ExternalTrigInjectedConvConfig` 选择注入外部触发来源；`ADC_ExternalTrigInjectedConvCmd` 控制该触发开关；`ADC_SoftwareStartInjectedConvCmd` 是注入序列的软件启动接口；`ADC_GetInjectedConversionValue` 读 JDR 结果。\n\n本例使用 TIM1 TRGO，因此后续不靠主循环反复调用软件启动。注意 `ADC_Channel_0` 是模拟输入通道编号，`ADC_InjectedChannel_1` 则用于选择读取 JDR1，两个参数分别属于配置输入和读取结果的不同位置。\n\n## 25:13—33:03 · App_ADC_Init：PA0、ADC 时钟和基本参数\n\n[视频 25:13](https://www.bilibili.com/video/BV11X4y1j7si/?p=53&t=1513) 新建 `App_ADC_Init(void)`。开启 GPIOA 时钟，`GPIO_InitTypeDef` 初值补为 `{0}`，PA0 配为 `GPIO_Mode_AIN`，调用 GPIO 初始化。\n\n然后配置 `RCC_ADCCLKConfig(RCC_PCLK2_Div6)`，把本例 72 MHz 的 PCLK2 除以 6，ADC 时钟为 12 MHz；再开启 `RCC_APB2Periph_ADC1`。填写 `ADC_InitTypeDef ADC_InitStruct = {0}`：\n\n```c\nADC_InitStruct.ADC_ContinuousConvMode = DISABLE;\nADC_InitStruct.ADC_DataAlign = ADC_DataAlign_Right;\nADC_InitStruct.ADC_ExternalTrigConv = ADC_ExternalTrigConv_None;\nADC_InitStruct.ADC_Mode = ADC_Mode_Independent;\nADC_InitStruct.ADC_NbrOfChannel = 1;\nADC_InitStruct.ADC_ScanConvMode = DISABLE;\nADC_Init(ADC1, &ADC_InitStruct);\n```\n\n右对齐同样影响注入结果。结构体中的 `ADC_ExternalTrigConv` 与 `ADC_NbrOfChannel` 设置常规组；注入组的触发与长度要在下一步单独设置。片中讲解曾把常规长度说成“0 或 1”，实际 IDE 填的是 1，这里保留实际录入值。\n\n## 33:04—37:40 · 配置注入序列，记住稍后的开关修正\n\n[视频 33:04](https://www.bilibili.com/video/BV11X4y1j7si/?p=53&t=1984) 设置注入长度 1，触发来源选 `ADC_ExternalTrigInjecConv_T1_TRGO`，再把 `ADC_Channel_0` 放到第 1 个位置。采样时间讲解先提出约 10.24 个周期，再选择现有选项 `ADC_SampleTime_13Cycles5`。最后 `ADC_Cmd(ADC1, ENABLE)` 开启 ADC，在 `main` 中第三个调用 `App_ADC_Init()`。\n\n这里有一个真实的中间错误：首次录入触发使能时写成了 `ADC_ExternalTrigConvCmd(ADC1, ENABLE)`，36:54、43:00 仍能看见这一行。它是常规组开关；老师在 42:33 之后回到这里更正，43:16 画面中修正后的注入部分为：\n\n```c\nADC_InjectedSequencerLengthConfig(ADC1,1);\nADC_ExternalTrigInjectedConvConfig(ADC1, ADC_ExternalTrigInjecConv_T1_TRGO);\nADC_ExternalTrigInjectedConvCmd(ADC1, ENABLE);\nADC_InjectedChannelConfig(ADC1, ADC_Channel_0, 1, ADC_SampleTime_13Cycles5);\nADC_Cmd(ADC1, ENABLE);\n```\n\n跟写时应区分“录入过程中暂时写错”和后面老师已经修正的最终接口。\n\n## 37:40—42:33 · 等 JEOC、读 JDR1，再发送电压文本\n\n[视频 37:40](https://www.bilibili.com/video/BV11X4y1j7si/?p=53&t=2260) TIM1 会周期产生触发，主循环的工作是等待注入转换完成。检查的是 `ADC_FLAG_JEOC`，等待注入序列这一组转换完成，不是常规组的 EOC。42:32 原画面中循环内的五步为：\n\n```c\nwhile(ADC_GetFlagStatus(ADC1, ADC_FLAG_JEOC) == RESET);\nuint16_t jdr1 = ADC_GetInjectedConversionValue(ADC1, ADC_InjectedChannel_1);\nADC_ClearFlag(ADC1, ADC_FLAG_JEOC);\nfloat voltage = jdr1 * (3.3f / 4095);\nMy_USART_Printf(USART1, \"%.3f\\n\", voltage);\n```\n\n先等 JEOC 置位，读取 JDR1，再显式清标志，为下一轮等待作准备。变量 `jdr1` 保存原始数字结果，`voltage` 按视频中的 3.3 V 和 4095 换算。发送格式保留三位小数，每行末尾只有 `\\n`；本节这条调用与前面的 Hello 测试格式不同。\n\n## 42:33—46:15 · 更正接口后，配置 VOFA+ 显示曲线\n\n[视频 42:33](https://www.bilibili.com/video/BV11X4y1j7si/?p=53&t=2553) 老师指出并更正前述注入触发开关，然后编译、下载。接下来打开画面中的 `VOFA+ 1.3.10`：数据引擎选 `FireWater`，接口选串口，选 USB 转 TTL 对应端口，115200、None 流控、None 校验、8 数据位、1 停止位。\n\n先关闭串口助手已经打开的端口，再在 VOFA+ 打开端口。复位后看到连续的三位小数数据。把控件区的波形图拖入页签并填充，右键在 Y 轴中选 `I0` 数据，显示采样曲线；可在纵轴上滚轮调整显示尺度。最后遮挡、改变光照以及开关灯，曲线随电压变化；46:00 原图同时显示暗下来的实物与上升的曲线。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 2775.488,
        "asrSegments": 827,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "729d33d4c4a64ef5dacc779d01134328b099f7fb8cd8f9a52cfb281a83241a5a",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "未取得完整作者工程；图示约10.24周期是讲解目标，实际采样选13.5周期。未把原片“常规长度0或1”口述当作合法参数说明，正文保留实际值1。"
        ]
      }
    },
    {
      "page": 54,
      "phase": "adc",
      "title": "10.6 [ADC] 扫描模式",
      "duration": 2768,
      "summary": "按原片用ADC1扫描注入序列测PA0、PA1两个电位器，以TIM1 TRGO触发、串口逗号分隔发送并显示两路曲线；明确保留重复Pin0、触发开关修正及JEOC未清除等实际差异。",
      "notes": "已逐段阅读1017段完整ASR，亲看45个原尺寸帧。按录入顺序记录Rank从复制时1改2、常规触发开关误用后作者修正。原GPIO_Pin_0|GPIO_Pin_0与讲解PA0/PA1不一致；本节没有可见JEOC显式清除，已依ST RM0008 11.12.1区分本站工程纠错。原PPT电压分子R2与前图接地侧R1编号不一致；片尾下表刻度仍0到1，不说两表均已设好3.3。",
      "points": [
        "扫描模式按Rank依次转换，双电位器分压接PA0/PA1",
        "USART1仅PA9发送，MultiConv工程先Printf验证Hello world.",
        "TIM1 PSC71/ARR999/RCR0，Update TRGO每1ms触发注入组",
        "ADC1注入长度2，ch0 rank1/ch1 rank2，13.5cycle，扫描ENABLE",
        "38分前误用常规触发开关，43:37改为Injected；GPIO原片重复Pin0与JEOC工程问题分开说明",
        "两路v1/v2按%.3f,%.3f换行发送，VOFA+双曲线、I0/I1仪表及量程差异"
      ],
      "cid": 26454986609,
      "verification": {
        "status": "video-sequence-reviewed",
        "method": "完整音轨自动识别辅助阅读，并按讲授顺序与原画面交叉核对",
        "checkedAt": "2026-10-29",
        "scope": "已按顺序阅读本节完整音轨的自动识别文本，并用原画面核对原图、代码名称、参数和演示结果；不是逐秒人工听写。未取得作者完整原工程，代码按画面摘录或注明对照整理。",
        "anchors": [
          {
            "seconds": 60,
            "observation": "常规长度3、CH3/CH1/CH4序列示例",
            "frameSha256": "8b3ebb83cfbe57e1b8c81f2fec7d35f962637c4e0523f6754b4e2c6bc0915015"
          },
          {
            "seconds": 120,
            "observation": "扫描模式开关与序列示意",
            "frameSha256": "5cc27be73178c6d65bee495f122b01be37520aa0970b494873ba93e98197ac71"
          },
          {
            "seconds": 240,
            "observation": "电位器1接地3接3.3；R1在接地侧，但等效公式分子写R2",
            "frameSha256": "d0a4209ead6df338c836ecbe367c4c41484d31a19e474b5f3aac29fbc3e80ebc"
          },
          {
            "seconds": 360,
            "observation": "输出内阻R1并R2，采样时间关系图",
            "frameSha256": "6eef0c474105510a0f13bee55b97a353310d7d2c94602ad53f1f126661ddde92"
          },
          {
            "seconds": 420,
            "observation": "两电位器PA0/PA1，注入长度2、ch0/ch1及JDR1/JDR2",
            "frameSha256": "1dce77b05d06eb7c6b8488fe03caa9a2ec28e6cbb72f67c731004d5051f4bf77"
          },
          {
            "seconds": 480,
            "observation": "TIM1 TRGO1ms进入注入组的图示",
            "frameSha256": "7921bb274eed74df4367a7aac4de36f02fe57e4e00d8b38f50cf1d7108b3fec3"
          },
          {
            "seconds": 540,
            "observation": "实物两电位器与开发板",
            "frameSha256": "e7cb6f5ee73e721e28b48218cd9cbc9789f323e50ba201c51e0a48c885ad5648"
          },
          {
            "seconds": 660,
            "observation": "两个电位器滑动端PA0/PA1，端子接地/3.3V接线图",
            "frameSha256": "a73f9744174e6e417a5eb132828a4ff7190fe8456e56edd7792be343574b44e8"
          },
          {
            "seconds": 720,
            "observation": "PA9向USB转TTL RXD单向发送与共地",
            "frameSha256": "7ec7bbf03b65779f8f79536a9744d6847c939b2c149e6fc5b2f3a0858e3c4449"
          },
          {
            "seconds": 780,
            "observation": "模板工程重命名阶段",
            "frameSha256": "97baa0c1f313281e2ec1d94d4fec4c6c4e3e89c0d05093d7e2ac05bd394ca0af"
          },
          {
            "seconds": 900,
            "observation": "MultiConv，App_USART1_Init声明及GPIO结构体={0}",
            "frameSha256": "4b0a3371590bb070a9bc56edbfee8f0fc3743a878ffe537559ee24bd7a78d41f"
          },
          {
            "seconds": 1080,
            "observation": "PA9 AF_PP 2MHz，USART结构体={0}，115200/Tx/无校验/1stop录入",
            "frameSha256": "099b1dd89730263544e52051dfcece1a3171ae39e36aa8cb1f4231e3217f60b6"
          },
          {
            "seconds": 1095,
            "observation": "USART五个显式赋值与8b，未另赋流控成员",
            "frameSha256": "9eba9a36c27ee9ea68927b2fc3d57b3ebbdfc6facd6e440a018ce9a631ff0bd7"
          },
          {
            "seconds": 1140,
            "observation": "main调用App_USART1_Init",
            "frameSha256": "93a41a79e8f7a1325853bde00da17435a4228ef59c61106c6b53a1874a9298eb"
          },
          {
            "seconds": 1200,
            "observation": "My_USART_Printf(USART1,\"Hello world. \\r\\n\")测试调用",
            "frameSha256": "0d29ae4e6987c592a1a06d6a5959ef36395d848ea5c0cd217367a4a1758ae296"
          },
          {
            "seconds": 1224,
            "observation": "串口助手显示Hello world.及开发板实物",
            "frameSha256": "b38066da73cec4a78b3e80c255570e70a1ad74eb29a7c088f209d7f358b01aaa"
          },
          {
            "seconds": 1320,
            "observation": "App_TIM1_Init声明开始",
            "frameSha256": "3bfb658981a12b45a1781b751149db4b335549fcf16d7e4c689a7a81ea06e1e9"
          },
          {
            "seconds": 1440,
            "observation": "TIM1时钟使能与时基函数录入",
            "frameSha256": "c5402033a3ceb064b84b56c6d88ff0c23f5c2e3bbf94c7e7efa3919fbf5637b1"
          },
          {
            "seconds": 1500,
            "observation": "时基={0}，Up/999/71/0与TIM_TimeBaseInit完整",
            "frameSha256": "4df2f2ca04bafdd147ba4c1506dc3267707eb82b4ee56508e010ea7ca41a87e6"
          },
          {
            "seconds": 1560,
            "observation": "SelectOutputTrigger Update，准备TIM1总开关",
            "frameSha256": "ffb36a16c856fe13e423782f5181afb1862112c6b86d451ef6d80bb0ec1862d8"
          },
          {
            "seconds": 1570,
            "observation": "TIM1总开关TIM_Cmd ENABLE完成",
            "frameSha256": "2d4608d919852c47ce18b1f494bc33f72854c500fc01fffbd0f4835c2289cec1"
          },
          {
            "seconds": 1680,
            "observation": "App_ADC1_Init原GPIO_Pin_0|GPIO_Pin_0仍在录入",
            "frameSha256": "2e66d90bf8a10c8ef7095c4f0f46e3e5763d6e4e60c9aeeef8729b93d704ceac"
          },
          {
            "seconds": 1693,
            "observation": "GPIO AIN与GPIO_Init完成，但引脚仍重复Pin0",
            "frameSha256": "cb4e4df6879684c81e74d7fc24cc3b7c6fabd0883e489b7a9716da162e913c13"
          },
          {
            "seconds": 1740,
            "observation": "ADC分频6、12MHz时钟图",
            "frameSha256": "8cac2f92e993b049e5d22617d9f4a1cb05a8f39404459ab4f664e4da453848eb"
          },
          {
            "seconds": 1920,
            "observation": "ADC基本参数：DISABLE连续、Right、None常规、Independent",
            "frameSha256": "909ecd429e26a696ac1c4752d39c66830464b71463e43b9d495dcb6c5d092c71"
          },
          {
            "seconds": 1980,
            "observation": "常规长度1，ScanConvMode ENABLE，总开关先录入",
            "frameSha256": "91cf2b1906e3c389ea355f052b8b99eead8173d5c27dbd35cf8393320be57c35"
          },
          {
            "seconds": 2100,
            "observation": "注入接口汇总表",
            "frameSha256": "b71fc84130181c612561249d447977e5b4e21176dec0faa3aaba0705dba8a4d7"
          },
          {
            "seconds": 2159,
            "observation": "第二个通道已改ch1，Rank仍1的复制编辑中间态",
            "frameSha256": "c680f708422a1e3227f9b94068f4b2a4174dbbc690e1594b7f634c2a7b952d6a"
          },
          {
            "seconds": 2160,
            "observation": "第二个Rank已改2；通道0/1均13Cycles5",
            "frameSha256": "392cbd0ee417e14a664abf81ee0bf8f2bff6c821e206b237382cbe1d4f36ad5a"
          },
          {
            "seconds": 2220,
            "observation": "选择注入外部触发接口的录入阶段",
            "frameSha256": "7b2dbbb4352ba7d6261f645c74a0ee7ebf5433ed59ffba05906f7308d44fca9f"
          },
          {
            "seconds": 2268,
            "observation": "注入来源TIM1 TRGO，但使能误用ADC_ExternalTrigConvCmd",
            "frameSha256": "11d45b191ad252adbd2952ca66782b03c1da97f29116e5e5ac5dcbe6b0d6fd16"
          },
          {
            "seconds": 2280,
            "observation": "常规触发开关误用仍在，ADC总开关ENABLE",
            "frameSha256": "e804aaade80beecaf86863e4a3a95c10963f2ec14210e859ee3e89566fd3b0f8"
          },
          {
            "seconds": 2340,
            "observation": "main USART/TIM1/ADC1初始化顺序，准备JEOC轮询",
            "frameSha256": "9836a6c1883c583de056b9ec172962723dbe7a128d541568d50cc9fc5640e700"
          },
          {
            "seconds": 2400,
            "observation": "等待ADC_FLAG_JEOC，并开始读取第一个注入结果",
            "frameSha256": "44bc569e882928b9804b04a239dd831c9eb66f9f4aeba020ee4c49a6ecaeb35b"
          },
          {
            "seconds": 2460,
            "observation": "jdr1/jdr2两变量与v1/v2的3.3f/4095换算，无显式清JEOC",
            "frameSha256": "1b434fcfcef4726c8e982a1f89be9ad315ebf1dadceff57c0c450d7cd713eab0"
          },
          {
            "seconds": 2520,
            "observation": "VOFA+FireWater串口115200/None/8/1配置",
            "frameSha256": "034e64772507f156fc9c1560d6b8ebee21f7416e6ed1fcb396903a7082e94812"
          },
          {
            "seconds": 2568,
            "observation": "My_USART_Printf两路格式%.3f,%.3f\\n与v1/v2，循环结束无清JEOC调用",
            "frameSha256": "5ad22163893ed2379ff69ad89eb8caeea419b378de9210a2e64d91b3527efbb9"
          },
          {
            "seconds": 2580,
            "observation": "首次下载后查看实物，后面准备修正",
            "frameSha256": "b50a0c3c1b0a77129ae3ec4cdf88f21a74bbe4bbff13d45818403820f721e02b"
          },
          {
            "seconds": 2617,
            "observation": "ADC_ExternalTrigInjectedConvCmd修正完成",
            "frameSha256": "20235c460217743a4fd21111845aab399e8c9c83a42c6e8850fc9a10c0ee65b7"
          },
          {
            "seconds": 2640,
            "observation": "VOFA+连续两列文本，拖入波形图",
            "frameSha256": "4462c8ad770a550308adc5a5e13352b2287f9f9a52b91a895a1322c6e31b3cd1"
          },
          {
            "seconds": 2700,
            "observation": "I0/I1曲线与两个仪表；默认量程含负值",
            "frameSha256": "c6559f1d2c97c6a153cd6b7acf26ce28c10fb9b9164474bd81078b57b7db54dd"
          },
          {
            "seconds": 2735,
            "observation": "下表设置最小0最大1，上表已改约0到3.3",
            "frameSha256": "93a21e556a4fbffd64d15b1345b003c62a966542aa2bc51fc57f190ad032dab2"
          },
          {
            "seconds": 2745,
            "observation": "转左电位器，I0约1.602，上表已改量程，下表仍0到1",
            "frameSha256": "8c90b32f8ebd8c53baecdbbe47bff70a69436801acff5d4aa07af7751cf3c183"
          },
          {
            "seconds": 2760,
            "observation": "转右电位器，绿曲线和I1值变化，下表仍0到1刻度",
            "frameSha256": "d009f122cffe801adfb8f518850432dcfe7b64cc47270393633482693ed6fb9b"
          },
          {
            "seconds": 2766,
            "observation": "片尾实物和两曲线，下表仍0到1刻度可见",
            "frameSha256": "9f9be48d0fbca8ab22ffddd226ab8ee15c80b9226d2f3004e2140a96c1632a8c"
          }
        ]
      },
      "learningNotes": "## 00:05—02:05 · 扫描模式按序转换多个通道\n\n[视频 00:05](https://www.bilibili.com/video/BV11X4y1j7si/?p=54&t=5) 本节打开 ADC 扫描模式。开头用常规序列举例：长度设为 3，依次填入 CH3、CH1、CH4；使能扫描后，按所填顺序完成这组转换。这里是同一个 ADC 依次切换输入，不能把“多通道”理解成两路在完全相同的瞬间同时采样。\n\n随后实验改用注入序列，测两个电位器的电压，以 TIM1 TRGO 每 1 ms 触发一组转换，再通过 USART1 发到电脑。\n\n## 02:22—06:56 · 电位器分压、输出内阻和采样时间\n\n[视频 02:22](https://www.bilibili.com/video/BV11X4y1j7si/?p=54&t=142) 先认识三脚电位器：1、3 是电阻两端，2 是滑动端。按图把 1 接地、3 接 3.3 V，旋转滑动端便改变分压比例。视频所用电位器总阻值 10 kΩ，在中点时两边各 5 kΩ，输出约 1.65 V；接地侧占总阻值三分之一时，输出约 1.1 V。\n\n把输出等效为电压源串联电阻，内阻为两段电阻并联 `R1 || R2`。老师取 10 kΩ 作为保守上界，沿前课方法得到约 10.24 个 ADC 周期的采样时间目标。后续实际选硬件支持的 13.5 周期。\n\n读图需核对编号：课件前图把接地一段标为 R1、高端一段标为 R2，等效电源公式却把分子写成 R2。按前图的编号，2 对 1 的电压应为 `3.3 × R1 / (R1 + R2)`；中点例子不受影响，但非中点不能混用两个编号。这是对原图的纠错说明。\n\n## 06:56—12:38 · 两路注入序列与实际接线\n\n[视频 06:56](https://www.bilibili.com/video/BV11X4y1j7si/?p=54&t=416) 两个电位器的 1 脚都接地、3 脚都接 3.3 V；左边滑动端接 PA0/通道 0，右边滑动端接 PA1/通道 1。USART1 只发送，把 PA9 接 USB 转 TTL 的 RXD，保持共地。\n\n开启扫描，注入序列长度设为 2：第一个转换位置是通道 0，第二个是通道 1。TIM1 TRGO 每 1 ms 启动这一组，结果分别放入 JDR1、JDR2。课前演示中，左边电位器对应红色曲线，右边对应绿色曲线，并额外显示两块电压仪表。\n\n## 12:38—20:30 · 建 MultiConv 工程，初始化并测试 USART1\n\n[视频 12:38](https://www.bilibili.com/video/BV11X4y1j7si/?p=54&t=758) 从模板新建 `MultiConv` 工程，在 `main.c` 编写 `App_USART1_Init(void)`。先开 GPIOA 时钟，`GPIO_InitTypeDef` 初值 `{0}`，把 PA9 配为 `GPIO_Mode_AF_PP`、`GPIO_Speed_2MHz`，执行 GPIO 初始化。\n\n开启 USART1 的 APB2 时钟，声明 `USART_InitTypeDef USART_InitStruct = {0}`。本节实际填写 115200、`USART_Mode_Tx`、`USART_Parity_No`、`USART_StopBits_1`、`USART_WordLength_8b`，没有另行给硬件流控成员赋值；与前一节逐项填写的录入过程不同。然后 `USART_Init`，再 `USART_Cmd(USART1, ENABLE)`。\n\n在 `main` 调用初始化，引入 `usart.h`，本节使用 `My_USART_Printf(USART1, \"Hello world. \\r\\n\");` 作测试。编译后连接 ST-Link 下载；串口助手设相同参数，ASCII 接收，复位后出现 `Hello world.`。20:24 原图保留了文本与实物。测试通过后，后续把这条调用注释掉。\n\n## 20:30—26:28 · TIM1 Update 产生每 1 ms 一次的 TRGO\n\n[视频 20:30](https://www.bilibili.com/video/BV11X4y1j7si/?p=54&t=1230) 新建 `App_TIM1_Init(void)`。本例 TIM1 输入 72 MHz，PSC 设 71，得到 1 MHz 计数时钟；ARR 设 999，周期为 1000 个计数；RCR 为 0，因此每 1 ms 产生更新事件。\n\n使能 `RCC_APB2Periph_TIM1`，`TIM_TimeBaseInitTypeDef TIM_TimeBaseInitStruct = {0}`，依次填写 Up、Period 999、Prescaler 71、RepetitionCounter 0，调用 `TIM_TimeBaseInit(TIM1, &TIM_TimeBaseInitStruct)`。随后：\n\n```c\nTIM_SelectOutputTrigger(TIM1, TIM_TRGOSource_Update);\nTIM_Cmd(TIM1, ENABLE);\n```\n\n把 `App_TIM1_Init()` 放到 USART 初始化之后，并注释之前的 Hello 测试语句。\n\n## 26:28—33:03 · App_ADC1_Init：双引脚、时钟与扫描使能\n\n[视频 26:28](https://www.bilibili.com/video/BV11X4y1j7si/?p=54&t=1588) 新建函数名为 `App_ADC1_Init(void)`，本节这里带数字 1。目标是把 PA0、PA1 都初始化为模拟输入。开启 GPIOA 时钟、结构体 `{0}`、选择 `GPIO_Mode_AIN` 后调用 GPIO 初始化。\n\n这里存在画面与口述差异：28:13 原 IDE 的引脚一行实际是：\n\n```c\nGPIO_InitStruct.GPIO_Pin = GPIO_Pin_0 | GPIO_Pin_0;\n```\n\n重复的 Pin 0 只选中 PA0。若按实验目标同时配置两脚，这一行应改为 `GPIO_Pin_0 | GPIO_Pin_1`，这是本站针对原录入的纠错，不能说成老师在该画面已经写了 Pin 1。已核画面没有取得这行后续被更正的证据。\n\n接着 `RCC_ADCCLKConfig(RCC_PCLK2_Div6)`，本例 ADC 时钟为 12 MHz，再使能 `RCC_APB2Periph_ADC1`。声明 `ADC_InitTypeDef ADC_InitStruct = {0}`，设置：连续模式 DISABLE、右对齐、常规触发 `ADC_ExternalTrigConv_None`、独立模式、常规通道数 1、扫描模式 ENABLE，执行 `ADC_Init(ADC1, &ADC_InitStruct)`。扫描的关键变化就是本节 `ADC_ScanConvMode = ENABLE`。\n\n老师先写 `ADC_Cmd(ADC1, ENABLE)`，接下来再把注入序列配置插到这条总开关调用之前，最终仍是配置完序列再开启 ADC。\n\n## 33:03—38:10 · 注入长度 2、两个 Rank 与触发来源\n\n[视频 33:03](https://www.bilibili.com/video/BV11X4y1j7si/?p=54&t=1983) 从接口汇总表找到注入组配置。长度改为 2，两次填写通道：\n\n```c\nADC_InjectedSequencerLengthConfig(ADC1, 2);\nADC_InjectedChannelConfig(ADC1, ADC_Channel_0, 1, ADC_SampleTime_13Cycles5);\nADC_InjectedChannelConfig(ADC1, ADC_Channel_1, 2, ADC_SampleTime_13Cycles5);\n```\n\n第二次调用由复制得到，35:59 的 Rank 还停留在 1 的编辑状态，36:00 已改成 2。Rank 表示在本组中第几个转换，不是 PA 引脚编号。\n\n选择 `ADC_ExternalTrigInjectedConvConfig(ADC1, ADC_ExternalTrigInjecConv_T1_TRGO)`。触发开关首次又误写为 `ADC_ExternalTrigConvCmd(ADC1, ENABLE)`；37:48、38:00 原图都能看见这个常规组接口。老师直到第一次下载后发现异常，才在 43 分钟左右修正，不能提前把初次录入写成已经正确。完成后在 `main` 的 USART、TIM1 初始化之后调用 `App_ADC1_Init()`。\n\n## 38:10—42:50 · 读两路 JDR、换算为浮点电压，按逗号分隔发送\n\n[视频 38:10](https://www.bilibili.com/video/BV11X4y1j7si/?p=54&t=2290) 在主循环先用 `while(ADC_GetFlagStatus(ADC1, ADC_FLAG_JEOC) == RESET);` 等注入组完成。两次调用 `ADC_GetInjectedConversionValue`，按讲解分别选 JDR1、JDR2，存入 `uint16_t jdr1` 和 `jdr2`，再声明 `float v1, v2`。41:00 原图与 42:48 发送前的代码为：\n\n```c\nv1 = jdr1 * (3.3f / 4095);\nv2 = jdr2 * (3.3f / 4095);\nMy_USART_Printf(USART1, \"%.3f,%.3f\\n\", v1, v2);\n```\n\nFireWater 的两路数据采用逗号分隔，一行末尾 `\\n`；两个数都保留三位小数。这个格式与单通道实验相比多了第二个数及中间逗号。视频按端点比例使用 4095 换算，这里照录原公式。\n\n需要单独纠正一个工程问题：本节可见循环没有像上一节那样显式 `ADC_ClearFlag(ADC1, ADC_FLAG_JEOC)`。STM32F1 的 JEOC 在一组注入转换结束时置位，须由软件清除；不能把这段未清标志的轮询当作“后续每轮都在等一个新的 1 ms 结果”。需要保证逐次等待时，应在两路读取后的处理路径明确安排清标志。这是本站工程注，未把新增清除调用塞进原片代码摘录。依据 [ST RM0008，11.12.1 ADC_SR](https://www.st.com/resource/en/reference_manual/cd00171190.pdf)，并核对本地参考手册第 236 页。\n\n## 42:50—43:50 · 首次下载异常后修正注入开关\n\n[视频 42:50](https://www.bilibili.com/video/BV11X4y1j7si/?p=54&t=2570) 首次编译无错误、无警告，下载后老师发现问题，回到 ADC 初始化指出调用了常规序列开关，提到上一节也犯过相同错误。43:37 原图中的修正版为：\n\n```c\nADC_ExternalTrigInjectedConvCmd(ADC1, ENABLE);\n```\n\n重新编译、下载、复位，再看 VOFA+ 已有两列数据。这个修正针对注入外部触发使能，和前面 Pin 0 重复、JEOC 清除是不同的问题。\n\n## 43:50—46:07 · 两条曲线、两个仪表与量程设置\n\n[视频 43:50](https://www.bilibili.com/video/BV11X4y1j7si/?p=54&t=2630) VOFA+ 采用 FireWater、串口 115200、无流控、无校验、8 位数据、1 位停止位；先关闭串口助手占用的端口。拖入波形图并上下填充，在 Y 轴同时选择 `I0`、`I1`。再拖入两块仪表，上表绑定 I0，下表绑定 I1。旋转左、右电位器，可见相应颜色曲线和指针变化。\n\n老师发现默认仪表量程只覆盖一部分，讲解提出把量程设为 0～3.3 V。45:35 原图正在编辑下表设置，最小值为 0、最大值仍为 1；45:45 和片尾 46:06，上表刻度已覆盖约 0～3.3，下表仍可见 0～1 的刻度。因此可照讲解把两块仪表各自设为 0～3.3，但不能说片尾画面已经证明两块表都改好了。最后的原画面确实显示两路曲线随两个旋钮分别变化，这就是本节展示的结果。",
      "learningNotesOrigin": "依据本节完整音轨的自动识别文本与原视频画面，按讲授顺序解释原图、原接口和代码；识别文本不是作者字幕。",
      "learningNotesKind": "video-sequence",
      "sequenceReview": {
        "status": "asr-text-and-frame-aligned",
        "audioDuration": 2767.0186875,
        "asrSegments": 1017,
        "fullAudioASRReadComplete": true,
        "manualListenComplete": false,
        "originalProjectObtained": false,
        "notesSha256": "0bf9ef9e1ab657a7af7ad9473ea039c833e66903291170873b55cd9b3673b7e3",
        "reviewedAt": "2026-10-29",
        "unresolved": [
          "原片GPIO重复Pin0后续未取得更正证据；正文明确本站正确双引脚写法而不伪装原录入。",
          "本节可见循环缺少显式JEOC清除；ST RM0008 11.12.1规定软件清除，曲线出现不证明逐轮同步采样。",
          "课件分压分子R2与前图R1/R2标号不一致；正文按端点读图纠错。",
          "ASR讲解提出双表0到3.3，但亲看片尾下表仍0到1；两者分开保存。"
        ]
      }
    }
  ]
};
