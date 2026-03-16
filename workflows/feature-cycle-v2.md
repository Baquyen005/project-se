---
description: Feature Delivery v2
---

# Workflow: Feature Delivery v2
Command: `/feature-cycle`

## Phase 1: Planning
1. **PM** -> **BA** -> **System Architect** create the blueprint.
2. **Task Planner** creates a **Task Group** with modular subtasks.

## Phase 2: Implementation
3. **Backend/Frontend/DB/API** implement code in parallel Task Sections.
4. **Refactoring Specialist** & **Code Reviewer** provide real-time feedback.

## Phase 3: Browser-Aided Verification
5. **QA Engineer** invokes the **Browser Subagent** to:
   - Perform Visual Regression on the UI.
   - Execute E2E flows directly on the web interface.
   - Capture videos/logs of the successful verification.

## Phase 4: Closure
6. **Documentation Writer** updates Wiki.
7. **Release Manager** tags the version and triggers **DevOps** deployment.
8. **Memory Manager** archives the session to project memory.