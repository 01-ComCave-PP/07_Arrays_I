"use strict";

/* Die Satzbau-Maschine | Arrays */

/**  02.  Theorie Array          */


// let arr; 

// // arr = new Array(); // Konstruktor

// arr = [];  // Literal
// arr = [2, 7, 11, 4];
// arr = ["ich", "bin", "Max", "Mütze"];

// output(arr);
// output(arr.length);  // Anzahl der Elemente
// output(arr[0]);      // Omdes 0 (1. Pos. im Array)
// output(arr[3]);      // Konkret 
// output(arr[arr.length - 1]); // allgemein   





/** 02a. Theorie: Schleifen (for-schelife) */

//Inkrement (untere Grenze --> obere Grenze)

// for (let i = 0; i < 100; i++) {
//     output("index i: " + i);
    
// }


//Dekrement (obere Grenze --> untere Grenze)

// for (let i = 10; i > 0; i--) {
//     output("index i: " + i);
    
// }


// Inkrement (var. Schrittweite)

// for (let i = 0; i <= 100; i+= 10) {

//     output("index i: " + i);

// }






/** 02b for-schleife für Array-Index (Iteration) */

// let arr = ["ich", "bin", "der", "coole", "Mützerich"];


// for (let i = 0; i < 100; i++) {
//     output(arr[i]);
    
// }



/*
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/



/* Zu "Fuß" - DRY !!! */
// let a = 0; // Anfangswert
// output("inhalt von a: " + a);
// a = a + 1;  // a = 0 + 1
// output("inhalt von a: " + a);
// a = a + 1;  // a = 1 + 1
// output("inhalt von a: " + a);
// a = a + 1;  // a = 2 + 1
// output("inhalt von a: " + a);


/**      Besser mit FOR Schlefe */

// let a = 0;

// for (let i = 0; i < 10; i++) {
//     output("in der loop: " + a);
//     a = a + 1;
    
// }
// output("nach der loop: " + a);


/*

1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
Solange die Variable existiert, bleibt dieser erhalten
hier: Verkettung eines Strings // Transponierung

*/



// let str = "";
// let gap = " ";
// let addStr = "test";

// for (let i = 0; i <= 5; i++) {
//     output("in der loop: " + str);
//      // a = a + 1;  // Numerik
//     str = str + addStr + gap // Text

// }
// output("nach der loop: " + str);








/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."

// output(getSentence("ich", "bin", "Max", "Mütze"));
function getSentence(word1, word2, word3, word4) {

    const GAP   = " ";
    const PUNCT = ".";
    let str     =   word1 + GAP + 
                    word2 + GAP +
                    word3 + GAP +  
                    word4 + PUNCT;

   
   
   
   
    return str;
    
}




/** 01a. Funktionalität mit Array 1 */


// output(getSentenceArr(["ich", "bin", "der", "coole", "Mützerich"]))
function getSentenceArr(arr) {

    const GAP   = " ";
    const PUNCT = ".";
    let str     =   arr[0] + GAP + 
                    arr[1] + GAP +
                    arr[2] + GAP +  
                    arr[3] + GAP +
                    arr[4] + PUNCT;

   
   
   
   
    return str;
    
}



/** 01b. Funktionalität mit Array 2 */



output(getSentenceArr2(["ich", "bin", "der", "coole", "Mützerich"]))
function getSentenceArr2(arr) {

    const GAP   = " ";
    const PUNCT = ".";
    let str = "";
    
    for (let i = 0; i < arr.length; i++) {
        
        
        if (i != arr.length - 1) {
            str += arr[i] + GAP;
        } else {
            str += arr[i] + PUNCT;
        }
        
        
        
        
        
    }


    // str = str.trim();
    return str;
    
}





// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


