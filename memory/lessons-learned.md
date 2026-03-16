# 🎓 Lessons Learned & Anti-patterns

## ❌ Anti-patterns (Avoid these)
- **AP-01: Lockfile Conflict**: Using `npm install` instead of `yarn`. 
  - *Fix*: Integrated `check-yarn.sh` in Tech Lead skill.
- **AP-02: Missing Validation**: Adding routes without Joi schemas. 
  - *Fix*: Enforced via `/new-api` workflow.
- **AP-03: Vietnamese Naming**: Using non-English variable names.

## ✅ Best Practices (Follow these)
- **BP-01: Early Returns**: Always handle edge cases and errors at the top of functions.
- **BP-02: Mobile-First**: Build Tailwind layouts starting from `sm:`/`md:`.
- **BP-03: Incident Docs**: Always generate RCA docs in `docs/incidents/` after a `/fix-bug`.