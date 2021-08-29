import { IBadge } from '../redux/game/game.type';
export function randomDelay(badge: any) {
  return new Promise<IBadge>(resolve => {
    const max: number = 3500;
    const min: number = 1500;
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;

    setTimeout(() => {
      resolve(badge);
    }, delay);
  });
}

export async function calcComputed(list: IBadge[]) {
  const random = Math.floor(Math.random() * list.length);
  const data = await randomDelay(list[random]);
  return data;
}

export function calcResults(
  computedSelected: IBadge,
  userSelected: IBadge
): string {
  let results: string = '';

  switch (userSelected.name + computedSelected.name) {
    case 'paperrock':
    case 'scissorspaper':
    case 'rockscissors':
    case 'rocklizard':
    case 'lizardspock':
    case 'spockscissors':
    case 'scissorslizard':
    case 'lizardpaper':
    case 'paperspock':
    case 'spockrock':
      results = 'win';
      break;
    case 'paperscissors':
    case 'rockspock':
    case 'spockpaper':
    case 'paperlizard':
    case 'scissorsrock':
    case 'lizardscissors':
    case 'scissorsspock':
    case 'rockpaper':
    case 'lizardrock':
    case 'spocklizard':
      results = 'lose';
      break;
    case 'paperpaper':
    case 'rockrock':
    case 'scissorsscissors':
    case 'lizardlizard':
    case 'spockspock':
      results = 'draw';
      break;
  }

  return results;
}
