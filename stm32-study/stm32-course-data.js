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
      "summary": "认识课程的教学方式、实验硬件、课程目录与项目展示。",
      "notes": "画面先介绍课程及其历次版本，随后展示“零基础入门、面包板教学、程序纯手打、讲解很细致”等教学安排。实验硬件使用面包板与最小系统板，旁边连接按钮、LED和显示模块。\n\n课程目录画面按章、节、小节与知识点组织内容，并展示带OLED、HC-SR04模块的小车作品。结尾以书籍和芯片官方文档列表说明配套参考资料。本节是学习方式与课程范围的介绍，尚未展开GPIO或串口的具体编程。",
      "points": [
        "面包板与最小系统板搭建实验",
        "课程目录按章、节、小节、知识点展开",
        "展示带OLED和超声波模块的小车作品"
      ],
      "cid": 1219312317,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 45,
            "observation": "课程介绍页展示版本时间线及八项教学特点",
            "frameSha256": "2d677559898c2baa231542805f799e465516257a4db1c82e08f69b2ddbe828f0"
          },
          {
            "seconds": 136,
            "observation": "实物图展示面包板、最小系统板、按钮和显示模块",
            "frameSha256": "33ca66329f1670bd22b9acdb78e8119d81b07922c84e0ebc65aefec3f6c0df6a"
          },
          {
            "seconds": 228,
            "observation": "课程目录以章、节、小节、知识点的层次展开",
            "frameSha256": "d9a387cba5ad145b22eae281a2dc7eb6bdd390925bb679cee7880e79c1a72870"
          },
          {
            "seconds": 319,
            "observation": "展示装有HC-SR04超声波模块和OLED的小车作品",
            "frameSha256": "604713d24035ba49555d3f1ead4c834290fdabe26ad6de784b68f907dff7a58a"
          }
        ]
      }
    },
    {
      "page": 2,
      "phase": "prep",
      "title": "1.1 [准备] 安装开发环境",
      "duration": 1289,
      "summary": "准备Keil开发工程与ST-Link连接，并用标准库PC13闪灯程序验证编译下载。",
      "notes": "本节实际展示Keil开发环境和工程模板。工程树包含user、startup、std_periph_driver及my_lib等分组，main.c使用stm32f10x.h与delay.h。画面还展示配套文件取得过程，以及ST-Link与最小系统板的连接。\n\n后段通过PC13板载LED程序验证环境：开启GPIOC时钟，设置GPIO_Pin_13、GPIO_Mode_Out_OD和GPIO_Speed_2MHz，然后在while循环交替写Bit_RESET与Bit_SET并延时。编译窗口出现0错误、0警告，随后显示Flash下载完成；这些是视频中的演示结果。",
      "points": [
        "Keil工程模板包含用户代码、启动文件和标准库",
        "ST-Link连接最小系统板",
        "PC13配置为开漏输出、2MHz，循环写电平实现闪灯"
      ],
      "cid": 26461668950,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 128,
            "observation": "Keil打开工程模板，工程树含user、startup、std_periph_driver、my_lib",
            "frameSha256": "e5a85ec0a2b907da1da0cea0c167c985f1a649dfd18f877b34f667361ebd7eee"
          },
          {
            "seconds": 902,
            "observation": "实物展示ST-Link通过导线连接最小系统板",
            "frameSha256": "c58d2a70c8f3047df61f5c8ef5a0186a90c3cb8b61a09613f67b057330739aa3"
          },
          {
            "seconds": 1160,
            "observation": "main.c可见PC13开漏输出2MHz配置与循环写电平，编译结果0错误0警告",
            "frameSha256": "9323e3d4c19c0744025687b21b703932e5840b8a4b05258aeda8d72f78ae9b86"
          },
          {
            "seconds": 1259,
            "observation": "Keil下载输出显示Flash Load finished并展示开发板",
            "frameSha256": "4ff75efcbf1c82dd2ea02d498712052bfa89211fb2cc59db42addb6b682c5255"
          }
        ]
      }
    },
    {
      "page": 3,
      "phase": "prep",
      "title": "1.1 [准备] STM32 的基本信息",
      "duration": 864,
      "summary": "理解STM32名称、产品系列和F103C8T6型号字段，区分数据手册与参考手册。",
      "notes": "开头拆解STM32名称，画面分别标注STMicroelectronics、Micro Controller与32位，并展示最小系统板实物。随后用产品系列图介绍STM32的不同系列位置。\n\n型号讲解把C8T6拆成四部分：C为48引脚，8为64Kbytes Flash，T为LQFP封装，6为图示温度档。后段对比两类手册：DS5319数据手册用于查性能指标和参数，RM0008参考手册用于理解芯片的使用与编程。结尾展示资料所在的文件目录。",
      "points": [
        "STM32名称与32位单片机概念",
        "C8T6对应引脚数、Flash容量、封装和温度范围",
        "DS5319给规格参数，RM0008说明使用与编程"
      ],
      "cid": 26054889101,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 86,
            "observation": "STM32名称页分别标注STMicroelectronics、Micro Controller、32位",
            "frameSha256": "0e58e953787541cee8d41e3cf84910246f27669ac4e09d3f5635857ce31195f6"
          },
          {
            "seconds": 432,
            "observation": "STM32产品系列树展示F系列及其他系列",
            "frameSha256": "27aa639ae226566084d25da458cd8e4519e0ab7eaf8904eec6470d4f9c6b72fe"
          },
          {
            "seconds": 604,
            "observation": "C8T6字段图标出48引脚、64Kbytes Flash、LQFP和温度范围",
            "frameSha256": "c436903163708b73a6c88b1d9a71e03be7a8f6f9dcbb1d88787ec0bee348fb26"
          },
          {
            "seconds": 777,
            "observation": "对比DS5319数据手册与RM0008参考手册的用途",
            "frameSha256": "c031f922231cf1a90c077cab643de3a2d70af5256ca73cd18b30f475de25701e"
          }
        ]
      }
    },
    {
      "page": 4,
      "phase": "prep",
      "title": "1.2 [准备] STM32 的引脚分布",
      "duration": 614,
      "summary": "认识芯片引脚编号、电源命名和GPIO分组，结合LQFP48引脚图辨认端口。",
      "notes": "本节从芯片资料与引脚识别开始。画面用封装示意图说明一般编号规则：圆点附近是1脚，再逆时针递增。中段展示NMOS的栅、漏、源端，并结合Vdd、Vss解释供电名称，还对照最小系统板实物寻找引脚。\n\n后段使用STM32F103的LQFP48引脚图，区分特殊功能脚和常规GPIO。GPIO以字母作为组编号、数字作为组内引脚编号，画面列出GPIOA的PA0—PA15、GPIOB的PB0—PB15、GPIOC的PC13—PC15及GPIOD的PD0/PD1。",
      "points": [
        "圆点附近为1脚，编号逆时针递增",
        "说明Vdd/Vss与MOS管端子的命名联系",
        "GPIOA/B/C/D按字母分组、数字编号"
      ],
      "cid": 26054951039,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 184,
            "observation": "封装示意图写明圆点附近为1脚、编号逆时针递增",
            "frameSha256": "e0e4225dd49771b78a3aa6cd679f50305b7e8f7ad3b344cb3819881948cbd63d"
          },
          {
            "seconds": 307,
            "observation": "NMOS示意图标注Gate、Drain、Source及Vdd/Vss名称",
            "frameSha256": "fe1fd377bdaf78b5dd8e825fe3185f9612a522babd3c3fc69ab9d2b6ebd9aa49"
          },
          {
            "seconds": 552,
            "observation": "LQFP48引脚图旁列GPIOA、GPIOB、GPIOC、GPIOD分组",
            "frameSha256": "c06f8da05979d3b6823571bfe7ba391c15e113ab946dac9b3c9331a613a84d56"
          },
          {
            "seconds": 584,
            "observation": "对GPIOA的PA0至PA15命名作标记",
            "frameSha256": "6e239165a611c0fe975e81c6b0c1cf396d9d1494172fbc9166bb2a55ccc2b127"
          }
        ]
      }
    },
    {
      "page": 5,
      "phase": "gpio",
      "title": "2.1 [GPIO] 4 种输出模式",
      "duration": 1973,
      "summary": "借GPIO结构理解推挽/开漏的电气差别，以及通用/复用模式的控制来源。",
      "notes": "本节先对照最小系统板认识GPIO，再以寄存器与引脚之间的箭头区分输出和输入。随后打开RM0008的GPIO与AFIO章节查找功能说明。\n\n推挽部分用P-MOS、N-MOS图解释写0与写1时的导通关系，并标出低、高电平；开漏部分则明确标出写0为低、写1为高阻。后段把同一引脚的两种用途并列：通用模式由CPU写电平驱动LED；复用模式把引脚交给串口模块，向外输出连续通信波形。这里强调的是控制来源与电气结构，而不是LED程序的完整编写。",
      "points": [
        "输出数据寄存器写电平，输入数据寄存器读电平",
        "推挽结构交替控制P-MOS和N-MOS",
        "开漏写0输出低，写1为高阻态",
        "通用模式由CPU控制，复用模式交给串口等片上外设"
      ],
      "cid": 26335970481,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 591,
            "observation": "输出/输入示意图分别连接输出数据寄存器和输入数据寄存器",
            "frameSha256": "58652d0ae596bb47c861ef61bc7c8b5e7b8853b0f2e28e93d86b3735ccd71e2d"
          },
          {
            "seconds": 986,
            "observation": "浏览RM0008的GPIO与AFIO章节及GPIO功能描述",
            "frameSha256": "2b1d717ff39e248567fa13a9d0e1a5d98e9132c58fe9754dd58c3524b893b68d"
          },
          {
            "seconds": 1381,
            "observation": "推挽图以P-MOS/N-MOS显示写0输出低、写1输出高",
            "frameSha256": "a96897ebda8ee024cdeab29df1ff3a4b1b08c2235c5cdb430cb9c801e7797c73"
          },
          {
            "seconds": 1530,
            "observation": "开漏示意图写明写0为低、写1为高阻，P-MOS不参与主动拉高",
            "frameSha256": "9b7119e6ecadc680f48057b51021a08396654aaef5afe178f53408b37a6676be"
          },
          {
            "seconds": 1775,
            "observation": "并列通用模式CPU驱动LED与复用模式串口驱动引脚的例子",
            "frameSha256": "dd7d165f95e71cf9ed6ebae4257064a3428eef2648afb2438c83c0f3deda7a82"
          }
        ]
      }
    },
    {
      "page": 6,
      "phase": "gpio",
      "title": "2.2 [GPIO] IO 的最大输出速度",
      "duration": 625,
      "summary": "用波形说明GPIO输出速度档位、边沿失真与实际接口速度需求。",
      "notes": "画面把IO最大输出速度定义为交替写0与1且输出不失真的最快速度，并用推挽输出电路与方波建立联系。随后比较理想方波和实际波形，标出上升、保持和下降时间；发送节奏越来越快时，有限的边沿时间使波形逐渐失真。\n\n中后段分别展示低速2MHz、中速10MHz和高速50MHz的波形。选档举例没有停留在抽象数字：一例查外设时序表，另一例以开发板USB 2.0 FS的12Mbps说明需要选择足够的GPIO输出速度。本节围绕波形与档位展开。",
      "points": [
        "理想方波与实际上升、保持、下降时间",
        "2MHz、10MHz、50MHz三个输出速度档位",
        "以外设时序表和USB12Mbps示例说明档位选择"
      ],
      "cid": 26054951429,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 62,
            "observation": "画面定义IO最大输出速度，并画出推挽电路和交替0/1方波",
            "frameSha256": "b3b2120cc9c33c6493140f924751e65d2d4fe5a5caa131a32ef105bc58667a62"
          },
          {
            "seconds": 187,
            "observation": "并列理想与实际波形，实际波形标出上升、保持、下降时间",
            "frameSha256": "793e7c1391698499ed9ded9aeaf25c80d22b6cbd71aab3f7e9533a9a03e60e98"
          },
          {
            "seconds": 437,
            "observation": "分别展示2MHz、10MHz、50MHz的输出速度波形",
            "frameSha256": "d1bc4dafa2ea321e17b56d397ceba9cf9b159692e241ddc52f31df696c25328d"
          },
          {
            "seconds": 595,
            "observation": "开发板USB 2.0 FS 12Mbps例子旁标注高速50MHz",
            "frameSha256": "4abb1fb4b3e335800811e2c74873f4e9e1d22e9de108604929f2890dc2f6c4fb"
          }
        ]
      }
    },
    {
      "page": 7,
      "phase": "gpio",
      "title": "2.3 [GPIO] LED 闪灯实验",
      "duration": 2554,
      "summary": "从LED电路、GPIO编程接口到PC13板载LED的标准库闪烁实验。",
      "notes": "先分析发光二极管、限流电阻和电流方向，再对照板载LED的VCC3V3—LED—电阻—PC13电路，比较推挽和开漏连接。GPIO编程接口表列出GPIO_Init、GPIO_WriteBit、GPIO_ReadInputDataBit和GPIO_ReadOutputDataBit。\n\n初始化参数画面解释GPIO_Pin、GPIO_Speed和GPIO_Mode。闪灯程序把PC13先写Bit_RESET点亮，Delay(100)，再写Bit_SET熄灭并Delay(100)，在while循环重复。最后回到Keil展示同样的循环和下载结果；本节的板载LED是低电平点亮。",
      "points": [
        "LED限流电阻与板载PC13连接方式",
        "GPIO_Init、GPIO_WriteBit及输入/输出寄存器读取接口",
        "PC13写0点亮、写1熄灭，两段各延时100ms"
      ],
      "cid": 26351173764,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 255,
            "observation": "LED串联限流电阻示意图标注电流和二极管压降",
            "frameSha256": "b0d22bbf23c866dbf8cc2223169efa571d0420c29d0b03b771fef3d901592e77"
          },
          {
            "seconds": 766,
            "observation": "板载LED原理图标注VCC3V3、D2、R5和PC13，并比较推挽/开漏连接",
            "frameSha256": "efd1f6b79863b3e35ca18d0750ed787cd80df8adcb9db37f6ab31bf150a2469c"
          },
          {
            "seconds": 1277,
            "observation": "GPIO编程接口表列GPIO_Init、GPIO_WriteBit及两个读取接口",
            "frameSha256": "01652aa4f290bbdf28c3787a88dfbda9559e2e6b1bdfa6e9ed48f1111002f8d6"
          },
          {
            "seconds": 2298,
            "observation": "程序写PC13低点亮、高熄灭，每段Delay(100)",
            "frameSha256": "defc6579dcd95e2ef60ad872a42d10ea273c7b886aed0c1a5597973f3beed0f3"
          }
        ]
      }
    },
    {
      "page": 8,
      "phase": "gpio",
      "title": "2.4 [GPIO] 4 种输入模式",
      "duration": 937,
      "summary": "以GPIO输入电路解释上拉、下拉、浮空和模拟四种模式。",
      "notes": "本节围绕GPIO输入结构展开，先展示开发板，再用电路图连接引脚、保护二极管、上下拉电阻、施密特触发器和输入数据寄存器。画面把施密特触发器标为电压转数字，把上拉电阻标为提供默认电压，把保护二极管标为防静电。\n\n图右列出输入上拉、输入下拉、输入浮空和模拟模式。后续画面通过标记电阻与通路的接通/断开，说明各模式的区别；末段图中将数字输入路径划去并标记上下拉状态。",
      "points": [
        "输入数据寄存器与施密特触发器",
        "保护二极管用于输入端保护",
        "上拉/下拉提供默认电压，四种模式对应不同通路状态"
      ],
      "cid": 26360349837,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 93,
            "observation": "章节标题明确为GPIO的4种输入模式",
            "frameSha256": "52df67dab8c84abfec7e1d371c86a255fd2bde16959f723de7b9d986a6d4824d"
          },
          {
            "seconds": 468,
            "observation": "输入结构图列出上拉、下拉、浮空、模拟模式，并标注默认电压与防静电",
            "frameSha256": "951150064a83d1b792c153a68fb13b8979762d6e22621b415903e365d44ce442"
          },
          {
            "seconds": 655,
            "observation": "输入结构图显示上下拉电阻、保护二极管与施密特触发器",
            "frameSha256": "4ef4f7f4d1ac661d482a5b838f1f2e563fa3fdc6e8fbf9947c013436e9802a13"
          },
          {
            "seconds": 907,
            "observation": "同一结构图对数字通路和上下拉状态作划线标记",
            "frameSha256": "9eeecb3c2a5865fd9fefb5f8746678f8f2f6559662ef789e08dc866f5e35fff0"
          }
        ]
      }
    },
    {
      "page": 9,
      "phase": "gpio",
      "title": "2.5 [GPIO] 按钮实验",
      "duration": 1233,
      "summary": "PA1上拉输入读取按钮，控制PA0外接LED的亮灭。",
      "notes": "开头比较两种LED连接：外接LED接PA0、限流电阻和地，板载LED则接PC13并由低电平点亮。视频随后在面包板搭建外接LED实验，Keil中将PA0配置为普通推挽输出。\n\n按钮电路使用PA1，一端接PA1、一端接地，PA1初始化为输入上拉。程序在while循环用GPIO_ReadInputDataBit读取PA1；等于Bit_RESET代表按钮按下，于是把PA0写Bit_SET点亮外接LED，否则写Bit_RESET熄灭。此处实现的是按住亮、松开灭。",
      "points": [
        "先比较PA0外接LED与PC13板载LED接法",
        "PA0普通推挽输出，PA1输入上拉且按钮接地",
        "主循环读取PA1，按下点亮PA0 LED，松开熄灭"
      ],
      "cid": 26054951605,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 123,
            "observation": "并列PA0外接LED推挽接法和PC13板载LED开漏接法",
            "frameSha256": "95d01f4e4445eaeddcef4f3d833e9594f3f8b873a0549f13927896317f37c2f1"
          },
          {
            "seconds": 616,
            "observation": "Keil配置PA0为GPIO_Mode_Out_PP，准备GPIO_WriteBit",
            "frameSha256": "fb3c6b2f35a75310d73e64541538e58462f16e4a70ee5a9d72ca6f35235b36ea"
          },
          {
            "seconds": 863,
            "observation": "按钮示意图为PA1接地，代码配置PA1输入上拉",
            "frameSha256": "bc779576365df592cbca10229e0b1078c11c8851bdee70ff1ff497bb96a1b9f4"
          },
          {
            "seconds": 1109,
            "observation": "while循环读取PA1，按下写PA0高电平、松开写低电平",
            "frameSha256": "174306c73391fe8d0431da4571ab10de2f637762adcde72659284419df6c1f1d"
          }
        ]
      }
    },
    {
      "page": 10,
      "phase": "uart",
      "title": "3.1 [串口] 通信协议",
      "duration": 1270,
      "summary": "通过数字27、字符串Hello和校验示例理解串口帧格式。",
      "notes": "开头用两端设备的连线解释Tx发送脚、Rx接收脚及交叉连接。随后画出空闲、起始位、D0—D7数据位、停止位的帧结构，并以十进制27为例把数字拆为二进制，再依发送顺序填写波形。\n\n另一个例子发送字符串Hello，画面给出各字符ASCII码并填写对应帧。中段列出可配置数据位长度、校验位以及停止位长度；后段用十进制85的波形展示奇校验，还在接收波形上标出某一位变化。本节围绕通信时序展开。",
      "points": [
        "Tx与Rx交叉连接",
        "起始位、D0起的数据位、停止位与空闲状态",
        "用数字27和Hello画帧，再用85演示奇校验"
      ],
      "cid": 26377979181,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 127,
            "observation": "两设备Tx/Rx交叉连接图并解释Transmit与Receive",
            "frameSha256": "1a470c1fe4aa6c8e943038db44812c39100644e1846d2a3abbf33f72847def19"
          },
          {
            "seconds": 381,
            "observation": "串口帧上标空闲、起始、D0至D7、停止，并列27及Hello例子",
            "frameSha256": "70410ccefc3d0fc77be3484477e10b8a1b0d3c940876de5d25f5f1dd0c06a453"
          },
          {
            "seconds": 635,
            "observation": "数字27和Hello的二进制数据依次填写到帧波形",
            "frameSha256": "dfccf2e96d8f9e343d7555883efef2bc088245c4540803b8cabf9e8f74aca63c"
          },
          {
            "seconds": 889,
            "observation": "列出数据位长度、校验位与停止位可选长度",
            "frameSha256": "789d3612f5e2bdad84c499068b19cfb63cfa555084906e3eeed37ee8970342ee"
          },
          {
            "seconds": 1240,
            "observation": "85的奇校验波形上标出接收数据某位由1变0",
            "frameSha256": "36c56e7a0ff7f0cb6f114ed8c0b40591de3f5daed43450d821e1f8140928042e"
          }
        ]
      }
    },
    {
      "page": 11,
      "phase": "uart",
      "title": "3.2 [串口] UART 模块的使用方法",
      "duration": 1344,
      "summary": "理解USART模块、串并转换、初始化参数和USART1的115200示例。",
      "notes": "USART模块框图把时钟、分频器、发送/接收数据寄存器、移位寄存器、Tx/Rx和状态标志放在同一张图中。发送数据例子以寄存器中的字节逐位移出，说明串并转换过程。\n\n课程提纲随后列出模块简介、基本用法、串并转换、帧格式、波特率和编程接口。初始化画面介绍USART_Init及USART_InitTypeDef字段；具体例子为USART1开启时钟，设置115200波特率、收发双向、8位数据、无校验、1位停止位，再调用USART_Init。末段在Keil中填写这些配置。",
      "points": [
        "发送/接收数据寄存器、移位寄存器与Tx/Rx",
        "USART_InitTypeDef配置波特率和帧格式",
        "USART1例子设置115200、8位、1停止位、无校验、双向"
      ],
      "cid": 26054951803,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 134,
            "observation": "USART框图显示时钟分频、发送/接收寄存器、控制电路、Tx/Rx与状态标志",
            "frameSha256": "ce55af2fbed22486a89bb482ec178edfad63409e392f552a7b59c1647b97db68"
          },
          {
            "seconds": 403,
            "observation": "发送数据100的寄存器示意图逐位连接至Tx波形",
            "frameSha256": "fb6c5abc06a1d989701100e87953efb81f98352c8377babfb78a2d6ba6363cc8"
          },
          {
            "seconds": 940,
            "observation": "USART_Init及初始化结构体字段说明页",
            "frameSha256": "4dacb227c6d326fb9ff528573bc2ace575cff3ce7660dea1e58be647d7955858"
          },
          {
            "seconds": 1209,
            "observation": "USART1例子设置115200、8数据位、1停止位、无校验并调用USART_Init",
            "frameSha256": "b5753acb1d6f1c9f750ed3a5da6996e54fde80d939ca53cace09693769cc5204"
          }
        ]
      }
    },
    {
      "page": 12,
      "phase": "uart",
      "title": "3.3 [串口] 为串口初始化 IO 引脚",
      "duration": 1521,
      "summary": "为USART配置GPIO，并比较默认引脚与AFIO重映射引脚。",
      "notes": "本节从USART对外引脚展开，图区分Tx发送、Rx接收、CTS/RTS硬件流控以及同步模式时钟CK。随后比较普通GPIO输出和由串口模块控制的复用输出。\n\n引脚表列出USART1默认映射PA9/PA10与重映射PB6/PB7。默认配置示例把PA9设置为GPIO_Mode_AF_PP、10MHz，把PA10设置为GPIO_Mode_IPU，并注明接收也可使用浮空输入。后段在Keil中开启AFIO时钟、调用GPIO_PinRemapConfig(GPIO_Remap_USART1, ENABLE)，开始把发送脚改至GPIOB的PB6；这里演示的是引脚配置。",
      "points": [
        "区分Tx/Rx、CTS/RTS和同步时钟CK",
        "默认USART1为PA9 Tx、PA10 Rx",
        "Tx复用推挽，Rx浮空或上拉；重映射表给出PB6/PB7"
      ],
      "cid": 26054951882,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 152,
            "observation": "USART外部引脚图列Tx、Rx、CTS、RTS及同步时钟CK",
            "frameSha256": "fcf229c3d3deed9e724ebd98990c0dcd31fc9922b886f434a8b7a165f1c4154d"
          },
          {
            "seconds": 760,
            "observation": "引脚映射表列出USART1 PA9/PA10与PB6/PB7两种映射",
            "frameSha256": "f991c8f91d9bb835c2c209b8e31d68f71991b7598c24d93e9637f7729d27f061"
          },
          {
            "seconds": 1064,
            "observation": "代码页将PA9配复用推挽10MHz，PA10配输入上拉",
            "frameSha256": "b5904504fb037189d47ee8fbb92cc25d78d9e7c7b82b27df5831d7b8321a5523"
          },
          {
            "seconds": 1368,
            "observation": "Keil中开始添加AFIO时钟与USART1重映射配置",
            "frameSha256": "2855e7592fe6e3e4ec6e1295220a47e720d50921b50d111783d616316c7712c5"
          },
          {
            "seconds": 1491,
            "observation": "重映射代码可见GPIOB的Pin6和AF_PP配置",
            "frameSha256": "1932827a675a90fd633854d5f4511e947774ee4eee738b32f73fd9e559cd3541"
          }
        ]
      }
    },
    {
      "page": 13,
      "phase": "uart",
      "title": "3.4 [串口] 发送数据",
      "duration": 1939,
      "summary": "使能USART并封装多字节发送，结合串口调试助手检查输出。",
      "notes": "开头在USART框图上移动多个字节，说明发送数据寄存器与移位寄存器之间的衔接。随后介绍USART_Cmd，分别展示ENABLE使能与DISABLE禁止USART1的写法。\n\n单字节发送接口使用USART_SendData，将数据写入发送数据寄存器。多字节函数My_USART_SendBytes接收串口、数组和Size参数；循环等待TXE后发送当前字节，循环结束再等待TC。末段打开串口调试助手，右侧同时展示开发板实物，接收窗口可见01、02、03、04、05等十六进制字节，供检查程序的发送结果。",
      "points": [
        "USART_Cmd是模块使能总开关",
        "USART_SendData写发送数据寄存器",
        "逐字节等待TXE，末尾等待TC；调试助手查看发送字节"
      ],
      "cid": 26054951912,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 193,
            "observation": "USART框图上用多个绿色字节条演示寄存器间发送流程",
            "frameSha256": "b6a108dc74cfefde7185595d8084494ab1055151bca465f49416a89c43f30445"
          },
          {
            "seconds": 581,
            "observation": "USART_Cmd函数页展示USART1 ENABLE和DISABLE两种调用",
            "frameSha256": "76190cb961c07c01474f60736d844d07ac875d7b713a338d3d2acdf3f218f472"
          },
          {
            "seconds": 969,
            "observation": "USART_SendData接口说明把数据写入发送数据寄存器",
            "frameSha256": "f8283053ade66a589b1a99dec8088e4235d23a595137413b574ac4c2c4bd0ce1"
          },
          {
            "seconds": 1357,
            "observation": "My_USART_SendBytes循环等待TXE、调用SendData，最后等待TC",
            "frameSha256": "12d36a25bb54eb564b4ca2d9aceee28a3a5043ab5821074c2a94e81a85ebc46c"
          },
          {
            "seconds": 1909,
            "observation": "串口助手接收框显示FF 01 02 03 04 05，并展示接线后的开发板",
            "frameSha256": "f01bfc88fc1e6ab9dafb7d9d4dcaa181d22dee14606d52a4439903e6b29200d7"
          }
        ]
      }
    },
    {
      "page": 14,
      "phase": "uart",
      "title": "3.5 [串口] 格式化打印字符串",
      "duration": 1939,
      "summary": "整理串口工程、重定向fputc，并把GetTick格式化为时分秒毫秒。",
      "notes": "课程提纲先列出给工程重命名、整理代码和添加注释，再进入格式化字符串原理。示例用printf生成包含姓名的字符串，并说明字符经fputc送出；画面将原控制台输出与重写后串口输出并列。\n\n时间字符串示例以GetTick取得当前计时值，先对1000取余得到毫秒，再逐次除以1000、对60取余，得到秒、分和小时。printf用宽度与前导零把它们排成08:10:30.125一类格式。后段在Keil的while循环实现这一拆分和打印。",
      "points": [
        "工程重命名、代码整理与注释",
        "printf生成字符串，经重写的fputc从串口输出",
        "GetTick经取余和整除拆分为时、分、秒、毫秒"
      ],
      "cid": 26054951959,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 193,
            "observation": "提纲列工程重命名、整理代码、添加注释、格式化字符串、重写fputc、格式化时间",
            "frameSha256": "7a6b0fcc401ae5d35ab1909ab6d9a27f14e097d0a14fba4aa95ae2eb4622bd57"
          },
          {
            "seconds": 581,
            "observation": "printf姓名字符串例子与fputc重定向原理并列",
            "frameSha256": "5d2e4fdf27b121f7c285e0f1dd92fdbd9e5c873e7f13a872fbcedc42dbdfda02"
          },
          {
            "seconds": 969,
            "observation": "GetTick计时值按取余/整除拆为时分秒毫秒，printf带前导零",
            "frameSha256": "7043bfee615f0f7b39ea82cae48e511108b0b2af667b514d00edda833b1d867c"
          },
          {
            "seconds": 1357,
            "observation": "Keil中编写GetTick拆分和printf格式化时间代码",
            "frameSha256": "e7844636a14c620bb90a926b61acc8d29da3af4bbef3205fd4a4c729806eba61"
          }
        ]
      }
    },
    {
      "page": 15,
      "phase": "uart",
      "title": "3.6 [串口] 接收数据",
      "duration": 1300,
      "summary": "轮询RXNE读取串口字节，以字符0/1控制PC13并认识接收错误标志。",
      "notes": "USART框图先展示接收字节进入移位寄存器和接收数据寄存器的过程。接收步骤是等待RXNE不再为RESET，用USART_ReceiveData读取一个字节，再处理收到的数据。\n\nKeil示例在主循环等待USART1接收，比较字符'0'与'1'：'0'分支把PC13写Bit_SET，'1'分支写Bit_RESET。需注意该帧代码旁的“亮灯/灭灯”注释与前面PC13低电平点亮的电路说明相反，不能照注释判断极性。末段用波形解释NE噪声错，用寄存器图解释ORE过载导致的数据丢失。",
      "points": [
        "RXNE置位后调用USART_ReceiveData",
        "ASCII字符0/1进入不同GPIO输出分支",
        "末段解释NE噪声错与ORE过载错"
      ],
      "cid": 26054952041,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 130,
            "observation": "USART框图展示外部字节沿Rx进入接收寄存器",
            "frameSha256": "799cd305b2eced5ae356abb6cf6c6fc1eb5c6a3c8b71327f27fcc9f115b02a4d"
          },
          {
            "seconds": 390,
            "observation": "轮询RXNE、USART_ReceiveData、处理数据的三步代码",
            "frameSha256": "a502e3b489e8cd5cac1ed5de3196d43ed79177c8ff7f0f40824f0af2a260707f"
          },
          {
            "seconds": 909,
            "observation": "Keil代码以字符'0'分支写PC13 Bit_SET、字符'1'分支写Bit_RESET，旁边亮灭注释存在矛盾",
            "frameSha256": "66136f76b3ff1cb2a7db498cbcad05654cf3f4889b40796c709868a9c79b274d"
          },
          {
            "seconds": 1170,
            "observation": "NE Noise Error页用波形说明接收噪声",
            "frameSha256": "c161de6eee4e05f0e797cbd40ac9b6e49e52e207b4435fc3ff6496324872e422"
          },
          {
            "seconds": 1270,
            "observation": "ORE Overrun Error页说明过载导致数据丢失",
            "frameSha256": "bb9fd0d4474e6f4a0eab9ec25ce1779e65648bf8510e80fc6fcb64ea48638df4"
          }
        ]
      }
    },
    {
      "page": 16,
      "phase": "uart",
      "title": "3.7 [串口] 封装常用功能",
      "duration": 1386,
      "summary": "把串口常用收发整理为usart.h/usart.c接口，并配合串口助手测试。",
      "notes": "本节把之前串口代码整理到独立接口。发送接口页依次列出My_USART_SendByte、SendBytes、SendChar、SendString和Printf，分别处理一个字节、多个字节、字符、字符串和格式化字符串。\n\nKeil中同时打开usart.h、usart.c与main.c，调用封装后的发送函数。头文件还列出ReceiveByte、ReceiveBytes、ReceiveLine，定义CR、LF、CRLF行分隔符，后两个接收声明带Timeout参数。末段打开串口助手并展示开发板实物，输入框可见测试字符串；本节重点是接口封装与调用。",
      "points": [
        "发送字节、数组、字符、字符串和格式化字符串",
        "接收字节、多字节和一行字符串",
        "头文件定义CR/LF/CRLF行分隔符，部分接收接口包含Timeout"
      ],
      "cid": 26054952078,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 415,
            "observation": "发送接口页明确列SendByte、SendBytes、SendChar、SendString、Printf",
            "frameSha256": "03c6b846adfbc1c18e89987c1960c52296d81d8861b40cf774f688c2d06b0c14"
          },
          {
            "seconds": 693,
            "observation": "Keil中打开usart.h/usart.c/main.c并调用My_USART_SendByte及SendBytes",
            "frameSha256": "a9624b36bedc239663f3904d5675d5aed67ba709962a6f63e6fb2b6f7d08b938"
          },
          {
            "seconds": 970,
            "observation": "usart.h可见CR/LF/CRLF定义和ReceiveByte/ReceiveBytes/ReceiveLine声明",
            "frameSha256": "b943d42b6fa2dd9d1eeb04e562a16d0a702cd26cff9bad0fe2ecd584e568a9a7"
          },
          {
            "seconds": 1356,
            "observation": "串口助手与开发板实物并排展示，输入框可见测试字符串",
            "frameSha256": "17eae9ae6b4d2ef37762b0ef5846b960e487ef6fbdc99cf20dc0f6fe045530a1"
          }
        ]
      }
    },
    {
      "page": 17,
      "phase": "i2c",
      "title": "4.1 [I2C] 基本电路结构",
      "duration": 1300,
      "summary": "从串口连接限制引出I2C总线，分析SCL/SDA、上拉、开漏和线与关系。",
      "notes": "开头用最小系统板同时连接三个串口设备的图说明串口设备连接方式。随后引出I2C总线：主机通过SCL时钟线和SDA数据线连接多个从机，从机在图中标有各自的7位地址，两条线上都画有上拉电阻。\n\n电路页特别注明所有SCL和SDA引脚设置为开漏输出。后续用颜色标出主机和从机的SCL连接，并画出时钟波形及Y=主&1&1…的逻辑式，说明总线电平由各参与端共同决定。本节围绕电路组织与开漏总线模型。",
      "points": [
        "同一SCL/SDA连接多个具有地址的从机",
        "两条总线各用上拉电阻",
        "各设备开漏输出，主从对总线电平形成线与关系"
      ],
      "cid": 26054952169,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 130,
            "observation": "最小系统板连接USART1/2/3三个串口设备的示意图",
            "frameSha256": "d354cfbe488a54e252c99817fe75127553d52e462453bc229cc3ef92bd45d087"
          },
          {
            "seconds": 390,
            "observation": "I2C主机与多个从机共享SCL/SDA，配上拉，标注7位地址及开漏输出",
            "frameSha256": "2bdd6b5c82f01e828cb10b9ed6211bbd887336c5d4a21e532a24314c9ddf45a6"
          },
          {
            "seconds": 650,
            "observation": "SCL总线高亮，配时钟波形和Y=主&1&1…逻辑式",
            "frameSha256": "0580a8d8d3e1d0c3d52aea7cb07e6fb8de9c3374a1c406b75d5cec3515b6015f"
          }
        ]
      }
    },
    {
      "page": 18,
      "phase": "i2c",
      "title": "4.2 [I2C] 通信协议",
      "duration": 919,
      "summary": "按I2C时序分析起止条件、寻址、ACK，以及两组读写波形练习。",
      "notes": "先把一次通信拆成起始、寻址、数据方向和停止。时序图给出SCL保持高时SDA下降的起始条件，以及SDA上升的停止条件；数据段按时钟逐位传输。\n\n寻址页展示地址位、R/W位与ACK，画面说明主机释放SDA、从机拉低形成应答。后半节手工填写两道波形练习：按视频题目标注，向从机0x78写两个字节0x5A和0x33；从0x20读一个字节，假设读到0x64。提要保留视频的地址记法，学习时应结合完整寻址字节辨认R/W位。",
      "points": [
        "SCL高时SDA下降为起始、上升为停止",
        "寻址段由地址与R/W组成，接收方应答",
        "练习写0x5A/0x33以及读取假设值0x64的波形"
      ],
      "cid": 26054952392,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 91,
            "observation": "流程图依次列起始、地址加读写位、主向从或从向主、停止",
            "frameSha256": "517223778fbdc9df0210b6571249936ca3238a1c8ef34ae7992271952fad256d"
          },
          {
            "seconds": 275,
            "observation": "完整帧图下给出SCL高时SDA下降起始、上升停止的波形",
            "frameSha256": "5aaf8087cda3f987890303804011e8bec031607e507128832d92f7d81839d0a9"
          },
          {
            "seconds": 459,
            "observation": "寻址0x78读例子标R/W和ACK，并画出主机释放SDA、从机拉低",
            "frameSha256": "5a323a0486e0be40e4023e54b590f441e00090b1264092c3b17aaf62eca2d444"
          },
          {
            "seconds": 643,
            "observation": "练习题为向0x78写0x5A/0x33，向0x20读一字节假设0x64",
            "frameSha256": "6870ff9620acc1f163391efc3d595944f15f600fdcbe5b3666ab8250e15ff5b8"
          },
          {
            "seconds": 889,
            "observation": "读取练习的波形写出0x64对应数据位并标出末尾应答",
            "frameSha256": "0c35d8a032aaaf33c6995ee838a73b75bbaa781dfd92e62979bc8e139c77b853"
          }
        ]
      }
    },
    {
      "page": 19,
      "phase": "i2c",
      "title": "4.3 [I2C] I2C 模块的使用方法",
      "duration": 1545,
      "summary": "硬件 I2C 初始化：从引脚重映射、外部上拉接线到 I2C_Init 参数和模块使能。",
      "notes": "画面中的实验工程为 I2CTest。07:43 在 My_I2C_Init 中编写 IO 初始化并打开 AFIO 时钟，12:52 用面包板示意图说明 OLED 与单片机连接，SCL、SDA 旁均标出 4.7k 上拉。18:01 展示 I2C_InitTypeDef 的时钟速度、模式、占空比、地址等成员。23:10 的代码先使能和复位 I2C1，再设置 400000 的时钟速度、标准 I2C 模式及 I2C_DutyCycle_2，最后调用 I2C_Init 和 I2C_Cmd。本节把接线、GPIO 设置和 I2C 模块初始化连成同一实验步骤。",
      "points": [
        "GPIO 与 AFIO 时钟、I2C1 引脚重映射。",
        "SCL/SDA 上拉电阻与 OLED 接线。",
        "I2C_InitTypeDef 参数、外设复位和 I2C_Cmd 使能。"
      ],
      "cid": 26054952246,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 463,
            "observation": "My_I2C_Init 中配置 AFIO 时钟与 I2C1 重映射。",
            "frameSha256": "77d0a983b730b4c9ef24aa86dcb7ae28b8861d855902018976ca7146c7a6e4e1"
          },
          {
            "seconds": 772,
            "observation": "OLED 接线与 SCL/SDA 各 4.7k 上拉示意图。",
            "frameSha256": "da23a5728cbe35204196ca24db360851ea5abea3a86f4acc2bb0b93242cfcc20"
          },
          {
            "seconds": 1081,
            "observation": "I2C_InitTypeDef 成员解释。",
            "frameSha256": "e76b293bf87632d8775cfa6974e003756867d16d1a1ab53b8bc07b3be00ae58d"
          },
          {
            "seconds": 1390,
            "observation": "I2C1 时钟、复位、400000 时钟参数与模块使能代码。",
            "frameSha256": "ea011bd46558f71d232e8f67363450a90642a9f99d2f7f2de0f22f5e8cfb0481"
          }
        ]
      }
    },
    {
      "page": 20,
      "phase": "i2c",
      "title": "4.4 [I2C] 写数据",
      "duration": 1853,
      "summary": "硬件 I2C 发送：结合内部框图实现等待空闲、起始、地址、数据和停止的发送流程。",
      "notes": "03:05 展示 I2C 内部结构，标出发送、接收、时钟以及 SCL/SDA 的关系。09:15 开始在 Keil 中声明 My_I2C_SendBytes，接口包含 I2C 外设、目标地址、数据指针和长度。21:37 的课件明确列出等待总线空闲、发送起始位、发送地址、发送数据和发送停止位；27:47 把停止位与 I2C_GenerateSTOP 调用对应起来。末尾画面回到面包板上的 OLED，屏幕呈亮色矩形。可结合发送顺序，逐一对照函数中的状态等待与总线操作。",
      "points": [
        "I2C 内部发送、接收、时钟与控制逻辑框图。",
        "My_I2C_SendBytes 的接口与编写过程。",
        "等待总线空闲、START、地址、数据、STOP 的顺序。"
      ],
      "cid": 26054952533,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 185,
            "observation": "I2C 内部结构框图，标注发送、接收和时钟部分。",
            "frameSha256": "4c29894c66c3a63a1b5287c58439201efed0cd0f75a8d79ec4bf48ccebb5854d"
          },
          {
            "seconds": 555,
            "observation": "Keil 中编写 My_I2C_SendBytes 函数接口。",
            "frameSha256": "040b1290cd35719c508861d279bc3ca877e7866cb3c72849e62279aa31e92281"
          },
          {
            "seconds": 1297,
            "observation": "课件列出等待空闲至发送停止位的完整发送顺序。",
            "frameSha256": "32d2b2b1af2a81d466cd4f7299dd5714f2c614468cd3bec7c6b224538613f719"
          },
          {
            "seconds": 1667,
            "observation": "I2C_GenerateSTOP 与总线停止位对应。",
            "frameSha256": "3288ed7d2d7bf348628a216d4bded7f98dda074c30d311ed24c24ae05cf346b3"
          }
        ]
      }
    },
    {
      "page": 21,
      "phase": "i2c",
      "title": "4.5 [I2C] 读数据",
      "duration": 2165,
      "summary": "硬件 I2C 接收：编写接收接口，并处理地址标志、ACK、STOP 与接收数据的顺序。",
      "notes": "03:36 的工程同时声明发送和接收接口，主程序先初始化 I2C 并发送 OLED 命令。10:49 转入 My_I2C_ReceiveBytes 的起始位和状态等待代码。18:02 的课件单独展开 Size 等于 1 的分支：依次读取 SR1、SR2 清 ADDR，关闭 ACK，产生停止位，等待 RXNE，再读入 pBuffer[0]。25:15 继续在 Keil 中编写接收结束阶段的寄存器读取、ACK 和 STOP 操作。35:35 回到 OLED 实物显示画面。本节的核心是硬件 I2C 接收时序和结束阶段的处理顺序。",
      "points": [
        "My_I2C_ReceiveBytes 接口与起始、地址流程。",
        "单字节接收时清 ADDR、关闭 ACK、发 STOP、等待 RXNE。",
        "在 Keil 中实现接收结束处理，并用 OLED 工程验证。"
      ],
      "cid": 26054888134,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 216,
            "observation": "发送与 My_I2C_ReceiveBytes 接收接口并列声明。",
            "frameSha256": "e733d073a43ad723480b5873088d8ca269e3553c065457d69c2544331519f0fb"
          },
          {
            "seconds": 649,
            "observation": "接收函数中产生起始位并等待状态标志。",
            "frameSha256": "995332e5727ae4b918245b51c24c5551b5b0659ad3a95bf42f2f55626c347b5e"
          },
          {
            "seconds": 1082,
            "observation": "单字节接收清 ADDR、ACK=0、STOP、RXNE 和读取数据流程。",
            "frameSha256": "d1307ceeb51648ec90e5fa8e3649c51e07ce002c1be94bc1c925d77cba549a5d"
          },
          {
            "seconds": 1515,
            "observation": "Keil 中编写接收结束阶段的 ACK、STOP 与读取代码。",
            "frameSha256": "61f5d71206e5d8f85937b291948786ae32a1508ad6bcbabb06efc79995483d8e"
          }
        ]
      }
    },
    {
      "page": 22,
      "phase": "i2c",
      "title": "4.6 [I2C] 软 I2C",
      "duration": 2721,
      "summary": "软件 I2C：用 GPIO 和微秒延时实现起止、字节收发及 ACK/NACK，再组成总线接口。",
      "notes": "13:36 的课件并排画出起始位和停止位，下面直接使用 sda_write、scl_write 与延时组成操作。22:40 在 Keil 中编写 SendByte，循环控制 SCL 并发送位；31:44 可见读取 ACK/NACK 的代码以及 ReceiveByte 的编写入口。40:48 把字节操作组合成 My_SI2C_ReceiveBytes 等接口，并在错误分支调用 SendStop。44:51 的 GPIO 初始化选择开漏输出，主程序调用软件 I2C 发送命令。这里从 GPIO 电平操作逐层组成起止条件、字节收发和多字节接口。",
      "points": [
        "SCL/SDA 的起始位、停止位与微秒级时序。",
        "SendByte、ReceiveByte 和应答位处理。",
        "开漏 GPIO 初始化以及多字节软件 I2C 收发接口。"
      ],
      "cid": 27827769119,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 816,
            "observation": "起始位与停止位波形及 sda_write/scl_write 延时代码。",
            "frameSha256": "6ec2948735cb34ab9fe8d922b1de679b1e6308cf1021feffc252f3981370ba94"
          },
          {
            "seconds": 1360,
            "observation": "Keil 中编写 SendByte 的逐位发送循环。",
            "frameSha256": "0db1802f92d232d85ccf6120c4caa1a14f2675fc66e31788795c532c742b8410"
          },
          {
            "seconds": 1904,
            "observation": "读取 ACK/NACK 的代码与 ReceiveByte 函数。",
            "frameSha256": "b6a26953ff58607fe3e84098b849c0daab6c8e1092c674efc3f476d17981ed56"
          },
          {
            "seconds": 2448,
            "observation": "My_SI2C_ReceiveBytes 接口和错误时发送停止位。",
            "frameSha256": "4d7d88d3c74c1a107d02bf8637248d4984d28d4247fe4e3ca5b145e29ddebd78"
          },
          {
            "seconds": 2691,
            "observation": "软件 I2C GPIO 开漏输出初始化。",
            "frameSha256": "05e8b208ac73b7092bc5d3b6796ac00beb14aea7e30b5784d022daa548bc589b"
          }
        ]
      }
    },
    {
      "page": 23,
      "phase": "i2c",
      "title": "4.7 [I2C] 封装常用功能",
      "duration": 1050,
      "summary": "I2C 常用功能封装：整理硬件和软件 I2C 文件，并在主程序分别通过各自接口操作 OLED。",
      "notes": "01:45 的工程树已经包含 i2c 和 si2c 相关文件。05:15 在初始化函数中配置 PB6、PB7 为复用开漏，并继续填写硬件 I2C 初始化参数。08:45 主程序通过 My_I2C_SendBytes 发送 OLED 命令；12:15 又调用接收接口取得一个字节，并判断其中一位。15:45 至 17:00 的主程序改用 si2c 结构体，把 SCL/SDA 的端口和引脚作为成员填写，随后调用 My_SI2C_Init、My_SI2C_SendBytes 和 My_SI2C_ReceiveBytes。可以沿主程序中的调用次序检查初始化、发送、接收和结果判断之间的关系。",
      "points": [
        "整理 I2C 与软件 I2C 的源文件、头文件。",
        "硬件 I2C 收发调用与接收结果判断。",
        "用 SI2C 结构体保存 SCL/SDA 端口和引脚，再调用软件接口。"
      ],
      "cid": 26054952730,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 105,
            "observation": "工程树中整理 i2c/si2c 源文件和头文件。",
            "frameSha256": "4fe0d71d5f060110f96eeac235edb0ab9aec7d3c92bebc20200f9afbbf3b09ae"
          },
          {
            "seconds": 315,
            "observation": "PB6/PB7 复用开漏及硬件 I2C 初始化参数。",
            "frameSha256": "c861bebe7f2f32a5b0c1ee026fa7b612eaaf7e23a10cd9d773f6eec2be233b5d"
          },
          {
            "seconds": 735,
            "observation": "主程序调用硬件接收函数并判断收到的字节位。",
            "frameSha256": "5b0e65c1e467f648871d5b745b638214439043d09e84f2e7a612cbbaba550016"
          },
          {
            "seconds": 1020,
            "observation": "使用 si2c 结构体填写引脚并调用软件 I2C 初始化、发送和接收。",
            "frameSha256": "814cf2b83dc9e14d426f04fc1ba0da398f73015ccb1648d1504d50749ed5590d"
          }
        ]
      }
    },
    {
      "page": 24,
      "phase": "i2c",
      "title": "4.8 [I2C] OLED 显示器",
      "duration": 3846,
      "summary": "OLED 显示库使用：连接软件 I2C、认识点阵显示，再演示文本区域、字体和图形绘制。",
      "notes": "06:24 的 OLEDTest 工程使用 SI2C_TypeDef，并在主程序调用软件 I2C 初始化。19:13 的课件一边展示 OLED 上的“你好世界 / Hello world”，另一边用方格点阵说明数字如何由像素构成。44:52 给出 OLED_StartTextRegion、OLED_DrawString 和 OLED_SendBuffer 的连续调用，屏幕上可见多行英文文本。57:41 的代码还列出画线、LineTo、LineToH、设置颜色和 DrawCircle 等调用，结尾继续整理字体、字符串与文本区域示例。可先复现文本显示，再按画面中的接口扩展字体与基本图形。",
      "points": [
        "在 OLED 工程中接入 SI2C 和软件 I2C 初始化。",
        "点阵像素组成字符，显示汉字与英文。",
        "文本区域、字符串、发送缓冲区以及画线/圆等图形接口。"
      ],
      "cid": 26054952902,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 384,
            "observation": "OLEDTest 工程使用 SI2C 结构体与软件 I2C 初始化。",
            "frameSha256": "f4cf233fe1f8e6822f746f3806d7947e57b795417a3a653e6c77a6fdba5c371a"
          },
          {
            "seconds": 1153,
            "observation": "OLED 中英文显示与点阵数字示意图。",
            "frameSha256": "9a52649fc599804e2ecaa9c041cb4baa4179954421c2e7ac6b22babf4a7400bf"
          },
          {
            "seconds": 2692,
            "observation": "文本区域、DrawString、SendBuffer 与对应多行英文显示。",
            "frameSha256": "4d349013d2af8d7d96d8b93596f6ec6d7427a92fabb2b6d65a23ace332a78c2a"
          },
          {
            "seconds": 3461,
            "observation": "画线、LineTo、设置颜色与 DrawCircle 的调用示例。",
            "frameSha256": "bcfafba059dd895b426fe0117dfb4c17f2282c9620c76e6fd91423f19d2f02e9"
          }
        ]
      }
    },
    {
      "page": 25,
      "phase": "spi",
      "title": "5.1 [SPI] 电路结构和通信协议",
      "duration": 853,
      "summary": "SPI 电路与通信参数：主从连线、片选、时钟极性和相位、传输顺序及数据宽度。",
      "notes": "01:25 与 04:15 展示同一主机连接三个从机的电路，MOSI、MISO、SCK 共用，各从机有独立 NSS，文字明确标注 NSS 低电平有效。07:06 的目录列出通信流程、极性相位、四种模式、传输顺序和数据宽度。09:57 用两种空闲电平和第一、第二边沿的标号比较采样相位；12:47 对照 LSB First 与 MSB First 的数据位顺序；13:43 继续对照 8 bit 和 16 bit 波形。这些波形把后续初始化函数中的参数与总线上的实际信号对应起来。",
      "points": [
        "MOSI、MISO、SCK、NSS 信号与多从机连接。",
        "时钟极性、相位及 SPI 四种模式。",
        "MSB/LSB 优先和 8 位、16 位数据宽度的波形比较。"
      ],
      "cid": 26054952913,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 85,
            "observation": "主机连接三个从机，标注 MOSI/MISO/SCK/NSS。",
            "frameSha256": "faf7d49087796e005ae9dc71fe0a66835d04092ad77f8cc06816c22ead7561cd"
          },
          {
            "seconds": 255,
            "observation": "NSS 低电平有效的注释。",
            "frameSha256": "55c8279568d78f52fb1a13640f77d2a9e18acda384315c0e4de632a94287ff59"
          },
          {
            "seconds": 597,
            "observation": "时钟极性及第一/第二边沿采样的相位比较。",
            "frameSha256": "0caf535c79fa22ec79b681f27df259f89247be032199f1a31e1ec3752afbc2dc"
          },
          {
            "seconds": 767,
            "observation": "LSB First 与 MSB First 波形。",
            "frameSha256": "feda728e91fecce06c04dee21acb00b56ee531fc7b6626eafde9da1b24202cdc"
          },
          {
            "seconds": 823,
            "observation": "8 bit 和 16 bit 数据宽度比较。",
            "frameSha256": "e64c5d5bb950a1ba63dc6238e79eb349c79d6622eb68f4c14121fc52b82b8341"
          }
        ]
      }
    },
    {
      "page": 26,
      "phase": "spi",
      "title": "5.2 [番外] 按钮驱动程序编写",
      "duration": 1295,
      "summary": "按键驱动基础：PA0 上拉输入、PC13 板载 LED，轮询检测状态变化并认识机械抖动。",
      "notes": "02:09 的电路页把按键设为 PA0 输入上拉，把 PC13 设为板载 LED 开漏输出，标出写 1 熄灭、写 0 点亮。06:28 在 Keil 中初始化按键输入。10:47 的示例保存 previous 与 current，读取当前 GPIO 后比较两次状态，再区分按钮松开或按下。15:06 将 GPIO_ReadOutputDataBit 与 GPIO_WriteBit 组合，用原输出值决定新输出值。19:25 用按键结构和波形展示接触抖动，结尾出现面包板实物按键操作。学习时可把状态变化判定与最后展示的机械抖动波形对照起来。",
      "points": [
        "PA0 按下为 0、松开为 1；PC13 板载 LED 写 0 点亮。",
        "previous/current 比较以识别按下和松开。",
        "读取输出状态再翻转 LED，观察按键机械抖动。"
      ],
      "cid": 26054953107,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 129,
            "observation": "PA0 上拉按键和 PC13 板载 LED 电路与有效电平。",
            "frameSha256": "78b6a4b03f004fbfb2c20419bd1013a8262066f86d7bc1c0871e2f8b0aaac223"
          },
          {
            "seconds": 388,
            "observation": "按键 GPIO 输入上拉初始化。",
            "frameSha256": "f6521375e2e3980119128661f13df647ca7e2242bd38a0896a326ebae7e8e0af"
          },
          {
            "seconds": 647,
            "observation": "previous/current 状态比较识别按下或松开。",
            "frameSha256": "93ed5979733e5cd7fe10ad5268d203af172bbb84bb3ad6fcba4c0c91ab3332a6"
          },
          {
            "seconds": 906,
            "observation": "读取输出位并翻转 LED 输出。",
            "frameSha256": "54026eb3597bd167629afa8b10249ba6efd5770d7b55064309d3b5839b2214de"
          },
          {
            "seconds": 1165,
            "observation": "按键机械接触与抖动波形。",
            "frameSha256": "8244bceeebbe5b40171ebb4c1640e5e946a5ea7009d13115b065908e92fe0bc6"
          }
        ]
      }
    },
    {
      "page": 27,
      "phase": "spi",
      "title": "5.3 [番外] 按钮代码的封装",
      "duration": 1809,
      "summary": "按钮代码封装：用初始化结构、进程函数和回调组织事件，并通过串口观察计数结果。",
      "notes": "09:02 至 15:04 的画面把串口调试助手与面包板按键并排显示，接收区出现连续数值。21:06 的课件明确把本节拆成搭电路、串口初始化、按钮初始化、进程函数和回调函数。27:08 的代码填写 Button_InitTypeDef，可见 GPIOA、Pin_0、Interval、LongPressTime、LongPressInterval、ActiveLevel 和多个事件回调成员，随后调用 Button_Init；下方 button_clicked_cb 根据 clicks 更新计数。29:39 的串口窗口再次显示输出。这一过程展示了怎样在应用层配置按钮对象并接收点击事件。",
      "points": [
        "课程步骤包含搭电路、串口初始化、按钮初始化、进程函数和回调。",
        "Button_InitTypeDef 配置 GPIO、有效电平、点击/长按时间与回调。",
        "button_clicked_cb 等回调与串口计数演示。"
      ],
      "cid": 26054953051,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 542,
            "observation": "串口调试助手和实物按键并列演示。",
            "frameSha256": "79aa84c527878fc0f428d53811d6798d2da946db3a244448d219fbae707d679c"
          },
          {
            "seconds": 1266,
            "observation": "搭电路、串口、按钮、进程函数、回调函数的课程步骤。",
            "frameSha256": "10cd668b933a025d9fa301281749e5385869fedd8e238cc01d095485f9ce0347"
          },
          {
            "seconds": 1628,
            "observation": "Button_InitTypeDef 字段与 Button_Init、button_clicked_cb。",
            "frameSha256": "793cb51f0518ddd3158758f37ab154eafe7072da02c1130cf058c649d47f1231"
          },
          {
            "seconds": 1779,
            "observation": "串口接收区显示连续计数输出。",
            "frameSha256": "e8cd1d6cf3c2f2630f65597b64c578d4d98eaa8d15978970b97e52fd879c07ae"
          }
        ]
      }
    },
    {
      "page": 28,
      "phase": "spi",
      "title": "5.4 [SPI] IO 引脚初始化",
      "duration": 1266,
      "summary": "SPI 引脚配置准备：认识 W25Q64 模块，查引脚配置表并确定 SPI1 重映射后的 IO 模式。",
      "notes": "02:06 展示 W25Q64 模块近景，可见 VCC、CS、DO、GND、CLK、DI 标识；06:19 用 SPI 内部框图说明发送、接收、时钟和 NSS 所在路径。10:33 引用 SPI 的 GPIO 配置表。18:59 的整理页明确写出 PB3 对应 SCK、PB4 对应 MISO、PB5 对应 MOSI、PA15 作为普通 IO；SCK/MOSI 标为复用推挽，MISO 为上拉输入，PA15 为通用推挽，输出速度写为 2MHz。结尾的目录也只围绕模块、引脚位置、IO 模式和输出速度展开。",
      "points": [
        "W25Q64 模块实物及其引脚标识。",
        "SPI 内部框图和参考手册的 GPIO 配置表。",
        "PB3=SCK、PB4=MISO、PB5=MOSI，PA15 作为普通 IO 片选。"
      ],
      "cid": 26054953171,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 126,
            "observation": "W25Q64 模块实物与引脚标识。",
            "frameSha256": "bd953c092cba8f4c88a366adb9f2d5a0ec22ef2d84e2b73c795f112f590c18ad"
          },
          {
            "seconds": 379,
            "observation": "SPI 内部框图中的发送、接收、时钟与 NSS。",
            "frameSha256": "0adc2a9bf3c7f1ce93dc117133e1199fa5f9612d062308394a87e19c7736c11b"
          },
          {
            "seconds": 633,
            "observation": "参考手册 SPI 引脚 GPIO 配置表。",
            "frameSha256": "24042447259d7853cd423c98c7514237a225e7c704725a4e6dbf7f90670617be"
          },
          {
            "seconds": 1139,
            "observation": "PB3/PB4/PB5 与 PA15 的角色、模式和 2MHz 速度配置。",
            "frameSha256": "5cbb7217572e6c54b866a78f4f5bc0a9823dffdce819b2137f309cd5519c6ee5"
          }
        ]
      }
    },
    {
      "page": 29,
      "phase": "spi",
      "title": "5.5 [SPI] SPI 模块的初始化",
      "duration": 2537,
      "summary": "SPI 模块初始化：通过结构框图和器件时序选择通信方向、数据格式、分频与 NSS 配置。",
      "notes": "04:13 的结构框图标出 SPI 的时钟与分频路径；12:41 逐项列出 SPI_InitTypeDef，包括方向、主从模式、数据宽度、CPOL、CPHA、NSS、预分频和首位顺序。21:08 对照 8 位与 16 位帧。29:35 引用 W25Q64 Write Disable 的 0x04 波形，把 NSS、SCK、MOSI/MISO 与图中引脚相对应，并圈出数据宽度、极性、相位和 MSB/LSB 的选择。38:03 对比从机片选输入与多主机 NSS，结尾再归纳设置波特率和 NSS 配置。参数选择需要同时对照初始化结构体和被连接器件的时序图。",
      "points": [
        "SPI_InitTypeDef 参数与 SPI_Init。",
        "数据宽度、极性、相位、MSB/LSB 顺序。",
        "结合 W25Q64 指令波形选择参数，并认识软硬件 NSS。"
      ],
      "cid": 26054953302,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 253,
            "observation": "SPI 内部时钟与分频路径。",
            "frameSha256": "e97c1f2f19e1cd20e56d98c2db58331e1f0250dc71fb0146486cf95e1ac5cccf"
          },
          {
            "seconds": 761,
            "observation": "SPI_Init 与 SPI_InitTypeDef 各成员。",
            "frameSha256": "4ac4a23ceaa9261fce30e1ce7afbfc589c9985518699d689c80a3db4c104fee5"
          },
          {
            "seconds": 1268,
            "observation": "8 位、16 位数据宽度波形。",
            "frameSha256": "94ad5b5bf9d7a73e8aaaffa7b3f437fa75741812b66c7eb8d32622a399b08dfd"
          },
          {
            "seconds": 1775,
            "observation": "W25Q64 0x04 指令波形与 SPI 数据格式参数选择。",
            "frameSha256": "e7b209083b6c2c97acaa5746a7862a80c4fc7aff6a191e846b019f9f126149ab"
          },
          {
            "seconds": 2283,
            "observation": "片选输入和多主机 NSS 行为示意。",
            "frameSha256": "75067ca455c146364bcfac261fef29a6684175c32ebb39f718767efd29a63093"
          }
        ]
      }
    },
    {
      "page": 30,
      "phase": "spi",
      "title": "5.6 [SPI] 数据收发",
      "duration": 1330,
      "summary": "SPI 数据收发：理解同时发送与接收，再编写按 TXE/RXNE 状态推进的全双工收发函数。",
      "notes": "02:13 的课件明确写出 SPI 收发是双向且同时的，每发送一个比特必然接收一个比特。06:39 将寄存器框图与收发流程并排展示：闭合总开关、写首字节、循环等待 TXE 并写下一字节，再等 RXNE 读取，最后读末字节。15:30 给出 App_SPI_MasterTransmitReceive 的完整投影片，参数含发送指针、接收指针和长度，末尾调用 SPI_Cmd 关闭模块。19:57 和 21:40 在 Keil 中录入相应函数。可沿数据缓冲区和状态标志观察发送与接收如何交错推进。",
      "points": [
        "SPI 每发送一个比特也接收一个比特。",
        "先写首字节，再循环等待 TXE、写下一字节、等待 RXNE 并读取。",
        "读取最后一个字节并关闭 SPI 的 App_SPI_MasterTransmitReceive 示例。"
      ],
      "cid": 26054953382,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 133,
            "observation": "文字与波形说明 SPI 每发一位同时收一位。",
            "frameSha256": "f69f7e4db708d3b0d53fb7f3dd9a7eaed1cc2cffd6f754276149010b5266e974"
          },
          {
            "seconds": 399,
            "observation": "寄存器框图及首字节、TXE/RXNE、最后字节的收发顺序。",
            "frameSha256": "7407169474a78635123961e903272bf33c82c07f90cbfcaecc5590ca9a3e9f79"
          },
          {
            "seconds": 930,
            "observation": "App_SPI_MasterTransmitReceive 完整示例。",
            "frameSha256": "0636a8dbc0a2467de3758f8c268cfb3f30af97d2a98fcbc79f0ecb07fa07546d"
          },
          {
            "seconds": 1197,
            "observation": "Keil 中录入收发循环与等待状态标志。",
            "frameSha256": "cc94cc7fc4342a4fef22ac33d5e90d20e8c17c20f268284a5f5097cf7ca69755"
          }
        ]
      }
    },
    {
      "page": 31,
      "phase": "spi",
      "title": "5.7 [SPI] W25Q64 实验（上）",
      "duration": 2512,
      "summary": "W25Q64 实验上：完成 SPI1 重映射接线，按写使能、擦除、页编程与忙等待实现单字节保存和读取。",
      "notes": "02:00 的接线页给出 SPI1 重映射，PB3 为 SCK、PB4 为 MISO、PB5 为 MOSI，普通 IO PA15 接模块 CS。04:00 至 08:00 在 Keil 中准备 SPI 初始化和收发函数。10:43 的课程结构明确为存储结构、存储数据和读取数据。18:00 展示写使能 0x06 及“写使能→扇区擦除→等待空闲→写使能→页编程→等待空闲”；27:00 通过 0x05 读状态寄存器等待忙位清除。39:00 用 SaveByte(0x12) 和 LoadByte 演示单字节存取。部分投影片的片选示例写成 PB12，与开头 PA15 接线不同，不能拼接照抄成一份代码。",
      "points": [
        "SPI1 重映射到 PB3/PB4/PB5，开头接线图用 PA15 作片选。",
        "写操作前发送 0x06；通过 0x05 读取状态并等待空闲。",
        "封装 App_W25Q64_SaveByte 和 LoadByte，用 0x12 演示单字节保存与读回。"
      ],
      "cid": 26054953378,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 120,
            "observation": "SPI1 重映射表及 PB3/PB4/PB5、PA15 的 W25QXX 接线。",
            "frameSha256": "376046b453cb7b87f0e1fc8cebf7e3bfd20b8e4dcc05e099012c965f6f3bcadd"
          },
          {
            "seconds": 643,
            "observation": "本节列出存储结构、存储数据、读取数据。",
            "frameSha256": "b4390b3afe7b2005b5e28cebed65ba70b51b6efa120272cad27dc852fcfe365f"
          },
          {
            "seconds": 1080,
            "observation": "0x06 写使能及擦除、页编程、等待空闲顺序。",
            "frameSha256": "2b0f953b8fddb83eb1b0b63886344b99c43105b6331121421abfc529d3e01798"
          },
          {
            "seconds": 1620,
            "observation": "0x05 读取状态寄存器并轮询忙状态。",
            "frameSha256": "a828422ba8381586e8b1cd382e95ea9adb030c1cf8fdcd0e0e062efb9f4f06d3"
          },
          {
            "seconds": 2340,
            "observation": "App_W25Q64_SaveByte(0x12) 与 LoadByte 单字节存取示例。",
            "frameSha256": "db533a0bd46d093a689814e1e91284de3f1c2a9a5d50e2a95a6ceeed69a9507c"
          }
        ]
      }
    },
    {
      "page": 32,
      "phase": "spi",
      "title": "5.8 [SPI] W25Q64 实验（下）",
      "duration": 959,
      "summary": "W25Q64 实验下：按键切换 PC13 LED，把当前状态写入 Flash，并在重新启动时读取恢复。",
      "notes": "02:37 的原理图是从 3V3 经 LED、电阻连接到 PC13 的板载灯。04:41 的课件明确列出五步：初始化板载 LED、初始化按钮、使用按钮切换 LED 亮灭、保存当前状态、恢复状态。08:35 标到按键切换环节，11:34 标到保存环节，13:27 标到恢复环节。15:00 的 Keil 代码先初始化 SPI、板载 LED 和按钮，再调用 App_W25Q64_LoadByte，根据 byte 是否为 0 对 PC13 写不同电平，然后进入主循环。本节用 LED 的可见状态串起按键交互、Flash 保存和启动恢复。",
      "points": [
        "初始化板载 LED 和按钮，用按钮切换 LED。",
        "把 LED 当前状态保存到 W25Q64。",
        "主循环前调用 LoadByte，并根据读回值设置 PC13 恢复状态。"
      ],
      "cid": 26054953613,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 157,
            "observation": "PC13 板载 LED 的供电、LED 与串联电阻原理图。",
            "frameSha256": "d78021e598572d8d0d54096b1c986a8d5d0bfef89b7e9886f8c37402c725bfb1"
          },
          {
            "seconds": 281,
            "observation": "初始化 LED、按钮、切换、保存和恢复的五步任务列表。",
            "frameSha256": "64072c39c2cee30ac7deb9084af2af43e5a3e5b21e7720653d759cb1dd2c264b"
          },
          {
            "seconds": 694,
            "observation": "课程标记到保存 LED 当前状态。",
            "frameSha256": "f413a2c313af2295b72cb657426a576884814204fe8542106a346f8fe5934174"
          },
          {
            "seconds": 807,
            "observation": "课程标记到恢复 LED 状态。",
            "frameSha256": "f5745889f8832d1aec917f6afd438ac02e1345016ded0d8529da2ac80ffb7958"
          },
          {
            "seconds": 900,
            "observation": "初始化后先 LoadByte，再按读回值设置 PC13。",
            "frameSha256": "260ca0a34a9e063041729284aefdd8de1c8a7b8b1e9bf9e6904e4c365cec697a"
          }
        ]
      }
    },
    {
      "page": 33,
      "phase": "int",
      "title": "6.1 [中断] 中断的概念",
      "duration": 919,
      "summary": "中断概念：用日常事件解释暂停与返回，再把常规闪灯程序和 USART 接收中断并列说明。",
      "notes": "01:31 用读书拍蚊子、跑步系鞋带、玩游戏开门收快递三组示意图表达任务被事件打断后继续。04:35 将常规程序时间线和中断响应函数对应到 main 的 while 循环与 xxx_IRQHandler。07:39 与 10:43 通过 USART 的收发内部框图和连续字节示意说明串口场景。13:47 的课件把闪灯程序放在上方，把 USART1_IRQHandler 放在下方，中断函数里调用 USART_ReceiveData 读入数据。结尾目录归纳为“中断的基本概念”和“中断编程举例”。",
      "points": [
        "事件打断常规任务、处理后继续原任务的时间线。",
        "main 中常规程序与 xxx_IRQHandler 响应函数。",
        "闪灯主循环与 USART1_IRQHandler 接收数据示例。"
      ],
      "cid": 26054953556,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 91,
            "observation": "日常事件打断任务再返回的三组时间线。",
            "frameSha256": "bcde04551c938ef947865bf9a5005c35ba4bc46fe3c0da8bb33c1f4416510178"
          },
          {
            "seconds": 275,
            "observation": "main 常规程序与 xxx_IRQHandler 的对应关系。",
            "frameSha256": "6c3f2b094560e7e8c63d81fe39534dc641982bb1aaafc69e2b65300b70422577"
          },
          {
            "seconds": 459,
            "observation": "USART 收发内部结构图。",
            "frameSha256": "d030f3e8d3f8787bf50d283e7515ecfb8969e566e96674aa25d7c32a3b1fdd02"
          },
          {
            "seconds": 827,
            "observation": "闪灯主循环与 USART1_IRQHandler 中接收数据示例。",
            "frameSha256": "54f1a5a0d0bdbe9bf7e92d8f5e8d19a2c4f179865a317f72fc7864fd6304822e"
          }
        ]
      }
    },
    {
      "page": 34,
      "phase": "int",
      "title": "6.2 [中断] 中断优先级",
      "duration": 1226,
      "summary": "中断优先级：区分抢占与子优先级，理解四位优先级分组、中断嵌套和排队。",
      "notes": "02:02 以病人就诊顺序和急诊插入作类比。06:07 把 USART、I2C、SPI、EXTI 的请求画入 NVIC，再连接中断时序与向量表。10:13 列出分组 0 至 4 中 bit3 到 bit0 的分配，分别标注抢占优先级与子优先级。14:18 明确写出“中断嵌套的条件：新中断的抢占优先级更高”，并以分组 2 的四组位值画出响应时间线；18:23 继续用同抢占、不同子优先级的例子练习。结尾列出优先级概念、表示方法、嵌套、排队和练习。",
      "points": [
        "片上外设请求经过 NVIC 关联中断向量和响应。",
        "分组 0 到 4 对四位抢占/子优先级的划分。",
        "只有更高抢占优先级能嵌套，子优先级用于排队比较。"
      ],
      "cid": 26163347874,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 122,
            "observation": "就诊排队和急诊插入的优先级类比。",
            "frameSha256": "d8d5e36af7bc250a5885c2e5f44540e5a08f8f9f38e4907b3ace325308478a4c"
          },
          {
            "seconds": 367,
            "observation": "外设中断、NVIC、中断时序与向量表关系。",
            "frameSha256": "cb8118e3cc8018d2685d5aef7ded989fa74ad1e0e4b0e4609ee82d2770445f78"
          },
          {
            "seconds": 613,
            "observation": "四位优先级在分组 0 至 4 的分配。",
            "frameSha256": "249474823a82699072c5c5df941f5a8b9e44f5525f38c712b83dc7eddbedd93e"
          },
          {
            "seconds": 858,
            "observation": "新中断抢占优先级更高才发生嵌套的条件与例子。",
            "frameSha256": "3faf7a6810b2f36eb84406aa85f3f751d5d5a369f97347246d2e163443b192cf"
          },
          {
            "seconds": 1103,
            "observation": "分组 2、相同抢占等级下的时间线练习。",
            "frameSha256": "0be785d42a6732003be0cbb53a68869e23ac21f72d3452a915af1d633de571b1"
          }
        ]
      }
    },
    {
      "page": 35,
      "phase": "int",
      "title": "6.3 [中断] 串口中断编程实验",
      "duration": 2281,
      "summary": "串口接收中断实验：主循环闪烁 PC13，接收字符 0、1、2 后修改闪烁间隔为慢、中、快。",
      "notes": "11:24 的主循环按 blinkInterval 延时并翻转 PC13，同时继续配置 USART1。26:36 展示 NVIC_PriorityGroupConfig 与五种分组；34:12 的代码使用 115200、无校验、1 停止位、8 位数据和接收模式，并使能 USART_IT_RXNE。35:00 开始在 USART1_IRQHandler 中读取数据和修改闪烁间隔；36:00 的课件补充先判断 RXNE，读数据后按字符“0”“1”“2”将 blinkInterval 设为 1000、200、50，旁注慢、中、快。本节通过中断修改主循环使用的共享间隔，将串口输入与 LED 闪烁速度联系起来。",
      "points": [
        "PC13 LED 闪烁与 USART1 引脚、115200 接收初始化。",
        "USART RXNE 中断源和 NVIC 优先级分组配置。",
        "USART1_IRQHandler 读取接收数据，0/1/2 对应 1000/200/50 的 blinkInterval。"
      ],
      "cid": 26162955859,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 684,
            "observation": "主循环以 blinkInterval 延时闪烁 PC13，并准备 USART1 初始化。",
            "frameSha256": "8fed4141e88a6234f71861f5521165872b556869ad42ed07b1d585431f01f466"
          },
          {
            "seconds": 1596,
            "observation": "NVIC_PriorityGroupConfig 与抢占/子优先级位分配。",
            "frameSha256": "5ae39adbedbc63109c3476d2fc535884b88864d3a42e348020ba6468f81fb7e4"
          },
          {
            "seconds": 2052,
            "observation": "USART1 115200 接收初始化、USART_IT_RXNE 使能和 NVIC 配置入口。",
            "frameSha256": "bd394138e36a053ab161bd99cc75bf42387439c78b775a7b5f9efaa38a2e535d"
          },
          {
            "seconds": 2100,
            "observation": "USART1_IRQHandler 中读取数据并修改 blinkInterval。",
            "frameSha256": "9f9f28208876d31c8e82d690be64cc19a369e3c3b0555e2896272568a38cfdfe"
          },
          {
            "seconds": 2160,
            "observation": "RXNE 判断后读取数据，字符 0/1/2 对应间隔 1000/200/50。",
            "frameSha256": "c313404c12cb50e79930c8f763f45731a9fc0ad83c536d57c220bdb0e558784d"
          }
        ]
      }
    },
    {
      "page": 36,
      "phase": "int",
      "title": "7.1 [EXTI] 工作原理",
      "duration": 1030,
      "summary": "EXTI 原理：由 GPIO 经 AFIO 选择外部中断线，认识线路共享、边沿检测与中断请求路径。",
      "notes": "01:43 的目录列出 EXTI 简介、应用、线的概念和线内部结构。05:09 展示面包板按键；08:35 用 GPIOA、GPIOB、GPIOC、GPIOD 的引脚组说明外部线的选择关系。12:01 的图把 AFIO 接入 EXTI0 至 EXTI15，并标出 EXTI0—4、中间的 EXTI9_5 和 EXTI15_10 中断入口。16:40 将 PA0、边沿检测选择、中断请求通路及按键按下/松开的波形放在同一页，两个边沿处均标有中断。本节是 EXTI 映射和触发原理，尚未展开下一节的初始化代码实验。",
      "points": [
        "EXTI 模块、应用与“线”的概念。",
        "同编号 GPIO 通过 AFIO 选择对应 EXTI 线。",
        "EXTI0—4 独立入口，5—9 和 10—15 分组共享入口；按键边沿触发。"
      ],
      "cid": 26163347929,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 103,
            "observation": "EXTI 简介、应用、线概念和内部结构的课程目录。",
            "frameSha256": "75abeb1d777c9050550715e7145522473904e6f30a6f35bc2b6604b9605c04a8"
          },
          {
            "seconds": 515,
            "observation": "GPIO 各端口与 EXTI 线的选择关系。",
            "frameSha256": "17e1b6b27cd1ba91a38e8b8060f9c484a67e253c22defb89e22eefb7625e2360"
          },
          {
            "seconds": 721,
            "observation": "AFIO、EXTI0—15 及独立/分组中断入口。",
            "frameSha256": "1ab4d120fc6e52486cdfcf1be07b45c321282325b3bf19d2e4e681308bc4c1c7"
          },
          {
            "seconds": 1000,
            "observation": "PA0、边沿检测路径、按下与松开波形上的触发标记。",
            "frameSha256": "577a824fdfe5b4d8df47f8c30626b7bdcedf775e8c9a77190ce247a7d001a307"
          }
        ]
      }
    },
    {
      "page": 37,
      "phase": "int",
      "title": "7.2 [EXTI] 按钮实验",
      "duration": 1655,
      "summary": "用两个按钮和 EXTI 线 5、6 控制板载 LED，完成共用中断服务函数。",
      "notes": "本节通过两个按钮分别控制板载 LED 的点亮和熄灭。实物演示之后，课程先介绍 GPIO_EXTILineConfig 的端口源和引脚源参数，并使用 AFIO 把 GPIOA 的引脚 5、6 分配给相应的 EXTI 线。随后结合边沿检测框图解释 EXTI_InitTypeDef 中的线号、模式、触发边沿与使能参数，程序分别配置两条上升沿中断。最后配置 EXTI9_5_IRQn，并在共用的 EXTI9_5_IRQHandler 中读取各线标志、分支操作 PC13。重点是把 GPIO 输入、AFIO 映射、EXTI 线配置和 NVIC 响应连接起来。画面也用共享入口说明，外部引脚与中断服务函数并不总是逐个一一对应。",
      "points": [
        "GPIO_EXTILineConfig 把 GPIOA 的引脚 5、6 接到 EXTI 线",
        "分别配置 EXTI_Line5、EXTI_Line6 的上升沿中断",
        "两条线共用 EXTI9_5_IRQHandler，按标志位分辨按钮"
      ],
      "cid": 26163743004,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 496,
            "observation": "PPT 展示 GPIO_EXTILineConfig，并把 GPIOA 引脚 5、6 分配给 EXTI 线。",
            "frameSha256": "3430ca9559aa16a9c5ce30fdfa1b864056295c34e975f1f796956a7ad0ed53a9"
          },
          {
            "seconds": 827,
            "observation": "PPT 展示 EXTI_InitTypeDef 的线号、模式、触发边沿和线使能字段。",
            "frameSha256": "7bf899fe71469f6537f926137f3683e1eb1495e83cc8e1a45e75791b9a943b8c"
          },
          {
            "seconds": 1158,
            "observation": "Keil 中分别配置 EXTI_Line5、EXTI_Line6，触发条件均为 Rising。",
            "frameSha256": "12d2e2a3cbd7b1ba3922114c81a1024a32dd3b7e3c7300bdaa26441b66af8ede"
          },
          {
            "seconds": 1489,
            "observation": "Keil 中出现 EXTI9_5_IRQn、共用 IRQHandler，以及读取线标志后操作 PC13 的分支。",
            "frameSha256": "0621a3f4df10334c1103285cb487d8b1144fe1610c6c7d8cfb29012abeb8dc11"
          }
        ]
      }
    },
    {
      "page": 38,
      "phase": "clk",
      "title": "8.1 [时钟] 时钟树",
      "duration": 1726,
      "summary": "从串口时钟引出时钟树，讲解时钟源、分频器、PLL、复用器和总线分频。",
      "notes": "本节从外设为什么需要时钟切入，画面先用串口内部结构说明输入时钟与分频后工作信号的联系，再把单片机时钟系统组织成树状结构。课程逐项讲分频器、锁相环和复用器的作用，并列出 HSI、HSE、LSI、LSE 四类时钟源。树干部分比较 SYSCLK 直接来自 HSI、来自 PLL 和直接来自 HSE 的三条路径；树枝部分继续分配为 HCLK、PCLK1 和 PCLK2。末尾给出多组系统时钟与总线频率要求，让学习者在时钟树图上选择分频系数。这里的主线是沿信号路径计算频率，而不是配置 ADC 采集。",
      "points": [
        "分频器做除法、PLL 做乘法、复用器选择时钟路径",
        "区分 HSI、HSE、LSI、LSE 与 SYSCLK 的来源",
        "按 SYSCLK、HCLK、PCLK1、PCLK2 的关系完成分频练习"
      ],
      "cid": 26163742877,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 172,
            "observation": "PPT 为带时钟输入、分频器和 BRR 的串口内部结构图。",
            "frameSha256": "1e60b963be3866357b9f0894690998ea6a1eb65b24bc4edbbda583b3fc072653"
          },
          {
            "seconds": 517,
            "observation": "PPT 明列分频器对频率做除法、PLL 做乘法、复用器做选择。",
            "frameSha256": "72b45203d7888a2976464ac1b21c645ca0a828ed47dad24d788e5eabfeddf2b8"
          },
          {
            "seconds": 863,
            "observation": "目录页列时钟概念、分频/PLL/复用器、树根、树干、树枝，并手写四种时钟源。",
            "frameSha256": "020d9d5094612742fa98cfdac3b320e743251fbb67fe79d6968d03b77b5c2076"
          },
          {
            "seconds": 1208,
            "observation": "PPT 比较 SYSCLK 来自 HSI、PLL、HSE 的三条路径。",
            "frameSha256": "9632c6f1fddc18065ec310ee5f035b2c943ccca193bd61f8bb23dea14f8780e3"
          },
          {
            "seconds": 1553,
            "observation": "PPT 给出 SYSCLK=8 MHz、72 MHz 等多组 HCLK/PCLK 分频练习。",
            "frameSha256": "a049624cb785206ff917db350d668d43a264f34454d21cb3a6753649205182c4"
          }
        ]
      }
    },
    {
      "page": 39,
      "phase": "clk",
      "title": "8.2 [时钟] 时钟树编程",
      "duration": 2354,
      "summary": "用 PC13 闪灯观察时钟频率，编写 RCC 配置并处理 Flash 预取和访问等待。",
      "notes": "本节把时钟树原理落实到标准库程序。课程先画出初始 8 MHz 路径，用 PC13 点灯和循环延时观察程序执行速度，再列出 RCC 的 HSE、HSI、PLL、SYSCLK 和各总线配置接口。Keil 中建立 App_SystemClock_Init，逐步开启 HSE、等待就绪，并继续安排倍频、分频与系统时钟来源。后半部分专门解释内核从 Flash 取指、指令预取缓冲以及访问等待周期，展示 FLASH_PrefetchBufferCmd 和 FLASH_SetLatency。末尾还演示通过时钟树接口控制片上外设的时钟与复位。内容围绕系统时钟编程和闪灯验证展开。",
      "points": [
        "以循环延时闪灯观察时钟配置带来的执行速度变化",
        "使用 RCC 接口配置 HSE、PLL、总线分频和 SYSCLK 来源",
        "讲解 Flash 指令预取、访问延迟及外设时钟和复位接口"
      ],
      "cid": 26164136889,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 235,
            "observation": "PPT 标出 HSI/SYSCLK 等初始 8 MHz 路径，并给出 PC13 循环延时闪灯片段。",
            "frameSha256": "831c9263f3444a7be29c53bfcdbf26b55f6756c3dddb1658198072f7e566abbc"
          },
          {
            "seconds": 1177,
            "observation": "PPT 罗列 RCC_HSEConfig、RCC_PLLConfig、RCC_SYSCLKConfig、RCC_HCLKConfig 等接口。",
            "frameSha256": "b59f68d2de5a1a38e5da16939052f0906278dfe14e634823fe5418de23b93ab4"
          },
          {
            "seconds": 1647,
            "observation": "Keil 中的 App_SystemClock_Init 已开启 HSE，并等待 RCC_FLAG_HSERDY。",
            "frameSha256": "15c3a9ea51d97e8a24f27790b6aede7b63f4d47a6052f91587addf8ba32f7910"
          },
          {
            "seconds": 1905,
            "observation": "PPT 展示指令预取、不同频率的访问等待，以及 FLASH_PrefetchBufferCmd/FLASH_SetLatency。",
            "frameSha256": "f7b905ef7ce21209258bcba0d4122a853e0c1bf7c0746c83772fccddbdc34d0d"
          },
          {
            "seconds": 2324,
            "observation": "Keil 中演示外设时钟接口和 I2C1 复位接口。",
            "frameSha256": "55256e947c4f7c37707ff2754f9e1495bcd0eacb4a73d712c5e83de1b461e02d"
          }
        ]
      }
    },
    {
      "page": 40,
      "phase": "tim",
      "title": "9.1 [定时器] 时基单元",
      "duration": 1702,
      "summary": "拆解定时器时基单元，讲 PSC、CNT、ARR、RCR、计数方向和寄存器预加载。",
      "notes": "本节先在单片机内部框图中定位高级和通用定时器，再把时基单元拆成时钟输入、预分频器 PSC、计数器 CNT、自动重装寄存器 ARR 和重复计数器 RCR。课程用信号流向解释时钟怎样变成计数变化与更新事件，并比较上计数、下计数和中心对齐三种波形。随后回到时钟树，区分定时器与 APB 时钟之间的分频和倍频关系。末尾以运行中突然改变 ARR 为例，画出活动寄存器与影子寄存器的区别，说明启用预加载后参数随更新事件生效，帮助理解定时周期不会简单地等同于直接写入值的瞬间变化。",
      "points": [
        "时基单元由时钟、PSC、CNT、ARR 和 RCR 等部分组成",
        "比较上计数、下计数和中心对齐的计数波形",
        "结合 APB 时钟与影子寄存器理解定时周期和参数更新"
      ],
      "cid": 26164461584,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 170,
            "observation": "单片机结构图中圈出 TIM1 和 TIM2/TIM3/TIM4 的位置。",
            "frameSha256": "5718e9d41ff0064d52e67af50bfbe648fea22f82301b07ff35affce5baed7a04"
          },
          {
            "seconds": 510,
            "observation": "PPT 拆解时钟、PSC、CNT、ARR、RCR 和 update 事件的信号路径。",
            "frameSha256": "3620a090ae684987e0b5742f3c8aa93e94cd347e5e8b4c08303a062f54c78a48"
          },
          {
            "seconds": 851,
            "observation": "PPT 并排展示上计数、下计数和中心对齐波形。",
            "frameSha256": "a8921cbcf13f29e98a67441970858edbe7e753b7f2d4c57a551fa070893886a9"
          },
          {
            "seconds": 1191,
            "observation": "时钟树上标出 APB2 72 MHz、APB1 36 MHz 与定时器倍频关系。",
            "frameSha256": "cf69421c554e74b0da29d72d057e761f4ff5007110835d1970fc45971b5816bc"
          },
          {
            "seconds": 1672,
            "observation": "PPT 展示启用 ARR 预加载后影子寄存器到活动寄存器的更新过程。",
            "frameSha256": "e25249b24aae4675a6c3f140298a83e985c42a4ca0c6d228be7b79428c6422bb"
          }
        ]
      }
    },
    {
      "page": 41,
      "phase": "tim",
      "title": "9.2 [定时器] 自制延迟函数",
      "duration": 1443,
      "summary": "用 TIM3 的 1 ms 更新中断维护 currentTick，并编写延时函数验证闪灯。",
      "notes": "本节目标是用普通定时器实现自己的毫秒延时。开头先画出 72 MHz 输入、PSC=71、ARR=999、RCR=0 对应的 1 ms 更新事件，并用 volatile 全局变量 currentTick 记录累计时间。编程部分使用 TIM3，依次初始化时基单元、使能更新中断和配置 NVIC，再编写 TIM3_IRQHandler，检测并清除更新标志后递增 currentTick。课程随后写出 App_Delay：根据当前时间求结束时刻，在循环中等待计数达到目标。末尾用 PC13 高低电平和多次 500 ms 延时调用展示应用。视频主线是定时器中断构造毫秒时基。同一个计时变量在中断中更新，在主循环的延时函数中读取。",
      "points": [
        "示例参数为 PSC=71、ARR=999、RCR=0，形成 1 ms 更新事件",
        "TIM3_IRQHandler 处理中断标志并自增 currentTick",
        "App_Delay 根据 currentTick 等待，再用于 PC13 闪灯"
      ],
      "cid": 26164658846,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 144,
            "observation": "PPT 明确标出 72 MHz、PSC=71、ARR=999、RCR=0、1 ms 和 currentTick++。",
            "frameSha256": "159b69b73c7a315d1e330ff8c3caef9a9f2551f8e9484d6258cee6e4805815a6"
          },
          {
            "seconds": 721,
            "observation": "Keil 中出现 App_Delay、expireTime=currentTick+ms，并开始初始化 TIM3 时基。",
            "frameSha256": "7c7174ed834e9052e3c58c95a5678387736d8738d420da197c7c4a2a835401ea"
          },
          {
            "seconds": 1010,
            "observation": "Keil 中配置 TIM3 时基、TIM_IT_Update 和 NVIC。",
            "frameSha256": "84bf74f76d3f27e4e33927906e551b0ceaaf2544218c42da3d8df4e97f32ef62"
          },
          {
            "seconds": 1298,
            "observation": "TIM3_IRQHandler 检测并清除 TIM_FLAG_Update，然后 currentTick++。",
            "frameSha256": "8e15c867e14758b9b840d287f8ab5756abaa5125c01fa9c4d04125830694b6fe"
          },
          {
            "seconds": 1413,
            "observation": "主循环使用 App_Delay(500) 配合 PC13 电平切换进行闪灯。",
            "frameSha256": "9374843bdd61997b8b24d2857f966eca349b8d271deeeff18810cf4afcb02d09"
          }
        ]
      }
    },
    {
      "page": 42,
      "phase": "tim",
      "title": "9.3 [定时器] 输出比较",
      "duration": 1277,
      "summary": "解释 CNT/CCR 如何产生 PWM，并讲输出比较的八种模式、互补输出和极性选择。",
      "notes": "本节先在定时器总体框图中指出 CCR、输入捕获和输出比较的位置，再用计数器波形说明输出比较怎样生成方波。示例把 ARR 设为 9、CCR1 设为 3，画出一个周期中的高电平部分，得到 30% 占空比。接着课程用对照表逐一展示八种输出比较模式，包括冻结、相等时有效或无效、翻转、强制有效或无效，以及 PWM1、PWM2。后半部分把正常输出和互补输出分成两条路径，继续解释信号取反、各自的极性选择和主输出开关。重点是读懂输出比较电路怎样把 CNT 与 CCR 的比较结果变成引脚信号。",
      "points": [
        "用 ARR=9、CCR1=3 的图例解释 30% 占空比",
        "对比冻结、相等有效/无效、翻转、强制和 PWM 模式",
        "在输出路径中区分 CHx、CHxN、极性选择与 MOE"
      ],
      "cid": 26714769572,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 127,
            "observation": "定时器总体图标出 CCR、输入捕获和输出比较的关系。",
            "frameSha256": "d2665a89ffe57432c507e990cf442268615295062c91bd8206df973c7c6b3ffe"
          },
          {
            "seconds": 383,
            "observation": "PPT 用 ARR=9、CCR1=3 的计数波形画出 30% PWM。",
            "frameSha256": "905ab4d3076431d7644b9cbb2f63924b9c9731d3361932e29507b45fdf436ea6"
          },
          {
            "seconds": 638,
            "observation": "PPT 用一张波形表对照八种输出比较模式。",
            "frameSha256": "ee6d7950b5dddd0029a2ce6db6a12e22419d14529562b593fc0d86225de162b6"
          },
          {
            "seconds": 1247,
            "observation": "PPT 将 CHx、CHxN、极性选择和 MOE 放在同一输出路径中。",
            "frameSha256": "4050fc5a6d634c45cb9142f5253c61a6db7775a0a0e46c36735474844b0c97de"
          }
        ]
      }
    },
    {
      "page": 43,
      "phase": "tim",
      "title": "9.4 [定时器] 呼吸灯实验",
      "duration": 2150,
      "summary": "用 TIM1 的 PA8/CH1 与 PB13/CH1N 驱动双灯，按正弦规律更新 PWM 占空比。",
      "notes": "本节以面包板上的红蓝两只 LED 演示呼吸灯。课程先把连续变化的亮度目标画成正弦曲线，再用占空比随时间变化的 PWM 表达这个目标。硬件选择 TIM1 通道 1 的正常输出 PA8 和互补输出 PB13，两脚配置为推挽复用输出。时基图给出 72 MHz、PSC=71、ARR=999、RCR=0，对应 1 ms 的 PWM 周期。随后配置 PWM1 和正常、互补输出路径，并用 TIM_CtrlPWMOutputs 打开 MOE。主循环读取 GetTick，计算正弦形式的占空比和 CCR1，再通过 TIM_SetCompare1 写入 TIM1，形成明暗变化。课程依次配置引脚、时基、输出比较参数，再增加动态占空比计算，把双灯硬件和数学表达连在一起。",
      "points": [
        "实际示例为红蓝双 LED，使用 TIM1 正常输出和互补输出",
        "PA8、PB13 配推挽复用输出，时基为 PSC=71、ARR=999、RCR=0",
        "设置 PWM1、开启 MOE，并通过 TIM_SetCompare1 更新 CCR"
      ],
      "cid": 26755662507,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 30,
            "observation": "实物画面可见面包板上的红色、蓝色两只 LED。",
            "frameSha256": "95f270b634e1d69f4b327e22df2d2c43504fc802745139726efe7341acecc7b8"
          },
          {
            "seconds": 215,
            "observation": "PPT 画出正弦曲线和占空比=0.5(sin(2πt)+1)、周期 1 ms 的 PWM。",
            "frameSha256": "8188306c99f71c300cb661565c1deea6d027950a49d957a2a0d87d5b1f20adbe"
          },
          {
            "seconds": 360,
            "observation": "引脚表中 TIM1_CH1 为 PA8、TIM1_CH1N 为 PB13。",
            "frameSha256": "ce6bba1598513b11a6c288b0924e8b7c0656d284186901194d606e16efb7c127"
          },
          {
            "seconds": 645,
            "observation": "PPT 手写 PA8、PB13，并标出正常与互补输出均使用 AF_PP。",
            "frameSha256": "1a1734a86edbc653d8e6b4a179f3c8b0246c3c61f580ca840bd3013a318d2618"
          },
          {
            "seconds": 1075,
            "observation": "PPT 标注 TIM1、APB2、PSC=71、ARR=999、RCR=0。",
            "frameSha256": "3a336ff24c3bd326fb385242def56a54857ee55e1955cd6996729a0a42f21224"
          },
          {
            "seconds": 1505,
            "observation": "PPT 展示 PWM1、正常/互补输出开关和 TIM_CtrlPWMOutputs 对应的 MOE。",
            "frameSha256": "073296d2cc841265b4d2bbea2a270a10c8faeb4f704cd8439628fb450a63fbd6"
          },
          {
            "seconds": 2120,
            "observation": "主循环用 GetTick、sin、CCR1 和 TIM_SetCompare1(TIM1,ccr1) 更新占空比。",
            "frameSha256": "4ad9dee2efcd40eead124b9bf68324dea4f88de19ba7e74826cf7db07165e03c"
          }
        ]
      }
    },
    {
      "page": 44,
      "phase": "tim",
      "title": "9.5 [定时器] 输入捕获",
      "duration": 1006,
      "summary": "解释输入捕获记录边沿时刻的原理，拆解滤波、边沿检测、信号选择和分频。",
      "notes": "本节从定时器输入通道进入输入捕获。课程先用一个外部脉冲和 CNT 递增波形，演示上升沿与下降沿出现时分别把计数值保存到 CCR，再通过两次记录的差值表达脉宽。随后把通道 1、通道 2 的内部链路展开，按输入滤波、边沿检测、信号选择和分频四部分讲解。框图中既有本通道的直接输入，也有来自相邻通道的间接输入，以及 TRC 选择。课末回到目录，梳理基本原理与内部结构之间的联系。本节主要帮助读懂捕获电路，为后续超声波测距和 PWM 参数测量建立基础。",
      "points": [
        "在边沿到来时把 CNT 的数值捕获到 CCR",
        "用两个捕获时刻的差值表示脉宽",
        "输入链路包含滤波、边沿检测、直接/间接/TRC 选择与分频"
      ],
      "cid": 26758545421,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 100,
            "observation": "定时器总体图从外部脉冲指向输入捕获和 CCR。",
            "frameSha256": "6cc96d5f0677605911309c253f38807995b666962a5d69a553f5fa47d224812d"
          },
          {
            "seconds": 301,
            "observation": "PPT 用 CNT 递增波形、CCR1/CCR2 标记两个边沿时刻来表达脉宽。",
            "frameSha256": "8f88b80d547f8ef399b08e99958f0ba2e64f3b386ef969c0823f52b824b7c35d"
          },
          {
            "seconds": 503,
            "observation": "PPT 展开通道 1、2 的输入捕获内部链路。",
            "frameSha256": "f6e7b7f3ea7df2f168a1c63ef169e56c6e21be177211e0703f2ccb20596cf1f9"
          },
          {
            "seconds": 704,
            "observation": "PPT 分框标出输入滤波、边沿检测、信号选择和分频。",
            "frameSha256": "11bfc03929cf380e981812a3039c44050aa721495e5172892ef19883cd371307"
          },
          {
            "seconds": 905,
            "observation": "目录页列出输入捕获原理、内部结构及四个组成部分。",
            "frameSha256": "7aead86196ceae74ffd3656e4d82120a17e10ea5e5baf1611fcbf726d10f0205"
          }
        ]
      }
    },
    {
      "page": 45,
      "phase": "tim",
      "title": "9.6 [定时器] 超声波测距实验",
      "duration": 2976,
      "summary": "用 PA0 触发 HC-SR04，通过 PA8/TIM1_CH1 捕获 Echo 脉宽并换算距离。",
      "notes": "本节把输入捕获用于 HC-SR04 超声波测距。课程先画出 Trig 启动脉冲、发射声波和 Echo 返回脉宽之间的关系，再给出距离由往返时间换算的公式。接线图使用 PA0 发送 Trig，PA8 即 TIM1_CH1 接收 Echo，同时接上 USART1 与 USB 转串口模块。程序配置 TIM1 的 PSC=71、ARR=65535，并把 PA8 作为输入；捕获链路选择通道 1 直接上升沿、通道 2 间接下降沿。测量循环先清零 CNT、清除 CC1/CC2 标志，再开启定时器并发送启动脉冲。课程围绕脉宽的获取、距离计算和串口观察组织实验。双通道捕获在这里共用同一个外部输入引脚，分别记录两种边沿。",
      "points": [
        "接线图明确 PA0→Trig、PA8/TIM1_CH1←Echo",
        "TIM1 用 PSC=71、ARR=65535；CH1 直接上升沿、CH2 间接下降沿",
        "程序清 CNT 和 CC 标志、启动测量，再按捕获时间处理距离"
      ],
      "cid": 26758285375,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 297,
            "observation": "PPT 展示 HC-SR04 的 Trig、Echo 波形与距离=脉宽×340 m/s÷2。",
            "frameSha256": "fa92ec3d2bcf8a968dd9a3c631c3a8c11252192ca532ea94914d2d89d3fc1dfd"
          },
          {
            "seconds": 450,
            "observation": "接线图明确标出 Echo→PA8(TIM1_CH1)、Trig→PA0 及 USART1 接线。",
            "frameSha256": "e76f9456e6852d9af716b017aa66ba4db39bcf92652b5fdb54c5e482b23c4583"
          },
          {
            "seconds": 2083,
            "observation": "Keil 中 TIM1 时基参数为 Period=65535、Prescaler=71、RCR=0，并准备初始化 PA8 IPD。",
            "frameSha256": "f3ee22870b839a70e4f561b78dbe89d35d86225a2b921e51d2661bd7900fa459"
          },
          {
            "seconds": 2260,
            "observation": "PPT 绿色路径明确 CH1 直接上升沿与 CH2 间接下降沿捕获，分频为 1。",
            "frameSha256": "0e1528352faa644e241884d0ab0237fcce84f7792e759d4129031d90fe531975"
          },
          {
            "seconds": 2678,
            "observation": "主循环先清 CNT 和 CC1/CC2 标志，再开启 TIM1 并向 PA0 发送 Trig 脉冲。",
            "frameSha256": "1be24c04ee37daac957dabc0fbe693abf20866cdbf62e7e6cc43d5e7811f6b92"
          }
        ]
      }
    },
    {
      "page": 46,
      "phase": "tim",
      "title": "9.7 [定时器] 从模式控制器",
      "duration": 1291,
      "summary": "讲解 TRGI/TRGO、八种从模式与主模式，并用同时启停和定时器级联举例。",
      "notes": "本节在定时器框图上把从模式控制器、TRGI 输入、TRGO 输出和时基单元连接起来，说明定时器既能接收控制，也能向其他模块发出控制。课程随后列出八种从模式，解释编码器、复位、门、触发和外部时钟等模式对应的行为，再介绍主模式。应用图先让 TIM1 的使能信号通过 TRGO 控制 TIM2、TIM3 的门模式，展示多个定时器同时启停。另一个例子把定时器串成秒针、分针和时针，用前一级的 Update 输出作为后一级的外部计数来源。视频中也明确把级联图作为解释控制器功能的例子。",
      "points": [
        "从模式控制器通过 TRGI 控制时基，也通过 TRGO 输出控制信号",
        "用复位、门、触发、外部时钟及编码器等从模式解释输入动作",
        "TIM1 Enable→TIM2/TIM3 Gated；另以 Update→External Clock 展示级联"
      ],
      "cid": 26757173218,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 129,
            "observation": "总体图中圈出 TRGI、TRGO 以及从模式控制器与时基单元的连接。",
            "frameSha256": "db6c60711838e89e078e0ba6a8ca08d6593b5197194c042e0211bfebcf623295"
          },
          {
            "seconds": 645,
            "observation": "PPT 列八种从模式，包含复位、门、触发与外部时钟模式。",
            "frameSha256": "db883b99509401f5a7d086bc65a1b56796964bf0aaa0eb750cdc4d18eb01c96e"
          },
          {
            "seconds": 903,
            "observation": "PPT 展示 TIM1 Enable 模式的 TRGO 同时连接 TIM2、TIM3 的 Gated 模式。",
            "frameSha256": "22078d026a70d343bb58b8213046920629a9853ad81ff8c218a55590950fe42d"
          },
          {
            "seconds": 1161,
            "observation": "PPT 以 TIM1/TIM2/TIM3 模拟秒针、分针、时针，标注 Update 与外部时钟模式级联。",
            "frameSha256": "f0f09df63f1b4f4d5ed60076cedaee4df5e3b2e526b8828f8b4e2379ae68e89c"
          }
        ]
      }
    },
    {
      "page": 47,
      "phase": "tim",
      "title": "9.8 [定时器] PWM 参数测量原理",
      "duration": 1649,
      "summary": "从参考手册识别输入节点与 TRGI 来源，用复位模式和双边沿捕获测 PWM。",
      "notes": "本节首先回到参考手册中的高级定时器框图，帮助学习者把简化示意图和正式信号名称对应起来。课程解释 TI 表示定时器输入、F 表示滤波后、P 表示极性选择后的信号，并继续查看 TRGI 的可选来源和定时器内部触发连接表。PWM 测量部分把同一个输入分成两条捕获路径：通道 1 捕获上升沿，通道 2 捕获下降沿，同时把 TI1FP1 送给从模式控制器的复位模式。时序图显示每个上升沿清零 CNT；下降沿记录高电平时间，下一个上升沿记录完整周期，由此读懂 CCR2 与 CCR1 的不同含义。",
      "points": [
        "识别 TI、F、P 等输入捕获节点名称",
        "结合内部触发连接表选择 TRGI 来源",
        "TI1FP1 上升沿触发复位，CCR1 对应周期、CCR2 对应高电平宽度"
      ],
      "cid": 26757562526,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 164,
            "observation": "目录明确包含参考手册结构图、输入捕获节点名称、TRGI 来源和 PWM 参数测量原理。",
            "frameSha256": "9de059e91a1f3f5ba4010614e1eab61ec6173b8986854343a168cee9a0d526b1"
          },
          {
            "seconds": 494,
            "observation": "PPT 展示参考手册中的高级定时器完整结构框图。",
            "frameSha256": "144c357752cd676973e78c2ee9dd5d72c4c5da4beba36efb596ef9476f707d67"
          },
          {
            "seconds": 824,
            "observation": "PPT 解释 TI=Timer Input、F=Filtered、P=Polarized，并在通道链路中标节点。",
            "frameSha256": "0c7871c8e66fa9d75217707dade078b031b67898b0e2b375b7eb122e8d1314c1"
          },
          {
            "seconds": 1154,
            "observation": "PPT 展示 TRGI 输入选择和 TIMx 内部触发连接表。",
            "frameSha256": "5e2a9ca0a6e13b2713b89bdd8fe8bb8396fb16acbf15618d8d9b7337e9328591"
          },
          {
            "seconds": 1484,
            "observation": "PPT 连接 TI1FP1 到复位模式，并将通道 1 上升沿、通道 2 下降沿分成捕获路径。",
            "frameSha256": "280b10f15bf3f46bd10638a6fddda50568cad1fc0eff93e711af0df000ba56fc"
          },
          {
            "seconds": 1619,
            "observation": "时序图标明上升沿清 CNT、CCR1 记录周期、CCR2 记录高电平宽度。",
            "frameSha256": "ac2428781bbee2be1f8c7df1d68bb0a1bc9ff7373eacd6af18b37e47f970cce0"
          }
        ]
      }
    },
    {
      "page": 48,
      "phase": "tim",
      "title": "9.9 [定时器] PWM 参数测量实验",
      "duration": 2865,
      "summary": "编写 PWM 参数测量工程：TIM3 产生测试信号，TIM1 输入捕获并配合 USART1。",
      "notes": "本节把上一节 PWM 参数测量原理写成工程。课程先建立 USART1 初始化和输出通道，再使用 TIM3 产生测试 PWM；主循环读取时间、计算正弦变化的占空比，并更新 TIM3 的比较值。测量侧另行配置 TIM1 的时基单元及 PA8 输入捕获，引入从模式控制器，使每个输入上升沿同时参与捕获与计数器复位。后面的时序图再次区分上升沿记录的周期和下降沿记录的高电平宽度，并标出 Trigger、CC1、CC2 事件。末尾按实验原理、产生信号、初始化各部分和测量参数的顺序回顾，重点是把输出测试源与输入测量端连成一条实验链。",
      "points": [
        "工程分为产生 PWM、时基、输入捕获、从模式控制器和参数测量",
        "主循环对 TIM3 的 CCR1 按正弦规律更新，形成测试 PWM",
        "TIM1 的 PA8 用于输入捕获，测量路径使用前节的触发复位时序"
      ],
      "cid": 26757957690,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 859,
            "observation": "Keil 中初始化 USART1 的 PA9 为 AF_PP。",
            "frameSha256": "ed6023061825ad7ea6c34ccf298485f490f69ba0f6ae6bf375b23117ffc44f92"
          },
          {
            "seconds": 1432,
            "observation": "主循环调用 App_TIM3_Init，计算正弦 duty，并准备使用 TIM_SetCompare1 更新测试信号。",
            "frameSha256": "cfccf64a07a214f85fd0749bc3a727b8a217f97572fa8ed7ea5b91771ca201b6"
          },
          {
            "seconds": 2005,
            "observation": "Keil 中初始化 TIM1 时基和输入捕获，引脚为 GPIOA Pin8，注释为 IPD。",
            "frameSha256": "c645727ff16107bd6f698cf3d26df40985470076e7fbdcb8e00efb17cdd774ac"
          },
          {
            "seconds": 2578,
            "observation": "PPT 时序图标出 Trigger、CC1、CC2，以及上升沿复位和捕获的关系。",
            "frameSha256": "9592d4788c4cb0fdd7a05fa99a77167e316844f42c5746e36b203cbfdb15795f"
          },
          {
            "seconds": 2835,
            "observation": "目录回顾产生 PWM、初始化时基/输入捕获/从模式控制器和测量 PWM 参数。",
            "frameSha256": "6652237865ac9a13adc48f91c21e1989e672f37bf52722b05b672ec8b74d51e8"
          }
        ]
      }
    },
    {
      "page": 49,
      "phase": "adc",
      "title": "10.1 [ADC] 逐次逼近型 ADC",
      "duration": 1744,
      "summary": "区分模拟和数字信号，介绍采样深度、SAR、采样保持，并用简化电路演示转换。",
      "notes": "本节从自然界中的连续信号与计算机中的离散记录讲起，用一天气温的曲线和分时数据说明模拟量与数字量的区别。随后课程介绍单片机 ADC、采样深度，以及不同类型 ADC 的结构和用途，再聚焦逐次逼近型 ADC。图中的转换器由结果寄存器、电压发生器、比较器和采样保持电路组成，采样开关与电容负责暂时保持被测电压。为便于解释，后半段使用简化四位电路，以 3.3 V 参考和 2.21 V 输入展示不同位权与比较过程。要区分课程用来讲原理的简化四位图和前面介绍的单片机十二位采样深度。",
      "points": [
        "模拟量连续，数字记录在时间和幅值上离散",
        "认识 ADC 类型、采样深度和逐次逼近结构",
        "以简化四位电路和 2.21 V 输入演示逐位比较"
      ],
      "cid": 26547585091,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 174,
            "observation": "PPT 对照一天气温连续曲线和分时数字记录，区分模拟与数字信号。",
            "frameSha256": "dabbb7199f7a0d6f6d56bf3e78855825b4cbf77be721b51aa5e4d88528069fad"
          },
          {
            "seconds": 523,
            "observation": "目录列 ADC、单片机 ADC、采样深度、SAR、采样保持和例子，并手写 12 位。",
            "frameSha256": "aaa3531903d2e0861e99bb9a291f08fc6e7251fe5a43e6274a73284e17e0c3e3"
          },
          {
            "seconds": 872,
            "observation": "PPT 对照 SAR、Flash、Integrating、Sigma-Delta 等 ADC 类型。",
            "frameSha256": "e96530868185d8f00cc85dcd9ab27227ca0d93ddadc4a104973551f710f12fba"
          },
          {
            "seconds": 1220,
            "observation": "PPT 展示结果寄存器、电压发生器、比较器及采样保持电路。",
            "frameSha256": "fbc05378cb08e4712555a8d8e3dbcdba1aeea0fee7a566f8028f677243b55574"
          },
          {
            "seconds": 1569,
            "observation": "简化四位示例显示 3.3 V 参考、0.22 V 位权及 2.21 V 输入。",
            "frameSha256": "c556484688736facec9a630723a21e371363ef5f350ae1fc553d29e7255bf68f"
          },
          {
            "seconds": 1714,
            "observation": "四位示例继续演示从高位到低位的电压比较。",
            "frameSha256": "c305dcd729d7e0b25275cdc82169873cbf74f28213ff900c0c833a53078581a7"
          }
        ]
      }
    },
    {
      "page": 50,
      "phase": "adc",
      "title": "10.2 [ADC] ADC 模块的结构框图",
      "duration": 1545,
      "summary": "拆解 ADC 多路复用、规则与注入序列、触发源和 DR/JDR 结果寄存器。",
      "notes": "本节在逐次逼近电路基础上展开 ADC 外设结构，先说明多个模拟输入怎样复用同一个采样转换电路。总体框图把规则序列、注入序列、各自的外部触发、结果寄存器和状态信号放在一起：规则序列可安排较长的通道次序，转换结果通向 DR；注入序列最多四项，分别对应 JDR1 到 JDR4。课程也用定时器时基与 TRGO 示意固定间隔的触发。后半段给规则序列和注入序列分别安排通道与时序，在图上演示注入任务出现时插入处理、之后继续规则转换的过程，强调两类序列在组织与结果保存方式上的区别。",
      "points": [
        "多个输入通道复用一个十二位 SAR ADC",
        "规则序列使用 DR，注入序列使用 JDR1—JDR4",
        "通过转换时序示例展示注入序列插入规则序列的过程"
      ],
      "cid": 26148276533,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 154,
            "observation": "PPT 仍使用采样保持、比较器、电压发生器和结果寄存器解释转换核心。",
            "frameSha256": "2ba901e60067c476d0cd90788ed3864380fe369ee46362fbba254ae392bcc668"
          },
          {
            "seconds": 463,
            "observation": "ADC 总体图显示输入通道、规则序列 16、DR、注入序列 4 和 JDR1—JDR4。",
            "frameSha256": "b7b0ea4b761ed664f28f6eb93e01131a379284ad8cebf616e2bd389df40d7f2a"
          },
          {
            "seconds": 1081,
            "observation": "PPT 用 PSC=71、ARR=999 的定时器 Update/TRGO 画出 1 ms 触发间隔。",
            "frameSha256": "38b37b7a43dd80aa50ee0cd8dc8f65e91b6cc882e4eef677496b6c7d5b228088"
          },
          {
            "seconds": 1390,
            "observation": "PPT 将规则序列通道 0/1/2 与注入序列通道 3/4 放在同一执行时序中。",
            "frameSha256": "ec515179f61ca978367be355b8e49205ce6b0acd73c2d1a59f287a25cf6e25d0"
          },
          {
            "seconds": 1515,
            "observation": "执行时序示意注入序列插入后再继续规则序列转换。",
            "frameSha256": "32f97414b10bc06f1149ba21f414b28f5f630ea52e96c58066819732aa7126f2"
          }
        ]
      }
    },
    {
      "page": 51,
      "phase": "adc",
      "title": "10.3 [ADC] 采样时间和转换时间",
      "duration": 1691,
      "summary": "计算 ADC 时钟与转换时间，结合信号源内阻和采样保持电路确定采样时间。",
      "notes": "本节首先沿时钟树查找 ADC 的时钟来源，示例把 72 MHz 的 PCLK2 六分频为 12 MHz，并在图中标出 ADC 时钟不超过 14 MHz。转换时间部分把十二位逐次逼近过程换成时钟周期，给出 12.5 cycle 在该时钟下约为 1.04 μs。随后将信号源内阻加入采样保持电路，解释内阻会影响采样电容充电。课程以光敏传感器分压电路为例，用戴维南等效方法得到输出电压和等效内阻，再把信号源内阻、ADC 内部采样电阻、采样电容、采样深度和 ADC 频率带入手册关系式。重点是把采样时间与实际输入电路联系起来。",
      "points": [
        "示例由 PCLK2=72 MHz 六分频得到 ADC 的 12 MHz 时钟",
        "图示十二位转换需要 12.5 个 ADC 时钟周期",
        "用光敏模块的戴维南等效内阻和数据手册参数分析采样时间"
      ],
      "cid": 26536248591,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 169,
            "observation": "时钟树标出 ADC 12 MHz、fADC≤14 MHz，以及 72 MHz 的 PCLK2。",
            "frameSha256": "86ed787ce77ce878ccf8186fc1c5f5124f3e25176b8ad2c687ec631b5b9cd28c"
          },
          {
            "seconds": 507,
            "observation": "PPT 写出转换时间=12 cycle+0.5 cycle=12.5 cycle≈1.04 μs。",
            "frameSha256": "3952285a0a34ea30e2850b9988da1d2373d197044537408537702d8ef9eb550c"
          },
          {
            "seconds": 845,
            "observation": "采样保持图加入信号源内阻，并连到 ADC 采样电阻与电容。",
            "frameSha256": "553b059a86a5d62c4c168ca98285381e4297cfebec30722da4bfe0f08d0cd97d"
          },
          {
            "seconds": 1183,
            "observation": "光敏分压电路经戴维南等效，等效内阻为 R1//R2≤10 kΩ。",
            "frameSha256": "b38ab003acf5c81377e89bbd30b97ac82fe676a1fa3c7dedd39d661f77cfa988"
          },
          {
            "seconds": 1521,
            "observation": "PPT 的采样时间关系式逐项标出信号源内阻、RADC、CADC、N 和 fADC。",
            "frameSha256": "ce9b48cc0738051ff2e21ad9aaef69fb1127bf1ed51fcd442851f460e2689861"
          }
        ]
      }
    },
    {
      "page": 52,
      "phase": "adc",
      "title": "10.4 [ADC] 常规单通道转换",
      "duration": 3101,
      "summary": "用 PA0 采集光敏模块电压，配置 ADC1 的软件触发规则单通道转换。",
      "notes": "本节将光敏传感器的模拟输出送入 PA0，使用 ADC1 的规则序列完成单通道转换。开头的框图用绿色路径连接 PA0、通道 0、规则序列和 DR，并选择软件启动。接着配置 ADC 时钟，示例使用 PCLK2 六分频；Keil 部分逐项填写 ADC 的基本参数。课程通过接口表区分通用控制、规则通道配置、软件启动、读取转换结果和校准相关函数，安排规则序列中的通道。后半段解释结果寄存器的左、右对齐，以及将十二位转换结果乘以 3.3/4095 得到电压。末尾回到最小系统板与光敏模块的实物演示，主线是从模拟输入到规则转换结果。",
      "points": [
        "光敏模块 AO 连接 PA0/ADC 通道 0",
        "ADC1 时钟示例为 PCLK2 六分频，使用规则序列和软件启动",
        "讲解结果对齐、读取 DR 和按 3.3/4095 换算电压"
      ],
      "cid": 26538477378,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 310,
            "observation": "PPT 绿色路径明确光敏 AO→PA0/通道 0→规则序列→DR，并选择软件启动。",
            "frameSha256": "49de9a859c7439c347a5ed5ba5906a37037c182f897e6afe6cf09efd7f901c38"
          },
          {
            "seconds": 930,
            "observation": "PPT 展示 RCC_ADCCLKConfig(RCC_PCLK2_Div6) 与 ADC1 时钟使能。",
            "frameSha256": "4860393cc3a5bb1c01f745680b4f4dae2760cbd61e91d1e324ecdf5d2212bdd5"
          },
          {
            "seconds": 1550,
            "observation": "Keil 中为 ADC1 建立 ADC_InitTypeDef 并填写基本参数。",
            "frameSha256": "2db1da6c7cbc11efd5d8141fd09b9612e0d979f6587187a9e131fb55cd31f7bc"
          },
          {
            "seconds": 2170,
            "observation": "PPT 接口表区分规则通道配置、软件启动、取结果以及校准函数。",
            "frameSha256": "69ec9f108cd4091d42b35c2d65a8bf69582e66129b95a067b8b4078077d2440d"
          },
          {
            "seconds": 2790,
            "observation": "PPT 展示左右对齐图和电压=dr×(3.3÷4095)。",
            "frameSha256": "9323ffa7faa43e320e19421e3ba1826f0d75258120cd8cef5cc95f92b02e5e15"
          },
          {
            "seconds": 3071,
            "observation": "原片回到最小系统板和光敏模块的硬件演示。",
            "frameSha256": "4bec43d9e06d5647fcb4b0b4e2e191023a30d9b5be773b3335ce6d8318a6a78d"
          }
        ]
      }
    },
    {
      "page": 53,
      "phase": "adc",
      "title": "10.5 [ADC] 定时器触发",
      "duration": 2776,
      "summary": "由 TIM1 更新 TRGO 周期触发 ADC1 注入单通道采样，串口发送并用 VOFA 看波形。",
      "notes": "本节把采样启动交给定时器，先用 Update 到 TRGO 的路径画出固定间隔的触发脉冲与模拟信号采样点。实际 ADC 框图选择 TIM1_TRGO，触发 ADC1 的注入序列；序列长度为一，输入为 PA0 的通道 0，结果保存到 JDR1。编程部分先准备 USART1，再配置定时器与 ADC 的基本参数及注入序列。主循环等待 JEOC，调用 ADC_GetInjectedConversionValue 读取注入通道 1 的结果，清除完成标志并换算电压。末尾用串口把数据发送到 VOFA，画面中显示电压曲线和硬件操作。该节重点是定时器触发的注入单通道采样。",
      "points": [
        "实际采样路径为 TIM1_TRGO→注入序列长度 1→JDR1",
        "PA0/通道 0，注入单通道；使用 JEOC 判断完成并读取注入结果",
        "通过串口向 VOFA 发送电压数据，观察采样波形"
      ],
      "cid": 26389449160,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 277,
            "observation": "PPT 画出 Update→TRGO→ADC 的定周期触发与模拟信号采样点。",
            "frameSha256": "81d1d5a018dc7c150e26a67b6b898d627cab8875d44ec16649dbd2cd2b034322"
          },
          {
            "seconds": 1388,
            "observation": "ADC 框图高亮 TIM1_TRGO→注入序列长度 1→JDR1，同时选中 PA0/通道 0。",
            "frameSha256": "c4e2f3bfd88f6d3a3226d1805a0e0794d21fbdab0324144d6e30dafa7a288ccb"
          },
          {
            "seconds": 1943,
            "observation": "Keil 配置 ADC1 基本参数，时钟为 PCLK2 六分频。",
            "frameSha256": "00281fd52e962a0d643ac60fd947e51bb0440be76aff95c98b640e6e5298ada8"
          },
          {
            "seconds": 2205,
            "observation": "Keil 中注入序列长度为 1，ADC_InjectedChannelConfig 使用 ADC_Channel_0、rank 1。",
            "frameSha256": "79cf47384d7f2941f79cc8c20f57dc4b6867c82ad310efc9781810bc3a010db7"
          },
          {
            "seconds": 2498,
            "observation": "主循环等待 ADC_FLAG_JEOC，调用 ADC_GetInjectedConversionValue(...ADC_InjectedChannel_1)。",
            "frameSha256": "7c5e07c5eeb0943eb7a2d23fe5a1c41759c7ded04cccbfb0e6626e692e972cef"
          },
          {
            "seconds": 2746,
            "observation": "VOFA 显示采样电压曲线，并有操作硬件的画中画。",
            "frameSha256": "ef64822f1fd48529fc543bc1d24e33ef50995bcf0e9a9a4a006c668902737e5c"
          }
        ]
      }
    },
    {
      "page": 54,
      "phase": "adc",
      "title": "10.6 [ADC] 扫描模式",
      "duration": 2768,
      "summary": "启用扫描模式，以 TIM1_TRGO 触发两个注入通道，采集两只电位器并在 VOFA 显示。",
      "notes": "本节将单通道实验扩展为两只电位器的电压采集。课程先说明电位器分压与等效内阻，再用定时器 Update/TRGO 提供周期触发。ADC 图中明确选中 TIM1_TRGO，注入序列长度为二，依次安排通道 0 和通道 1，并开启扫描模式。Keil 中可见 ADC_InjectedSequencerLengthConfig(ADC1,2)，两个通道分别配置 rank 1、rank 2，触发宏为 ADC_ExternalTrigInjecConv_T1_TRGO。主循环等待 JEOC，分别读取 jdr1、jdr2，按 3.3/4095 换算为两个电压后经 USART1 输出。末尾 VOFA 以两个显示量配合两只电位器的实物操作验证效果。这里分别保存两次转换的结果，两个结果寄存器与注入序列中的先后位置对应。",
      "points": [
        "实际是注入扫描序列：长度 2，通道 0/rank 1 与通道 1/rank 2",
        "触发源明确为 ADC_ExternalTrigInjecConv_T1_TRGO",
        "等待 JEOC 后读取 jdr1、jdr2，换算两个电压并发往 VOFA"
      ],
      "cid": 26454986609,
      "verification": {
        "status": "video-keyframes-checked",
        "method": "公开视频关键画面核验",
        "checkedAt": "2026-10-28",
        "scope": "只核对所列关键画面，不是逐秒观看或逐字转录；提要只保留画面能够支持的内容。",
        "anchors": [
          {
            "seconds": 276,
            "observation": "PPT 展示电位器的三个端子、分压关系及等效内阻。",
            "frameSha256": "efac231b7cbf8c6af14e023c32043eb057f7d33dc4550cddd7a39b714a8c1eaf"
          },
          {
            "seconds": 1384,
            "observation": "PPT 展示 Update/TRGO，时基图标注 PSC=71、ARR=999、RCR=0。",
            "frameSha256": "4cb0b0b3d60dd8924147cb4056b94945a92947c6fd976dcb70ad45a70374f218"
          },
          {
            "seconds": 1850,
            "observation": "PPT 放大后清楚标出 TIM1_TRGO、注入 L=2、CH0/CH1、JDR1/JDR2 和扫描模式打勾。",
            "frameSha256": "775cfbfb5c958f9fc635f935802b71e01b304df593a86a0f77bde86f8cac75cd"
          },
          {
            "seconds": 2280,
            "observation": "Keil 明确 ScanConvMode=ENABLE、注入长度 2、通道 0/1 及 ADC_ExternalTrigInjecConv_T1_TRGO。",
            "frameSha256": "e804aaade80beecaf86863e4a3a95c10963f2ec14210e859ee3e89566fd3b0f8"
          },
          {
            "seconds": 2491,
            "observation": "主循环等待 JEOC，分别读取 jdr1/jdr2，换算 v1/v2 后调用 USART 打印。",
            "frameSha256": "59b099a10138f47158c2b32c43f66b59494a44cf78f983f89faafda6e01c6ee6"
          },
          {
            "seconds": 2738,
            "observation": "VOFA 显示两个量，画中画中可见两只电位器与最小系统板。",
            "frameSha256": "057b1e285bc2373eaee19bd2c6e9fc37bd40d562dc85950c97c9692cfc310b8e"
          }
        ]
      }
    }
  ]
};
