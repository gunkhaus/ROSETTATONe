//describe the notes in a key by numerical representation - easier computing
//char keyOfA=["A","B","C#","D","E","F#","G#"];
const keyA= [1,3,5,6,8,10,12];
const keyAs = [2,4,6,7,9,11,1];
const keyB = [3,5,7,8,10,12,2];
const keyC = [4,6,8,9,11,1,3];
const keyCs = [5,7,9,10,12,2,4];
const keyD = [6,8,10,11,1,3,5];
const keyDs = [7,9,11,12,2,4,6];
const keyE = [8,10,12,1,3,5,7];
const keyF = [9,11,1,2,4,6,8];
const keyFs = [10,12,2,3,5,7,9];
const keyG = [11,1,3,4,6,8,10];
const keyGs = [12,2,4,5,7,9,11];

//var decoder=["A","As","B","C","Cs","D","Ds","E","F","Fs","G","Gs"];
const stringA=[1,2,3,4,5,6,7,8,9,10,11,12,1];
const stringAs=[2,3,4,5,6,7,8,9,10,11,12,1,2];
const stringB=[3,4,5,6,7,8,9,10,11,12,1,2,3];
const stringC=[4,5,6,7,8,9,10,11,12,1,2,3,4];
const stringCs=[5,6,7,8,9,10,11,12,1,2,3,4,5];
const stringD=[6,7,8,9,10,11,12,1,2,3,4,5,6];
const stringDs=[7,8,9,10,11,12,1,2,3,4,5,6,7];
const stringE=[8,9,10,11,12,1,2,3,4,5,6,7,8];
const stringF=[9,10,11,12,1,2,3,4,5,6,7,8,9];
const stringFs=[10,11,12,1,2,3,4,5,6,7,8,9,10];
const stringG=[11,12,1,2,3,4,5,6,7,8,9,10,11];
const stringGs=[12,1,2,3,4,5,6,7,8,9,10,11,12];

const stringOne=[8,9,10,11,12,1,2,3,4,5,6,7,8];
const stringTwo=[3,4,5,6,7,8,9,10,11,12,1,2,3];
const stringThree=[11,12,1,2,3,4,5,6,7,8,9,10,11];
const stringFour=[6,7,8,9,10,11,12,1,2,3,4,5,6];
const stringFive=[1,2,3,4,5,6,7,8,9,10,11,12];
const stringSix=[8,9,10,11,12,1,2,3,4,5,6,7,8];

