{
  "subject": "account",
  "action": "remove",
  "object": "file_object",
  "status": "failure",
  "category.generic": "File System Object",
  "category.high": "System Management",
  "category.low": "Manipulation",
  "chain_id": "32409854",
  "datafield1": "rm",
  "datafield2": "www-data",
  "datafield3": "0755",
  "event_src.category": "Operating system",
  "event_src.ip": "10.24.1.31",
  "event_src.rule": "pt_siem_www_modify",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_link_remove",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "msgid": "unlinkat",
  "numfield2": 33,
  "object.account.group": "root",
  "object.account.id": "0",
  "object.account.name": "root",
  "object.fullpath": "/root/ru",
  "object.id": "273263",
  "object.name": "ru",
  "object.path": "/root/",
  "object.type": "directory",
  "reason": "Directory not empty",
  "subject.account.id": "0",
  "subject.account.name": "root",
  "subject.account.privileges": "0",
  "subject.account.session_id": "28126",
  "subject.process.cwd": "/root",
  "subject.process.fullpath": "/usr/bin/rm",
  "subject.process.id": "2295809",
  "subject.process.meta": "rm -rf /var/www/www.securitylab.ru/bitrix/cache/css /var/www/www.securitylab.ru/bitrix/cache/js",
  "subject.process.name": "rm",
  "subject.process.parent.id": "2295806",
  "subject.process.path": "/usr/bin/",
  "time": "2023-05-14T21:24:01.000Z"
}