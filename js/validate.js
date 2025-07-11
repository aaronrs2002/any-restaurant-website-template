function Validate(fieldArr) {

    [].forEach.call(document.querySelectorAll(".error"), (e) => {
        e.classList.remove("error");
    });

    fieldValue = "default";


    for (let i = 0; i < fieldArr.length; i++) {
        console.log("field value: " + document.querySelector("[name='" + fieldArr[i] + "']").value)
        try {

            if (document.querySelector("[name='" + fieldArr[i] + "']").value !== "") {
                fieldValue = document.querySelector("[name = '" + fieldArr[i] + "']").value;
            } else {
                document.querySelector("[name='" + fieldArr[i] + "']").classList.add("error");
                globalAlert("alert-danger", "Field: " + fieldArr[i] + " is empty.");
                return false;
            }

        } catch (error) {

            console.log("error: " + error)

        }

    }

}


