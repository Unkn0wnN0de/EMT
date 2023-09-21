window.addEventListener("load", () => {
    console.log(`Loaded Successfully`);
  });

  //++ Questions / Answers ++//
const cardiology = [
    {
      question: "You arrive to find a 48-year-old male complaining that his chest feels heavy.The patient is awake and talking to you. During your assessment you note that his skin is pale, cool, and clammy. Your first step is to ?",
      answers: {
        a: "apply your AED (automated external defibrillator).",
        b: "administer supplemental oxygen.",
        c: "obtain a past medical history.",
        d: "assist the patient in taking his neighbor's nitroglycerin." },
      correct: "b",
      fact: "Your first step is to administer supplemental oxygen. When treating chest pain it is important to get oxygen to the patient as soon as possible to help alleviate damage to the heart muscle.",
      standAlone: true
    },
    {
      question: "Which of the following is the correct flow of blood through the heart and lungs?",
      answers: {
        a: "inferior/superior vena cavae, lungs, right atrium,left atrium, right ventricle, left ventricle, aorta",
        b: "inferior/superior vena cavae,left atrium, left ventricle, lungs, right atrium, left ventricle, aorta",
        c: "inferior/superior vena cavae, lungs, aorta, left atrium, left ventricle, right atrium, left ventricle",
        d: "inferior/superior vena cavae, right atrium, right ventricle, lungs, left atrium, left ventricle, aorta"},
      correct: "d",
      fact: "The blood returns from the body to the heart through the inferior/superior vena cavae, to the right atrium, to the right ventricle. It then goes through the pulmonary vein. From the left atrium it goes to the left ventricle and back out to the body through the aorta.",
      standAlone: true
    },
    {
      question: "What does the mitral or bicuspid valve do? ",
      answers: {
        a: "prevents blood from backflowing into the left atrium.",
        b: "prevents blood from backflowing into the right atrium.",
        c: "prevents the blood from backflowing into the lungs.",
        d: "is located between the left atrium and the right ventricle."
      },
      correct: "a",
      fact: "The mitral of biscupid valve is located between the left atrium and the left ventricle. It prevents the blood from backflowing into the left atrium.",
      standAlone: true
    },
    {
      question: "The electrical impulse generated in the right atrium is called the ?",
      answers: {
        a: "atrioventricular node.",
        b: "purkinje fibers.",
        c: "sinoatrial node.",
        d: "exit node."
      },
      correct: "c",
      fact: "The electrical impulse generated at the right atrium is the sinoatrial node (SA node). It travels through both atria, causing both to contract simultaneously, which propels the blood to the ventricles.",
      standAlone: true
    },
    {
      question: "The AED (automated external defibrillator) is used to treat patients in ?",
      answers: {
        a: "asystole.",
        b: "ventricular tachycardia with a pulse.",
        c: "ventricular fibrillation.",
        d: "pulseless electrical activity."
      },
      correct: "c",
      fact: "The AED is designed to treat patients in v-fib or pulseless v-tach. The AED should only be connected to patients that are pulseless and apneic. The AED is designed to shock those electrical rhythms that are disorganized or very fast and do not have pulses associated with them.",
      standAlone: true
    }
  ];
  
  const airway = [
    {
      question: "When assessing a 35-year-old patient complaining she is short of breath, you note that her breathing is in excess of 28 times per minute. This is considered ?",
      answers: {
        a:"neuropnea.",
        b:"apnea.",
        c:"bradypnea.",
        d:"tachypnea." 
      },
      correct: "d",
      fact: "Respiratory rates greater than 20 breaths per minute are considered tachypnea. Less than 12 breaths per minute are bradypnea and absent breathing is apnea.",
      standAlone: true
    },
    {
      question: "The appropriate rate to ventilate a seven-year-old patient is ?", 
      answers: {
        a:"one breath evey 1 to 3 seconds.",
        b:"one breath every 2 to 4 seconds.",
        c:"one breath every 3 to 5 seconds.",
        d:"one breath every 4 to 6 seconds."
      },
      correct: "c",
      fact: "The appropriate rate to ventilate a seven-year-old would be one breath every three to five seconds.",
      standAlone: true
    },
    {
      question: "You are treating a patient with shortness of breath. You want to deliver 6 liters of oxygen per minute. You would deliver this flow rate with a ?",
      answers: {
        a: "nasal cannula.",
        b: "simple face mask.",
        c: "partial re-breather.",
        d: "non-rebreather."
      },
      correct: "a",
      fact: "The nasal cannula is used when you want oxygen to flow at a rate of 1 to 6 L/min. A nasal cannula delivers a concentration of oxygen in the range of 24 to 44 percent.",
      standAlone: true
    },
    {
      question: "When you auscultate a patient's lungs, you hear a harsh, high-pitched sound on inspiration. This sound is called ?",
      answers: {
        a: "snoring.",
        b: "gurgling.",
        c: "crowing.",
        d: "stridor."
      },
      correct: "d",
      fact: "When you hear a harsh, high-pitched sound on inspiration, you can almost be certain you are hearing stridor. Crowing and stridor are very similar except that crowing is a sound more like a cawing crow. Stridor is typically associated with an upper airway problem as a result of an infection, allergic reaction, or burn.",
      standAlone: true
    },
    {
      question: "In reference to the patient in the previous question you know the harsh sound is indicative of ?",
      answers: {
        a: "complete airway obstruction.",
        b: "CHF (congestive heart failure).",
        c: "poor lung sounds.",
        d: "partial airway occlusion."
      },
      correct: "d",
      fact: "Since there is air that is still moving in a patient that has the sounds of stridor, the patient has partial airway occlusion. Granted, the patient has poor lung sounds, but in this case the best and most appropriate answer is a partial airway occlusion.",
      standAlone: false
    }
  ];
  
  const medical = [
    {
      question: "Which component of blood provides an immune system for the body, by defending against infections?",
      answers: {
        a: "red blood cells",
        b: "white blood cells",
        c: "plasma",
        d: "platelets"
      },
      correct: "b",
      fact: "White blood cells provide part of the body's immune system, or defense against infections. Red blood cells give blood its color and transport the oxygen to the body's cells and carbon dioxide away from the body's cells. Plasma is the serum, or fluid, that carries blood cells and nutrients to the body's cells. Platelets are important in the formation of blood clots.",
      standAlone: true
    },
    {
      question: "When differentiating between angina pectoris and a myocardial infarction, you know that..",
      answers: {
        a: "there is no difference between the two.",
        b: "angina pectoris is caused by physical or emotional stress.",
        c: "rest will relieve symptoms of a myocardial infarction.",
        d: "the pain from angina pectoris is continual and will not go away."
      },
      correct: "b",
      fact: "Angina pectoris is usually caused by a physical or emotional state of stress. It usually only lasts from 3 to 8 minutes, but no longer than 10 minutes. It is usually relieved by rest, unlike a myocardial infarction.",
      standAlone: true
    },
    {
      question: "Which of the following is the first line of defense in fighting against infectious disease?",
      answers: {
        a: "vaccinations",
        b: "hand washing",
        c: " using BSI (Body Substance Isolation)",
        d: "using 100% bleach"
      },
      correct: "b",
      fact: "The most fundamental process and the first line of protection against infectious disease is hand washing. Vaccinations and BSI (Body Substance Isolation) are important components of preventing infectious diseases, but hand washing is the most fundamental and first line of protection.",
      standAlone: true
    },
    {
      question: "You are on the scene with a patient dying from a terminal illness. The spouse of the patient begins to verbally attack you. Which emotional stage is this individual exhibiting?",
      answers: {
        a: "denial",
        b: "anger",
        c: "bargaining",
        d: "depression"
      },
      correct: "b",
      fact: "As the dying patient and/or the patient's family moves through the stages of emotion, you may find yourself in the middle of the situation. In this case the patient's family is really not angry at you, but exhibiting the signs of anger commonly found at this stage in the process.",
      standAlone: true
    },
    {
      question: "You arrive on the scene to find a patient who had a productive cough for the past two weeks. The patient is complaining of a fever and night sweats. Your next step would be to ?",
      answers: {
        a: "obtain better medical history.",
        b: "obtain vital signs.",
        c: "immediately transport the patient to the hospital.",
        d: "put your HEPA (High-Efficiency-Particulate-Air Filter Respirator) mask on."
      },
      correct: "d",
      fact: "A patient with a productive cough for any length of time should be suspect for TB (Tuberculosis). Nonetheless, a mask is an important universal precaution for any patient with a productive cough to prevent the spread of any airborne infectious disease.",
      standAlone: true
    }
  ];
  
  const pediatrics = [
    {
      question: "There are three stages of labor. In the second stage of labor..",
      answers: {
        a:"labor pains develop.",
        b:"the cervix becomes dilated.",
        c:"the baby is born.",
        d:"the placenta is expelled."
      },
      correct:"c",
      fact: "In the first stage of labor, the cervix becomes fully dialated. During the second stage of labor, the infant moves through the birth canal and is born. During the third stage of labor, the placenta separates from the uterine wall and is expelled from the uterus.",
      standAlone: true
    },
    {
      question: "Any female of child-bearing age, 12 to 50 years old, who is complaining of abdominal pain, may be..",
      answers: {
        a:"pregnant.",
        b:"suffering from influenza.",
        c:"having an appendicitis attack.",
        d:"having a severe reaction."
      },
      correct: "a",
      fact: "Any female patient who is of child bearing age from 12 to 50, may be pregnant if they are complaining of abdominal pain. This does not mean that a patient of this age range is pregnant just because she is having abdominal pain, but you should have a high suspicion. Even if she is taking birth control measures, the only foolproof way not to get pregnant is not to have sex. Consider questioning younger patients in private rather than having their parents present. They may deny having sex when questioned in front of their parents, so be cautious when asking questions in these circumstances.",
      standAlone: true
    },
    {
      question: "You are called to the scene of a 23-year-old female patient who is complaining of a severe, persistent headache. She has been vomiting and complaining of abdominal pain. She states she has gained 5 pounds in the past week and thinks she may be pregnant. She ahs not been eating well and has not been urinating as often as usual. Upon physical exam her blood pressure is 170/102, pulse is 98, and respirations are 20. You suspect this patient to be suffering from..",
      answers: {
        a:"abruptio placenta.",
        b:"toxemia.",
        c:"gestation diabetes.",
        d:"ectopic pregnancy." 
      },
      correct:"b",
      fact: "These are classic signs of the first stage of toxemia, which is called pre-eclampsia. In the second stage of toxemia, the patient experiences life-threatening seizures. During these seizures the placenta can separate from the uterine wall. Depending on the severity of the seizure, the patient and/or fetus may die as a result of cerebral hemorrhage, respiratory arrest, kidney failure or circulatory collapse.",
      standAlone: true
    },
    {
      question: "The greatest and most frequent concern for the patient in the previous question is ..",
      answers: {
        a:"seizures.",
        b:"bleeding.",
        c:"miscarriage.",
        d:"imminent death." 
      },
      correct:"a",
      fact: "As noted in the previous question, the most common and greatest concern for this patient is seizures.",
      standAlone: false
    },
    {
      question: "A minute after the baby is born, the heart rate is less than 60 beats per minute. You should ..",
      answers: {
        a:"blow by oxygen.",
        b:"attempt to stimulate the newborn.",
        c:"aggressively warm the newborn.",
        d:"begin chest compressions."
      },
      correct:"d",
      fact: "Once the infant is born and the heart rate is below 100 beats per minute, is cyanotic and is not breathing adequately, you should begin ventilation assistance by bag-valve-mask at a rate of 40-60 ventilation's per minute. If the infant doesn't improve with a heart rate of greater than 80 beats per minute after one minute of assisting ventilation's you should begin chest compressions.",
      standAlone: true
    }
  ]
  
  const trauma = [
    {
      question: "You arrive on the scene to discover an unconscious patient. Upon completing your initial assessment, you find the patient to be pulseless and apneic. Your next step would be to ?",
      answers: {
        a: "begin CPR",
        b: "give two ventilations.",
        c: "apply the AED (automated external defibrillator).",
        d: "check the pulse for another 60 seconds."
      },
      correct: "c",
      fact: "The first step in an unconscious, pulseless, apneic patient is to apply the AED. It is important to deliver a counter-shock with the AED if the patient is in v-fib or pulseless v-tach.",
      standAlone: true
    },
    {
      question: "You arrive on the scene to discover a 65-year-old female lying on the floor of her living room. Your first step in the care of this patient is to ?",
      answers: {
        a: "begin chest compressions.",
        b: "apply the AED (automated external defibrillator).",
        c: "maintain an open airway.",
        d: "assess level of consciousness."
      }, 
      correct: "d",
      fact: "The first step when arriving at the patient's side is to establish the patient's level of responsiveness.",
      standAlone: true
    },
    {
      question: "You arrive on the scene of a patient who fell from a ladder. You should open the patient's airway by using ?",
      answers: {
        a: "head-tilt / chin-lift",
        b: "jaw-thrust maneuver",
        c: "neck-lift / head-tilt",
        d: "head-tilt / jaw-thrust"
      },
      correct: "b",
      fact: "Care should be taken when opening an airway in a patient with a possible or suspected head or neck injury. The jaw-thrust maneuver is the choice in opening an airway in these patients.This keeps the head in a neutral position and does not put any undue stress on the cervical spine.",
      standAlone: true
    },
    {
      question: "Arriving on the scene to find an unresponsive patient, the patient begins to vomit. You turn on your suction unit an prepare to suction. You should apply suction ..",
      answers: {
        a: "as you insert the catheter.",
        b: "by alternating every 5 seconds between inserting and withdrawing the catheter.",
        c: "while withdrawing the catheter, and for no more than 15 seconds.",
        d: "while inserting and withdrawing the catheter."
      },
      correct: "c",
      fact: "Suction should only be applied when you withdraw the catheter. Suctioning should only last for 15 seconds. Patients become hypoxix during the suctioning process and need to be ventilated or supplied with oxygen for a 2-minute period between suctioning.",
      standAlone: true
    },
    {
      question: "You are treating a choking victim when he loses consciousness. You assist the patient to the floor. Your next step should be to.. ",
      answers: {
        a: "attempt to ventilate the patient.",
        b: "perform five abdominal thrusts.",
        c: "establish responsiveness.",
        d: "begin CPR."
      },
      correct: "d",
      fact: "Once the patient becomes unresponsive, you need to activate the emergency response system and begin CPR. Since you are the emergency response system, you would immediately begin CPR.",
      standAlone: true
    }
  ];

