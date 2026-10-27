const $ = id => document.getElementById(id);
$("f").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = $("name").value.trim();
    let email = $("Email").value.trim();
    let dpt = $("dpt").value;
    $("e1").innerText = "";
    $("e2").innerText = "";
    $("E3").innerText = "";
    $("MSG").innerText = "";
    let ok = true;
    if(name === "") {
        $("e1").innerText = "Name is required";
        ok = false;
    }
    if(email === "") {
        $("e2").innerText = "Email is required";
        ok = false;
    } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        $("e2").innerText = "Enter a valid email";
        ok = false;
    }
    if(dpt === "") {
        $("E3").innerText = "Please select department";
        ok = false;
    }
    if(ok) {
        $("MSG").innerText = "Student details submitted successfully!";
    }
});
