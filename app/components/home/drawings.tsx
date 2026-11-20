/**
 * The home page's drawings, from the "27stack site concepts" design. Each color is a class (f-* a
 * fill, s-* a stroke) that home.css maps to the site's tokens, so one drawing serves both themes.
 */

/** Computing swinging between theirs and yours, from the 1960s to 2027. */
export function SwingChart() {
  return (
    <svg className="drawing" role="img" aria-label="A line swinging between theirs and yours: rented in the 1960s, owned in the 1980s, rented again in the 2000s, and a dashed line swinging back to owned in 2027." viewBox="0 0 1136 260" preserveAspectRatio="xMinYMid meet">
      <path className="f-none s-line" d="M70 50L1136 50" strokeWidth="2" />
      <path className="f-none s-line" d="M70 210L1136 210" strokeWidth="2" />
      <text className="f-orange" x="0" y="55" fontSize="16" fontWeight="800">Theirs</text>
      <text className="f-cobalt" x="0" y="215" fontSize="16" fontWeight="800">Yours</text>
      <path className="f-none s-ink" d="M160 50C295 50 295 210 430 210S565 50 700 50" strokeWidth="5" />
      <path className="f-none s-cobalt" d="M700 50C835 50 835 210 970 210" strokeWidth="5" strokeDasharray="4 12" />
      <circle className="f-orange" cx="160" cy="50" r="13" />
      <circle className="f-cobalt" cx="430" cy="210" r="13" />
      <circle className="f-orange" cx="700" cy="50" r="13" />
      <circle className="f-bg s-cobalt" cx="970" cy="210" r="13" strokeWidth="5" />
      <text className="f-ink" x="160" y="24" fontSize="16" fontWeight="700" textAnchor="middle">1960s · rented by the minute</text>
      <text className="f-ink" x="430" y="246" fontSize="16" fontWeight="700" textAnchor="middle">1980s · the box on your desk</text>
      <text className="f-ink" x="700" y="24" fontSize="16" fontWeight="700" textAnchor="middle">2000s · rented by the seat</text>
      <text className="f-cobalt" x="970" y="246" fontSize="16" fontWeight="700" textAnchor="middle">2027 · a cloud of your own</text>
    </svg>
  );
}

