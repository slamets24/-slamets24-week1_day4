function getData() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value


if(name == ""){
    return alert("Nama Harus Diisi")
}else if(email == ""){
    return alert("Email Harus Diisi")
}else if(phone == ""){
    return alert("phone Harus Diisi")
}else if(subject == ""){
    return alert("Subject Harus Diisi")
} else if (message == ""){
    return alert("Message Harus Diisi")
}

const destination = "slametseptiawan6@gmail.com"
let a = document.createElement("a")
a.href = `mailto:${destination}?subject=${subject}&body= Hallo nama saya ${name} , saya ingin ${message}, bisakah anda menghubungi saya di ${phone}`
a.click()

let data = {
    nama: name,
    email: email,
    telp: phone,
    subject: subject,
    pesan: message,
}

console.log(data)

}



// Logic Posting Myproject


let projects = []

function getProject(event) {
    event.preventDefault()

    let pName = document.getElementById("project-name").value
    let startDate = document.getElementById("startDate").value
    let endDate = document.getElementById("endDate").value
    let description = document.getElementById("description").value
    let node = document.getElementById("nodeBox").checked
    let next = document.getElementById("nextBox").checked
    let react = document.getElementById("reactBox").checked
    let typeScript = document.getElementById("typeScriptBox").checked
    let image = document.getElementById("image").files


    image = URL.createObjectURL(image[0]);

    if (pName == "") {
        return alert("Name Project Tidak Boleh Kosong")
    } else if (startDate == "") {
        return alert("Start Tidak Boleh Kosong")
    } else if (endDate == "") {
        return alert("End Tidak Boleh Kosong")
    } else if (description == "") {
        return alert("description Tidak Boleh Kosong")
    } else if (image == "") {
        return alert("image Tidak Boleh Kosong")
    }

    let project = {
        pName,
        startDate,
        endDate,
        description,
        node,
        next,
        react,
        typeScript,
        image
    }

    projects.push(project)
    console.log(projects)
    renderProject()
}


function renderProject() {
    document.getElementById("projects").innerHTML = ""
    for (let i = 0; i < projects.length; i++) {
        document.getElementById("projects").innerHTML += `
        <div class="cardBodyProject">
            <div class="img">
                <img src="${projects[i].image}" alt="">
            </div>
            <div class="cardDesripsion">
                <a id="link" href="detailProject.html">
                    <h3>${projects[i].pName}</h3>
                </a>
                <span>durasi : 3 bulan</span>
                <p>${projects[i].description}</p>
            </div>
            <div class="imgtech">
                ${projects[i].next ? '<img src="asset/images/next.png" alt="">':'' }
                ${projects[i].node ? '<img src="asset/images/node.png" alt="">':'' }
                ${projects[i].react ? '<img src="asset/images/react.png" alt="">':'' }
                ${projects[i].typeScript ? '<img src="asset/images/typescript.png" alt="">':'' }     
            </div>
            <div class="control-button" style="margin: 10px;">
                <a href="">Edit</a>
                <a href="">Delete</a>
            </div>
        </div>
        `
    }
}