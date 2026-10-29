# CRM merge QA: a practical sampling and acceptance checklist

*A vendor-neutral, read-only field guide for CRM administrators and RevOps teams. Educational material; not a customer case study, certification, or claim that our prototype checks a live CRM.*

## The decision

After bulk imports, enrichment, or automated deduplication, a lower duplicate count is **not** evidence that merges were correct. Check whether the right records, values, relationships, and histories survived. Preserve the original export and a dated post-change snapshot **with authorized access** before investigating.

## 1. Establish a traceable comparison

- Record the import batch ID, original source record IDs, merge/survivor IDs, timestamp, matching rule, and enrichment source when available.
- Define which fields are authoritative and which are merely suggested by third-party enrichment. A verified human-entered value should not silently be replaced by an inferred value.
- Decide in advance which errors are release-blocking: two distinct people merged; wrong company association; lost or reassigned activity; consent/preference changes; corrupted ownership; missing required fields.
- Keep snapshots and review notes in approved storage with access controls. Do not publish customer identifiers, emails, phone numbers, or exports.

## 2. Sample for two different questions

**Representative error-rate signal:** Select records randomly from the *entire changed population*, not just convenient successes. For a purely random independent sample of 50 with zero observed defects, the rough “rule of three” still allows an upper 95% error-rate bound near **6%**. This is an approximation under statistical assumptions, not a guarantee; clustered errors and biased selection invalidate the interpretation.

**High-risk failure discovery:** Separately inspect cases that are more likely to break: shared inboxes, common surnames, subsidiaries, reseller domains, personal email addresses, conflicting owners, conflicting verified fields, multiple associations, large activity histories, opt-outs, and ambiguous fuzzy matches. This is **not** a statistically representative sample. Report its results separately.

Do not combine these two groups into one claimed population-wide defect rate. Fifty manual spot checks may be a useful early screen, but cannot prove a 5,000-record import is error-free.

## 3. Review each selected record against the original

| Check | Evidence to compare | Blocker example |
| --- | --- | --- |
| Identity | Source IDs and surviving IDs | Two different people collapsed into one contact |
| Company association | Pre/post company IDs and domains | Contact attached to a different customer |
| Field provenance | Original verified value vs enriched value | Verified phone/industry silently overwritten |
| Activity history | Counts, timestamps, authors, linked records | Notes or calls missing or attached to wrong contact |
| Ownership and stage | Before/after owner and lifecycle fields | Open opportunity reassigned or incorrectly closed |
| Consent/preferences | Original lawful consent and suppression flags | Unsubscribed contact becomes subscribed |
| Duplicate resolution | Merge rule, surviving ID, unresolved candidates | Ambiguous pair auto-merged without review |

## 4. Log defects and decide whether to release

Record: check ID, source record ID (in restricted evidence only), expected outcome, actual outcome, severity, cause hypothesis, owner, remediation, retest, and sign-off. Escalate any high-severity defect to the CRM owner before broad rollout. Recheck *both* corrected records and adjacent cases affected by the same rule. Keep rollback and restoration procedures available; test them separately.

**Acceptance language:** “In this defined sample and these fields, N exceptions were found; remaining risk is unmeasured.” Do **not** say “all records verified,” “no migration errors,” or “revenue recovered” based on a small sample.

## What our prototypes do — and do not do

The **CRM Migration Validator** is an experimental scoped snapshot comparator, not a live HubSpot merge-history or consent auditor. The **Lead Leakage Auditor** is a local, offline CSV workflow-exception prototype, not an automatic merge-fixer or proof of recoverable revenue. The manual checks above require authorized CRM access and a human reviewer; they are not claimed software features.

For related free resources, see [12 migration acceptance checks](CRM-MIGRATION-READINESS-CHECKLIST.md), [CRM lead leakage self-check](CRM-LEAD-LEAKAGE-SELF-CHECK.md), and [false positives](CRM-LEAD-LEAKAGE-FALSE-POSITIVES.md).

---

## Кратко по-русски

После автоматического объединения CRM-записей недостаточно посчитать удалённые дубли. Сверяйте идентичность контактов, связи с компаниями, подтверждённые поля, историю действий, ответственных и согласия. Отдельно проверяйте случайную выборку и записи повышенного риска; не смешивайте их статистику. Ноль ошибок в 50 случайных независимых проверках **не означает** нулевой риск: приблизительная верхняя 95%-ная граница доли ошибок всё ещё около 6% при выполнении статистических допущений. Документ образовательный, не является результатом реального клиентского внедрения.
