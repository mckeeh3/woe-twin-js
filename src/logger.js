const activatedTime = Date.now();

const formatAliveTime = () => {
  const time = (Date.now() - activatedTime) / 1000.0;
  return `(${time}s)`;
};

const formatTime = () => {
  const pad = (n, s = 2) => `${new Array(s).fill(0)}${n}`.slice(-s);
  const d = new Date();
  return `${pad(d.getFullYear(), 4)}-${pad(d.getMonth())}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}.${pad(d.getMilliseconds(), 3)}`;
};

export const log = (msg) => {
  console.info(`${formatTime()} ${formatAliveTime()} - ${msg}`);
};

export default log;