/** Exhibit 1: a mainframe room, and the terminal you rented time through. */
export function MainframeRoom() {
  return (
    <svg className="drawing" role="img" aria-label="An isometric line drawing of a mainframe room: three tall cabinets with tape reels, a console, a small terminal wired to it, and a clock." viewBox="92 21 426 373">
      <polygon className="f-none s-ground" points="270.0,160.0 486.5,285.0 322.0,380.0 105.5,255.0" strokeWidth="2" strokeDasharray="2 8" />
      <polygon className="f-bg s-ink" points="270.0,35.0 322.0,65.0 278.7,90.0 226.7,60.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="226.7,60.0 278.7,90.0 278.7,240.0 226.7,210.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="322.0,65.0 278.7,90.0 278.7,240.0 322.0,215.0" fillOpacity="0.84" strokeWidth="2.5" />
      <g transform="matrix(0.866 0.5 0 -1 226.7 210.0)">
        <circle className="f-ink" cx="18" cy="115" r="11" />
        <circle className="f-ink" cx="42" cy="115" r="11" />
        <circle className="f-bg" cx="18" cy="115" r="4" />
        <circle className="f-bg" cx="42" cy="115" r="4" />
        <rect className="f-ink" x="10" y="45" width="40" height="26" rx="3" />
        <circle className="f-orange" cx="18" cy="58" r="3" />
        <circle className="f-orange" cx="30" cy="58" r="3" />
        <circle className="f-orange" cx="42" cy="58" r="3" />
      </g>
      <polygon className="f-bg s-ink" points="330.6,70.0 382.6,100.0 339.3,125.0 287.3,95.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="287.3,95.0 339.3,125.0 339.3,275.0 287.3,245.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="382.6,100.0 339.3,125.0 339.3,275.0 382.6,250.0" fillOpacity="0.84" strokeWidth="2.5" />
      <g transform="matrix(0.866 0.5 0 -1 226.7 210.0)">
        <circle className="f-ink" cx="88" cy="115" r="11" />
        <circle className="f-ink" cx="112" cy="115" r="11" />
        <circle className="f-bg" cx="88" cy="115" r="4" />
        <circle className="f-bg" cx="112" cy="115" r="4" />
        <rect className="f-ink" x="80" y="45" width="40" height="26" rx="3" />
        <circle className="f-orange" cx="88" cy="58" r="3" />
        <circle className="f-orange" cx="100" cy="58" r="3" />
        <circle className="f-orange" cx="112" cy="58" r="3" />
      </g>
      <polygon className="f-bg s-ink" points="391.2,105.0 443.2,135.0 399.9,160.0 347.9,130.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="347.9,130.0 399.9,160.0 399.9,310.0 347.9,280.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="443.2,135.0 399.9,160.0 399.9,310.0 443.2,285.0" fillOpacity="0.84" strokeWidth="2.5" />
      <g transform="matrix(0.866 0.5 0 -1 226.7 210.0)">
        <circle className="f-ink" cx="158" cy="115" r="11" />
        <circle className="f-ink" cx="182" cy="115" r="11" />
        <circle className="f-bg" cx="158" cy="115" r="4" />
        <circle className="f-bg" cx="182" cy="115" r="4" />
        <rect className="f-ink" x="150" y="45" width="40" height="26" rx="3" />
        <circle className="f-orange" cx="158" cy="58" r="3" />
        <circle className="f-orange" cx="170" cy="58" r="3" />
        <circle className="f-orange" cx="182" cy="58" r="3" />
      </g>
      <polygon className="f-bg s-ink" points="222.4,204.5 317.6,259.5 278.7,282.0 183.4,227.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="183.4,227.0 278.7,282.0 278.7,330.0 183.4,275.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="317.6,259.5 278.7,282.0 278.7,330.0 317.6,307.5" fillOpacity="0.84" strokeWidth="2.5" />
      <g transform="matrix(0.866 0.5 0 -1 148.8 255.0)">
        <circle className="f-ink" cx="54" cy="14" r="3" />
        <circle className="f-orange" cx="54" cy="26" r="3" />
        <circle className="f-orange" cx="66" cy="14" r="3" />
        <circle className="f-ink" cx="66" cy="26" r="3" />
        <circle className="f-ink" cx="78" cy="14" r="3" />
        <circle className="f-orange" cx="78" cy="26" r="3" />
        <circle className="f-orange" cx="90" cy="14" r="3" />
        <circle className="f-ink" cx="90" cy="26" r="3" />
        <circle className="f-ink" cx="102" cy="14" r="3" />
        <circle className="f-orange" cx="102" cy="26" r="3" />
        <circle className="f-orange" cx="114" cy="14" r="3" />
        <circle className="f-ink" cx="114" cy="26" r="3" />
        <circle className="f-ink" cx="126" cy="14" r="3" />
        <circle className="f-orange" cx="126" cy="26" r="3" />
        <circle className="f-orange" cx="138" cy="14" r="3" />
        <circle className="f-ink" cx="138" cy="26" r="3" />
      </g>
      <path className="f-none s-orange" d="M297.7 319.0L306.4 336.0" strokeWidth="2.5" strokeDasharray="4 6" />
      <polygon className="f-bg s-ink" points="322.0,291.0 356.6,311.0 325.4,329.0 290.8,309.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="290.8,309.0 325.4,329.0 325.4,363.0 290.8,343.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="356.6,311.0 325.4,329.0 325.4,363.0 356.6,345.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="322.0,263.0 353.1,281.0 325.4,297.0 294.2,279.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="294.2,279.0 325.4,297.0 325.4,327.0 294.2,309.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="353.1,281.0 325.4,297.0 325.4,327.0 353.1,311.0" fillOpacity="0.84" strokeWidth="2.5" />
      <g transform="matrix(0.866 0.5 0 -1 145.3 257.0)">
        <rect className="f-ink" x="177" y="39" width="26" height="20" rx="2" />
        <rect className="f-orange" x="181" y="50" width="12" height="3" />
      </g>
      <circle className="f-none s-orange" cx="474" cy="88" r="26" strokeWidth="4" />
      <path className="f-none s-orange" d="M474 88L474 72" strokeWidth="4" />
      <path className="f-none s-orange" d="M474 88L486 94" strokeWidth="4" />
    </svg>
  );
}

