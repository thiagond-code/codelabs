const os = require("node:os");

function getNetworkData() {
    const interfaces = os.networkInterfaces()

    const networkData = {
        address: interfaces.eth0[0].cidr,
        netMask: interfaces.eth0[0].netmask,
        ipFamily: interfaces.eth0[0].family,
        macNum: interfaces.eth0[0].mac     
    }

    return networkData
}

function getUptime() {
  const totalSeconds = Math.floor(os.uptime());

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  console.log({
    uptime: `${hours}h ${minutes}m ${seconds}s`,
  });
}

function getSystemData() {
    const cpu = os.cpus()[0]
    const networkData = getNetworkData()

  const systemData = {
    platform: os.type(),
    architecture: os.arch(),
    version: os.release(),
    cpus: {
      model: cpu.model,
      speed: cpu.speed || "Unknown",
    },
    memory: {
      freeMemory: `${Math.floor(os.freemem() / 1024 ** 3)} GB`,
      totalMemory: `${Math.floor(os.totalmem() / 1024 ** 3)} GB`,
    },
    network: {
      address: networkData.address,
      family: networkData.ipFamily,
      netMask: networkData.netMask,
      mac: networkData.macNum,
    },
  };

  console.log(systemData);

  setInterval(getUptime, 0.5 * 60 * 60 * 1000);
}

getSystemData();