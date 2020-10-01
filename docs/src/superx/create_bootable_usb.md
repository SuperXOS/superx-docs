## Introduction

This tutorial will walk you through the process of creating a bootable SuperX USB stick on Windows. You can use this USB stick to boot and test out or install SuperX on any computer that supports booting from USB. Here we will be using etcher as its one of the easiest tool to do this. The instructions are also applicable to most other Linux distributions as well.

Also Etcher is available for all major desktop operating systems: Windows, macOS and Linux. This makes it an ideal tool to recommend as the following steps will, more or less, be the same no-matter which operating system you are reading from.

### Requirements

- USB of size 4GB or more
- SuperX ISO file (which can be downloaded from the [official website](https://superxos.com/download/))
- Latest Etcher release (which can be downloaded from [ofiicial site](https://www.balena.io/etcher/))

## Steps for making the bootable USB

1. Install Etcher on your system.
2. Plug in the USB flash drive.
3. Open **Etcher** application.

[![img](https://wiki.superxos.com/images/0/01/Etcher-1.png)](https://wiki.superxos.com/File:Etcher-1.png)


 4.Click on the **Select Image** option to select your **ISO Image file** and press **Open**.

[![img](https://wiki.superxos.com/images/4/4a/1.png)](https://wiki.superxos.com/File:1.png)



5. Click on the **Select Drive** option to select your **USB Flash drive** and press **Continue**.

Etcher will automatically select an external drive with ample free space. If it doesn’t, click the ‘Connect a drive’ button to select a device.

If you have more than one external drive, SD card or USB stick attached make sure that you have selected the correct drive **before** proceeding.

[![img](https://wiki.superxos.com/images/1/10/3.png)](https://wiki.superxos.com/File:3.png)



6. Once you have selected your **ISO file** & **USB Flash drive** click on to **Flash**.

That’s it! Etcher takes care of the rest of the process. It will inform you when it’s done and tell you whether it succeeded or encountered an error.[![img](https://wiki.superxos.com/images/f/fb/2.png)](https://wiki.superxos.com/File:2.png)

7. It will ask you to enter your **root** password on linux.

[![img](https://wiki.superxos.com/images/f/f1/6.png)](https://wiki.superxos.com/File:6.png)

8. It will start the process of **Creating a Bootable USB Flash drive**.

[![img](https://wiki.superxos.com/images/9/9e/7.png)](https://wiki.superxos.com/File:7.png)

[![img](https://wiki.superxos.com/images/6/60/8.png)](https://wiki.superxos.com/File:8.png)

[![img](https://wiki.superxos.com/images/7/7a/9.png)](https://wiki.superxos.com/File:9.png)



9. Once the **Process** is complete it will **vailded** (Check) wether the **ISO** is created correctly.

[![img](https://wiki.superxos.com/images/5/58/10.png)](https://wiki.superxos.com/File:10.png)

10. The process will **Finish** - **Flash Complete !**

[![img](https://wiki.superxos.com/images/5/59/11.png)](https://wiki.superxos.com/File:11.png)

To use the installer on a computer just remove it from your current PC and insert it in to the one you wish to install SuperX on. Then, reboot the device, remembering to select the USB as the boot drive if it’s required (usually set via the BIOS).