//^^ Selectors ^^//
const questionSection = document.querySelector(".questions");
const questionTxt = document.querySelector("#q-text");
const choiceSection = document.querySelector(".options-section");
const choiceA = document.querySelector("#a");
const choiceB = document.querySelector("#b");
const choiceC = document.querySelector("#c");
const choiceD = document.querySelector("#d");
const allChoices = document.querySelectorAll(".multi-choice");



//^^ Retrieve Selected Subject From Session Storage ^^/
  const mainSubject = sessionStorage.getItem("subject");
  console.log(mainSubject);

//^^ created elements //
const nextBtn = document.createElement("button");
nextBtn.textContent = "Next";
nextBtn.classList.add("next-btn");
choiceSection.appendChild(nextBtn);
nextBtn.style.display = "none";
//^^ event listener for next button //
nextBtn.addEventListener("click", (e) => {
  console.log(e.target, "was clicked;");
  setQA(subject);
 });

//** globals,  current question index - for updating results */
let indx = 0;
let totalCorrect = 0;
let subjectLength = 0;
let totalIncorrect = 0;
let isCorrect;
let subject; 

//** Necessary Functions */
function setup(s) {
    switch(s) {
      case "air": 
       console.log("Airway Subject was Selected");
       start(airway);
       setQA(airway);
      break;
      case "airway":
        console.log("span text - airway was selected");
        start(airway);
        setQA(airway);
        break;
      case "cardio":
        console.log("Cardiology Subject was selected");
        start(cardiology);
        setQA(cardiology);
      break;
      case "pulse":
        console.log("span text - pulse / cardiology was selected");
        start(cardiology);
        setQA(cardiology);
        break;
      case "med":
        console.log("Medical Subject was Selected");
        start(medical);
        setQA(medical);
      break;
      case "cross":
        console.log("span text - Cross / Medical was selected");
        start(medical);
        setQA(medical);
        break;
      case "obs":
        console.log("Obs / Pediatrics was selected");
        start(pediatrics);
        setQA(pediatrics);
      break;
      case "family":
        console.log("span text - family / Obs was selected");
        start(pediatrics);
        setQA(pediatrics);
        break;
      case "trauma":
        console.log("Trauma / Emergency  was Selected");
        start(trauma);
        setQA(trauma);
      break;
      case "emergency":
        console.log("span text - emergency / trauma was selected");
        start(trauma);
        setQA(trauma);
        break;
      case "all":
        console.log("All above Subjects were selected");
        generateAllSubject();
        start(allSubjectQuestions);
        setQA(allSubjectQuestions);
        console.warn("No questions and answers found"); 
      break;
      case "allAbove":
        console.log("span text - all above / all subjects was selected");
        generateAllSubject();
        start(allSubjectQuestions);
        setQA(allSubjectQuestions);
        console.warn("No Questions and answers found");
        break;
    }
  };