/** Exhibit 2: a personal computer on your own desk. */
export function DeskComputer() {
  return (
    <svg className="drawing" role="img" aria-label="An isometric line drawing of a personal computer on a desk, with a keyboard and two floppy disks." viewBox="99 40 392 304">
      <polygon className="f-bg s-ink" points="260.0,110.0 476.5,235.0 329.3,320.0 112.8,195.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="112.8,195.0 329.3,320.0 329.3,330.0 112.8,205.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="476.5,235.0 329.3,320.0 329.3,330.0 476.5,245.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="273.0,112.5 385.6,177.5 316.3,217.5 203.7,152.5" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="203.7,152.5 316.3,217.5 316.3,247.5 203.7,182.5" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="385.6,177.5 316.3,217.5 316.3,247.5 385.6,207.5" fillOpacity="0.84" strokeWidth="2.5" />
      <g transform="matrix(0.866 0.5 0 -1 169.1 172.5)">
        <rect className="f-ink" x="110" y="22" width="48" height="5" rx="2" />
        <circle className="f-cobalt" cx="54" cy="25" r="3.5" />
      </g>
      <polygon className="f-bg s-ink" points="279.9,54.5 361.3,101.5 309.4,131.5 228.0,84.5" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="228.0,84.5 309.4,131.5 309.4,203.5 228.0,156.5" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="361.3,101.5 309.4,131.5 309.4,203.5 361.3,173.5" fillOpacity="0.84" strokeWidth="2.5" />
      <g transform="matrix(0.866 0.5 0 -1 177.7 167.5)">
        <rect className="f-ink" x="66" y="50" width="78" height="54" rx="4" />
        <rect className="f-bg" x="72" y="90" width="34" height="4" />
        <rect className="f-bg" x="72" y="80" width="50" height="4" />
        <rect className="f-bg" x="72" y="70" width="22" height="4" />
        <rect className="f-cobalt" x="98" y="70" width="7" height="4" />
      </g>
      <polygon className="f-cobalt s-ink" points="389.9,222.0 426.3,243.0 389.9,264.0 353.5,243.0" strokeWidth="2.5" />
      <polygon className="f-cobalt s-ink" points="353.5,243.0 389.9,264.0 389.9,267.0 353.5,246.0" strokeWidth="2.5" />
      <polygon className="f-cobalt s-ink" points="426.3,243.0 389.9,264.0 389.9,267.0 426.3,246.0" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="343.1,255.0 379.5,276.0 343.1,297.0 306.8,276.0" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="306.8,276.0 343.1,297.0 343.1,300.0 306.8,279.0" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="379.5,276.0 343.1,297.0 343.1,300.0 379.5,279.0" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="193.3,187.5 297.2,247.5 266.1,265.5 162.1,205.5" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="162.1,205.5 266.1,265.5 266.1,271.5 162.1,211.5" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="297.2,247.5 266.1,265.5 266.1,271.5 297.2,253.5" fillOpacity="0.84" strokeWidth="2.5" />
    </svg>
  );
}

