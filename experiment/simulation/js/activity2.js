function activity2() {
    internal_calculation2();
    let btn = (document.getElementById('act1-btn3'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    maindiv.innerHTML += `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act2-div'>
      <h3>Activity 2</h3>
      <br>
      <p style="text-align:left;">
         A pipe of diameter ${d1}cm and ${d2}cm at section 1 and section 2 respectively.
         <br>
         The velocity of water at section 1 is ${v1}m/s. Pressure at section 1 is ${p1}N/cm<sup>2</sup>.
         <br>
         Find the velocity head at section 1 and section 2. Find pressure at section 2.
      </p>
      <br>
      <img width="30%" src="./images/fig1.png" alt="">
      <br>
      <br>
      <p style="text-align:left;">
         Calculate area
      </p>
      <div id="act2-area-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$
                  A_1 = \\frac{\π}{4}D_1^2 = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-a1-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup></span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$
                  A_2 = \\frac{\π}{4}D_2^2 = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-a2-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_area_a2();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
}
function internal_calculation2() {
    d1 = random1(18, 26);
    d2 = random1(10, 16);
    v1 = random1(3, 6);
    p1 = random1(25, 31);
    A1 = parseFloat(((Math.PI / 4) * Math.pow((d1 / 100), 2)).toFixed(3));
    A2 = parseFloat(((Math.PI / 4) * Math.pow((d2 / 100), 2)).toFixed(3));
    v2 = parseFloat(((A1 * v1) / A2).toFixed(3));
    vh1 = parseFloat((Math.pow(v1, 2) / (2 * g)).toFixed(3));
    vh2 = parseFloat((Math.pow(v2, 2) / (2 * g)).toFixed(3));
    //p1 in meter
    let p1_m = p1 * Math.pow(10, 4);
    p2_m_a2 = parseFloat(((p1_m / (1000 * g) + vh1 - vh2) * 1000 * g).toFixed(1));
    p2_cm_a2 = parseFloat((p2_m_a2 / Math.pow(10, 4)).toFixed(5));
    console.log(p2_m_a2);
    console.log(p2_cm_a2);
}
function verify_area_a2() {
    let a1_inp = (document.getElementById('act2-a1-inp'));
    let a2_inp = (document.getElementById('act2-a2-inp'));
    console.log(A1, A2);
    if (!verify_values(parseFloat(a1_inp.value), A1)) {
        a1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        a1_inp.style.border = '1px solid #ced4da';
        a1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(a2_inp.value), A2)) {
        a2_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        a2_inp.style.border = '1px solid #ced4da';
        a2_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-area-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            A_1 = \\frac{\π}{4}D_1^2 = ${A1}m^2
         $$
         $$
            A_2 = \\frac{\π}{4}D_2^2 = ${A2}m^2
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn1" onclick='load_v2_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_v2_div_a2() {
    let btn = (document.getElementById('act2-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      using continuity equation
   </p>
   <p>
      $$
         A_1V_1 = A_2V_2
      $$
   </p>
   <div id="act2-v2-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-4">
            $$
               \∴ V_2 = \\frac{A_1V_1}{A_2} =  
            $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act2-v2-inp' class='form-control fs-16px' /> <span style="display:contents;">m/s</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_v2_a2();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_v2_a2() {
    let inp = (document.getElementById('act2-v2-inp'));
    console.log(v2);
    if (!verify_values(parseFloat(inp.value), v2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-v2-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            \∴ V_2 = \\frac{A_1V_1}{A_2} = ${v2}m/s
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn2" onclick='load_vh1_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_vh1_div_a2() {
    let btn = (document.getElementById('act2-btn2'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      velocity head at section 1
   </p>
   <div id="act2-vh1-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-sm-2">
            $$
               \\frac{V_1^2}{2g} =   
            $$
         </div>
         <div class="row justify-content-center col-sm-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act2-vh1-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_vh1_a2();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_vh1_a2() {
    let inp = (document.getElementById('act2-vh1-inp'));
    console.log(vh1);
    if (!verify_values(parseFloat(inp.value), vh1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-vh1-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            \\frac{V_1^2}{2g} = ${vh1}m
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn3" onclick='load_vh2_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_vh2_div_a2() {
    let btn = (document.getElementById('act2-btn3'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      velocity head at section 2
   </p>
   <div id="act2-vh2-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-sm-2">
            $$
               \\frac{V_2^2}{2g} =   
            $$
         </div>
         <div class="row justify-content-center col-sm-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act2-vh2-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_vh2_a2();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_vh2_a2() {
    let inp = (document.getElementById('act2-vh2-inp'));
    console.log(vh2);
    if (!verify_values(parseFloat(inp.value), vh2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-vh2-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            \\frac{V_2^2}{2g} = ${vh2}m
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn4" onclick='load_p2_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_p2_div_a2() {
    let btn = (document.getElementById('act2-btn4'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      using Bernoulli's equation
   </p>
   <p>
      $$
         \\frac{P_1}{\ρg} + \\frac{V_1^2}{2g} + z_1 = \\frac{P_2}{\ρg} + \\frac{V_2^2}{2g} + z_2 \\quad \\quad \\quad (z_1 = z_2)
      $$

      $$
         \∴ \\frac{P_2}{\ρg} = \\frac{P_1}{\ρg} + \\frac{V_1^2}{2g} - \\frac{V_2^2}{2g}
      $$
   </p>
   <div id="act2-p2-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-lg-5">
            $$
               \∴ P_2 = \\left[\\frac{P_1}{\ρg} + \\frac{V_1^2}{2g} - \\frac{V_2^2}{2g} \\right] \ρg =
            $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act2-p2-m-inp' class='form-control fs-16px' /> <span style="display:contents;">N/m<sup>2</sup></span>
         </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-lg-5">
            $$
               \∴ P_2 = \\left[\\frac{P_1}{\ρg} + \\frac{V_1^2}{2g} - \\frac{V_2^2}{2g} \\right] \ρg =
            $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act2-p2-cm-inp' class='form-control fs-16px' /> <span style="display:contents;">N/cm<sup>2</sup></span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_p2_a2();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_p2_a2() {
    let p2_m_inp = (document.getElementById('act2-p2-m-inp'));
    let p2_cm_inp = (document.getElementById('act2-p2-cm-inp'));
    console.log(p2_m_a2, p2_cm_a2);
    if (!verify_values(parseFloat(p2_m_inp.value), p2_m_a2)) {
        p2_m_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        p2_m_inp.style.border = '1px solid #ced4da';
        p2_m_inp.disabled = true;
    }
    if (!verify_values(parseFloat(p2_cm_inp.value), p2_cm_a2)) {
        p2_cm_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        p2_cm_inp.style.border = '1px solid #ced4da';
        p2_cm_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-p2-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            \∴ P_2 = \\left[\\frac{P_1}{\ρg} + \\frac{V_1^2}{2g} - \\frac{V_2^2}{2g} \\right] \ρg = ${p2_m_a2} N/m^2
         $$
         $$
            \∴ P_2 = \\left[\\frac{P_1}{\ρg} + \\frac{V_1^2}{2g} - \\frac{V_2^2}{2g} \\right] \ρg = ${p2_cm_a2} N/cm^2
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn5" onclick='activity3();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
// activity2();
//# sourceMappingURL=activity2.js.map