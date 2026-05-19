<script>
let currentOpen = null;

function showSection(id, btn) {
  const section = document.getElementById(id);

  if (currentOpen === id) {
    section.style.display = 'none';
    currentOpen = null;
    btn.classList.remove('active');
    return;
  }

  document.querySelectorAll('.tab-content').forEach(s => {
    s.style.display = 'none';
  });

  document.querySelectorAll('.tabs button').forEach(b => {
    b.classList.remove('active');
  });

  section.style.display = 'block';
  btn.classList.add('active');
  currentOpen = id;
}

// 10 sets x 10 questions = 100 total
const quizSets = [
[
{q:"What is statics mainly about?",choices:["Objects accelerating","Objects at rest or moving at constant velocity","Objects heating up","Objects changing shape"],answer:1},
{q:"If an object has no acceleration, what must be true?",choices:["Net force is zero","Weight is zero","Mass is zero","Friction is always zero"],answer:0},
{q:"Force is a vector because it has what?",choices:["Only magnitude","Only direction","Magnitude and direction","Only units"],answer:2},
{q:"What unit is force measured in?",choices:["Meters","Newtons","Kilograms","Seconds"],answer:1},
{q:"Weight acts in what direction?",choices:["Upward","Downward","Sideways","Parallel to the surface"],answer:1},
{q:"A 10 kg box rests on a table. What is its weight?",choices:["10 N","98 N","9.8 N","1000 N"],answer:1},
{q:"A box rests on a flat table with no other vertical forces. What force balances its weight?",choices:["Friction","Tension","Normal force","Air resistance"],answer:2},
{q:"A 20 kg object rests on a horizontal floor. What is the normal force?",choices:["20 N","98 N","196 N","392 N"],answer:2},
{q:"If a 50 N force pushes right and a 50 N force pushes left, what is ΣFx?",choices:["100 N","50 N","0 N","25 N"],answer:2},
{q:"If ΣFx = 0 and ΣFy = 0, the object is in what condition?",choices:["Acceleration","Translational equilibrium","Free fall","Rotation"],answer:1}
],
[
{q:"What does ΣFx = 0 mean?",choices:["Vertical forces are balanced","Horizontal forces are balanced","The object has no mass","Friction is zero"],answer:1},
{q:"What does ΣFy = 0 mean?",choices:["Horizontal forces are balanced","Vertical forces are balanced","The object rotates","The surface disappears"],answer:1},
{q:"A 5 kg object hangs from one rope. What is its weight?",choices:["5 N","49 N","98 N","50 kg"],answer:1},
{q:"A 5 kg object hangs motionless from one rope. What is the tension?",choices:["5 N","49 N","98 N","0 N"],answer:1},
{q:"What force resists motion between surfaces?",choices:["Weight","Tension","Friction","Normal force"],answer:2},
{q:"What is the formula for friction from the lesson?",choices:["W = mg","F = μN","Fx = Fsinθ","Fy = Fcosθ"],answer:1},
{q:"If μ = 0.2 and N = 100 N, friction equals what?",choices:["5 N","20 N","50 N","100 N"],answer:1},
{q:"A 100 N force acts at 0° horizontally. What is Fx?",choices:["0 N","50 N","100 N","9.8 N"],answer:2},
{q:"A 100 N force acts at 0° horizontally. What is Fy?",choices:["0 N","50 N","100 N","98 N"],answer:0},
{q:"If ΣFy is not zero, what will happen?",choices:["The object accelerates vertically","The object must stay still","Mass becomes zero","Friction disappears"],answer:0}
],
[
{q:"Which force is a pulling force through a rope or cable?",choices:["Normal force","Tension","Weight","Friction"],answer:1},
{q:"The normal force acts how compared to the surface?",choices:["Parallel","Perpendicular","Downward only","At random"],answer:1},
{q:"A 30 kg object rests on a table. Its weight is closest to what?",choices:["30 N","294 N","3000 N","9.8 N"],answer:1},
{q:"A 30 kg object rests on a table. Normal force is closest to what?",choices:["30 N","294 N","3000 N","0 N"],answer:1},
{q:"A 200 N force acts at 60°. Which formula finds the horizontal component?",choices:["Fx = Fcosθ","Fx = Fsinθ","W = mg","F = μN"],answer:0},
{q:"A 200 N force acts at 60°. Which formula finds the vertical component?",choices:["Fy = Fcosθ","Fy = Fsinθ","W = mg","F = μN"],answer:1},
{q:"A 100 N force acts at 60°. Fx equals about what?",choices:["50 N","86.6 N","100 N","160 N"],answer:0},
{q:"A 100 N force acts at 60°. Fy equals about what?",choices:["50 N","86.6 N","100 N","160 N"],answer:1},
{q:"A crate has 120 N right and 90 N left. What is net horizontal force?",choices:["210 N right","30 N right","30 N left","0 N"],answer:1},
{q:"Is the crate in horizontal equilibrium if the net horizontal force is 30 N right?",choices:["Yes","No","Only if it is heavy","Only if friction exists"],answer:1}
],
[
{q:"Balanced forces do what to each other?",choices:["Add forever","Cancel out","Create mass","Remove gravity"],answer:1},
{q:"A table pushes upward on a box. What force is this?",choices:["Weight","Normal force","Tension","Friction"],answer:1},
{q:"A rope pulls upward on a hanging object. What force is this?",choices:["Tension","Normal force","Friction","Weight"],answer:0},
{q:"A 40 kg object hangs still. What is the tension in the rope?",choices:["40 N","392 N","4000 N","9.8 N"],answer:1},
{q:"A surface has N = 300 N and μ = 0.4. What is friction?",choices:["75 N","120 N","300 N","700 N"],answer:1},
{q:"A 150 N force acts at 30°. Fx is closest to what?",choices:["75 N","130 N","150 N","30 N"],answer:1},
{q:"A 150 N force acts at 30°. Fy is what?",choices:["75 N","130 N","150 N","30 N"],answer:0},
{q:"A box has 80 N right and 80 N left. It also has 200 N up and 200 N down. Is it in translational equilibrium?",choices:["Yes","No","Only horizontally","Only vertically"],answer:0},
{q:"A box has balanced horizontal forces but unbalanced vertical forces. Is it in full translational equilibrium?",choices:["Yes","No","Only if friction is zero","Only if mass is large"],answer:1},
{q:"Why do engineers use equilibrium equations?",choices:["To make structures stable and safe","To increase acceleration","To remove gravity","To avoid using forces"],answer:0}
],
[
{q:"What does no acceleration tell you about the net force?",choices:["It is zero","It is maximum","It equals mass","It equals friction"],answer:0},
{q:"A 50 kg object has weight closest to what?",choices:["50 N","490 N","5000 N","98 N"],answer:1},
{q:"A 50 kg object rests on flat ground. Normal force is closest to what?",choices:["50 N","490 N","5000 N","0 N"],answer:1},
{q:"A 250 N normal force and μ = 0.2 produce what friction force?",choices:["25 N","50 N","125 N","250 N"],answer:1},
{q:"A 100 N force at 45° has Fx closest to what?",choices:["50 N","70.7 N","100 N","141 N"],answer:1},
{q:"A 100 N force at 45° has Fy closest to what?",choices:["50 N","70.7 N","100 N","141 N"],answer:1},
{q:"If Fx components are 70 N right and 70 N left, what is ΣFx?",choices:["140 N","70 N","0 N","35 N"],answer:2},
{q:"If upward forces total 500 N and downward forces total 500 N, what is ΣFy?",choices:["1000 N","500 N","0 N","250 N"],answer:2},
{q:"A force at an angle must be split into components because forces have what?",choices:["Direction","Color","Temperature","Volume"],answer:0},
{q:"If ΣFx = 0 but ΣFy = -40 N, what will happen?",choices:["No acceleration","Vertical acceleration","Horizontal equilibrium only means full equilibrium","The object has no weight"],answer:1}
],
[
{q:"Which pair correctly describes weight and normal force for a box on a table?",choices:["Weight up, normal down","Weight down, normal up","Both down","Both sideways"],answer:1},
{q:"A 15 kg box rests on a table. Weight is closest to what?",choices:["15 N","147 N","1500 N","30 N"],answer:1},
{q:"For the same 15 kg box, normal force is closest to what?",choices:["15 N","147 N","1500 N","0 N"],answer:1},
{q:"A 300 N force acts at 60°. Fx equals what?",choices:["150 N","260 N","300 N","60 N"],answer:0},
{q:"A 300 N force acts at 60°. Fy is closest to what?",choices:["150 N","260 N","300 N","60 N"],answer:1},
{q:"A crate has μ = 0.3 and N = 600 N. What is friction?",choices:["180 N","200 N","600 N","0.3 N"],answer:0},
{q:"A 180 N pull right is resisted by 180 N friction left. What is ΣFx?",choices:["360 N","180 N","0 N","90 N"],answer:2},
{q:"If an object remains at rest, what can you usually conclude about its net force?",choices:["Net force is zero","Net force is increasing","Only weight acts","No forces act"],answer:0},
{q:"If an object moves at constant velocity, what can you conclude from the lesson?",choices:["Net force is zero","Net force is large","It has no mass","Gravity is off"],answer:0},
{q:"A hanging object has W = 250 N. If it is motionless, what is T?",choices:["0 N","125 N","250 N","500 N"],answer:2}
],
[
{q:"What is translational equilibrium?",choices:["No movement in any direction","No rotation only","Only vertical motion","Only friction"],answer:0},
{q:"A 60 kg object has weight closest to what?",choices:["60 N","588 N","6000 N","294 N"],answer:1},
{q:"A 60 kg object rests on level ground. Normal force is closest to what?",choices:["60 N","588 N","6000 N","0 N"],answer:1},
{q:"A 400 N object is supported by two equal vertical ropes. Tension in each rope?",choices:["100 N","200 N","400 N","800 N"],answer:1},
{q:"A 120 N force at 30°. Fx is closest to what?",choices:["60 N","104 N","120 N","30 N"],answer:1},
{q:"A 120 N force at 30°. Fy equals what?",choices:["60 N","104 N","120 N","30 N"],answer:0},
{q:"A box has 100 N right, 40 N right, and 140 N left. What is ΣFx?",choices:["280 N","140 N right","0 N","40 N left"],answer:2},
{q:"A box has 500 N upward normal and 490 N downward weight. What is ΣFy?",choices:["990 N up","10 N up","10 N down","0 N"],answer:1},
{q:"Based on the previous question, is the box in vertical equilibrium?",choices:["Yes","No","Only if friction exists","Only if tension exists"],answer:1},
{q:"Why would an unbalanced force be dangerous in a structure?",choices:["It can cause acceleration or failure","It makes force disappear","It removes mass","It cancels gravity"],answer:0}
],
[
{q:"Which equation comes from balancing horizontal forces?",choices:["ΣFx = 0","ΣFy = 0","F = μN","W = mg"],answer:0},
{q:"Which equation comes from balancing vertical forces?",choices:["ΣFx = 0","ΣFy = 0","F = μN","Fx = Fcosθ"],answer:1},
{q:"A 75 kg machine sits on a floor. Weight is closest to what?",choices:["75 N","735 N","7500 N","367 N"],answer:1},
{q:"If no other vertical forces act, what is the normal force on the machine?",choices:["75 N","735 N","7500 N","0 N"],answer:1},
{q:"A 200 N force at 45°. Fx is closest to what?",choices:["100 N","141 N","200 N","282 N"],answer:1},
{q:"A 200 N force at 45°. Fy is closest to what?",choices:["100 N","141 N","200 N","282 N"],answer:1},
{q:"The object has 141 N right from one force and 141 N left from another. What is ΣFx?",choices:["282 N","141 N","0 N","70.5 N"],answer:2},
{q:"A box has N = 735 N and μ = 0.2. What is friction?",choices:["147 N","735 N","3675 N","0.2 N"],answer:0},
{q:"A 147 N pull right is opposed by 147 N friction left. Is ΣFx = 0?",choices:["Yes","No","Only vertically","Only if mass is zero"],answer:0},
{q:"Which statement best matches equilibrium?",choices:["Forces are balanced in each direction","Only one force exists","The object must be weightless","Friction must be absent"],answer:0}
],
[
{q:"What is the first step in many statics problems from this lesson?",choices:["Identify forces","Ignore direction","Remove gravity","Guess the answer"],answer:0},
{q:"A 100 kg object has weight closest to what?",choices:["100 N","980 N","1000 kg","9.8 N"],answer:1},
{q:"A normal force of 980 N balances what force?",choices:["Weight","Tension","Friction","Horizontal push"],answer:0},
{q:"A 250 N angled force has Fx = 216.5 N and Fy = 125 N. Which direction does Fx act in?",choices:["Horizontal","Vertical","Downward only","No direction"],answer:0},
{q:"For the same force, which component affects ΣFy?",choices:["Fx","Fy","Mass only","Friction only"],answer:1},
{q:"If friction is 90 N left, what horizontal pull right is needed for equilibrium?",choices:["45 N","90 N","180 N","0 N"],answer:1},
{q:"If weight is 600 N downward, what upward normal force is needed for vertical equilibrium?",choices:["300 N","600 N","1200 N","0 N"],answer:1},
{q:"A rope pulls upward with 400 N while weight pulls downward with 400 N. What is ΣFy?",choices:["800 N","400 N","0 N","200 N"],answer:2},
{q:"A horizontal push of 220 N right is balanced by friction. What is friction?",choices:["220 N left","220 N right","0 N","110 N left"],answer:0},
{q:"If both directions have balanced forces, what happens to acceleration?",choices:["It is zero","It increases","It becomes gravity","It becomes friction"],answer:0}
],
[
{q:"A free object has forces of 100 N right, 60 N left, and 40 N left. What is ΣFx?",choices:["200 N","0 N","40 N right","40 N left"],answer:1},
{q:"A 35 kg sign hangs from one vertical cable. Weight is closest to what?",choices:["35 N","343 N","3500 N","171 N"],answer:1},
{q:"If the 35 kg sign is motionless, what is tension?",choices:["35 N","343 N","3500 N","0 N"],answer:1},
{q:"A 500 N crate has μ = 0.25. What friction force can resist motion?",choices:["125 N","250 N","500 N","2000 N"],answer:0},
{q:"A 125 N pull right is balanced by 125 N friction left. What is ΣFx?",choices:["250 N","125 N right","0 N","125 N left"],answer:2},
{q:"A 180 N force at 60° has Fx = 90 N and Fy = 155.9 N. Which component helps balance weight?",choices:["Fx","Fy","Neither","Mass"],answer:1},
{q:"If vertical forces are 155.9 N up and 155.9 N down, what is ΣFy?",choices:["311.8 N","155.9 N","0 N","90 N"],answer:2},
{q:"If horizontal forces are 90 N right and 70 N left, is horizontal equilibrium satisfied?",choices:["Yes","No","Only if vertical forces balance","Only if weight is zero"],answer:1},
{q:"What extra leftward force is needed to balance 90 N right and 70 N left?",choices:["20 N left","20 N right","160 N left","0 N"],answer:0},
{q:"Which final condition proves translational equilibrium?",choices:["ΣFx = 0 and ΣFy = 0","Only ΣFx = 0","Only weight exists","Friction is greater than normal"],answer:0}
]
];

