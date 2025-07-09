function Validate(fieldArr) {

    [].forEach.call(document.querySelectorAll(".error"), (e) => {
        e.classList.remove("error");
    });

    fieldValue = "default";
    console.log("field value: " + document.querySelector("[name='" + fieldArr + "']").value)

    for (let i = 0; i < fieldArr.length; i++) {

        try {

            if (document.querySelector("[name='" + fieldArr + "']").value !== "") {
                fieldValue = document.querySelector("[name = '" + fieldArr + "']").value;
            } else {
                document.querySelector("[name='" + fieldArr + "']").classList.add("error");
                globalAlert("alert-danger", "Field: " + fieldArr[i] + " is empty.");
                return false;
            }

        } catch (error) {

            console.log("error: " + error)

        }

    }

}


