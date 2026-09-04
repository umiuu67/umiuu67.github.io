const COURSE = {
  meta: {
    bvid: 'BV11X4y1j7si',
    title: '铁头山羊 STM32 入门教程',
    author: '铁头山羊',
    chip: 'STM32F103 · 标准库 · LQFP48'
  },
  phases: [
    { id: 'prep', name: '准备阶段' },
    { id: 'gpio', name: 'GPIO' },
    { id: 'uart', name: '串口' },
    { id: 'i2c', name: 'I2C' },
    { id: 'spi', name: 'SPI' },
    { id: 'int', name: '中断与 EXTI' },
    { id: 'clk', name: '时钟' },
    { id: 'tim', name: '定时器' },
    { id: 'adc', name: 'ADC' }
  ],
  lessons: [
    {
      page: 1, phase: 'prep', title: '课程介绍', duration: 456,
      summary: '课程定位、学习路线与所需硬件软件总览。',
      notes: `## 课程定位
这是一套面向零基础/初学者的 STM32 入门教程，主讲使用 **STM32F103** 系列（Cortex-M3 内核）配合 **标准外设库** 开发。课程目标是带你从点亮 LED 一路学到 UART、I2C、SPI、中断、定时器与 ADC，具备独立完成小型嵌入式项目的能力。

## 学习路线
- **准备阶段**：装环境（Keil + 器件包 + 下载器驱动）、认识芯片与引脚分布。
- **GPIO**：输入输出模式、点灯与按键——嵌入式世界的"Hello World"。
- **串口 UART**：调试打印与数据收发，嵌入式调试的第一利器。
- **I2C / SPI**：两类最常用的板级总线，驱动 OLED 与 Flash（W25Q64）。
- **中断 / EXTI**：让 CPU 不再"死等"，学会事件驱动编程。
- **时钟树**：理解系统从 8MHz 外部晶振到 72MHz 主频的倍频路径。
- **定时器**：时基、PWM、输入捕获——呼吸灯、超声波测距、PWM 测量。
- **ADC**：逐次逼近原理、单通道/扫描模式、定时器触发采样。

## 需要准备的东西
~~~c
硬件：STM32F103C8T6 最小系统板（蓝色药丸 Blue Pill）、ST-Link 或串口下载器、
      面包板与杜邦线、LED、按键、OLED（SSD1306）、W25Q64 模块、超声波模块
软件：Keil MDK5 + STM32F10x 器件包 + 标准外设库 + 串口助手
~~~`,
      points: ['STM32F103 + 标准库 + Keil 的组合贯穿全课程', '路线：GPIO → UART → I2C/SPI → 中断 → 时钟 → 定时器 → ADC', '建议每节配一块 F103C8T6 最小系统板边看边练']
    },
    {
      page: 2, phase: 'prep', title: '1.1 [准备] 安装开发环境', duration: 1289,
      summary: 'Keil MDK5 安装、器件包、ST-Link 驱动与工程模板。',
      notes: `## 开发环境组成
STM32 开发需要三件套：**IDE**（Keil MDK5）、**器件支持包**（Device Family Pack）、**烧录工具与驱动**（ST-Link Utility / 驱动）。

## Keil MDK5 安装要点
- 安装路径**不要包含中文或空格**，避免后续编译链接出现诡异错误。
- MDK5 需要**许可激活**，学习阶段可使用社区提供的评估方式。
- 安装完成后先装 **STM32F1xx DFP 器件包**，否则新建工程时找不到 STM32F103 芯片。

## 烧录器
~~~c
ST-Link：SWD 四线（SWDIO/SWCLK/GND/3.3V），支持在线调试
USB 转串口：配合 BOOT0 跳线用串口 ISP 下载，不能调试
~~~`
      ,
      points: ['Keil 路径避免中文空格', '先装 DFP 器件包再建工程', 'SWD 四线连接：SWDIO、SWCLK、GND、3.3V']
    },
    {
      page: 3, phase: 'prep', title: '1.1 [准备] STM32 的基本信息', duration: 864,
      summary: 'STM32 命名规则、F103C8T6 资源一览与内核结构。',
      notes: `## 命名规则解读
以 **STM32F103C8T6** 为例：
- **F1**：基础型系列（Mainstream）。
- **03**：增强型子系列。
- **C**：48 个引脚（LQFP48 封装）。
- **8**：64KB Flash。
- **T**：LQFP 封装；**6**：温度等级 -40~85°C。

## 核心资源
~~~c
内核      ARM Cortex-M3，最高 72MHz
Flash     64KB（C8T6 实际常见 128KB）
SRAM      20KB
外设      2×ADC、3×USART、2×SPI、2×I2C、4×定时器、37 个 GPIO
~~~`
      ,
      points: ['F103C8T6 = 48 脚 / 64KB Flash / 20KB SRAM', 'Cortex-M3 内核，72MHz 主频', '芯片手册三件套：数据手册 DS1319、参考手册 RM0008、闪存编程手册']
    },
    {
      page: 4, phase: 'prep', title: '1.2 [准备] STM32 的引脚分布', duration: 614,
      summary: 'LQFP48 引脚图读法：电源、时钟、复位、调试与 GPIO。',
      notes: `## 引脚分类
LQFP48 的 48 个引脚按功能分为：
1. **电源类**：VDD/VSS（1.8~3.6V 供电，通常 3.3V）、VDDA/VSSA（模拟电源，接 ADC 用）。
2. **系统类**：NRST（复位，低有效）、BOOT0/BOOT1（启动选择）。
3. **时钟类**：PD0-OSC_IN / PD1-OSC_OUT（外部晶振 8MHz）。
4. **调试类**：PA13（SWDIO）、PA14（SWCLK）。
5. **普通 GPIO**：其余 37 个。

## 启动模式
~~~c
BOOT0=0  从主 Flash 启动（正常运行）
BOOT0=1, BOOT1=0  从系统存储器启动（串口 ISP 下载）
BOOT0=1, BOOT1=1  从内置 SRAM 启动（少用）
~~~`
      ,
      points: ['37 个普通 GPIO：PA0-15、PB0-15、PC13-15、PD0-1', 'PA13/PA14 被 SWD 调试占用，慎用作普通 IO', '正常跑程序 BOOT0 必须接地']
    },
    {
      page: 5, phase: 'gpio', title: '2.1 [GPIO] 4 种输出模式', duration: 1973,
      summary: '推挽/开漏、通用/复用：四个维度拆解 GPIO 输出模式。',
      notes: `## GPIO 概述与核心概念引入
本节正式开启 GPIO 学习。讲师引入人体结构类比：大脑（Cortex-M3 内核）负责思考但无法直接与外界交互，必须依赖"器官"——**片上外设**。GPIO 就是片上外设之一，相当于单片机的"手"，负责控制外部引脚（Pin）。

## STM32 内部结构与 GPIO 分组
STM32F103 常用 **LQFP48** 封装，48 个物理引脚中除复位、时钟、调试等特殊功能外，普通 IO 引脚分为四组：
- **GPIOA**：PA0~PA15，16 个
- **GPIOB**：PB0~PB15，16 个
- **GPIOC**：PC13~PC15，3 个
- **GPIOD**：PD0~PD1，2 个

合计 37 个普通 IO。每组 GPIO 模块可独立工作，对应不同的端口地址和功能寄存器。

## 输入与输出的基础逻辑
GPIO 共 8 种模式，输入输出各 4 种。信号流向定义：
- **输出**：芯片内部 → 外部（例：写寄存器 1 输出 3.3V 点亮 LED）
- **输入**：芯片外部 → 内部（例：读寄存器判断按键状态）

## 四种输出模式详解（核心重点）
四个名称可拆成两个维度：**推挽 vs 开漏**（电路结构）、**通用 vs 复用**（控制来源）。

### 推挽模式（Push-Pull）
由 **PMOS** 与 **NMOS** 交替导通实现：
- 写 0：NMOS 导通，引脚接 VSS，输出 0V
- 写 1：PMOS 导通，引脚接 VDD，输出 3.3V

两管**严禁同时导通**（否则 VDD 对 VSS 短路），因此必须互斥——一个"推"（Push）一个"挽"（Pull）。推挽能主动输出高低电平，**驱动能力强**。

### 开漏模式（Open-Drain）
上方 PMOS **始终断开**：
- 写 0：NMOS 导通，引脚接地，输出 0V
- 写 1：NMOS 也断开，引脚**悬空**（高阻态，高阻抗）

开漏要输出高电平必须外接**上拉电阻**到 VDD。适合多机总线（如 I2C）与电平转换场景。

### 通用功能（General Purpose）
控制信号直接来自 **CPU 写输出数据寄存器**：CPU → 寄存器 → MOS 管 → 引脚电平。适合点灯、读按键等简单控制。

### 复用功能（Alternate Function）
控制权交给其他**片上外设**（UART、定时器、SPI 等）。例如 PA9 配置为复用推挽后由 USART1 硬件自动产生发送波形，CPU 无需逐位控制。

## 总结知识图谱
1. 定位：GPIO 是 CPU 与外部世界的桥梁
2. 分组：PA/PB/PC/PD 四端口
3. 方向：输入读状态、输出设状态
4. 选型：驱动强选推挽；总线通信用开漏；简单 IO 选通用；外设接口选复用`,
      points: ['GPIO = 通用输入输出，是片上外设之一', 'F103C8T6 共 37 个普通 IO，分 PA/PB/PC/PD 四组', '推挽：双 MOS 交替导通，主动输出高低电平', '开漏：只有下拉 NMOS，高电平靠外部上拉', '复用：引脚控制权交给 UART/定时器/SPI 等外设']
    },
    {
      page: 6, phase: 'gpio', title: '2.2 [GPIO] IO 的最大输出速度', duration: 625,
      summary: '2/10/50MHz 三档输出速度的选择依据与影响。',
      notes: `## 输出速度是什么
GPIO 输出速度指引脚**电平翻转的压摆率上限**，不是 CPU 执行速度。标准库提供三档：
~~~c
GPIO_Speed_2MHz    低速
GPIO_Speed_10MHz   中速
GPIO_Speed_50MHz   高速
~~~`
      ,
      notes: `## 三档输出速度
标准库提供 2MHz / 10MHz / 50MHz 三档，指引脚电平翻转的压摆率上限。

## 如何选择
- 点灯、继电器、按键扫描：2MHz 足够。
- 普通数字信号：10MHz。
- 高速通信引脚（SPI SCK 等）：50MHz。

速度越高，边沿越陡，**功耗与电磁干扰（EMI）越大**。能用低速就不用高速。`,
      points: ['速度档位影响的是边沿陡峭程度，不是 CPU 性能', '高速档带来更大功耗与 EMI', '普通 IO 用 2MHz 即可，SPI 等 高速信号才上 50MHz']
    },
    {
      page: 7, phase: 'gpio', title: '2.3 [GPIO] LED 闪灯实验', duration: 2554,
      summary: '第一个完整工程：时钟使能、GPIO 初始化、点亮与闪烁。',
      notes: `## LED 基础原理
LED 点亮需要阳极接正、阴极接负形成回路，电流控制在 **2~10mA**：3.3V 减去导通压降约 0.7V，串 510Ω 电阻可得约 5mA。

## 电路接法分析（本节核心）
两种驱动接法对应两种 GPIO 模式：
- **推挽接法**：开关在 LED 阳极，高电平点亮 → 推挽输出
- **开漏接法**：开关在 LED 阴极，接地时点亮 → 开漏输出

查看最小系统板原理图：实验 LED 接在 **PC13**，阳极接 VDD、阴极经限流电阻接引脚——**标准开漏接法**。所以 PC13 必须配置为 **通用输出开漏（GPIO_Mode_Out_OD）**，且写 0 点亮、写 1 熄灭。

## 工程建立
使用课程提供的 template.zip 模板工程，解压重命名（如 blin_led），打开 .uvprojx 工程文件，在 Sources 分组的 main.c 中编写代码。

## 点灯三步代码
~~~c
#include "stm32f10x.h"
#include "delay.h"

int main(void)
{
    GPIO_InitTypeDef gpio;

    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOC, ENABLE);   // 1. 开时钟

    gpio.GPIO_Pin   = GPIO_Pin_13;
    gpio.GPIO_Mode  = GPIO_Mode_Out_OD;                     // 2. 开漏输出
    gpio.GPIO_Speed = GPIO_Speed_2MHz;
    GPIO_Init(GPIOC, &gpio);                                // 3. 初始化

    GPIO_WriteBit(GPIOC, GPIO_Pin_13, (BitAction)0);        // 写 0 点亮
    GPIO_WriteBit(GPIOC, GPIO_Pin_13, (BitAction)1);        // 写 1 熄灭

    while (1)                                               // 闪烁循环
    {
        GPIO_WriteBit(GPIOC, GPIO_Pin_13, (BitAction)0);    // 亮
        Delay_ms(100);
        GPIO_WriteBit(GPIOC, GPIO_Pin_13, (BitAction)1);    // 灭
        Delay_ms(100);
    }
}
~~~

## 编译与下载
- 编译要求日志显示 **0 Error, 0 Warning**。
- 调试器选 ST-Link，可用仿真模式单步验证：复位后 LED 亮（默认电平 0），执行写 1 后熄灭。
- 正式烧录用 **Load 按钮**，看到 "Programming Down / Verify OK / Finish" 提示即成功，按复位键运行。`,
      points: ['板载 LED 接 PC13，开漏接法：低电平点亮、高电平熄灭', 'PC13 要配 GPIO_Mode_Out_OD 开漏输出', '三步套路：使能时钟 → 配置结构体 → GPIO_Init', 'GPIO_WriteBit(GPIOx, Pin, Bit_SET/Bit_RESET) 控制电平', '延时用课程 delay 模块：#include "delay.h" + Delay_ms()']
    },
    {
      page: 8, phase: 'gpio', title: '2.4 [GPIO] 4 种输入模式', duration: 937,
      summary: '上拉/下拉/浮空/模拟输入的电路差异与用途。',
      notes: `## 四种输入模式
~~~c
GPIO_Mode_IPU    上拉输入    内部接上拉电阻，默认读 1
GPIO_Mode_IPD    下拉输入    内部接下拉电阻，默认读 0
GPIO_Mode_IN_FLOATING  浮空输入  无内部电阻，电平由外部决定
GPIO_Mode_AIN    模拟输入    信号直通 ADC，关闭施密特触发器
~~~`
      ,
      points: ['按键检测常用上拉输入：按下读到 0', '浮空输入要求外部电路有确定电平', '模拟输入专为 ADC 准备，不读数字寄存器']
    },
    {
      page: 9, phase: 'gpio', title: '2.5 [GPIO] 按钮实验', duration: 1233,
      summary: '按键扫描、消抖与按下/松开事件检测。',
      notes: `## 按键电路
按键一端接 GPIO，另一端接 GND，GPIO 配置为**上拉输入**：松开读 1，按下读 0。

## 消抖
机械触点闭合瞬间会抖动 5~10ms，需要软件消抖：
~~~c
if (GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_0) == 0)  // 检测到按下
{
    Delay_ms(10);                                    // 消抖
    if (GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_0) == 0)
    {
        // 确认按下，执行动作
        while (GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_0) == 0); // 等待松开
    }
}
~~~`
      ,
      points: ['上拉输入 + 按键接 GND = 松开 1、按下 0', '软件消抖：延时 10ms 后二次确认', '阻塞式等待松开简单但占用 CPU，后续可用中断解决']
    },
    {
      page: 10, phase: 'uart', title: '3.1 [串口] 通信协议', duration: 1270,
      summary: 'UART 帧格式：起始位、数据位、校验位、停止位与波特率。',
      notes: `## 串口基础
UART（通用异步收发器）是嵌入式最常用的调试与通信接口。**异步**指不传时钟线，双方约定相同波特率。

## 数据帧格式
~~~c
空闲    高电平
起始位  1 位，拉低表示一帧开始
数据位  8 位（LSB 先行）
校验位  可选（奇/偶/无）
停止位  1~2 位，回到高电平
~~~`
      ,
      points: ['波特率一致是通信前提，课程常用 115200', '帧 = 起始位 + 8 数据位 + 校验位(可选) + 停止位', 'TXD 接 RXD、RXD 接 TXD，交叉连接并共地']
    },
    {
      page: 11, phase: 'uart', title: '3.2 [串口] UART 模块的使用方法', duration: 1344,
      summary: 'USART 寄存器结构、库函数体系与初始化流程。',
      notes: `## USART 模块结构
F103 有 3 个 USART（USART1 挂 APB2，USART2/3 挂 APB1）。核心寄存器：
- **SR** 状态寄存器：TXE（发送空）、RXNE（接收非空）
- **DR** 数据寄存器：读收到的字节 / 写要发的字节
- **BRR** 波特率寄存器

## 使用套路
1. 使能 GPIO 与 USART 时钟
2. GPIO 配置：TX 复用推挽、RX 浮空/上拉输入
3. USART_Init 结构体：波特率、字长、停止位、校验、模式、流控
4. USART_Cmd 使能`,
      points: ['USART1 在 APB2（72MHz），USART2/3 在 APB1（36MHz）', 'TX 复用推挽输出，RX 浮空输入', '看 TXE/RXNE 标志位判断收发状态']
    },
    {
      page: 12, phase: 'uart', title: '3.3 [串口] 为串口初始化 IO 引脚', duration: 1521,
      summary: 'PA9/PA10 的 GPIO 与 USART1 配置代码。',
      notes: `## 引脚选择
USART1 默认使用 **PA9（TX）** 与 **PA10（RX）**。

## 初始化代码
~~~c
void USART1_Init(uint32_t baud)
{
    GPIO_InitTypeDef  gpio;
    USART_InitTypeDef usart;

    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA | RCC_APB2Periph_USART1, ENABLE);

    gpio.GPIO_Pin   = GPIO_Pin_9;            // TX
    gpio.GPIO_Mode  = GPIO_Mode_AF_PP;
    gpio.GPIO_Speed = GPIO_Speed_50MHz;
    GPIO_Init(GPIOA, &gpio);

    gpio.GPIO_Pin  = GPIO_Pin_10;            // RX
    gpio.GPIO_Mode = GPIO_Mode_IN_FLOATING;
    GPIO_Init(GPIOA, &gpio);

    usart.USART_BaudRate   = baud;
    usart.USART_WordLength = USART_WordLength_8b;
    usart.USART_StopBits   = USART_StopBits_1;
    usart.USART_Parity     = USART_Parity_No;
    usart.USART_Mode       = USART_Mode_Rx | USART_Mode_Tx;
    usart.USART_HardwareFlowControl = USART_HardwareFlowControl_None;
    USART_Init(USART1, &usart);
    USART_Cmd(USART1, ENABLE);
}
~~~`
      ,
      points: ['TX（PA9）必须配成复用推挽 GPIO_Mode_AF_PP', 'RX（PA10）浮空输入即可', '两个时钟一起使能：GPIOA + USART1']
    },
    {
      page: 13, phase: 'uart', title: '3.4 [串口] 发送数据', duration: 1939,
      summary: '轮询发送单字节与字符串，理解 TXE 等待逻辑。',
      notes: `## 发送原理：两级缓冲
USART 发送侧有**两级缓冲**：CPU 写入的数据先进发送数据寄存器（TXDR），再自动移入下方**移位寄存器**逐位发出。所以第一个字节还在发的时候，就可以写第二个字节进 TXDR——流水线提高吞吐。

## 两个关键标志位
- **TXE**（TX Register Empty）：TXDR 空，可以写新数据；=0 时写会覆盖丢失。
- **TC**（Transmission Complete）：TXDR 与移位寄存器都空，最后一帧彻底发完。

## 发送一个字节
发送前必须**等待 TXE**（发送数据寄存器空），否则会覆盖未发完的数据：
~~~c
void USART_SendByte(USART_TypeDef* USARTx, uint8_t data)
{
    USART_SendData(USARTx, data);
    while (USART_GetFlagStatus(USARTx, USART_FLAG_TXE) == RESET);
}
~~~

## 发送字符串
~~~c
void USART_SendString(USART_TypeDef* USARTx, char *str)
{
    while (*str)
    {
        USART_SendByte(USARTx, *str++);
    }
    while (USART_GetFlagStatus(USARTx, USART_FLAG_TC) == RESET); // 等待发送完成
}
~~~`
      ,
      points: ['TXE = 数据寄存器空，TC = 帧发送完全结束', '连续发送时每字节都要等 TXE', '字符串结尾靠 \\0 判断，发送完再等 TC 才算干净收尾']
    },
    {
      page: 14, phase: 'uart', title: '3.5 [串口] 格式化打印字符串', duration: 1939,
      summary: 'printf 重定向到串口：fputc 与勾选 MicroLIB。',
      notes: `## printf 重定向
C 标准库的 printf 最终调用 **fputc**，重写它即可让 printf 输出到串口：
~~~c
#include <stdio.h>

int fputc(int ch, FILE *f)
{
    USART_SendData(USART1, (uint8_t)ch);
    while (USART_GetFlagStatus(USART1, USART_FLAG_TXE) == RESET);
    return ch;
}
~~~

## Keil 设置
在"Options → Target"勾选 **Use MicroLIB**，否则标准库的半主机模式（semihosting）会导致程序卡死。`
      ,
      points: ['重写 fputc 即完成 printf 重定向', '必须勾选 MicroLIB，否则程序跑飞', 'printf("Temp = %d\\r\\n", val) 是最常用的调试输出']
    },
    {
      page: 15, phase: 'uart', title: '3.6 [串口] 接收数据', duration: 1300,
      summary: 'RXNE 轮询接收、接收数据包的思路。',
      notes: `## 轮询接收
~~~c
if (USART_GetFlagStatus(USART1, USART_FLAG_RXNE) != RESET)
{
    uint8_t data = USART_ReceiveData(USART1);   // 读 DR 自动清 RXNE
    // 处理 data
}
~~~

## 接收不定长数据
轮询收单字节容易，但收"一包数据"需要协议设计：固定帧头帧尾、超时判断、DMA 等。本节先用帧头帧尾法：
~~~c
// 约定格式：@data!  @ 为帧头，! 为帧尾
~~~`
      ,
      points: ['读 DR 会自动清 RXNE 标志', '接收一包数据要靠协议：帧头 + 数据 + 帧尾', '更好的方案是中断或 DMA，后面章节展开']
    },
    {
      page: 16, phase: 'uart', title: '3.7 [串口] 封装常用功能', duration: 1386,
      summary: '把串口收发整理成 bsp_usart.c 驱动模块。',
      notes: `## 驱动分层
把串口代码整理成独立模块，工程结构清晰：
~~~c
bsp_usart.h    对外接口声明
bsp_usart.c    初始化、发送、接收实现
main.c         只管业务逻辑
~~~`
      ,
      points: ['bsp = Board Support Package，板级支持包', '驱动与业务分离，换板只改 bsp 层', '封装好的 SendString/printf 直接复用']
    },
    {
      page: 17, phase: 'i2c', title: '4.1 [I2C] 基本电路结构', duration: 1300,
      summary: 'SCL/SDA 双线、上拉电阻与开漏输出的配合。',
      notes: `## I2C 电路结构
I2C 只用两根线：
- **SCL**（时钟线）：主机产生时钟
- **SDA**（数据线）：双向传输数据

所有设备**开漏输出 + 总线上拉电阻**（通常 4.7kΩ）是 I2C 的电路基础。任何设备都可以把总线拉低，但没人驱动时靠上拉电阻回到高电平——这就是"线与"特性。

## 为什么用开漏
推挽输出两个设备一个输出高一个输出低会直接短路。开漏+上拉则天然安全，也支持多主机仲裁。`
      ,
      points: ['I2C 两线制：SCL 时钟 + SDA 数据', '开漏输出 + 上拉电阻 = 线与逻辑', '总线空闲时 SCL/SDA 都为高电平']
    },
    {
      page: 18, phase: 'i2c', title: '4.2 [I2C] 通信协议', duration: 919,
      summary: '起始信号、设备地址、读写位、应答与停止信号。',
      notes: `## 一次完整的 I2C 传输
~~~c
起始信号  SCL 高时 SDA 由高变低
设备地址  7 位地址 + 1 位读写位（0 写 / 1 读）
应答      第 9 个时钟，从机拉低 SDA 表示 ACK
数据      每字节 8 位，高位先行，每字节后跟应答
停止信号  SCL 高时 SDA 由低变高
~~~`
      ,
      points: ['每个字节后都有第 9 位的应答位', '7 位地址 + 读写位组成第一个字节', '起始/停止信号只在 SCL 高电平时有效']
    },
    {
      page: 19, phase: 'i2c', title: '4.3 [I2C] I2C 模块的使用方法', duration: 1545,
      summary: 'F103 硬件 I2C 外设与事件机制。',
      notes: `## 硬件 I2C 外设
F103 内置 2 个 I2C 外设，硬件自动产生起始、地址、应答、停止等信号，CPU 通过**事件标志**（EV5、EV6、EV8_1 等）感知进度：
- EV5：起始信号已发出
- EV6：地址已发送/匹配
- EV8_1/EV8：数据寄存器空/正在写入
- EV7：接收到数据

## 主流程
1. 使能时钟（GPIOB + I2C1，APB1 总线）
2. GPIO：PB6=SCL、PB7=SDA 配复用开漏输出
3. I2C_Init 结构体：时钟频率 400kHz 快速模式/100kHz 标准模式、自身地址、使能 ACK
4. I2C_Cmd 使能`
      ,
      points: ['F103 硬件 I2C 常见兼容性问题，实际项目常用软件模拟 I2C（见 4.6）', 'I2C1 挂 APB1 总线', '事件标志 EV5/EV6/EV7 是读状态寄存器的封装']
    },
    {
      page: 20, phase: 'i2c', title: '4.4 [I2C] 写数据', duration: 1853,
      summary: '主机向从机写寄存器的完整时序与代码。',
      notes: `## 写时序
~~~c
起始 → 器件地址+写 → ACK → 寄存器地址 → ACK → 数据 → ACK → 停止
~~~

## 代码骨架
~~~c
void I2C_WriteByte(uint8_t addr, uint8_t reg, uint8_t data)
{
    while (I2C_GetFlagStatus(I2C1, I2C_FLAG_BUSY));
    I2C_GenerateSTART(I2C1, ENABLE);
    while (!I2C_CheckEvent(I2C1, I2C_EVENT_MASTER_MODE_SELECT));       // EV5
    I2C_Send7bitAddress(I2C1, addr, I2C_Direction_Transmitter);
    while (!I2C_CheckEvent(I2C1, I2C_EVENT_MASTER_TRANSMITTER_MODE_SELECTED)); // EV6
    I2C_SendData(I2C1, reg);
    while (!I2C_CheckEvent(I2C1, I2C_EVENT_MASTER_BYTE_TRANSMITTED));
    I2C_SendData(I2C1, data);
    while (!I2C_CheckEvent(I2C1, I2C_EVENT_MASTER_BYTE_TRANSMITTED));
    I2C_GenerateSTOP(I2C1, ENABLE);
}
~~~`
      ,
      points: ['写 = 地址(写方向) + 寄存器地址 + 数据', '每一步都要等对应事件标志', 'BUSY 标志检查避免总线冲突']
    },
    {
      page: 21, phase: 'i2c', title: '4.5 [I2C] 读数据', duration: 2165,
      summary: '指定寄存器读：先写地址再重启读，含 ACK/NACK 处理。',
      notes: `## 读时序（复合模式）
先写目标寄存器地址，再**重复起始**切换为读方向：
~~~c
起始 → 地址+写 → 寄存器地址 → 重复起始 → 地址+读 → 数据（主机 ACK）→ 最后字节 NACK → 停止
~~~

## 关键点
最后一个字节前要 **I2C_AcknowledgeConfig(I2C1, DISABLE)** 发 NACK，通知从机结束，再发停止条件。`
      ,
      points: ['读前要先写寄存器地址，再用重复起始切读', '最后一个字节必须 NACK', '读完记得重新使能 ACK']
    },
    {
      page: 22, phase: 'i2c', title: '4.6 [I2C] 软 I2C', duration: 2721,
      summary: '用普通 GPIO 软件模拟 I2C 时序，稳定可靠。',
      notes: `## 为什么要软 I2C
F103 的硬件 I2C 有历史遗留的兼容性问题（卡死标志位），实际工程常直接用 **GPIO 模拟时序**，稳定可控。

## 软 I2C 实现
用两个开漏输出 GPIO 模拟 SCL/SDA，按协议手动翻转电平：
~~~c
void IIC_Start(void)
{
    SDA_HIGH(); SCL_HIGH(); Delay_us(4);
    SDA_LOW();  Delay_us(4);
    SCL_LOW();
}

uint8_t IIC_ReadByte(void)
{
    uint8_t i, data = 0;
    for (i = 0; i < 8; i++)
    {
        SCL_HIGH(); Delay_us(4);
        data <<= 1;
        if (SDA_READ()) data |= 1;
        SCL_LOW();  Delay_us(4);
    }
    return data;
}
~~~`
      ,
      points: ['软 I2C 只需两个 GPIO，任何引脚都行', '时序靠 Delay_us 控制节奏', '实测稳定性通常优于 F103 硬件 I2C']
    },
    {
      page: 23, phase: 'i2c', title: '4.7 [I2C] 封装常用功能', duration: 1050,
      summary: '整理 iic.c 驱动层：读写一字节/多字节接口。',
      notes: `## 驱动整理
把软 I2C 封装成统一接口：
~~~c
void IIC_Init(void);                          // 引脚初始化
void IIC_WriteReg(uint8_t dev, uint8_t reg, uint8_t dat);
uint8_t IIC_ReadReg(uint8_t dev, uint8_t reg);
void IIC_ReadBuf(uint8_t dev, uint8_t reg, uint8_t *buf, uint8_t len);
~~~`
      ,
      points: ['上层只调 WriteReg/ReadReg，不关心时序', '换 OLED/传感器只换器件层，总线层复用']
    },
    {
      page: 24, phase: 'i2c', title: '4.8 [I2C] OLED 显示器', duration: 3846,
      summary: 'SSD1306 驱动：初始化、显存、显示字符与数字。',
      notes: `## OLED 基础
0.96 寸 OLED 常用 **SSD1306** 控制器，128×64 像素，I2C 地址一般 0x78（写）/0x79（读）。显存按**页**组织：8 行为 1 页，共 8 页，每页 128 列字节。

## 驱动要点
1. 初始化命令序列：关显示、设时钟、设置 mux 比率、开显示
2. 设置光标位置：页地址 + 列地址
3. 写显存：每个字节控制一列 8 个像素（纵向 8 点）

## 显示字符
字模提取：取模软件生成 8×16 字库数组，按 ASCII 索引：
~~~c
void OLED_ShowChar(uint8_t x, uint8_t y, char ch)
{
    uint8_t i, c = ch - ' ';
    OLED_SetPos(x, y);
    for (i = 0; i < 8; i++)  OLED_WriteData(F8X16[c * 16 + i]);
    OLED_SetPos(x, y + 1);
    for (i = 0; i < 8; i++)  OLED_WriteData(F8X16[c * 16 + i + 8]);
}
~~~`
      ,
      points: ['SSD1306 I2C 地址通常 0x78', '显存 8 页 × 128 列，每字节 = 一列 8 像素', '显示字符靠字模数组：ASCII 码索引取模']
    },
    {
      page: 25, phase: 'spi', title: '5.1 [SPI] 电路结构和通信协议', duration: 853,
      summary: '四线制 SPI：SCK/MOSI/MISO/CS 与模式 0~3。',
      notes: `## SPI 四线制
~~~c
SCK   时钟（主机产生）
MOSI  主出从入
MISO  从出主入
CS/NSS 片选（低电平选中从机）
~~~`
      ,
      points: ['SPI 全双工，速度远高于 I2C', 'CS 拉低选中，拉高释放', '四种模式由 CPOL（空闲电平）与 CPHA（采样边沿）组合']
    },
    {
      page: 26, phase: 'spi', title: '5.2 [番外] 按钮驱动程序编写', duration: 1295,
      summary: '独立按键驱动：扫描、消抖、长短按框架。',
      notes: `## 驱动思路
本节番外补充一个规范的按键驱动：定时扫描代替阻塞延时，支持**单击检测**。

## 扫描框架
~~~c
// 每 10ms 调用一次（配合定时器或主循环节拍）
uint8_t Key_Scan(void)
{
    static uint8_t last = 1;
    uint8_t now = GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_0);
    uint8_t event = 0;
    if (last == 1 && now == 0) event = 1;   // 检测下降沿 = 按下
    last = now;
    return event;
}
~~~`
      ,
      points: ['边沿检测代替电平检测，避免长按重复触发', '状态量 last/now 对比是扫描驱动核心']
    },
    {
      page: 27, phase: 'spi', title: '5.3 [番外] 按钮代码的封装', duration: 1809,
      summary: '把按键模块整理成 bsp_key 驱动。',
      notes: `## 模块化封装
bsp_key.h / bsp_key.c 独立成组，对外只暴露：
~~~c
void Key_Init(void);
uint8_t Key_GetNum(void);   // 返回键值，无按键返回 0
~~~`
      ,
      points: ['驱动三件套：初始化、获取事件、清除事件', '主循环里 switch(key) 分发业务']
    },
    {
      page: 28, phase: 'spi', title: '5.4 [SPI] IO 引脚初始化', duration: 1266,
      summary: 'SPI1 的 PA4-PA7 引脚配置。',
      notes: `## SPI1 默认引脚
~~~c
PA4  NSS（软件控制时当普通推挽输出）
PA5  SCK  复用推挽
PA6  MISO 复用上拉/浮空输入
PA7  MOSI 复用推挽
~~~`
      ,
      points: ['SCK/MOSI 复用推挽，MISO 输入', '硬件 NSS 少用，通常软件控制 CS']
    },
    {
      page: 29, phase: 'spi', title: '5.5 [SPI] SPI 模块的初始化', duration: 2537,
      summary: 'SPI_Init 结构体：方向、模式、速率、CPOL/CPHA。',
      notes: `## 初始化代码
~~~c
void SPI1_Init(void)
{
    SPI_InitTypeDef spi;
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_SPI1, ENABLE);

    spi.SPI_Direction = SPI_Direction_2Lines_FullDuplex;
    spi.SPI_Mode      = SPI_Mode_Master;
    spi.SPI_DataSize  = SPI_DataSize_8b;
    spi.SPI_CPOL      = SPI_CPOL_Low;          // 模式 0
    spi.SPI_CPHA      = SPI_CPHA_1Edge;
    spi.SPI_NSS       = SPI_NSS_Soft;
    spi.SPI_BaudRatePrescaler = SPI_BaudRatePrescaler_8;  // 72/8 = 9MHz
    spi.SPI_FirstBit  = SPI_FirstBit_MSB;
    SPI_Init(SPI1, &spi);
    SPI_Cmd(SPI1, ENABLE);
}
~~~`
      ,
      points: ['SPI1 挂 APB2（72MHz），SPI2 挂 APB1（36MHz）', '分频系数决定 SCK 频率', 'W25Q64 支持 SPI 模式 0 与模式 3']
    },
    {
      page: 30, phase: 'spi', title: '5.6 [SPI] 数据收发', duration: 1330,
      summary: '全双工交换一字节：写 DR 等待 RXNE。',
      notes: `## 交换字节
SPI 是全双工移位寄存器，发送的同时必然接收：
~~~c
uint8_t SPI_SwapByte(uint8_t data)
{
    while (SPI_I2S_GetFlagStatus(SPI1, SPI_I2S_FLAG_TXE) == RESET);
    SPI_I2S_SendData(SPI1, data);
    while (SPI_I2S_GetFlagStatus(SPI1, SPI_I2S_FLAG_RXNE) == RESET);
    return SPI_I2S_ReceiveData(SPI1);
}
~~~
读数据时发送任意字节（常为 0xFF）来产生时钟。`
      ,
      points: ['发送与接收同时发生，"读"也要发哑元字节', '等 TXE 再写 DR，等 RXNE 再读']
    },
    {
      page: 31, phase: 'spi', title: '5.7 [SPI] W25Q64 实验（上）', duration: 2512,
      summary: 'W25Q64 Flash 芯片：指令集、写使能与页编程。',
      notes: `## W25Q64 概述
64Mbit（8MB）SPI Flash，掉电不丢数据。最小写入单位是**页（256 字节）**，擦除单位是**扇区（4KB）**——Flash 只能先把 1 擦成 0 再编程。

## 常用指令
~~~c
0x9F  读器件 ID（JEDEC ID：EF 40 17）
0x06  写使能（每次写/擦前必须）
0x05  读状态寄存器（BUSY 位）
0x02  页编程（最多一次写一页内连续数据）
0x03  读数据
0x20  扇区擦除 4KB
~~~`
      ,
      points: ['写前必须发 0x06 写使能', '页编程不能跨页边界', '擦除后全为 0xFF，写入只能把 1 改 0']
    },
    {
      page: 32, phase: 'spi', title: '5.8 [SPI] W25Q64 实验（下）', duration: 959,
      summary: '扇区擦除、连续读写与验证实验。',
      notes: `## 完整读写流程
~~~c
void W25Q64_Write(uint32_t addr, uint8_t *buf, uint16_t len)
{
    W25Q64_WriteEnable();               // 0x06
    CS_LOW();
    SPI_SwapByte(0x02);                 // Page Program
    SPI_SwapByte(addr >> 16);
    SPI_SwapByte(addr >> 8);
    SPI_SwapByte(addr);
    while (len--) SPI_SwapByte(*buf++);
    CS_HIGH();
    while (W25Q64_ReadBusy());          // 等待写入完成
}
~~~`
      ,
      points: ['地址 24 位：3 字节依次发送', '写入后要轮询状态寄存器 BUSY 位', '跨页写要软件分页处理']
    },
    {
      page: 33, phase: 'int', title: '6.1 [中断] 中断的概念', duration: 919,
      summary: '轮询 vs 中断：事件驱动的意义与中断流程。',
      notes: `## 为什么需要中断
轮询方式 CPU 反复查标志位，效率低且错过时机。中断让硬件事件**主动通知 CPU**：事件发生 → 暂停主程序 → 跳转中断服务函数（ISR）→ 处理完返回原处继续。

## 中断流程
1. 事件发生，外设置中断标志
2. NVIC 判断优先级，CPU 响应
3. 自动压栈保存现场
4. 跳到对应 ISR 执行
5. 出栈恢复现场，回到断点`
      ,
      points: ['NVIC 是 Cortex-M3 的嵌套向量中断控制器', 'ISR 要短小快速，别在中断里延时', '中断标志通常要在 ISR 里手动清除']
    },
    {
      page: 34, phase: 'int', title: '6.2 [中断] 中断优先级', duration: 1226,
      summary: '抢占优先级与响应优先级、优先级分组。',
      notes: `## 两种优先级
- **抢占优先级**：高的可以打断低的（嵌套）。
- **响应优先级**（子优先级）：同时挂起时谁先被响应，不能打断。

## 优先级分组
F103 用 4 位表示优先级（16 级），STM32 把这 4 位分为抢占+响应两部分：
~~~c
NVIC_PriorityGroup_4  全部 4 位为抢占优先级（课程推荐，最直观）
NVIC_PriorityGroup_2  2 位抢占 + 2 位响应
~~~`
      ,
      points: ['数字越小优先级越高', '只有抢占优先级能形成中断嵌套', '整个工程分组方式要统一，初始化时设置一次']
    },
    {
      page: 35, phase: 'int', title: '6.3 [中断] 串口中断编程实验', duration: 2281,
      summary: 'RXNEIE 使能 + NVIC 配置 + USART1_IRQHandler 实战。',
      notes: `## 串口接收中断
让"收到数据"变成事件，不再死等：

## 三步配置
~~~c
USART_ITConfig(USART1, USART_IT_RXNE, ENABLE);   // 1. 开启 RXNE 中断源

NVIC_InitTypeDef nvic;                           // 2. NVIC 配置
nvic.NVIC_IRQChannel = USART1_IRQn;
nvic.NVIC_IRQChannelPreemptionPriority = 1;
nvic.NVIC_IRQChannelSubPriority = 1;
nvic.NVIC_IRQChannelCmd = ENABLE;
NVIC_Init(&nvic);

void USART1_IRQHandler(void)                     // 3. 中断服务函数
{
    if (USART_GetITStatus(USART1, USART_IT_RXNE) != RESET)
    {
        uint8_t data = USART_ReceiveData(USART1);
        // 处理数据（尽量简短，或存入缓冲区）
    }
}
~~~`
      ,
      points: ['中断源使能 + NVIC 使能 + 编写 IRQHandler，缺一不可', '服务函数名必须与启动文件一致：USART1_IRQHandler', '在 ISR 里收数据常配合环形缓冲区']
    },
    {
      page: 36, phase: 'int', title: '7.1 [EXTI] 工作原理', duration: 1030,
      summary: '外部中断线：GPIO 事件如何触发 EXTI 与 NVIC。',
      notes: `## EXTI 结构
EXTI（外部中断/事件控制器）把 GPIO 引脚的边沿变化转成中断。F103 的 EXTI 线 0~15 分组映射到 GPIO：PA0/PB0/PC0 共享 EXTI0 线——**同号引脚同一时刻只能一个用外部中断**。

## 触发方式
~~~c
EXTI_Trigger_Rising    上升沿触发
EXTI_Trigger_Falling   下降沿触发
EXTI_Trigger_Rising_Falling  双边沿触发
~~~`
      ,
      points: ['EXTI0~4 各有独立中断向量，5~9 共用 EXTI9_5，10~15 共用 EXTI15_10', '按键接 GND + 上拉输入 → 按下是下降沿 → 下降沿触发']
    },
    {
      page: 37, phase: 'int', title: '7.2 [EXTI] 按钮实验', duration: 1655,
      summary: '用外部中断替代轮询检测按键。',
      notes: `## 配置流程
~~~c
// 1. GPIO 上拉输入 + AFIO 时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO, ENABLE);
GPIO_EXTILineConfig(GPIO_PortSourceGPIOA, GPIO_PinSource0);  // PA0 → EXTI0

// 2. EXTI 配置
exti.EXTI_Line    = EXTI_Line0;
exti.EXTI_Mode    = EXTI_Mode_Interrupt;
exti.EXTI_Trigger = EXTI_Trigger_Falling;
EXTI_Init(&exti);

// 3. NVIC + 服务函数
void EXTI0_IRQHandler(void)
{
    if (EXTI_GetITStatus(EXTI_Line0) != RESET)
    {
        EXTI_ClearITPendingBit(EXTI_Line0);   // 清标志
        // 按键动作（消抖可在 ISR 里延时或延迟处理）
    }
}
~~~`
      ,
      points: ['别忘了使能 AFIO 时钟（EXTI 映射需要）', 'ISR 里必须清中断标志，否则反复进中断', '机械按键中断消抖：简单法 ISR 内 Delay_ms(10) 再确认']
    },
    {
      page: 38, phase: 'clk', title: '8.1 [时钟] 时钟树', duration: 1726,
      summary: 'HSE/HSI → PLL 倍频 → SYSCLK → 各总线分频。',
      notes: `## 时钟来源
- **HSI**：内部 8MHz RC 振荡器，精度低但免外部器件
- **HSE**：外部 8MHz 晶振，精度高（课程标准配置）
- **PLL**：锁相环倍频，8MHz × 9 = 72MHz 系统主频

## 时钟分配
~~~c
SYSCLK 72MHz
 ├─ AHB 分频 1 → HCLK 72MHz
 │   ├─ APB1 分频 2 → PCLK1 36MHz（USART2/3、I2C、SPI2、TIM2-4）
 │   └─ APB2 分频 1 → PCLK2 72MHz（GPIO、USART1、SPI1、ADC 倍频后 14MHz 上限）
~~~`
      ,
      points: ['72MHz = 8MHz 外部晶振 × 9 倍频', 'APB1 最高 36MHz、APB2 最高 72MHz', 'ADC 时钟不超过 14MHz，需单独分频']
    },
    {
      page: 39, phase: 'clk', title: '8.2 [时钟] 时钟树编程', duration: 2354,
      summary: 'SystemInit 与 RCC 配置，验证 72MHz 主频。',
      notes: `## 默认配置
标准库工程的 **SystemInit()**（启动文件里自动调用）已把系统配到 72MHz：使能 HSE → 等待稳定 → PLL ×9 → FLASH 等待周期 2 → 切换 SYSCLK 到 PLL。

## 手动验证主频
~~~c
RCC_ClocksTypeDef clocks;
RCC_GetClocksFreq(&clocks);
// clocks.SYSCLK_Frequency = 72000000
~~~`
      ,
      points: ['SystemInit 在 main 之前由启动文件调用', '改主频要同步改 FLASH 等待周期', '外设时钟分频决定库函数里写 72M 还是 36M 计算']
    },
    {
      page: 40, phase: 'tim', title: '9.1 [定时器] 时基单元', duration: 1702,
      summary: 'PSC 预分频、CNT 计数器、ARR 自动重装载。',
      notes: `## 时基单元三件套
~~~c
PSC  预分频器  对输入时钟分频，实际分频 = PSC + 1
CNT 计数器    16 位，从 0 计到 ARR 后溢出
ARR 自动重装载  计数上限
~~~

## 定时周期公式
~~~c
T = (ARR + 1) × (PSC + 1) / TIMxCLK
例：72MHz、PSC=7199（10kHz 计数）、ARR=999 → 1000/10000Hz = 100ms
~~~`
      ,
      points: ['F103 通用定时器 TIM2~4 挂 APB1，时钟 72MHz（倍频后）', 'PSC 与 ARR 都是"写 N 实际 N+1"', '更新事件（UIF 标志）= 计数溢出时刻']
    },
    {
      page: 41, phase: 'tim', title: '9.2 [定时器] 自制延迟函数', duration: 1443,
      summary: '用定时器中断或轮询 UIF 实现 ms 延时。',
      notes: `## 定时器延时
比空循环精确得多。配置 TIM2 产生 1ms 更新事件：
~~~c
void TIM2_DelayInit(void)
{
    TIM_TimeBaseInitTypeDef tim;
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);
    tim.TIM_Period    = 999;          // ARR
    tim.TIM_Prescaler = 71;           // 72MHz/72 = 1MHz → 1us 计数
    tim.TIM_ClockDivision = TIM_CKD_DIV1;
    tim.TIM_CounterMode   = TIM_CounterMode_Up;
    TIM_TimeBaseInit(TIM2, &tim);
    TIM_Cmd(TIM2, ENABLE);
}

void Delay_us(uint32_t n)
{
    TIM_SetCounter(TIM2, 0);
    while (TIM_GetCounter(TIM2) < n);
}
~~~`
      ,
      points: ['1MHz 计数频率 = 每 1us 计数加 1', 'Delay_ms = Delay_us × 1000', '轮询 CNT 简单可靠，不依赖中断']
    },
    {
      page: 42, phase: 'tim', title: '9.3 [定时器] 输出比较', duration: 1277,
      summary: 'CCR 比较寄存器与 PWM 波形产生原理。',
      notes: `## PWM 原理
输出比较通道内置 **CCR**（捕获/比较寄存器）。CNT 不断计数：
~~~c
CNT < CCR  输出有效电平（高）
CNT ≥ CCR 输出无效电平（低）
ARR 决定 PWM 周期，CCR 决定占空比

占空比 = CCR / (ARR + 1)
~~~`
      ,
      points: ['PWM 频率由 ARR+PSC 决定，占空比由 CCR 决定', 'PWM 模式 1：CNT<CCR 有效；模式 2 相反', '调 CCR 即平滑调节亮度/速度']
    },
    {
      page: 43, phase: 'tim', title: '9.4 [定时器] 呼吸灯实验', duration: 2150,
      summary: 'PWM 实战：LED 亮度渐变。',
      notes: `## 实验思路
让 PWM 占空比从 0 渐增到 100% 再渐减，LED 呈现呼吸效果。

## 关键配置
~~~c
TIM_OCInitTypeDef oc;
oc.TIM_OCMode      = TIM_OCMode_PWM1;
oc.TIM_OutputState = TIM_OutputState_Enable;
oc.TIM_Pulse       = 0;             // CCR 初值
TIM_OC1Init(TIM2, &oc);
TIM_OC1PreloadConfig(TIM2, TIM_OCPreload_Enable);

// 循环中改变占空比
TIM_SetCompare1(TIM2, duty++);
~~~`
      ,
      points: ['PWM 引脚要配复用推挽输出', 'TIM_SetCompare1 动态改 CCR', '频率 > 100Hz 肉眼才感觉不到闪烁']
    },
    {
      page: 44, phase: 'tim', title: '9.5 [定时器] 输入捕获', duration: 1006,
      summary: '捕获边沿时刻，测脉宽与频率。',
      notes: `## 输入捕获原理
通道引脚出现**指定边沿**时，硬件把当前 CNT 值锁进 CCR——两次捕获差值就是时间间隔。

## 应用
~~~c
测频率   捕获两次上升沿，Δt = 周期 → f = 1/Δt
测脉宽   上升沿捕获一次，切换为下降沿再捕获，差值 = 高电平时长
~~~`
      ,
      points: ['CNT 溢出要计入（软件处理更新中断）', '捕获引脚配浮空/上拉输入']
    },
    {
      page: 45, phase: 'tim', title: '9.6 [定时器] 超声波测距实验', duration: 2976,
      summary: 'HC-SR04 + 输入捕获：Trig 触发、Echo 测脉宽。',
      notes: `## HC-SR04 时序
~~~c
1. Trig 引脚给 ≥10us 高电平触发
2. 模块自动发 8 个 40kHz 脉冲
3. Echo 引脚输出高电平，宽度 = 声波往返时间
4. 距离 = Echo 高电平时间 × 340m/s / 2
~~~`
      ,
      points: ['Echo 脉宽用输入捕获测量（us 级）', '声速 340m/s ≈ 0.034cm/us，除以 2 是往返', '测距精度受温湿度影响，教学场景足够']
    },
    {
      page: 46, phase: 'tim', title: '9.7 [定时器] 从模式控制器', duration: 1291,
      summary: 'Reset/Trigger 等从模式让硬件自动复位计数器。',
      notes: `## 从模式的作用
定时器可作为"从机"响应触发信号：
- **Reset**：触发信号来时 CNT 自动清零
- **Gate**：触发信号控制计数启停
- **Trigger**：触发信号启动计数

## 典型应用
输入捕获 + Reset 从模式：上升沿自动清零 CNT，下降沿时 CCR 值直接就是脉宽——**免软件干预测脉宽**。`
      ,
      points: ['从模式由 TIM_SelectInputTrigger + TIM_SelectSlaveMode 配置', '硬件自动化 = 更少 CPU 占用与更准的测量']
    },
    {
      page: 47, phase: 'tim', title: '9.8 [定时器] PWM 参数测量原理', duration: 1649,
      summary: '测量外部 PWM 的频率与占空比的方案设计。',
      notes: `## 测量方案
~~~c
频率   两次上升沿捕获值之差 → 周期 → 频率
占空比 高电平脉宽 / 周期

脉宽测量用"上升沿捕获 → 切换下降沿捕获"或从模式自动复位
~~~`
      ,
      points: ['溢出补偿是测低频信号的关键', '占空比 = (CCR2-CCR1)/周期']
    },
    {
      page: 48, phase: 'tim', title: '9.9 [定时器] PWM 参数测量实验', duration: 2865,
      summary: '完整实验：捕获另一块板输出的 PWM 并解析。',
      notes: `## 实验流程
1. 信号发生（另一定时器 PWM 输出或第二块板）
2. 输入捕获配置：上升沿捕获记录 CCR1
3. 从模式 Reset：上升沿自动清零 CNT
4. 下降沿捕获：CCR2 = 高电平计数值
5. 计算：周期 = ARR+1（因为自动复位），占空比 = CCR2/(ARR+1)`
      ,
      points: ['硬件自动复位法测占空比最优雅', '结果可经串口 printf 输出到 PC 验证']
    },
    {
      page: 49, phase: 'adc', title: '10.1 [ADC] 逐次逼近型 ADC', duration: 1744,
      summary: 'SAR 原理：二分比较逐步逼近输入电压。',
      notes: `## 逐次逼近原理（SAR）
ADC 像猜数字游戏：从最高位开始，每次给一个猜测电压与输入比较，根据大小保留/舍弃该位，12 次比较得到 12 位结果。

## F103 ADC 参数
~~~c
分辨率 12 位 → 0~4095
参考电压 3.3V（VDDA）
量化值 = VIN / 3.3 × 4095
最多 16 个外部通道 + 2 个内部（温度传感器/Vrefint）
~~~`
      ,
      points: ['12 位 ADC：LSB = 3.3V/4096 ≈ 0.8mV', 'ADC 时钟不超过 14MHz', '输入电压范围 0 ~ VDDA']
    },
    {
      page: 50, phase: 'adc', title: '10.2 [ADC] ADC 模块的结构框图', duration: 1545,
      summary: '注入组/规则组、触发源与数据寄存器。',
      notes: `## 结构要点
- **规则组**：常规转换序列，最多 16 个通道，结果存 DR（单一寄存器）
- **注入组**：类似中断"插队"，最多 4 个通道，各有独立寄存器
- **触发源**：软件启动 / 定时器 TRGO / EXTI 等`
      ,
      points: ['规则组连续转换要读 DR 前看 EOC 标志', '注入组适合突发事件的高优先级采样', '扫描+连续模式配合 DMA 才是多通道正解']
    },
    {
      page: 51, phase: 'adc', title: '10.3 [ADC] 采样时间和转换时间', duration: 1691,
      summary: '采样保持电路与转换周期计算。',
      notes: `## 时间构成
~~~c
总转换时间 = 采样时间 + 12.5 个 ADC 时钟（逐次比较）
采样时间可选 1.5 / 7.5 / 13.5 / 28.5 / 41.5 / 55.5 / 71.5 / 239.5 周期

例：ADCCLK=12MHz、采样 1.5 周期
T = (1.5 + 12.5) / 12MHz ≈ 1.17us
~~~`
      ,
      points: ['采样时间越长对高阻抗信号源越友好', '转换完成置 EOC 标志', 'ADCCLK 由 PCLK2 分频（2/4/6/8）']
    },
    {
      page: 52, phase: 'adc', title: '10.4 [ADC] 常规单通道转换', duration: 3101,
      summary: '单通道轮询采样实战：电位器电压读取。',
      notes: `## 配置与读取
~~~c
void ADC1_Init(void)
{
    ADC_InitTypeDef adc;
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_ADC1 | RCC_APB2Periph_GPIOA, ENABLE);
    RCC_ADCCLKConfig(RCC_PCLK2_Div6);        // 72/6 = 12MHz

    gpio.GPIO_Pin  = GPIO_Pin_0;             // PA0 模拟输入
    gpio.GPIO_Mode = GPIO_Mode_AIN;
    GPIO_Init(GPIOA, &gpio);

    adc.ADC_Mode = ADC_Mode_Independent;
    adc.ADC_ContinuousConvMode = DISABLE;
    adc.ADC_ExternalTrigConv = ADC_ExternalTrigConv_None;
    adc.ADC_DataAlign = ADC_DataAlign_Right;
    adc.ADC_NbrOfChannel = 1;
    ADC_Init(ADC1, &adc);
    ADC_Cmd(ADC1, ENABLE);

    ADC_ResetCalibration(ADC1);              // 复位校准
    while (ADC_GetResetCalibrationStatus(ADC1));
    ADC_StartCalibration(ADC1);              // 执行校准
    while (ADC_GetCalibrationStatus(ADC1));
}

uint16_t Get_ADC(void)
{
    ADC_RegularChannelConfig(ADC1, ADC_Channel_0, 1, ADC_SampleTime_239Cycles5);
    ADC_SoftwareStartConvCmd(ADC1, ENABLE);
    while (!ADC_GetFlagStatus(ADC1, ADC_FLAG_EOC));
    return ADC_GetConversionValue(ADC1);
}
~~~`
      ,
      points: ['模拟引脚 GPIO_Mode_AIN', '上电后先做一次校准提高精度', '电压 = 读数 × 3.3 / 4095']
    },
    {
      page: 53, phase: 'adc', title: '10.5 [ADC] 定时器触发', duration: 2776,
      summary: 'TIM TRGO 定周期自动采样，等间隔采集。',
      notes: `## 为什么要定时器触发
软件触发的时间抖动大。定时器 TRGO（如更新事件）周期性启动 ADC，实现**严格等间隔采样**——数字信号处理的前提。

## 配置要点
~~~c
TIM_SelectOutputTrigger(TIM2, TIM_TRGOSource_Update);   // 更新事件作 TRGO
adc.ADC_ExternalTrigConv = ADC_ExternalTrigConv_T2_TRGO; // ADC 由 TIM2 触发
~~~`
      ,
      points: ['等间隔采样后数据才能做 FFT 等处理', '采样率 = 定时器溢出频率']
    },
    {
      page: 54, phase: 'adc', title: '10.6 [ADC] 扫描模式', duration: 2768,
      summary: '多通道扫描 + DMA 自动搬运，多路采集正解。',
      notes: `## 扫描模式
一次触发按序转换多个通道。规则组结果共用一个 DR，不及时取走会被覆盖——所以扫描模式标配 **DMA** 自动搬运到内存数组：
~~~c
adc.ADC_ScanConvMode = ENABLE;
adc.ADC_NbrOfChannel = 2;    // 如 CH0 + CH1
ADC_RegularChannelConfig(ADC1, ADC_Channel_0, 1, ADC_SampleTime_239Cycles5);
ADC_RegularChannelConfig(ADC1, ADC_Channel_1, 2, ADC_SampleTime_239Cycles5);

// DMA：外设地址 = &ADC1->DR，内存地址 = adc_buf[]，循环模式
~~~`
      ,
      points: ['多通道必须扫描 + DMA，CPU 零搬运', 'DMA 循环模式自动刷新缓冲区', '至此课程完成：GPIO/串口/I2C/SPI/中断/时钟/定时器/ADC 全覆盖']
    }
  ]
};
