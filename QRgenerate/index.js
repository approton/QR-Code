import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
.prompt([
    {"message": "Type in your URL", 
    "name": "URL",
}
])

.then((answer) => {
    const url=answer.URL;
    var qrCode=qr.image(url);
    qrCode.pipe(fs.createWriteStream("qr_image.png"));
    //console.log(url);

    fs.writeFile("URL.txt", url, (err) => {
        if(err) throw err;
        console.log("the File has been Saved");
    })
})

.catch((error) =>{
    if(error.isTtyError){
        //Nothing is Wrong
    }
    else{
        // console.log("something went Wrong");
    }
})