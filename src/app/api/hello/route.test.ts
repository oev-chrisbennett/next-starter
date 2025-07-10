import { describe, expect, test } from "vitest"
import { GET } from "./route"

describe("Hello API Route 🧪", () => {
    test("should return the correct response with status 200 ✅", async () => {
        const response = await GET()
        expect(response.status).toBe(200)

        const data = await response.json()
        expect(data).toHaveProperty("message", "Hello, API! 🌟")
        expect(data).toHaveProperty("timestamp")
    })
})
