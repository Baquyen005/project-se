---
name: handover-protocol
description: Standards for transferring task context between agents. Use this whenever an agent completes a subtask within a Task Group.
---
# Handover Protocol Skill

## Requirements
Before marking a task as "Complete," the current agent must generate a `handover.md` in the `runtime/` directory.

## Handover Template
- **Agent Name**: [Current Agent]
- **Summary**: Brief description of logic implemented.
- **Files Touched**: List of paths.
- **Breaking Changes**: Any changes to API contracts or DB schemas.
- **Instructions for Next Agent**: (e.g., "QA needs to test the edge case where the token is expired").