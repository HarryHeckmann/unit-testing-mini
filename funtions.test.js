const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions')

test('returns 2', () => {
    expect(returnTwo()).toBe(2)
})

test('returns name', () => {
    expect(greeting('Harry')).toBe('Hello, Harry.')
    expect(greeting('Leslie')).toBe('Hello, Leslie.')
})


describe('Math Functions', () => {
    test('returns sum', () => {
        expect(add(1, 2)).toBe(3)
        expect(add(5, 9)).toBe(14)
    })
    test('returns product', () => {
        expect(multiply(1, 2)).toBe(2)
        expect(multiply(5, 9)).toBe(45)
    })
    test('returns divedend', () => {
        expect(divide(4, 2)).toBe(2)
        expect(divide(10, 2)).toBe(5)
    })
    test('returns difference', () => {
        expect(subtract(2, 1)).toBe(1)
        expect(subtract(9, 5)).toBe(4)
    })
})