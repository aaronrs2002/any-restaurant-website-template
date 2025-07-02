function Validate(fieldArr) {

    [].forEach.call(document.querySelector(".error"), (e) => {
        e.classList.remove("error");
    });

    fieldValue = "";

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


