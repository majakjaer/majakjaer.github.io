document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

 
  const references = {
    shuang: {
      name: 'Shuang L. Frost',
      role: 'Professor · Aarhus Universitet',
      text: 'To whom it may concern,
I am pleased to recommend Maja Kjær, whose master’s thesis I supervised in the Master’s Degree in Information Studies at Aarhus University. Her thesis, Rethinking Clickability: Context-Dependent Dynamics in News Headline Performance, received a grade of 12. This is the highest grade on the Danish seven-point scale. Both the external reviewer and I commented it is one of the strongest master theses we have graded in recent years.
  
Maja is easy to work with. She came to every supervision meeting prepared with draft material and specific questions, and she kept to every deadline we agreed on. She is also a quick learner. The thesis required her to acquire the tools of linguistic analysis and apply them to 22,690 Danish news headlines linked to click data. She measured headline complexity through the LIX readability index and a word-frequency weight computed against a Danish lexical corpus, coded content features such as numbers, direct address and punctuation, and added transformer-based topic modelling. Many of these methods was new to her, but she took up the initiative to learn them to produce a stronger thesis.
  
She also demonstrated broad knowledge about digital platform and online news industry. She carried out the project in collaboration with Vitec Visiolink, a supplier of digital publishing solutions, and worked from their office throughout. Her central finding is original and consequential for the business of online news. Headline features that the industry treats as engagement levers show weak effects in aggregate because their effects vary in strength and direction across topics. The finding challenges formula-driven headline optimisation.
  
Finally, Maja responds well to feedback. When I challenged her analytical choices, she returned with a stronger argument or a revised design, and each round of criticism produced a visibly better draft. She is an independent thinker and worker. She secured access to a commercial company’s data systems, wrote her own Python scripts for extraction and analysis, and let unexpected results drive her research design.
  
I have full confidence that Maja will be fast learner and strong innovator in her future job. I recommend Maja without reservation. I am happy to provide further information.
  
Yours sincerely,
  
Shuang Lu Frost
Associate Professor
Department of Digital Design and Information Studies School of Communication and Culture, Aarhus University 
shuangfrost@cc.au.dk'
    },
    cecilie: {
      name: 'Cecilie Vestergaard',
      role: 'Business Intelligence Specialist · Vitec Visiolink',
      text: 'Content unavailable at the moment'
    },
    jens: {
      name: 'Jens Kjær',
      role: 'Team Captain · Team Rynkeby Ringe',
      text: `Til Maja Kjær

        Deltager på Team Rynkeby Ringe 2025 og 2026

        Nogle vil sige man skal være lidt skør for at cykle fra Danmark til Paris – og så endda 2 gange.

        Skør eller ej, Maja har gjort det med fuld power og højt humør. Et humør der ikke blot har fået hende til Paris, men også hendes holdkammerater. Når nogle havde det svært, og synes det hele kunne være lidt træls, var Maja der med overskud og opbakning. Det har for Maja aldrig været et individuelt mål, men nærmere en oplevelse for livet og fuld power på det supportende sociale engagement.

        Som vi siger på Team Rynkeby: Vi noget godt for andre, samtidig med at vi gør noget godt for os selv i et forpligtende socialt fællesskab.

      Maja er den bedste ambassadør for dette Motto, hun spreder god energi, overskud og en stålsat vilje på at se fremad.

      Maja har ligeledes, på fornem vis, bidraget med indsamling af midler til Børnecancer- og Børnelungefonden. Det har hun sat en stor ære i, så igen har projektet for Maja rakt ud over egne mål og ambitioner. Hvilket er kendetegnende for Maja, at hun er der for andre og hjælper hvor hun kan hjælpe.

      Team Rynkeby Ringe fortsætter nu uden Maja, men vi vil aldrig glemme det bidrag hun har tilført holdet og fællesskabet

      Hermed kan jeg kun give Maja de bedste anbefalinger og ved med sikkerhed, at hun altid vil være der for andre med overskud og et godt smittende humør.

      Kaptajn Team Rynkeby Ringe

      Jens Kjær`
}
  };

  const modal = document.getElementById('ref-modal');
  const label = document.getElementById('ref-label');
  const title = document.getElementById('ref-title');
  const role = document.getElementById('ref-role');
  const text = document.getElementById('ref-text');


function openReference(ref) { 
  label.textContent = 'REFERENCE'; 
  title.textContent = ref.name; 
  role.textContent = ref.role; 
  text.textContent = ref.text; 
  modal.classList.add('open'); 
  modal.setAttribute('aria-hidden', 'false'); 
  document.body.style.overflow = 'hidden'; }

  function closeReference() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('.ref-button').forEach(btn => btn.addEventListener('click', () => openReference(references[btn.dataset.ref])));
  document.querySelector('.modal-close').addEventListener('click', closeReference);
  document.querySelector('.modal-backdrop').addEventListener('click', closeReference);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeReference(); });
});
