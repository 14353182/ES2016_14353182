�������Ѿ���װ��VMvare�����������VMware��װ��Ubuntu��ǰ����������Dol�������������õġ�

����������Ubuntu���Ȱ�װһЩ��Ҫ�Ļ�����������������ִ��$sudo apt-get update����仰�������Ǹ��������Ѿ���Ubuntu��װ��Դ������ִ��$sudo apt-get install ant����װant��ant������һ�����̽ű����棬�����Զ������ó��������Ŀ�ı��룬��������Եȣ����൱��C��make���ߣ�ant�Ǵ�Java���Ա�д�ģ����Ծ��кܺõĿ�ƽ̨�ԡ�����ant�Ŀ�ƽ̨�ԺͲ����򵥵��ص㣬�������׼��ɵ�һЩ����������ȥ��Ȼ��ִ��$sudo apt-get install openjdk-7-jdk ��װjava�Ļ������ã�����ִ��$sudo apt-get install unzip��װunzip������ڽ�ѹ��������Ҫ���ص�dol�ļ���

�ڶ���������systemc-2.3.1.tgz�ļ���dol_ethz.zip�ļ���ִ����������������                        $sudo wget http://www.accellera.org/images/downloads/standards/systemc-2.3.1.tgz          $sudo wget http://www.tik.ee.ethz.ch/~shapes/downloads/dol_ethz.zip                             systemc����ֻ��һ��C++�⣬��û�д����ɿ���������һ���C++����������Linux�µ�g++���Ϳ������� SystemC���ļ�,Ȼ���ڳ����м��������Ϳ��Խ��з��档��dol_ethz.zip������������Ҫ��DOL��

���Ž�ѹ�ļ���������ִ��$mkdir dol����һ���µ�DOL���ļ��У�Ȼ��ִ��$unzip dol_ethz.zip -d dol��dol_ethz.zip��ѹ�����ļ����У�����-d dol��ʾ��dol�ļ������������ִ��$tar -zxvf systemc-2.3.2.tgz�����ѹsystemc������tar���������ã��ֱ���1���������һ����ļ���Ŀ¼���һ���ܵ��ļ���tar�����2��ѹ������һ������ļ�ͨ��һЩѹ���㷨���һ��С�ļ���gzip��bzip2�ȡ���-zxvf�ֱ����ĸ�������x : �� tar ���а��ļ���ȡ������z : ��ʾ tar ���Ǳ� gzip ѹ�����ģ����Խ�ѹʱ��Ҫ�� gunzip ��ѹ��v : ��ʾ��ϸ��Ϣ��f xxx.tar.gz:  ָ����������ļ��� xxx.tar.gz��

Ȼ�����systemc,��ִ��$cd systemc-2.3.1����systemc-2.3.1��Ŀ¼�£�Ȼ��ִ��$mkdir objdir����һ����ʱ�ļ���objdir��ִ��$cd objdir������ļ��У�ִ��$../configure CXX=g++ --disable-async-updates����configure���ܸ���ϵͳ�Ļ�������һ�²��������ڱ��롣����ִ��$sudo make install����systemc���������systemc��Ŀ¼�»���һЩ�ļ��С�Ȼ���¼��ǰ�Ĺ���·����ִ��$pwd���ɵõ���ǰĿ¼��������Ŀ¼��

����������dol������ִ��$cd ../dol��dol���ļ��У��ҵ�build_zip.xml�ļ����򿪣�Ȼ���ҵ�property name=��systemc.inc�� value=��YYY/include��                                                                         property name=��systemc.lib�� value=��YYY/lib-linux/libsystemc.a��/���仰����YYY���ָ�Ϊ֮ǰ�����µ�Ŀ¼������ִ��$ant -f build_zip.xml all������ļ�������������ϲ���û�г��ִ��������ɹ�����ʾBUILD SUCCESSFUL��

����������е�һ�����ӣ�ִ��$cd build/bin/main����build/bin/main·������ִ��$ant -f runexample.xml -Dnumber=1������ɹ�������BUILD SUCCESSFUL��


