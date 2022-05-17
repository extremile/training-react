// regle numéro 1 on parle pas de fight club
// regle numéro 2 Lorsque vous créez un component et que celui-ci comporte uniquement un code HTML, on écrira le component comme le cas 2 et 3
// regle numéro 3: on ne mettra pas de parentheses lorsqu' on ecrit que de l'HTML quand le code est court
// regle numéro 4: on  mettra des parentheses lorsqu' on a un code plus long
// regle numéro 5: Lorsque notre component contient du code JS, il faut mettre des acolades {} et faire un return de notre HTML ( et on ajoute des parentheses si le code est long) comme dans le cas 1
// regle numéro 6: toujours retourner de JSX avec un élément parent et unique qui contient plusieurs elements ou un element comme dans le cas 4

// cas 1
export const MonsterGreen = () => {
  const color = 'Green';
  return <div>Le monstre est {color}</div>;
};
// cas 2
export const MonsterDrink = () => <div>Le monster est cool</div>;
// cas 3
export const MonsterLagwe = () => (
  <div>
    <h1>Le monster est cool</h1>
    <p>Il est le descendant des Romains</p>
  </div>
);

// cas 4

export const MonstreLustre = () => (
  <>
    {/* on écrit un commentaire dans le JSX de cette manière */}
    <div>Lolita</div>
    <div>Bus</div>
  </>
  // on va utiliser un fragment (<></>) pour eviter de mettre une div inutile
);
