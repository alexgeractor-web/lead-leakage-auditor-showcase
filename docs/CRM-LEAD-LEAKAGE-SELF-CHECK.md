# CRM Lead Leakage: a 10-minute self-check
*A practical checklist for sales operations teams. No account, CRM password, live connector, or personal data required.*

Most revenue-leakage dashboards start with a monetary headline. Start with **verifiable workflow exceptions** instead. A late follow-up is a risk signal — it is **not** proof of a lost sale or recoverable revenue.

## Five questions worth checking

1. **Unanswered inquiries:** Are there new inbound leads with no recorded first response after your agreed service window?
2. **Overdue next actions:** Are open opportunities missing a next step or showing a next-action date in the past?
3. **Unanswered proposals:** Were quotations sent but no follow-up scheduled, despite the team's own process requiring one?
4. **Stalled opportunities:** Which open records have had no documented activity beyond a business-appropriate threshold?
5. **Ownership gaps:** Which open inquiries have no assigned responsible person or have conflicting ownership?

## Minimal, privacy-conscious workflow

- Agree your thresholds **before** reviewing results (e.g., working-hours response windows; separate enterprise deals from small inquiries).
- Use an **authorized, minimized export** with record IDs, stage, status, timestamps and non-sensitive ownership labels. Avoid names, phones, emails, financial account details and message contents whenever they are not necessary.
- Filter duplicates and account for weekends, holidays, time zones, pauses and deliberately closed or disqualified records.
- Flag exceptions for a **human review queue**; do not silently change CRM stages or contact real customers automatically.
- Verify a sample of flagged records against your actual operating policy; count true positives and false positives before estimating business value.
- Record whether an action was taken and what happened afterwards. Never equate total pipeline face value with profit recovered.

### Sample review table — illustrative data only

| Synthetic ID | Observation | What to verify |
| --- | --- | --- |
| DEMO-001 | New inquiry; no recorded reply | Was a response made via another channel? |
| DEMO-002 | Proposal sent; follow-up date passed | Was follow-up deliberately postponed? |
| DEMO-003 | Open opportunity; owner empty | Is this an intentional shared queue? |

**Suggested measurement:** reviewed exceptions, confirmed actionable exceptions, median time to first response, overdue-task share, and downstream customer outcomes. For a fair comparison, measure against the same customer segment and process over time. These are evaluation metrics, not promised improvements.

## When does specialized software make sense?

If manual checks repeatedly reveal meaningful exceptions, a small offline diagnostic may be worth testing **before** commissioning a continuous CRM integration. Existing CRM reports or automation may already solve the problem; compare them first.

**LEAD LEAKAGE AUDITOR** is a private, browser-based **CSV prototype** currently tested with synthetic scenarios, designed to flag workflow anomalies for human review. It is **not** a live CRM integration, a proven revenue-recovery system, or a certified production product. The public showcase contains no commercial core or customer records.

- [Product scope and limitations](PRODUCT_SCOPE.md)
- [Commercial discussion options](COMMERCIAL_OPTIONS.md)
- [Private inquiry](mailto:agenticcommerce975@gmail.com?subject=CRM%20Lead%20Leakage%20Assessment) — **describe the use case at a high level; do not attach customer exports or credentials**
- [Ask a non-confidential question](https://github.com/alexgeractor-web/lead-leakage-auditor-showcase/issues/new?template=buyer-inquiry.yml)

---

## Краткая памятка на русском

**Как за 10 минут проверить потенциальные потери заявок:** проверьте (1) обращения без ответа, (2) просроченные следующие действия, (3) забытые коммерческие предложения, (4) сделки без активности, (5) заявки без ответственного. Сначала определите регламентные сроки, затем используйте разрешённую обезличенную выгрузку CRM. Сверяйте с реальными процессами компании: не каждое «просрочено» является ошибкой.

**Важно:** сумма помеченных сделок не равна потерянной или возвращённой прибыли. Выявленные записи требуют проверки человеком. Наш Lead Leakage Auditor — пока локальный CSV-прототип без доказанных клиентских внедрений и интеграции с работающей CRM. Для обсуждения возможного пилота: [рабочая почта](mailto:agenticcommerce975@gmail.com?subject=Lead%20Leakage%20Auditor%20Inquiry), **без отправки клиентских данных и паролей**.
