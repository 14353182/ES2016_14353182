我是在已经安装好VMvare虚拟机并且在VMware安装好Ubuntu的前提下来进行Dol开发环境的配置的。

首先我们在Ubuntu中先安装一些必要的环境，在命令行中先执行$sudo apt-get update，这句话的作用是更新我们已经在Ubuntu安装的源。接着执行$sudo apt-get install ant，安装ant，ant本身是一个流程脚本引擎，用于自动化调用程序完成项目的编译，打包，测试等，它相当于C的make工具，ant是纯Java语言编写的，所以具有很好的跨平台性。由于ant的跨平台性和操作简单的特点，它很容易集成到一些开发环境中去。然后执行$sudo apt-get install openjdk-7-jdk 安装java的环境配置，再来执行$sudo apt-get install unzip安装unzip软件用于解压后面我们要下载的dol文件。

第二步是下载systemc-2.3.1.tgz文件和dol_ethz.zip文件，执行以下这两句命令                        $sudo wget http://www.accellera.org/images/downloads/standards/systemc-2.3.1.tgz          $sudo wget http://www.tik.ee.ethz.ch/~shapes/downloads/dol_ethz.zip                             systemc本身只是一个C++库，并没有带集成开发环境。一般的C++编译器（如Linux下的g++）就可以生成 SystemC库文件,然后在程序中加上这个库就可以进行仿真。而dol_ethz.zip则是我们所需要的DOL。

接着解压文件，我们先执行$mkdir dol创建一个新的DOL的文件夹，然后执行$unzip dol_ethz.zip -d dol将dol_ethz.zip解压到该文件夹中，其中-d dol表示在dol文件夹里。再来接着执行$tar -zxvf systemc-2.3.2.tgz命令解压systemc，其中tar有两种作用，分别是1、打包：将一大堆文件或目录变成一个总的文件【tar命令】；2、压缩：将一个大的文件通过一些压缩算法变成一个小文件【gzip，bzip2等】。-zxvf分别是四个参数：x : 从 tar 包中把文件提取出来，z : 表示 tar 包是被 gzip 压缩过的，所以解压时需要用 gunzip 解压，v : 显示详细信息，f xxx.tar.gz:  指定被处理的文件是 xxx.tar.gz。

然后编译systemc,先执行$cd systemc-2.3.1进入systemc-2.3.1的目录下，然后执行$mkdir objdir创建一个临时文件夹objdir，执行$cd objdir进入该文件夹，执行$../configure CXX=g++ --disable-async-updates运行configure，能根据系统的环境设置一下参数，用于编译。再来执行$sudo make install编译systemc，编译完后systemc的目录下会多出一些文件夹。然后记录当前的工作路径，执行$pwd即可得到当前目录，拷贝下目录。

接下来编译dol，我们执行$cd ../dol打开dol的文件夹，找到build_zip.xml文件并打开，然后找到property name=”systemc.inc” value=”YYY/include”                                                                         property name=”systemc.lib” value=”YYY/lib-linux/libsystemc.a”/两句话，将YYY部分改为之前拷贝下的目录。再来执行$ant -f build_zip.xml all编译该文件，如果我们以上步骤没有出现错误，则编译成功会显示BUILD SUCCESSFUL。

最后试试运行第一个例子，执行$cd build/bin/main进入build/bin/main路径下再执行$ant -f runexample.xml -Dnumber=1，如果成功亦会出现BUILD SUCCESSFUL。


