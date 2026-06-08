import { sum } from "../components/sum"

test("Calculates the sum of two numbers", () => {
    const result = sum(3, 4)
    
    expect(result).toBe(7)
})