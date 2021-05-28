function FindProxyForURL(url, host)
{
  if ( isInNet(host, "127.0.0.0", "255.0.0.0") ||
       isInNet(host, "172.16.0.0", "255.240.0.0") ||
       isInNet(host, "10.0.0.0", "255.0.0.0") ||
       isInNet(host, "192.168.0.0", "255.255.0.0") )
    return "DIRECT"
  else
    return "PROXY localhost:3128";
}