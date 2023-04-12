import Daemon from '../math/Daemon';
import Magician from '../math/Magician';
import NewRules from '../math/NewRules';


const daemon = new Daemon();
const magician = new Magician();


test.each([
  ['Daemon', magician],
  ['Magician', daemon],
])('class "%s" has "attack", "stoned" properties and inherits from "NewRules" class', (_, player) => {
  expect(player.attack).toBeGreaterThan(0);
  expect(player.stoned).toBeFalsy();
  expect(player).toBeInstanceOf(NewRules);
});

describe.each([
  ['Daemon', magician],
  ['Magician', daemon],
])(
  'class %s has:',
  (_, player) => {
    test('"getStoned" method works', () => {
      expect(player.getStoned()).toBeFalsy();
    });

    test('"setStoned" method works', () => {
      player.setStoned(true);

      expect(player.getStoned()).toBeTruthy();
    });

    test('"getAttack" method works', () => {
      expect(player.getAttack()).toBeGreaterThan(0);
    });

    test('"setAttack" method works', () => {
      player.setStoned(false)
      player.setAttack(2);

      expect(player.getAttack()).toBe(90);

      player.attack = 100
      player.setStoned(true);
      player.setAttack(2);
      expect(player.getAttack()).toBe(85);

      player.attack = 100
      player.setStoned(false)
      player.setAttack(11);
      expect(player.getAttack()).toBe(0);
    });
  },
);