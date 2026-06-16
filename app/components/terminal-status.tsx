"use client";

import { useEffect, useState } from "react";

const messages = [
  "validating vlan segmentation",
  "monitoring firewall policy",
  "checking vpn failover",
  "reviewing security telemetry"
];

export function TerminalStatus() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % messages.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="terminal-status" aria-label="Current engineering focus">
      <span className="terminal-prompt">cn@network:~$</span>
      <span className="terminal-message" key={messages[index]}>{messages[index]}</span>
    </div>
  );
}
