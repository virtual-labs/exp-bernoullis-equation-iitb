let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Bernoulli's Equation</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function internal_calculation1() {
    d_a1 = random1(4, 7);
    p_a1 = random1(25, 31);
    v_a1 = parseFloat(random(2, 4).toFixed(1));
    ph_a1 = parseFloat(((p_a1 * Math.pow(10, 4)) / (1000 * g)).toFixed(3));
    kh_a1 = parseFloat((Math.pow(v_a1, 2) / (2 * g)).toFixed(3));
    th_a1 = parseFloat((ph_a1 + kh_a1).toFixed(3));
    console.log(d_a1);
    console.log(p_a1);
    console.log(v_a1);
}
function start_act1() {
    let btn = (document.getElementById('temp-btn-1'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act1-div'>
      <h3>Activity 1</h3>
      <h5>Pressure head, Kinetic head and Total head</h5>
      <br>
      <p style="text-align:left;">
         Find pressure head, kinetic head and total head of water flowing through pipe.
         <br>
         Pipe diameter is ${d_a1}cm under pressure of ${p_a1}N/cm<sup>2</sup> with a velocity if ${v_a1}m/s.
      </p>
      <br>
      <p style="text-align:left;">
         Calculate pressure head
      </p>
      <div id="act1-ph-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$
                  Pressure \\ head =  \\frac{P}{\ρg} =
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-ph-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_ph_a1();'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function verify_ph_a1() {
    let inp = (document.getElementById('act1-ph-inp'));
    console.log(ph_a1);
    if (!verify_values(parseFloat(inp.value), ph_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-ph-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            Pressure \\ head =  \\frac{P}{\ρg} = ${ph_a1}m
         $$
         
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn1" onclick='load_kh_div_a1();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_kh_div_a1() {
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left">
      Calculate kinetic head 
   </p>
   <div id="act1-kh-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-4">
            $$
               Kinetic \\ head = \\frac{v^2}{2g} = 
            $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-kh-inp' class='form-control fs-16px' /> <span style="display:contents;">m </span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_kh_a1();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_kh_a1() {
    let inp = (document.getElementById('act1-kh-inp'));
    console.log(kh_a1);
    if (!verify_values(parseFloat(inp.value), kh_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-kh-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      $$
         Kinetic \\ head = \\frac{v^2}{2g} = ${kh_a1}m
      $$
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act1-btn2" onclick='load_th_div_a1();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_th_div_a1() {
    let btn = (document.getElementById('act1-btn2'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left">
      Calculate total head
   </p>
   <div id="act1-th-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-4">
            $$
               total \\ head = \\frac{P}{\ρg} + \\frac{v^2}{2g} = 
            $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-th-inp' class='form-control fs-16px' /> <span style="display:contents;">m </span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_th_a1();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_th_a1() {
    let inp = (document.getElementById('act1-th-inp'));
    console.log(th_a1);
    if (!verify_values(parseFloat(inp.value), th_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-th-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            total \\ head = \\frac{P}{\ρg} + \\frac{v^2}{2g} = ${th_a1}m
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn3" onclick='activity2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
activity1();
//# sourceMappingURL=activity1.js.map