//** should display current questions and choices */
function setQA(s) {
    console.log("---- setQA -----");
    update();
    console.log("Updated Index = ", indx);
  
   if (indx <= s.length - 1) {
    console.log(" ");
    console.log(`Subject Question :`, s[indx].question);
    console.log("Total Questions in Subject: ", s.length);
    console.log("Main-Index: ", indx);
    console.log(`Total Correct: ${totalCorrect}`);
    console.log(`Total Incorrect: ${totalIncorrect}`);
    questionTxt.textContent = s[indx].question;
    choiceA.textContent = s[indx].answers.a;
    choiceB.textContent = s[indx].answers.b;
    choiceC.textContent = s[indx].answers.c;
    choiceD.textContent = s[indx].answers.d;
    
     allChoices.forEach((choice) => {
       choice.addEventListener('click', (e) => {
         e.target.id === s[indx].correct ? isCorrect = true : isCorrect = false;
         displayResults(s);
         disableChoices();
         displayNextBtn(s);
         e.stopImmediatePropagation();
        })
      })
   } else if (indx >= s.length - 1) {
    console.warn(" Index exceeds Array length!!");
    console.log("---- End ----");
    end();
   }
  };

//** removes subject buttons and displays q/a section */
function start(s) {
  questionSection.style.display = "flex";
  choiceSection.style.display = "flex";
  subjectLength = s.length;
  subject = s;
 };