/** Exhibit 3: the makers' clouds overhead, holding your data. */
export function RentedCloud() {
  return (
    <svg className="drawing" role="img" aria-label="Three makers’ platforms float overhead, each on its own small cloud, each holding a server, an app and a piece of your data. Arrows rise from your nearly empty platform on the ground up to each one." viewBox="10 61 588 437">
      <polygon className="f-none s-ground" points="300.0,205.0 360.6,240.0 300.0,275.0 239.4,240.0" strokeWidth="2" strokeDasharray="3 5" />
      <path className="f-none s-ground" d="M300.0 240.0L300.0 160.0" strokeWidth="2.5" strokeDasharray="2 6" />
      <polygon className="f-none s-ground" points="386.6,255.0 447.2,290.0 386.6,325.0 326.0,290.0" strokeWidth="2" strokeDasharray="3 5" />
      <path className="f-none s-ground" d="M386.6 290.0L386.6 210.0" strokeWidth="2.5" strokeDasharray="2 6" />
      <polygon className="f-none s-ground" points="473.2,305.0 533.8,340.0 473.2,375.0 412.6,340.0" strokeWidth="2" strokeDasharray="3 5" />
      <path className="f-none s-ground" d="M473.2 340.0L473.2 260.0" strokeWidth="2.5" strokeDasharray="2 6" />
      <circle className="f-tile s-ink" cx="260.0" cy="182.0" r="30" strokeWidth="5" />
      <circle className="f-tile s-ink" cx="300.0" cy="194.0" r="36" strokeWidth="5" />
      <circle className="f-tile s-ink" cx="340.0" cy="182.0" r="30" strokeWidth="5" />
      <rect className="f-tile s-ink" x="242.0" y="174.0" width="116" height="40" rx="20" strokeWidth="5" />
      <circle className="f-tile" cx="260.0" cy="182.0" r="30" />
      <circle className="f-tile" cx="300.0" cy="194.0" r="36" />
      <circle className="f-tile" cx="340.0" cy="182.0" r="30" />
      <rect className="f-tile" x="242.0" y="174.0" width="116" height="40" rx="20" />
      <polygon className="f-bg s-ink" points="300.0,117.0 360.6,152.0 300.0,187.0 239.4,152.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="239.4,152.0 300.0,187.0 300.0,195.0 239.4,160.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="360.6,152.0 300.0,187.0 300.0,195.0 360.6,160.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="300.0,75.0 320.8,87.0 300.0,99.0 279.2,87.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="279.2,87.0 300.0,99.0 300.0,149.0 279.2,137.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="320.8,87.0 300.0,99.0 300.0,149.0 320.8,137.0" fillOpacity="0.84" strokeWidth="2.5" />
      <g transform="matrix(0.866 0.5 0 -1 272.3 221.0)">
        <circle className="f-ink" cx="20" cy="126" r="3.2" />
        <circle className="f-orange" cx="20" cy="114" r="3.2" />
      </g>
      <polygon className="f-cobalt s-ink" points="327.7,127.0 341.6,135.0 327.7,143.0 313.9,135.0" strokeWidth="2" />
      <polygon className="f-cobalt s-ink" points="313.9,135.0 327.7,143.0 327.7,159.0 313.9,151.0" strokeWidth="2" />
      <polygon className="f-cobalt s-ink" points="341.6,135.0 327.7,143.0 327.7,159.0 341.6,151.0" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="298.3,144.0 312.1,152.0 298.3,160.0 284.4,152.0" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="284.4,152.0 298.3,160.0 298.3,176.0 284.4,168.0" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="312.1,152.0 298.3,160.0 298.3,176.0 312.1,168.0" strokeWidth="2" />
      <circle className="f-tile s-ink" cx="346.6" cy="232.0" r="30" strokeWidth="5" />
      <circle className="f-tile s-ink" cx="386.6" cy="244.0" r="36" strokeWidth="5" />
      <circle className="f-tile s-ink" cx="426.6" cy="232.0" r="30" strokeWidth="5" />
      <rect className="f-tile s-ink" x="328.6" y="224.0" width="116" height="40" rx="20" strokeWidth="5" />
      <circle className="f-tile" cx="346.6" cy="232.0" r="30" />
      <circle className="f-tile" cx="386.6" cy="244.0" r="36" />
      <circle className="f-tile" cx="426.6" cy="232.0" r="30" />
      <rect className="f-tile" x="328.6" y="224.0" width="116" height="40" rx="20" />
      <polygon className="f-bg s-ink" points="386.6,167.0 447.2,202.0 386.6,237.0 326.0,202.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="326.0,202.0 386.6,237.0 386.6,245.0 326.0,210.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="447.2,202.0 386.6,237.0 386.6,245.0 447.2,210.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="386.6,125.0 407.4,137.0 386.6,149.0 365.8,137.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="365.8,137.0 386.6,149.0 386.6,199.0 365.8,187.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="407.4,137.0 386.6,149.0 386.6,199.0 407.4,187.0" fillOpacity="0.84" strokeWidth="2.5" />
      <g transform="matrix(0.866 0.5 0 -1 272.3 221.0)">
        <circle className="f-ink" cx="120" cy="126" r="3.2" />
        <circle className="f-orange" cx="120" cy="114" r="3.2" />
      </g>
      <polygon className="f-cobalt-soft s-ink" points="414.3,177.0 428.2,185.0 414.3,193.0 400.5,185.0" strokeWidth="2" />
      <polygon className="f-cobalt-soft s-ink" points="400.5,185.0 414.3,193.0 414.3,209.0 400.5,201.0" strokeWidth="2" />
      <polygon className="f-cobalt-soft s-ink" points="428.2,185.0 414.3,193.0 414.3,209.0 428.2,201.0" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="384.9,194.0 398.7,202.0 384.9,210.0 371.0,202.0" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="371.0,202.0 384.9,210.0 384.9,226.0 371.0,218.0" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="398.7,202.0 384.9,210.0 384.9,226.0 398.7,218.0" strokeWidth="2" />
      <circle className="f-tile s-ink" cx="433.2" cy="282.0" r="30" strokeWidth="5" />
      <circle className="f-tile s-ink" cx="473.2" cy="294.0" r="36" strokeWidth="5" />
      <circle className="f-tile s-ink" cx="513.2" cy="282.0" r="30" strokeWidth="5" />
      <rect className="f-tile s-ink" x="415.2" y="274.0" width="116" height="40" rx="20" strokeWidth="5" />
      <circle className="f-tile" cx="433.2" cy="282.0" r="30" />
      <circle className="f-tile" cx="473.2" cy="294.0" r="36" />
      <circle className="f-tile" cx="513.2" cy="282.0" r="30" />
      <rect className="f-tile" x="415.2" y="274.0" width="116" height="40" rx="20" />
      <polygon className="f-bg s-ink" points="473.2,217.0 533.8,252.0 473.2,287.0 412.6,252.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="412.6,252.0 473.2,287.0 473.2,295.0 412.6,260.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="533.8,252.0 473.2,287.0 473.2,295.0 533.8,260.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="473.2,175.0 494.0,187.0 473.2,199.0 452.4,187.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="452.4,187.0 473.2,199.0 473.2,249.0 452.4,237.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="494.0,187.0 473.2,199.0 473.2,249.0 494.0,237.0" fillOpacity="0.84" strokeWidth="2.5" />
      <g transform="matrix(0.866 0.5 0 -1 272.3 221.0)">
        <circle className="f-ink" cx="220" cy="126" r="3.2" />
        <circle className="f-orange" cx="220" cy="114" r="3.2" />
      </g>
      <polygon className="f-bg s-ink" points="500.9,227.0 514.8,235.0 500.9,243.0 487.1,235.0" strokeWidth="2" />
      <polygon className="f-bg s-ink" points="487.1,235.0 500.9,243.0 500.9,259.0 487.1,251.0" strokeWidth="2" />
      <polygon className="f-bg s-ink" points="514.8,235.0 500.9,243.0 500.9,259.0 514.8,251.0" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="471.5,244.0 485.3,252.0 471.5,260.0 457.6,252.0" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="457.6,252.0 471.5,260.0 471.5,276.0 457.6,268.0" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="485.3,252.0 471.5,260.0 471.5,276.0 485.3,268.0" strokeWidth="2" />
      <path className="f-none s-orange" d="M217.7 319.5L269.7 229.5" strokeWidth="2.5" strokeDasharray="5 8" />
      <path className="f-none s-orange" d="M269.7 229.5L269.9 241.5" strokeWidth="2.5" />
      <path className="f-none s-orange" d="M269.7 229.5L259.2 235.3" strokeWidth="2.5" />
      <rect className="f-ink s-ink" x="237.7" y="268.5" width="12" height="12" rx="2" strokeWidth="2" />
      <path className="f-none s-orange" d="M256.7 342.0L356.3 279.5" strokeWidth="2.5" strokeDasharray="5 8" />
      <path className="f-none s-orange" d="M356.3 279.5L350.9 290.2" strokeWidth="2.5" />
      <path className="f-none s-orange" d="M356.3 279.5L344.3 279.7" strokeWidth="2.5" />
      <rect className="f-ink s-ink" x="300.5" y="304.8" width="12" height="12" rx="2" strokeWidth="2" />
      <path className="f-none s-orange" d="M295.7 364.5L442.9 329.5" strokeWidth="2.5" strokeDasharray="5 8" />
      <path className="f-none s-orange" d="M442.9 329.5L434.3 337.9" strokeWidth="2.5" />
      <path className="f-none s-orange" d="M442.9 329.5L431.5 325.9" strokeWidth="2.5" />
      <rect className="f-ink s-ink" x="363.3" y="341.0" width="12" height="12" rx="2" strokeWidth="2" />
      <polygon className="f-bg s-ink" points="161.4,287.0 326.0,382.0 239.4,432.0 74.8,337.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="74.8,337.0 239.4,432.0 239.4,440.0 74.8,345.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="326.0,382.0 239.4,432.0 239.4,440.0 326.0,390.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-none s-ink" points="199.5,319.0 218.6,330.0 199.5,341.0 180.5,330.0" strokeWidth="2" strokeDasharray="3 4" />
      <polygon className="f-none s-ink" points="238.5,341.5 257.6,352.5 238.5,363.5 219.5,352.5" strokeWidth="2" strokeDasharray="3 4" />
      <polygon className="f-none s-ink" points="277.5,364.0 296.5,375.0 277.5,386.0 258.4,375.0" strokeWidth="2" strokeDasharray="3 4" />
      <polygon className="f-bg s-ink" points="125.1,292.0 156.2,310.0 125.1,328.0 93.9,310.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="93.9,310.0 125.1,328.0 125.1,352.0 93.9,334.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="156.2,310.0 125.1,328.0 125.1,352.0 156.2,334.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="125.1,292.0 156.2,310.0 140.7,303.0 109.5,285.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="93.9,310.0 125.1,328.0 140.7,303.0 109.5,285.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="156.2,310.0 125.1,328.0 140.7,303.0" fillOpacity="0.84" strokeWidth="2.5" />
      <text className="f-ink" x="580" y="110" fontSize="16" fontWeight="800" textAnchor="end">THE CLOUD</text>
      <text className="f-text" x="580" y="129" fontSize="13" fontWeight="600" textAnchor="end">Up there, and not yours.</text>
      <text className="f-ink" x="228" y="272" fontSize="14" fontWeight="700" textAnchor="end">your data</text>
      <text className="f-ink" x="150" y="478" fontSize="15" fontWeight="600" textAnchor="middle">You: nothing of yours lives here</text>
    </svg>
  );
}

