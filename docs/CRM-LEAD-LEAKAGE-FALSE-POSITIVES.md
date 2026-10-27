# CRM Lead Leakage: 7 False Positives to Check Before Escalating a Sales Alert
*A practical, privacy-first review checklist for RevOps and CRM integrators. Updated 2026-10-27.*

A dashboard can flag an apparently unanswered inquiry without proving that a salesperson ignored it. Treat alerts as **questions for a human reviewer**, not confirmed lost sales or recovered revenue.

| Apparent problem | Alternative explanation | Minimal verification |
| --- | --- | --- |
| No reply recorded | Reply was sent by phone, chat or another connected inbox | Check permitted channel-level activity metadata, not private message content |
| First response was late | Business-hours SLA excludes nights, weekends or local holidays | Recalculate with the agreed calendar and customer's time zone |
| Quote not followed up | Customer explicitly asked to wait, or quote is still within its validity window | Compare the next agreed contact date with the alert threshold |
| Open deal looks stalled | Opportunity is intentionally paused or awaiting procurement | Review stage definitions and the recorded pause reason |
| Unassigned lead | Shared queue or rotation policy intentionally delays assignment | Confirm assignment policy and queue ownership |
| Duplicate lead counted twice | CRM merge, migration or multiple sources created duplicate records | Reconcile authorized stable IDs and deduplication rules |
| Deal value marked 'at risk' | Pipeline value is a forecast, not profit; a deal may be disqualified | Verify currency, status and evidence before interpreting any sum |

## A safe 15-minute validation procedure

1. **Agree rules first:** define response window, timezone, business hours, stage exclusions, and what counts as a recorded reply.
2. **Minimize data:** use an authorized export with synthetic or pseudonymous IDs, timestamps, stages, and non-sensitive status fields. Avoid names, email addresses, phone numbers, full conversation text and credentials.
3. **Sample exceptions:** randomly select a small set of flagged rows and a small set of unflagged rows. Check both false positives and missed exceptions.
4. **Label outcomes:** classify each as confirmed actionable, expected behavior, insufficient evidence, or rule/data error.
5. **Report limits:** include sample size, rule version, false-positive observations and missing fields. Do not extrapolate recovered revenue from pipeline amounts.
6. **Compare alternatives:** check whether existing CRM views, automation or reporting already provide the required outcome.

### Example: illustrative synthetic record only

DEMO-007 | new inquiry | inbound 17:58 Friday | no CRM email reply by Monday 09:02

**Not yet established:** whether the team missed its SLA. The business-hours calendar, time zone, phone/chat activity and queue ownership could change the interpretation.

## How this relates to Lead Leakage Auditor

[LEAD LEAKAGE AUDITOR](../README.md) is an **offline CSV-based private prototype**, not a proven live CRM integration or an automated revenue-recovery service. It produces review candidates from authorized exports; real-customer accuracy and economic impact are **not yet validated**.

Start with the free [10-minute self-check](CRM-LEAD-LEAKAGE-SELF-CHECK.md). If a limited diagnostic is appropriate, [review scope and commercial options](COMMERCIAL_OPTIONS.md) before sharing any data. Do not upload customer exports to public GitHub issues.

---

## Кратко по-русски

**Семь типичных ложных срабатываний:** ответ в другом канале; неверный учёт рабочих часов; согласованная пауза после КП; намеренно отложенная сделка; общая очередь без персонального владельца; дубли CRM; неверная трактовка суммы сделки как потери прибыли.

**Порядок проверки:** согласовать SLA и календарь → взять обезличенную разрешённую выгрузку → проверить выборку сработавших и несработавших записей → разметить реальные и ложные сигналы → показать ограничения → сравнить со встроенными отчётами CRM. Ни один сигнал сам по себе не доказывает упущенную или возвращённую выручку.

*Educational material only. No legal, financial or performance guarantees. No customer case studies are claimed.*