//** removes q/a section */
function end() {
    const displayResults = document.createElement('p');
    const backButton = document.createElement('button');
  
    
    backButton.textContent = `Back To Subjects`;
    displayResults.classList.add('show-correct');
    backButton.classList.add('reset-button');
  
    questionSection.classList.add('questions-ending-section');
  
    //++ display results = total correct / incorrect //
    questionTxt.textContent = `Number of Questions = ${subjectLength}`;
    displayResults.textContent = `Correct: ${totalCorrect}, Incorrect: ${totalIncorrect}`;
    questionTxt.style.gridRow = 2;
    questionTxt.style.alignText = "center";
    choiceSection.style.display = "none";
  
    questionSection.after(displayResults);
    displayResults.after(backButton);
  
    backButton.addEventListener("click", () => {
      // Redirect the user to the other HTML page.
      window.location.href = 'index.html';
      // Reset the current sessionStorage.
      sessionStorage.clear();
    });
  };

//** updates indx and calls reset function //
function update() {
    if(nextBtn.style.display === "block") {
      removeAndReset();
      indx++;
      console.log(`Is Correct: ${isCorrect}`);
      isCorrect === true ? totalCorrect++ : totalIncorrect++;
    }
  };

 //** hides next button and resets borders //
 function removeAndReset() {
    nextBtn.style.display = "none";
    
    //** reset all correct/incorrect borders **/
    allChoices.forEach((choice) => {
      choice.style.border = "";
      choice.removeAttribute('disabled');
     })
  };