const noteOrder=['A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];


//what string is a value 1-6 that determines the string choice
//noteSelection tells what Note has been selected for the string
//chosenKey is the key itself


function makeString(whatString, noteSelection, keyOfChoice,mode){

    var location;
    for(var i = 0 ; i < 11 ; i++){
        if (keyOfChoice==noteOrder[i]){
            location = i;
        }
    }

    if (mode=='Major'){
        location+=0;
    } else if (mode=='Minor' || mode=="Aeolian"){
        location+=3;
    } else if (mode=='Dorian'){
        location+=10;
    } else if (mode=='Phrygian'){
        location+=8;
    }  else if (mode=='Lydian'){
        location+=7;
    } else if (mode=='Mixolydian'){
        location+=5;
    } else if (mode=='Locrian'){
        location+=1;
    }

    keyOfChoice=noteOrder[location];
    

    if(keyOfChoice=='A'){
        chosenKey='A';
        noteFinder(whatString,noteSelection,keyA);
    } else if (keyOfChoice=='A#'){
        chosenKey='A#';
        noteFinder(whatString,noteSelection,keyAs);
    } else if (keyOfChoice=='B'){
        chosenKey='B';
        noteFinder(whatString,noteSelection,keyB); 
    } else if (keyOfChoice=='C'){
        chosenKey='C';
        noteFinder(whatString,noteSelection,keyC);    
    } else if (keyOfChoice=='C#'){
        chosenKey='C#';
        noteFinder(whatString,noteSelection,keyCs);      
    } else if (keyOfChoice=='D'){
        chosenKey='D';
        noteFinder(whatString,noteSelection,keyD);      
    } else if (keyOfChoice=='D#'){
        chosenKey='D#';
        noteFinder(whatString,noteSelection,keyDs);     
    } else if (keyOfChoice=='E'){
        chosenKey='E';
        noteFinder(whatString,noteSelection,keyE);   
    } else if (keyOfChoice=='F'){
        chosenKey='F';
        noteFinder(whatString,noteSelection,keyF);       
    } else if (keyOfChoice=='F#'){
        chosenKey='F#';
        noteFinder(whatString,noteSelection,keyFs);     
    } else if (keyOfChoice=='G'){
        chosenKey='G';
        noteFinder(whatString,noteSelection,keyG);    
    } else if (keyOfChoice=='G#'){
        chosenKey='G#';
        noteFinder(whatString,noteSelection,keyGs);   
    }
}
function noteDetermine(noteSelection){
    if (noteSelection==A){
        return stringA;
    }
}

function noteFinder(whatString, noteSelection, keyOfChoice){
    var place=0;
    var stringChoice;
    var notesInKey=[];
    var placeholder;
    var letterNote;

    if (noteSelection=='A'){
        letterNote='A';
        stringNote=stringA;
    } else if (noteSelection=='A#'){
        letterNote='A#';
        stringNote=stringAs;
    }  else if (noteSelection=='B'){
        letterNote='B';
        stringNote=stringB;
    }  else if (noteSelection=='C'){
        letterNote='C';
        stringNote=stringC;
    }  else if (noteSelection=='C#'){
        letterNote='C#';
        stringNote=stringCs;
    }  else if (noteSelection=='D'){
        letterNote='D';
        stringNote=stringD;
    }  else if (noteSelection=='D#'){
        letterNote='D#';
        stringNote=stringDs;
    }  else if (noteSelection=='E'){
        letterNote='E';
        stringNote=stringE;
    }  else if (noteSelection=='F'){
        letterNote='F';
        stringNote=stringF;
    }  else if (noteSelection=='F#'){
        letterNote='F#';
        stringNote=stringFs;
    }  else if (noteSelection=='G'){
        letterNote='G';
        stringNote=stringG;
    }  else {
        letterNote='G#';
        stringNote=stringGs;
    } 



    if(whatString=='1'){
        stringChoice="highEString";
        changeNote(letterNote, 'highE');
    } else if (whatString=='2'){
        stringChoice="BString";
        changeNote(letterNote, 'B'); 
    } else if (whatString=='3'){
        stringChoice="GString";
        changeNote(letterNote, 'G'); 
    } else if (whatString=='4'){
        stringChoice="DString";
        changeNote(letterNote, 'D'); 
    } else if (whatString=='5'){
        stringChoice="AString";
        changeNote(letterNote, 'A'); 
    } else if (whatString=='6'){
        stringChoice="EString";
        changeNote(letterNote, 'E'); 
    }
 
    

    //for every note in key...
    for(var i = 0; i<7 ;i++){
        //for every fret
        for( var j = 0 ;j<13 ;j++){
            //if the notes line up...
            if(keyOfChoice[i]==stringNote[j]){
                //every spot on the fretboard that has a note in key is saved
                notesInKey[place]=j;
                place++;
            }
        }
        //send notesInKey to a function to turn it into a line of string and print it out
        //document.getElementById('key').textContent="?";
    }
    //reorganize numbers smallest to largest
    for(var i = 0; i < place ; i++){
        for (var j = 0; j < place ; j++){
            if(notesInKey[i]<notesInKey[j]){
                //rearrange the array to put the least nodes first
                placeholder = notesInKey[j];
                notesInKey[j]=notesInKey[i];
                notesInKey[i]=placeholder;
                }
            }
        }
        outputString(notesInKey, stringChoice, place);
    }

function outputString(notesInKey, stringChoice, howManyNotes){
    let newTabline='|';
    for(var i = 0; i < howManyNotes ; i++){

    if (notesInKey[i]<10){
        if (notesInKey[i]==0){
            newTabline+=(notesInKey[i].toString());
            if (notesInKey[1]==1){
                newTabline+=' ';
                newTabline+=(notesInKey[i+1].toString());
                i++;
            }

        } else if (notesInKey[0]!=0 && i==0){
            newTabline+='- ';
            newTabline+=(notesInKey[i].toString());
            if (notesInKey[1]==2){
                newTabline+=' ';
                newTabline+=(notesInKey[i+1].toString());
                i++;
            }
            
        } else {
            if ((notesInKey[i])+1==notesInKey[i+1]){
                newTabline+=' - ';
                newTabline+=(notesInKey[i].toString());
                newTabline+=' ';
                newTabline+=(notesInKey[i+1].toString());
                i++;
                
            } else {
                newTabline+=' - ';
                newTabline+=(notesInKey[i].toString());
            }
            
          
        }   
    } else {
        if (notesInKey[i-1]==8 && notesInKey[i]!=9){
            newTabline+=' - ';
        }

        if (notesInKey[i]==9&&notesInKey[i+1]!=10){
            newTabline+=' -- ';
        }

        if (notesInKey[i]==10&&notesInKey[i+1]==12){
            newTabline+=(notesInKey[i].toString());
            newTabline+=' -- ';
            newTabline+=(notesInKey[i+1].toString());
        } else if (notesInKey[i]==11&&notesInKey[i+1]==12){
            newTabline+=' -- ';
            newTabline+=(notesInKey[i].toString());
            newTabline+=' ';
            newTabline+=(notesInKey[i+1].toString());
        } else if (notesInKey[i]==10&&notesInKey[i+1]==11){
            if(notesInKey[i-1]==8){
                newTabline+=(notesInKey[i].toString());
                newTabline+=' ';
                newTabline+=(notesInKey[i+1].toString());
                newTabline+=' -- ';
                i++;
            } else {
                newTabline+=' -- ';
                newTabline+=(notesInKey[i].toString());
                newTabline+=' ';
                newTabline+=(notesInKey[i+1].toString());
                i++;
            }
        } else if (notesInKey[i]==11) {
            newTabline+=' -- ';
            newTabline+=(notesInKey[i].toString());
            newTabline+=' -- ';
        } else if(notesInKey[i]==12&&notesInKey[i-1]==10&&notesInKey[i-2]==9){
            newTabline+=' -- ';
            newTabline+=(notesInKey[i].toString());
        }
       
}
}
    
    newTabline+=' | ';
    //for loop to run through all found notes for the string
    document.getElementById(stringChoice).textContent=newTabline;
    
}