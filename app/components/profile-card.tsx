import type { Portfolio } from "../../lib/types";

export function ProfileCard({ data }: { data: Portfolio }) {
  return (
    <aside className="profile-card" aria-label="Profile summary">
      <div className="portrait">
        <img src="/profile.svg" alt="Chan Nimol profile" />
        <span className="signal-line one" aria-hidden="true" />
        <span className="signal-line two" aria-hidden="true" />
      </div>
      <div className="profile-card-body">
        <p className="eyebrow">Network Infrastructure</p>
        <h2>{data.name}</h2>
        <p>{data.location}</p>
      </div>
      <dl className="facts-list">
        <div>
          <dt>Focus</dt>
          <dd>Secure enterprise networks</dd>
        </div>
        <div>
          <dt>Core Stack</dt>
          <dd>FortiGate, Cisco, Huawei</dd>
        </div>
        <div>
          <dt>Availability</dt>
          <dd>Full-time opportunities</dd>
        </div>
      </dl>
    </aside>
  );
}
