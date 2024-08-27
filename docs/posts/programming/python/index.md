---
title: Python
date: 2024-08-09 20:00:00
hidden: true
categories:
- python
---
# Python

### Python 切换下载源

```bash
# 清华源
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
# 阿里源
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
# 腾讯源
pip config set global.index-url http://mirrors.cloud.tencent.com/pypi/simple
# 豆瓣源
pip config set global.index-url http://pypi.douban.com/simple/
# 换回默认源
pip config unset global.index-url
```

- pip.ini 文件内容

`pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/`

```ini
[global]
index-url = https://mirrors.aliyun.com/pypi/simple/
[install]
trusted-host=mirrors.aliyun.com
```

### 临时切换
*下载python中的Django包，这里使用的是豆瓣源*

​`pip install django -i http://pypi.douban.com/simple`​

