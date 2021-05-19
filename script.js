const main = document.createElement('div');
main.className = "main";
const footer = document.createElement('h3');
footer.innerHTML = "FaleMais &#0169"
footer.className = "footer"
const title = document.createElement('h1');
title.className = "title"
title.innerHTML = "FaleMais"

const subtitle = document.createElement('h2');
subtitle.className = "sub_title"
subtitle.innerHTML = "Aqui você FalaMais por menos";

const comPlano = document.createElement('h1');
comPlano.innerHTML = "Com FaleMais:"
comPlano.className = "com_plano"

const semPlano = document.createElement('h1');
semPlano.innerHTML = "Sem FaleMais:"
semPlano.className = "sem_plano";

const resultComPlano = document.createElement('h2');
resultComPlano.innerHTML = "";
resultComPlano.className = "com_plano_result"
resultComPlano.id = "com_plano";

const resultSemPlano = document.createElement('h2');
resultSemPlano.innerHTML = "";
resultSemPlano.className = "sem_plano_result"
resultSemPlano.id = "sem_plano";

const planTitle = document.createElement('h3');
planTitle.className = "plan_title";
planTitle.innerHTML = "Escolha seu plano.";

const originTitle = document.createElement('h3');
originTitle.className = "origin_title";
originTitle.innerHTML = "Escolha seu DDD";

const destinoTitle = document.createElement('h3');
destinoTitle.className = "destino_title";
destinoTitle.innerHTML = "Escolha o DDD de destino.";

const tempoTitle = document.createElement('h3');
tempoTitle.className = "tempo_title";
tempoTitle.innerHTML = "Tempo de ligação.";

// primeiro select
const plano = document.createElement('select');
plano.className = "plano";
const plan = document.createElement('option');
plan.value = '0';
plan.innerHTML = ' ';
plano.add(plan, plano.options[0]);

const plan1 = document.createElement('option');
plan1.value = '30';
plan1.innerHTML = 'FaleMais 30';
plano.add(plan1, plano.options[1]);

const plan2 = document.createElement('option');
plan2.value = '60';
plan2.innerHTML = 'FaleMais 60';
plano.add(plan2, plano.options[2]);

const plan3 = document.createElement('option');
plan3.value = '120';
plan3.innerHTML = 'FaleMais 120';
plano.add(plan3, plano.options[3]);

// segundo select
const origin = document.createElement('select');
origin.className = "origin";
const originZero = document.createElement('option');
origin.add(originZero, origin.options[0]);

const origin1 = document.createElement('option');
origin1.value = '11';
origin1.innerHTML = '11';
origin.add(origin1, origin.options[1]);

const origin2 = document.createElement('option');
origin2.value = '16';
origin2.innerHTML = '16';
origin.add(origin2, origin.options[2]);

const origin3 = document.createElement('option');
origin3.value = '17';
origin3.innerHTML = '17';
origin.add(origin3, origin.options[3]);

const origin4 = document.createElement('option');
origin4.value = '18';
origin4.innerHTML = '18';
origin.add(origin4, origin.options[4]);

// terceiro select
const destino = document.createElement('select');
destino.className = "destino";
const destZero = document.createElement('option');
destino.add(destZero, destino.options[0]);

const dest1 = document.createElement('option');
dest1.value = '11';
dest1.innerHTML = '11';
destino.add(dest1, destino.options[1]);

const dest2 = document.createElement('option');
dest2.value = '16';
dest2.innerHTML = '16';
destino.add(dest2, destino.options[2]);

const dest3 = document.createElement('option');
dest3.value = '17';
dest3.innerHTML = '17';
destino.add(dest3, destino.options[3]);

const dest4 = document.createElement('option');
dest4.value = '18';
dest4.innerHTML = '18';
destino.add(dest4, destino.options[4]);

const tempo = document.createElement('input');
tempo.className = "tempo";
tempo.placeholder = "digite tempo de ligação";

