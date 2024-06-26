{
  "subject": "process",
  "action": "assign",
  "object": "socket",
  "status": "success",
  "category.generic": "Socket",
  "category.high": "Network Management",
  "category.low": "Manipulation",
  "chain_id": "26823",
  "datafield1": "netcat",
  "event_src.category": "Operating system",
  "event_src.hostname": "debian-test",
  "event_src.rule": "pt_siem_api_listen",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_sockets",
  "importance": "low",
  "logon_service": "pts/1",
  "msgid": "listen",
  "object.account.group": "0",
  "object.account.id": "0",
  "subject.account.id": "1000",
  "subject.account.privileges": "0",
  "subject.account.session_id": "180",
  "subject.process.fullpath": "/bin/nc.traditional",
  "subject.process.id": "2182",
  "subject.process.meta": "netcat -l 1234",
  "subject.process.name": "nc.traditional",
  "subject.process.parent.id": "2096",
  "subject.process.path": "/bin/",
  "time": "2019-04-29T16:06:08.000Z"
}