// LearnFPA — lesson content
// Sprint 1: Week 1. Sprint 2: Weeks 2–6. Weeks 7–12 built next sprint.

window.LESSONS_DATA = [

  // ─────────────────────────────────────────
  // WEEK 1 — Full content
  // ─────────────────────────────────────────
  {
    week: 1,
    title: 'What is FP&A?',
    desc: 'Vocabulary, the FP&A calendar, and how it differs from accounting',
    content: `
      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 1 — The big shift</p>
        <div class="compare-grid">
          <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.2rem">
            <div style="font-size:11px;font-weight:500;color:var(--text-muted);margin-bottom:8px;letter-spacing:.4px">YOUR WORLD — ACCOUNTING</div>
            <div style="font-size:15px;font-weight:500;margin-bottom:12px">What happened?</div>
            <div style="display:flex;flex-direction:column;gap:7px">
              <div style="font-size:12px;color:var(--text-muted);padding-left:10px;border-left:2px solid var(--border-strong)">Records history accurately</div>
              <div style="font-size:12px;color:var(--text-muted);padding-left:10px;border-left:2px solid var(--border-strong)">Monthly close &amp; IFRS compliance</div>
              <div style="font-size:12px;color:var(--text-muted);padding-left:10px;border-left:2px solid var(--border-strong)">Answers: "What did we earn?"</div>
              <div style="font-size:12px;color:var(--text-muted);padding-left:10px;border-left:2px solid var(--border-strong)">Audience: auditors, regulators</div>
              <div style="font-size:12px;color:var(--text-muted);padding-left:10px;border-left:2px solid var(--border-strong)">Backward-looking</div>
            </div>
          </div>
          <div style="background:var(--bg);border:2px solid var(--primary);border-radius:var(--radius);padding:1.2rem">
            <div style="font-size:11px;font-weight:500;color:var(--primary);margin-bottom:8px;letter-spacing:.4px">WHERE YOU'RE GOING — FP&amp;A</div>
            <div style="font-size:15px;font-weight:500;margin-bottom:12px">What will happen?</div>
            <div style="display:flex;flex-direction:column;gap:7px">
              <div style="font-size:12px;color:var(--text-muted);padding-left:10px;border-left:2px solid var(--primary)">Plans &amp; forecasts the future</div>
              <div style="font-size:12px;color:var(--text-muted);padding-left:10px;border-left:2px solid var(--primary)">Continuous budgeting &amp; forecasting</div>
              <div style="font-size:12px;color:var(--text-muted);padding-left:10px;border-left:2px solid var(--primary)">Answers: "What will we earn?"</div>
              <div style="font-size:12px;color:var(--text-muted);padding-left:10px;border-left:2px solid var(--primary)">Audience: CEO, CFO, business units</div>
              <div style="font-size:12px;color:var(--text-muted);padding-left:10px;border-left:2px solid var(--primary)">Forward-looking</div>
            </div>
          </div>
        </div>
        <div style="padding:10px 14px;background:var(--bg-secondary);border-radius:var(--radius-sm);font-size:12px;color:var(--text-muted);line-height:1.6">
          Your accounting skills are a genuine edge — you understand how financials are built. FP&amp;A adds one layer: <span class="hl">assumptions about the future</span>. Everything else flows from that.
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 2 — The vocabulary (8 terms you'll use every day)</p>
        <div class="terms-grid">
          <div class="term-card"><div class="term-color" style="color:var(--primary)">BUDGET</div><div class="term-title">The annual plan</div><div class="term-def">Set once before the year begins. Fixed reference point. Doesn't change when reality does.</div></div>
          <div class="term-card"><div class="term-color" style="color:var(--success)">ACTUALS</div><div class="term-title">What really happened</div><div class="term-def">The accounting output. Real GL numbers after close. Your world — feeding into FP&amp;A.</div></div>
          <div class="term-card"><div class="term-color" style="color:var(--violet)">FORECAST</div><div class="term-title">Best current prediction</div><div class="term-def">Updated throughout the year. Actuals to date + projected rest of year = full-year forecast.</div></div>
          <div class="term-card"><div class="term-color" style="color:var(--warning)">VARIANCE</div><div class="term-title">The difference</div><div class="term-def">Actual minus budget. Favorable (F) = better than plan. Unfavorable (U) = worse.</div></div>
          <div class="term-card"><div class="term-color" style="color:var(--danger)">BVA</div><div class="term-title">Budget vs actual</div><div class="term-def">Monthly report card. How close was our plan to reality? Core FP&amp;A deliverable.</div></div>
          <div class="term-card"><div class="term-color" style="color:var(--violet)">LE</div><div class="term-title">Latest estimate</div><div class="term-def">Most current view of where the year ends. Refreshed monthly or quarterly.</div></div>
          <div class="term-card"><div class="term-color" style="color:var(--violet)">RE</div><div class="term-title">Revised estimate</div><div class="term-def">A formally approved update to the budget. Usually mid-year after material changes.</div></div>
          <div class="term-card"><div class="term-color" style="color:var(--success)">RUN RATE</div><div class="term-title">Annualised pace</div><div class="term-def">Q1 revenue × 4 = run rate. Quick trajectory check. Can mislead if business is seasonal.</div></div>
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 3 — The FP&amp;A calendar</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem">
          <div class="cal-row" style="margin-bottom:12px">
            <div class="cal-cell"><div style="font-size:11px;font-weight:500;color:var(--primary);margin-bottom:3px">Sep–Nov</div><div style="font-size:11px;color:var(--text-muted)">Budget season</div><div style="font-size:10px;color:var(--text-muted);margin-top:3px;line-height:1.4">Build next year's plan bottom-up</div></div>
            <div class="cal-cell"><div style="font-size:11px;font-weight:500;color:var(--success);margin-bottom:3px">Jan</div><div style="font-size:11px;color:var(--text-muted)">Budget locked</div><div style="font-size:10px;color:var(--text-muted);margin-top:3px;line-height:1.4">Year begins, actuals start flowing</div></div>
            <div class="cal-cell"><div style="font-size:11px;font-weight:500;color:var(--warning);margin-bottom:3px">Monthly</div><div style="font-size:11px;color:var(--text-muted)">BVA cycle</div><div style="font-size:10px;color:var(--text-muted);margin-top:3px;line-height:1.4">Actuals vs budget + update forecast</div></div>
            <div class="cal-cell"><div style="font-size:11px;font-weight:500;color:var(--violet);margin-bottom:3px">Jun–Jul</div><div style="font-size:11px;color:var(--text-muted)">Mid-year RE/LE</div><div style="font-size:10px;color:var(--text-muted);margin-top:3px;line-height:1.4">Formal reforecast approved</div></div>
            <div class="cal-cell"><div style="font-size:11px;font-weight:500;color:var(--text-muted);margin-bottom:3px">Dec</div><div style="font-size:11px;color:var(--text-muted)">Year-end</div><div style="font-size:10px;color:var(--text-muted);margin-top:3px;line-height:1.4">Close year, next budget already live</div></div>
          </div>
          <div style="font-size:12px;color:var(--text-muted);padding:8px 12px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
            Key insight: the budget cycle is always one year ahead — while this year runs, you're already building next year's plan.
          </div>
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 4 — Real world: offshore energy company</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem">
          <div style="font-size:14px;font-weight:500;margin-bottom:2px">You're FP&amp;A Manager at an offshore drilling company</div>
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:14px">Each day maps to the vocabulary you just learned.</div>
          <div class="scenario-row"><div style="font-size:12px;font-weight:500;color:var(--primary);padding-top:1px">Monday</div><div style="font-size:13px;color:var(--text-muted);padding-left:12px;border-left:1px solid var(--border);line-height:1.6">Accounting closes March. <span class="hl">Actuals</span> hit your model. Revenue $142M vs $150M budget — $8M <span class="hl">unfavorable variance</span>. One platform was offline 4 days.</div></div>
          <div class="scenario-row"><div style="font-size:12px;font-weight:500;color:var(--success);padding-top:1px">Tuesday</div><div style="font-size:13px;color:var(--text-muted);padding-left:12px;border-left:1px solid var(--border);line-height:1.6">Oil price assumptions in the <span class="hl">budget</span> were $95/bbl; strip is now $82/bbl. You update the full-year <span class="hl">forecast</span>: $555M vs $600M budget.</div></div>
          <div class="scenario-row"><div style="font-size:12px;font-weight:500;color:var(--violet);padding-top:1px">Wednesday</div><div style="font-size:13px;color:var(--text-muted);padding-left:12px;border-left:1px solid var(--border);line-height:1.6">CFO asks: "Where are we landing?" You produce the <span class="hl">LE</span>: $548M. The <span class="hl">run rate</span> from Q1 alone implies $568M if pace holds.</div></div>
          <div class="scenario-row"><div style="font-size:12px;font-weight:500;color:var(--warning);padding-top:1px">Thursday</div><div style="font-size:13px;color:var(--text-muted);padding-left:12px;border-left:1px solid var(--border);line-height:1.6">Leadership review. You present the <span class="hl">BVA</span> — three slides: actuals vs budget, key variance drivers, updated forecast. Core FP&amp;A deliverable.</div></div>
        </div>
      </div>`,
    quiz: [
      {
        question: 'Budget was $100M, actuals came in at $92M. What is this difference called, and is it favorable or unfavorable?',
        options: [
          '$8M favorable variance — actuals beat budget',
          '$8M unfavorable variance — actuals missed budget',
          'A revised estimate (RE)',
          'A latest estimate (LE)'
        ],
        correct: 1
      },
      {
        question: "It's July. Revenue has been below budget all year. The CFO wants the most current, realistic view of where the full year will land. What does FP&A produce?",
        options: [
          'The original budget',
          'Actuals report',
          'Latest estimate (LE)',
          'Run rate analysis'
        ],
        correct: 2
      },
      {
        question: 'Q1 revenue was $130M. What is the full-year run rate?',
        options: [
          '$130M',
          '$390M',
          '$520M',
          '$650M'
        ],
        correct: 2
      }
    ]
  },

  // ─────────────────────────────────────────
  // WEEKS 2–12 — Placeholders (content built each sprint)
  // ─────────────────────────────────────────
  // ─────────────────────────────────────────
  // WEEK 2 — The 3-Statement Model
  // ─────────────────────────────────────────
  {
    week: 2,
    title: 'The 3-Statement Model',
    desc: 'Build a linked P&L, Balance Sheet, and Cash Flow in Excel',
    content: `
      <div style="background:linear-gradient(135deg,var(--primary-light) 0%,var(--bg-secondary) 100%);border-radius:var(--radius);padding:1.25rem 1.5rem;margin-bottom:2rem;border-left:4px solid var(--primary)">
        <div style="font-size:13px;font-weight:600;color:var(--primary);margin-bottom:4px">Week 2 — Unlocked</div>
        <div style="font-size:13px;color:var(--text-muted);line-height:1.6">You understand FP&amp;A vocabulary. Now you're building the engine every CFO lives inside: the integrated 3-statement model. This is the single most important technical skill in FP&amp;A.</div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 1 — Why three statements?</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem;margin-bottom:10px">
          <div style="font-size:14px;font-weight:500;margin-bottom:12px">The three statements aren't separate reports — they're one financial story told from three angles.</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px">
            <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius-sm);border-top:3px solid var(--primary)">
              <div style="font-size:11px;font-weight:600;color:var(--primary);letter-spacing:.4px;margin-bottom:6px">INCOME STATEMENT (P&amp;L)</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5">Answers: <span class="hl">Did we make money?</span><br>Revenue − Costs = Net Income<br>Covers a period (month, quarter, year)</div>
            </div>
            <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius-sm);border-top:3px solid var(--success)">
              <div style="font-size:11px;font-weight:600;color:var(--success);letter-spacing:.4px;margin-bottom:6px">BALANCE SHEET</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5">Answers: <span class="hl">What do we own and owe?</span><br>Assets = Liabilities + Equity<br>A snapshot at one point in time</div>
            </div>
            <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius-sm);border-top:3px solid var(--violet)">
              <div style="font-size:11px;font-weight:600;color:var(--violet);letter-spacing:.4px;margin-bottom:6px">CASH FLOW STATEMENT</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5">Answers: <span class="hl">Where did cash go?</span><br>Operating + Investing + Financing<br>Reconciles P&amp;L profit to real cash</div>
            </div>
          </div>
        </div>
        <div style="padding:10px 14px;background:var(--bg-secondary);border-radius:var(--radius-sm);font-size:12px;color:var(--text-muted);line-height:1.6">
          Your accounting background is a genuine superpower here. You already understand debits/credits and accruals — most FP&amp;A analysts spend months learning what you already know.
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 2 — The P&amp;L structure every CFO uses</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem">
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:14px">A well-structured P&amp;L has distinct subtotals. Each one is a metric someone asks about.</div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="display:grid;grid-template-columns:1fr auto;align-items:center;padding:8px 12px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div><span style="font-size:12px;font-weight:500">Revenue</span><span style="font-size:11px;color:var(--text-muted);margin-left:8px">Top line. Volume × price per unit.</span></div>
              <div style="font-size:11px;color:var(--primary);font-weight:500">$600M</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr auto;align-items:center;padding:8px 12px 8px 24px;border-radius:var(--radius-sm)">
              <div><span style="font-size:12px;color:var(--text-muted)">− Cost of goods sold (COGS)</span></div>
              <div style="font-size:11px;color:var(--danger)">($240M)</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr auto;align-items:center;padding:8px 12px;background:var(--bg-secondary);border-radius:var(--radius-sm);border-left:3px solid var(--success)">
              <div><span style="font-size:12px;font-weight:600;color:var(--success)">Gross Profit</span><span style="font-size:11px;color:var(--text-muted);margin-left:8px">GP margin = 60%. "Do we have a viable product?"</span></div>
              <div style="font-size:11px;color:var(--success);font-weight:600">$360M</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr auto;align-items:center;padding:8px 12px 8px 24px;border-radius:var(--radius-sm)">
              <div><span style="font-size:12px;color:var(--text-muted)">− Operating expenses (OPEX)</span></div>
              <div style="font-size:11px;color:var(--danger)">($180M)</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr auto;align-items:center;padding:8px 12px;background:var(--bg-secondary);border-radius:var(--radius-sm);border-left:3px solid var(--violet)">
              <div><span style="font-size:12px;font-weight:600;color:var(--violet)">EBITDA</span><span style="font-size:11px;color:var(--text-muted);margin-left:8px">Earnings before interest, tax, D&amp;A. The CFO's operating metric.</span></div>
              <div style="font-size:11px;color:var(--violet);font-weight:600">$180M</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr auto;align-items:center;padding:8px 12px 8px 24px;border-radius:var(--radius-sm)">
              <div><span style="font-size:12px;color:var(--text-muted)">− D&amp;A, interest, tax</span></div>
              <div style="font-size:11px;color:var(--danger)">($95M)</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr auto;align-items:center;padding:10px 12px;background:var(--primary-light);border-radius:var(--radius-sm);border-left:3px solid var(--primary)">
              <div><span style="font-size:13px;font-weight:600;color:var(--primary)">Net Income</span><span style="font-size:11px;color:var(--text-muted);margin-left:8px">Bottom line. Feeds retained earnings on Balance Sheet.</span></div>
              <div style="font-size:12px;color:var(--primary);font-weight:600">$85M</div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 3 — The critical linkages (this is the magic)</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem">
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:14px">Change any assumption and it ripples through all three. This is what makes the model "integrated".</div>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="display:flex;align-items:flex-start;gap:10px;padding:10px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="background:var(--primary);color:#fff;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;margin-top:1px">1</div>
              <div><span style="font-size:12px;font-weight:500">Net Income → Equity</span><br><span style="font-size:12px;color:var(--text-muted)">Net income flows from P&amp;L into Retained Earnings on the Balance Sheet. Profit grows the book value of the company.</span></div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px;padding:10px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="background:var(--success);color:#fff;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;margin-top:1px">2</div>
              <div><span style="font-size:12px;font-weight:500">Net Income → Cash Flow</span><br><span style="font-size:12px;color:var(--text-muted)">The Cash Flow Statement starts with Net Income, then adjusts for non-cash items (D&amp;A) and working capital changes to arrive at real cash.</span></div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px;padding:10px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="background:var(--violet);color:#fff;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;margin-top:1px">3</div>
              <div><span style="font-size:12px;font-weight:500">Ending Cash → Balance Sheet</span><br><span style="font-size:12px;color:var(--text-muted)">The closing cash balance on the Cash Flow Statement equals the Cash line on the Balance Sheet. This is how you know the model balances.</span></div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px;padding:10px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="background:var(--warning);color:#fff;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;margin-top:1px">4</div>
              <div><span style="font-size:12px;font-weight:500">D&amp;A links P&amp;L ↔ Balance Sheet ↔ Cash Flow</span><br><span style="font-size:12px;color:var(--text-muted)">Depreciation is an expense on the P&amp;L, reduces PP&amp;E on the Balance Sheet, and is added back on the Cash Flow (non-cash charge). Three places, one number.</span></div>
            </div>
          </div>
          <div style="margin-top:12px;padding:10px 14px;background:var(--primary-light);border-radius:var(--radius-sm);font-size:12px;color:var(--primary);font-weight:500;line-height:1.6">
            Pro test: if your Balance Sheet doesn't balance, the model is broken. Assets must always equal Liabilities + Equity — no exceptions.
          </div>
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 4 — Real world: offshore driller model</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem">
          <div style="font-size:14px;font-weight:500;margin-bottom:2px">You're building the annual model for a drilling company</div>
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:14px">Watch how one assumption change ripples through all three statements.</div>
          <div style="background:var(--bg-secondary);border-radius:var(--radius-sm);padding:12px;margin-bottom:10px">
            <div style="font-size:12px;font-weight:500;margin-bottom:8px">Starting assumption: 3 rigs operating, $85K/day day-rate, 350 operating days each</div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
              <div style="text-align:center;padding:8px;background:var(--bg);border-radius:var(--radius-sm)"><div style="font-size:18px;font-weight:700;color:var(--primary)">$89M</div><div style="font-size:11px;color:var(--text-muted)">Revenue</div></div>
              <div style="text-align:center;padding:8px;background:var(--bg);border-radius:var(--radius-sm)"><div style="font-size:18px;font-weight:700;color:var(--success)">$36M</div><div style="font-size:11px;color:var(--text-muted)">EBITDA</div></div>
              <div style="text-align:center;padding:8px;background:var(--bg);border-radius:var(--radius-sm)"><div style="font-size:18px;font-weight:700;color:var(--violet)">$22M</div><div style="font-size:11px;color:var(--text-muted)">Free Cash Flow</div></div>
            </div>
          </div>
          <div style="background:var(--danger-light);border-radius:var(--radius-sm);padding:12px;border-left:3px solid var(--danger)">
            <div style="font-size:12px;font-weight:500;color:var(--danger);margin-bottom:6px">Scenario: Rig 2 goes offline for 45 days (maintenance)</div>
            <div style="font-size:12px;color:var(--text-muted);line-height:1.6">
              P&amp;L: Revenue drops $3.8M (45 days × $85K). EBITDA drops by same amount (no variable cost savings).<br>
              Balance Sheet: Lower net income = lower retained earnings. Receivables fall with lower revenue.<br>
              Cash Flow: Lower operating cash. If maintenance is capitalised → capex line increases, PP&amp;E rises on balance sheet.
            </div>
          </div>
          <div style="margin-top:10px;padding:10px 14px;background:var(--success-light);border-radius:var(--radius-sm);font-size:12px;color:var(--success);line-height:1.6">
            This is exactly what the CFO is watching. One rig offline = $3.8M revenue miss. You quantified it, traced it through the model, and now you can explain it.
          </div>
        </div>
      </div>`,
    quiz: [
      {
        question: 'Net income is $50M. Depreciation is $12M. There are no working capital changes. What is operating cash flow?',
        options: [
          '$38M — subtract D&A because it\'s a non-cash gain',
          '$50M — net income equals cash flow when there\'s no working capital movement',
          '$62M — add back D&A because it\'s a non-cash charge',
          '$12M — only D&A converts to cash'
        ],
        correct: 2
      },
      {
        question: 'Your 3-statement model has total assets of $840M and total liabilities of $510M. What must equity equal for the balance sheet to balance?',
        options: [
          '$1,350M',
          '$330M',
          '$840M',
          'It depends on net income'
        ],
        correct: 1
      },
      {
        question: 'A company buys a new drilling rig for $40M cash. How does this appear across the three statements?',
        options: [
          'P&L: $40M expense. Balance sheet: no change. Cash flow: $40M outflow',
          'P&L: no immediate impact. Balance sheet: +$40M PP&E, −$40M cash. Cash flow: $40M investing outflow',
          'P&L: $40M revenue reduction. Balance sheet: +$40M PP&E. Cash flow: $40M financing outflow',
          'P&L: depreciation only. Balance sheet: +$40M PP&E. Cash flow: no impact'
        ],
        correct: 1
      }
    ]
  },

  // ─────────────────────────────────────────
  // WEEK 3 — Budgeting
  // ─────────────────────────────────────────
  {
    week: 3,
    title: 'Budgeting',
    desc: 'Zero-based vs incremental, top-down vs bottom-up, budget calendar',
    content: `
      <div style="background:linear-gradient(135deg,var(--success-light) 0%,var(--bg-secondary) 100%);border-radius:var(--radius);padding:1.25rem 1.5rem;margin-bottom:2rem;border-left:4px solid var(--success)">
        <div style="font-size:13px;font-weight:600;color:var(--success);margin-bottom:4px">Week 3 — Building momentum</div>
        <div style="font-size:13px;color:var(--text-muted);line-height:1.6">Budgeting is where FP&amp;A spends 3–4 months every year. Mastering this makes you the most organised person in the room during budget season — and that's a CFO trait.</div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 1 — The two big debates</p>
        <div class="compare-grid" style="margin-bottom:10px">
          <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.2rem">
            <div style="font-size:11px;font-weight:600;letter-spacing:.4px;color:var(--text-muted);margin-bottom:8px">APPROACH 1</div>
            <div style="font-size:15px;font-weight:600;margin-bottom:6px">Incremental Budgeting</div>
            <div style="font-size:12px;color:var(--text-muted);line-height:1.6;margin-bottom:10px">Start from last year's actuals and add/subtract %. Fast, familiar, used by 80% of companies.</div>
            <div style="font-size:12px;padding:6px 10px;background:var(--bg-secondary);border-radius:var(--radius-sm);color:var(--text-muted)">Risk: perpetuates waste. "We've always spent $2M on this" is not a justification.</div>
          </div>
          <div style="background:var(--bg);border:2px solid var(--primary);border-radius:var(--radius);padding:1.2rem">
            <div style="font-size:11px;font-weight:600;letter-spacing:.4px;color:var(--primary);margin-bottom:8px">APPROACH 2</div>
            <div style="font-size:15px;font-weight:600;margin-bottom:6px">Zero-Based Budgeting (ZBB)</div>
            <div style="font-size:12px;color:var(--text-muted);line-height:1.6;margin-bottom:10px">Start from zero. Every dollar must be justified from scratch. Forces rigour.</div>
            <div style="font-size:12px;padding:6px 10px;background:var(--primary-light);border-radius:var(--radius-sm);color:var(--primary)">CFO move: use ZBB for new/discretionary spend; incremental for stable operations.</div>
          </div>
        </div>
        <div class="compare-grid">
          <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.2rem">
            <div style="font-size:11px;font-weight:600;letter-spacing:.4px;color:var(--text-muted);margin-bottom:8px">DIRECTION A</div>
            <div style="font-size:15px;font-weight:600;margin-bottom:6px">Top-Down</div>
            <div style="font-size:12px;color:var(--text-muted);line-height:1.6">CEO sets targets → finance allocates down to business units. Fast. Aligned with strategy. Can feel imposed.</div>
          </div>
          <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.2rem">
            <div style="font-size:11px;font-weight:600;letter-spacing:.4px;color:var(--text-muted);margin-bottom:8px">DIRECTION B</div>
            <div style="font-size:15px;font-weight:600;margin-bottom:6px">Bottom-Up</div>
            <div style="font-size:12px;color:var(--text-muted);line-height:1.6">Business units build their own budgets → finance consolidates. More buy-in. Risk: everyone pads their numbers.</div>
          </div>
        </div>
        <div style="padding:10px 14px;background:var(--bg-secondary);border-radius:var(--radius-sm);font-size:12px;color:var(--text-muted);line-height:1.6;margin-top:10px">
          In practice: most companies do <span class="hl">top-down targets + bottom-up build</span>. The CFO sets the revenue and EBITDA envelope; teams build within it. The gap between the two is called the "budget gap" — closing it is 40% of FP&amp;A's job during budget season.
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 2 — The budget calendar (memorise this)</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem">
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="display:grid;grid-template-columns:90px 1fr;gap:12px;align-items:start;padding:10px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="font-size:12px;font-weight:600;color:var(--primary)">Jun – Jul</div>
              <div><div style="font-size:12px;font-weight:500;margin-bottom:2px">Strategic planning cycle</div><div style="font-size:12px;color:var(--text-muted)">3–5 year long-range plan. CFO and CEO align on growth targets and capital allocation before budgeting begins.</div></div>
            </div>
            <div style="display:grid;grid-template-columns:90px 1fr;gap:12px;align-items:start;padding:10px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="font-size:12px;font-weight:600;color:var(--violet)">Sep</div>
              <div><div style="font-size:12px;font-weight:500;margin-bottom:2px">Budget kick-off</div><div style="font-size:12px;color:var(--text-muted)">FP&amp;A sends out templates and assumptions pack (macro outlook, FX rates, commodity prices). Business unit managers start building.</div></div>
            </div>
            <div style="display:grid;grid-template-columns:90px 1fr;gap:12px;align-items:start;padding:10px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="font-size:12px;font-weight:600;color:var(--warning)">Oct – Nov</div>
              <div><div style="font-size:12px;font-weight:500;margin-bottom:2px">Build &amp; challenge cycles</div><div style="font-size:12px;color:var(--text-muted)">Submissions come in. FP&amp;A consolidates, identifies gaps vs top-down targets, challenges assumptions, runs sensitivity. 2–3 iteration cycles.</div></div>
            </div>
            <div style="display:grid;grid-template-columns:90px 1fr;gap:12px;align-items:start;padding:10px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="font-size:12px;font-weight:600;color:var(--danger)">Nov – Dec</div>
              <div><div style="font-size:12px;font-weight:500;margin-bottom:2px">Board approval</div><div style="font-size:12px;color:var(--text-muted)">CFO presents the budget to the Board. Approved budget becomes the legal contract for the year's spend.</div></div>
            </div>
            <div style="display:grid;grid-template-columns:90px 1fr;gap:12px;align-items:start;padding:10px;background:var(--success-light);border-radius:var(--radius-sm);border:1px solid var(--success)">
              <div style="font-size:12px;font-weight:600;color:var(--success)">Jan 1</div>
              <div><div style="font-size:12px;font-weight:500;color:var(--success);margin-bottom:2px">Budget is live</div><div style="font-size:12px;color:var(--text-muted)">Year begins. Every monthly actual is now measured against this locked plan. The BVA cycle kicks in.</div></div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 3 — 6 things that make a great budget (vs a political one)</p>
        <div class="terms-grid">
          <div class="term-card"><div class="term-color" style="color:var(--primary)">DRIVER-BASED</div><div class="term-title">Link to real inputs</div><div class="term-def">Revenue = rigs × day-rate × utilisation. Not "Revenue = last year +5%".</div></div>
          <div class="term-card"><div class="term-color" style="color:var(--success)">ASSUMPTION LOG</div><div class="term-title">Show your working</div><div class="term-def">Document every key assumption. When actuals diverge, you explain why — not guess.</div></div>
          <div class="term-card"><div class="term-color" style="color:var(--violet)">STRETCH NOT SANDBAGGED</div><div class="term-title">Credible ambition</div><div class="term-def">CFOs push back on sandbagged numbers. A good budget is achievable with effort, not guaranteed without it.</div></div>
          <div class="term-card"><div class="term-color" style="color:var(--warning)">SENSITIVITY TABLE</div><div class="term-title">Know the risk range</div><div class="term-def">What if oil price is $70 not $90? Budget should come with a downside and upside case.</div></div>
          <div class="term-card"><div class="term-color" style="color:var(--danger)">OWNED BY BUSINESS</div><div class="term-title">Not just a finance doc</div><div class="term-def">The ops team should be able to recite their own budget targets. FP&amp;A facilitates; they own it.</div></div>
          <div class="term-card"><div class="term-color" style="color:var(--primary)">INTEGRATED</div><div class="term-title">3-statement tied out</div><div class="term-def">Budgeted P&L flows to budgeted balance sheet and cash flow. No orphaned spreadsheets.</div></div>
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 4 — Real world: budget season at the driller</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem">
          <div style="font-size:14px;font-weight:500;margin-bottom:10px">It's October. You're FP&amp;A Manager. The Operations team submits their budget.</div>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div class="scenario-row"><div style="font-size:12px;font-weight:500;color:var(--primary);padding-top:1px">Submission</div><div style="font-size:13px;color:var(--text-muted);padding-left:12px;border-left:1px solid var(--border);line-height:1.6">Ops says: 4 rigs, 340 days utilisation, $88K/day = <span class="hl">$120M revenue</span>. CEO target was $130M.</div></div>
            <div class="scenario-row"><div style="font-size:12px;font-weight:500;color:var(--danger);padding-top:1px">Gap</div><div style="font-size:13px;color:var(--text-muted);padding-left:12px;border-left:1px solid var(--border);line-height:1.6">$10M shortfall vs target. You identify two levers: <span class="hl">push day-rate to $92K</span> (market data supports it) or <span class="hl">improve utilisation to 355 days</span> (maintenance schedule review needed).</div></div>
            <div class="scenario-row"><div style="font-size:12px;font-weight:500;color:var(--success);padding-top:1px">Outcome</div><div style="font-size:13px;color:var(--text-muted);padding-left:12px;border-left:1px solid var(--border);line-height:1.6">CFO accepts $92K day-rate (contracts support it) and 350 days (conservative). Final budget: $128.8M. $1.2M still short — absorbed in contingency. Board approves.</div></div>
          </div>
          <div style="margin-top:10px;padding:10px 14px;background:var(--success-light);border-radius:var(--radius-sm);font-size:12px;color:var(--success);line-height:1.6">
            You just did the CFO's actual job. Challenge the assumptions, close the gap, present to the board. That's budget season.
          </div>
        </div>
      </div>`,
    quiz: [
      {
        question: 'A business unit submits a budget with revenue 15% below the CEO\'s top-down target. As FP&A, what is your first move?',
        options: [
          'Accept it — the business unit knows its own market best',
          'Reject it immediately and send back a higher target',
          'Identify specific drivers that could close the gap (price, volume, new contracts) and challenge the assumptions with data',
          'Average the two numbers and present that to the CEO'
        ],
        correct: 2
      },
      {
        question: 'What is the main risk of pure incremental budgeting?',
        options: [
          'It takes too long to complete',
          'It requires too many people to be involved',
          'It carries forward inefficiencies — every line item survives unless actively challenged',
          'It\'s incompatible with IFRS reporting'
        ],
        correct: 2
      },
      {
        question: 'When is a budget typically locked (approved and frozen) for the following year?',
        options: [
          'June of the current year',
          'January 1 of the new year',
          'November or December — after Board approval, before year-end',
          'The first month of Q2'
        ],
        correct: 2
      }
    ]
  },

  // ─────────────────────────────────────────
  // WEEK 4 — Revenue Forecasting
  // ─────────────────────────────────────────
  {
    week: 4,
    title: 'Revenue Forecasting',
    desc: 'Driver-based models: volume × price × mix',
    content: `
      <div style="background:linear-gradient(135deg,rgba(155,127,232,0.08) 0%,var(--bg-secondary) 100%);border-radius:var(--radius);padding:1.25rem 1.5rem;margin-bottom:2rem;border-left:4px solid var(--violet)">
        <div style="font-size:13px;font-weight:600;color:var(--violet);margin-bottom:4px">Week 4 — Halfway through the core toolkit!</div>
        <div style="font-size:13px;color:var(--text-muted);line-height:1.6">Revenue forecasting is where FP&amp;A earns its credibility. Get this right and the CFO trusts everything else you produce. The secret: never forecast a single number — forecast the <em>drivers</em> that create it.</div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 1 — The golden rule: forecast drivers, not revenue</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem;margin-bottom:10px">
          <div class="compare-grid">
            <div style="padding:12px;background:var(--danger-light);border-radius:var(--radius-sm);border-left:3px solid var(--danger)">
              <div style="font-size:11px;font-weight:600;color:var(--danger);margin-bottom:6px">WEAK FORECAST</div>
              <div style="font-size:13px;font-weight:500;margin-bottom:6px">"Revenue = $142M × 1.08"</div>
              <div style="font-size:12px;color:var(--text-muted)">No logic. Why 8%? What changes if one rig goes offline? What's the sensitivity to oil price? You can't answer any of these.</div>
            </div>
            <div style="padding:12px;background:var(--success-light);border-radius:var(--radius-sm);border-left:3px solid var(--success)">
              <div style="font-size:11px;font-weight:600;color:var(--success);margin-bottom:6px">STRONG FORECAST</div>
              <div style="font-size:13px;font-weight:500;margin-bottom:6px">"4 rigs × $90K/day × 348 days = $125M"</div>
              <div style="font-size:12px;color:var(--text-muted)">Every driver is explicit. Rig goes offline? Revenue = 3 × $90K × 348 = $94M. Immediate answer, no guessing.</div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 2 — Volume × Price × Mix decomposition</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem">
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:14px">Every revenue change can be decomposed into three components. This is the framework every CFO uses to explain a revenue miss or beat.</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(175px,1fr));gap:10px;margin-bottom:14px">
            <div style="padding:14px;background:var(--bg-secondary);border-radius:var(--radius-sm);border-top:3px solid var(--primary);text-align:center">
              <div style="font-size:28px;font-weight:700;color:var(--primary);margin-bottom:4px">V</div>
              <div style="font-size:13px;font-weight:600;margin-bottom:6px">Volume</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5">How many units sold / hours worked / rig days. Did we sell more or less?</div>
              <div style="font-size:11px;color:var(--primary);margin-top:8px;font-weight:500">Rig-days: 1,050 → 980</div>
            </div>
            <div style="padding:14px;background:var(--bg-secondary);border-radius:var(--radius-sm);border-top:3px solid var(--success);text-align:center">
              <div style="font-size:28px;font-weight:700;color:var(--success);margin-bottom:4px">P</div>
              <div style="font-size:13px;font-weight:600;margin-bottom:6px">Price</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5">Rate per unit. Did we charge more or less per rig-day, per contract, per product?</div>
              <div style="font-size:11px;color:var(--success);margin-top:8px;font-weight:500">Day-rate: $88K → $92K</div>
            </div>
            <div style="padding:14px;background:var(--bg-secondary);border-radius:var(--radius-sm);border-top:3px solid var(--violet);text-align:center">
              <div style="font-size:28px;font-weight:700;color:var(--violet);margin-bottom:4px">M</div>
              <div style="font-size:13px;font-weight:600;margin-bottom:6px">Mix</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5">The blend of what was sold. High-margin vs low-margin products. Deepwater vs shallow contracts.</div>
              <div style="font-size:11px;color:var(--violet);margin-top:8px;font-weight:500">Deep: 60% → 70%</div>
            </div>
          </div>
          <div style="padding:12px;background:var(--primary-light);border-radius:var(--radius-sm)">
            <div style="font-size:12px;font-weight:500;color:var(--primary);margin-bottom:6px">Example decomposition — Q3 revenue miss of $8M</div>
            <div style="font-size:12px;color:var(--text-muted);line-height:1.8">
              Volume variance: −70 rig-days × $88K = <span style="color:var(--danger);font-weight:500">−$6.2M</span> (rig offline)<br>
              Price variance: +$4K/day × 980 days = <span style="color:var(--success);font-weight:500">+$3.9M</span> (rate renegotiation)<br>
              Mix variance: more shallow contracts = <span style="color:var(--danger);font-weight:500">−$5.7M</span> (lower average rate)<br>
              <strong>Total variance: −$8M ✓</strong> — and now you know exactly where it came from.
            </div>
          </div>
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 3 — Building a driver-based revenue model</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem">
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:12px">Structure your Excel model like this. Each column is an assumption you control separately.</div>
          <div style="overflow-x:auto">
            <table style="width:100%;border-collapse:collapse;font-size:12px">
              <thead>
                <tr style="background:var(--bg-secondary)">
                  <th style="padding:8px 10px;text-align:left;font-weight:500;color:var(--text-muted);border-bottom:1px solid var(--border)">Segment</th>
                  <th style="padding:8px 10px;text-align:right;font-weight:500;color:var(--primary);border-bottom:1px solid var(--border)">Volume</th>
                  <th style="padding:8px 10px;text-align:right;font-weight:500;color:var(--success);border-bottom:1px solid var(--border)">Price ($K)</th>
                  <th style="padding:8px 10px;text-align:right;font-weight:500;color:var(--violet);border-bottom:1px solid var(--border)">Mix %</th>
                  <th style="padding:8px 10px;text-align:right;font-weight:500;color:var(--text);border-bottom:1px solid var(--border)">Revenue ($M)</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--border)">
                  <td style="padding:8px 10px">Deepwater rigs</td>
                  <td style="padding:8px 10px;text-align:right;color:var(--primary)">700 days</td>
                  <td style="padding:8px 10px;text-align:right;color:var(--success)">$110K</td>
                  <td style="padding:8px 10px;text-align:right;color:var(--violet)">67%</td>
                  <td style="padding:8px 10px;text-align:right;font-weight:500">$77.0M</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border);background:var(--bg-secondary)">
                  <td style="padding:8px 10px">Shallow-water rigs</td>
                  <td style="padding:8px 10px;text-align:right;color:var(--primary)">350 days</td>
                  <td style="padding:8px 10px;text-align:right;color:var(--success)">$68K</td>
                  <td style="padding:8px 10px;text-align:right;color:var(--violet)">33%</td>
                  <td style="padding:8px 10px;text-align:right;font-weight:500">$23.8M</td>
                </tr>
                <tr style="background:var(--primary-light)">
                  <td style="padding:8px 10px;font-weight:600;color:var(--primary)">Total</td>
                  <td style="padding:8px 10px;text-align:right;font-weight:600;color:var(--primary)">1,050 days</td>
                  <td style="padding:8px 10px;text-align:right;font-weight:600;color:var(--primary)">$95.2K avg</td>
                  <td style="padding:8px 10px;text-align:right;font-weight:600;color:var(--primary)">100%</td>
                  <td style="padding:8px 10px;text-align:right;font-weight:700;color:var(--primary)">$100.8M</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="margin-top:10px;font-size:12px;color:var(--text-muted);padding:8px 12px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
            When a rig goes offline, you change one cell (volume) and revenue recalculates automatically. That's the power of a driver-based model.
          </div>
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 4 — Forecast types you'll use daily</p>
        <div class="terms-grid">
          <div class="term-card"><div class="term-color" style="color:var(--primary)">ROLLING FORECAST</div><div class="term-title">Always 12 months ahead</div><div class="term-def">Drop the oldest month, add a new one. You always have 12 months of visibility. CFOs love this.</div></div>
          <div class="term-card"><div class="term-color" style="color:var(--success)">BOTTOM-UP</div><div class="term-title">Build from contracts</div><div class="term-def">Each contract, product, or customer forecasted individually. Granular and defensible.</div></div>
          <div class="term-card"><div class="term-color" style="color:var(--violet)">TOP-DOWN</div><div class="term-title">Market × share</div><div class="term-def">Total addressable market × your market share. Good for sanity-checking bottom-up.</div></div>
          <div class="term-card"><div class="term-color" style="color:var(--warning)">SCENARIO</div><div class="term-title">Base/Bull/Bear</div><div class="term-def">Three forecasts: base case (most likely), upside (best realistic), downside (stress case).</div></div>
        </div>
      </div>`,
    quiz: [
      {
        question: 'Last quarter: 500 units at $200/unit = $100K revenue. This quarter: 480 units at $210/unit = $100.8K. How do you describe the revenue change?',
        options: [
          '$0.8K favorable — total revenue improved so there\'s nothing to analyse',
          'Volume variance: −$4K (−20 units × $200). Price variance: +$4.8K (+$10 × 480). Net: +$0.8K',
          'Volume variance: −20 units is immaterial and can be ignored',
          'Price variance of $10 is the only driver since volume barely changed'
        ],
        correct: 1
      },
      {
        question: 'Your oil & gas company sells two products: LNG ($150/unit, 40% of volume) and crude oil ($80/unit, 60% of volume). Next year the mix shifts to 60% LNG, 40% crude. Volume and unit prices stay constant. What happens to revenue?',
        options: [
          'Revenue stays the same — volume and price are unchanged',
          'Revenue decreases — you\'re selling less of the cheaper product',
          'Revenue increases — mix shifted toward the higher-priced product',
          'Revenue depends on total units sold, not mix'
        ],
        correct: 2
      },
      {
        question: 'What is the key advantage of a rolling 12-month forecast vs a static annual budget?',
        options: [
          'It removes the need for a budget entirely',
          'It always provides 12 months of forward visibility, regardless of what month you\'re in',
          'It is more accurate because it uses actual data',
          'It requires less time to maintain than an annual budget'
        ],
        correct: 1
      }
    ]
  },

  // ─────────────────────────────────────────
  // WEEK 5 — Cost Forecasting & Headcount
  // ─────────────────────────────────────────
  {
    week: 5,
    title: 'Cost Forecasting & Headcount',
    desc: 'Fixed vs variable costs, headcount roster model, OPEX build',
    content: `
      <div style="background:linear-gradient(135deg,rgba(245,166,35,0.08) 0%,var(--bg-secondary) 100%);border-radius:var(--radius);padding:1.25rem 1.5rem;margin-bottom:2rem;border-left:4px solid var(--warning)">
        <div style="font-size:13px;font-weight:600;color:var(--warning);margin-bottom:4px">Week 5 — You're in the CFO's favourite territory</div>
        <div style="font-size:13px;color:var(--text-muted);line-height:1.6">Revenue gets the glory, but CFOs obsess over costs. Why? Revenue is outside your control (market, clients, oil price). Costs are yours to manage. Master cost forecasting and you become the person who makes the numbers work.</div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 1 — The cost behaviour framework</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem;margin-bottom:10px">
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px">
            <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius-sm);border-top:3px solid var(--primary)">
              <div style="font-size:11px;font-weight:600;color:var(--primary);letter-spacing:.4px;margin-bottom:6px">FIXED COSTS</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5;margin-bottom:8px">Don't change with volume. Same cost whether you drill 300 or 350 days.</div>
              <div style="font-size:11px;padding:4px 8px;background:var(--bg);border-radius:var(--radius-xs);color:var(--text-muted)">Rent, insurance, HQ salaries, software licences</div>
            </div>
            <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius-sm);border-top:3px solid var(--success)">
              <div style="font-size:11px;font-weight:600;color:var(--success);letter-spacing:.4px;margin-bottom:6px">VARIABLE COSTS</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5;margin-bottom:8px">Move directly with volume. More rig-days = more fuel, crew overtime, consumables.</div>
              <div style="font-size:11px;padding:4px 8px;background:var(--bg);border-radius:var(--radius-xs);color:var(--text-muted)">Drilling fluids, fuel, variable crew pay, transport</div>
            </div>
            <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius-sm);border-top:3px solid var(--warning)">
              <div style="font-size:11px;font-weight:600;color:var(--warning);letter-spacing:.4px;margin-bottom:6px">STEP COSTS</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5;margin-bottom:8px">Fixed within a range, then jumps. One safety officer handles 2 rigs; 3rd rig needs a second.</div>
              <div style="font-size:11px;padding:4px 8px;background:var(--bg);border-radius:var(--radius-xs);color:var(--text-muted)">Supervisors, safety officers, vehicles, server capacity</div>
            </div>
            <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius-sm);border-top:3px solid var(--violet)">
              <div style="font-size:11px;font-weight:600;color:var(--violet);letter-spacing:.4px;margin-bottom:6px">SEMI-VARIABLE</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5;margin-bottom:8px">Fixed base + variable element. Phone bill: $500/month fixed + $0.05 per minute.</div>
              <div style="font-size:11px;padding:4px 8px;background:var(--bg);border-radius:var(--radius-xs);color:var(--text-muted)">Utilities, maintenance contracts, sales commissions</div>
            </div>
          </div>
        </div>
        <div style="padding:10px 14px;background:var(--primary-light);border-radius:var(--radius-sm);font-size:12px;color:var(--primary);line-height:1.6">
          CFO lens: fixed costs create operating leverage. If revenue goes up 10%, EBITDA goes up more than 10% because fixed costs don't move. This is great on the upside — and brutal on the downside.
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 2 — The headcount roster model</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem">
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:12px">Headcount is typically the largest cost line — often 40–60% of OPEX. It needs its own model, not a spreadsheet guess.</div>
          <div style="overflow-x:auto;margin-bottom:12px">
            <table style="width:100%;border-collapse:collapse;font-size:11px">
              <thead>
                <tr style="background:var(--bg-secondary)">
                  <th style="padding:8px;text-align:left;font-weight:500;color:var(--text-muted);border-bottom:1px solid var(--border)">Name / Role</th>
                  <th style="padding:8px;text-align:right;font-weight:500;color:var(--text-muted);border-bottom:1px solid var(--border)">Base Salary</th>
                  <th style="padding:8px;text-align:right;font-weight:500;color:var(--primary);border-bottom:1px solid var(--border)">Bonus %</th>
                  <th style="padding:8px;text-align:right;font-weight:500;color:var(--success);border-bottom:1px solid var(--border)">Benefits %</th>
                  <th style="padding:8px;text-align:right;font-weight:500;color:var(--warning);border-bottom:1px solid var(--border)">Start Month</th>
                  <th style="padding:8px;text-align:right;font-weight:500;color:var(--text);border-bottom:1px solid var(--border)">Total Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 8px">Rig Manager</td><td style="padding:7px 8px;text-align:right">$120K</td><td style="padding:7px 8px;text-align:right;color:var(--primary)">15%</td><td style="padding:7px 8px;text-align:right;color:var(--success)">20%</td><td style="padding:7px 8px;text-align:right;color:var(--warning)">Jan</td><td style="padding:7px 8px;text-align:right;font-weight:500">$162K</td></tr>
                <tr style="border-bottom:1px solid var(--border);background:var(--bg-secondary)"><td style="padding:7px 8px">HSE Officer (new hire)</td><td style="padding:7px 8px;text-align:right">$85K</td><td style="padding:7px 8px;text-align:right;color:var(--primary)">10%</td><td style="padding:7px 8px;text-align:right;color:var(--success)">20%</td><td style="padding:7px 8px;text-align:right;color:var(--warning)">Apr</td><td style="padding:7px 8px;text-align:right;font-weight:500">$76K</td></tr>
                <tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 8px">Finance Analyst</td><td style="padding:7px 8px;text-align:right">$70K</td><td style="padding:7px 8px;text-align:right;color:var(--primary)">10%</td><td style="padding:7px 8px;text-align:right;color:var(--success)">20%</td><td style="padding:7px 8px;text-align:right;color:var(--warning)">Jan</td><td style="padding:7px 8px;text-align:right;font-weight:500">$94.5K</td></tr>
                <tr style="background:var(--primary-light)"><td style="padding:7px 8px;font-weight:600;color:var(--primary)">Total headcount cost</td><td colspan="4" style="padding:7px 8px"></td><td style="padding:7px 8px;text-align:right;font-weight:700;color:var(--primary)">$332.5K</td></tr>
              </tbody>
            </table>
          </div>
          <div style="font-size:12px;color:var(--text-muted);padding:8px 12px;background:var(--bg-secondary);border-radius:var(--radius-sm);line-height:1.6">
            The HSE Officer starts in April — their annual salary ($114K loaded) only costs $76K in the budget year. The roster model captures this automatically by month. A flat $114K assumption would overstate the budget by $38K.
          </div>
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 3 — Building the OPEX budget</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem">
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:12px">OPEX = all operating costs below gross profit. Build it in categories, each with its own driver logic.</div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="display:grid;grid-template-columns:140px 1fr auto;gap:8px;align-items:center;padding:8px 10px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="font-size:12px;font-weight:500">Headcount</div>
              <div style="font-size:11px;color:var(--text-muted)">Roster model × loaded cost rate. Biggest line. Get this right first.</div>
              <div style="font-size:12px;font-weight:600;color:var(--primary);white-space:nowrap">$18.2M</div>
            </div>
            <div style="display:grid;grid-template-columns:140px 1fr auto;gap:8px;align-items:center;padding:8px 10px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="font-size:12px;font-weight:500">Maintenance</div>
              <div style="font-size:11px;color:var(--text-muted)">Rig-days × maintenance cost/day + scheduled overhaul events.</div>
              <div style="font-size:12px;font-weight:600;color:var(--primary);white-space:nowrap">$6.4M</div>
            </div>
            <div style="display:grid;grid-template-columns:140px 1fr auto;gap:8px;align-items:center;padding:8px 10px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="font-size:12px;font-weight:500">IT &amp; software</div>
              <div style="font-size:11px;color:var(--text-muted)">Mostly fixed. Contract values from vendor agreements.</div>
              <div style="font-size:12px;font-weight:600;color:var(--primary);white-space:nowrap">$1.8M</div>
            </div>
            <div style="display:grid;grid-template-columns:140px 1fr auto;gap:8px;align-items:center;padding:8px 10px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="font-size:12px;font-weight:500">G&amp;A (overheads)</div>
              <div style="font-size:11px;color:var(--text-muted)">Rent, insurance, professional fees. Fixed + 3% inflation assumption.</div>
              <div style="font-size:12px;font-weight:600;color:var(--primary);white-space:nowrap">$3.6M</div>
            </div>
            <div style="display:grid;grid-template-columns:140px 1fr auto;gap:8px;align-items:center;padding:8px 10px;background:var(--primary-light);border-radius:var(--radius-sm)">
              <div style="font-size:12px;font-weight:700;color:var(--primary)">Total OPEX</div>
              <div></div>
              <div style="font-size:13px;font-weight:700;color:var(--primary);white-space:nowrap">$30.0M</div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 4 — Real world: cost pressure scenario</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem">
          <div style="font-size:14px;font-weight:500;margin-bottom:10px">CFO challenge: "Revenue is tracking $10M below budget. Find $6M of cost savings."</div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div class="scenario-row"><div style="font-size:12px;font-weight:500;color:var(--primary);padding-top:1px">Step 1</div><div style="font-size:13px;color:var(--text-muted);padding-left:12px;border-left:1px solid var(--border);line-height:1.6">Separate fixed vs variable costs. Variable costs (fuel, crew overtime) should already be falling if rig-days are down — that's $2.1M automatic saving.</div></div>
            <div class="scenario-row"><div style="font-size:12px;font-weight:500;color:var(--violet);padding-top:1px">Step 2</div><div style="font-size:13px;color:var(--text-muted);padding-left:12px;border-left:1px solid var(--border);line-height:1.6">Review discretionary OPEX: defer non-critical maintenance ($1.8M), pause two open headcount positions ($0.8M annualised).</div></div>
            <div class="scenario-row"><div style="font-size:12px;font-weight:500;color:var(--success);padding-top:1px">Step 3</div><div style="font-size:13px;color:var(--text-muted);padding-left:12px;border-left:1px solid var(--border);line-height:1.6">Renegotiate IT contracts (2 vendors, save $0.4M), reduce travel budget by 50% ($0.3M). Total: <span class="hl">$5.4M identified</span>. $0.6M gap managed through contingency.</div></div>
          </div>
          <div style="margin-top:10px;padding:10px 14px;background:var(--success-light);border-radius:var(--radius-sm);font-size:12px;color:var(--success);line-height:1.6">
            You just did a cost reduction exercise — a core CFO skill. The key is knowing which costs are flexible and which aren't before the CFO asks.
          </div>
        </div>
      </div>`,
    quiz: [
      {
        question: 'A company\'s revenue drops 20% due to lower volume. Which costs will automatically decrease in the same period?',
        options: [
          'Fixed costs — they\'re directly tied to output',
          'Variable costs — they move with volume',
          'Both fixed and variable costs decrease proportionally',
          'Neither — all costs are sticky in the short term'
        ],
        correct: 1
      },
      {
        question: 'A new analyst is hired at $80K base salary, 12% bonus, 20% benefits. They start on July 1. What is their budget cost for the calendar year?',
        options: [
          '$107.5K — full loaded annual cost',
          '$80K — just the base salary',
          '$53.8K — half a year of fully loaded cost',
          '$40K — half a year of base salary only'
        ],
        correct: 2
      },
      {
        question: 'What is operating leverage?',
        options: [
          'The ratio of debt to equity on the balance sheet',
          'The sensitivity of EBITDA to revenue changes, driven by the proportion of fixed vs variable costs',
          'The ability to increase production capacity without additional investment',
          'The use of derivatives to hedge operating costs'
        ],
        correct: 1
      }
    ]
  },

  // ─────────────────────────────────────────
  // WEEK 6 — Variance Analysis & Bridge Reporting
  // ─────────────────────────────────────────
  {
    week: 6,
    title: 'Variance Analysis & Bridge Reporting',
    desc: 'Price/volume/mix decomposition, waterfall charts, BVA commentary',
    content: `
      <div style="background:linear-gradient(135deg,var(--success-light) 0%,var(--bg-secondary) 100%);border-radius:var(--radius);padding:1.25rem 1.5rem;margin-bottom:2rem;border-left:4px solid var(--success)">
        <div style="font-size:13px;font-weight:600;color:var(--success);margin-bottom:4px">Week 6 — You've completed the core FP&A toolkit!</div>
        <div style="font-size:13px;color:var(--text-muted);line-height:1.6">Variance analysis is where you earn your seat at the table. Anyone can report the numbers. <em>You</em> explain what drove them and what to do about it. This is the skill that separates a management accountant from a CFO.</div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 1 — What variance analysis actually is</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem;margin-bottom:10px">
          <div style="font-size:14px;font-weight:500;margin-bottom:10px">Variance = Actual − Budget (or Actual − Prior Period)</div>
          <div class="compare-grid">
            <div style="padding:12px;background:var(--success-light);border-radius:var(--radius-sm);border-left:3px solid var(--success)">
              <div style="font-size:11px;font-weight:600;color:var(--success);margin-bottom:6px">FAVORABLE (F)</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5">Revenue above budget <em>or</em> costs below budget. Both improve profit. Convention: positive for revenue, negative for costs.</div>
            </div>
            <div style="padding:12px;background:var(--danger-light);border-radius:var(--radius-sm);border-left:3px solid var(--danger)">
              <div style="font-size:11px;font-weight:600;color:var(--danger);margin-bottom:6px">UNFAVORABLE (U)</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5">Revenue below budget <em>or</em> costs above budget. Both hurt profit. Always investigate the root cause before reporting.</div>
            </div>
          </div>
          <div style="margin-top:10px;padding:10px 14px;background:var(--bg-secondary);border-radius:var(--radius-sm);font-size:12px;color:var(--text-muted);line-height:1.6">
            The sign convention trips people up. For costs: if you spent $5M vs $6M budget, the variance is <span class="hl">$1M Favorable</span> — you spent less. For revenue: if you earned $95M vs $100M budget, the variance is <span class="hl">$5M Unfavorable</span>.
          </div>
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 2 — The bridge / waterfall chart</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem">
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:14px">A bridge chart shows how you got from budget to actual, step by step. It's the most powerful chart in FP&amp;A — the CFO can see exactly where the $8M miss came from.</div>
          <div style="background:var(--bg-secondary);border-radius:var(--radius-sm);padding:16px;overflow-x:auto">
            <div style="min-width:500px">
              <div style="display:flex;align-items:flex-end;gap:4px;height:120px;margin-bottom:8px">
                <div style="display:flex;flex-direction:column;align-items:center;flex:1">
                  <div style="background:var(--primary);width:100%;height:80px;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:600">$100M</div>
                </div>
                <div style="display:flex;flex-direction:column;align-items:center;flex:1">
                  <div style="font-size:10px;color:var(--danger);margin-bottom:2px">−$6.2M</div>
                  <div style="background:var(--danger);width:100%;height:50px;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:500">Vol</div>
                </div>
                <div style="display:flex;flex-direction:column;align-items:center;flex:1">
                  <div style="font-size:10px;color:var(--success);margin-bottom:2px">+$3.9M</div>
                  <div style="background:var(--success);width:100%;height:31px;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:500">Price</div>
                </div>
                <div style="display:flex;flex-direction:column;align-items:center;flex:1">
                  <div style="font-size:10px;color:var(--danger);margin-bottom:2px">−$5.7M</div>
                  <div style="background:var(--danger);width:100%;height:46px;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:500">Mix</div>
                </div>
                <div style="display:flex;flex-direction:column;align-items:center;flex:1">
                  <div style="background:var(--violet);width:100%;height:65px;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:600">$92M</div>
                </div>
              </div>
              <div style="display:flex;gap:4px">
                <div style="flex:1;text-align:center;font-size:10px;color:var(--text-muted)">Budget</div>
                <div style="flex:1;text-align:center;font-size:10px;color:var(--text-muted)">Volume</div>
                <div style="flex:1;text-align:center;font-size:10px;color:var(--text-muted)">Price</div>
                <div style="flex:1;text-align:center;font-size:10px;color:var(--text-muted)">Mix</div>
                <div style="flex:1;text-align:center;font-size:10px;color:var(--text-muted)">Actual</div>
              </div>
            </div>
          </div>
          <div style="margin-top:10px;font-size:12px;color:var(--text-muted);padding:8px 12px;background:var(--bg-secondary);border-radius:var(--radius-sm);line-height:1.6">
            The bridge tells the story instantly: we missed on volume (rig offline) and mix (more shallow contracts), partially offset by a rate increase. That's the entire $8M variance in one visual.
          </div>
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 3 — Writing BVA commentary that CFOs actually read</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem">
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:12px">Most variance commentary is useless. Here's the difference:</div>
          <div class="compare-grid" style="margin-bottom:12px">
            <div style="padding:12px;background:var(--danger-light);border-radius:var(--radius-sm)">
              <div style="font-size:11px;font-weight:600;color:var(--danger);margin-bottom:6px">WEAK COMMENTARY ✗</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.6;">"Revenue was $92M vs budget of $100M, an unfavorable variance of $8M. This was due to lower volume and mix."</div>
              <div style="font-size:11px;color:var(--danger);margin-top:6px">Restates the numbers. Says nothing new. Wastes the CFO's time.</div>
            </div>
            <div style="padding:12px;background:var(--success-light);border-radius:var(--radius-sm)">
              <div style="font-size:11px;font-weight:600;color:var(--success);margin-bottom:6px">STRONG COMMENTARY ✓</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.6;">"Revenue missed by $8M. Rig 3 was offline 45 days for unplanned maintenance (−$6.2M). Mix shifted toward shallow contracts as Petronas deferred a deepwater job (−$5.7M), partially offset by contract renegotiation (+$3.9M). Full-year forecast revised to $368M."</div>
              <div style="font-size:11px;color:var(--success);margin-top:6px">Root cause. Specific amounts. Who, what, when. Action/forecast.</div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:8px 12px;background:var(--bg-secondary);border-radius:var(--radius-sm);font-size:12px;color:var(--text-muted)"><span class="hl">The "so what" test:</span> After every sentence, ask "so what?" If you can't answer, the sentence doesn't belong in the commentary.</div>
            <div style="padding:8px 12px;background:var(--bg-secondary);border-radius:var(--radius-sm);font-size:12px;color:var(--text-muted)"><span class="hl">Structure: Qty, cause, consequence, forecast.</span> "$X miss → why → what it means for full year → what we're doing about it."</div>
          </div>
        </div>
      </div>

      <div style="margin-bottom:2rem">
        <p class="sec-label">Section 4 — The complete BVA page (your monthly deliverable)</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem">
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:12px">A CFO-ready BVA page has exactly four elements. One page. Nothing more.</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px">
            <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="font-size:11px;font-weight:600;color:var(--primary);margin-bottom:6px">1 — SUMMARY TABLE</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5">Actuals vs budget vs prior year. Month + YTD. P&amp;L down to EBITDA. Traffic-light colours for variances above/below threshold.</div>
            </div>
            <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="font-size:11px;font-weight:600;color:var(--success);margin-bottom:6px">2 — BRIDGE CHART</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5">Waterfall from budget to actual for revenue and EBITDA. Visual story. CFO sees it in 10 seconds.</div>
            </div>
            <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="font-size:11px;font-weight:600;color:var(--violet);margin-bottom:6px">3 — COMMENTARY</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5">Top 3–5 variance drivers. Root cause + dollar amount + forward implication. Bullet points. Under 150 words.</div>
            </div>
            <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius-sm)">
              <div style="font-size:11px;font-weight:600;color:var(--warning);margin-bottom:6px">4 — UPDATED FORECAST</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5">Full-year LE based on YTD actuals + revised outlook. What the year now lands at vs original budget.</div>
            </div>
          </div>
          <div style="margin-top:12px;padding:10px 14px;background:var(--primary-light);border-radius:var(--radius-sm);font-size:12px;color:var(--primary);font-weight:500;line-height:1.6">
            You now know how to produce the most important monthly output in FP&amp;A. This is exactly what you'll present to a CFO. Weeks 1–6 complete — you have the core toolkit.
          </div>
        </div>
      </div>`,
    quiz: [
      {
        question: 'Budget EBITDA was $40M. Actual EBITDA is $35M. Revenue missed by $6M (unfavorable) and costs were $1M below budget (favorable). What is the net EBITDA variance?',
        options: [
          '$6M unfavorable — only the revenue miss matters for EBITDA',
          '$5M unfavorable — revenue miss of $6M partially offset by $1M cost saving',
          '$7M unfavorable — add the revenue miss and the cost saving',
          '$5M favorable — costs saved more than revenue missed'
        ],
        correct: 1
      },
      {
        question: 'Which of these is a CFO-quality variance comment?',
        options: [
          '"OPEX was $2.3M above budget due to higher costs across most departments."',
          '"OPEX exceeded budget by $2.3M: unplanned compressor replacement on Rig 2 ($1.8M) and overtime from extended Petronas contract ($0.5M). Both one-off; full-year OPEX forecast unchanged."',
          '"Costs were over budget this month but should normalize next quarter."',
          '"OPEX variance of $2.3M (U) noted. Investigation ongoing."'
        ],
        correct: 1
      },
      {
        question: 'A waterfall (bridge) chart shows: Budget $80M → Volume +$3M → Price −$1M → Mix +$2M → Actual = ?',
        options: [
          '$84M',
          '$76M',
          '$80M',
          '$86M'
        ],
        correct: 0
      }
    ]
  },
  { week: 7,  title: 'Working Capital & Cash Flow',          desc: 'DSO, DPO, DIO, cash conversion cycle', content: null, quiz: [] },
  { week: 8,  title: 'Data Viz & Executive Dashboards',      desc: 'Power BI, Excel charts, EBITDA / FCF / ROIC metrics', content: null, quiz: [] },
  { week: 9,  title: 'Capital Budgeting & DCF',              desc: 'NPV, IRR, payback period, full discounted cash flow model', content: null, quiz: [] },
  { week: 10, title: 'Scenario Planning & Risk Analysis',    desc: 'Rolling forecasts, sensitivity tables, risk management', content: null, quiz: [] },
  { week: 11, title: 'Financial Storytelling & Partnering',  desc: 'The "so what" discipline, CFO update format, narrative over numbers', content: null, quiz: [] },
  { week: 12, title: 'AI in FP&A + Capstone',                desc: 'AI forecasting tools, Copilot in finance, build a full FP&A model', content: null, quiz: [] }
];
