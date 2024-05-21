const quizWrappers = document.querySelectorAll('.quiz-wrapper');
const alleSpoergsmaal = quizWrappers.length - 1; 
let nuSpoergsmaal = 0;

const visSpoergsmaal = (index) => {
    quizWrappers.forEach((wrapper, i) => {
        wrapper.style.display = i === index ? 'block' : 'none';
    });
};

visSpoergsmaal(nuSpoergsmaal);

const klikAnsvarlig = (event) => {
    if (nuSpoergsmaal < alleSpoergsmaal) {
        nuSpoergsmaal++;
        visSpoergsmaal(nuSpoergsmaal);
    } else {
        visSpoergsmaal(alleSpoergsmaal + 1);
    }
};

document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('click', klikAnsvarlig);
});

/*
                                                                            dyrepleje
*/
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.knap-box button.dyre-knap');
    const infoContainer = document.getElementById('info-container');
    const infoBoxes = infoContainer.querySelectorAll('.info-box');

    let currentlyVisibleBoxId = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const infoId = button.getAttribute('data-info');
            const infoBox = document.getElementById(infoId);

            // If the clicked button corresponds to the currently visible info box, hide it
            if (currentlyVisibleBoxId === infoId) {
                infoBox.style.display = 'none';
                currentlyVisibleBoxId = null;
            } else {
                // Hide all info boxes
                infoBoxes.forEach(box => box.style.display = 'none');

                // Show the selected info box
                if (infoBox) {
                    infoBox.style.display = 'block';
                    currentlyVisibleBoxId = infoId;
                }
            }
        });
    });
});