const btn = document.createElement('button');
btn.className = "btn_calcular"
btn.innerHTML= "Calcular";

const semPlanoFaleMais = () => {
  let originValue = origin.options[origin.selectedIndex].value;
  let destinoValue = destino.options[destino.selectedIndex].value;
  
  if(originValue == 11 && destinoValue == 16) {
    document.getElementById('sem_plano').innerHTML = `R$ ${tempo.value*1.90} Reais`
  }else if(originValue == 16 && destinoValue == 11){
    document.getElementById('sem_plano').innerHTML = `R$ ${tempo.value*2.90} Reais`
  }else if(originValue == 11 && destinoValue == 17){
    document.getElementById('sem_plano').innerHTML = `R$ ${tempo.value*1.70} Reais`;
  }else if(originValue == 17 && destinoValue == 11){
    document.getElementById('sem_plano').innerHTML = `R$ ${tempo.value*2.70} Reais`;
  }else if(originValue == 11 && destinoValue == 18){
    document.getElementById('sem_plano').innerHTML = `R$ ${tempo.value*0.90} Reais`;
  }else if(originValue == 18 && destinoValue == 11){
    document.getElementById('sem_plano').innerHTML = `R$ ${tempo.value*1.90} Reais`;
  }else {
    document.getElementById('sem_plano').innerHTML = '-';
  };
};

const comPlanoFaleMais = () => {
  let originValue = origin.options[origin.selectedIndex].value;
  let destinoValue = destino.options[destino.selectedIndex].value;
  let planoValue = plano.options[plano.selectedIndex].value;
  if(originValue == 11 && destinoValue == 16) {
    document.getElementById('com_plano').innerHTML = `R$ ${((tempo.value-planoValue)*2.09).toFixed(2)} Reais`;
  }else if(originValue == 16 && destinoValue == 11){
    document.getElementById('com_plano').innerHTML = `R$ ${((tempo.value-planoValue)*3.19).toFixed(2)} Reais`;
  }else if(originValue == 11 && destinoValue == 17){
    document.getElementById('com_plano').innerHTML = `R$ ${((tempo.value-planoValue)*1.87).toFixed(2)} Reais`;
  }else if(originValue == 17 && destinoValue == 11){
    document.getElementById('com_plano').innerHTML = `R$ ${((tempo.value-planoValue)*2.97).toFixed(2)} Reais`;
  }else if(originValue == 11 && destinoValue == 18){
    document.getElementById('com_plano').innerHTML = `R$ ${((tempo.value-planoValue)*1.8).toFixed(2)} Reais`;
  }else if(originValue == 18 && destinoValue == 11){
    document.getElementById('com_plano').innerHTML = `R$ ${((tempo.value-planoValue)*2.09).toFixed(2)} Reais`;
  }else {
    document.getElementById('com_plano').innerHTML = '-';
  }
}
btn.addEventListener("click", () => {
  let planoValue = plano.options[plano.selectedIndex].value;
  if(planoValue == 30 && tempo.value <= 30 || planoValue == 60 && tempo.value <= 60 || 
    planoValue == 120 && tempo.value <= 120) {
      document.getElementById('com_plano').innerHTML = 'você não precisa pagar nada...';
      semPlanoFaleMais();
    } else {
      semPlanoFaleMais();
      comPlanoFaleMais();
    };
});

main.appendChild(originTitle);
main.appendChild(origin);
main.appendChild(destinoTitle);
main.appendChild(destino);
main.appendChild(planTitle);
main.appendChild(plano);
main.appendChild(tempoTitle);
main.appendChild(tempo);
main.appendChild(comPlano);
main.appendChild(resultComPlano);
main.appendChild(semPlano);
main.appendChild(resultSemPlano);
main.appendChild(btn);

document.body.appendChild(title);
document.body.appendChild(subtitle);
document.body.appendChild(main);
document.body.appendChild(footer);
