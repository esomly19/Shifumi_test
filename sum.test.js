const {duel2}=require('./sum');


test('Player win', () => {
    expect(duel2("Ciseaux","Feuille")).toBe(true);
});
test('Player loose', () => {
    expect(duel2("Pierre","Feuille")).toBe(false);
});

test('Egalité', () => {
    expect(duel2("Pierre","Pierre")).toBe(null);
});



