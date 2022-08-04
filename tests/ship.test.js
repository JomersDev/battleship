import { createShip } from '../src/ship';

describe('Ship initialized with correct values/properties', () => {
    const testShip = createShip('battleship');
    test('correct length assigned to ship', () => {
        expect(testShip.length).toBe(4);
    });
    test('correct type of ship', () => {
        expect(testShip.type).toBe('battleship');
    });
});

describe('Hit function test', () => {
    const testShip = createShip('battleship');
    test('no hits', () => {
        expect(testShip.hits).toEqual([0 , 0, 0, 0]);
    });
    test('one hit in index 1', () => {
        testShip.receiveHit(1);
        expect(testShip.hits).toEqual([0, 1, 0, 0]);
    });
    test('two hits at index 1 and 3', () => {
        testShip.receiveHit(1);
        testShip.receiveHit(3);
        expect(testShip.hits).toEqual([0, 1, 0, 1]);
    });
});

describe('isSunk function test', () => {
    const testShip = createShip('battleship');
    test('no hits not sunk', () => {
        expect(testShip.isSunk()).toBe(false);
    });
    test('one hit not sunk', () => {
        testShip.receiveHit(1);
        expect(testShip.isSunk()).toBe(false);
    });
    test('testShip has sunk', () => {
        testShip.receiveHit(0);
        testShip.receiveHit(1);
        testShip.receiveHit(2);
        testShip.receiveHit(3);
        expect(testShip.isSunk()).toBe(true);
    });
});

