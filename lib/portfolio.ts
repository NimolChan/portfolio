import type { Portfolio } from "./types";

export const portfolioData: Portfolio = {
  name: "CHAN NIMOL",
  role: "Network Infrastructure Engineer",
  tagline: "Designing secure, scalable enterprise networks.",
  contact: {
    email: "nnimolchann@gmail.com",
    phone: "+855 78 922 108",
    phoneHref: "+85578922108",
    linkedin: "nimol-chan",
    linkedinUrl: "https://www.linkedin.com/in/nimol-chan"
  },
  location: "Phnom Penh, Cambodia",
  profile:
    "Year 5 Computer Science student at the Institute of Technology of Cambodia (ITC). Passionate about network security, infrastructure design, and cybersecurity. Experienced in enterprise network architecture using FortiGate firewalls, Cisco routers, Huawei switches, IPsec VPN, SD-WAN, and VLAN segmentation. Seeking a full-time role in network infrastructure or cybersecurity.",
  skills: [
    {
      category: "Networking",
      items: "OSI/TCP-IP, IP Addressing, Subnetting, VLAN, DHCP, DNS, RIP, OSPF, Static Routing"
    },
    {
      category: "Security",
      items:
        "FortiGate NGFW, Firewall Policies, IPsec VPN, SD-WAN, IPS/IDS, Antivirus, Web Filter, DNS Filter, Application Control, NAT, High Availability (HA-FGCP)"
    },
    {
      category: "Infrastructure",
      items:
        "Huawei Switches (VLAN, VRRP, Eth-Trunk/LACP), Cisco Routers, PNETLab, VMware ESXi, VLANIF, Layer 2/3 Switching"
    },
    {
      category: "Security Tools",
      items: "Wazuh SIEM, pfSense, Suricata IDS, Nmap, Wireshark, Kali Linux, Metasploit"
    },
    {
      category: "Systems",
      items: "Linux (Bash scripting, system diagnostics), Windows Server"
    }
  ],
  projects: [
    {
      slug: "enterprise-network-infrastructure-design",
      title: "Enterprise Network Infrastructure Design",
      year: "2025-2026 | Biplan Global Co., Ltd. (Internship)",
      summary: "A secure enterprise network simulation connecting a Data Center and Branch office with HA firewalls, segmented zones, VPN redundancy, and SD-WAN monitoring.",
      description:
        "Designed and implemented a simulated secure enterprise network connecting a Data Center and Branch office in PNETLab. Deployed FortiGate firewalls in HA pairs across five security zones (WAN, Internal LAN, DMZ, Server Zone, Branch). Configured IPsec VPN dual-tunnel architecture (DPLC and INT), SD-WAN with Performance SLA monitoring, VLAN segmentation on Huawei switches, VRRP gateway redundancy, Eth-Trunk link aggregation, and comprehensive security profiles (Antivirus, Web Filter, DNS Filter, Application Control, IPS). Validated with end-to-end connectivity tests, HA failover, and security log verification.",
      scope: [
        "Built a routed Data Center and Branch topology in PNETLab.",
        "Separated WAN, Internal LAN, DMZ, Server Zone, and Branch traffic into controlled security zones.",
        "Configured dual IPsec tunnels and SD-WAN policies for transport resilience.",
        "Implemented VLAN segmentation, VRRP gateway redundancy, and Eth-Trunk/LACP aggregation."
      ],
      tools: ["FortiGate", "Huawei Switches", "Cisco Routers", "PNETLab", "IPsec VPN", "SD-WAN", "VRRP", "LACP"],
      outcomes: [
        "Validated end-to-end connectivity between segmented network zones.",
        "Confirmed HA failover behavior for firewall redundancy.",
        "Reviewed security logs to verify policy and security profile enforcement."
      ]
    },
    {
      slug: "malicious-code-spreading-analysis-defense",
      title: "Malicious Code Spreading Analysis & Defense Implementation",
      year: "2025",
      summary: "A controlled cyber-defense lab analyzing ransomware-like lateral movement and deploying monitoring, firewall, IDS, and automated blocking controls.",
      description:
        "Investigated ransomware propagation in a controlled virtual environment. Simulated lateral movement attacks using Kali Linux, Nmap, and Metasploit. Deployed defensive stack with Wazuh SIEM, pfSense firewall, and Suricata IDS. Implemented automated IP blocking based on security log analysis.",
      scope: [
        "Prepared a controlled virtual environment for malware propagation analysis.",
        "Simulated reconnaissance and lateral movement activity using offensive security tools.",
        "Deployed layered monitoring and network-defense controls.",
        "Connected log analysis to automated IP blocking response."
      ],
      tools: ["Wazuh SIEM", "pfSense", "Suricata IDS", "Kali Linux", "Nmap", "Metasploit"],
      outcomes: [
        "Improved visibility into suspicious network behavior.",
        "Detected simulated attack patterns through IDS and SIEM telemetry.",
        "Reduced manual response by automating blocking decisions from logs."
      ]
    },
    {
      slug: "linux-system-diagnostics-automation",
      title: "Linux System Diagnostics Automation",
      year: "2025",
      summary: "A Bash-based diagnostics utility for collecting Linux network, service, CPU, memory, and storage status from a menu-driven interface.",
      description:
        "Developed a Bash-based diagnostics tool to collect network interface data, CPU/memory usage, service status, and storage metrics. Reduced manual command execution through a menu-driven script interface.",
      scope: [
        "Collected network interface and IP configuration data.",
        "Displayed CPU, memory, service, and storage status from a unified menu.",
        "Reduced repeated manual command execution for Linux checks.",
        "Organized outputs for faster first-level troubleshooting."
      ],
      tools: ["Linux", "Bash", "System diagnostics", "Networking commands"],
      outcomes: [
        "Improved speed and consistency of system checks.",
        "Created a reusable script interface for operational diagnostics.",
        "Reduced command memorization during troubleshooting."
      ]
    },
    {
      slug: "network-infrastructure-dynamic-routing",
      title: "Network Infrastructure Design & Dynamic Routing",
      year: "2024",
      summary: "A multi-router network topology covering VLANs, DHCP, subnetting, router-on-a-stick, link aggregation, and RIP route convergence.",
      description:
        "Designed and configured a multi-router topology using static IP addressing, DHCP, subnetting, VLANs, router-on-a-stick, and Link Aggregation (LAG). Implemented RIP for dynamic routing and observed automatic route convergence.",
      scope: [
        "Designed a segmented multi-router lab topology.",
        "Configured VLANs, DHCP, subnetting, and router-on-a-stick inter-VLAN routing.",
        "Implemented link aggregation for improved link availability.",
        "Enabled RIP and observed automatic route convergence behavior."
      ],
      tools: ["Cisco routing", "VLAN", "DHCP", "RIP", "LAG", "Subnetting"],
      outcomes: [
        "Validated dynamic routing behavior across multiple routers.",
        "Strengthened understanding of Layer 2 and Layer 3 design.",
        "Confirmed route convergence after topology changes."
      ]
    }
  ],
  education: [
    {
      title: "Bachelor of Engineering in Computer Science",
      year: "2022-Present",
      details: [
        "Institute of Technology of Cambodia (ITC), Phnom Penh",
        "Current GPA: 3.0 | Department: Information and Communication Engineering"
      ]
    },
    {
      title: "Certificate in Cybersecurity",
      year: "2025-Present",
      details: [
        "ANT Training Center & ThinkCyber India | Funded by CBRD Fund / Ministry of Posts and Telecommunications | 100% Scholarship",
        "Focus: Cybersecurity fundamentals, network defense, threat awareness"
      ]
    },
    {
      title: "Foundation Year Certificate",
      year: "2021-2022",
      details: ["Institute of Technology of Cambodia (ITC)"]
    }
  ],
  certifications: [
    "Linux Fundamentals - ThinkCyber India / Cyberium Arena",
    "Introduction to Cybersecurity - ThinkCyber India / Cyberium Arena"
  ],
  languages: "Khmer: Native | English: Fluent"
};
