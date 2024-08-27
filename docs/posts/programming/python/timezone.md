---
title: timezone
date: 2024-08-09 20:00:00
hidden: true
categories:
- python
---
# 时区


```python
utc8 = datetime.timezone(datetime.timedelta(hours=8))
utc5 = datetime.timezone(datetime.timedelta(hours=5))

# nww = dt.now(utc8)
# print(nww.strftime('%Y-%m-%d %H:%M:%S %:z'))  # 2024-06-27 16:10:04 +08:00
# nw = dt.now(datetime.UTC)
# print(nw)
#
# print("utc5:", nw.astimezone(tz=utc5))
#
# print(nw.replace(tzinfo=utc5))
# print(nw.timestamp())
# print(dt.fromtimestamp(nw.timestamp()))
# print(dt.fromtimestamp(nw.timestamp(), datetime.UTC))
# print(dt.fromtimestamp(nw.timestamp(), utc8))
# print(nw - datetime.timedelta(hours=5))
# print(nw + datetime.timedelta(hours=5))

```