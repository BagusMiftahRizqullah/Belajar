function joinedLogger(level, sep) {
  // write your code here
}

function main() {
  const firstLine = readLine().trim().split(" ");
  const level = parseInt(firstLine[0]);
  const sep = firstLine[1];
  const myLog = joinedLogger(level, sep);

  const n = parseInt(readLine().trim());
  let messages = [];
  for (let i = 0; i < n; ++i) {
    const line = readLine().trim().split(" ");
    const level = parseInt(line[0]);
    const text = line[1];
    messages.push({ level, text });
  }
  myLog(...messages);
  ws.end();
}