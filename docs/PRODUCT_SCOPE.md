# LEAD LEAKAGE AUDITOR · Technical scope v0.2

## Demonstrated in synthetic testing

- Local browser CSV import for an authorized CRM export, subject to a 3 MB / 5,000 record limit.
- Comma, semicolon and tab separators; common RU/EN CRM column aliases.
- Timestamp parsing and rule-based checks for unanswered incoming requests, stale proposals, overdue tasks and idle open opportunities.
- De-duplicated review queue and downloadable CSV summary.
- Flagged nominal amounts in RUB; entries recorded in other currencies **must not** be added to RUB totals.
- Existing private repository includes reproducible Node tests; **47/47 tests passed during the verified GitHub release import on October 24, 2026**. The specific tests do not establish customer production acceptance.

## Not demonstrated

- Real CRM API integration or automated follow-up messaging.
- Live money recovery, actual conversion lift, verified revenue loss or automated attribution.
- Cloud hosting for end users, subscription billing, a production backend, real-time monitoring or high availability.
- Independent security certification or GDPR/152-FZ/PCI compliance confirmation for any specific client.
- Support for every CRM field schema, business calendar and customized sales pipeline.

## Correct measurement

A flagged deal's nominal amount is **potential exposure under review**, not proof of lost sales, lost profit, or recovered revenue. A buyer-specific validation sample, human reconciliation and scope-specific acceptance rules must precede any operational claims.

## Buyer acceptance path

1. Identify the sales process and clarify how the CRM records contact and follow-up events.
2. Prepare an authorized and preferably anonymized CSV sample.
3. Check 10–20 records manually against CRM event history.
4. Compare false positives/false negatives against a written decision rule.
5. Agree a fixed deliverable, appropriate confidentiality and data handling, correction window and post-delivery support in a written agreement.