function openRandomQuizSet() {
  const panel = document.getElementById("quiz-panel");
  const title = document.getElementById("quiz-set-title");
  const container = document.getElementById("quiz-container");

  container.innerHTML = "";

  const randomIndex = Math.floor(Math.random() * quizSets.length);
  const selectedSet = quizSets[randomIndex];

  title.textContent = "Random Quiz Set " + (randomIndex + 1);

  selectedSet.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("quiz-question");

    let choicesHTML = "";

    item.choices.forEach((choice, choiceIndex) => {
      choicesHTML += `
        <label class="answer-choice">
          <input type="radio" name="q${index}" value="${choiceIndex}">
          ${choice}
        </label>
      `;
    });

    div.innerHTML = `
      <p><strong>Q${index + 1}:</strong> ${item.q}</p>
      ${choicesHTML}
      <button onclick="checkAnswer(${index}, ${item.answer}, this)">Check Answer</button>
      <p class="answer-result"></p>
    `;

    container.appendChild(div);
  });

  panel.classList.add("open");
}

function checkAnswer(questionIndex, correctAnswer, button) {
  const selected = document.querySelector(`input[name="q${questionIndex}"]:checked`);
  const result = button.nextElementSibling;

  if (!selected) {
    result.textContent = "Choose an answer first.";
    return;
  }

  if (Number(selected.value) === correctAnswer) {
    result.textContent = "Correct!";
  } else {
    result.textContent = "Incorrect. Try again or review the formula.";
  }
}
</script>