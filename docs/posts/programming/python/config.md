---
title: config
date: 2024-08-09 20:00:00
hidden: true
categories:
- python
---
# 配置

#### Toml
```python
import tomllib

with open("a.toml", "rb") as f:
    config = tomllib.load(f)
    print(config)
```



#### 第三方配置库 dynaconf
dynaconf init -f toml


#### python内置的 configParser
configparser.ConfigParser()