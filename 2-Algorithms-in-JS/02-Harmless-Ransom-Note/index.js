function harmlessRansomNote(noteText, magazineText) {
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};

    magazineArr.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    var noteIsPossible = true;
    noteArr.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) noteIsPossible = false;
        } else noteIsPossible = false;
    });
    return noteIsPossible;

    //console.log(magazineObj);
}
console.log(harmlessRansomNote('this is all the magazine text in the magazine plus some more text to make it look better', 'this is all the magazine text in the magazine this is all the magazine text in the magazinethis is all the magazine text in the magazinethis is all the magazine text in the magazinethis is all the magazine text in the magazinethis is all the magazine text in the magazinethis is all the magazine text in the magazinethis is all the magazine text in the magazinethis is all the magazine text in the magazine'));