/** Exhibit 4: the makers' apps come down to a cloud of your own. */
export function OwnedCloud() {
  return (
    <svg className="drawing" role="img" aria-label="Three makers each keep a faint outline of their app. A solid copy of each travels down an arrow to your platform on the ground, which holds a house, one server, the three apps and your data." viewBox="-6 110 604 384">
      <polygon className="f-none s-ink" points="300.0,142.0 360.6,177.0 300.0,212.0 239.4,177.0" strokeWidth="2.5" strokeDasharray="5 7" />
      <polygon className="f-none s-ink" points="239.4,177.0 300.0,212.0 300.0,220.0 239.4,185.0" strokeWidth="2.5" strokeDasharray="5 7" />
      <polygon className="f-none s-ink" points="360.6,177.0 300.0,212.0 300.0,220.0 360.6,185.0" strokeWidth="2.5" strokeDasharray="5 7" />
      <polygon className="f-cobalt s-ink" points="300.0,150.0 315.6,159.0 300.0,168.0 284.4,159.0" fillOpacity="0.25" strokeWidth="2" strokeDasharray="3 4" />
      <polygon className="f-cobalt s-ink" points="284.4,159.0 300.0,168.0 300.0,186.0 284.4,177.0" fillOpacity="0.25" strokeWidth="2" strokeDasharray="3 4" />
      <polygon className="f-cobalt s-ink" points="315.6,159.0 300.0,168.0 300.0,186.0 315.6,177.0" fillOpacity="0.25" strokeWidth="2" strokeDasharray="3 4" />
      <polygon className="f-none s-ink" points="386.6,192.0 447.2,227.0 386.6,262.0 326.0,227.0" strokeWidth="2.5" strokeDasharray="5 7" />
      <polygon className="f-none s-ink" points="326.0,227.0 386.6,262.0 386.6,270.0 326.0,235.0" strokeWidth="2.5" strokeDasharray="5 7" />
      <polygon className="f-none s-ink" points="447.2,227.0 386.6,262.0 386.6,270.0 447.2,235.0" strokeWidth="2.5" strokeDasharray="5 7" />
      <polygon className="f-cobalt-soft s-ink" points="386.6,200.0 402.2,209.0 386.6,218.0 371.0,209.0" fillOpacity="0.25" strokeWidth="2" strokeDasharray="3 4" />
      <polygon className="f-cobalt-soft s-ink" points="371.0,209.0 386.6,218.0 386.6,236.0 371.0,227.0" fillOpacity="0.25" strokeWidth="2" strokeDasharray="3 4" />
      <polygon className="f-cobalt-soft s-ink" points="402.2,209.0 386.6,218.0 386.6,236.0 402.2,227.0" fillOpacity="0.25" strokeWidth="2" strokeDasharray="3 4" />
      <polygon className="f-none s-ink" points="473.2,242.0 533.8,277.0 473.2,312.0 412.6,277.0" strokeWidth="2.5" strokeDasharray="5 7" />
      <polygon className="f-none s-ink" points="412.6,277.0 473.2,312.0 473.2,320.0 412.6,285.0" strokeWidth="2.5" strokeDasharray="5 7" />
      <polygon className="f-none s-ink" points="533.8,277.0 473.2,312.0 473.2,320.0 533.8,285.0" strokeWidth="2.5" strokeDasharray="5 7" />
      <polygon className="f-bg s-ink" points="473.2,250.0 488.8,259.0 473.2,268.0 457.6,259.0" fillOpacity="0.25" strokeWidth="2" strokeDasharray="3 4" />
      <polygon className="f-bg s-ink" points="457.6,259.0 473.2,268.0 473.2,286.0 457.6,277.0" fillOpacity="0.25" strokeWidth="2" strokeDasharray="3 4" />
      <polygon className="f-bg s-ink" points="488.8,259.0 473.2,268.0 473.2,286.0 488.8,277.0" fillOpacity="0.25" strokeWidth="2" strokeDasharray="3 4" />
      <circle className="f-tile s-ink" cx="125" cy="299" r="40" strokeWidth="5" />
      <circle className="f-tile s-ink" cx="174" cy="327.5" r="40" strokeWidth="5" />
      <circle className="f-tile s-ink" cx="224" cy="356" r="40" strokeWidth="5" />
      <circle className="f-tile s-ink" cx="68" cy="337" r="30" strokeWidth="5" />
      <circle className="f-tile s-ink" cx="118" cy="372" r="38" strokeWidth="5" />
      <circle className="f-tile s-ink" cx="170" cy="398" r="40" strokeWidth="5" />
      <circle className="f-tile s-ink" cx="215" cy="412" r="38" strokeWidth="5" />
      <circle className="f-tile s-ink" cx="262" cy="396" r="34" strokeWidth="5" />
      <circle className="f-tile s-ink" cx="296" cy="362" r="28" strokeWidth="5" />
      <circle className="f-tile" cx="125" cy="299" r="40" />
      <circle className="f-tile" cx="174" cy="327.5" r="40" />
      <circle className="f-tile" cx="224" cy="356" r="40" />
      <circle className="f-tile" cx="68" cy="337" r="30" />
      <circle className="f-tile" cx="118" cy="372" r="38" />
      <circle className="f-tile" cx="170" cy="398" r="40" />
      <circle className="f-tile" cx="215" cy="412" r="38" />
      <circle className="f-tile" cx="262" cy="396" r="34" />
      <circle className="f-tile" cx="296" cy="362" r="28" />
      <polygon className="f-bg s-ink" points="135.5,247.0 300.0,342.0 213.4,392.0 48.9,297.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="48.9,297.0 213.4,392.0 213.4,400.0 48.9,305.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="300.0,342.0 213.4,392.0 213.4,400.0 300.0,350.0" fillOpacity="0.84" strokeWidth="2.5" />
      <path className="f-none s-cobalt" d="M269.7 198.5L191.8 279.5" strokeWidth="2.5" strokeDasharray="5 8" />
      <path className="f-none s-cobalt" d="M191.8 279.5L194.5 267.8" strokeWidth="2.5" />
      <path className="f-none s-cobalt" d="M191.8 279.5L203.4 276.4" strokeWidth="2.5" />
      <polygon className="f-cobalt s-ink" points="230.7,221.0 241.1,227.0 230.7,233.0 220.3,227.0" strokeWidth="2" />
      <polygon className="f-cobalt s-ink" points="220.3,227.0 230.7,233.0 230.7,245.0 220.3,239.0" strokeWidth="2" />
      <polygon className="f-cobalt s-ink" points="241.1,227.0 230.7,233.0 230.7,245.0 241.1,239.0" strokeWidth="2" />
      <path className="f-none s-cobalt" d="M356.3 248.5L230.7 302.0" strokeWidth="2.5" strokeDasharray="5 8" />
      <path className="f-none s-cobalt" d="M230.7 302.0L237.7 292.3" strokeWidth="2.5" />
      <path className="f-none s-cobalt" d="M230.7 302.0L242.6 303.7" strokeWidth="2.5" />
      <polygon className="f-cobalt-soft s-ink" points="293.5,257.2 303.9,263.2 293.5,269.2 283.1,263.2" strokeWidth="2" />
      <polygon className="f-cobalt-soft s-ink" points="283.1,263.2 293.5,269.2 293.5,281.2 283.1,275.2" strokeWidth="2" />
      <polygon className="f-cobalt-soft s-ink" points="303.9,263.2 293.5,269.2 293.5,281.2 303.9,275.2" strokeWidth="2" />
      <path className="f-none s-cobalt" d="M442.9 298.5L269.7 324.5" strokeWidth="2.5" strokeDasharray="5 8" />
      <path className="f-none s-cobalt" d="M269.7 324.5L279.0 316.9" strokeWidth="2.5" />
      <path className="f-none s-cobalt" d="M269.7 324.5L280.8 329.1" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="356.3,293.5 366.7,299.5 356.3,305.5 345.9,299.5" strokeWidth="2" />
      <polygon className="f-bg s-ink" points="345.9,299.5 356.3,305.5 356.3,317.5 345.9,311.5" strokeWidth="2" />
      <polygon className="f-bg s-ink" points="366.7,299.5 356.3,305.5 356.3,317.5 366.7,311.5" strokeWidth="2" />
      <polygon className="f-cobalt s-ink" points="173.6,263.0 189.2,272.0 173.6,281.0 158.0,272.0" strokeWidth="2" />
      <polygon className="f-cobalt s-ink" points="158.0,272.0 173.6,281.0 173.6,299.0 158.0,290.0" strokeWidth="2" />
      <polygon className="f-cobalt s-ink" points="189.2,272.0 173.6,281.0 173.6,299.0 189.2,290.0" strokeWidth="2" />
      <polygon className="f-cobalt-soft s-ink" points="212.5,285.5 228.1,294.5 212.5,303.5 196.9,294.5" strokeWidth="2" />
      <polygon className="f-cobalt-soft s-ink" points="196.9,294.5 212.5,303.5 212.5,321.5 196.9,312.5" strokeWidth="2" />
      <polygon className="f-cobalt-soft s-ink" points="228.1,294.5 212.5,303.5 212.5,321.5 228.1,312.5" strokeWidth="2" />
      <polygon className="f-bg s-ink" points="251.5,308.0 267.1,317.0 251.5,326.0 235.9,317.0" strokeWidth="2" />
      <polygon className="f-bg s-ink" points="235.9,317.0 251.5,326.0 251.5,344.0 235.9,335.0" strokeWidth="2" />
      <polygon className="f-bg s-ink" points="267.1,317.0 251.5,326.0 251.5,344.0 267.1,335.0" strokeWidth="2" />
      <polygon className="f-bg s-ink" points="99.1,252.0 130.3,270.0 99.1,288.0 67.9,270.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="67.9,270.0 99.1,288.0 99.1,312.0 67.9,294.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="130.3,270.0 99.1,288.0 99.1,312.0 130.3,294.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="99.1,252.0 130.3,270.0 114.7,263.0 83.5,245.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="67.9,270.0 99.1,288.0 114.7,263.0 83.5,245.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="130.3,270.0 99.1,288.0 114.7,263.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="130.3,258.0 151.0,270.0 130.3,282.0 109.5,270.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="109.5,270.0 130.3,282.0 130.3,326.0 109.5,314.0" fillOpacity="0.84" strokeWidth="2.5" />
      <polygon className="f-bg s-ink" points="151.0,270.0 130.3,282.0 130.3,326.0 151.0,314.0" fillOpacity="0.84" strokeWidth="2.5" />
      <g transform="matrix(0.866 0.5 0 -1 55.8 291.0)">
        <circle className="f-ink" cx="74" cy="40" r="3.2" />
        <circle className="f-cobalt" cx="74" cy="28" r="3.2" />
      </g>
      <polygon className="f-ink s-ink" points="151.0,319.0 164.0,326.5 151.0,334.0 138.1,326.5" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="138.1,326.5 151.0,334.0 151.0,349.0 138.1,341.5" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="164.0,326.5 151.0,334.0 151.0,349.0 164.0,341.5" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="168.4,329.0 181.4,336.5 168.4,344.0 155.4,336.5" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="155.4,336.5 168.4,344.0 168.4,359.0 155.4,351.5" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="181.4,336.5 168.4,344.0 168.4,359.0 181.4,351.5" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="185.7,339.0 198.7,346.5 185.7,354.0 172.7,346.5" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="172.7,346.5 185.7,354.0 185.7,369.0 172.7,361.5" strokeWidth="2" />
      <polygon className="f-ink s-ink" points="198.7,346.5 185.7,354.0 185.7,369.0 198.7,361.5" strokeWidth="2" />
      <text className="f-ink" x="580" y="140" fontSize="16" fontWeight="800" textAnchor="end">The makers</text>
      <text className="f-text" x="580" y="159" fontSize="13" fontWeight="600" textAnchor="end">still build the apps</text>
      <text className="f-ink" x="184" y="474" fontSize="15" fontWeight="600" textAnchor="middle">You: your own cloud, with your apps and your data</text>
    </svg>
  );
}