//** highlights correct/incorrect //
function displayResults(s) {
    console.log(" --- displayBorder function ---");
    console.log("Correct answer is highlighted and rest are turned red/wrong");
    
   for(let i = 0; i < allChoices.length; i++) {
    allChoices[i].id === s[indx].correct ? allChoices[i].style.border = "0.2rem solid yellowgreen" : allChoices[i].style.border = "0.2rem solid red"; 
    }
  }; 

//** disables all choice buttons //
function disableChoices() {
    console.log("--- Disable Buttons function ---");
    allChoices.forEach((choice) => {
      choice.setAttribute('disabled', ' ');
    })
  };

//** Displays next btn //
function displayNextBtn(s) {
    console.log("--- displayNextBtn function ---");
     nextBtn.style.display = "block";
  };

//** --- Begin Section on Generating All Subject Questions --- */

//* returns a random numb from 0 to given range //
function randomNum(arrayLen) {
    const randomDecimal = Math.random() * arrayLen;
    const convertedInt = Math.round(randomDecimal);
    return convertedInt;
  };
  
  
  //** All subjects Global Variables List */
  const arrOfSubjects = [cardiology, airway, medical, pediatrics, trauma];
  const allSubjectQuestions = [];
  
  //** generates the Questions for all Subject - given a num */
  function generateAllSubject(numOfQuestions = 5) {
    console.log(`---- Generate All Subject's Questions List of ${numOfQuestions} -----`);
    //console.log(" ");
     //** while count is less than num generate a random and if that random is standAlone add to count and add to array, if not count doesn't change and while loop continues to run */
    //^^ put into it's own function  -- getStandAloneQuestions //
     console.log("------ Generate Only standAlone Questions -----");
     let count = 0;
    while(count < numOfQuestions) {
      let randomSub = randomNum(4);
      let randomQuest = randomNum(4);
      let candidate = arrOfSubjects[randomSub][randomQuest];
  
      if(candidate.standAlone) {
        allSubjectQuestions.push(candidate);
        count++;
      }
    };
    console.log(`Generated:`, allSubjectQuestions);
  
     console.log("Has Duplicates: ",containsDuplicates(allSubjectQuestions));
  
     //** while requirements not met keep working! */
     getQuestions(allSubjectQuestions, numOfQuestions);
  
     console.log(" ");
     console.log("Is Array Unique? ", containsDuplicates(allSubjectQuestions) === false);
     console.log("Is Count Acceptable? : ", isCount(allSubjectQuestions,numOfQuestions));
    console.log("Final", allSubjectQuestions);
  };
  //** test  generates a array of random questions from all subjects */
  //^^ test  might need to place inside subject btn event handler */
  //generateAllSubject(10);
  
  
  //** create a function that takes an array and removes duplicates*/
  function removeDupes(arr) {
   let copyArr = [...arr];
   console.log("----- Begin Dupe Removal -----");
   console.log(`Before Dupe Removal: `, arr);
   
   //^^ finds and removes all duplicates //
   copyArr.forEach((q,index) => {
    
      for(let i = 0; i < arr.length; i++) {
        
        if (q === arr[i] && 
          index !== i) {
          console.log(index, q, `is Duplicate:`,q === arr[i],`has different Index? `, index !== i, arr[i], i);
           console.log(arr[i], i, "------ was removed ------");
           arr.splice(i,1);
           copyArr.splice(i, 1);
        }
      }
   })
   console.log("After Dupe Removal: ", arr);
  };
  
  
  //++ Adds a new unique question after checking if it isn't a duplicate //
  function addReplace(arr, num) {
    if (arr.length < num) {
      console.log("bug: ",arrOfSubjects.length - 1, arrOfSubjects);
      let newSub = randomNum(arrOfSubjects.length - 1);
      console.log("bug: ", arrOfSubjects[newSub].length -1 , arrOfSubjects[newSub]);
      let subjectLen = arrOfSubjects[newSub].length - 1 ;
      let newQuest = randomNum(subjectLen);
      let newCandidate = arrOfSubjects[newSub][newQuest];
      //^^ checks if new Candidate is unique against current arr */
      const check = (current) => current === newCandidate;
      //^^ will return true if one match is found */
      const isDupe = arr.some(check);
      console.log("Is New Candidate a Dupe: ", isDupe);
      console.log("Is Candidate standAlone: ", newCandidate.standAlone === false);
      if (isDupe || newCandidate.standAlone === false) {
        console.log("Failed Candidate", newCandidate);
      } else {
        console.log("Potential Candidate Found!", newCandidate);
        arr.push(newCandidate);
        console.log("New Question Added to Array: ", arr);
      }
    }
  };
  
  
  //^^ function that confirms each question in the given array is unique // 
  
  //++ checks if the array of objects has any duplicated objects //
  function containsDuplicates(arr) {
    let hasDuplicates = false;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //** compares the string in question property to the rest of the questions in the same array //
      if (arr[i].question === arr[j].question) {
        hasDuplicates = true;
        break;
      }
    }
  }
  if (hasDuplicates) {
    console.warn('The array has duplicates');
    return true;
  } else {
    return false;
   }
  };
  
  
  
  
  //++ function that confirms the required amount of questions// 
  function isCount(arr, num) {
    return arr.length === num;
  };
  
  
  
  function getQuestions(arr, num) {
    while(containsDuplicates(arr) || arr.length < num) {
      removeDupes(arr);
      addReplace(arr, num);
      containsDuplicates(arr);
     }
  };
  
//^^ Init questions by injecting selected subject ^/
setup(mainSubject);