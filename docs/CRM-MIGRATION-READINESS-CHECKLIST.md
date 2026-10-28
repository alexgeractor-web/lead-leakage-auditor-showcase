# CRM migration: 12 read-only acceptance checks before trusting your pipeline
*Free, vendor-neutral operational checklist | 28 October 2026 | English*

A migration is not complete when the destination CRM opens successfully. It is complete only when an **authorized business owner** accepts a defined set of data and workflow checks. This checklist is a manual review guide, **not** a software certification, vendor integration, customer case study or legal opinion.

## First: define a safe comparison

Obtain written authorization from the data owner. Keep source and destination snapshots within the customer's approved environment. Use stable record IDs and only the minimum fields necessary; avoid uploading contacts, messages, credentials or financial identifiers to public services. Document a freeze/cutover timestamp, the records in scope, permitted transformations, and a rollback owner.

For every check, record: **PASS / FAIL / UNKNOWN**, sample size, source of evidence, discrepancy count, person responsible, and decision. UNKNOWN is not PASS.

| # | Acceptance check | How to verify without changing production records | Example failure |
|---|---|---|---|
| 1 | **Identity coverage** | Compare unique source IDs against a documented destination-ID crosswalk. Count missing and unexpected records separately. | 18 source deals have no mapped destination ID. |
| 2 | **Duplicate handling** | Check duplicate IDs within each snapshot; distinguish legitimate multiple contacts from accidental duplicates. | One source contact appears twice after import. |
| 3 | **Field mapping** | For each critical custom field, document target type, null handling, allowed values and intentional exclusions. | A custom lead source becomes blank. |
| 4 | **Pipeline stages** | Compare counts and individual stage transitions under an approved mapping table. | “Qualified” becomes “Closed won.” |
| 5 | **Money and currency** | Reconcile deal amounts **per currency** and by record, with a declared rounding rule. Never silently sum USD and EUR. | A 2-decimal amount is truncated. |
| 6 | **Ownership and permissions** | Sample assignment of owners, teams and access restrictions with authorized test accounts. | All opportunities are reassigned to an administrator. |
| 7 | **Dates and time zones** | Compare source and destination timestamps in a common timezone; verify nulls, DST and future-date handling. | A callback deadline moves to the previous day. |
| 8 | **Relationships** | Sample contact–company–deal and parent/child associations; verify orphan counts. | Deals exist but lose their company association. |
| 9 | **Activities and history** | Inventory notes, emails, tasks, attachments and audit-history requirements; explicitly mark unsupported imports. | Deal values match, but follow-up tasks vanish. |
| 10 | **Automation and integrations** | Inventory every workflow, trigger, webhook and connected app; test with synthetic records in an authorized sandbox. | Duplicate reminder emails are sent after cutover. |
| 11 | **Business-process exceptions** | With agreed business-hour thresholds, sample unanswered inbound inquiries, overdue next steps and stalled open deals. Verify false positives manually. | Missing migrated reply history looks like an unanswered lead. |
| 12 | **Cutover, rollback and sign-off** | Document backup restoration, write freeze, monitoring, accountable approvers and objective go/no-go criteria. | No recoverable baseline exists after import. |

## A practical acceptance worksheet

Use a local spreadsheet with columns:
`check_id,scope,baseline_count,destination_count,exceptions,reviewed_sample,pass_fail_unknown,evidence_location,owner,decision_date`.

Illustrative **synthetic** examples (not real customers):
- **PASS:** 200/200 synthetic IDs have one-to-one mappings; all 20 sampled stages match the approved mapping.
- **FAIL:** 3 of 200 synthetic deals have different currency codes; investigate before approval.
- **UNKNOWN:** Destination contains 200 records, but activity-history export is unavailable. Record counts alone cannot establish migration integrity.

**Suggested go/no-go rule:** do not accept critical identity, stage, currency, access-control or workflow failures without documented business-owner approval of a remediation or exception. The organization must set its own risk tolerance and materiality thresholds.

## Limits of automated CSV comparison

A CSV-only comparison can detect some missing/extra IDs and differences in selected fields. It cannot, by itself, prove correct relationships, user permissions, automation behavior, complete activity history, or regulatory compliance. Never equate a zero-difference CSV result with a fully successful CRM migration.

**Project transparency:** Digital Asset Factory has an experimental **CRM Migration Validator** for narrow synthetic CSV reconciliation. It has no verified live CRM migration, independent certification, or real customer acceptance. The separate **Lead Leakage Auditor** is an offline CSV prototype for human review of potential workflow exceptions; it is not a proven revenue recovery service.

Related free resources: [Five lead workflow checks](CRM-LEAD-LEAKAGE-SELF-CHECK.md) · [Seven common false positives](CRM-LEAD-LEAKAGE-FALSE-POSITIVES.md) · [Product limitations](PRODUCT_SCOPE.md).

For a non-confidential question, use [GitHub Issues](https://github.com/alexgeractor-web/lead-leakage-auditor-showcase/issues/new?template=buyer-inquiry.yml). Do **not** send customer exports, private contact lists, credentials or secrets.

---

## Кратко по-русски

Перед приёмкой миграции CRM проверьте: (1) идентификаторы, (2) дубликаты, (3) соответствие полей, (4) этапы воронки, (5) суммы и валюты, (6) владельцев и доступы, (7) даты и часовые пояса, (8) связи записей, (9) историю взаимодействий, (10) автоматизации, (11) ошибки обработки заявок, (12) резервное восстановление и акт приёмки.

Фиксируйте **ПРОЙДЕНО / ОШИБКА / НЕИЗВЕСТНО**, доказательства и ответственного. Совпадение количества строк не доказывает успешность переноса. Используйте только разрешённые минимизированные данные; не публикуйте клиентские выгрузки. CRM Migration Validator пока экспериментальный CSV-прототип, а не проверенное решение для промышленной миграции.
