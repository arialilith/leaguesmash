const images = [
    './League Champs/aatrox.webp',
    './League Champs/ahri.webp',
    './League Champs/akali.webp',
    './League Champs/akshan.webp',
    './League Champs/alistar.webp',
    './League Champs/amumu.webp',
    './League Champs/anivia.webp',
    './League Champs/annie.webp',
    './League Champs/aphelios.jpg',
    './League Champs/aroura.webp',
    './League Champs/ashe.webp',
    './League Champs/aurelionsol.webp',
    './League Champs/azir.webp',
    './League Champs/bard.webp',
    './League Champs/belveth.webp',
    './League Champs/blitzcrank.webp',
    './League Champs/brand.webp',
    './League Champs/braum.webp',
    './League Champs/briar.webp',
    './League Champs/caitlyn.webp',
    './League Champs/camille.webp',
    './League Champs/cassiopeia.webp',
    './League Champs/chogath.webp',
    './League Champs/corki.webp',
    './League Champs/darius.webp',
    './League Champs/diana.webp',
    './League Champs/draven.webp',
    './League Champs/drmundo.webp',
    './League Champs/ekko.webp',
    './League Champs/elise.webp',
    './League Champs/evelyn.webp',
    './League Champs/ezreal.webp',
    './League Champs/fiddlesticks.webp',
    './League Champs/fiora.webp',
    './League Champs/fizz.webp',
    './League Champs/galio.webp',
    './League Champs/gangplank.jpg',
    './League Champs/garen.webp',
    './League Champs/gnar.webp',
    './League Champs/gragas.webp',
    './League Champs/graves.webp',
    './League Champs/gwen.webp',
    './League Champs/hecarim.webp',
    './League Champs/heimerdinger.webp',
    './League Champs/hwei.webp',
    './League Champs/illaoi.webp',
    './League Champs/irelia.webp',
    './League Champs/ivern.webp',
    './League Champs/janna.webp',
    './League Champs/jarveniv.webp',
    './League Champs/jax.webp',
    './League Champs/jayce.webp',
    './League Champs/jhin.webp',
    './League Champs/jinx.webp',
    './League Champs/kaisa.webp',
    './League Champs/kalista.webp',
    './League Champs/karma.webp',
    './League Champs/karthus.webp',
    './League Champs/kassadin.webp',
    './League Champs/katarina.webp',
    './League Champs/kayle.webp',
    './League Champs/kayne.webp',
    './League Champs/kennen.webp',
    './League Champs/khazix.webp',
    './League Champs/kindred.webp',
    './League Champs/kled.webp',
    './League Champs/kogmaw.webp',
    './League Champs/ksante.webp',
    './League Champs/leblanc.webp',
    './League Champs/leessin.webp',
    './League Champs/leona.webp',
    './League Champs/lillia.jpg',
    './League Champs/lissandra.webp',
    './League Champs/lucian.webp',
    './League Champs/lulu.webp',
    './League Champs/lux.webp',
    './League Champs/malphite.webp',
    './League Champs/malzahar.webp',
    './League Champs/maokai.webp',
    './League Champs/masteryi.webp',
    './League Champs/millio.webp',
    './League Champs/missfortune.webp',
    './League Champs/mordekaiser.webp',
    './League Champs/morgana.webp',
    './League Champs/naffiri.webp',
    './League Champs/nami.webp',
    './League Champs/nasus.webp',
    './League Champs/nautilus.webp',
    './League Champs/neeko.webp',
    './League Champs/nidalee.webp',
    './League Champs/niilah.webp',
    './League Champs/nocturne.webp',
    './League Champs/nunuandwillump.webp',
    './League Champs/olaf.webp',
    './League Champs/orn.webp',
    './League Champs/orianna.webp',
    './League Champs/pantheon.webp',
    './League Champs/poppy.webp',
    './League Champs/pyke.webp',
    './League Champs/qiyana.webp',
    './League Champs/quinn.webp',
    './League Champs/rakan.webp',
    './League Champs/rammus.webp',
    './League Champs/reksai.webp',
    './League Champs/rell.webp',
    './League Champs/renata.webp',
    './League Champs/renekton.webp',
    './League Champs/rengar.webp',
    './League Champs/riven.webp',
    './League Champs/rumble.webp',
    './League Champs/ryze.webp',
    './League Champs/samira.jpg',
    './League Champs/sejuani.webp',
    './League Champs/senna.webp',   
    './League Champs/seraphine.jpg',   
    './League Champs/sett.jpg',    
    './League Champs/shaco.webp',    
    './League Champs/shen.webp',    
    './League Champs/shyvana.webp',
    './League Champs/singed.webp',    
    './League Champs/sion.webp',    
    './League Champs/sivir.webp',    
    './League Champs/skarner.webp',    
    './League Champs/smolder.webp',    
    './League Champs/sona.webp',    
    './League Champs/soraka.webp',    
    './League Champs/swain.webp',    
    './League Champs/sylas.webp',    
    './League Champs/syndra.webp',    
    './League Champs/tahmkench.webp',    
    './League Champs/taliyah.webp',    
    './League Champs/talon.webp',    
    './League Champs/taric.webp',    
    './League Champs/teemo.webp',    
    './League Champs/thresh.webp',    
    './League Champs/tristana.webp',    
    './League Champs/trundle.webp',    
    './League Champs/tryndamere.webp',    
    './League Champs/twistedfate.webp',    
    './League Champs/twitch.webp',    
    './League Champs/udyr.webp',    
    './League Champs/urgot.webp',    
    './League Champs/varus.webp',    
    './League Champs/vayne.webp',    
    './League Champs/veigar.webp',    
    './League Champs/velkoz.webp',    
    './League Champs/vex.webp',    
    './League Champs/vi.webp',    
    './League Champs/victor.webp',    
    './League Champs/viego.webp',    
    './League Champs/vladimir.webp',
    './League Champs/volibear.jpg',   
    './League Champs/warwick.webp',    
    './League Champs/wukong.webp',    
    './League Champs/xayah.webp',    
    './League Champs/xerath.webp',    
    './League Champs/xinzhao.webp',    
    './League Champs/yasuo.webp',    
    './League Champs/yone.jpg',    
    './League Champs/yorick.webp',    
    './League Champs/yuumi.webp',    
    './League Champs/zac.webp',    
    './League Champs/zed.webp',    
    './League Champs/zeri.webp',    
    './League Champs/ziggs.webp',    
    './League Champs/zilean.webp',    
    './League Champs/zoe.webp',    
    './League Champs/zyra.webp'
];

