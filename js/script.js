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
      text: 'Content unavailable at the moment'
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
