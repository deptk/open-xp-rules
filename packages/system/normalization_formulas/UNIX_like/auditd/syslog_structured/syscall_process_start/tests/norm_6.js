{
  "subject": "account",
  "action": "start",
  "object": "process",
  "status": "success",
  "category.generic": "Process",
  "category.high": "Availability Management",
  "category.low": "Control",
  "chain_id": "111980",
  "datafield1": "evil_1.sh",
  "datafield2": "root",
  "datafield3": "0755",
  "datafield4": "/usr/bin/dash",
  "event_src.category": "Operating system",
  "event_src.ip": "192.168.137.201",
  "event_src.rule": "pt_siem_execve_daemon",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_process_start",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "logon_service": "pts/1",
  "msgid": "execve",
  "numfield2": 0,
  "object.account.group": "www-data",
  "object.account.id": "33",
  "object.account.name": "www-data",
  "object.process.cmdline": "/bin/sh /var/www/evil_1.sh",
  "object.process.cwd": "/tmp",
  "object.process.fullpath": "/var/www/evil_1.sh",
  "object.process.id": "21900",
  "object.process.meta": "/bin/sh /var/www/evil_1.sh",
  "object.process.name": "evil_1.sh",
  "object.process.parent.id": "21899",
  "object.process.path": "/var/www/",
  "subject.account.id": "0",
  "subject.account.name": "root",
  "subject.account.privileges": "33",
  "subject.account.session_id": "7",
  "time": "2019-10-29T04:29:27.000Z"
}