let currentIndex = 0;
const answers = [];

document.addEventListener('DOMContentLoaded', () => {
    const currentCard = document.getElementById('current-card');
    const smashButton = document.querySelector('.smash');
    const passButton = document.querySelector('.pass');
    const tracker = document.querySelector('.tracker');
    const viewResultsButton = document.querySelector('.view-results');
    const resultsPopup = document.getElementById('results-popup');
    const closeResultsButton = document.querySelector('.close');
    const smashResults = document.getElementById('smash-results');
    const passResults = document.getElementById('pass-results');

    // Initialize tracker
    updateTracker();

    smashButton.addEventListener('click', () => {
        handleAnswer('smash');
    });

    passButton.addEventListener('click', () => {
        handleAnswer('pass');
    });

    viewResultsButton.addEventListener('click', () => {
        showResults();
        resultsPopup.style.display = 'block';
    });

    closeResultsButton.addEventListener('click', () => {
        resultsPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === resultsPopup) {
            resultsPopup.style.display = 'none';
        }
    });

    function handleAnswer(answer) {
        if (currentIndex >= images.length) {
            return; // Stop if all images are processed
        }

        answers.push({ image: images[currentIndex], answer: answer });
        currentIndex++;

        if (currentIndex < images.length) {
            currentCard.src = images[currentIndex];
        } else {
            currentCard.src = 'https://via.placeholder.com/300/000000?text=End'; // End of cards
        }

        updateTracker();
    }

    function updateTracker() {
        if (currentIndex < images.length) {
            tracker.textContent = `Completed: ${currentIndex} out of ${images.length}`;
        } else {
            tracker.textContent = `All images completed`;
        }
    }

    function showResults() {
        smashResults.innerHTML = '';
        passResults.innerHTML = '';

        answers.forEach(answer => {
            const img = document.createElement('img');
            img.src = answer.image;
            img.alt = 'Result Image';

            if (answer.answer === 'smash') {
                smashResults.appendChild(img);
            } else {
                passResults.appendChild(img);
            }
        });
    }
});
