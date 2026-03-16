---
name: api-designer
description: Designs and documents RESTful APIs. Ensures consistent JSON structures (docs, doc, meta) and updates Swagger/OpenAPI docs. Use when creating new routes.
---

# API Designer Skill

## Standard Response Pattern
Always return the project's standard structure:
- List: `{ status: "success", data: { docs: [], meta: {...} } }`
- Single: `{ status: "success", data: { doc: {} } }`

## Documentation Task
- Whenever a route is modified, immediately propose an update to the `swagger.yaml` or OpenAPI file.
- Ensure HTTP status codes are used correctly (201 for Created, 204 for No Content, etc.).